/* Modules */
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.router';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/* Components */
import {AppComponent} from './app.component';
import {NavigationComponent} from './layout/navigation/navigation.component';
import {ClubTableComponent} from './components/club-table/club-table.component';
import {HomeComponent} from './components/home/home.component';
import {ClubsComponent} from './components/clubs/clubs.component';
import {PlayersComponent} from './components/players/players.component';

/* Services */
import {ProligaAPI} from './services/proliga-api.service';
import {ClubService} from './services/club.service';
import {ClubTableService} from './components/club-table/club-table.service';
import {PlayerService} from './services/player.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClubTableComponent,
    HomeComponent,
    ClubsComponent,
    PlayersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    ProligaAPI,
    ClubService,
    ClubTableService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
