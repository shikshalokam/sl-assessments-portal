import { Component, OnInit } from '@angular/core';
import { ProgramsDashboardService } from '../core/services/programs-dashboard-service/programs-dashboard.service';

@Component({
  selector: 'app-programs-dashboard',
  templateUrl: './programs-dashboard.component.html',
  styleUrls: ['./programs-dashboard.component.scss']
})
export class ProgramsDashboardComponent implements OnInit {

   obj;
   currentAssesssment:  any;

  
  
  constructor(private programService: ProgramsDashboardService ){

  }

  
  ngOnInit() {
    this.programService.getProgramList()
    .subscribe(data=>{
      this.obj =data['result'];
      this.currentAssesssment = this.obj[0].assessments;
    }, error => {
    })
  }

  setCurrentAssessment(assessment) {
    this.currentAssesssment = assessment;
  }

  getProgramList(){
  }
  

 

  
}


