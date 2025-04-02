import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs';

// Importar amCharts 5
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-carros',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit, AfterViewInit, OnDestroy {

  // Usamos "any" para evitar el error de namespace
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  // Datos de ejemplo para la tabla y el gráfico (Carros)
  data = [
    { id: 1, year: 2019, price: 23900, transmission: 'Automatic', brand: 'Honda' },
    { id: 2, year: 2018, price: 16700, transmission: 'Manual', brand: 'Volkswagen' },
    { id: 3, year: 2017, price: 12500, transmission: 'Automatic', brand: 'Toyota' },
    { id: 4, year: 2020, price: 35400, transmission: 'Automatic', brand: 'Tesla' },
    { id: 5, year: 2016, price: 9800, transmission: 'Manual', brand: 'Hyundai' },
    { id: 6, year: 2021, price: 42800, transmission: 'Automatic', brand: 'BMW' },
    { id: 7, year: 2015, price: 8700, transmission: 'Manual', brand: 'Ford' },
    { id: 8, year: 2019, price: 21300, transmission: 'Automatic', brand: 'Mazda' },
    { id: 9, year: 2017, price: 15100, transmission: 'Manual', brand: 'Nissan' },
    { id: 10, year: 2022, price: 52000, transmission: 'Automatic', brand: 'Mercedes-Benz' },
    { id: 11, year: 2020, price: 27800, transmission: 'Automatic', brand: 'Audi' },
    { id: 12, year: 2018, price: 18900, transmission: 'Manual', brand: 'Chevrolet' },
    { id: 13, year: 2016, price: 9700, transmission: 'Manual', brand: 'Kia' },
    { id: 14, year: 2019, price: 24300, transmission: 'Automatic', brand: 'Subaru' },
    { id: 15, year: 2017, price: 13200, transmission: 'Manual', brand: 'Peugeot' },
    { id: 16, year: 2021, price: 31000, transmission: 'Automatic', brand: 'Lexus' },
    { id: 17, year: 2020, price: 29400, transmission: 'Automatic', brand: 'Volvo' },
    { id: 18, year: 2015, price: 8700, transmission: 'Manual', brand: 'Fiat' },
    { id: 19, year: 2019, price: 27500, transmission: 'Automatic', brand: 'Jaguar' },
    { id: 20, year: 2018, price: 18400, transmission: 'Manual', brand: 'Renault' },
    { id: 21, year: 2022, price: 54000, transmission: 'Automatic', brand: 'Porsche' },
    { id: 22, year: 2016, price: 9900, transmission: 'Manual', brand: 'Citroën' },
    { id: 23, year: 2019, price: 26800, transmission: 'Automatic', brand: 'Land Rover' },
    { id: 24, year: 2017, price: 14200, transmission: 'Manual', brand: 'Mitsubishi' },
    { id: 25, year: 2021, price: 32600, transmission: 'Automatic', brand: 'Infiniti' },
    { id: 26, year: 2020, price: 28100, transmission: 'Automatic', brand: 'Acura' },
    { id: 27, year: 2015, price: 9300, transmission: 'Manual', brand: 'Suzuki' },
    { id: 28, year: 2018, price: 19100, transmission: 'Automatic', brand: 'Chrysler' },
    { id: 29, year: 2016, price: 10400, transmission: 'Manual', brand: 'Dodge' },
    { id: 30, year: 2022, price: 49500, transmission: 'Automatic', brand: 'Cadillac' },
    { id: 31, year: 2019, price: 21500, transmission: 'Automatic', brand: 'Seat' },
    { id: 32, year: 2017, price: 12900, transmission: 'Manual', brand: 'Opel' },
    { id: 33, year: 2021, price: 34500, transmission: 'Automatic', brand: 'Genesis' },
    { id: 34, year: 2020, price: 29900, transmission: 'Automatic', brand: 'Alfa Romeo' },
    { id: 35, year: 2018, price: 17500, transmission: 'Manual', brand: 'Mini' }
  ];
  

  // Variables para amCharts
  private chartRoot!: am5.Root;
  private chart!: am5xy.XYChart;
  private series!: am5xy.ColumnSeries;

  ngOnInit(): void {
    // Configuración de DataTables
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      responsive: true
    };

    // Disparar el trigger después de que se renderice la tabla
    this.dtTrigger.next(null);
  }

  // Crear el gráfico después de que la vista se haya inicializado
  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    // Crear la raíz de amCharts en el div con id "chartdiv"
    this.chartRoot = am5.Root.new("chartdiv");

    // Aplicar tema Animated
    this.chartRoot.setThemes([
      am5themes_Animated.new(this.chartRoot)
    ]);

    // Crear el gráfico XY
    this.chart = this.chartRoot.container.children.push(
      am5xy.XYChart.new(this.chartRoot, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        scrollbarX: am5.Scrollbar.new(this.chartRoot, { orientation: "horizontal" }),
        scrollbarY: am5.Scrollbar.new(this.chartRoot, { orientation: "vertical" }),
        pinchZoomX: true
      })
    );

    // Crear eje X (categoría: brand)
    let xAxis = this.chart.xAxes.push(
      am5xy.CategoryAxis.new(this.chartRoot, {
        categoryField: "brand",
        renderer: am5xy.AxisRendererX.new(this.chartRoot, { minGridDistance: 30 })
      })
    );

    // Crear eje Y (valor: price)
    let yAxis = this.chart.yAxes.push(
      am5xy.ValueAxis.new(this.chartRoot, {
        renderer: am5xy.AxisRendererY.new(this.chartRoot, {})
      })
    );

    // Crear la serie de columnas
    this.series = this.chart.series.push(
      am5xy.ColumnSeries.new(this.chartRoot, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "price",
        categoryXField: "brand",
        tooltip: am5.Tooltip.new(this.chartRoot, { labelText: "{valueY}" })
      })
    );

    // Asignar datos al gráfico
    xAxis.data.setAll(this.data);
    this.series.data.setAll(this.data);

    // Animaciones de aparición
    this.series.appear(1000);
    this.chart.appear(1000, 100);
  }

  ngOnDestroy(): void {
    // Liberar el trigger de DataTables
    this.dtTrigger.unsubscribe();

    // Disponer el gráfico para evitar fugas de memoria
    if (this.chartRoot) {
      this.chartRoot.dispose();
    }
  }
}
