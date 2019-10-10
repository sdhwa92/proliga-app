import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClubList } from '@data/schema/club-list';
import { Observable } from 'rxjs';

import * as _ from 'lodash';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {

  clubs: ClubList[];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadClubs();
  }

  private loadClubs() {
    this.activatedRoute.data.subscribe(
      data => {
        this.clubs = _.orderBy(data.clubsData, ['name'], ['asc']);
        console.log(this.clubs);
      }
    );
  }

}
