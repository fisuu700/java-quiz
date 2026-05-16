import { Component, signal, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '../services/translate.service';
import { ChatbotService } from '../services/chatbot.service';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [FormsModule],
  template: `
    <button class="chatbot-toggle" (click)="toggle()">
      @if (isOpen()) { ✕ } @else { 💬 }
    </button>

    @if (isOpen()) {
      <div class="chatbot-window">
        <div class="chatbot-header">
          <span>🤖 {{ t('chatbot.title') }}</span>
          <button class="chatbot-close" (click)="isOpen.set(false)">✕</button>
        </div>

        <div class="chatbot-messages" #scrollContainer>
          @for (msg of messages(); track msg) {
            <div class="message" [class.user]="msg.sender === 'user'" [class.bot]="msg.sender === 'bot'">
              <div class="bubble">{{ msg.text }}</div>
            </div>
          }
          @if (isTyping()) {
            <div class="message bot">
              <div class="bubble typing-animation">
                <span></span><span></span><span></span>
              </div>
            </div>
          }
        </div>

        <div class="chatbot-input">
          <input
            #inputField
            [attr.dir]="(translate.currentLang() === 'ar' ? 'rtl' : 'ltr')"
            [(ngModel)]="userInput"
            (keyup.enter)="send()"
            [placeholder]="t('chatbot.placeholder')"
          />
          <button (click)="send()" [disabled]="!userInput.trim()">➤</button>
        </div>
      </div>
    }
  `
})
export class ChatbotComponent implements AfterViewInit {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  @ViewChild('inputField') private inputField!: ElementRef;

  isOpen = signal(false);
  isTyping = signal(false);
  userInput = '';
  messages = signal<ChatMessage[]>([]);

  constructor(
    public translate: TranslateService,
    private chatbot: ChatbotService
  ) {}

  ngAfterViewInit(): void {
    this.messages.set([{
      text: this.greeting(),
      sender: 'bot'
    }]);
  }

  private greeting(): string {
    const lang = this.translate.currentLang();
    switch (lang) {
      case 'fr': return "👋 Bonjour ! Je suis l'assistant JavaQuiz. Je peux vous renseigner sur la plateforme, les niveaux, les quiz PDF et plus encore. Posez-moi votre question !";
      case 'ar': return "👋 مرحباً! أنا مساعد JavaQuiz. يمكنني إخبارك عن المنصة، المستويات، اختبارات PDF والمزيد. اطرح سؤالك!";
      default: return "👋 Hello! I'm the JavaQuiz assistant. I can tell you about the platform, levels, PDF quizzes and more. Ask me anything!";
    }
  }

  t(key: string): string {
    return this.translate.t(key);
  }

  toggle(): void {
    this.isOpen.update(v => !v);
    if (this.isOpen()) {
      setTimeout(() => this.inputField?.nativeElement?.focus(), 100);
    }
  }

  send(): void {
    const text = this.userInput.trim();
    if (!text) return;

    this.messages.update(msgs => [...msgs, { text, sender: 'user' }]);
    this.userInput = '';
    this.isTyping.set(true);

    const lang = this.translate.currentLang();
    setTimeout(() => {
      const response = this.chatbot.getResponse(text, lang);
      this.messages.update(msgs => [...msgs, { text: response, sender: 'bot' }]);
      this.isTyping.set(false);
      this.scrollToBottom();
    }, 600 + Math.random() * 400);
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
      } catch {}
    }, 50);
  }
}
