import { NgModule } from '@angular/core';

//primeNG
 import {ButtonModule} from 'primeng/button';
 import {CardModule} from 'primeng/card';
 import {MenubarModule} from 'primeng/menubar';
 import {FieldsetModule} from 'primeng/fieldset';
 import {TableModule} from 'primeng/table';
 import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
