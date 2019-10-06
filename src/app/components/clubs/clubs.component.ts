import { Component, OnInit } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

import { ClubService } from '../../services/club.service';

import { ClubModel } from '../../models/club.model';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  // @TODO: Create club model
  clubs: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clubService: ClubService
  ) { }

  ngOnInit() {
    this.getAllClubs();
  }

  private getAllClubs() {
    this.activatedRoute.data.subscribe(
      data => {
        console.log(data.clubsData);
      }
    );
  }

}
