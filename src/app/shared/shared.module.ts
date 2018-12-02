import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { RadioFieldComponent } from './components/radio-field/radio-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatRadioModule } from '@angular/material';
import { NumberFieldComponent } from './components/number-field/number-field.component';
import { TextareaFieldComponent } from './components/textarea-field/textarea-field.component';

@NgModule({
  declarations: [DynamicFormComponent, TextFieldComponent, RadioFieldComponent, NumberFieldComponent, TextareaFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule
  ],
  exports : [DynamicFormComponent]
})
export class SharedModule { }
