import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';

const routes: Routes = [
    {
        path: '', 
        data: {},
        children: [
            {
                path: 'add-question',
                component: AddQuestionComponent
            },
            {
                path: '',
                redirectTo: 'add-question'
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionRoutingModule { }
