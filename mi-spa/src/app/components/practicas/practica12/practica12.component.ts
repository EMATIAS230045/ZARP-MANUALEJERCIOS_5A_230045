import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-practica12',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterOutlet],
})
export class Practica12Component {}