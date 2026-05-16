import { Injectable } from '@angular/core';
import { LevelData, LevelProgress, QuizResult } from '../models';
import { getAllLevels } from '../data/questions';

const STORAGE_KEY = 'java_quiz_progress';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private levels: LevelData[];
  private progress: Map<number, LevelProgress>;

  constructor() {
    this.levels = getAllLevels();
    this.progress = new Map();
    this.loadProgress();
  }

  private loadProgress(): void {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const arr: LevelProgress[] = JSON.parse(saved);
      arr.forEach(p => this.progress.set(p.levelNumber, p));
    }
  }

  private saveProgress(): void {
    const arr = Array.from(this.progress.values());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  }

  getLevels(): LevelData[] {
    return this.levels;
  }

  getLevel(levelNumber: number): LevelData | undefined {
    return this.levels.find(l => l.levelNumber === levelNumber);
  }

  getUnlockedLevel(): number {
    const completed = Array.from(this.progress.values())
      .filter(p => p.isCompleted)
      .map(p => p.levelNumber);
    return completed.length > 0 ? Math.max(...completed) + 1 : 1;
  }

  getProgress(levelNumber: number): LevelProgress {
    return this.progress.get(levelNumber) || { levelNumber, maxScore: 0, isCompleted: false, attempts: 0 };
  }

  isUnlocked(levelNumber: number): boolean {
    return levelNumber <= this.getUnlockedLevel();
  }

  submitQuiz(levelNumber: number, answers: Record<number, string>): QuizResult {
    const level = this.getLevel(levelNumber);
    if (!level) throw new Error('Level not found');

    let score = 0;
    level.questions.forEach(q => {
      if (answers[q.id] === q.correctOption) score++;
    });

    const total = level.questions.length;
    const passed = score >= 7;
    const existing = this.getProgress(levelNumber);
    const newProgress: LevelProgress = {
      levelNumber,
      maxScore: Math.max(existing.maxScore, score),
      isCompleted: existing.isCompleted || passed,
      attempts: existing.attempts + 1,
    };
    this.progress.set(levelNumber, newProgress);
    this.saveProgress();

    return { levelNumber, score, total, passed, userAnswers: answers };
  }

  hasNextLevel(levelNumber: number): boolean {
    return levelNumber < 50;
  }
}
