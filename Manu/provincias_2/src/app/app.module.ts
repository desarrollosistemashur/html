import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvinciasComponent } from './provincias/provincias.component';
import { MunicipiosComponent } from './municipios/municipios.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina1Component } from './pagina1/pagina1.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvinciasComponent,
    MunicipiosComponent,
    Pagina2Component,
    Pagina1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
