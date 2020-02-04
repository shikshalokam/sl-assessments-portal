import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriteriaComponent } from './criteria.component';
import { CriteriaListComponent } from './criteria-list/criteria-list.component';
import { AddCriteriaBoxComponent } from './add-criteria-modal/add-criteria-modal.component';
import { CriteriaRoutingModule } from './criteria-routing.module';
import { SharedModule } from 'shikshalokam';
import { CoreModule } from 'shikshalokam';
import { MatCardModule, MatDialogModule, MatButtonModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";

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
    MatSelectModule,
    NgxSpinnerModule

  ],
  entryComponents: [AddCriteriaBoxComponent],
})
export class CriteriaModule { }
