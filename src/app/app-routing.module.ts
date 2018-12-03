import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'parent-interview',
    loadChildren: './modules/parent-interview/parent-interview.module#ParentInterviewModule'
   // load private module only if logged in
  },
  {
    path: '**',
    redirectTo: 'parnet-interview'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
