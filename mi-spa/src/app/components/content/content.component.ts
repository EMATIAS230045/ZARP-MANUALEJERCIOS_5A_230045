import { Component, Input, Output, EventEmitter, Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Para formularios reactivos
import { MatCardModule } from '@angular/material/card'; // Para tarjetas
import { MatFormFieldModule } from '@angular/material/form-field'; // Para campos de formulario
import { MatInputModule } from '@angular/material/input'; // Para inputs
import { MatButtonModule } from '@angular/material/button'; // Para botones
import { MatIconModule } from '@angular/material/icon'; // Para íconos
import { CommonModule } from '@angular/common'; // Importa CommonModule
import {OnChanges, SimpleChanges } from '@angular/core';
import { Practica1Component } from '../practicas/practica1/practica1.component';
import { Practica2Component } from '../practicas/practica2/practica2.component';
import { Practica3Component } from '../practicas/practica3/practica3.component';
import { Practica4Component } from '../practicas/practica4/practica4.component';
import { Practica5Component } from '../practicas/practica5/practica5.component';
import { Practica6Component } from '../practicas/practica6/practicas6.component';
import { Practica7Component } from '../practicas/practica7/practica7.component';
import { Practica8Component } from '../practicas/practica8/practica8.component';
import { Practica9Component } from '../practicas/practica9/practica9.component';
import { Practica10Component } from '../practicas/practica10/practica10.component';
import { Practica11Component } from '../practicas/practica11/practica11.component';
import { Practica12Component } from '../practicas/practica12/practica12.component';
import { PyramidChartComponent } from '../pyramid-chart/pyramid-chart.component';
import { ChartComponent} from '../chart/chart.component';
import { ZeroConfigComponent } from '../zero-config/zero-config.component';
import { DatatableComponent } from '../datatable/datatable.component';
import { JsonComponent } from '../json/json.component';
import { WithAjaxCallbackComponent } from '../with-ajax-callback/with-ajax-callback.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CarrosComponent } from '../carros/carros.component';
import { AmchartComponent } from '../amchart/amchart.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule, // Agrega CommonModule aquí
    RouterModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {

  @Input() selectedOption: string = ''; // Recibe la opción seleccionada del Navbar
  @Input() isLoggedIn: boolean = false; // Recibe el estado de la sesión
  @Output() loginEvent = new EventEmitter<void>(); // Emite el evento de inicio de sesión

  textContent: string = '';
  currentComponent: Type<any> | null = null; // ✅ Definir correctamente

  username: string = ''; // Variable para el nombre de usuario
  password: string = ''; // Variable para la contraseña

  updateContent(option: string) {
    switch (option) {
      case 'practica 1':
        this.textContent = 'Código de la Práctica 1';
        this.currentComponent = Practica1Component;
        break;
      case 'practica 2':
        this.textContent = 'Código de la Práctica 2';
        this.currentComponent = Practica2Component;
        break;
      case 'practica 3':
        this.textContent = 'Código de la Práctica 3';
        this.currentComponent = Practica3Component;
        break;
        case 'practica 4':
          this.textContent = 'Código de la Práctica 4';
          this.currentComponent = Practica4Component;
          break;
          case 'practica 5':
            this.textContent = 'Código de la Práctica 5';
            this.currentComponent = Practica5Component;
            break;
            case 'practica 6':
        this.textContent = 'Código de la Práctica 6 i';
        this.currentComponent = Practica6Component;
        break;
        case 'practica 7':
        this.textContent = 'Código de la Práctica 7';
        this.currentComponent = Practica7Component;
        break;
        case 'practica 8':
        this.textContent = 'Código de la Práctica 8';
        this.currentComponent = Practica8Component;
        break;
        case 'practica 9':
        this.textContent = 'Código de la Práctica 9';
        this.currentComponent = Practica9Component;
        break;
        case 'practica 10':
        this.textContent = 'Código de la Práctica 10';
        this.currentComponent = Practica10Component;
        break;
        case 'practica 11':
        this.textContent = 'Código de la Práctica 11';
        this.currentComponent = Practica11Component;
        break;
        case 'practica 12':
        this.textContent = 'Código de la Práctica 12';
        this.currentComponent = Practica12Component;
        break;
        case 'grafica 1':
        this.textContent = 'Grafica 1';
        this.currentComponent = ChartComponent;
        break;
        case 'grafica 2':
        this.textContent = 'Grafica 2';
        this.currentComponent = PyramidChartComponent;
        break;
        case 'tabla 1':
        this.textContent = 'tabla 1';
        this.currentComponent = ZeroConfigComponent;
        break;
        case 'tabla 2':
        this.textContent = 'tabla 2';
        this.currentComponent = DatatableComponent;
        break;
        case 'tabla 4':
        this.textContent = 'tabla 4 json';
        this.currentComponent = JsonComponent;
        break;
        case 'tabla Api':
        this.textContent = 'Tabla api';
        this.currentComponent = WithAjaxCallbackComponent;
        break;
        case 'grafica 3':
        this.textContent = 'Grafica con datos de datatables';
        this.currentComponent = DashboardComponent;
        break;
        case 'grafica 4':
        this.textContent = 'Grafica con datos de datatables';
        this.currentComponent = CarrosComponent;
        break;
        case 'grafica 5':
        this.textContent = 'Grafica con API';
        this.currentComponent = AmchartComponent;
        break;

      default:
        this.textContent = 'Selecciona una práctica para ver el contenido.';
        this.currentComponent = null;
    }
  }
  ngOnInit() {
    this.updateContent(this.selectedOption);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedOption']) {
      this.updateContent(this.selectedOption);
    }
  }
  // Método para manejar el inicio de sesión
  login() {
    if (this.username && this.password) {
      this.loginEvent.emit(); // Notifica al componente padre
      console.log('Iniciando sesión con:', this.username);
    } else {
      console.log('Por favor, ingresa un nombre de usuario y una contraseña.');
    }
  }
}