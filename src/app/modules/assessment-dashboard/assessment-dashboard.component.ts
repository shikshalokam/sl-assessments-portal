import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assessment-dashboard',
  templateUrl: './assessment-dashboard.component.html',
  styleUrls: ['./assessment-dashboard.component.scss']
})
export class AssessmentDashboardComponent implements OnInit {
  programId;
  assessmentId;
  links ;
  constructor(private route : ActivatedRoute) {
   
      this.route.queryParams.subscribe(params => {
        this.programId= params['programId'];
        this.assessmentId = params['assessmentId']
        this.links = [  
          { 
            linkHeading : "headings.features",
            options:[
              {
                value : "headings.parentInterview",
                link :{
                  programId:this.programId,
                  assessmentId :this.assessmentId,
                  anchorLink : "parent"
                }
              },
              {
                value :"headings.reports",
                link :{
                  programId:this.programId,
                  assessmentId :this.assessmentId,
                  anchorLink:"report"
                }
              },
              {
                value :"headings.configurations",
                link :{
                  programId:this.programId,
                  assessmentId :this.assessmentId,
                  anchorLink:"configuration"
                }
              },
              {
                value:"headings.operations",
                link :{
                  programId:this.programId,
                  assessmentId :this.assessmentId,
                anchorLink:"operations"
                }
              }
            ]
            }
        ] ;
      })
    
   }

  ngOnInit() {

  }
   

}
