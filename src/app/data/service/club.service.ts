import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable , forkJoin } from 'rxjs';
import { ProligaAPI, PROLIGA_API } from '../proliga-api.service';
import { ClubList } from '../schema/club-list';

/**
 *  Club Service
 */
@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(
    private http: HttpClient,
    private proligaApi: ProligaAPI
  ) {}

  getAllClubs(): Observable<ClubList[]> {
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
