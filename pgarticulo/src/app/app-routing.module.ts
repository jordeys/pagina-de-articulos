import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componentes/login/componente1.component';
import { Componente2Component } from './componentes/componente2/componente2.component';
import { Componente3Component } from './componentes/componente3/componente3.component';
import { Componente4Component } from './componentes/componente4/componente4.component';

const routes: Routes = [
  {
    path: '', component:Componente1Component
  },

  {
    path: 'pag1', component:Componente2Component
  },

  { 
    path: 'pag2', component:Componente3Component
  },

  {
    path: 'pag3', component:Componente4Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
