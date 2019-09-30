import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , Subject } from 'rxjs';
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

  getAllClubs(): Observable<any> {
    console.log('getAllClubs');
    // Fake Backend Call
    return this.http
      .get<any>(
        this.proligaApi.currentAPI() + ProligaAPI.prepareURI(PROLIGA_API.ENDPOINTS.CLUBS.GET_ALL_CLUBS)
      );

    // return this.http
    //   .get<any>(
    //     this.proligaApi.currentAPI(PROLIGA_API.ENDPOINTS.CLUBS.VERSION.ONE + '/') +
    //     proligaApi.prepareURI(PROLIGA_API.ENDPOINTS.CLUBS.GET_ALL_CLUBS)
    //   );
  }

  // getClub(clubname: string): Observable<any> {
  //   return this.http
  //     .get<any>(
  //       this.proligaApi.currentAPI(PROLIGA_API.ENDPOINTS.CLUBS.VERSION.ONE + '/') +
  //       proligaApi.prepareURI(PROLIGA_API.ENDPOINTS.CLUBS.GET_A_CLUB, {clubname: clubname})
  //     );
  // }
}
