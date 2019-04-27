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
    private proligaAPI: ProligaAPI
  ) {}

  getAllClubs() {
    console.log('getAllClubs');
    return this.http
      .get(
        this.proligaAPI.currentAPI(PROLIGA_API.ENDPOINTS.CLUBS.VERSION.ONE + '/') +
        ProligaAPI.prepareURI(PROLIGA_API.ENDPOINTS.CLUBS.GET_ALL_CLUBS)
      );
  }

  getClub(clubname: string) {
    return this.http
      .get(
        this.proligaAPI.currentAPI(PROLIGA_API.ENDPOINTS.CLUBS.VERSION.ONE + '/') +
        ProligaAPI.prepareURI(PROLIGA_API.ENDPOINTS.CLUBS.GET_A_CLUB, {clubname: clubname})
      )
  }
}
