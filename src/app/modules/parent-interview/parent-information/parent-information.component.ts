import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api-service';

@Component({
  selector: 'app-parent-information',
  templateUrl: './parent-information.component.html',
  styleUrls: ['./parent-information.component.scss']
})
export class ParentInformationComponent implements OnInit {
  @Input() parentId;

  data;
  selected;
  @Output() callResponse = new EventEmitter<string>();
  constructor(private apiFetch: ApiService) {
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
        for (let i = 0; i < data.result.length; i++) {
          if (data.result[i]['field'] == "callResponse") {
            this.selected = data.result[i]['value'];
            this.sendcallResponse(data.result);
          }
        }
      });
  }

  sendcallResponse(callStatus) {
    console.log(this.selected);
    for (const field of this.data) {
      if(field.field === "callResponse") {
        field.value = this.selected;
      }
    }
    this.callResponse.emit(this.data);
  }
}
