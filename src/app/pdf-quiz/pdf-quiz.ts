import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { PdfQuizService } from '../services/pdf-quiz.service';
import { TranslateService } from '../services/translate.service';
import type { Question } from '../models';

@Component({
  selector: 'app-pdf-quiz',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, RouterLink],
  template: `
    <section class="pdf-quiz-section">
      <div class="pdf-quiz-container">

        <div *ngIf="state === 'upload'" class="pdf-upload-area">
          <div class="upload-icon">📄</div>
          <h2>{{ t('pdf_quiz.upload_title') }}</h2>
          <p class="upload-subtitle">{{ t('pdf_quiz.upload_subtitle') }}</p>
          <div class="upload-actions">
            <input #fileInput type="file" accept=".pdf" hidden (change)="onFileSelected($event)" />
            <button class="btn btn-pdf-upload" (click)="fileInput.click()" [disabled]="loading">
              <span class="btn-icon">📤</span>
              <span class="btn-text">{{ loading ? t('pdf_quiz.loading') : t('pdf_quiz.select_pdf') }}</span>
            </button>
            <a routerLink="/dashboard" class="btn btn-secondary">{{ t('result.back') }}</a>
          </div>
          <div *ngIf="error" class="alert alert-error">{{ error }}</div>
        </div>

        <div *ngIf="state === 'processing'" class="pdf-processing">
          <div class="processing-spinner"></div>
          <p>{{ t('pdf_quiz.processing') }}</p>
        </div>

        <div *ngIf="state === 'quiz' && questions.length > 0" class="pdf-quiz-inner">
          <div class="quiz-header">
            <div class="quiz-meta">
              <span class="quiz-level">{{ t('pdf_quiz.pdf_quiz') }}</span>
              <span class="quiz-count">10 {{ t('quiz.questions') }}</span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar" [style.width.%]="progressPercent"></div>
            </div>
            <span class="progress-text">{{ t('quiz.question_of') }} {{ currentIndex + 1 }} {{ t('quiz.of') }} 10</span>
          </div>

          <div class="question-card">
            <div class="question-text">
              <span class="q-number">Q{{ currentIndex + 1 }}.</span>
              {{ currentQuestion?.questionText }}
            </div>
            <div class="options-grid">
              <label *ngFor="let opt of optionKeys" class="option-item"
                [class.selected]="answers[currentQuestion!.id] === opt">
                <input type="radio" [name]="'q' + currentQuestion!.id"
                  [value]="opt" [checked]="answers[currentQuestion!.id] === opt"
                  (change)="selectAnswer(opt)">
                <span class="option-label">{{ opt }})</span>
                <span class="option-text">{{ getOptionText(opt) }}</span>
              </label>
            </div>
          </div>

          <div class="quiz-nav">
            <button *ngIf="currentIndex > 0" class="btn btn-nav" (click)="goTo(currentIndex - 1)">{{ t('quiz.prev') }}</button>
            <button *ngIf="currentIndex < 9" class="btn btn-nav" (click)="goTo(currentIndex + 1)">{{ t('quiz.next') }}</button>
            <button *ngIf="currentIndex === 9" class="btn btn-submit" (click)="submit()">{{ t('quiz.submit') }}</button>
          </div>
        </div>

        <div *ngIf="state === 'result'" class="pdf-result">
          <div class="result-card" [ngClass]="resultPassed ? 'result-pass' : 'result-fail'">
            <div class="result-icon">{{ resultPassed ? '🎉' : '😞' }}</div>
            <h1 class="result-title">{{ resultPassed ? t('result.congrats') : t('result.not_quite') }}</h1>
            <p class="result-subtitle">{{ t('pdf_quiz.result_subtitle') }}</p>

            <div class="score-display">
              <div class="score-circle" [ngClass]="resultPassed ? 'score-pass' : 'score-fail'">
                <span class="score-value">{{ resultScore }}/{{ resultTotal }}</span>
                <span class="score-percent">{{ resultPercent }}%</span>
              </div>
            </div>

            <div class="result-actions">
              <button class="btn btn-pdf-upload" (click)="reset()">
                <span class="btn-icon">📄</span>
                <span class="btn-text">{{ t('pdf_quiz.new_quiz') }}</span>
              </button>
              <a routerLink="/dashboard" class="btn btn-secondary">{{ t('result.back') }}</a>
            </div>
          </div>

          <div class="pdf-feedback" *ngIf="resultMistakes.length > 0">
            <div class="ai-header">
              <div class="ai-bot-icon">🤖</div>
              <div class="ai-header-text">
                <h2>{{ t('result.ai_title') }}</h2>
                <p>{{ t('result.ai_subtitle') }}</p>
              </div>
            </div>

            <div class="mistake-list">
              <div class="mistake-item" *ngFor="let m of resultMistakes">
                <div class="mistake-question">
                  <span class="q-num">Q{{ m.id }}:</span> {{ m.question }}
                </div>
                <div class="mistake-details">
                  <div class="your-answer fail">
                    <strong>{{ t('result.your_answer') }}:</strong> {{ m.userAnswer }}
                  </div>
                  <div class="correct-answer pass">
                    <strong>{{ t('result.correct_answer') }}:</strong> {{ m.correctAnswer }}
                  </div>
                </div>
                <div class="ai-explanation">
                  <div class="exp-icon">💡</div>
                  <div class="exp-text">
                    <strong>{{ t('result.ai_explanation') }}:</strong> {{ m.explanation }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class PdfQuizComponent {
  state: 'upload' | 'processing' | 'quiz' | 'result' = 'upload';
  questions: Question[] = [];
  currentIndex = 0;
  answers: Record<number, string> = {};
  loading = false;
  error = '';
  optionKeys = ['a', 'b', 'c', 'd'];

  resultScore = 0;
  resultTotal = 10;
  resultPercent = 0;
  resultPassed = false;
  resultMistakes: Array<{ id: number; question: string; userAnswer: string; correctAnswer: string; explanation: string }> = [];

  constructor(
    private pdfQuiz: PdfQuizService,
    public translate: TranslateService
  ) {
    const existing = this.pdfQuiz.getPdfQuiz();
    if (existing && existing.length > 0) {
      this.questions = existing;
      this.state = 'quiz';
    }
  }

  t(key: string): string {
    return this.translate.t(key);
  }

  get currentQuestion(): Question | undefined {
    return this.questions[this.currentIndex];
  }

  get progressPercent(): number {
    return ((this.currentIndex + 1) / 10) * 100;
  }

  getOptionText(key: string): string {
    const q = this.currentQuestion;
    if (!q) return '';
    switch (key) {
      case 'a': return q.optionA;
      case 'b': return q.optionB;
      case 'c': return q.optionC;
      case 'd': return q.optionD;
      default: return '';
    }
  }

  selectAnswer(opt: string) {
    const q = this.currentQuestion;
    if (q) {
      this.answers[q.id] = opt;
    }
  }

  goTo(index: number) {
    if (index >= 0 && index <= 9) {
      this.currentIndex = index;
    }
  }

  async onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.error = '';
    this.loading = true;
    this.state = 'processing';

    try {
      const text = await this.pdfQuiz.extractTextFromPdf(file);

      if (!text || text.length < 20) {
        throw new Error(this.t('pdf_quiz.error_no_text'));
      }

      this.questions = this.pdfQuiz.generateQuestions(text);
      this.pdfQuiz.savePdfQuiz(this.questions);
      this.answers = {};
      this.currentIndex = 0;
      this.state = 'quiz';
    } catch (err: any) {
      this.error = err.message || this.t('pdf_quiz.error_generic');
      this.state = 'upload';
    } finally {
      this.loading = false;
    }
  }

  submit() {
    const answered = Object.keys(this.answers).length;
    if (answered < 10) {
      if (!confirm(this.t('pdf_quiz.confirm_submit'))) return;
    }

    let score = 0;
    this.questions.forEach(q => {
      if (this.answers[q.id] === q.correctOption) score++;
    });

    this.resultScore = score;
    this.resultTotal = 10;
    this.resultPercent = Math.round((score / 10) * 100);
    this.resultPassed = score >= 7;
    this.resultMistakes = [];

    this.questions.forEach(q => {
      const userAns = this.answers[q.id];
      if (userAns !== q.correctOption) {
        this.resultMistakes.push({
          id: Math.abs(q.id),
          question: q.questionText,
          userAnswer: userAns ? this.getOptText(q, userAns) : this.t('result.no_answer'),
          correctAnswer: this.getOptText(q, q.correctOption),
          explanation: q.explanation || '',
        });
      }
    });

    this.pdfQuiz.savePdfQuiz([]);
    this.state = 'result';
  }

  reset() {
    this.state = 'upload';
    this.questions = [];
    this.answers = {};
    this.currentIndex = 0;
    this.error = '';
    this.resultMistakes = [];
    this.pdfQuiz.savePdfQuiz([]);
  }

  private getOptText(q: Question, opt: string): string {
    switch (opt) {
      case 'a': return q.optionA;
      case 'b': return q.optionB;
      case 'c': return q.optionC;
      case 'd': return q.optionD;
      default: return opt;
    }
  }
}
