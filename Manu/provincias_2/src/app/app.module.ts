import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvinciasComponent } from './provincias/provincias.component';
import { MunicipiosComponent } from './municipios/municipios.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvinciasComponent,
    MunicipiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
