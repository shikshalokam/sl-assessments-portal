import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-field',
  templateUrl: './radio-field.component.html',
  styleUrls: ['./radio-field.component.scss']
})
export class RadioFieldComponent implements OnInit {
@Input()parentEditData;
@Input()parentForm:FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
