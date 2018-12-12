import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor(private location :Location,private spinner: NgxSpinnerService) { }

  onBack(){
    this.location.back();
  }
  loaderShow(){
    this.spinner.show();
  }
  loaderHide(){
    this.spinner.hide();
  }
  toGroup(inputs) {
    let group: any = {};

    inputs.forEach(inputs => {
      group[inputs.field] = inputs.required ? new FormControl(inputs.value || '', Validators.required)
                                              : new FormControl(inputs.value || '');
    });
    return new FormGroup(group);
  }
}

