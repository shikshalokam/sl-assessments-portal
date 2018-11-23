import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentInterviewComponent } from './parent-interview.component';
import { SchoolListComponent } from './school-list/school-list.component';

const routes: Routes = [
  {
    path: 'parent-list', component: ParentInterviewComponent,
    data: {},
    children: [
      {
        path: 'school-list',
        component: SchoolListComponent
      },
      {
        path: '**',
        redirectTo: 'school-list'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'parent-list'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentInterviewRoutingModule { }
