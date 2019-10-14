import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PROLIGA_API, ProligaAPI } from '../proliga-api.service';
import { PlayerDetails } from '../schema/player-details';
import { PlayerStats } from '@data/schema/player-stats';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as _ from 'lodash';

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
      .get<PlayerDetails[]>(
        this.proligaApi.currentAPI(PROLIGA_API.VERSION.ONE) +
        ProligaAPI.prepareURI(PROLIGA_API.ENDPOINTS.PLAYERS.GET_ALL_PLAYERS)
      );
  }

  /**
   * Get the all players stats based on rank
   */
  getPlayersGoalRank(): Observable<PlayerStats[]> {
    return this.getAllPlayers()
      .pipe(
        map(data => this.sortRank(data) )
      );
  }

  /**
   * Giving rank for each player
   * @param players
   * @param rankBy
   */
  private sortRank(players: PlayerDetails[], rankBy = 'goals'): PlayerStats[] {
    // console.log('sort players');
    const descOrderedPlayers = _.orderBy(players, [rankBy], ['desc']);
    let prevPlayer: PlayerDetails;
    const rankedPlayers: any[] = [];
    let currentIndex = 1;
    let currentRank = currentIndex;

    descOrderedPlayers.forEach(function (data) {
      if ( !prevPlayer ) {
        prevPlayer = data;
        data.rank = currentRank;
        rankedPlayers.push(data);
      } else if ( prevPlayer && ( prevPlayer[rankBy] === data[rankBy] ) ) {
        prevPlayer = data;
        data.rank = currentRank;
        rankedPlayers.push(data);
      } else if ( prevPlayer && ( prevPlayer[rankBy] > data[rankBy] ) ) {
        prevPlayer = data;
        currentRank = currentIndex;
        data.rank = currentRank;
        rankedPlayers.push(data);
      }
      currentIndex++;
    });

    // console.log(rankedPlayers);

    return rankedPlayers;
  }
}
