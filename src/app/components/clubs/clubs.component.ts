import { Component, OnInit } from '@angular/core';

import { ClubService } from '../../services/club.service';

import { ClubModel } from '../../models/club.model';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  clubs: ClubModel[];

  constructor(
    private clubService: ClubService
  ) { }

  ngOnInit() {
    this.getClubs();
  }

  getClubs() {
    this.clubService.getAllClubs().subscribe(
      data => {
        this.clubs = data;
        console.log(this.clubs);
      }
    );
  }

}
