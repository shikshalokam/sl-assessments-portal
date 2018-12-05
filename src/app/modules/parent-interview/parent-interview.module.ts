import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentInterviewComponent } from './parent-interview.component';
import { ParentInterviewRoutingModule } from './parent-interview-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { SchoolListComponent } from './school-list/school-list.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ApiService } from 'src/app/core/services/api-service';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
// import { RouterModule } from '@angular/router';

import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentEditComponent } from './parent-edit/parent-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import { CreateFormGroup } from 'src/app/core/services/create-formgroup-service';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ParentInformationComponent } from './parent-information/parent-information.component';
@NgModule({
  declarations: [ParentInterviewComponent, SchoolListComponent, ParentListComponent, ParentEditComponent, QuestionnaireComponent,ParentInformationComponent],
  imports: [
    CommonModule,
    ParentInterviewRoutingModule,
    CoreModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    // RouterModule
  ],
  providers:[
    ApiService,
    CreateFormGroup,
    
  ]
})
export class ParentInterviewModule { }
