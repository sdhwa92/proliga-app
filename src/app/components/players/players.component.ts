import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';

import {PlayerService} from '../../services/player.service';

import {PlayerModel} from '../../models/player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  dataSource = new PlayerDataSource(this.playerService);
  displayedColumns = ['playerName', 'club', 'nationality'];

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit() {
  }

}

export class PlayerDataSource extends DataSource<any> {
  constructor(private playerService: PlayerService) {
    super();
  }
  connect(): Observable<PlayerModel[]> {
    return this.playerService.getAllPlayers();
  }
  disconnect() {}
}
