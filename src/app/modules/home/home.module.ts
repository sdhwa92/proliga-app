import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './page/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,

    HomeRoutingModule
  ]
})
export class HomeModule { }
