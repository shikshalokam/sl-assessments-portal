import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { generate } from 'rxjs';

@Component({
  selector: 'app-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  styleUrls: ['./dropdown-field.component.scss']
})
export class DropdownFieldComponent implements OnInit {
@Input()genericData;
@Input()genericForm:FormGroup;
@Input()genericEdit:boolean;

  constructor() { }

  ngOnInit() {
  }

}
