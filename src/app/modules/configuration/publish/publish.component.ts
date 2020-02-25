// angular core dependencies
import {
  Component, OnInit, Input,
  ViewChild, Output, EventEmitter
} from '@angular/core';
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { MatSort } from '@angular/material/sort';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})

/** It is a Common table for displaying the data, from different component drafts, sent for review, 
 * upforreview, published
 */
export class PublishComponent implements OnInit {
  pageSize: any = 10;
  dataSource: any;
  displayedColumns: any;
  toFilterdata: any;
  totalFrameWorks: any;
  finaldisplaycolummns: Array<any> = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() field: Subject<any>;
  @Output() datasending = new EventEmitter();
  configdata: any;

  /**
   * Default method called and objects are created to use other component functions
   */
  constructor() {
  }


  /**
   * Angular first displays the data-bound properties and sets the directive/component's input properties.
   *  Called once, after the first ngOnChanges().
   */
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
   * Initial method Life cycle method after constructor 
   */
  ngOnChanges() {
    this.requiredDataFormation(this.field['data']);
  }

  /**
   * To search the table data
   * @param filterValue : value we need to search
   *  @returns {JSON} - Response data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * 
   * To Pass the data to the edit
   * @param data : data we need to edit
   */
  editData(data) {
    data.action = 'Edit';
    this.datasending.emit(data);
  }

  /**
   * 
   * To pass  the data to Delete the record
   * @param data : data we need to delete
   */
  deleteData(data) {
    data.action = 'delete'
    this.datasending.emit(data);
  }

  /**
   * 
   * For the Pagination we are passing the data
   * @param data : data we pass for the pagination
   */
  pagination(data) {
    data.action = 'pagination';
    this.datasending.emit(data);
  }
  /**
   * Generate the json for display column
   * @param displaycolumns: pass the displayed columns to format in required format
   * @returns {JSON} - Response data.
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
   * To generate the new number column form here
   * @param data: passing the data of the table
   */
  requiredDataFormation(data) {
    for (let i = 0; i < data.length; i++) {
      data[i].no = (i + 1);
    }
    this.dataSource = new MatTableDataSource(data);
    this.totalFrameWorks = this.field['totalRecords'];
    this.dataSource.sort = this.sort;
  }


  /** Action performing for reviewing the data
   * @param data:pass the for reviewing
   */
  reviewData(data) {
    data.action = 'review';
    this.datasending.emit(data);
  }


  /** Action performing for reviewing the data
   * @param data:pass the for reviewing
   */
  /** Action Performing for up for review */
  upforreview(data) {
    data.action = 'upforreview';
    this.datasending.emit(data);
  }

  /** Action Performing for publishing the record */
  publishing(data) {
    data.action = 'publish';
    this.datasending.emit(data);
  }
}

