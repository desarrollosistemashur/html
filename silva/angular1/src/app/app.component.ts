import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{ 
  title = 'provincias';

public provincias:any=[];
public traerProvincias(){
  fetch('https://apis.datos.gob.ar/georef/api/provincias').then(r=>r.json()).then(p=>{
    this.provincias=p.provincias
    console.log(this.provincias)
  })}
ngOnInit(): void{
  this.traerProvincias()
}
}

