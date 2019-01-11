import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth-gaurd/auth.gaurd';
import { CriteriaListComponent } from './criteria-list/criteria-list.component';
import { AddCriteriaBoxComponent } from './add-criteria-modal/add-criteria-modal.component';

const routes: Routes = [
    {
        path: '', 
        data: {},
        children: [
            {
                path: 'criteria-list',
                component: CriteriaListComponent
            },
            {
                path: 'add-new-criteria',
                component: AddCriteriaBoxComponent
            },
            {
                path: '',
                redirectTo: 'criteria-list'
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CriteriaRoutingModule { }
