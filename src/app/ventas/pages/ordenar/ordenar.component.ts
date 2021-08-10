import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  mayus: boolean = true;
  ordenarPor: string = '';
  heroes: Heroe[] = [
        {
          nombre: 'superman',
          vuela: true,
          color: Color.azul
        },
        {
          nombre: 'batman',
          vuela: false,
          color: Color.negro
        },
        {
          nombre: 'daredevil',
          vuela: false,
          color: Color.rojo
        },
        {
          nombre: 'thor',
          vuela: true,
          color: Color.rojo
        },
        {
          nombre: 'spiderman',
          vuela: false,
          color: Color.azul
        }
  ];

  transformar(){    
        this.mayus = !this.mayus;    
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
    
  }

}
