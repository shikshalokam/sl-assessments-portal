/**
 * Name : under-review.component.ts
 * Author : Rakesh
 * Created-date : 16-Dec-2019
 * Description : To Maintain the records Under Reviewing.
 */

// dependencies
import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { DraftFrameWorkServiceService } from '../../configuration/workspace-services/draft-frame-work-service.service';
import { MatTableDataSource, MatDialog, PageEvent, MatPaginator, MatSort, Sort } from '@angular/material';
import { DeleteConfirmComponent } from '../designer-worspace/components/delete-confirm/delete-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-draft',
  templateUrl: './under-review.component.html',
  styleUrls: ['./under-review.component.scss']
})


// To Maintain the records Under Reviewing
export class UnderReviewComponent implements OnInit {
  eventsSubject: Subject<void> = new Subject<void>();
  field: Subject<any> = new Subject();
  showTable: boolean = true;
  element = []
  dataSource: any;
  display: boolean = false;
  displayedColumns: string[] = ['no', 'externalId', 'name', 'description', 'action'];
  pageSize = 10;
  totalFrameWorks: any;
  tableData: any;
  spin: any;
  config = {
    search: true,
    sort: true,
    pagination: true,
    actions: {
      edit: true,
      delete: true,
      senttoreview: false,
      upforreview: false,
      published: false,
      search: true,
      pagination: true
    },
    title: "Under Review List"
  }


  /**
     * Default method called and objects are created to use other component functions
     */
  constructor(private frameWorkServ: DraftFrameWorkServiceService, public dialog: MatDialog, private _snackBar: MatSnackBar,
    private route: Router, private cdr: ChangeDetectorRef,
    private spinner: NgxSpinnerService) {
    this.getReviewList();
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

  /**
     * 
     * To pass  the data to Delete the record
     * @param data : data we need to delete
     */
  deleteDraftFW(id) {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: '350px',
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.frameWorkServ.deleteDraftFrameWork(id).subscribe(
          data => {
            console.log("data", data);

            this.openSnackBar("Succesfully Deleted", "Deleted");
            this.getReviewList();
            this.spinner.hide();
          },
          error => {
            console.log("data", error);
          }
        );
      }
    });
  }

  /**
  * To show the toasters after the operation is done
  * @param message : Message we want to show
  * @param action : Action we have done
  */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  /**
   * Getting data from the child data and finding the actions
   * @param data: The data sending from the child
   */
  dataFromChild(data) {
    if (data.action == 'Edit') {
      this.route.navigateByUrl('/workspace/edit/' + data._id);
    } else if (data.action == 'delete') {
      this.deleteDraftFW(data._id);
    } else if (data.action == 'pagination') {
      this.getNext(data);
    } else if (data.action == 'review') {
      this.updateToReviewStatus(data);

    } else if (data.action == 'upforreview') {
      this.updateToReviewStatus(data);
    }
  }

  /** To get the review list
   * @returns {JSON} - Response data.
    */
  getReviewList() {
    this.frameWorkServ.listOfDraftFrameWork(this.pageSize, 1, "review").subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Element>(data['result'].data);
        this.totalFrameWorks = data['result'].count;
        this.tableData = {
          data: this.dataSource,
          displayedColumns: this.displayedColumns,
          totalRecords: this.totalFrameWorks,
          configdata: this.config
        }
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

  /**
  * Paginating the under-review listing
  * @returns {JSON} - Response data.
  */
  getNext(event: PageEvent) {
    this.pageSize = event.pageSize;
    let offset = event.pageSize * event.pageIndex;
    this.frameWorkServ.listOfDraftFrameWork(this.pageSize, event.pageIndex + 1, 'review').subscribe(
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

  /** To redirect the page to edit */
  redirectToEditDraft(ele) {
    this.route.navigateByUrl('/workspace/edit/' + ele._id);
  }

  /**
    * For updating the status to review
    * @param data: data from the child (i.e) object
    * @returns {JSON} - Response data.
    */
  updateToReviewStatus(data) {
    let obj = {
      status: "upforreview"
    }
    this.updateAllEcm(data._id);
    this.updateAllDraftSection(data._id);
    this.updateAllCriteria(data._id);
    this.updateAllQuestion(data._id);
    this.frameWorkServ.updateDraftFrameWork(obj, data._id).subscribe(data => {
      this.getReviewList();
      this.openSnackBar("sent Up For Review", "Updated");
    },
      error => {
        console.log("data", error);
      });

  }

  /**
   * To Update all the drafts based on the framework id
   * @param frameWorkId : Framework id.
   * @returns {JSON} - Response data.
   */
  updateAllEcm(frameWorkId) {
    this.frameWorkServ.listDraftEcm(frameWorkId).subscribe(data => {
      if (data['result'] && data['result'].data) {
        console.log("data['result'].data", data['result'].data);
        data['result'].data.forEach(element => {
          this.frameWorkServ.updateDraftECM(element._id, { status: 'upforreview' }).subscribe(result => {
          });
        });
      }
    });
  }

  /**
    * To update all the drafts based on the framworkid
    * @param frameWorkId : Framework id.
    * @returns {JSON} - Response data.
    */
  updateAllDraftSection(frameWorkId) {
    console.log("frameWorkId", frameWorkId);
    this.frameWorkServ.listDraftSection(frameWorkId).subscribe(data => {
      data['result'].data.forEach(element => {
        this.frameWorkServ.updateDraftSection(element._id, { status: 'upforreview' }).subscribe(result => {
        });
      });
    });
  }

  /**
* To update the criteria based on the framework id
* @param frameWorkId : Framework id.
* @returns {JSON} - Response data.
*/
  updateAllCriteria(frameWorkId) {
    this.frameWorkServ.draftCriteriaList(frameWorkId, 100, 0).subscribe(data => {
      console.log("all criteria", data['result'].data);
      data['result'].data.forEach(element => {
        this.frameWorkServ.updateDraftCriteria(element._id, { status: 'upforreview' }).subscribe(result => {
        });
      });
    });
  }

  /**
  *To Update the Questions based on the frameworkId
  * @param frameWorkId : Framework id.
  * @returns {JSON} - Response data.
  */
  updateAllQuestion(frameWorkId) {
    this.frameWorkServ.draftQuestionList(frameWorkId).subscribe(data => {
      data['result'].data.forEach(element => {
        this.frameWorkServ.updateDraftQuestion({ status: 'upforreview' }, element._id).subscribe(result => {
        });
      });
    });
  }

}

