import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatSortModule
  ],
  exports: [
    MatTableModule,
    MatSortModule
  ]
})
export class MaterialModule {}