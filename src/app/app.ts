import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TranslateService } from './services/translate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <a routerLink="/" class="nav-logo">☕ JavaQuiz</a>
        <div class="nav-links">
          <a routerLink="/dashboard" class="nav-link">{{ t('nav.levels') }}</a>
          <select class="lang-select" [value]="translate.currentLang()" (change)="onLangChange($event)">
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>
    </nav>
    <main class="main-content">
      <router-outlet />
    </main>
    <footer class="footer">
      <p>{{ t('footer.text') }}</p>
    </footer>
  `
})
export class AppComponent {
  constructor(public translate: TranslateService) {}

  t(key: string): string {
    return this.translate.t(key);
  }

  onLangChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.translate.setLanguage(select.value);
  }
}
