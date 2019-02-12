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
          anchorLink : "/assessments/parent"
        },
        {
          value :"headings.reports",
          anchorLink : "/assessments/report"
        },
        {
          value :"headings.configurations",
          anchorLink :"/assessments/configuration"
        },
      ]
      }
  ] ;

}
