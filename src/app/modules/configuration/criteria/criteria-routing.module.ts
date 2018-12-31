import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth-gaurd/auth.gaurd';
import { CriteriaComponent } from './criteria.component';
import { CriteriaListComponent } from './criteria-list/criteria-list.component';

const routes: Routes = [
    {
        path: 'criteria', 
        data: {},
        children: [
            {
                path: 'criteria-list',
                component: CriteriaListComponent
            },
            {
                path: '**',
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
