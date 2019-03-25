import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { ContactoComponent } from './vistas/contacto/contacto.component';
import { Error404Component } from './vistas/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'sobre_nosotros',
    loadChildren: './vistas/sobre-nosotros/sobre-nosotros.module#SobreNosotrosModule'
  },
  {
    path: 'mapa',
    loadChildren: './vistas/mapa/mapa.module#MapaModule'
  },
  {
    path: 'productos',
    loadChildren: './vistas/productos/productos.module#ProductosModule'
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
