/** 
* name : CriteriaListComponent.ts
* author : Rakesh
* created-date : 03-Dec-2019
* Description : To Maintain the criteria list.
*/
import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../configuration-service/configuration.service';
import { MatSnackBar } from '@angular/material';
import { UtilityService } from 'shikshalokam';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-criteria-list',
  templateUrl: './criteria-list.component.html',
  styleUrls: ['./criteria-list.component.scss']
})
//  To Maintain the criteria list.
export class CriteriaListComponent implements OnInit {
  criterias;
  programId;
  assessmentId;
  headings = 'headings.criteriaList';
  constructor(private route: ActivatedRoute, private snackBar: MatSnackBar, private utility: UtilityService, private configurationService: ConfigurationService) {
    this.getCriteria();
  }

  /**
   * Angular first displays the data-bound properties and sets the directive/component's input properties.
   *  Called once, after the first ngOnChanges().
   */
  ngOnInit() {
    this.utility.loaderShow();
  }

  /**
   * To get the Criteria list
   * @returns {JSON} - Response data.
   */
  getCriteria() {
    this.configurationService.getCriteria().subscribe(data => {
      this.criterias = data['result']['criteria'];
      this.utility.loaderHide();
    }, (error) => {
      this.snackBar.open(error['message'], "Ok", { duration: 3000 });

    }
    )
  }

}
