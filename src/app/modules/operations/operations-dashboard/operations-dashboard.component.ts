import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operations-dashboard',
  templateUrl: './operations-dashboard.component.html',
  styleUrls: ['./operations-dashboard.component.scss']
})
export class OperationsDashboardComponent implements OnInit {
   headings= 'headings.dashboards'
   obj;

  dashboards=[];

  constructor() { 
    this.obj={
      dashboards:[
        {
          icons:"done",
          tooltip:"headings.operationDashboardUpload",
          anchorLink:"/assessments/operations/upload-csv"
        },
        {
          icons:"done",
          tooltip:"headings.schoolListHeading",
          anchorLink: "/assessments/operations/view-schools"
        }
      ]
    }
  }

 

  ngOnInit() {
    this.dashboards= this.obj.dashboards;
    console.log(this.dashboards, "dashboard");
  }

  
}
