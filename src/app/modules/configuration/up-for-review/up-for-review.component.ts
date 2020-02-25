/**
 * Name : up-for-review.component.ts
 * Author : Rakesh
 * Created-date : 16-Dec-2019
 * Description : To Maintain the records Under Reviewing.
 */

// dependencies
import { Component, OnInit, Inject, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { DraftFrameWorkServiceService } from '../../configuration/workspace-services/draft-frame-work-service.service';
import { MatTableDataSource, MatDialog, MatDialogRef, PageEvent, MAT_DIALOG_DATA, MatPaginator, MatSort, Sort } from '@angular/material';
import { DeleteConfirmComponent } from '../designer-worspace/components/delete-confirm/delete-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
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

// To Maintain the records Under upForReviewing and curd operations
export class UpForReviewComponent implements OnInit {
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


    /**
       * Default method called and objects are created to use other component functions
       */

    constructor(private frameWorkServ: DraftFrameWorkServiceService, public dialog: MatDialog, private _snackBar: MatSnackBar,
        private route: Router, private cdr: ChangeDetectorRef,
        private spinner: NgxSpinnerService) {
        this.getUpForReviewList();
    }
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
        * @param id : id we need to delete
        */
    deleteDraftFW(id) {
        const dialogRef = this.dialog.open(DeleteConfirmComponent, {
            width: '350px',
        })
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.frameWorkServ.deleteDraftFrameWork(id).subscribe(
                    data => {
                        this.getUpForReviewList();
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

        } else if (data.action == 'publish') {
            this.updateToReviewStatus(data);
        }

    }

    /** To get the upForReview list
    * @returns {JSON} - Response data.
   */
    getUpForReviewList() {
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

     /**
    * For updating the status to review
    * @param data: data from the child (i.e) object
    * @returns {JSON} - Response data.
    */
    updateToReviewStatus(data) {
        let obj = {
            status: "publish"
        }
        this.globaldata = data._id;
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
                this.openDialog(this.questiondetails);
            } else {
                this.openSnackBar('No questions selected for this framework', 'Failed')
            }
        })
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

    // For toaster message
    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }

    // Close the reviewing the questions
    close() {
        this.dialogRef.close();
    }

}