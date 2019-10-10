import { Component, Input } from '@angular/core';

import { ClubList } from '@data/schema/club-list';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent {
  @Input() club: ClubList;
}
