import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  nombre: string = 'VIcToR';
  num: number = 1235;
  obj=  {nombre:'VIcToR'};

  cambiarNombre(){
    console.log(this.nombre);
  }
}
