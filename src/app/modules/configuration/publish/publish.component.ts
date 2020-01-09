import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { Subject, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  pageSize: any = 10;
  dataSource: any;
  displayedColumns: any;
  toFilterdata: any;
  totalFrameWorks: any;
  finaldisplaycolummns: Array<any> = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @Input() field ={};
  @Input() field: Subject<any>;
  @Output() datasending = new EventEmitter();
  // private eventsSubscription: Subscription;
  // @Input() events: Observable<void>;
  searchString: any;
  constructor() {
    console.log('this.field', this.field);

  }

  ngOnInit() {
    // this.eventsSubscription = this.events.subscribe(() => {

    //   console.log('doSomething()');
    // });
    if (this.field != null) {
      // this.field.subscribe(event => {

      
      // });
      this.formJsonData(this.field['displayedColumns']);
      this.requiredDataFormation(this.field['data'].filteredData);
    }


  }

  ngAfterContentChecked() {

  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.field);

  }
  applyFilter(filterValue: string) {
    console.log('===', filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  editData(data) {
    data.action = 'Edit';
    this.datasending.emit(data);
  }

  deleteData(data) {
    data.action = 'delete'
    this.datasending.emit(data);
  }

  pagination(data) {
    data.action = 'pagination';
    this.datasending.emit(data);
  }
  /**
   *  Generate the json for display column
   * 
   */
  formJsonData(displaycolumns) {
    for (let i = 0; i < displaycolumns.length; i++) {
      let finaldata = {
        name: displaycolumns[i],
        label: displaycolumns[i].charAt(0).toUpperCase() + displaycolumns[i].slice(1)
      }
      this.finaldisplaycolummns.push(finaldata)
    }
    this.displayedColumns = this.finaldisplaycolummns.map(column => column.name);

  }



  /**
   * To generate the numbers
   * 
   */
  requiredDataFormation(data) {
    for (let i = 0; i < data.length; i++) {
      data[i].no = (i + 1);
    }
    this.dataSource = new MatTableDataSource(data);
    this.totalFrameWorks = this.field['totalRecords'];
    // this.dataSource.paginator = this.paginator;

  }

  search() {
    console.log('search', this.searchString);

  }

  /**
   * For sorting the data based on the Column
   * 
   */
  sortData(data) {
    console.log('sortData', data);
  }

 
}

export interface UserData {
  no: number;
  name: string;
  externalId: string;
  description: string;
}
