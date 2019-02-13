import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/core/services/configuration-service/configuration.service';
import {  MatSnackBar } from '@angular/material';
import { UtilityService } from 'src/app/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-criteria-list',
  templateUrl: './criteria-list.component.html',
  styleUrls: ['./criteria-list.component.scss']
})
export class CriteriaListComponent implements OnInit {
  criterias;
  programId;
  assessmentId;
  headings ='headings.criteriaList';
  constructor(private route :ActivatedRoute,private snackBar :MatSnackBar,private utility :UtilityService,private configurationService : ConfigurationService) {
    this.getCriteria();

  
    this.route.parent.queryParams.subscribe(params => {
      
      this.programId = params['programId'];
      this.assessmentId = params['assessmentId']
    });
  } 

  ngOnInit() {
    this.utility.loaderShow();
  }
  getCriteria(){
    this.configurationService.getCriteria().subscribe( data => {
      this.criterias = data['result']['criteria'];
      this.utility.loaderHide();
    },(error)=>{
      this.snackBar.open(error['message'], "Ok", { duration: 9000 });

    }
    )
  }
  
}
