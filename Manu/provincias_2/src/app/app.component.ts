import { Component, OnInit } from '@angular/core';
import { ProvinciasComponent } from './provincias/provincias.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'provincias';
  public provincias: any = []; 
  public municipios: any = [];
  public prov_seleccionada: any;

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


  public consultar_municipios(id: number) {
    this.municipios = fetch("https://apis.datos.gob.ar/georef/api/municipios?provincia=" + id + "&max=2000")
      .then(R=>R.json())
      .then(datos=>{
        this.municipios = datos.municipios;
      });
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

