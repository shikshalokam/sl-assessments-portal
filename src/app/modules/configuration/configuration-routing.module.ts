import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth-gaurd/auth.gaurd';
import { ConfigurationComponent } from './configuration.component';
import { CriteriaComponent } from './criteria/criteria.component'
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '', 
    // component: ConfigurationComponent,
    // canActivate: [AuthGuard],
    data: {},
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
        // loadChildren: './framework/framework.module#DashboardModule'

      },
      // {
      //   path:'dashboard',
      //   loadChildren: './dashboard/dashboard.module#DashboardModule'
      //   // component : DashboardComponent
      // },
      {
        path:'criteria',
        // component:CriteriaComponent,
        loadChildren: './criteria/criteria.module#CriteriaModule'
      },
      {
        path: '',
        pathMatch: 'full' ,
        redirectTo: 'dashboard'
      }
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: 'configuration'
  // }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
