import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { ParentEditComponent} from '../../../modules/parent-interview/parent-edit/parent-edit.component'
@Component({

  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() parentEditData : any ;
  parentForm :FormGroup;
  constructor() { }

  ngOnInit() {
    this.parentEditData=JSON.stringify(this.parentEditData.result);
    this.parentEditData = JSON.parse(this.parentEditData);
    console.log(this.parentEditData)
    this.parentForm = this.toGroup(this.parentEditData) ;
  }

  toGroup(inputs) {
    let group: any = {};

    inputs.forEach(inputs => {
      group[inputs.field] = inputs.required ? new FormControl(inputs.value || '', Validators.required)
                                              : new FormControl(inputs.value || '');
    });

    return new FormGroup(group);
  }
  getData(){
    console.log(this.parentForm.controls.value);
  }
}
