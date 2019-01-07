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
  @Output() removeNewQuestion = new EventEmitter<boolean>();
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
    this.removeNewQuestion.emit(true);

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
    });
  }
}
