import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
import { MapaMadridComponent } from './mapa-madrid/mapa-madrid.component';

const routes: Routes = [
  {
    path: '',
    component: MapaComponent
  },
  {
    path: 'madrid',
    component: MapaMadridComponent
  }
];

@NgModule({
  declarations: [MapaComponent, MapaMadridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MapaModule { }
