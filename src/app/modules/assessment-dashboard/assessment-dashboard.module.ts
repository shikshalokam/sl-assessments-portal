import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentDashboardComponent } from './assessment-dashboard.component';
import { AssessmentRoutingModule } from './assesment-routing.module';
import { MatDividerModule } from '@angular/material';
import { CoreModule } from 'src/app/core';

@NgModule({
  declarations: [AssessmentDashboardComponent],
  imports: [
    CommonModule,
    CoreModule,
    MatDividerModule,
    AssessmentRoutingModule
  ]
})
export class AssessmentDashboardModule { }
