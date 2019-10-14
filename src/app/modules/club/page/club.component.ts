import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClubList } from '@data/schema/club-list';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as _ from 'lodash';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit, OnDestroy {

  clubs: ClubList[];

  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadClubs();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private loadClubs() {
    this.activatedRoute.data
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(
      data => {
        this.clubs = _.orderBy(data.clubsData, ['name'], ['asc']);
        console.log(this.clubs);
      }
    );
  }

}
