import { Component, OnInit } from '@angular/core';
import { ProgramsDashboardService } from '../core/services/programs-dashboard-service/programs-dashboard.service';
import { Router } from '@angular/router';

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


  constructor(private programService: ProgramsDashboardService,private router :Router) {

  }


  ngOnInit() {
    this.programService.getProgramList()
      .subscribe(data => {
        this.obj = data['result'];
        this.currentProgramId=this.obj[0]._id;
        this.currentAssesssment = this.obj[0].assessments;
        this.currentAssessmentId = this.currentAssesssment[0]._id;
      }, error => {

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
    this.router.navigate(['/assessments',this.currentProgramId,this.currentAssessmentId,]);
  }


}
