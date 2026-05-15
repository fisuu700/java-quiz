import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';
import { QuizService } from '../services/quiz.service';
import { QuizResult } from '../models';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [RouterLink, NgIf, NgClass],
  template: `
    <section class="result-section">
      <div class="result-card" [ngClass]="result.passed ? 'result-pass' : 'result-fail'">
        <div class="result-icon">{{ result.passed ? '🎉' : '😞' }}</div>
        <h1 class="result-title">{{ result.passed ? 'Congratulations!' : 'Not Quite!' }}</h1>
        <p class="result-subtitle">
          {{ result.passed ? "You've mastered Level " + result.levelNumber + '!' : 'You need 70% to pass Level ' + result.levelNumber + '.' }}
        </p>

        <div class="score-display">
          <div class="score-circle" [ngClass]="result.passed ? 'score-pass' : 'score-fail'">
            <span class="score-value">{{ result.score }}/{{ result.total }}</span>
            <span class="score-percent">{{ percent }}%</span>
          </div>
        </div>

        <div class="result-message">
          <ng-container *ngIf="result.passed && hasNext">
            <p class="msg-success">✅ Level {{ result.levelNumber + 1 }} is now unlocked!</p>
            <a [routerLink]="['/quiz', result.levelNumber + 1]" class="btn btn-next">Next Level →</a>
            <a routerLink="/dashboard" class="btn btn-secondary">Back to Levels</a>
          </ng-container>
          <ng-container *ngIf="result.passed && !hasNext">
            <p class="msg-success">🏆 You've completed all 50 levels! You're a Java Master!</p>
            <a routerLink="/dashboard" class="btn btn-secondary">Back to Levels</a>
          </ng-container>
          <ng-container *ngIf="!result.passed">
            <p class="msg-fail">💪 Don't give up! Review the material and try again.</p>
            <a [routerLink]="['/quiz', result.levelNumber]" class="btn btn-retry">Try Again 🔄</a>
            <a routerLink="/dashboard" class="btn btn-secondary">Back to Levels</a>
          </ng-container>
        </div>
      </div>
    </section>
  `
})
export class ResultComponent {
  result: QuizResult;
  hasNext: boolean;
  percent: number;

  constructor(private router: Router, private quiz: QuizService) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { result: QuizResult } | undefined;
    if (!state?.result) {
      this.router.navigate(['/dashboard']);
      this.result = { levelNumber: 1, score: 0, total: 10, passed: false };
      this.hasNext = false;
      this.percent = 0;
      return;
    }
    this.result = state.result;
    this.hasNext = this.quiz.hasNextLevel(this.result.levelNumber);
    this.percent = Math.round((this.result.score / this.result.total) * 100);
  }
}
