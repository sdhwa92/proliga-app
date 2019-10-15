import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';
import { appRoutesNames } from '../../app.routes.names';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit, OnDestroy {

  public pageTitle: string;

  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(
    private router: Router
  ) {
    router.events
      .pipe(
        filter( event => event instanceof NavigationStart ),
        takeUntil( this.ngUnsubscribe )
      )
      .subscribe((event: NavigationStart) => {
        // console.log(event);
        this.getPageTitle(event.url);
      });
  }

  ngOnInit(): void {
    this.getPageTitle(this.router.url);
  }

  ngOnDestroy(): void {
    // console.log('Page Title component destroyed');
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private getPageTitle(url: string): void {
    switch (url) {
      case '/' + appRoutesNames.CLUBS: {
        this.pageTitle = 'Clubs';
        break;
      }
      case '/' + appRoutesNames.STATS: {
        this.pageTitle = 'Statistics';
        break;
      }
      case '/' + appRoutesNames.TABLE: {
        this.pageTitle = 'Tables';
        break;
      }
      default: {
        this.pageTitle = 'Page Not Found';
        break;
      }
    }
  }

}
