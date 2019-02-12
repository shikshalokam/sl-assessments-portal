import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramsDashboardService } from 'src/app/core/services/programs-dashboard-service/programs-dashboard.service';
import { UtilityService } from 'src/app/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-programs-dashboard',
  templateUrl: './programs-dashboard.component.html',
  styleUrls: ['./programs-dashboard.component.scss']
})
export class ProgramsDashboardComponent implements OnInit {

  obj;
  currentAssesssment: any;
  currentAssessmentId;
  currentProgramId;


  constructor(private utilityService :UtilityService,private snackBar :MatSnackBar,private programService: ProgramsDashboardService,private router :Router) {

  }


  ngOnInit() {
    this.utilityService.loaderShow();
    this.programService.getProgramList()
      .subscribe(data => {
        this.obj = data['result'];
        this.currentProgramId=this.obj[0]._id;
        this.currentAssesssment = this.obj[0].assessments;
        this.currentAssessmentId = this.currentAssesssment[0]._id;
        this.utilityService.loaderHide();
      }, error => {
      this.snackBar.open(error['message'], "Ok", {duration: 9000});

      })
  }

  setCurrentAssessment(assessment) {
    this.currentProgramId= assessment._id;
    this.currentAssesssment = assessment.assessments;
  }

  getProgramList() {

  }


  programClick(assessment){
    console.log(assessment)
    this.currentAssessmentId=assessment._id;
    console.log(this.currentAssessmentId,this.currentProgramId)
    this.router.navigate(['/assessments'],
    {
      queryParams:{
        programId:this.currentProgramId,
        assessmentId:this.currentAssessmentId,
      },
       queryParamsHandling: 'merge' 
    }
    );
  }


}
