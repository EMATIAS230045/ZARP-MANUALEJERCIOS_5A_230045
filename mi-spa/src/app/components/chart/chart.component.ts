import { Component, Inject, NgZone, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnDestroy {
  private root!: am5.Root;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone
  ) {}

  // Ejecutar solo en el navegador
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    this.browserOnly(() => {
      this.root = am5.Root.new('chartdiv');
      
      this.root.setThemes([am5themes_Animated.new(this.root)]);

      const chart = this.root.container.children.push(
        am5xy.XYChart.new(this.root, {
          panY: false,
          layout: this.root.verticalLayout,
          paddingLeft: 15,
          paddingRight: 15
        })
      );

      // Datos
      const data = [
        { category: "Research", value1: 1000, value2: 588 },
        { category: "Marketing", value1: 1200, value2: 1800 },
        { category: "Sales", value1: 850, value2: 1230 }
      ];

      // Eje X
      const xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(this.root, {
          renderer: am5xy.AxisRendererX.new(this.root, {
            minGridDistance: 30
          }),
          categoryField: "category"
        })
      );
      xAxis.data.setAll(data);

      // Eje Y
      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(this.root, {
          renderer: am5xy.AxisRendererY.new(this.root, {
            strokeOpacity: 0.1
          })
        })
      );

      // Series
      const series1 = chart.series.push(
        am5xy.ColumnSeries.new(this.root, {
          name: "Serie 1",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value1",
          categoryXField: "category",
          tooltip: am5.Tooltip.new(this.root, {
            labelText: "{name}: {valueY}"
          })
        })
      );
      series1.data.setAll(data);
      series1.columns.template.setAll({
        width: am5.percent(40),
        fillOpacity: 0.8
      });

      const series2 = chart.series.push(
        am5xy.ColumnSeries.new(this.root, {
          name: "Serie 2",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value2",
          categoryXField: "category",
          tooltip: am5.Tooltip.new(this.root, {
            labelText: "{name}: {valueY}"
          })
        })
      );
      series2.data.setAll(data);
      series2.columns.template.setAll({
        width: am5.percent(40),
        fillOpacity: 0.8
      });

      // Leyenda
      const legend = chart.children.push(am5.Legend.new(this.root, {
        centerX: am5.p50,
        x: am5.p50
      }));
      legend.data.setAll(chart.series.values);

      // Cursor
      chart.set("cursor", am5xy.XYCursor.new(this.root, {}));

      // Animaciones
      chart.appear(1000, 100);
    });
  }

  ngOnDestroy() {
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}