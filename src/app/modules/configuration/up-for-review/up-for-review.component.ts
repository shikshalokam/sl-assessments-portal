import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';

import { DraftFrameWorkServiceService } from '../../configuration/workspace-services/draft-frame-work-service.service';

import { MatTableDataSource, MatDialog, PageEvent, MatPaginator, MatSort, Sort } from '@angular/material';
// import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { DeleteConfirmComponent } from '../designer-worspace/components/delete-confirm/delete-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { PublishComponent } from '../publish/publish.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-draft',
  templateUrl: './up-for-review.component.html',
  styleUrls: ['./up-for-review.component.scss']
})



export class UpForReviewComponent implements OnInit,AfterViewInit {

  // dataSource:any;
  eventsSubject: Subject<void> = new Subject<void>();
  field:Subject<any> = new Subject();
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
    search:true,
    sort: true,
    pagination: true,
    actions: true,
    title: "Up for Review Frameworks List"
  }



  constructor(private frameWorkServ: DraftFrameWorkServiceService, public dialog: MatDialog, private _snackBar: MatSnackBar,
    private route: Router, private cdr: ChangeDetectorRef,
    private spinner: NgxSpinnerService) {

    this.getList();

  }


  // private paginator: MatPaginator;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.cdr.detectChanges();
    // this.tableData = {
    //   data: this.dataSource,
    //   displayedColumns: this.displayedColumns,
    //   totalRecords : 183
    // }
  }

  ngOnInit() {
    this.spinner.show();
    this.spin = true;
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 1000);
  }

  emitEventToChild() {
    console.log('emitEventToChild');
    this.eventsSubject.next();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

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
            this.getList();
            this.spinner.hide();
            //  this.dataSource = data['result'].data;
          },
          error => {
            console.log("data", error);
          }
        );
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  /**
   * 
   * Getting data from the child data
   */

  dataFromChild(data) {
    console.log('draft comonent', data);
    if (data.action == 'Edit') {
      this.route.navigateByUrl('/workspace/edit/' + data._id);
    }
    else if (data.action == 'delete') {
      this.deleteDraftFW(data._id);
    }else if (data.action == 'pagination') {
      this.getNext(data);
    }else if(data.action == 'review'){
      // this.route.navigateByUrl('/workspace/edit/' + data._id+'/valid');
      this.updateToReviewStatus(data);

    }

  }


  getList() {
    this.frameWorkServ.listOfDraftFrameWork(this.pageSize, 1,"review").subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Element>(data['result'].data);
        this.totalFrameWorks = data['result'].count;
        this.tableData = {
          data: this.dataSource,
          displayedColumns: this.displayedColumns,
          totalRecords: this.totalFrameWorks,
          configdata: this.config
        }
        this.cdr.detectChanges();

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

  getNext(event: PageEvent) {
    console.log('getNext', event);
    this.pageSize = event.pageSize;
    let offset = event.pageSize * event.pageIndex;
    this.frameWorkServ.listOfDraftFrameWork(this.pageSize, event.pageIndex + 1,'review').subscribe(
      data => {
        this.dataSource = data['result'].data;
        console.log('==this.dataSource=', this.dataSource);
        this.totalFrameWorks = data['result'].count;
        this.tableData = {
          data: this.dataSource,
          displayedColumns: this.displayedColumns,
          totalRecords: this.totalFrameWorks,
          configdata: this.config
        }
        console.log('==this.tableData=', this.tableData);
       
        this.cdr.detectChanges();
        this.field.next();
      },
      error => {
        console.log("data", error);
      }
    );
    // call your api function here with the offset
  }
  redirectToEditDraft(ele) {

    console.log("ele ======= ", ele);

    this.route.navigateByUrl('/workspace/edit/' + ele._id);

  }

  updateToReviewStatus(data){


    let obj = {
     status:"review"
    }
    console.log("==========",data);
    this.frameWorkServ.updateDraftFrameWork(obj, data._id).subscribe(data => {
      console.log("data", data);
      this.openSnackBar("Sent For Review", "Updated");
    },
      error => {
        console.log("data", error);
    });

  }

  // ngOnDestroy() {
  //   this.subject.complete();
  // }
}

