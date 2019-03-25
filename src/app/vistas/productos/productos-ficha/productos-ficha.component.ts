import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'eit-productos-ficha',
  templateUrl: './productos-ficha.component.html',
  styleUrls: ['./productos-ficha.component.css']
})
export class ProductosFichaComponent implements OnInit {

  identificador: any;

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.identificador = this.ruta.snapshot.params['id'];
  }

}
