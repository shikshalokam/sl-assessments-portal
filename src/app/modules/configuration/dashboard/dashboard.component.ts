import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  headings = 'headings.dashBoard';
  frameWorkList = [
    {
      value: "headings.criteriaFrameWorkHeading",
      description: "descriptions.criteriaFrameWorkDescription",
      anchorLink: "/configuration/criteria"
    },
    {
      value: "headings.questionFrameWorkHeading",
      description: "descriptions.questionFrameWorkDescription",
      anchorLink: "/configuration/question"
    },
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
