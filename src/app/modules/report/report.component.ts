import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  programId;
  assessmentId;
  constructor(private route : ActivatedRoute) { 
   this.programId=this.route.parent.snapshot['_urlSegment'].segments[1].path;
   this.assessmentId=this.route.parent.snapshot['_urlSegment'].segments[2].path;
   
  }
  ngOnInit() {
  }

}
