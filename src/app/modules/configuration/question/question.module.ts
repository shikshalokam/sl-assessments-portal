import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionRoutingModule } from './question-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRadioModule, MatInputModule, MatButtonModule, MatSelectModule, MatSidenavModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'keycloak-angular';
import { QuestionWorkspace } from './add-question/question-workspace/question-workspace.component';

@NgModule({
  declarations: [QuestionComponent, QuestionWorkspace,AddQuestionComponent],
  imports: [
    CommonModule,
    CoreModule,
    DragDropModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    QuestionRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatCheckboxModule


  ]
})
export class QuestionModule { }
