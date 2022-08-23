import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaProvinciasComponent } from './tarjeta-provincias/tarjeta-provincias.component';
import { PaginaAparteComponent } from './pagina-aparte/pagina-aparte.component';
import { Pagina2Component } from './pagina2/pagina2.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaProvinciasComponent,
    PaginaAparteComponent,
    Pagina2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
