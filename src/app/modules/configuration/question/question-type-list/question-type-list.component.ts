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
    _id: "",
    question: [
      "Question",
    ],
    options: [],
    children: [],
    questionGroup: [
      { A1: "All (A1)" },
      { A2: "A2 (All if applicable)" },
      { A3: "A3 (All Govt)" },
      { A4: "A4 (All Private)" },
      { A5: "A5 (All 6th- 12th)" },
      { A6: "A6 (All Nursery - 5th)" },
      { A7: "A7 (Govt.DOE 6th - 12th)" },
      { A8: "A8 (Private Nursery - 5th)" },
      { A9: "A9 (Private Nursery - 8th / 10th)" },
      { A10:"A10 (All Aided)" }
    ],
    fileName: [],
    instanceQuestions: [],
    deleted: true,
    tip: "",
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
