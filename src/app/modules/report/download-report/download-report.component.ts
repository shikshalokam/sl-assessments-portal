import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/core';

@Component({
  selector: 'app-download-report',
  templateUrl: './download-report.component.html',
  styleUrls: ['./download-report.component.scss']
})
export class DownloadReportComponent implements OnInit {
  evedinceArray = ['BL','CO'];
  heading= 'headings.downloadReport'
  constructor(private reportService : ReportService) { }

  ngOnInit() {
  }
  sendEvedinceId(evedinceID){
    console.log(evedinceID);
    this.reportService.downloadReport(evedinceID).subscribe(
      data =>{
        console.log("file download")
      },(error)=>{

      }
    )
  }
}
