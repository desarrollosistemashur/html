import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Provincias';
 public provinciaseleccionada: any;
  public provinciasApi: any=[];
  public num: any;
    ngOnInit(): void {
    this.sacarApi();
  }
  sacarApi(){
    fetch(" https://apis.datos.gob.ar/georef/api/provincias")
    .then(response=>response.json())
    .then(provinciasApi => this.provinciasApi=provinciasApi.provincias);
    
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