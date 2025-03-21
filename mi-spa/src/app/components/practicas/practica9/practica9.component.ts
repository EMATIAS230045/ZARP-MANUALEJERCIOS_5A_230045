import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-practica9',
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 Todo el camino hacia abajo {{ items.length }}</p>
  `,
  imports: [ChildComponent],
  standalone: true
})
export class Practica9Component {
  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }
}