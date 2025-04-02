import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

// Imports de amCharts 5
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  dtOptions: any = {};
  
  // Datos de ejemplo para la tabla (y para la gráfica)
  datos = [
    { id: 1, firstName: 'derek',    lastName: 'sesni',     couples: 3 },
    { id: 2, firstName: 'diego',    lastName: 'rivera',     couples: 2 },
    { id: 3, firstName: 'obed',     lastName: 'guzman',   couples: 5 },
    { id: 4, firstName: 'citlalli', lastName: 'koudionicio', couples: 1 },
    { id: 5, firstName: 'al',       lastName: 'farias',      couples: 0 },
    { id: 6, firstName: 'matias',   lastName: 'granillo',   couples: 4 },
    { id: 7, firstName: 'yazmin',   lastName: 'gutierez',      couples: 3 },
    { id: 8, firstName: 'carlos',   lastName: 'pluma',  couples: 5 },
    { id: 9, firstName: 'daniel',   lastName: 'Salas',     couples: 2 },
    { id: 10, firstName: 'say',     lastName: 'romero',     couples: 1 },
    { id: 11, firstName: 'angel',   lastName: 'baños',         couples: 0 },
    { id: 12, firstName: 'dulce',   lastName: 'garcia',  couples: 3 },
    { id: 13, firstName: 'teresa',  lastName: 'ramirez',    couples: 4 },
    { id: 14, firstName: 'ppyo',    lastName: 'ppyo',   couples: 2 },
    { id: 15, firstName: 'adrian',  lastName: 'reyes',      couples: 3 },
    { id: 16, firstName: 'chuchin', lastName: 'Bane',      couples: 6 },
    { id: 17, firstName: 'pako',    lastName: 'Sparrow',   couples: 2 },
    { id: 18, firstName: 'paquito', lastName: 'Finn',      couples: 1 },
    { id: 19, firstName: 'mau',     lastName: 'Lebowski',  couples: 4 },
    { id: 20, firstName: 'jenni',   lastName: 'Swan',      couples: 3 },
    { id: 21, firstName: 'jhonathan', lastName: 'Riddle',  couples: 5 },
    { id: 22, firstName: 'brisa',   lastName: 'Granger',   couples: 5 },
    { id: 23, firstName: 'Mark',    lastName: 'Skywalker', couples: 2 }
  ];

  // Variable para el root del gráfico (para poder limpiarlo en OnDestroy)
  private root: am5.Root | undefined;

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json'
      }
    };
  }

  // Inicializamos el gráfico después de que la vista ya esté renderizada
  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    // Crear el root del gráfico en el div con id "chartdiv"
    this.root = am5.Root.new("chartdiv");

    // Aplicar el tema Animated
    this.root.setThemes([
      am5themes_Animated.new(this.root)
    ]);

    // Crear el gráfico XY
    let chart = this.root.container.children.push(
      am5xy.XYChart.new(this.root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        paddingLeft: 0,
        layout: this.root.verticalLayout
      })
    );

    // Agregar cursor al gráfico
    let cursor = chart.set("cursor", am5xy.XYCursor.new(this.root, {}));
    cursor.lineY.set("visible", false);

    // Configurar eje X (categoría: nombre)
    let xRenderer = am5xy.AxisRendererX.new(this.root, {
      minGridDistance: 30,
      minorGridEnabled: true
    });
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(this.root, {
        categoryField: "firstName",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(this.root, {})
      })
    );
    xRenderer.grid.template.set("visible", false);

    // Configurar eje Y (valor: parejas)
    let yRenderer = am5xy.AxisRendererY.new(this.root, {});
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(this.root, {
        min: 0,
        renderer: yRenderer
      })
    );
    yRenderer.grid.template.setAll({
      strokeDasharray: [2, 2]
    });

    // Crear la serie de columnas
    let series = chart.series.push(
      am5xy.ColumnSeries.new(this.root, {
        name: "Parejas",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "couples",
        categoryXField: "firstName",
        tooltip: am5.Tooltip.new(this.root, { labelText: "{valueY}" })
      })
    );

    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0
    });

    // Adaptadores para que cada columna tenga un color distinto
series.columns.template.adapters.add("fill", (fill, target) => {
  const colors = chart.get("colors"); // Guardamos los colores en una variable
  if (colors) {
    return colors.getIndex(series.columns.indexOf(target));
  }
  return am5.color(0x000000); // Color de respaldo si colors es undefined
});

series.columns.template.adapters.add("stroke", (stroke, target) => {
  const colors = chart.get("colors"); // Guardamos los colores en una variable
  if (colors) {
    return colors.getIndex(series.columns.indexOf(target));
  }
  return am5.color(0x000000); // Color de respaldo si colors es undefined
});


    // Preparar los datos para el gráfico: tomamos "firstName" y "couples" de cada elemento
    let chartData = this.datos.map(item => ({
      firstName: item.firstName,
      couples: item.couples
    }));

    // Asignar los datos a los ejes y la serie
    xAxis.data.setAll(chartData);
    series.data.setAll(chartData);

    // Animar la aparición del gráfico
    series.appear(1000);
    chart.appear(1000, 100);
  }

  ngOnDestroy(): void {
    // Liberar el recurso gráfico para evitar fugas de memoria
    if (this.root) {
      this.root.dispose();
    }
  }
}
