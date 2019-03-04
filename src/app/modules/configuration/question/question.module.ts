import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionRoutingModule } from './question-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRadioModule, MatInputModule, MatButtonModule, MatSelectModule, MatSidenavModule, MatCheckboxModule, MatExpansionModule, MatFormField, MatTabsModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionWorkspace } from './add-question/question-workspace/question-workspace.component';
import { CoreModule } from 'shikshalokam';
import { QuestionTypeListComponent } from './question-type-list/question-type-list.component';
import { CustomizeQuestionComponent } from './add-question/customize-question/customize-question-modal.component';
import { SharedModule } from 'shikshalokam';

@NgModule({
  declarations: [QuestionComponent, QuestionWorkspace,AddQuestionComponent, QuestionTypeListComponent,CustomizeQuestionComponent],
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
    MatCheckboxModule,
    SharedModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule 


  ],
  entryComponents: [CustomizeQuestionComponent],
  providers:[MatDatepickerModule,]
})
export class QuestionModule { }
