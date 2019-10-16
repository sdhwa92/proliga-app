import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterService } from '@data/service/filter.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Season } from '@data/schema/season';
import { ClubList } from '@data/schema/club-list';

import * as _ from 'lodash';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent implements OnInit, OnDestroy {

  @Input() defaultLeague: number;
  @Input() enableCompetitionFilter = false;
  @Input() enablePositionFilter = false;
  @Input() enableClubFilter = false;

  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  public filterForm: FormGroup;
  public seasons: Season[];
  public clubs: ClubList[];
  public selectedSeasonId: number;
  public selectedLeagueId: number;

  private ngUnsubscribe: Subject<any> = new Subject();
  private seasonSubscription$: Subscription;
  private clubsSubscription$: Subscription;


  constructor(
    private filterService: FilterService
  ) { }

  ngOnInit() {
    if ( this.defaultLeague === null || this.defaultLeague === undefined ) {
      throw new TypeError('The input `defaultLeague` is required');
    } else {
      this.selectedLeagueId = this.defaultLeague;
      this.loadSeasons(this.defaultLeague);
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  /**
   * Retrieve all seasons of a league
   * @param leagueId
   */
  loadSeasons( leagueId: number ) {
    this.seasonSubscription$ = this.filterService.getSeasons(leagueId)
      .pipe(
        takeUntil( this.ngUnsubscribe )
      )
      .subscribe(
        (data) => {
          this.seasons = _.orderBy(data, ['id'], ['desc']);
          // Select the latest season by default
          this.selectedSeasonId = data[data.length - 1].id;
        },
        (err) => {
          console.log(err);
        },
        () => {
          if ( this.enableClubFilter ) {
            this.loadClubs(this.defaultLeague, this.selectedSeasonId);
          }
        }
      );
  }

  loadClubs( leagueId: number, seasonId: number ) {
    this.clubsSubscription$ = this.filterService.getClubs(leagueId, seasonId)
      .pipe(
        takeUntil( this.ngUnsubscribe )
      )
      .subscribe(
        (data) => {
          this.clubs = data;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  /**
   * Emit change event to the parent component with the filter type
   * And re-arrange filters again
   * @param filterType
   * @param event
   */
  filterChanged(filterType: 'season' | 'competition' | 'club' | 'nationality' | 'position', event) {
    // console.log('Filter Changed: ', filterType);
    // console.log(event);

    if ( filterType === 'competition' ) {
      // Update selected league value
      this.selectedLeagueId = event.value;

      // Unsubscribe related filters
      this.seasonSubscription$.unsubscribe();
      this.clubsSubscription$.unsubscribe();

      // Retrieve filter options again
      this.loadSeasons(this.selectedLeagueId);
    } else if ( filterType === 'season' ) {
      // Update selected season value
      this.selectedSeasonId = event.value;

      // Unsubscribe related filters
      this.clubsSubscription$.unsubscribe();

      // Retrieve filter options again
      this.loadClubs(this.selectedLeagueId, this.selectedSeasonId);
    }
  }

}
