/* Modules */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app.router';
import {HttpClientModule} from '@angular/common/http';

/* Components */
import {AppComponent} from './app.component';
import {NavigationComponent} from './layout/navigation/navigation.component';
import {ClubTableComponent} from './components/club-table/club-table.component';
import {HomeComponent} from './components/home/home.component';
import {ClubsComponent} from './components/clubs/clubs.component';
import {PlayersComponent} from './players/players.component';

/* Services */
import {ProligaAPI} from './services/proliga-api.service';
import {ClubService} from './services/club.service';
import {CustExtBrowserXhr} from './services/cust-ext-browser-xhr';

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
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProligaAPI,
    ClubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
