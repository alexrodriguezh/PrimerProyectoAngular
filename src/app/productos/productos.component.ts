import { Component, OnInit } from '@angular/core';
import { Producto } from '../modules/producto';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public items: Array<Producto>;
  constructor() {
    this.items = [
      new Producto("Cuaderno", "Rojo", "Norma", 80),
      new Producto("Lapicero", "Azul", "Pilot", 10),
      new Producto("Libro", "Azul", "Libro para emprendedores", 100)
    ];
   }

  ngOnInit() {
    console.log(this.items);
  }

}
