import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DesignerWorspaceComponent } from './designer-worspace/designer-worspace.component';

import {  ObservationUtilitiesComponent } from './observation-utilities/observation-utilities.component'

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

        path: 'observation-utilities',
        data: {
          breadcrumb:''
        },
        // component: DashboardComponent
        component:ObservationUtilitiesComponent
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
      },
      {
        path: 'design-workspace',
        component: DesignerWorspaceComponent

      },
    ]
  },
 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
