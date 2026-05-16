import { Injectable } from '@angular/core';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf.mjs';
import type { Question } from '../models';

GlobalWorkerOptions.workerSrc = 'pdf.worker.min.mjs';

@Injectable({ providedIn: 'root' })
export class PdfQuizService {
  private generatedQuestions: Question[] | null = null;

  async extractTextFromPdf(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await getDocument({
      data: arrayBuffer,
      cMapUrl: 'cmaps/',
      cMapPacked: true,
    }).promise;
    let fullText = '';

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const pageText = content.items.map((item: any) => item.str).join(' ');
      fullText += pageText + ' ';
    }

    return fullText.trim();
  }

  generateQuestions(text: string): Question[] {
    const sentences = this.splitSentences(text).filter(s => s.length > 30);
    if (sentences.length < 3) {
      return this.generateFallback(text);
    }

    const sorted = [...sentences].sort((a, b) => b.length - a.length);
    const pool = sorted.slice(0, Math.min(20, sorted.length));
    const shuffled = pool.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);

    const allWords = this.extractKeyWords(text);

    const questions: Question[] = selected.map((sentence, i) => {
      const words = sentence.split(/\s+/).filter(w => w.length > 3);
      const keyWords = words.filter(w => allWords.includes(this.normalize(w)));

      let blankWord: string;
      if (keyWords.length > 0) {
        blankWord = keyWords[Math.floor(Math.random() * keyWords.length)];
      } else {
        blankWord = words[Math.floor(Math.random() * words.length)] || sentence;
      }

      const questionText = sentence.replace(
        new RegExp(this.escapeRegex(blankWord), 'i'),
        '____________________'
      );

      const correctAnswer = blankWord;
      const distractors = this.pickDistractors(correctAnswer, allWords, 3);
      const options = this.shuffleOptions([correctAnswer, ...distractors]);
      const correctIndex = options.indexOf(correctAnswer);
      const correctLetter = String.fromCharCode(97 + correctIndex);

      return {
        id: -(i + 1),
        questionText: questionText || sentence,
        optionA: options[0] || '',
        optionB: options[1] || '',
        optionC: options[2] || '',
        optionD: options[3] || '',
        correctOption: correctLetter,
        explanation: `The correct answer is "${correctAnswer}". This comes from the document content.`,
      };
    });

    return questions;
  }

  savePdfQuiz(questions: Question[]): void {
    this.generatedQuestions = questions;
  }

  getPdfQuiz(): Question[] | null {
    return this.generatedQuestions;
  }

  private splitSentences(text: string): string[] {
    const raw = text
      .replace(/\s+/g, ' ')
      .replace(/([.!?])\s*/g, '$1\n')
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 10);
    return raw;
  }

  private extractKeyWords(text: string): string[] {
    const words = text.match(/\b[A-Za-z]\w{3,}\b/g) || [];
    const freq = new Map<string, number>();
    words.forEach(w => {
      const n = this.normalize(w);
      freq.set(n, (freq.get(n) || 0) + 1);
    });

    const minFreq = words.length > 100 ? 2 : 1;
    return Array.from(freq.entries())
      .filter(([, count]) => count >= minFreq)
      .map(([word]) => word)
      .sort((a, b) => b.length - a.length)
      .slice(0, 50);
  }

  private pickDistractors(correct: string, pool: string[], count: number): string[] {
    const candidates = pool.filter(w =>
      this.normalize(w) !== this.normalize(correct) &&
      Math.abs(w.length - correct.length) <= 4
    );
    const shuffled = candidates.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  private shuffleOptions(options: string[]): string[] {
    const arr = [...options];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  private normalize(w: string): string {
    return w.toLowerCase().replace(/[^a-z]/g, '');
  }

  private escapeRegex(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  private generateFallback(text: string): Question[] {
    const words = text.match(/\b\w{4,}\b/g) || [];
    const unique = [...new Set(words.map(w => w.toLowerCase()))];
    const shuffled = unique.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(10, shuffled.length));

    return selected.map((word, i) => {
      const sentence = text.substring(
        Math.max(0, text.toLowerCase().indexOf(word) - 20),
        text.toLowerCase().indexOf(word) + word.length + 30
      ).trim() || word;

      const distractors = shuffled
        .filter(w => w !== word)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const options = this.shuffleOptions([word, ...distractors]);
      const correctIndex = options.indexOf(word);
      const correctLetter = String.fromCharCode(97 + correctIndex);

      return {
        id: -(i + 1),
        questionText: `Based on the document, what word completes this context: "${sentence.replace(new RegExp(word, 'i'), '______')}"?`,
        optionA: options[0] || '',
        optionB: options[1] || '',
        optionC: options[2] || '',
        optionD: options[3] || '',
        correctOption: correctLetter,
        explanation: `The correct answer is "${word}".`,
      };
    });
  }
}
