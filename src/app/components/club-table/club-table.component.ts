import { Component, OnInit } from '@angular/core';

import { ClubService } from '../../services/club.service';

@Component({
  selector: 'app-club-table',
  templateUrl: './club-table.component.html',
  styleUrls: ['./club-table.component.css']
})
export class ClubTableComponent implements OnInit {

  constructor(
    private clubService: ClubService
  ) { }

  ngOnInit() {
    console.log('On Init Club Tables Component');
    this.clubService.getAllClubs().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
