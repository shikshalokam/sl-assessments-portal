import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/core';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-download-report',
  templateUrl: './download-report.component.html',
  styleUrls: ['./download-report.component.scss']
})
export class DownloadReportComponent implements OnInit {
  showLoader = false;
  evedinces = [
    {
      label: "Assesment - Class-3",
      value: "AC3",
    },
    {
      label: "Assesment - Class-5",
      value: "AC5",
    },
    {
      label: "Assesment - Class-8",
      value: "AC8",
    },
    {
      label: "Book Look",
      value: "BL"
    },
    {
      label: "ClassRoom Observation",
      value: "CO"
    },
    {
      label: "Learning Work",
      value: "LW"
    },
    {
      label: "Principal Interview",
      value: "PI"
    },
    {
      label: "Student Interview",
      value: "SI"
    },
    {
      label: "Teacher Interview",
      value: "TI"
    }
  ]
  heading = 'headings.downloadReport'
  evedince;
  activeButton = false;
  constructor(private reportService: ReportService,private snackBar:MatSnackBar,) { }

  ngOnInit() {
  }
  
  btnOpts: MatProgressButtonOptions = {
    active: false,
    text: 'Download',
    spinnerSize: 19,
    raised: false,
    stroked: true,
    buttonColor: 'accent',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
  };
  sendEvedinceId(evedinceID) {
    this .activeButton = true;
    console.log(evedinceID + "is this");
    this.evedince = evedinceID;

  }
  downloadEvedinceReport() {
  
    this.btnOpts.active = true;
    this.showLoader = true;
    this.reportService.downloadReport(this.evedince).subscribe(
      data => {
        console.log("file download")
        console.log(data);
        this.showLoader  = false;

      }, (error) => {
      this.snackBar.open(error, "Ok", {duration: 3000});
        
      this.showLoader  = false;
      }
    )
  }
  objectKeys(obj) {
    return Object.keys(obj);
  }
}
