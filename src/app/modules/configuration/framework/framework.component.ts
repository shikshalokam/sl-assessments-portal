import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.scss']
})
export class FrameworkComponent implements OnInit {
  frameWorkList =[ 
    {
      value : "headings.criteriaFrameWorkHeading",
      description : "descriptions.criteriaFrameWorkDescription",
      anchorLink : "/configuration/criteria"
    },
    {
      value :"headings.questionFrameWorkHeading",
      description : "descriptions.questionFrameWorkDescription",
      anchorLink : "/configuration/question"
    }
  ]  
  constructor() { }

  ngOnInit() {
  }

}
