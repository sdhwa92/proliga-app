import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PlayerDetails } from '@data/schema/player-details';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = ['playerName', 'club', 'nationality', 'goals'];
  public dataSource = new MatTableDataSource<PlayerDetails>();

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadAllPlayersStats();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  private loadAllPlayersStats() {
    this.activatedRoute.data.subscribe(
      data => {
        console.log(data.statsData);
        this.dataSource.data = data.statsData as PlayerDetails[];
      }
    );
  }

  public sortData(event) {
    console.log(event);
  }

}
