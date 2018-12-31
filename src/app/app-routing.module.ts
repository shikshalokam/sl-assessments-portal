import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth-gaurd/auth.gaurd';

const routes: Routes = [
  {
    path: 'interviewModule',
    loadChildren: './modules/parent-interview/parent-interview.module#ParentInterviewModule'
  },
  {
    path: 'reportModule',
    loadChildren: './modules/report/report.module#ReportModule'
  },
  {
    path: 'configurationModule',
    loadChildren: './modules/configuration/configuration.module#ConfigurationModule'
  },
  {
    path: '',
    redirectTo: 'parent/school-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
