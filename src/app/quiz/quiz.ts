import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { QuizService } from '../services/quiz.service';
import { TranslateService } from '../services/translate.service';
import { LevelData, Question } from '../models';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <section class="quiz-section">
      <div class="quiz-container">
        <div class="quiz-header">
          <div class="quiz-meta">
            <span class="quiz-level">Level {{ levelNumber }}</span>
            <span class="quiz-count">{{ t('quiz.questions') }}</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar" [style.width.%]="progressPercent"></div>
          </div>
          <span class="progress-text">{{ t('quiz.question_of') }} {{ currentIndex + 1 }} {{ t('quiz.of') }} 10</span>
        </div>

        <div *ngIf="level">
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

        <div *ngIf="!level" class="alert alert-error">{{ t('quiz.not_found') }}</div>
      </div>
    </section>
  `
})
export class QuizComponent implements OnInit {
  level?: LevelData;
  levelNumber: number = 1;
  currentIndex: number = 0;
  answers: Record<number, string> = {};
  currentQuestion?: Question;
  optionKeys: string[] = ['a', 'b', 'c', 'd'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quiz: QuizService,
    public translate: TranslateService
  ) {}

  t(key: string): string {
    return this.translate.t(key);
  }

  ngOnInit() {
    this.levelNumber = Number(this.route.snapshot.paramMap.get('level')) || 1;
    if (!this.quiz.isUnlocked(this.levelNumber)) {
      this.router.navigate(['/dashboard']);
      return;
    }
    this.level = this.quiz.getLevel(this.levelNumber);
    if (this.level) {
      this.currentQuestion = this.level.questions[0];
    }
  }

  get progressPercent(): number {
    return ((this.currentIndex + 1) / 10) * 100;
  }

  getOptionText(key: string): string {
    if (!this.currentQuestion) return '';
    switch (key) {
      case 'a': return this.currentQuestion.optionA;
      case 'b': return this.currentQuestion.optionB;
      case 'c': return this.currentQuestion.optionC;
      case 'd': return this.currentQuestion.optionD;
      default: return '';
    }
  }

  selectAnswer(opt: string) {
    if (this.currentQuestion) {
      this.answers[this.currentQuestion.id] = opt;
    }
  }

  goTo(index: number) {
    if (index >= 0 && index <= 9) {
      this.currentIndex = index;
      this.currentQuestion = this.level!.questions[index];
    }
  }

  submit() {
    const result = this.quiz.submitQuiz(this.levelNumber, this.answers);
    this.router.navigate(['/result'], { state: { result } });
  }
}
