import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriteriaComponent } from './criteria.component';
import { CriteriaListComponent } from './criteria-list/criteria-list.component';
import { AddCriteriaBoxComponent } from './add-criteria-modal/add-criteria-modal.component';
import { CriteriaRoutingModule } from './criteria-routing.module';
import { SharedModule } from 'shikshalokamsharedmodule';
import { CoreModule } from 'shikshalokamcoremodule';
import { MatCardModule, MatDialogModule, MatButtonModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CriteriaComponent, CriteriaListComponent, AddCriteriaBoxComponent],
  imports: [
    CommonModule,
    CoreModule,
    CriteriaRoutingModule,
    SharedModule,
    MatCardModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
    MatSelectModule

  ],
  entryComponents: [AddCriteriaBoxComponent],
})
export class CriteriaModule { }
