import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PlayerDetails } from '@data/schema/player-details';
import { PlayerStats } from '@data/schema/player-stats';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {PlayerService} from '@data/service/player.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, AfterViewInit, OnDestroy {

  public displayedColumns: string[] = ['rank', 'playerName', 'club', 'nationality', 'goals'];
  public dataSource = new MatTableDataSource<PlayerStats>();

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadAllPlayersStats();
    this.dataSource.paginator = this.paginator;
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
        // console.log(data.statsData);
        this.dataSource.data = data.statsData as PlayerStats[];
      }
    );
  }

  public sortData(event) {
    console.log(event);
  }

}
