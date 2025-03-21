import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit, OnDestroy {
  
  dtOptions: any = {}; // Se usó 'any' para evitar problemas con TS
  dtTrigger: Subject<any> = new Subject();

  data = [  
  { id: 1, year: 19, price: 23900, transmission: 'Automatic', mileage: 8500, fuelType: 'Petrol', tax: 190, mpg: 44.8, engineSize: 1.6, brand: 'Honda' },
  { id: 2, year: 18, price: 16700, transmission: 'Manual', mileage: 24500, fuelType: 'Diesel', tax: 140, mpg: 62.3, engineSize: 1.5, brand: 'Volkswagen' },
  { id: 3, year: 17, price: 12500, transmission: 'Automatic', mileage: 32000, fuelType: 'Hybrid', tax: 95, mpg: 76.5, engineSize: 1.8, brand: 'Toyota' },
  { id: 4, year: 20, price: 35400, transmission: 'Automatic', mileage: 1500, fuelType: 'Electric', tax: 0, mpg: 135.0, engineSize: 0.0, brand: 'Tesla' },
  { id: 5, year: 16, price: 9800, transmission: 'Manual', mileage: 58000, fuelType: 'Petrol', tax: 120, mpg: 53.4, engineSize: 1.2, brand: 'Hyundai' },
  { id: 6, year: 15, price: 7200, transmission: 'Manual', mileage: 92000, fuelType: 'Diesel', tax: 45, mpg: 68.9, engineSize: 1.6, brand: 'Ford' },
  { id: 7, year: 19, price: 28900, transmission: 'Automatic', mileage: 6700, fuelType: 'Diesel', tax: 255, mpg: 38.2, engineSize: 3.0, brand: 'BMW' },
  { id: 8, year: 18, price: 20400, transmission: 'Automatic', mileage: 12800, fuelType: 'Petrol', tax: 175, mpg: 47.1, engineSize: 2.0, brand: 'Audi' },
  { id: 9, year: 17, price: 13800, transmission: 'Manual', mileage: 36500, fuelType: 'Diesel', tax: 130, mpg: 61.5, engineSize: 1.6, brand: 'Peugeot' },
  { id: 10, year: 16, price: 11200, transmission: 'Manual', mileage: 41200, fuelType: 'Petrol', tax: 110, mpg: 56.7, engineSize: 1.0, brand: 'Suzuki' },
  { id: 11, year: 19, price: 23900, transmission: 'Automatic', mileage: 8500, fuelType: 'Petrol', tax: 190, mpg: 44.8, engineSize: 1.6, brand: 'Honda' },
  { id: 12, year: 18, price: 16700, transmission: 'Manual', mileage: 24500, fuelType: 'Diesel', tax: 140, mpg: 62.3, engineSize: 1.5, brand: 'Volkswagen' },
  { id: 13, year: 17, price: 12500, transmission: 'Automatic', mileage: 32000, fuelType: 'Hybrid', tax: 95, mpg: 76.5, engineSize: 1.8, brand: 'Toyota' },
  { id: 14, year: 20, price: 35400, transmission: 'Automatic', mileage: 1500, fuelType: 'Electric', tax: 0, mpg: 135.0, engineSize: 0.0, brand: 'Tesla' },
  { id: 15, year: 16, price: 9800, transmission: 'Manual', mileage: 58000, fuelType: 'Petrol', tax: 120, mpg: 53.4, engineSize: 1.2, brand: 'Hyundai' },
  { id: 16, year: 15, price: 7200, transmission: 'Manual', mileage: 92000, fuelType: 'Diesel', tax: 45, mpg: 68.9, engineSize: 1.6, brand: 'Ford' },
  { id: 17, year: 19, price: 28900, transmission: 'Automatic', mileage: 6700, fuelType: 'Diesel', tax: 255, mpg: 38.2, engineSize: 3.0, brand: 'BMW' },
  { id: 18, year: 18, price: 20400, transmission: 'Automatic', mileage: 12800, fuelType: 'Petrol', tax: 175, mpg: 47.1, engineSize: 2.0, brand: 'Audi' },
  { id: 19, year: 17, price: 13800, transmission: 'Manual', mileage: 36500, fuelType: 'Diesel', tax: 130, mpg: 61.5, engineSize: 1.6, brand: 'Peugeot' },
  { id: 20, year: 16, price: 11200, transmission: 'Manual', mileage: 41200, fuelType: 'Petrol', tax: 110, mpg: 56.7, engineSize: 1.0, brand: 'Suzuki' },
  { id: 21, year: 22, price: 52000, transmission: 'Automatic', mileage: 200, fuelType: 'Electric', tax: 0, mpg: 150.0, engineSize: 0.0, brand: 'Lucid' },
  { id: 22, year: 21, price: 33000, transmission: 'Manual', mileage: 10000, fuelType: 'Hybrid', tax: 50, mpg: 90.0, engineSize: 2.0, brand: 'Subaru' },
  { id: 23, year: 20, price: 27500, transmission: 'Automatic', mileage: 6500, fuelType: 'Diesel', tax: 230, mpg: 42.0, engineSize: 3.2, brand: 'Jaguar' },
  { id: 24, year: 19, price: 29500, transmission: 'Automatic', mileage: 7200, fuelType: 'Petrol', tax: 190, mpg: 50.3, engineSize: 2.5, brand: 'Infiniti' },
  { id: 25, year: 18, price: 18500, transmission: 'Manual', mileage: 28000, fuelType: 'Petrol', tax: 160, mpg: 48.5, engineSize: 1.8, brand: 'Mitsubishi' },
  { id: 26, year: 17, price: 14200, transmission: 'Automatic', mileage: 35000, fuelType: 'Diesel', tax: 120, mpg: 55.6, engineSize: 1.6, brand: 'Seat' },
  { id: 27, year: 16, price: 10900, transmission: 'Manual', mileage: 44000, fuelType: 'Petrol', tax: 130, mpg: 52.1, engineSize: 1.2, brand: 'Fiat' },
  { id: 28, year: 15, price: 7800, transmission: 'Automatic', mileage: 98000, fuelType: 'Diesel', tax: 60, mpg: 70.2, engineSize: 1.5, brand: 'Nissan' },
  { id: 29, year: 14, price: 5200, transmission: 'Manual', mileage: 112000, fuelType: 'Petrol', tax: 80, mpg: 60.5, engineSize: 1.0, brand: 'Chevrolet' },
  { id: 30, year: 13, price: 4100, transmission: 'Manual', mileage: 135000, fuelType: 'Diesel', tax: 45, mpg: 65.3, engineSize: 1.4, brand: 'Opel' },
  { id: 31, year: 21, price: 45000, transmission: 'Automatic', mileage: 1500, fuelType: 'Electric', tax: 0, mpg: 140.0, engineSize: 0.0, brand: 'Rivian' },
  { id: 32, year: 20, price: 38000, transmission: 'Automatic', mileage: 5000, fuelType: 'Hybrid', tax: 75, mpg: 88.0, engineSize: 2.4, brand: 'Acura' },
  { id: 33, year: 19, price: 25500, transmission: 'Manual', mileage: 11000, fuelType: 'Petrol', tax: 185, mpg: 49.5, engineSize: 2.2, brand: 'Mazda' },
  { id: 34, year: 18, price: 19500, transmission: 'Automatic', mileage: 20000, fuelType: 'Diesel', tax: 210, mpg: 40.3, engineSize: 2.7, brand: 'Jeep' },
  { id: 35, year: 17, price: 14200, transmission: 'Manual', mileage: 35000, fuelType: 'Petrol', tax: 160, mpg: 55.1, engineSize: 1.5, brand: 'Dodge' },
  { id: 36, year: 16, price: 8900, transmission: 'Manual', mileage: 58000, fuelType: 'Diesel', tax: 125, mpg: 62.0, engineSize: 1.6, brand: 'Buick' },
  { id: 37, year: 15, price: 7300, transmission: 'Automatic', mileage: 93000, fuelType: 'Hybrid', tax: 95, mpg: 75.2, engineSize: 1.8, brand: 'Chrysler' },
  { id: 38, year: 14, price: 5400, transmission: 'Manual', mileage: 118000, fuelType: 'Petrol', tax: 85, mpg: 58.4, engineSize: 1.2, brand: 'Pontiac' },
  { id: 39, year: 13, price: 4100, transmission: 'Manual', mileage: 138000, fuelType: 'Diesel', tax: 50, mpg: 65.1, engineSize: 1.4, brand: 'Saab' },
  { id: 40, year: 22, price: 55000, transmission: 'Automatic', mileage: 800, fuelType: 'Electric', tax: 0, mpg: 155.0, engineSize: 0.0, brand: 'Polestar' },
  { id: 41, year: 21, price: 43000, transmission: 'Automatic', mileage: 3000, fuelType: 'Hybrid', tax: 60, mpg: 95.0, engineSize: 2.0, brand: 'Genesis' },
  { id: 42, year: 20, price: 27500, transmission: 'Manual', mileage: 7200, fuelType: 'Diesel', tax: 195, mpg: 42.3, engineSize: 3.0, brand: 'Alfa Romeo' },
  { id: 51, year: 22, price: 62000, transmission: 'Automatic', mileage: 900, fuelType: 'Electric', tax: 0, mpg: 160.0, engineSize: 0.0, brand: 'Lucid' },
  { id: 52, year: 21, price: 48000, transmission: 'Automatic', mileage: 2000, fuelType: 'Hybrid', tax: 70, mpg: 102.0, engineSize: 2.5, brand: 'Lincoln' },
  { id: 53, year: 20, price: 31000, transmission: 'Manual', mileage: 8500, fuelType: 'Diesel', tax: 190, mpg: 46.5, engineSize: 2.8, brand: 'Cadillac' },
  { id: 54, year: 19, price: 26000, transmission: 'Automatic', mileage: 12500, fuelType: 'Petrol', tax: 200, mpg: 42.0, engineSize: 2.0, brand: 'Subaru' },
  { id: 55, year: 18, price: 18500, transmission: 'Manual', mileage: 27500, fuelType: 'Diesel', tax: 145, mpg: 55.3, engineSize: 1.7, brand: 'Mitsubishi' },
  { id: 56, year: 17, price: 13500, transmission: 'Automatic', mileage: 35000, fuelType: 'Hybrid', tax: 100, mpg: 78.0, engineSize: 1.8, brand: 'Infiniti' },
  { id: 57, year: 16, price: 9700, transmission: 'Manual', mileage: 60000, fuelType: 'Petrol', tax: 115, mpg: 54.8, engineSize: 1.3, brand: 'Fiat' },
  { id: 58, year: 15, price: 6900, transmission: 'Manual', mileage: 98000, fuelType: 'Diesel', tax: 65, mpg: 68.5, engineSize: 1.5, brand: 'Opel' },
  { id: 59, year: 14, price: 5000, transmission: 'Automatic', mileage: 120000, fuelType: 'Hybrid', tax: 90, mpg: 74.2, engineSize: 1.6, brand: 'Chery' },
  { id: 60, year: 13, price: 4200, transmission: 'Manual', mileage: 140000, fuelType: 'Petrol', tax: 80, mpg: 59.7, engineSize: 1.0, brand: 'Daihatsu' },
  { id: 61, year: 22, price: 58000, transmission: 'Automatic', mileage: 700, fuelType: 'Electric', tax: 0, mpg: 150.0, engineSize: 0.0, brand: 'Rivian' },
  { id: 62, year: 21, price: 45000, transmission: 'Automatic', mileage: 1800, fuelType: 'Hybrid', tax: 75, mpg: 98.5, engineSize: 2.4, brand: 'Genesis' },
  { id: 63, year: 20, price: 29500, transmission: 'Manual', mileage: 7800, fuelType: 'Diesel', tax: 180, mpg: 48.7, engineSize: 2.2, brand: 'Alfa Romeo' },
  { id: 64, year: 19, price: 25000, transmission: 'Automatic', mileage: 13200, fuelType: 'Petrol', tax: 195, mpg: 40.5, engineSize: 2.1, brand: 'Jaguar' },
  { id: 65, year: 18, price: 17200, transmission: 'Manual', mileage: 28900, fuelType: 'Diesel', tax: 140, mpg: 58.6, engineSize: 1.8, brand: 'SEAT' },
  { id: 66, year: 17, price: 12800, transmission: 'Automatic', mileage: 34500, fuelType: 'Hybrid', tax: 105, mpg: 80.0, engineSize: 1.7, brand: 'Aston Martin' },
  { id: 67, year: 16, price: 9200, transmission: 'Manual', mileage: 59000, fuelType: 'Petrol', tax: 110, mpg: 52.3, engineSize: 1.4, brand: 'Nissan' },
  { id: 68, year: 15, price: 6700, transmission: 'Manual', mileage: 99000, fuelType: 'Diesel', tax: 55, mpg: 66.8, engineSize: 1.3, brand: 'Chevrolet' },
  { id: 69, year: 14, price: 4900, transmission: 'Automatic', mileage: 118000, fuelType: 'Hybrid', tax: 85, mpg: 72.5, engineSize: 1.5, brand: 'Lancia' },
  { id: 70, year: 13, price: 4100, transmission: 'Manual', mileage: 138000, fuelType: 'Petrol', tax: 78, mpg: 60.2, engineSize: 1.1, brand: 'Tata' },
  { id: 71, year: 22, price: 65000, transmission: 'Automatic', mileage: 1200, fuelType: 'Electric', tax: 0, mpg: 158.0, engineSize: 0.0, brand: 'Rivian' },
  { id: 72, year: 21, price: 50000, transmission: 'Automatic', mileage: 1800, fuelType: 'Hybrid', tax: 75, mpg: 99.5, engineSize: 2.4, brand: 'Genesis' },
  { id: 73, year: 20, price: 29500, transmission: 'Manual', mileage: 9000, fuelType: 'Diesel', tax: 185, mpg: 48.2, engineSize: 2.9, brand: 'GMC' },
  { id: 74, year: 19, price: 27500, transmission: 'Automatic', mileage: 14000, fuelType: 'Petrol', tax: 195, mpg: 40.5, engineSize: 2.1, brand: 'Mazda' },
  { id: 75, year: 18, price: 17800, transmission: 'Manual', mileage: 28500, fuelType: 'Diesel', tax: 135, mpg: 57.0, engineSize: 1.8, brand: 'Seat' },
  { id: 76, year: 17, price: 14000, transmission: 'Automatic', mileage: 36000, fuelType: 'Hybrid', tax: 105, mpg: 79.5, engineSize: 1.7, brand: 'Acura' },
  { id: 77, year: 16, price: 9300, transmission: 'Manual', mileage: 62000, fuelType: 'Petrol', tax: 110, mpg: 52.3, engineSize: 1.4, brand: 'Citroën' },
  { id: 78, year: 15, price: 7100, transmission: 'Manual', mileage: 96000, fuelType: 'Diesel', tax: 70, mpg: 67.2, engineSize: 1.6, brand: 'Skoda' },
  { id: 79, year: 14, price: 5300, transmission: 'Automatic', mileage: 118000, fuelType: 'Hybrid', tax: 95, mpg: 72.8, engineSize: 1.5, brand: 'Lancia' },
  { id: 80, year: 13, price: 4000, transmission: 'Manual', mileage: 145000, fuelType: 'Petrol', tax: 85, mpg: 58.0, engineSize: 1.1, brand: 'Saab' },
  { id: 81, year: 22, price: 68000, transmission: 'Automatic', mileage: 1000, fuelType: 'Electric', tax: 0, mpg: 160.0, engineSize: 0.0, brand: 'Rivian' },
  { id: 82, year: 21, price: 53000, transmission: 'Automatic', mileage: 2200, fuelType: 'Hybrid', tax: 90, mpg: 95.0, engineSize: 2.0, brand: 'Toyota' },
  { id: 83, year: 20, price: 31500, transmission: 'Manual', mileage: 11000, fuelType: 'Diesel', tax: 190, mpg: 45.0, engineSize: 2.5, brand: 'Ford' },
  { id: 84, year: 19, price: 29000, transmission: 'Automatic', mileage: 15500, fuelType: 'Petrol', tax: 205, mpg: 42.0, engineSize: 2.2, brand: 'Honda' },
  { id: 85, year: 18, price: 18200, transmission: 'Manual', mileage: 26500, fuelType: 'Diesel', tax: 140, mpg: 58.5, engineSize: 1.9, brand: 'Volkswagen' },
  { id: 86, year: 17, price: 14500, transmission: 'Automatic', mileage: 40000, fuelType: 'Hybrid', tax: 110, mpg: 82.0, engineSize: 1.6, brand: 'Hyundai' },
  { id: 87, year: 16, price: 9800, transmission: 'Manual', mileage: 55000, fuelType: 'Petrol', tax: 115, mpg: 50.5, engineSize: 1.3, brand: 'Peugeot' },
  { id: 88, year: 15, price: 7200, transmission: 'Manual', mileage: 95000, fuelType: 'Diesel', tax: 75, mpg: 68.5, engineSize: 1.7, brand: 'Fiat' },
  { id: 89, year: 14, price: 5400, transmission: 'Automatic', mileage: 120000, fuelType: 'Hybrid', tax: 100, mpg: 75.0, engineSize: 1.4, brand: 'Mitsubishi' },
  { id: 90, year: 13, price: 4200, transmission: 'Manual', mileage: 130000, fuelType: 'Petrol', tax: 85, mpg: 60.0, engineSize: 1.2, brand: 'Nissan' },
  { id: 91, year: 22, price: 71000, transmission: 'Automatic', mileage: 1500, fuelType: 'Electric', tax: 0, mpg: 155.0, engineSize: 0.0, brand: 'Tesla' },
  { id: 92, year: 21, price: 48000, transmission: 'Automatic', mileage: 1800, fuelType: 'Hybrid', tax: 95, mpg: 90.5, engineSize: 2.3, brand: 'BMW' },
  { id: 93, year: 20, price: 31000, transmission: 'Manual', mileage: 12500, fuelType: 'Diesel', tax: 200, mpg: 47.0, engineSize: 2.6, brand: 'Audi' },
  { id: 94, year: 19, price: 28000, transmission: 'Automatic', mileage: 14500, fuelType: 'Petrol', tax: 195, mpg: 41.0, engineSize: 2.1, brand: 'Mercedes-Benz' },
  { id: 95, year: 18, price: 18500, transmission: 'Manual', mileage: 24000, fuelType: 'Diesel', tax: 135, mpg: 60.5, engineSize: 1.9, brand: 'Skoda' },
  { id: 96, year: 17, price: 14800, transmission: 'Automatic', mileage: 35000, fuelType: 'Hybrid', tax: 110, mpg: 80.0, engineSize: 1.7, brand: 'Ford' },
  { id: 97, year: 16, price: 9900, transmission: 'Manual', mileage: 60000, fuelType: 'Petrol', tax: 120, mpg: 52.0, engineSize: 1.4, brand: 'Renault' },
  { id: 98, year: 15, price: 7300, transmission: 'Manual', mileage: 90000, fuelType: 'Diesel', tax: 70, mpg: 69.0, engineSize: 1.6, brand: 'Chevrolet' },
  { id: 99, year: 14, price: 5500, transmission: 'Automatic', mileage: 110000, fuelType: 'Hybrid', tax: 95, mpg: 73.5, engineSize: 1.5, brand: 'Kia' },
  { id:100, year: 13, price: 4300, transmission: 'Manual', mileage: 125000, fuelType: 'Petrol', tax: 85, mpg: 59.5, engineSize: 1.3, brand: 'Opel' }
];

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: true,
      ordering: true,
      responsive: true
    };
    this.dtTrigger.next(null);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
