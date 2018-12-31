import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/core/services/configuration-service/configuration.service';
import { MatDialog } from '@angular/material';
import { AddCriteriaBoxComponent } from '../criteria/add-criteria-modal/add-criteria-modal.component';
import { UtilityService } from 'src/app/core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {
  criterias;
  constructor(private utility :UtilityService,private configurationService : ConfigurationService,public dialog: MatDialog) {
    this.getCriteria();
  } 

  ngOnInit() {
    this.utility.loaderShow();
  }
  getCriteria(){
    this.configurationService.getCriteria().subscribe( data => {
      this.criterias = data['result']['criteria'];
      console.log(this.criterias);
      this.utility.loaderHide();
    }
    )
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddCriteriaBoxComponent, {
      width: '950px',
      height:'600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getCriteria();
    });
  }
}
