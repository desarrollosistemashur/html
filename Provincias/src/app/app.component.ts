import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Provincias';
  public provinciasApi: any=[];
    ngOnInit(): void {
    this.sacarApi();
  }
  sacarApi(){
    fetch(" https://apis.datos.gob.ar/georef/api/provincias")
    .then(response=>response.json())
    .then(provinciasApi => this.provinciasApi=provinciasApi.provincias);
    
}

}
