import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DesignerWorspaceComponent } from './designer-worspace/designer-worspace.component';

const routes: Routes = [
  {
    path: '', 
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
        path:'question',
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
