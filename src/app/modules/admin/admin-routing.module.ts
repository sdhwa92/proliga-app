import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '@modules/admin/page/login/login.component';
import { RegisterComponent } from '@modules/admin/page/register/register.component';

import { adminRoutesNames } from '@modules/admin/admin.routes.names';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/login',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: adminRoutesNames.LOGIN,
        component: LoginComponent
      },
      {
        path: adminRoutesNames.REGISTER,
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
