/**
 * name : publishing.component.ts
 * author : Rakesh
 * created-date : 13-Dec-2019
 * Description : To publish the observation.
 */

// dependencies
import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { DraftFrameWorkServiceService } from '../../configuration/workspace-services/draft-frame-work-service.service';
import { MatTableDataSource, MatDialog, PageEvent, MatPaginator, MatSort, Sort } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-draft',
  templateUrl: './publishing.component.html',
  styleUrls: ['./publishing.component.scss']
})


// To publish the observation
export class PublishingComponent implements OnInit {
  eventsSubject: Subject<void> = new Subject<void>();
  field: Subject<any> = new Subject();
  showTable: boolean = true;
  element = []
  dataSource: any;
  display: boolean = false;
  displayedColumns: string[] = ['no', 'externalId', 'name', 'description', 'status'];
  pageSize = 10;
  totalFrameWorks: any;
  tableData: any;
  spin: any;
  config = {
    search: true,
    sort: true,
    pagination: true,
    actions: {
      edit: false,
      delete: false,
      senttoreview: false,
      upforreview: false,
      published: true,
      search: true,
      pagination: true
    },
    title: "Published Framework List"
  }
  /**
     * Default method called and objects are created to use other component functions
     */
  constructor(private frameWorkServ: DraftFrameWorkServiceService, public dialog: MatDialog, private _snackBar: MatSnackBar,
    private route: Router, private cdr: ChangeDetectorRef,
    private spinner: NgxSpinnerService) {
    this.getPublishedList();
  }

  // private paginator: MatPaginator;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /**
  * Angular first displays the data-bound properties and sets the directive/component's input properties.
  *  Called once, after the first ngOnChanges().
  */
  ngOnInit() {
    this.spinner.show();
    this.spin = true;
  }

  /**
   * Catch the event and pass data using rxjs
   */
  emitEventToChild() {
    this.eventsSubject.next();
  }

  // To show the toaster messages
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


  /** To get the list of the published questions 
   *  @returns {JSON} - Response data.
  */
  getPublishedList() {
    this.frameWorkServ.listOfDraftFrameWork(this.pageSize, 1, "published").subscribe(
      data => {
        data['result'].data = data['result'].data.filter(item => {
          item.status = "published";
          return item;
        })
        this.dataSource = new MatTableDataSource<Element>(data['result'].data);
        this.totalFrameWorks = data['result'].count;
        this.tableData = {
          data: this.dataSource,
          displayedColumns: this.displayedColumns,
          totalRecords: this.totalFrameWorks,
          configdata: this.config
        }
        this.cdr.detectChanges();
        this.spin = false;
        this.display = true;
        this.dataSource.sort = this.sort;

        this.dataSource.paginator = this.paginator;
        this.field.next();
        this.cdr.detectChanges();
        this.spinner.hide();

      },
      error => {
        console.log("data", error);
      }
    );
  }

  /** Pagination change 
   * @returns {JSON} - Response data.
  */
  getNext(event: PageEvent) {
    this.pageSize = event.pageSize;
    let offset = event.pageSize * event.pageIndex;
    this.frameWorkServ.listOfDraftFrameWork(this.pageSize, event.pageIndex + 1, 'published').subscribe(
      data => {
        this.dataSource = data['result'].data;
        this.totalFrameWorks = data['result'].count;
        this.tableData = {
          data: this.dataSource,
          displayedColumns: this.displayedColumns,
          totalRecords: this.totalFrameWorks,
          configdata: this.config
        }
        this.cdr.detectChanges();
        this.field.next();
      },
      error => {
        console.log("data", error);
      }
    );
    // call your api function here with the offset
  }

  /** Redirecting to the edit page */
  redirectToEditDraft(ele) {
    this.route.navigateByUrl('/workspace/edit/' + ele._id);
  }

  /**Sending the Questions to review
   * @param data: question object passing to update
   */
  updateToReviewStatus(data) {
    let obj = {
      status: "review"
    }
    this.frameWorkServ.updateDraftFrameWork(obj, data._id).subscribe(data => {
      this.openSnackBar("Sent For Review", "Updated");
    },
      error => {
        console.log("data", error);
      });

  }

}

