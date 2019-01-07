import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  flag = true;
  sendQuestion = false;
  optionCount;
  showIcon;
  newQuestionArray = [];
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
  currentQuestion: string;
  headings = 'headings.addQuestions';
  catchQuestionObject(newObject) {
    console.log(newObject);
    this.newQuestionArray.push(newObject);
    this.showIcon = new Array(this.newQuestionArray.length).fill(false);
    console.log(this.newQuestionArray);
    console.log(this.showIcon);
  }
  removeQuestion(event){
    console.log(this.newQuestionArray)
  }

}
