import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth-gaurd/auth.gaurd';
import { ProgramsDashboardComponent } from './programs-dashboard/programs-dashboard.component';

const routes: Routes = [
  {
    // path: 'assesments/:programId/:assesmentId',
    path: 'assessments',
    loadChildren: './assessment-dashboard/assessment-dashboard.module#AssessmentDashboardModule'
  },
  {
    path: 'programs',
    component : ProgramsDashboardComponent
  },
  {
    path: '',
    redirectTo: 'programs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
