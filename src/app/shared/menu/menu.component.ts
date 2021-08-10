import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
     {
       label: 'Pipes Angular',
       icon: ' pi pi-desktop',
       items: [
         {
              label: 'Textos y Fechas',
              icon: 'pi pi-align-left',
              routerLink: 'basicos'
         },
         {
          label: 'Nùmeros',
          icon: 'pi pi-dollar',
          routerLink: 'numeros'
         },
         {
          label: 'Ordenar',
          icon: 'pi pi-sort-alpha-down',
          routerLink: 'ordenar'
         },
         {
          label: 'No Comunes',
          icon: 'pi pi-chart-bar',
          routerLink: 'no-comunes'
         },
      ]
     },
     {
      label: 'Pipes Personalizados',
      icon: ' pi pi-cog',
      routerLink: 'ordenar'
     }
     
  ];
  }

}
