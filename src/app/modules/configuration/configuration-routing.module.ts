import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '', 
    data: {
      breadcrumb:'Configuration'
    },
    children: [
      {
        path: 'dashboard',
        data: {
          breadcrumb:''
        },
        component: DashboardComponent

      },
      {
        path:'criteria',
        data: {
          breadcrumb:'Criteria'
        },
        loadChildren: './criteria/criteria.module#CriteriaModule'
      },
      {
        path:'question',
        data: {
          breadcrumb:''
        },
        loadChildren: './question/question.module#QuestionModule'
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
