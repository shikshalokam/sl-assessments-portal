import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { EcmReportComponent } from './ecm-report/ecm-report.component';

const routes: Routes = [
  {
    path: 'report', component: ReportComponent,
    data: {},
    children: [
      {
        path: 'school-list',
        component: SchoolListComponent,
       
      },
      {
        path: 'ecm-report/:name/:id',
        component: EcmReportComponent,
       
      },
      
      {
        path: '**',
        redirectTo: 'school-list'
      }
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: 'report'
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
