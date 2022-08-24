import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaAparteComponent } from './pagina-aparte/pagina-aparte.component';
import { Pagina2Component } from './pagina2/pagina2.component';

const routes: Routes = [
  {path: 'paginaAparte/:id/:nombre/:lat/:lon', component:PaginaAparteComponent},
  {path: 'lista', component:Pagina2Component},
  {path: '**', component:Pagina2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
