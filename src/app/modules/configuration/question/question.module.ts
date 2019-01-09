import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionRoutingModule } from './question-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRadioModule, MatInputModule, MatButtonModule, MatSelectModule, MatSidenavModule, MatCheckboxModule, MatExpansionModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { QuestionWorkspace } from './add-question/question-workspace/question-workspace.component';
import { CoreModule } from 'src/app/core/core.module';
import { QuestionTypeListComponent } from './question-type-list/question-type-list.component';
import { CustomizeQuestionComponent } from './add-question/customize-question/customize-question-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';

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



  ],
  entryComponents: [CustomizeQuestionComponent],

})
export class QuestionModule { }
