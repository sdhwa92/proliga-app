/*Modules*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './admin.router';

/*Components*/
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

/*Services*/
import {AuthGuardService} from '../services/auth-guard.service';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [
    AuthGuardService
  ]
})
export class AdminModule { }
