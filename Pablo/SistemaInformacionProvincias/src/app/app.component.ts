import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SistemaInformacionProvincias';
  
  public provincias:any[] = [];
  
  ngOnInit(): void {
    this.consultarProvincias();
  }


  consultarProvincias()
  { fetch('  https://apis.datos.gob.ar/georef/api/provincias')
    .then(response => response.json())
    .then(datos => this.provincias = datos.provincias);
  }

  borrarTarjetas()
  {
        
  }


}
