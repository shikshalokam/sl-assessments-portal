import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentDashboardComponent } from './assessment-dashboard.component';
const routes: Routes = [
 {
   path:'',
   data : {},
   component:AssessmentDashboardComponent,
   children : [
    {
      path: 'parent',
      loadChildren: '../modules/parent-interview/parent-interview.module#ParentInterviewModule'
    },
    {
      path: 'report',
      loadChildren: '../modules/report/report.module#ReportModule'
    },
    {
      path: 'configuration',
      loadChildren: '../modules/configuration/configuration.module#ConfigurationModule'
    },
   
    {
      path: '**',
      redirectTo: 'parent',
      pathMatch: 'full'
    }
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentRoutingModule { }
