import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriteriaComponent } from './criteria.component';
import { CriteriaListComponent } from './criteria-list/criteria-list.component';
import { AddCriteriaBoxComponent } from './add-criteria-modal/add-criteria-modal.component';
import { CriteriaRoutingModule } from './criteria-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core';
import { MatCardModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { DynamicFormComponent } from 'src/app/shared/components/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [CriteriaComponent,CriteriaListComponent,AddCriteriaBoxComponent],
  imports: [
    CommonModule,
    // CoreModule,
    // NgModule,
    CriteriaRoutingModule,
    // SharedModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
  ],
  entryComponents: [AddCriteriaBoxComponent],

})
export class CriteriaModule { }
