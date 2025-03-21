import {Component} from '@angular/core';

@Component({
  selector: 'app-practica04',
  template: `
    @if (isServerRunning) {
    <span>Yes, el servidor esta corrriendo</span>
    } @else {
    <span>No, es servidor no funciona</span>
    }
  `,
})
export class Practica4Component {
  isServerRunning = false;
}
