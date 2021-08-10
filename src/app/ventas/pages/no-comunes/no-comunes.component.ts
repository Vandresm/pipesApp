import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre:  string = 'Victor';
  genero: string ='masculino'
  cambio: boolean = false;

  invitacionMapa={
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural
  clientes: string []=['Maria' , 'Pedro', 'Juan', 'Maria', 'Victor', 'Daniel', 'Luis', 'Yeisy']

  clientesMapa={
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando',
  }

  cambiarCliente(){

    if (!this.cambio) {
      this.nombre = 'Maria';
      this.genero = 'femenino'; 
      this.cambio = true;     
    } else {
      this.nombre = 'Victor';
      this.genero ='masculino'
      this.cambio = false;
    }
  }

  eliminarCliente(){
    this.clientes.shift();
  }

  //keyValue pipe
  persona = {
    nombre: 'victor',
    edad: 27,
    direccion: 'valledupar trv 26'
  }

  //JSON pipe
  heroes = [{
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'spiderman',
      vuela: false
    },
    {
      nombre: 'thor',
      vuela: true
    },
    {
      nombre: 'ironman',
      vuela: true
    },
    {
      nombre: 'Dios Hawkeye',
      vuela: false
    }    
  ]

  //Async
  miObsvb = interval(1000);
  promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('Fin promesa')
            }, 3500);
  });
}
