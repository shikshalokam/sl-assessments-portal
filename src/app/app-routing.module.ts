import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './modules/private-modules/auth-gaurd/auth.gaurd';

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
    data : {breadcrumb : ''},
    children: [
      {
        path: 'parent',
        data : {},
        loadChildren: './modules/parent-interview/parent-interview.module#ParentInterviewModule'
      },
      {
        path: 'report',
        data : {},
        loadChildren: './modules/report/report.module#ReportModule'
      },
      {
        path: 'workspace',
        data : {},
        canActivate:[AuthGuard],
        loadChildren: './modules/configuration/configuration.module#ConfigurationModule'
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      // {
      //   path: '**',
      //   redirectTo: 'configuration',
      //   pathMatch: 'full'
      // }
      {
        path:'home', component: HomeComponent,
        data : {breadcrumb : 'Home'},
      }
    ]
  }
];
 




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
