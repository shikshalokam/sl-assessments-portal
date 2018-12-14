import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentInterviewModule } from './parent-interview/parent-interview.module';
import { ReportModule } from './report/report.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ParentInterviewModule,
    ReportModule
  ]
})
export class ModulesModule { }
