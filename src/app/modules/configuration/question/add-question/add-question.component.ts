import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  newQuestionArray = [];
  constructor() { }

  ngOnInit() {
  }

  
  currentQuestion: string;
  headings = 'headings.addQuestions';
  catchQuestionObject(newObject) {
    this.newQuestionArray.push(newObject);
  }
  

}
