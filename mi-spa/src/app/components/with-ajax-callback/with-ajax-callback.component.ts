import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-with-ajax-callback',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './with-ajax-callback.component.html'
})
export class WithAjaxCallbackComponent implements OnInit, OnDestroy {
  dtOptions: any = {};
  datos: any[] = [];  // Datos obtenidos de la API
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Obtener datos de la API
    this.http.get<any>('http://localhost:3000/api/data').subscribe(response => {
      // Asignar los datos obtenidos a la variable 'datos'
      this.datos = response.data;

      // Inicializar las opciones de DataTables después de haber obtenido los datos
      this.dtOptions = {
        pagingType: 'full_numbers',
        responsive: true,
        language: {
          url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json' // Español
        },
        data: this.datos, // Usar los datos cargados en la tabla
        columns: [
          { title: 'ID', data: 'id' },
          { title: 'First Name', data: 'firstName' },
          { title: 'Last Name', data: 'lastName' },
          { title: 'Parejas', data: 'couples' }
        ]
      };

      // Trigger para inicializar DataTables con los datos cargados
      this.dtTrigger.next(null);  // Aquí se pasa null como argumento
    });
  }

  ngOnDestroy(): void {
    // Destruir la instancia de DataTable para evitar fugas de memoria
    if (this.dtTrigger) {
      this.dtTrigger.unsubscribe();
    }
  }
}
