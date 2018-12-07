import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
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
}

