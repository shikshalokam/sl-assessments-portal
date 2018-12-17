import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'parent-interview',
    loadChildren: './modules/parent-interview/parent-interview.module#ParentInterviewModule'
   // load private module only if logged in
  },
  {
    path: 'parent-report',
    loadChildren: './modules/report/report.module#ReportModule'
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
