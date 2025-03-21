import {Component} from '@angular/core';

@Component({
  selector: 'app-practica5',
  template: `
    @for(user of users; track user.id) {
    <p>{{ user.name }}</p>
    }
  `,
})
export class Practica5Component {
  users = [
    {id: 0, name: 'Matias'},
    {id: 1, name: 'Derek'},
    {id: 2, name: 'Citlalli'},
    {id: 3, name: 'Michelle'},
    {id: 4, name: 'Polonia'},
  ];
}
