import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProligaAPI, PROLIGA_API} from './proliga-api.service';

@Injectable()
export class PlayerService {

  constructor(
    private http: HttpClient,
    private proligaApi: ProligaAPI
  ) {}

  /**
   * Get All Players regardless Leagues
   */
  getAllPlayers(): Observable<any> {
    console.log('get all players');
    // Fake Backend Call
    return this.http
      .get<any>(
        this.proligaApi.currentAPI() + ProligaAPI.prepareURI(PROLIGA_API.ENDPOINTS.PLAYERS.GET_ALL_PLAYERS)
      );
  }
}