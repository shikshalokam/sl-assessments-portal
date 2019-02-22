import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
   
// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: './modules/assessment-dashboard/assessment-dashboard.module#AssessmentDashboardModule'
//     // loadChildren: './modules/configuration/configuration.module#ConfigurationModule'

//   },
//   {
//     path: '',
//     redirectTo: '',
//     pathMatch: 'full'
//   }
// ];

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'parent',
        loadChildren: './modules/parent-interview/parent-interview.module#ParentInterviewModule'
      },
      {
        path: 'report',
        loadChildren: './modules/report/report.module#ReportModule'
      },
      {
        path: 'configuration',
        loadChildren: './modules/configuration/configuration.module#ConfigurationModule'
      },
      {
        path: '',
        redirectTo: 'report',
        pathMatch: 'full'
      },
      // {
      //   path: '**',
      //   redirectTo: 'configuration',
      //   pathMatch: 'full'
      // }
    ]
  }
];
 




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
