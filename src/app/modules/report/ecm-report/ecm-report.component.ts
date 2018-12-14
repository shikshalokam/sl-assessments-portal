import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParentService, UtilityService } from 'src/app/core';
import { MatSnackBar } from '@angular/material';
import { getCurrencySymbol } from '@angular/common';

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
  headings = 'headings.ecmReportsHeading';
  constructor(private route: ActivatedRoute, private snackBar: MatSnackBar, private parentService: ParentService, private utility: UtilityService) {
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
    this.parentService.getEcmReportGetSubmissionId(this.schoolId).subscribe(
      data => {
        this.ecmData = data['result']['assessments'][0].evidences;
        this.submissionId = data['result']['assessments'][0].submissionId
        console.log(this.submissionId);
        this.parentService.getSubmission(this.submissionId).subscribe(
          data => {
              this.data = data['result'].evidences;
              this.submissionData = this.data[Object.keys(this.data)[0]].submissions;
              console.log(this.submissionData);
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
  getIndex(event){
    console.log(event.index);
    this.getSubmissionData(event.index);
  }

  getSubmissionData(index)
  {
    this.submissionData = this.data[this.ecmData[Object.keys(this.ecmData)[index]].externalId].submissions;
    console.log(this.submissionData);
  }
}
