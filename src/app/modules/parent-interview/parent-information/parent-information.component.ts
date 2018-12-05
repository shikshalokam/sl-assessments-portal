import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api-service';

@Component({
  selector: 'app-parent-information',
  templateUrl: './parent-information.component.html',
  styleUrls: ['./parent-information.component.scss']
})
export class ParentInformationComponent implements OnInit {
  parentId;
  data;
  selected;
  @Output()callResponse = new EventEmitter<string>();
  constructor( private route :ActivatedRoute,private apiFetch :ApiService ) { 
    this.route.params.subscribe(params => {
      this.parentId = params["id"];
  });
  this.showConfig();
  }

  ngOnInit() {
  }

  showConfig() {
    this.apiFetch.getParentInfo(this.parentId)
      .subscribe(data => {
        console.log(data.result);
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
