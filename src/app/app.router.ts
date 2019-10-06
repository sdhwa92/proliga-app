import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClubTableComponent} from './components/club-table/club-table.component';
import {HomeComponent } from './components/home/home.component';
import {ClubsComponent} from './components/clubs/clubs.component';
import {PlayersComponent} from './components/players/players.component';

import {PlayerService} from './services/player.service';
import {ClubService} from './services/club.service';
import {ClubTableService} from './services/club-table.service';

import {appRoutesNames} from './app.routes.names';

const appRoutes: Routes = [
  {
    path: appRoutesNames.ROOT,
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: appRoutesNames.CLUB_TABLES,
    component: ClubTableComponent,
    resolve: {
      tablesData: ClubTableService
    }
  },
  {
    path: appRoutesNames.CLUBS,
    component: ClubsComponent,
    resolve: {
      clubsData: ClubService
    }
  },
  {
    path: appRoutesNames.PLAYERS,
    component: PlayersComponent,
    resolve: {
      playerData: PlayerService
    }
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
  ],
  providers: [
    PlayerService
  ]
} )
export class AppRoutingModule {}
