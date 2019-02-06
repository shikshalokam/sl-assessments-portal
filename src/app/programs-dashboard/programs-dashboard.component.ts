import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs-dashboard',
  templateUrl: './programs-dashboard.component.html',
  styleUrls: ['./programs-dashboard.component.scss']
})
export class ProgramsDashboardComponent implements OnInit {

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
