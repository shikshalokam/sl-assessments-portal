import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentDashboardComponent } from './assessment-dashboard.component';

const routes: Routes = [
  {
    path: 'assessments/:programId/:assessmentId',
    component: AssessmentDashboardComponent,
    children: [
      // {
      //   path: 'parent',
      //   loadChildren: '../modules/parent-interview/parent-interview.module#ParentInterviewModule'
      // },
      {
        path: 'report',
        // data: { programId: progId, assessmentId: assId},

        loadChildren: '../modules/report/report.module#ReportModule'
      },
      {
        path: 'configuration',
        loadChildren: '../modules/configuration/configuration.module#ConfigurationModule'
      },
      {
        path: 'operations',
        loadChildren: '../modules/operations/operations.module#OperationsModule'

      },
      {
        path: '**',
        redirectTo: 'operations',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentRoutingModule {
  constructor(){
  }
 }
