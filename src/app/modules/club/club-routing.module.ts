import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubResolver } from '@modules/club/club-resolver.service';
import { ClubComponent } from '@modules/club/page/club.component';
import { ClubDetailsComponent } from '@modules/club/page/club-details/club-details.component';

export const routes: Routes = [
  {
    path: '',
    component: ClubComponent,
    resolve: {
      clubsData: ClubResolver
    }
  },
  {
    path: 'clubs/:id',
    component: ClubDetailsComponent
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
export class ClubRoutingModule { }
