import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-provincias',
  templateUrl: './tarjeta-provincias.component.html',
  styleUrls: ['./tarjeta-provincias.component.scss']
})
export class TarjetaProvinciasComponent implements OnInit {
@Input() prov: any;

  constructor() { }
title="Provincias";

  ngOnInit(): void {

  }

}
