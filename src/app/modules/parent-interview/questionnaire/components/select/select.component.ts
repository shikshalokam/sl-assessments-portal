import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() data: any;
  @Output() valueUpdated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updated() {
    this.valueUpdated.emit();
  }




}
