import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PlayerService } from '@data/service/player.service';

@Injectable({
  providedIn: 'root'
})
export class StatsResolver implements Resolve<any> {
  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<any> {
    console.log('Logging collected route Parameter', route.params);

    return this.playerService.getAllPlayers()
      .pipe(
        catchError(
          (err) => this.router.navigateByUrl('/')
        )
      );
  }
}