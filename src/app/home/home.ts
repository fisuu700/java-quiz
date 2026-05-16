import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '../services/translate.service';
import { ChatbotComponent } from '../chatbot/chatbot';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ChatbotComponent],
  template: `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-icon">☕</div>
        <h1 class="hero-title" [innerHTML]="t('home.title')"></h1>
        <p class="hero-subtitle">{{ t('home.subtitle') }}</p>
        <div class="hero-stats">
          <span class="stat-badge">📘 {{ t('home.levels') }}</span>
          <span class="stat-badge">❓ {{ t('home.questions') }}</span>
          <span class="stat-badge">🎯 {{ t('home.pass') }}</span>
        </div>
        <div class="hero-actions">
          <a routerLink="/dashboard" class="btn btn-start">
            <span class="btn-text">{{ t('home.start') }}</span>
            <span class="btn-icon">→</span>
          </a>
          <a routerLink="/pdf-quiz" class="btn btn-pdf-home">
            <span class="btn-icon">📄</span>
            <span class="btn-text">{{ t('home.pdf_quiz') }}</span>
          </a>
          <a href="/JavaQuiz.apk" class="btn btn-download" download>
            <span class="btn-icon">📱</span>
            <span class="btn-text">{{ t('home.install') }}</span>
          </a>
        </div>
      </div>
      <div class="hero-glow"></div>
    </section>
    <app-chatbot />
  `
})
export class HomeComponent {
  constructor(public translate: TranslateService) {}

  t(key: string): string {
    return this.translate.t(key);
  }
}
