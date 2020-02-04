import { Component, OnInit, Inject, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';

import { DraftFrameWorkServiceService } from '../../configuration/workspace-services/draft-frame-work-service.service';

import { MatTableDataSource, MatDialog, MatDialogRef, PageEvent, MAT_DIALOG_DATA, MatPaginator, MatSort, Sort } from '@angular/material';
// import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { DeleteConfirmComponent } from '../designer-worspace/components/delete-confirm/delete-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { PublishComponent } from '../publish/publish.component';
import { Subject } from 'rxjs';

export interface DialogData {
    animal: string;
    name: string;
}
@Component({
    selector: 'app-draft',
    templateUrl: './up-for-review.component.html',
    styleUrls: ['./up-for-review.component.scss']
})



export class UpForReviewComponent implements OnInit, AfterViewInit {


    // dataSource:any;
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
    quesionslist: any;
    questiondetails: any = [];
    globaldata: any;
    config = {
        search: true,
        sort: true,
        pagination: true,
        actions: {
            edit: false,
            delete: false,
            senttoreview: false,
            upforreview: true,
            published: false,
            search: true,
            pagination: true,
            request_change: false
        },
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
                        this.getList();
                        this.cdr.detectChanges();
                        this.openSnackBar("Succesfully Deleted", "Deleted");
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

        } else if (data.action == 'pagination') {
            this.getNext(data);
        } else if (data.action == 'review') {
            // this.route.navigateByUrl('/workspace/edit/' + data._id+'/valid');
            this.updateToReviewStatus(data);

        } else if (data.action == 'publish') {
            // this.route.navigateByUrl('/workspace/edit/' + data._id+'/valid');
            this.updateToReviewStatus(data);

        }

    }


    getList() {
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
    redirectToEditDraft(ele) {
        this.route.navigateByUrl('/workspace/edit/' + ele._id);

    }

    updateToReviewStatus(data) {

        let obj = {
            status: "publish"
        }
        console.log("==========", data);
        this.globaldata = data._id;
        // this.frameWorkServ.updateDraftFrameWork(obj, data._id).subscribe(data => {
        //   console.log("data", data);
        //   this.openSnackBar("Sent For Review", "Updated");
        // },
        //   error => {
        //     console.log("data", error);
        // });

        let _this = this;
        this.questiondetails = [];

        this.frameWorkServ.draftQuestionList(data._id).subscribe(data => {
            this.quesionslist = data['result'];
            console.log('this.quesionslist', this.quesionslist);
            if (this.quesionslist.data.length) {
                this.quesionslist.data.forEach(question => {
                    this.frameWorkServ.detailsDraftQuestion(question._id).subscribe(data => {
                        this.questiondetails.push(data['result']);
                    })
                });
                console.log('this.questiondetails', this.questiondetails);
                this.openDialog(this.questiondetails);
            } else {
                this.openSnackBar('No questions selected for this framework', 'Failed')
            }
           

        })
        // /assessment-design/api/v1/draftFrameworks/publish/

    }

    /**
     * 
     * To open the popup for reviewing the data
     */
    openDialog(questiondetails): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '80%',
            height: '65%',
            data: { name: questiondetails }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}

// For dialog for reviewing the data
@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-for-review-questions.html',
    styleUrls: ['./up-for-review.component.scss']
})

export class DialogOverviewExampleDialog {
    requestchanges = false;
    reviewdata = true;
    appropriateness = [
        {
            item: 'Has Hate speech, Abuse, Violence, Profanity',
            value: 'Has Hate speech, Abuse, Violence, Profanity'
        },
        {
            item: 'Has Sexual content, Nudity or Vulgarity',
            value: 'Has Sexual content, Nudity or Vulgarity'
        },
        {
            item: 'Has Discriminatory or Defamatory content',
            value: 'Has Discriminatory or Defamatory content'
        },
        {
            item: 'Is not suitable for children',
            value: 'Is not suitable for children'
        }
    ]
    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, private router: Router,
        @Inject(MAT_DIALOG_DATA) public data: DialogData, private _snackBar: MatSnackBar,
        private frameWorkServ: DraftFrameWorkServiceService) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    // click on request chnages
    requestChanges() {
        this.requestchanges = true;
        this.reviewdata = false;
    }

    // To cancel the request chnages
    cancelRequestChanges() {
        this.requestchanges = false;
        this.reviewdata = true;
    }

    /**
     * 
     *To Publish the data after reviewing 
     */
    publishData(data) {
        this.frameWorkServ.getDraftFrameworksdetails(data[0].draftFrameworkId).subscribe(details => {
            let res = details['result'];
            //  res.entityTypeId;
            console.log("res", res);
            this.frameWorkServ.publishDraftFrameWork(data[0].draftFrameworkId, res.entityType).subscribe(data => {
                if (data && data['status'] == 200) {
                    this.openSnackBar("Succesfully Published", "Done");
                    this.router.navigate(['/workspace/publish']);
                    this.dialogRef.close();

                } else {
                    this.openSnackBar("Failed to Publish", "Failed");
                }
            });
        });
    }

    toggle(data) {
        console.log('toggle', data);
    }

    // For toaster message
    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }

    close() {
        this.dialogRef.close();
    }

}