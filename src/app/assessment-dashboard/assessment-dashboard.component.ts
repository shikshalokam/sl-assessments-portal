import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment-dashboard',
  templateUrl: './assessment-dashboard.component.html',
  styleUrls: ['./assessment-dashboard.component.scss']
})
export class AssessmentDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  links = [  
    { 
      linkHeading : "headings.features",
      options:[
        {
          value : "headings.parentInterview",
          anchorLink : "/parent"
        },
        {
          value :"headings.reports",
          anchorLink : "/report"
        },
        {
          value :"headings.configurations",
          anchorLink :"/configuration"
        },
      ]
      }
  ] ;

}
