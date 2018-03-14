import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-graficadona',
  templateUrl: './graficadona.component.html',
  styles: []
})
export class GraficadonaComponent implements OnInit {

   // Doughnut
    @Input('ChartLabels') public doughnutChartLabels: string[] = [];
    @Input('ChartData') public doughnutChartData: number[] = [];
    @Input('ChartType') public doughnutChartType: string = '';
    
  constructor() { }

  ngOnInit() {
  }

}
