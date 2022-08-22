import { Component, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Provincias';
 public provinciaseleccionada: any;
  public provinciasApi: any=[];
  public municipioApi: any=[];
  public num: any;
    ngOnInit(): void {
    this.sacarApi();
  }
  sacarApi(){
    fetch(" https://apis.datos.gob.ar/georef/api/provincias")
    .then(response=>response.json())
    .then(provinciasApi => this.provinciasApi=provinciasApi.provincias);
    fetch(" https://apis.datos.gob.ar/georef/api/municipios?provincia=codigo_de_provincia&max=2000")
    .then(response=>response.json())
}
selec(p: any){
if(this.provinciaseleccionada== p)
{
  this.provinciaseleccionada = undefined;
}
else
{
  this.provinciaseleccionada=p;
  //agregarle aca lo de las municipalidades
}
}
}