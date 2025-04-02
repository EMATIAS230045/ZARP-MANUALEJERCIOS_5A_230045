import { Component, ElementRef, OnInit, OnDestroy, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

// AmCharts imports
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-amchart',
  standalone: true,
  imports: [CommonModule],
  template: `<div #chartdiv style="width: 100%; height: 500px;"></div>`,
  styles: []
})
export class AmchartComponent implements OnInit, OnDestroy {
  @ViewChild('chartdiv', { static: true }) chartDiv!: ElementRef;
  
  private root!: am5.Root;
  private http = inject(HttpClient);

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<{ data: { firstName: string; couples: number }[] }>('http://localhost:3000/api/data')
      .subscribe(response => {
        const formattedData = response.data.map(user => ({
          country: user.firstName, // Usar el nombre como categoría en el eje X
          value: user.couples  // Usar el número de parejas como valor de la barra
        }));
        this.createChart(formattedData);
      });
  }

  createChart(data: { country: string; value: number }[]) {
    if (this.root) {
      this.root.dispose();  // Limpiar el gráfico anterior si existe
    }
    
    this.root = am5.Root.new(this.chartDiv.nativeElement);
    this.root.setThemes([am5themes_Animated.new(this.root)]);

    let chart = this.root.container.children.push(
      am5xy.XYChart.new(this.root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX"
      })
    );

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(this.root, {
      categoryField: "country",
      renderer: am5xy.AxisRendererX.new(this.root, {
        minGridDistance: 30  // Mejorar la visualización de las categorías
      })
    }));
    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
      renderer: am5xy.AxisRendererY.new(this.root, {})
    }));

    let series = chart.series.push(am5xy.ColumnSeries.new(this.root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      categoryXField: "country"
    }));
    series.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();  // Limpiar el gráfico cuando el componente se destruye
    }
  }
}
