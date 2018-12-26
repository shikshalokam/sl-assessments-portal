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
  evedince;
  constructor(private reportService : ReportService) { }

  ngOnInit() {
  }
  sendEvedinceId(evedinceID){
    console.log(evedinceID + "is this");
    this.evedince = evedinceID;
    
  }
  downloadEvedinceReport(){
    this.reportService.downloadReport(this.evedince).subscribe(
      data =>{
        console.log("file download")
        console.log(data);
      },(error)=>{

      }
    )
  }
}
