import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosHomeComponent } from './productos-home/productos-home.component';
import { ProductosFichaComponent } from './productos-ficha/productos-ficha.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosHomeComponent
  },
  {
    path: ':id',
    component: ProductosFichaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
