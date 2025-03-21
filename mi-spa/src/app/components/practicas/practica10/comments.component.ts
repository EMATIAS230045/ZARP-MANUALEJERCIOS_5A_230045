import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'comments',
  template: `
    <div class="comments-container">
      <h2 class="comments-title">Comentarios de la comunidad</h2>
      <ul class="comments-list">
        <li class="comment-item" *ngFor="let comment of comments">
          <span class="comment-badge">👩💻</span>
          <p class="comment-text">{{ comment.text }}</p>
          <span class="comment-author">{{ comment.author }}</span>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
    .comments-container {
      background: #f8fafc;
      border-radius: 12px;
      padding: 2rem;
      margin-top: 1.5rem;
      max-height: 400px;
      overflow-y: auto;
      scroll-behavior: smooth;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }

    /* Scrollbar comentarios */
    .comments-container::-webkit-scrollbar {
      width: 6px;
    }

    .comments-container::-webkit-scrollbar-track {
      background: rgba(0,0,0,0.05);
      border-radius: 4px;
    }

    .comments-container::-webkit-scrollbar-thumb {
      background: #4a5568;
      border-radius: 4px;
    }

    /* Smooth scrolling para Firefox */
    @supports (scrollbar-color: auto) {
      .angular-article, .comments-container {
        scrollbar-color: #2c7be5 #f1f1f1;
        scrollbar-width: thin;
      }
    }
    `
],
  standalone: true
})
export class CommentsComponent {
  comments = [
    { text: '¡Desarrollar para la web es fantástico con Angular!', author: 'Ana Torres' },
    { text: 'La nueva sintaxis de templates es increíble', author: 'Carlos Méndez' },
    { text: '¡Estoy de acuerdo con los demás comentarios!', author: 'Laura Gómez' },
    { text: 'La documentación de Angular es ejemplar', author: 'Pedro Sánchez' }
  ];
}