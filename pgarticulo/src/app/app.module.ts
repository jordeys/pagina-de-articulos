import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

//
import { CargarScriptsService } from './cargar-scripts.service';
//


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componentes/login/componente1.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    CarritoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [CookieService, CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
