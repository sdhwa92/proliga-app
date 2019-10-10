import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PROLIGA_API, ProligaAPI} from '../proliga-api.service';
import { PlayerDetails } from '../schema/player-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(
    private http: HttpClient,
    private proligaApi: ProligaAPI
  ) {}

  /**
   * Get All Players regardless Leagues
   */
  getAllPlayers(): Observable<PlayerDetails[]> {
    // console.log('get all players');
    // Fake Backend Call
    return this.http
      .get<any>(
        this.proligaApi.currentAPI(PROLIGA_API.VERSION.ONE) +
        ProligaAPI.prepareURI(PROLIGA_API.ENDPOINTS.PLAYERS.GET_ALL_PLAYERS)
      );
  }
}
