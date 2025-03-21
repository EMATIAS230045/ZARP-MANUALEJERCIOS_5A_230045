import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

declare var $: any; // Para jQuery
declare var DataTable: any; // Para DataTables

@Component({
  selector: 'app-zero-config',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './zero-config.component.html',
  styleUrls: ['./zero-config.component.css']
})
export class ZeroConfigComponent implements OnInit {
  dtOptions: any = {}; // Usamos 'any' temporalmente
  datos = [ // Datos de ejemplo
    { id: 1, firstName: 'derek', lastName: 'Vader', couples: 3 },
  { id: 2, firstName: 'diego', lastName: 'Stark', couples: 2 },
  { id: 3, firstName: 'obed', lastName: 'Baggins', couples: 5 },
  { id: 4, firstName: 'citlalli', lastName: 'Skywalker', couples: 1 },
  { id: 5, firstName: 'al', lastName: 'Wick', couples: 0 },
  { id: 6, firstName: 'matias', lastName: 'Toretto', couples: 4 },
  { id: 7, firstName: 'yazmin', lastName: 'Yaga', couples: 3 },
  { id: 8, firstName: 'carlos', lastName: 'Corleone', couples: 5 },
  { id: 9, firstName: 'daniel', lastName: 'Shaft', couples: 2 },
  { id: 10, firstName: 'say', lastName: 'Creed', couples: 1 },
  { id: 11, firstName: 'angel', lastName: 'Q', couples: 0 },
  { id: 12, firstName: 'dulce', lastName: 'Everdeen', couples: 3 },
  { id: 13, firstName: 'teresa', lastName: 'Gamgee', couples: 4 },
  { id: 14, firstName: 'ppyo', lastName: 'Baggins', couples: 2 },
  { id: 15, firstName: 'adrian', lastName: 'Solo', couples: 3 },
  { id: 16, firstName: 'chuchin', lastName: 'Bane', couples: 6 },
  { id: 17, firstName: 'pako', lastName: 'Sparrow', couples: 2 },
  { id: 18, firstName: 'paquito', lastName: 'Finn', couples: 1 },
  { id: 19, firstName: 'mau', lastName: 'Lebowski', couples: 4 },
  { id: 20, firstName: 'jenni', lastName: 'Swan', couples: 3 },
  { id: 21, firstName: 'jhonathan', lastName: 'Riddle', couples: 5 },
  { id: 22, firstName: 'brisa', lastName: 'Granger', couples:  5},
  { id: 23, firstName: 'Mark', lastName: 'Skywalker', couples: 2 }
  ];

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json' // Español
      }
    };
  }
}