import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIf, NgClass, NgFor } from '@angular/common';
import { QuizService } from '../services/quiz.service';
import { TranslateService } from '../services/translate.service';
import { QuizResult, Question } from '../models';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [RouterLink, NgIf, NgClass, NgFor],
  template: `
    <section class="result-section">
      <div class="result-card" [ngClass]="result.passed ? 'result-pass' : 'result-fail'">
        <div class="result-icon">{{ result.passed ? '🎉' : '😞' }}</div>
        <h1 class="result-title">{{ result.passed ? t('result.congrats') : t('result.not_quite') }}</h1>
        <p class="result-subtitle">
          {{ result.passed ? t('result.mastered') + ' ' + result.levelNumber + '!' : t('result.need_pass') + ' ' + result.levelNumber + '.' }}
        </p>

        <div class="score-display">
          <div class="score-circle" [ngClass]="result.passed ? 'score-pass' : 'score-fail'">
            <span class="score-value">{{ result.score }}/{{ result.total }}</span>
            <span class="score-percent">{{ percent }}%</span>
          </div>
        </div>

        <div class="result-actions">
          <ng-container *ngIf="result.passed && hasNext">
            <p class="msg-success">{{ tp('result.unlocked', (result.levelNumber + 1).toString()) }}</p>
            <a [routerLink]="['/quiz', result.levelNumber + 1]" class="btn btn-next">{{ t('result.next_level') }}</a>
          </ng-container>
          <ng-container *ngIf="result.passed && !hasNext">
            <p class="msg-success">{{ t('result.all_done') }}</p>
          </ng-container>
          <ng-container *ngIf="!result.passed">
            <p class="msg-fail">{{ t('result.dont_give_up') }}</p>
            <a [routerLink]="['/quiz', result.levelNumber]" class="btn btn-retry">{{ t('result.try_again') }}</a>
          </ng-container>
          <a routerLink="/dashboard" class="btn btn-secondary">{{ t('result.back') }}</a>
        </div>
      </div>

      <div class="ai-feedback-section" *ngIf="mistakes.length > 0">
        <div class="ai-header">
          <div class="ai-bot-icon">🤖</div>
          <div class="ai-header-text">
            <h2>{{ t('result.ai_title') }}</h2>
            <p>{{ t('result.ai_subtitle') }}</p>
          </div>
        </div>

        <div class="mistake-list">
          <div class="mistake-item" *ngFor="let m of mistakes">
            <div class="mistake-question">
              <span class="q-num">Q{{ m.question.id }}:</span> {{ m.question.questionText }}
            </div>
            <div class="mistake-details">
              <div class="your-answer fail">
                <strong>{{ t('result.your_answer') }}:</strong> {{ m.userAnswerText }}
              </div>
              <div class="correct-answer pass">
                <strong>{{ t('result.correct_answer') }}:</strong> {{ m.correctAnswerText }}
              </div>
            </div>
            <div class="ai-explanation">
              <div class="exp-icon">💡</div>
              <div class="exp-text">
                <strong>{{ t('result.ai_explanation') }}:</strong> {{ m.question.explanation || 'This concept is fundamental to Java programming. Understanding this will help you avoid similar errors in the future.' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ResultComponent {
  result: QuizResult;
  hasNext: boolean;
  percent: number;
  mistakes: Array<{ question: Question, userAnswerText: string, correctAnswerText: string }> = [];

  constructor(private router: Router, private quiz: QuizService, public translate: TranslateService) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { result: QuizResult } | undefined;
    
    if (!state?.result) {
      this.router.navigate(['/dashboard']);
      this.result = { levelNumber: 1, score: 0, total: 10, passed: false, userAnswers: {} };
      this.hasNext = false;
      this.percent = 0;
      return;
    }

    this.result = state.result;
    this.hasNext = this.quiz.hasNextLevel(this.result.levelNumber);
    this.percent = Math.round((this.result.score / this.result.total) * 100);

    const level = this.quiz.getLevel(this.result.levelNumber);
    if (level) {
      level.questions.forEach(q => {
        const userAns = this.result.userAnswers[q.id];
        if (userAns !== q.correctOption) {
          this.mistakes.push({
            question: q,
            userAnswerText: this.getOptionText(q, userAns),
            correctAnswerText: this.getOptionText(q, q.correctOption)
          });
        }
      });
    }
  }

  t(key: string): string {
    return this.translate.t(key);
  }

  tp(key: string, ...args: string[]): string {
    return this.translate.tp(key, ...args);
  }

  getOptionText(q: Question, option: string): string {
    if (!option) return this.t('result.no_answer');
    switch (option.toLowerCase()) {
      case 'a': return q.optionA;
      case 'b': return q.optionB;
      case 'c': return q.optionC;
      case 'd': return q.optionD;
      default: return this.t('result.unknown');
    }
  }
}
