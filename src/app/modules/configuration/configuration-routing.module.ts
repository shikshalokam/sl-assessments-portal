import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth-gaurd/auth.gaurd';
import { ConfigurationComponent } from './configuration.component';
import { CriteriaComponent } from './criteria/criteria.component'
import { FrameworkComponent } from './framework/framework.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: 'configuration', 
    // component: ConfigurationComponent,
    // canActivate: [AuthGuard],
    data: {},
    children: [
      {
        path: 'framework',
        component: FrameworkComponent
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
        redirectTo: 'framework'
      }
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: 'configuration'
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
