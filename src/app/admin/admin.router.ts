import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin.component';

import {adminRoutesNames} from './admin.routes.names';
import {AuthGuardService} from '../services/auth-guard.service';

const adminRoutes: Routes = [
  {
    path: adminRoutesNames.ROOT,
    component: AdminComponent,
    canActivate: [AuthGuardService]
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
