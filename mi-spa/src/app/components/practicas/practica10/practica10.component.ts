import { Component } from '@angular/core';
import { CommentsComponent } from './comments.component';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, CommentsComponent],
  selector: 'app-practica10',
  template: `
    <div class="container">
      <article class="angular-article">
        <h1 class="title">Cómo me siento acerca de Angular</h1>
        
        <div class="content">
          <p *ngFor="let paragraph of paragraphs" class="article-text">
            {{ paragraph }}
          </p>
        </div>
      </article>

      <section class="comments-section">
        @defer (on viewport) {
          <comments />
        } @placeholder (minimum 500ms) {
          <div class="skeleton-loader">
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
            <div class="skeleton-item"></div>
          </div>
        } @loading (minimum 2s) {
          <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Cargando comentarios...</p>
          </div>
        } @error {
          <p class="error-message">⚠️ Error cargando los comentarios</p>
        }
      </section>
    </div>
  `,
  styles: [
    `
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      font-family: 'Segoe UI', sans-serif;
    }

    .title {
      color: #2c7be5;
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2.5rem;
    }

    .article-text {
      line-height: 1.8;
      margin: 1.5rem 0;
      color: #4a5568;
      text-align: justify;
    }

    .comments-section {
      margin-top: 4rem;
      border-top: 2px solid #e2e8f0;
      padding-top: 2rem;
    }

    .skeleton-loader {
      padding: 1rem;
      background: #f7fafc;
      border-radius: 8px;
    }

    .skeleton-item {
      height: 20px;
      background: #edf2f7;
      margin: 1rem 0;
      border-radius: 4px;
      animation: pulse 1.5s infinite;
    }

    .loading-spinner {
      text-align: center;
      padding: 2rem;
    }

    .spinner {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #2c7be5;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }

    .error-message {
      color: #e53e3e;
      background: #fff5f5;
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    `
  ],
  standalone: true
})
export class Practica10Component {
  paragraphs = [
    `Angular es mi framework favorito, y esta es la razón. Angular tiene la característica de vistas diferidas más genial que hace que la carga diferida de contenido sea la más fácil y ergonómica posible. La comunidad de Angular también está llena de increíbles colaboradores y expertos que crean contenido excelente. La comunidad es acogedora y amigable, y realmente es la mejor comunidad que existe.`,
    // ... repetir los párrafos según necesidad
  ];
}