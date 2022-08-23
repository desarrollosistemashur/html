import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaAparteComponent } from './pagina-aparte/pagina-aparte.component';

const routes: Routes = [
  {path: 'paginaAparte/:id', component:PaginaAparteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
