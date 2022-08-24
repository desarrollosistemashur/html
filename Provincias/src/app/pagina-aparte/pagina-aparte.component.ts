import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-aparte',
  templateUrl: './pagina-aparte.component.html',
  styleUrls: ['./pagina-aparte.component.scss']
})
export class PaginaAparteComponent implements OnInit {
 public prov: any={};
 public municipioApi: any={};
  constructor(route:ActivatedRoute) { 
    this.prov.id=route.snapshot.paramMap.get("id");
    this.prov.nombre=route.snapshot.paramMap.get("nombre");
    this.prov.centroide={};
    this.prov.centroide.lat=route.snapshot.paramMap.get("lat");
    this.prov.centroide.lon=route.snapshot.paramMap.get("lon");
  }

  ngOnInit(): void {
    this.apiMunicipio()
  }
  apiMunicipio(){
    fetch(" https://apis.datos.gob.ar/georef/api/municipios?provincia=p&max=2000")
      .then(response=>response.json())
      .then(municipioApi => this.municipioApi=municipioApi.nombre)
  }
}
