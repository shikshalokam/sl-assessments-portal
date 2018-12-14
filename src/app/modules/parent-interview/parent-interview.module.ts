import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';


import { ParentInterviewComponent } from './parent-interview.component';
import { ParentInterviewRoutingModule } from './parent-interview-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { SchoolListComponent } from './school-list/school-list.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ParentService } from 'src/app/core/services/parent-service/parent.service';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentEditComponent } from './parent-edit/parent-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ParentInformationComponent } from './parent-information/parent-information.component';
import { RadioComponent } from './questionnaire/components/radio/radio.component';
import { SelectComponent } from './questionnaire/components/select/select.component';
import { MultiSelectComponent } from './questionnaire/components/multi-select/multi-select.component';
import { ConfirmModalComponent } from './questionnaire/components/confirm-modal/confirm-modal.component';
import { MatPaginatorModule } from '@angular/material';
import { RemarksComponent } from './questionnaire/components/remarks/remarks.component';
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
    NgxSpinnerModule,
    MatCardModule,
    ParentInterviewRoutingModule,
    CoreModule,
    SharedModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    MatRadioModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [
    ParentService,
  ],
  entryComponents: [ConfirmModalComponent]
})
export class ParentInterviewModule { }
