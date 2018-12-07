import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api-service';
import { UtilityService } from 'src/app/core/services/utility-service';

@Component({
  selector: 'app-parent-information',
  templateUrl: './parent-information.component.html',
  styleUrls: ['./parent-information.component.scss']
})
export class ParentInformationComponent implements OnInit {
  @Input()parentId;
  data;
  selected;
  error;
  @Output()callResponse = new EventEmitter<string>();
  constructor( private apiFetch :ApiService , private utility : UtilityService ) { 
  }

  ngOnInit() {
  this.showConfig();

  }

  showConfig() {
  this.utility.loaderShow();
    this.apiFetch.getParentInfo(this.parentId)
      .subscribe(data => {
        console.log(data.result);
        this.utility.loaderHide();
        console.log("result");

        this.data = data.result
        for(let i=0;i<data.result.length;i++){
          if( data.result[i]['field'] == "callResponse" )
          {
            this.selected = data.result[i]['value'] ;
          }
        }
        },
        (error)=>{
          this.error = error;
        }
        );
        console.log(this.selected);
  }
  
  sendcallResponse(){
    console.log(this.selected);
     this.callResponse.emit(this.selected);
  }
}
