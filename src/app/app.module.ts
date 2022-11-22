import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { miComponente } from './Components/menu-Inicial/menu-inicial.component';
import { MenuPComponent } from './components/menu-p/menu-p.component';
import { ConvComponent } from './Components/conv/conv.component';
import { DisVolComponent } from './Components/dis-vol/dis-vol.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { CieloAbiertoComponent } from './Components/cielo-abierto/cielo-abierto.component';
import { SubteComponent } from './Components/subte/subte.component';


const routes: Routes=[
  {
    path: 'Inicio',
    component:miComponente
  },
  {
    path: 'MenuPrincipal',
    component:MenuPComponent
  },

  {
    path: 'Conversiones',
    component:ConvComponent
  },

  {
    path: 'DiseñoVoladura',
    component:DisVolComponent
  },

  {
    path: 'Productos',
    component:ProductosComponent
  },

  {
    path: 'CieloAbieto',
    component:CieloAbiertoComponent
  },

  {
    path: 'Subterranea',
    component:SubteComponent
  }

  
]

@NgModule({
  declarations: [
    AppComponent,
    miComponente,
    MenuPComponent,
    ConvComponent,
    DisVolComponent,
    ProductosComponent,
    CieloAbiertoComponent,
    SubteComponent
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
