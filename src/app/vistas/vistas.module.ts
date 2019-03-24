import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [HomeComponent, ContactoComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent, ContactoComponent]
})
export class VistasModule { }
