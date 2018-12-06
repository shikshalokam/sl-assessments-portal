import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { DropdownFieldComponent } from './components/dropdown-field/dropdown-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatRadioModule } from '@angular/material';
import { NumberFieldComponent } from './components/number-field/number-field.component';
import { TextareaFieldComponent } from './components/textarea-field/textarea-field.component';
import {MatSelectModule} from '@angular/material/select';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { ParentHeadingComponent } from './components/parent-heading/parent-heading.component';
import { CoreModule } from '../core';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component'
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { LoaderComponent } from './components/loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [DynamicFormComponent,DialogBoxComponent, TextFieldComponent, DropdownFieldComponent, NumberFieldComponent, TextareaFieldComponent, BreadcrumbComponent,ParentHeadingComponent, LoaderComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    RouterModule,
    CoreModule
  ],
  entryComponents: [DialogBoxComponent],
  exports : [DynamicFormComponent,BreadcrumbComponent,ParentHeadingComponent ,LoaderComponent]
})
export class SharedModule { }
