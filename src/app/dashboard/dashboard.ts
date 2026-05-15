import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { QuizService } from '../services/quiz.service';
import { LevelData } from '../models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, NgClass],
  template: `
    <section class="dashboard">
      <div class="dashboard-header">
        <h1>Choose Your Level</h1>
        <p>Complete each level with 70%+ to unlock the next</p>
        <div class="progress-summary">
          <span>Current Level: <strong>Level {{ unlockedLevel }}</strong></span>
          <span>Total Levels: <strong>50</strong></span>
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
            <span *ngIf="isCompleted(level.levelNumber)" class="status-badge status-pass">✅ Passed</span>
            <span *ngIf="isUnlocked(level.levelNumber) && !isCompleted(level.levelNumber) && getAttempts(level.levelNumber) > 0"
              class="status-badge status-fail">❌ Failed</span>
            <span *ngIf="isUnlocked(level.levelNumber) && !isCompleted(level.levelNumber) && getAttempts(level.levelNumber) === 0"
              class="status-badge status-new">🆕 New</span>
            <span *ngIf="!isUnlocked(level.levelNumber)" class="status-badge status-locked">🔒 Locked</span>
          </div>
          <div *ngIf="getScore(level.levelNumber) > 0" class="level-score">
            Best: {{ getScore(level.levelNumber) }}/10
          </div>
          <a *ngIf="isUnlocked(level.levelNumber) && !isCompleted(level.levelNumber)"
            [routerLink]="['/quiz', level.levelNumber]" class="btn btn-level">Start</a>
          <a *ngIf="isCompleted(level.levelNumber)"
            [routerLink]="['/quiz', level.levelNumber]" class="btn btn-level btn-review">Review</a>
          <button *ngIf="!isUnlocked(level.levelNumber)" class="btn btn-level btn-disabled" disabled>Locked</button>
        </div>
      </div>
    </section>
  `
})
export class DashboardComponent {
  levels: LevelData[];
  unlockedLevel: number;

  constructor(private quiz: QuizService) {
    this.levels = this.quiz.getLevels();
    this.unlockedLevel = this.quiz.getUnlockedLevel();
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
