import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin.component';

import {adminRoutesNames} from './admin.routes.names';

const adminRoutes: Routes = [
  {
    path: adminRoutesNames.ROOT,
    component: AdminComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( adminRoutes )
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
