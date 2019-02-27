import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UtilityService } from 'shikshalokamcoremodule';
import { ParentService } from '../parent-service/parent.service';

@Component({
  selector: 'app-parent-information',
  templateUrl: './parent-information.component.html',
  styleUrls: ['./parent-information.component.scss']
})
export class ParentInformationComponent implements OnInit {
  @Input() parentId;
  data;
  selected;
  error;
  @Output() callResponse = new EventEmitter();
  constructor(private parentService: ParentService, private utility: UtilityService) {

  }

  ngOnInit() {
    this.showConfig();

  }

  showConfig() {
    this.parentService.getParentInfo(this.parentId)
      .subscribe(data => {
        this.data = data['result']
        // for (let i = 0; i < data.result.length; i++) {
          // if (data.result[i]['field'] == "callResponse") {
          //   this.selected = data.result[i]['value'];
          //   for (const option of data.result[i]['options']) {
          //     if(option.value === data.result[i]['value']){
          //       // this.sendcallResponse({value:data.result[i]['value'], label: option.label });

          //     }
          //   }
          // }
          // if(data.result[i]['field'] == "type") {
          //   const
          // }
        // }
        for (const field of data['result']) {
          if(field['field'] === 'type') {
            const newValue = []
            for (const option of field['options']) {
              if(field['value'].includes(option.value)) {
                newValue.push(option.label)
              }
            }
            field['newLabel'] = newValue
          }
        }
        this.selected = data['result'];
      });
  }

  sendcallResponse(callStatus) {
    for (const field of this.data) {
      if(field.field === "callResponse") {
        field.value = this.selected;
      }
    }
    const obj = JSON.stringify({"obj":this.data, "callStatus":callStatus });
    // this.callResponse.emit(obj);
  }

  getParentInfo(): any {
    const obj = {};
    for (const fieldData of this.data) {
      obj[fieldData.field] = fieldData.value;
    }
    return obj;
  }
}
