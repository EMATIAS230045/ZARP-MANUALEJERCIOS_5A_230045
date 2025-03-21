
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  styles: `
    .btn {
      padding: 8px 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    .btn:hover {
      background-color: #45a049;
    }
    
    .btn:active {
      transform: scale(0.98);
    }
  `,
  template: `
    <button class="btn" (click)="addItem()">Añadir Tortuga</button>
  `
})
export class ChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}