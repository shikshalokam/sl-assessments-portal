import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from 'events';
@Component({

  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() genericData : any ;
  @Input()genericForm :FormGroup;
  @Input()genericEdit:boolean;

  

  constructor() { 
    
    
  }

  ngOnInit() {
    console.log(this.genericForm);
    console.log(this.genericData);

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
