export interface Question {
  id: number;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: string;
  explanation?: string;
}

export interface LevelData {
  levelNumber: number;
  difficultyRating: string;
  questions: Question[];
}

export interface LevelProgress {
  levelNumber: number;
  maxScore: number;
  isCompleted: boolean;
  attempts: number;
}

export interface QuizResult {
  levelNumber: number;
  score: number;
  total: number;
  passed: boolean;
  userAnswers: Record<number, string>;
}
