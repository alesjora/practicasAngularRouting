import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosHomeComponent } from './productos-home/productos-home.component';
import { ProductosFichaComponent } from './productos-ficha/productos-ficha.component';

@NgModule({
  declarations: [ProductosHomeComponent, ProductosFichaComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
