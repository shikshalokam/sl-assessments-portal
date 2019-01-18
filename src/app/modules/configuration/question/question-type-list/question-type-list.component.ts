import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-type-list',
  templateUrl: './question-type-list.component.html',
  styleUrls: ['./question-type-list.component.scss']
})
export class QuestionTypeListComponent implements OnInit {
  @Output() sendQuestionObject = new EventEmitter<any>();
  
  constructor() { }
  newQuestion = {
    _id: "Dummmy Id",
    question: [
      "Question",
    ],
    options: [],
    children: [],
    questionGroup: [
      'A1' , 'A2'
    ],
    fileName: [],
    instanceQuestions: [],
    deleted: true,
    tip: "Edit Tip",
    externalId: "",
    visibleIf: "",
    file: "",
    responseType: "",
    validation: {
      required: true,
      isNumber: true,
      regex: "^[0-9s]*$"
    },
    showRemarks: false,
    isCompleted: false,
    remarks: "",
    value: "",
    canBeNotApplicable: "false",
    usedForScoring: "",
    modeOfCollection: "onfield",
    questionType: "auto",
    accessibility: "local",
    updatedAt: "",
    createdAt: "",
    __v: 0,
    evidenceMethod: "",
    payload: {
    
    },
    startTime: "",
    endTime: ""
  };
  questionType = [
    'radio',
    'text',
    'number',
    'textarea',
    'select',
  ]
  ngOnInit() {
  }
  openQuestion(question) {
    if (question == 'radio' || question == 'select') {
      this.newQuestion.options = [
        {
          value: "option1",
          label: "option1"
        },
        {
          value: "option2",
          label: "option2"
        }
      ]

      console.log("pushed")
    }
    this.newQuestion.responseType = question;
    console.log(this.newQuestion)
    this.sendQuestionObject.emit(JSON.parse(JSON.stringify(this.newQuestion)));
    this.newQuestion.options = [];
    this.newQuestion.responseType = "";

  }

}
