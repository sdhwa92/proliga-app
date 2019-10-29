import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { TableRecord } from '@data/schema/table-record';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit, OnDestroy {

  public displayedColumns: string[] = [
    'position',
    'club',
    'played',
    'won',
    'drawn',
    'lost',
    'goals_for',
    'goals_against',
    'goals_diff',
    'points',
    'last_five'
  ];
  public dataSource = new MatTableDataSource<TableRecord>();
  public position = 0;

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadAllTableRecords();
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private loadAllTableRecords() {
    this.activatedRoute.data
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(
        data => {
          this.dataSource.data = data.tableData as TableRecord[];
        }
      );
  }

  public sortData(event) {
    console.log(event);
  }

}
