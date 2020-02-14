import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DesignerWorspaceComponent } from './designer-worspace/designer-worspace.component';

import {  ObservationUtilitiesComponent } from './observation-utilities/observation-utilities.component';

import { ObservationReviewComponent } from './observation-review/observation-review.component';
import { DraftComponent } from './draft/draft.component';
import  { PublishComponent } from './publish/publish.component';
import { UnderReviewComponent } from './under-review/under-review.component';
import { UpForReviewComponent } from './up-for-review/up-for-review.component'
import { PublishingComponent } from './publishing/publishing.component';
import { AuthGuard } from '../../modules/private-modules/auth-gaurd/auth.gaurd';

// import { }

const routes: Routes = [
 
  {
    path: '', 
    data: {
      breadcrumb:'workspace'
    },

    children: [
      {
        path: '',
        data: {
          breadcrumb:''
        },
        component:ObservationUtilitiesComponent

      },
      {

        path: 'create',
        data: {
          breadcrumb:''
        },
        canActivate:[AuthGuard],
        // component: DashboardComponent
        component:ObservationUtilitiesComponent
      },
      {

        path: 'edit/:id',
        data: {
          breadcrumb:''
        },
        // component: DashboardComponent
        component:ObservationUtilitiesComponent
      },
      {

        path: 'review',
      //  canActivate: [AuthGuard],
        data: {
          breadcrumb:''
        },
        canActivate:[AuthGuard],
        // component: DashboardComponent
        component:ObservationReviewComponent
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

      },{
        path: 'draft',
        canActivate:[AuthGuard],
        component : DraftComponent
      },
      {
        path: 'publish',
        canActivate:[AuthGuard],
        component : PublishingComponent
      },
      {
        path: 'up-for-review',
        canActivate:[AuthGuard],
        component : UpForReviewComponent
      },
      {
        path: 'under-review',
        canActivate:[AuthGuard],
        component : UnderReviewComponent
      }

    ]
  },
 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }