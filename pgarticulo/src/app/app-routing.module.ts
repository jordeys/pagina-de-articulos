import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componentes/login/componente1.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

const routes: Routes = [
  {
    path: '', component:Componente1Component
  },
  {
    path: 'carrito', component:CarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
