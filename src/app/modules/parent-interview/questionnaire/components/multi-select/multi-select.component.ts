import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  @Input() data: any;
  @Output() valueUpdated = new EventEmitter();

  updated() {
    this.valueUpdated.emit();
  }
  constructor() { }

  ngOnInit() {
    this.data.value = this.data.value ? this.data.value : [];
  }

  updateModelValue(val) {
    // console.log(val);
    if (this.data.value.indexOf(val) > -1) {
      let index = this.data.value.indexOf(val);
      this.data.value.splice(index, 1)
    } else {
      this.data.value.push(val)
    }
    // console.log(this.data.value)
    this.updated();
  }

}
