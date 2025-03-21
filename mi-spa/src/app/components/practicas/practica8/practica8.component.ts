import {Component} from '@angular/core';
import {UserComponent} from './user.component';

@Component({
  selector: 'app-practica8',
  template: `
    <app-user name="Matias" />
  `,
  imports: [UserComponent],
})
export class Practica8Component {}
