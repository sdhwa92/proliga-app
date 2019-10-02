import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../../services/player.service';
import {PlayerModel} from '../../models/player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = ['playerName', 'club', 'nationality', 'goals'];
  public dataSource = new MatTableDataSource<PlayerModel>();

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private playerService: PlayerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAllData();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  private getAllData() {
    this.activatedRoute.data.subscribe(
      data => {
        console.log(data.playerData);
        this.dataSource.data = data.playerData[0] as PlayerModel[];
      }
    );
  }

  public sortData(event) {
    console.log(event);
  }
}
