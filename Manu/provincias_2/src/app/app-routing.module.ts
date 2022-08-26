import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { ProvinciasComponent } from './provincias/provincias.component';

const routes: Routes = [
  {path: "pag1", component: Pagina1Component},
  {path: "pag2/:id/:nom/:lat/:lon", component: Pagina2Component},
  {path: "prov", component: ProvinciasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
