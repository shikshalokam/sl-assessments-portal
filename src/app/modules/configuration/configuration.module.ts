import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule,MatTabsModule,MatRadioModule,MatCardModule,
   MatDialogModule, MatButtonModule, MatStepperModule, MatFormFieldModule, 
   MatInputModule, MatSelectModule,MatTableModule,MatExpansionModule,
   MatPaginatorModule,
   MatDatepickerModule,
   MatNativeDateModule
  } from '@angular/material';
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

// import { FormioModule } from 'angular-formio';
// import { NgDragDropModule } from 'ng-drag-drop';
import { DragAndDropModule } from 'angular-draggable-droppable';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { ObservationReviewComponent } from './observation-review/observation-review.component';
import { TagInputModule } from 'ngx-chips';
import { DraftComponent } from './draft/draft.component';
import { UnderReviewComponent } from './under-review/under-review.component';
import { PublishComponent } from './publish/publish.component';
import { UpForReviewComponent } from './up-for-review/up-for-review.component';
// import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

import  { DynamicFormBuilderModule1,DynamicFormBuilderService } from 'dynamic-form-builder';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ConfigurationComponent,
    DashboardComponent,
    DesignerWorspaceComponent,
    DeleteConfirmComponent,
    ObservationUtilitiesComponent,
    ObservationReviewComponent,
    DraftComponent,
    UnderReviewComponent,
    PublishComponent,
    UpForReviewComponent,
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
    MatTableModule,
    MatStepperModule,
    MatExpansionModule,
    MatSelectModule,
    MatButtonModule,
    ConfigurationRoutingModule,
    MatDialogModule,
    MatButtonModule,
    AngularMultiSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    // FormioModule,
    // NgDragDropModule.forRoot(),
    DragAndDropModule,
    TagInputModule,
    MatPaginatorModule,
    DynamicFormBuilderModule1
  ],
  // exports:[MatPaginatorModule],

  providers: [DynamicFormComponent,
    DynamicFormBuilderService,
    MatDatepickerModule],
  entryComponents: [DeleteConfirmComponent]
})
export class ConfigurationModule { }
