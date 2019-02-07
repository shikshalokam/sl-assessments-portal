import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationsComponent } from './operations.component';
import { UploadingCsvComponent } from './uploading-csv/uploading-csv.component';

const routes: Routes = [
  {  path: '', 
    // canActivate: [AuthGuard],
    // component:OperationsComponent,
    data: {},
    children: [
      {
          path:'',
          component : UploadingCsvComponent
      },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
