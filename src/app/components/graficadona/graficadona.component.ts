import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@ViewChild('txtProgress1') txtProgress1: ElementRef;
  
@Input('nombre1') leyenda1: string = 'Leyenda';
@Input() progreso1: number1 = 50;

@Output( 'actualizaValor' ) cambioValor: EventEmitter<number> = new EventEmitter();

@Component({
  selector: 'app-graficadona',
  templateUrl: './graficadona.component.html',
  styles: []
})
export class GraficadonaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
