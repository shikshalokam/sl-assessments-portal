import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  programId;
  assessmentId;
  constructor(private route :ActivatedRoute) { 
    this.route.parent.queryParams.subscribe(params => {
      // console.log(params, "params");
      this.programId = params['programId'];
      this.assessmentId = params['assessmentId']
    });
  }

  ngOnInit() {
  }

}
