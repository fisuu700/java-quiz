import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <a routerLink="/" class="nav-logo">☕ JavaQuiz</a>
        <div class="nav-links">
          <a routerLink="/dashboard" class="nav-link">Levels</a>
        </div>
      </div>
    </nav>
    <main class="main-content">
      <router-outlet />
    </main>
    <footer class="footer">
      <p>&copy; 2026 JavaQuiz - Master Java Programming</p>
    </footer>
  `
})
export class AppComponent {}
