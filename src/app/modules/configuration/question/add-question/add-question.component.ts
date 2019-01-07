import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  flag = true;
  sendQuestion =false;
  newQuestion ={
    _id: "5be8e8582d325f5b71da4e08",
    question: [
        "Total students assessed in Mathematics-",
        ""
    ],
    options: [],
    children: [],
    questionGroup: [
        "A1"
    ],
    fileName: [],
    instanceQuestions: [],
    deleted: false,
    tip: "",
    externalId: "AS/TL/04a",
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
    updatedAt: "2018-11-12T02:41:28.851Z",
    createdAt: "2018-11-12T02:41:28.851Z",
    __v: 0,
    evidenceMethod: "AC3",
    payload: {
        criteriaId: "5be180b05e852b0e920ad156",
        responseType: "number",
        evidenceMethod: "AC3"
    },
    startTime: "",
    endTime: ""
  };
  constructor() { }

  ngOnInit() {
  }

  // todo = [
  //   'radio',
  //   'matrix',
  //   'text',
  //   'number',
  //   'textarea',
  //   'select',

  // ];

  // done = [
    
  // ];


  // drop(event: CdkDragDrop<string[]>) {

  //   console.log(event)
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } 
  //     copyArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
     
    
  // }
  // noReturnPredicate() {
  //   return false;
  // }

  // evenPredicate() {
  //     return false;
      
  // }
  currentQuestion:string;
  questionType=[
    'Radio',
    'Text',
    'Number',
    'Textarea',
    'Select',
  ]
  openQuestion(question:string){
    console.log("radio");
  
    this.newQuestion.responseType = question;
    if (question == 'Radio' || question == 'Select') {
      this.newQuestion['options'] = [
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
    console.log(this.newQuestion.options)
    this.currentQuestion = question ;
    this.sendQuestion =true;

  }
  
}
