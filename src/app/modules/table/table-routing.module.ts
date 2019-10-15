import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from '@modules/table/page/table/table.component';
import { TableResolver } from '@modules/table/table-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    resolve: {
      tableData: TableResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TableRoutingModule { }
