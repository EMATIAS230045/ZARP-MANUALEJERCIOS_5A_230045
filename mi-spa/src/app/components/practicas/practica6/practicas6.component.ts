import { Component } from '@angular/core';

@Component({
  selector: 'app-practica6',
  template: `
    <div class="bug" [contentEditable]="isEditable"></div>
  `,
  styles: [
    `
      .bug {
        border: 2px solid red; 
        padding: 10px;          
        margin: 20px;            
        width: 300px;            
        min-height: 50px;        
        background-color: #f9f9f9; 
        font-family: Arial, sans-serif; 
        font-size: 16px;         
        outline: none;          
      }

      .bug[contentEditable="true"] {
        background-color: #e0f7fa;
      }
    `
  ]
})
export class Practica6Component {
  isEditable = true;
}
