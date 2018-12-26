import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParentService, UtilityService, ReportService } from 'src/app/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ImageModalComponent } from '../ecm-report/image-modal/image-modal.component';
export interface DialogData {
  fileName: any;
}

@Component({
  selector: 'app-ecm-report',
  templateUrl: './ecm-report.component.html',
  styleUrls: ['./ecm-report.component.scss']
})
export class EcmReportComponent implements OnInit {
  schoolId;
  schoolName;
  error;
  ecmData;
  submissionData;
  submissionDataKey = [];
  answers = [];
  payloads = [];
  submissionId;
  data;
  questionNo = 1;
  imageArray = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTVf63Vm3XgOncMVSOy0-jSxdMT8KVJIc8WiWaevuWiPGe0Pm'];
  headings = 'headings.ecmReportsHeading';
  constructor(private route: ActivatedRoute, private snackBar: MatSnackBar, private reportService: ReportService, private utility: UtilityService,
    public dialog: MatDialog) {
    this.route.params.subscribe(params => {
      this.schoolId = params["id"];
      this.schoolName = params["name"];
    });
    this.fetchApi();
  }
  ngOnInit() {
    this.utility.loaderShow();
  }
  fetchApi() {
    this.reportService.getEcmReportGetSubmissionId(this.schoolId).subscribe(
      data => {
        this.ecmData = data['result']['assessments'][0].evidences;
        this.submissionId = data['result']['assessments'][0].submissionId
        console.log(this.submissionId);
        this.reportService.getSubmission(this.submissionId).subscribe(
          data => {
            this.data = data['result'].evidences;
            this.submissionData = this.data[Object.keys(this.data)[0]].submissions;
            console.log(this.submissionData);
            this.utility.loaderHide();

          },
          (error) => {
            this.error = error;
            this.snackBar.open(error['message'], "Ok", { duration: 9000 });
            this.utility.loaderHide();
          }
        )
        this.utility.loaderHide();
        console.log(this.ecmData)
      },
      (error) => {
        this.error = error;
        this.snackBar.open(error['message'], "Ok", { duration: 9000 });
        this.utility.loaderHide();
      }
    );
  }
  objectKeys(obj) {
    return Object.keys(obj);
  }
  getIndex(event) {
    console.log(event.index);
    this.getSubmissionData(event.index);
  }

  getSubmissionData(index) {
    this.submissionData = this.data[this.ecmData[Object.keys(this.ecmData)[index]].externalId].submissions;
    console.log(this.submissionData);
  }
  openDialog(imageFile): void {
    const dialogRef = this.dialog.open(ImageModalComponent, {
      // imageArray = imageFile
      width: '650px',
      height: '600px',
      data: { fileName: imageFile },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
