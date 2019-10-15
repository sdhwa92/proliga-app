import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { TableRoutingModule } from '@modules/table/table-routing.module';
import { TableComponent } from './page/table/table.component';



@NgModule({
  declarations: [TableComponent],
  imports: [
    TableRoutingModule,
    SharedModule
  ]
})
export class TableModule { }
