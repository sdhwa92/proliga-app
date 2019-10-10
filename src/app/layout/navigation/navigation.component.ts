import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  activeRoute(routeName: string): boolean {
    return this.router.url.indexOf(routeName) > -1;
  }

}
