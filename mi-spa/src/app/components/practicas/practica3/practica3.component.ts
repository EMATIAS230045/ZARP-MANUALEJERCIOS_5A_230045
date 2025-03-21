import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
})
export class UserComponent {
  username = 'Erick Matias Granillo Mejia';
}

@Component({
  selector: 'app-practica4',
  template: `
    <section>
      <app-user />
    </section>
  `,
  imports: [UserComponent],
})
export class Practica3Component  {}
