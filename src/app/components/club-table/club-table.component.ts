import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatSort, MatTableDataSource} from '@angular/material';

import * as _ from 'lodash';
import {ClubModel} from '../../models/club.model';

@Component({
  selector: 'app-club-table',
  templateUrl: './club-table.component.html',
  styleUrls: ['./club-table.component.css']
})
export class ClubTableComponent implements OnInit {

  public displayedColums: string[] = [
    'club_name',
    'played',
    'won',
    'drawn',
    'lost',
    'goals_for',
    'goals_against',
    'goals_difference',
    'points'
  ];
  public dataSource = new MatTableDataSource<ClubModel>();

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAllData();
  }

  private getAllData() {
    this.activatedRoute.data.subscribe(
      data => {
        console.log(data.clubData);
        this.dataSource.data = data.clubData[0] as ClubModel[];
      },
      err => {
        console.log(err);
      }
    );
  }
}
