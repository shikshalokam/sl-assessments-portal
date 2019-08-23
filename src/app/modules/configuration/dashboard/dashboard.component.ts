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
      // value: "headings.criteriaFrameWorkHeading",

      value: "Observations",
      description: "descriptions.criteriaFrameWorkDescription",
      // anchorLink: "/assessments/configuration/criteria"
      anchorLink: "/configuration/observation-utilities",
      icon:"question_answer"
     
    },
    {
      // value: "headings.criteriaFrameWorkHeading",

      value: "Assment Solutions",
      description: "descriptions.criteriaFrameWorkDescription",
      // anchorLink: "/assessments/configuration/criteria"
      anchorLink: "/configuration/observation-review",
      icon:"assignment"
     
    }
    // {
    //   value: "headings.questionFrameWorkHeading",
    //   description: "descriptions.questionFrameWorkDescription",
    //   // anchorLink: "/assessments/configuration/question"
    //   anchorLink: "/configuration/question",
    //   icon:"question_answer"

    // },
    // {
    //   value: "headings.design",
    //   description: "descriptions.questionFrameWorkDescription",
    //   // anchorLink: "/assessments/configuration/question"
    //   anchorLink: "/configuration/design-workspace",
    //   icon:"toys"

    // },
    
  ]
 

  ngOnInit() {
  }

}
