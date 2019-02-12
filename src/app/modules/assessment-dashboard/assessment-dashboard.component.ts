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
    // this.route.params.subscribe(params => {
    //   this.programId = params["programId"];
    //   this.assessmentId = params["assessmentId"];
    //   console.log(params)
      
    //   // ComponentAssessmentId.assessmentId =this.assessmentId;
    //   // ComponentAssessmentId.programId =this.programId;
    //   // console.log(ComponentAssessmentId.programId )
    // });
    // route.snapshot.queryParamMap.get("programId")
    //   console.log( route.snapshot.queryParamMap.get("programId"))
    
      this.route.queryParams.subscribe(params => {
        console.log(params);
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
      
                  // anchorLink: "/assessments/:programId/:assessmentId/report"
                }
              },
              {
                value :"headings.configurations",
                link :{
                  programId:this.programId,
                  assessmentId :this.assessmentId,
                // anchorLink :"/assessments/:programId/:assessmentId/configuration"
                  anchorLink:"configuration"
                }
              },
              {
                value:"headings.operations",
                link :{
                  programId:this.programId,
                  assessmentId :this.assessmentId,
                anchorLink:"operations"
      
                // anchorLink:"/assessments/:programId/:assessmentId/operations"
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
