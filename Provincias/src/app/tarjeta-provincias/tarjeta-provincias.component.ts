import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tarjeta-provincias',
  templateUrl: './tarjeta-provincias.component.html',
  styleUrls: ['./tarjeta-provincias.component.scss']
})
export class TarjetaProvinciasComponent implements OnInit {
@Input() prov: any;
@Input() pagina: any;
@Input() municipioApi: any;
  constructor() { }
title="Provincias";

  ngOnInit(): void {

  }
  
}
