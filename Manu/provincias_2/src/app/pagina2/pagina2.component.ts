import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.scss']
})
export class Pagina2Component implements OnInit {
  public p: any;
  public municipios: any = [];

  constructor(route: ActivatedRoute) {
    this.p = {
      "id": route.snapshot.paramMap.get("id"),
      "nombre": route.snapshot.paramMap.get("nom"),
      "centroide": {
        "lat": route.snapshot.paramMap.get("lat"),
        "lon": route.snapshot.paramMap.get("lon"),
      }
    }
  }

  ngOnInit(): void {
    this.consultar_municipios(this.p.id)
  }


  public consultar_municipios(id: number) {
    fetch("https://apis.datos.gob.ar/georef/api/municipios?provincia=" + id + "&max=2000")
      .then(R=>R.json())
      .then(datos=>{
        this.municipios = datos.municipios;
        console.log(JSON.stringify(this.municipios))
      });
  }
}
