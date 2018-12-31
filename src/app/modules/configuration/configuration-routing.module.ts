import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth-gaurd/auth.gaurd';
import { ConfigurationComponent } from './configuration.component';
import { CriteriaComponent } from './criteria/criteria.component'
const routes: Routes = [
  {
    path: 'configuration', component: ConfigurationComponent,
    // canActivate: [AuthGuard],
    data: {},
    children: [
        {
            path: 'criteria',
            component : CriteriaComponent
        },
      {
        path: '**',
        redirectTo: 'criteria'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'configuration'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
