import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { appRoutesNames } from '../../app.routes.names';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  logo = 'assets/img/logo.png';
  items = [
    { link: appRoutesNames.HOME, text: 'Home' },
    { link: appRoutesNames.TABLE, text: 'Tables' },
    { link: appRoutesNames.CLUBS, text: 'Clubs' },
    { link: appRoutesNames.STATS, text: 'Stats'}
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  activeRoute(routeName: string): boolean {
    // console.log('route name: ' + routeName);
    return this.router.url.indexOf(routeName) > -1;
  }

  get currentUrl() {
    // console.log(this.router.url);
    return this.router.url;
  }

}
