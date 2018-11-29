import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.scss']
})
export class NumberFieldComponent implements OnInit {
  @Input()parentEditData;
  @Input()parentForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
