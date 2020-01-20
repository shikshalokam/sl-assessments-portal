import {
  Component, OnInit, Input, AfterContentChecked,
  AfterViewChecked, ViewChild, Output, EventEmitter
} from '@angular/core';
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { MatSort } from '@angular/material/sort';
import { Subject, Subscription, Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit, AfterContentChecked {

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
  configdata: any;
  constructor(private route: Router) {
    console.log('this.field', this.field);

  }

  ngOnInit() {

    if (this.field) {
      this.configdata = this.field['configdata'];
      this.formJsonData(this.field['displayedColumns']);
      this.requiredDataFormation(this.field['data'].filteredData);
      this.dataSource.sort = this.sort;
    }


  }
  /**
   * To Catch the event from parent for pagination
   */
  ngOnChanges() {
    this.requiredDataFormation(this.field['data']);
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked', this.field);
    // // this.formJsonData(this.field['displayedColumns']);
    // this.requiredDataFormation(this.field['data']);
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked', this.field);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.field);

  }

  /**
   * To Search the data
   */
  applyFilter(filterValue: string) {
    console.log('===', filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * 
   * To Pass the data to the edit
   */
  editData(data) {
    data.action = 'Edit';
    this.datasending.emit(data);
  }

  /**
   * 
   *To pass  the data to Delete the record
   */
  deleteData(data) {
    data.action = 'delete'
    this.datasending.emit(data);
  }

  /**
   * 
   * For the Pagination we are passing the data
   */
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
    this.dataSource.sort = this.sort;

  }

  /**
  * For sorting the data based on the Column
  * 
  */
  sortData(data) {
    console.log('sortData', data);
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  reviewData(data) {

    data.action = 'review';
    this.datasending.emit(data);


// Need to validate the Questions before sending to the review
    // this.route.navigateByUrl('/workspace/under-review');
  }

}

export interface UserData {
  no: number;
  name: string;
  externalId: string;
  description: string;
}
