import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentInterviewComponent } from './parent-interview.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { ParentListComponent } from './parent-list/parent-list.component';
const routes: Routes = [
  {
    path: 'parent', component: ParentInterviewComponent,
    data: {},
    children: [
      {
        path: 'school-list',
        component: SchoolListComponent
      },
      {
        path : 'parent-list/:id',
        component : ParentListComponent,
      },
      {
        path: '**',
        redirectTo: 'school-list'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'parent'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ParentInterviewRoutingModule { }
