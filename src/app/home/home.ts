import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-icon">☕</div>
        <h1 class="hero-title">Master Java <span class="highlight">Programming</span></h1>
        <p class="hero-subtitle">
          50 levels of interactive Java quizzes. Progress from beginner syntax to advanced design patterns. Unlock your potential one level at a time!
        </p>
        <div class="hero-stats">
          <span class="stat-badge">📘 50 Levels</span>
          <span class="stat-badge">❓ 500 Questions</span>
          <span class="stat-badge">🎯 70% to Pass</span>
        </div>
        <a routerLink="/dashboard" class="btn btn-start">
          <span class="btn-text">Start Learning</span>
          <span class="btn-icon">→</span>
        </a>
      </div>
      <div class="hero-glow"></div>
    </section>
  `
})
export class HomeComponent {}
