import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject<any[]>([]); // Datos iniciales vacíos
  currentData = this.dataSource.asObservable();

  updateData(newData: any[]) {
    console.log('📡 Datos actualizados en DataService:', newData); // Debug
    this.dataSource.next(newData);
  }
}
