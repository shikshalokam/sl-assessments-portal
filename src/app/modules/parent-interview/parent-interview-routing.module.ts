import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentInterviewComponent } from './parent-interview.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentEditComponent } from './parent-edit/parent-edit.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ParentInformationComponent } from './parent-information/parent-information.component';
const routes: Routes = [
  {
    path: '', 
     component: ParentInterviewComponent,
    data: {
      breadcrumb : 'Parent Interview'
    },
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'school-list',
        component: SchoolListComponent,
        data: {
          breadcrumb : 'headings.schoolListHeading'
        },
       
      },
      {
        path : 'parent-list/:name/:id',
        component : ParentListComponent,
        data: {
          breadcrumb : 'headings.parentListHeading'
        },
       
      },
      {
        path : 'parent-edit/:name/:id',
        component : ParentEditComponent,
        data: {
          breadcrumb : 'headings.parentInfoHeading'
        },
       
      },
      {
        path: 'survey/:schoolName/:schoolId/:parentId',
        component: QuestionnaireComponent,
        data: {
          breadcrumb : 'Parent Survey'
        },
      },
      {
        path : 'parent-information/:id',
        component : ParentInformationComponent,
        data: {
          breadcrumb : 'Parent Information'
        },
      },
      {
        path: '**',
        redirectTo: 'school-list'
      }
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: 'parent'
  // }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentInterviewRoutingModule { }
