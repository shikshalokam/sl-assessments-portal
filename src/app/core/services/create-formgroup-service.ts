import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable()
export class CreateFormGroup {
  
    toGroup(inputs) {
    let group: any = {};

    inputs.forEach(inputs => {
      group[inputs.field] = inputs.required ? new FormControl(inputs.value || '', Validators.required)
                                              : new FormControl(inputs.value || '');
    });

    return new FormGroup(group);
  }
}