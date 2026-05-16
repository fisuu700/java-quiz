import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { DashboardComponent } from './dashboard/dashboard';
import { QuizComponent } from './quiz/quiz';
import { ResultComponent } from './result/result';
import { PdfQuizComponent } from './pdf-quiz/pdf-quiz';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'quiz/:level', component: QuizComponent },
  { path: 'result', component: ResultComponent },
  { path: 'pdf-quiz', component: PdfQuizComponent },
  { path: '**', redirectTo: '' },
];
