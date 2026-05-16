import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { QuizService } from '../services/quiz.service';
import { TranslateService } from '../services/translate.service';
import { LevelData } from '../models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, NgClass],
  template: `
    <section class="dashboard">
      <div class="dashboard-header">
        <h1>{{ t('dashboard.title') }}</h1>
        <p>{{ t('dashboard.subtitle') }}</p>
        <div class="progress-summary">
          <span>{{ t('dashboard.current') }}: <strong>{{ t('dashboard.level_label') }} {{ unlockedLevel }}</strong></span>
          <span>{{ t('dashboard.total') }}: <strong>50</strong></span>
        </div>
      </div>

      <div class="levels-grid">
        <div *ngFor="let level of levels" class="level-card"
          [ngClass]="{
            unlocked: isUnlocked(level.levelNumber) && !isCompleted(level.levelNumber),
            locked: !isUnlocked(level.levelNumber),
            completed: isCompleted(level.levelNumber)
          }">
          <div class="level-number">{{ formatNumber(level.levelNumber) }}</div>
          <div class="level-difficulty" [ngClass]="'badge-' + getDiffClass(level.difficultyRating)">
            {{ level.difficultyRating }}
          </div>
          <div class="level-status">
            <span *ngIf="isCompleted(level.levelNumber)" class="status-badge status-pass">{{ t('dashboard.passed') }}</span>
            <span *ngIf="isUnlocked(level.levelNumber) && !isCompleted(level.levelNumber) && getAttempts(level.levelNumber) > 0"
              class="status-badge status-fail">{{ t('dashboard.failed') }}</span>
            <span *ngIf="isUnlocked(level.levelNumber) && !isCompleted(level.levelNumber) && getAttempts(level.levelNumber) === 0"
              class="status-badge status-new">{{ t('dashboard.new') }}</span>
            <span *ngIf="!isUnlocked(level.levelNumber)" class="status-badge status-locked">{{ t('dashboard.locked') }}</span>
          </div>
          <div *ngIf="getScore(level.levelNumber) > 0" class="level-score">
            {{ t('dashboard.best') }}: {{ getScore(level.levelNumber) }}/10
          </div>
          <a *ngIf="isUnlocked(level.levelNumber) && !isCompleted(level.levelNumber)"
            [routerLink]="['/quiz', level.levelNumber]" class="btn btn-level">{{ t('dashboard.start') }}</a>
          <a *ngIf="isCompleted(level.levelNumber)"
            [routerLink]="['/quiz', level.levelNumber]" class="btn btn-level btn-review">{{ t('dashboard.review') }}</a>
          <button *ngIf="!isUnlocked(level.levelNumber)" class="btn btn-level btn-disabled" disabled>{{ t('dashboard.locked_btn') }}</button>
        </div>
      </div>
    </section>
  `
})
export class DashboardComponent {
  levels: LevelData[];
  unlockedLevel: number;

  constructor(private quiz: QuizService, public translate: TranslateService) {
    this.levels = this.quiz.getLevels();
    this.unlockedLevel = this.quiz.getUnlockedLevel();
  }

  t(key: string): string {
    return this.translate.t(key);
  }

  isUnlocked(n: number): boolean { return this.quiz.isUnlocked(n); }
  isCompleted(n: number): boolean { return this.quiz.getProgress(n).isCompleted; }
  getScore(n: number): number { return this.quiz.getProgress(n).maxScore; }
  getAttempts(n: number): number { return this.quiz.getProgress(n).attempts; }

  formatNumber(n: number): string {
    return n.toString().padStart(2, '0');
  }

  getDiffClass(d: string): string {
    return d.toLowerCase().replace(/[\/ ]/g, '-');
  }
}
