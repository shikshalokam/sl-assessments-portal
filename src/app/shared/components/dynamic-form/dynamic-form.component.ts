import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({

  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() genericData : any ;
  @Input()genericForm :FormGroup;
  @Input()genericEdit:boolean;
  @Output() editnewquestion = new EventEmitter();
  

  constructor() { 
    
    
  }

  ngOnInit() {
    console.log(this.genericForm);
    console.log(this.genericData);
  }

  changeResponseType(event , index){
    console.log(event, index);
    this.genericData[index].value=event;
    
   console.log( this.genericData[index]);

  }
  editquestion(edit){
    console.log("question added in dynamic form ");
    this.editnewquestion.emit(edit);
  }
}
