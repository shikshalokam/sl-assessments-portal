import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule,MatCheckboxModule ,MatDialogModule,MatSelectModule, MatButtonModule,MatCardModule, MatPaginatorModule,MatTableModule, MatFormFieldModule, MatInputModule, MatExpansionModule, MatChipsModule} from '@angular/material';
import { ParentInterviewComponent } from './parent-interview.component';
import { ParentInterviewRoutingModule } from './parent-interview-routing.module';
import { SchoolListComponent } from './school-list/school-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentEditComponent } from './parent-edit/parent-edit.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ParentInformationComponent } from './parent-information/parent-information.component';
import { RadioComponent } from './questionnaire/components/radio/radio.component';
import { SelectComponent } from './questionnaire/components/select/select.component';
import { MultiSelectComponent } from './questionnaire/components/multi-select/multi-select.component';
import { ConfirmModalComponent } from './questionnaire/components/confirm-modal/confirm-modal.component';
import { RemarksComponent } from './questionnaire/components/remarks/remarks.component';
import { CoreModule } from 'shikshalokamcoremodule';
import { SharedModule } from 'shikshalokamsharedmodule';
import { ParentService } from './parent-service/parent.service';
@NgModule({
  declarations: [
    ParentInterviewComponent,
    SchoolListComponent,
    ParentListComponent,
    ParentEditComponent,
    QuestionnaireComponent,
    ParentInformationComponent,
    RadioComponent,
    SelectComponent,
    MultiSelectComponent,
    ConfirmModalComponent,
    RemarksComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ParentInterviewRoutingModule,
    CoreModule,
    MatExpansionModule,
    SharedModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    MatRadioModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
    MatChipsModule

  ],
  providers: [
  ],
  entryComponents: [ConfirmModalComponent]
})
export class ParentInterviewModule { }
