import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CustomizeQuestionComponent } from '../customize-question/customize-question-modal.component';

@Component({
  selector: 'app-question-workspace',
  templateUrl: './question-workspace.component.html',
  styleUrls: ['./question-workspace.component.scss']
})
export class QuestionWorkspace implements OnInit {
  @Input() newQuestionArray: any;
  @Input() optionCount :number;
  showIcon : number;  
  index : number;
  constructor(public dialog: MatDialog) {
  }
  ngOnInit() {
  }
  
  showEditOption(index){
    this.showIcon = index;
  }
  removeQuestion(index){
    this.newQuestionArray.splice(index, 1);

  }
  
  openDialog(index): void {
    const dialogRef = this.dialog.open(CustomizeQuestionComponent, {
      width: '950px',
      height:'600px',
      data : { questionObject : JSON.parse(JSON.stringify(this.newQuestionArray[index])), questionIndex : index },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
      console.log(result)
      this.updateQuestionArray(result);
      }
    });

  }
  updateQuestionArray(result){
    const index = result.questionIndex;
    const questObj = result.questionObject;
    this.newQuestionArray[index] = questObj;
    console.log(this.newQuestionArray)
  }
}
