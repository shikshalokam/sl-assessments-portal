import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationsComponent } from './operations.component';
import { UploadingCsvComponent } from './uploading-csv/uploading-csv.component';
import { ViewSchoolsComponent } from './view-schools/view-schools.component';
import { OperationsDashboardComponent } from './operations-dashboard/operations-dashboard.component';

const routes: Routes = [
  {  path: '', 
    // canActivate: [AuthGuard],
    // component:OperationsComponent,
    data: {},
    children: [
      {
          path:'upload-csv',
          component : UploadingCsvComponent
      },
      { 
        path:'view-schools',
        component:ViewSchoolsComponent
      },
     {
        path:'opeartions-dashboard',
        component: OperationsDashboardComponent
      },
      {
        path:'',
        redirectTo : 'upload-csv',
        pathMatch: 'full'
        
      },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
