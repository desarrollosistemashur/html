import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tarjeta-provincia',
  templateUrl: './tarjeta-provincia.component.html',
  styleUrls: ['./tarjeta-provincia.component.scss']
})
export class TarjetaProvinciaComponent implements OnInit {
  
  @Input() prov: any;

  constructor() { }

  ngOnInit(): void {
  }



}
