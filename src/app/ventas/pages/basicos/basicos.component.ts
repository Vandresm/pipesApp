import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

nombreLower: string = 'victor';
nombreUpper: string = 'victor';
nombre: string = 'ViCtOr MediNA';
fecha: Date = new Date();

  

}
