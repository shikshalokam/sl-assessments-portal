import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  headings = 'headings.dashBoard';
  dashBoardList = [
    {
      value: "headings.criteriaFrameWorkHeading",
      description: "descriptions.criteriaFrameWorkDescription",
      anchorLink: "/assessments/configuration/criteria"
    },
    {
      value: "headings.questionFrameWorkHeading",
      description: "descriptions.questionFrameWorkDescription",
      anchorLink: "/assessments/configuration/question"
    },
    
  ]
 

  ngOnInit() {
  }

}
