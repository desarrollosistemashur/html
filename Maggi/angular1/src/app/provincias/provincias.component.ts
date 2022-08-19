import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.scss']
})
export class ProvinciasComponent implements OnInit {

  @Input() prov:any;

  constructor() { }
 
  ngOnInit(): void {
  }

}
