import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api-service';

@Component({
  selector: 'app-parent-information',
  templateUrl: './parent-information.component.html',
  styleUrls: ['./parent-information.component.scss']
})
export class ParentInformationComponent implements OnInit {
  @Input()parentId;
  data;
  selected;
  @Output()callResponse = new EventEmitter<string>();
  constructor( private apiFetch :ApiService ) { 
  }

  ngOnInit() {
  this.showConfig();

  }

  showConfig() {
    this.apiFetch.getParentInfo(this.parentId)
      .subscribe(data => {
        console.log(data.result);
        console.log("result");

        this.data = data.result
        for(let i=0;i<data.result.length;i++){
          if( data.result[i]['field'] == "callResponse" )
          {
            this.selected = data.result[i]['value'] ;
          }
        }
        });
        console.log(this.selected);
  }
  
  sendcallResponse(){
    console.log(this.selected);
     this.callResponse.emit(this.selected);
  }
}
