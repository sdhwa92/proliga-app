import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ClubService } from '@data/service/club.service';

@Injectable({
  providedIn: 'root'
})
export class ClubResolver implements Resolve<any> {
  constructor(
    private clubService: ClubService,
    private router: Router
  ) { }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<any> {
    console.log('Logging collected route Parameter', route.params);

    return this.clubService.getAllClubs()
      .pipe(
        catchError(
          (err) => this.router.navigateByUrl('/')
        )
      );
  }
}
