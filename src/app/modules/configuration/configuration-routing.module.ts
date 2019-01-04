import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth-gaurd/auth.gaurd';
import { CriteriaComponent } from './criteria/criteria.component'
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '', 
    // canActivate: [AuthGuard],
    data: {},
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent

      },
     
      {
        path:'criteria',
        loadChildren: './criteria/criteria.module#CriteriaModule'
      },
      {
        path: '',
        pathMatch: 'full' ,
        redirectTo: 'dashboard'
      }
    ]
  },
 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
