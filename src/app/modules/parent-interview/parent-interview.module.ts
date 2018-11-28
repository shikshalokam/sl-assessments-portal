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
import { ParentApiFetch } from 'src/app/core/services/parent-api-fetch-service';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { ParentListComponent } from './parent-list/parent-list.component';
@NgModule({
  declarations: [ParentInterviewComponent, SchoolListComponent, ParentListComponent],
  imports: [
    CommonModule,
    ParentInterviewRoutingModule,
    CoreModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    RouterModule
  ],
  providers:[
    ParentApiFetch
  ]
})
export class ParentInterviewModule { }
