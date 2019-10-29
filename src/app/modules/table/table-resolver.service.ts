import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { TableService } from '@data/service/table.service';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableResolver implements Resolve<any> {
  constructor(
    private tableService: TableService,
    private router: Router
  ) { }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<any> {
    console.log('Logging collected route Parameter', route.params);

    return this.tableService.getAllRecords()
      .pipe(
        catchError(
          (err) => this.router.navigateByUrl('/')
        )
      );
  }
}