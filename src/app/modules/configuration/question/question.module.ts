import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionRoutingModule } from './question-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRadioModule, MatInputModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { EditQuestionComponent } from './add-question/edit-question/edit-question.component';
import { CoreModule } from 'keycloak-angular';

@NgModule({
  declarations: [QuestionComponent, AddQuestionComponent, EditQuestionComponent],
  imports: [
    CommonModule,
    CoreModule,
    DragDropModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    QuestionRoutingModule,
    MatInputModule,
    MatSelectModule
  


  ]
})
export class QuestionModule { }
