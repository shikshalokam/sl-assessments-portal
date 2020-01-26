import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatTooltipModule, MatTabsModule, MatRadioModule, MatCardModule,
    MatDialogModule, MatButtonModule, MatStepperModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatTableModule, MatExpansionModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSortModule
} from '@angular/material';
// import { SharedModule, DynamicFormComponent, CoreModule } from 'shikshalokam';




import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';

// import { FormioModule } from 'angular-formio';
// import { NgDragDropModule } from 'ng-drag-drop';
import { DragAndDropModule } from 'angular-draggable-droppable';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TagInputModule } from 'ngx-chips';

// import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

import { DynamicFormBuilderModule1, DynamicFormBuilderService } from 'dynamic-form-builder';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        // SharedModule,
        // CoreModule,
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
        MatDialogModule,
        MatButtonModule,
        AngularMultiSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        MatSortModule, // here is the problem with is module
        // FormioModule,
        // NgDragDropModule.forRoot(),
        DragAndDropModule,
        TagInputModule,
        MatPaginatorModule,
        DynamicFormBuilderModule1,
        MatToolbarModule,
        NgxSpinnerModule,
    ],
    // exports:[MatPaginatorModule],

    providers: [
        DynamicFormBuilderService,
        MatDatepickerModule],
    entryComponents: []
})
export class CommonChildModule { }
