import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentInterviewComponent } from './parent-interview.component';

const routes: Routes = [
  {
    path: '', component: ParentInterviewComponent,
    data: {}
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentInterviewRoutingModule { }
