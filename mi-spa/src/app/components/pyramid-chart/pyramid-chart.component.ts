import { Component, OnInit, OnDestroy } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-pyramid-chart',
  templateUrl: './pyramid-chart.component.html',
  styleUrls: ['./pyramid-chart.component.css']
})
export class PyramidChartComponent implements OnInit, OnDestroy {
  private root!: am5.Root;
  
  private data = [{
    age: "85+",
    male: -0.1,
    female: 0.3
  },
  {
    age: "80-54",
    male: -0.2,
    female: 0.3
  },
  {
    age: "75-79",
    male: -0.3,
    female: 0.6
  },
  {
    age: "70-74",
    male: -0.5,
    female: 0.8
  },
  {
    age: "65-69",
    male: -0.8,
    female: 1.0
  },
  {
    age: "60-64",
    male: -1.1,
    female: 1.3
  },
  {
    age: "55-59",
    male: -1.7,
    female: 1.9
  },
  {
    age: "50-54",
    male: -2.2,
    female: 2.5
  },
  {
    age: "45-49",
    male: -2.8,
    female: 3.0
  },
  {
    age: "40-44",
    male: -3.4,
    female: 3.6
  },
  {
    age: "35-39",
    male: -4.2,
    female: 4.1
  },
  {
    age: "30-34",
    male: -5.2,
    female: 4.8
  },
  {
    age: "25-29",
    male: -5.6,
    female: 5.1
  },
  {
    age: "20-24",
    male: -5.1,
    female: 5.1
  },
  {
    age: "15-19",
    male: -3.8,
    female: 3.8
  },
  {
    age: "10-14",
    male: -3.2,
    female: 3.4
  },
  {
    age: "5-9",
    male: -4.4,
    female: 4.1
  },
  {
    age: "0-4",
    male: -5.0,
    female: 4.8
  }];

  ngOnInit() {
    this.root = am5.Root.new('pyramiddiv');
    this.root.setThemes([am5themes_Animated.new(this.root)]);

    const chart = this.root.container.children.push(
      am5xy.XYChart.new(this.root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: this.root.verticalLayout,
        arrangeTooltips: false,
        paddingLeft: 0,
        paddingRight: 10
      })
    ) as am5xy.XYChart;

    // ... (configuración previa igual)

    // Crear ejes con tipos específicos
    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(this.root, {
        categoryField: "age",
        renderer: am5xy.AxisRendererY.new(this.root, {
          inversed: true,
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
          minorGridEnabled: true,
          minGridDistance: 20
        })
      })
    ) as am5xy.CategoryAxis<am5xy.AxisRendererY>; // <-- Tipo específico
    
    yAxis.data.setAll(this.data);

    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(this.root, {
        renderer: am5xy.AxisRendererX.new(this.root, {
          minGridDistance: 60,
          strokeOpacity: 0.1
        })
      })
    ) as am5xy.ValueAxis<am5xy.AxisRendererX>; // <-- Tipo específico

    // Llamadas corregidas
    this.createSeries(chart, xAxis, yAxis, "male", am5.p100, "right", -3);
    this.createSeries(chart, xAxis, yAxis, "female", am5.percent(0), "left", 4);

    // ... (resto igual)
  }

  private createSeries(
    chart: am5xy.XYChart,
    xAxis: am5xy.ValueAxis<am5xy.AxisRendererX>,
    yAxis: am5xy.CategoryAxis<am5xy.AxisRendererY>,
    field: string,
    labelCenterX: am5.Percent,
    pointerOrientation: "left" | "right",
    rangeValue: number
  ) {
    const series = chart.series.push(
      am5xy.ColumnSeries.new(this.root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: field,
        categoryYField: "age",
        sequencedInterpolation: true,
        clustered: false,
        tooltip: am5.Tooltip.new(this.root, {
          pointerOrientation: pointerOrientation,
          labelText: "{categoryY}: {valueX}"
        })
      })
    ) as am5xy.ColumnSeries; // <-- Tipo específico

    // ... (configuración de columnas igual)

    series.data.setAll(this.data);

    // Corregir acceso a propiedades opcionales
    const rangeDataItem = xAxis.makeDataItem({ value: rangeValue });
    xAxis.createAxisRange(rangeDataItem);
    
    // Usar optional chaining
    rangeDataItem.get("grid")?.setAll({
      strokeOpacity: 1,
      stroke: series.get("stroke")
    });

    const label = rangeDataItem.get("label");
    // Verificar existencia del label
    if (label) {
      label.setAll({
        text: field.toUpperCase(),
        fontSize: "1.1em",
        fill: series.get("stroke"),
        paddingTop: 10,
        isMeasured: false,
        centerX: labelCenterX
      });
      
      label.adapters.add("dy", () => {
        return -chart.plotContainer.height();
      });
    }

    return series;
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }
}