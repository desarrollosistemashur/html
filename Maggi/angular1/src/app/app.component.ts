import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'angular1';

  public provincias:any=[];
  public provinciaSel: any;
  
  ngOnInit(): void {
    this.traerProvincias()
  }

  public traerProvincias(){
    fetch('https://apis.datos.gob.ar/georef/api/provincias').then(r=>r.json()).then(p=>{
      this.provincias=p.provincias
      console.log(this.provincias)
    })
  }

  eliminarTarj(){

  }

  seleccionar(p: any){
    if(this.provinciaSel==p){
      this.provinciaSel = undefined;
    }
    else{
      this.provinciaSel=p;
    }
  }

}
