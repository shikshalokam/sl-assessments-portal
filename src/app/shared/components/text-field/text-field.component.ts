import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {
  @Input()parentEditData;
  @Input()parentForm:FormGroup;
  
  constructor() { }

  ngOnInit() {
  }
  check(val){
    console.dir(val);
  }
}
