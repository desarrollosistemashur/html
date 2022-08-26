import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.scss']
})
export class Pagina2Component implements OnInit {
  title = 'Provincias';
 public provinciaseleccionada: any;
  public provinciasApi: any=[];
  public municipioApi: any=[];
  public num: any;
  public estilo: string = 'width:18rem;'
  constructor() { }

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