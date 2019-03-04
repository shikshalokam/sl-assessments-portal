import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../configuration-service/configuration.service';
import {  MatSnackBar } from '@angular/material';
import { UtilityService } from 'shikshalokam';
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
  } 

  ngOnInit() {
    this.utility.loaderShow();
  }
  getCriteria(){
    this.configurationService.getCriteria().subscribe( data => {
      this.criterias = data['result']['criteria'];
      this.utility.loaderHide();
    },(error)=>{
      this.snackBar.open(error['message'], "Ok", { duration: 3000 });

    }
    )
  }
  
}
