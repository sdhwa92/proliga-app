import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appRoutesNames } from '../../app.routes.names';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.css']
})
export class ContentLayoutComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  get isHomepage() {
    // console.log(this.router.url);
    if (this.router.url === '/' + appRoutesNames.HOME) {
      return true;
    } else {
      return false;
    }
  }

}
