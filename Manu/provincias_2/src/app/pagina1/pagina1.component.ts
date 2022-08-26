import { Component, OnInit } from '@angular/core';
import { ProvinciasComponent } from '../provincias/provincias.component';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component implements OnInit {

  title = 'provincias';
  public provincias: any = []; 
  public municipios: any = [];
  public prov_seleccionada: any;

  constructor() { }

  ngOnInit(): void {
    this.consultar_provincias();
  }

  public consultar_provincias() {
    this.provincias = fetch("https://apis.datos.gob.ar/georef/api/provincias")
      .then(R=>R.json())
      .then(datos=>{
        this.provincias = datos.provincias;
      });
  }


  public async consultar_municipios(id: number) {
    this.municipios = fetch("https://apis.datos.gob.ar/georef/api/municipios?provincia=" + id + "&max=2000")
      .then(R=>R.json())
      .then(datos=>{
        this.municipios = datos.municipios;
      });
    console.log(JSON.stringify(this.municipios))
  }


  seleccionar_municipio(prov: ProvinciasComponent) {
    if (this.prov_seleccionada == prov) {
      this.prov_seleccionada = undefined
    }
    else {
      this.prov_seleccionada = prov;
      if (prov.id) {
        console.log(this.consultar_municipios(prov.id));
      }
    }
  }

}
