import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.scss']
})
export class ProvinciasComponent implements OnInit {
  @Input() prov: any;

  public id?: number;
  public nombre?: string;
  public longitud?: number;
  public latitud?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
