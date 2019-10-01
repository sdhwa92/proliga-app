import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClubTableComponent} from './components/club-table/club-table.component';
import {HomeComponent } from './components/home/home.component';
import {ClubsComponent} from './components/clubs/clubs.component';
import {PlayersComponent} from './components/players/players.component';

import {appRoutesNames} from './app.routes.names';

const appRoutes: Routes = [
  {
    path: appRoutesNames.ROOT,
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: appRoutesNames.CLUB_TABLES,
    component: ClubTableComponent
  },
  {
    path: appRoutesNames.CLUBS,
    component: ClubsComponent
  },
  {
    path: appRoutesNames.PLAYERS,
    component: PlayersComponent
  },
  {
    path: appRoutesNames.ADMIN,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
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
