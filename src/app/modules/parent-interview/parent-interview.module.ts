import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentInterviewComponent } from './parent-interview.component';
import { ParentInterviewRoutingModule } from './parent-interview-routing.module';

@NgModule({
  declarations: [ParentInterviewComponent],
  imports: [
    CommonModule,
    ParentInterviewRoutingModule
  ]
})
export class ParentInterviewModule { }
