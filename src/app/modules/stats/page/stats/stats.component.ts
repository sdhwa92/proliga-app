import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PlayerDetails } from '@data/schema/player-details';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, AfterViewInit, OnDestroy {

  public displayedColumns: string[] = ['playerName', 'club', 'nationality', 'goals'];
  public dataSource = new MatTableDataSource<PlayerDetails>();

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadAllPlayersStats();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private loadAllPlayersStats() {
    this.activatedRoute.data
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(
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
