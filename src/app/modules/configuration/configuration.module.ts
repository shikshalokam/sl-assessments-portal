import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule,MatTabsModule,MatRadioModule,MatCardModule, MatDialogModule, MatButtonModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { SharedModule ,DynamicFormComponent ,CoreModule } from 'shikshalokam';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DesignerWorspaceComponent } from './designer-worspace/designer-worspace.component';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatButtonModule} from '@angular/material/button';
import { DeleteConfirmComponent } from './designer-worspace/components/delete-confirm/delete-confirm.component';
import { ObservationUtilitiesComponent } from './observation-utilities/observation-utilities.component';

// import {  } from '@angular/material';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';

import { FormioModule } from 'angular-formio';
// import { NgDragDropModule } from 'ng-drag-drop';
import { DragAndDropModule } from 'angular-draggable-droppable';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

@NgModule({
  declarations: [ConfigurationComponent,
    DashboardComponent,
    DesignerWorspaceComponent,
    DeleteConfirmComponent,
    ObservationUtilitiesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    MatTabsModule,
    MatRadioModule,
    MatCardModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
    MatSelectModule,
    ConfigurationRoutingModule,
    MatDialogModule,
    MatButtonModule,
    AngularMultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FormioModule,
    // NgDragDropModule.forRoot(),
    DragAndDropModule
  ],

  providers: [DynamicFormComponent],
  entryComponents: [DeleteConfirmComponent]
})
export class ConfigurationModule { }
