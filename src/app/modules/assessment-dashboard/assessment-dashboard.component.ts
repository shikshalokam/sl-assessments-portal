import { Component, OnInit } from '@angular/core';
import { anchorDef } from '@angular/core/src/view';
import { ActivatedRoute } from '@angular/router';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';
import { map } from 'rxjs/operators';
// export  var ComponentAssessmentId = {
//   programId :'',
//   assessmentId : ''
//   }
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
              // {
              //   value : "headings.parentInterview",
              //   anchorLink : "/assessments/parent"
              // },
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
