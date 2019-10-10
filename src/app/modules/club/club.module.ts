import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { ClubRoutingModule } from '@modules/club/club-routing.module';
import { ClubComponent } from './page/club.component';
import { ClubListComponent } from './page/club-list/club-list.component';
import { ClubDetailsComponent } from './page/club-details/club-details.component';


@NgModule({
  declarations: [
    ClubComponent,
    ClubListComponent,
    ClubDetailsComponent
  ],
  imports: [
    ClubRoutingModule,

    SharedModule
  ]
})
export class ClubModule { }
