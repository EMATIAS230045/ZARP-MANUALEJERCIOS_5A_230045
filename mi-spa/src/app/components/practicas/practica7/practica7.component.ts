import { Component } from '@angular/core';

@Component({
  selector: 'app-practica7',
  template: `
    <section 
      (mouseenter)="revealMessage()"
      class="hover-section"
      [class.revealed]="message">
      
      <p>¡Hay un mensaje secreto para ti! Pasa el cursor para revelarlo:</p>
      <div class="message">{{ message }}</div>
    </section>
  `,
  styles: [`
    .hover-section {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      transition: all 0.3s ease;
      margin: 20px;
      text-align: center;
      background-color: #f8f9fa;
      cursor: pointer;
    }

    .hover-section:hover {
      background-color: #e9ecef;
    }

    .message {
      color: #2c7be5;
      font-weight: bold;
      font-size: 1.2em;
      margin-top: 10px;
      min-height: 24px;
    }

    .revealed {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class Practica7Component {
  message = '';

  revealMessage() {
    this.message = '¡Buen trabajo! 🚀';
  }
}