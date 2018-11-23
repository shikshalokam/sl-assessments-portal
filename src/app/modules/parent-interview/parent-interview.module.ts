import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentInterviewComponent } from './parent-interview.component';
import { ParentInterviewRoutingModule } from './parent-interview-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { SchoolListComponent } from './school-list/school-list.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [ParentInterviewComponent, SchoolListComponent],
  imports: [
    CommonModule,
    ParentInterviewRoutingModule,
    CoreModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule

    
  ],
  providers: [SchoolListComponent]
})
export class ParentInterviewModule { }
