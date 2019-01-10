import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array-field',
  templateUrl: './form-array-field.component.html',
  styleUrls: ['./form-array-field.component.scss']
})
export class FormArrayFieldComponent implements OnInit {
  @Input()genericData;
  @Input()genericForm:FormGroup;
  @Input()genericEdit:boolean;
  
  constructor() { }

  ngOnInit() {
    console.log(this.genericData)
  }

}
