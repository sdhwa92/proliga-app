import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable , forkJoin } from 'rxjs';
import { ProligaAPI, PROLIGA_API } from './proliga-api.service';

/**
 *  Club Service
 */
@Injectable()
export class ClubService {

  constructor(
    private http: HttpClient,
    private proligaApi: ProligaAPI
  ) {}

  public resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
    console.log('Logging collected route Parameter', route.params);
    const loadedResults = forkJoin([
      this.getAllClubs()
    ]);

    return loadedResults;
  }

  getAllClubs(): Observable<any> {
    // console.log('getAllClubs');
    return this.http
      .get<any>(
        this.proligaApi.currentAPI(PROLIGA_API.VERSION.ONE) +
        ProligaAPI.prepareURI(PROLIGA_API.ENDPOINTS.CLUBS.GET_ALL_CLUBS)
      );
  }

  // getClub(clubname: string): Observable<any> {
  //   return this.http
  //     .get<any>(
  //       this.proligaApi.currentAPI(PROLIGA_API.ENDPOINTS.CLUBS.VERSION.ONE + '/') +
  //       proligaApi.prepareURI(PROLIGA_API.ENDPOINTS.CLUBS.GET_A_CLUB, {clubname: clubname})
  //     );
  // }
}
