import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubTableComponent } from './components/club-table/club-table.component';
import { HomeComponent } from './components/home/home.component';
import {ClubsComponent} from './components/clubs/clubs.component';
import {PlayersComponent} from './players/players.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'tables',
    component: ClubTableComponent
  },
  {
    path: 'clubs',
    component: ClubsComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  }
];

/**
 * Application Routes
 */
@NgModule( {
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
} )
export class AppRoutingModule {}
