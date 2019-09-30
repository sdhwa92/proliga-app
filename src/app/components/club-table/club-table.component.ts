import { Component, OnInit } from '@angular/core';

import { ClubService } from '../../services/club.service';
import { ClubTableService } from './club-table.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-club-table',
  templateUrl: './club-table.component.html',
  styleUrls: ['./club-table.component.css']
})
export class ClubTableComponent implements OnInit {
  clubTeams: any;

  constructor(
    private clubService: ClubService,
    private clubTableService: ClubTableService
  ) { }

  ngOnInit() {
    this.clubService.getAllClubs().subscribe(
      (res) => {
        this.clubTeams = this.clubTableService.clubStandingTableOrder(res.data);
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
