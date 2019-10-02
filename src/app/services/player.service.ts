import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable, forkJoin} from 'rxjs';
import {ProligaAPI, PROLIGA_API} from './proliga-api.service';

@Injectable()
export class PlayerService implements Resolve<any> {

  constructor(
    private http: HttpClient,
    private proligaApi: ProligaAPI
  ) {}

  public resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
    console.log('Logging collected route Parameter', route.params);
    const loadedResults = forkJoin([
      this.getAllPlayers()
    ]);

    return loadedResults;
  }

  /**
   * Get All Players regardless Leagues
   */
  private getAllPlayers(): Observable<any> {
    console.log('get all players');
    // Fake Backend Call
    return this.http
      .get<any>(
        this.proligaApi.currentAPI() + ProligaAPI.prepareURI(PROLIGA_API.ENDPOINTS.PLAYERS.GET_ALL_PLAYERS)
      );
  }
}