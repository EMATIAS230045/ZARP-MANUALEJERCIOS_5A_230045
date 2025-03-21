import { Component } from '@angular/core';

@Component({
  selector: 'app-practica2',
  imports: [],
  template:`
  Hola {{ city }}, {{ 1 + 1 }}
`,
})
export class Practica2Component {
  city = 'Xicotepec';
}