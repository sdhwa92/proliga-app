import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable, forkJoin} from 'rxjs';
import {ProligaAPI, PROLIGA_API} from './proliga-api.service';

import {ClubModel} from '../models/club.model';

@Injectable()
export class ClubTableService implements Resolve<any> {
  constructor(
    private http: HttpClient,
    private proligaApi: ProligaAPI
  ) {}

  public resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
    console.log('Logging collected route Parameter', route.params);
    const loadedResults = forkJoin([
      this.getAllTableData()
    ]);

    return loadedResults;
  }

  private getAllTableData(): Observable<ClubModel[]> {
    // console.log('get all table data');
    return this.http
      .get<any>(
        this.proligaApi.currentAPI(PROLIGA_API.VERSION.ONE) +
        ProligaAPI.prepareURI(PROLIGA_API.ENDPOINTS.CLUBS.GET_ALL_CLUBS)
      );
  }
}