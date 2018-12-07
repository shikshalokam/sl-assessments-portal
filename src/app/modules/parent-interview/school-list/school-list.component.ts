import { Component, OnInit } from '@angular/core';
import { ParentConfig } from '../parent-config';
import { ApiService } from '../../../core/services/api-service';
import { environment } from '../../../../environments/environment.prod';
import {MatTableDataSource} from '@angular/material';
import { UtilityService } from 'src/app/core/services/utility-service';
@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit{
  displayedColumns: string[] = ['name', 'city', 'state', 'externalId'];
  dataSource;
  error: any;
  headings = 'headings.schoolListHeading';
  constructor(private apiFetch :ApiService ,private showLoader : UtilityService ) {
    this.showConfig();
  }
  showConfig() {
  this.apiFetch.getSchoolList()
      .subscribe(data => {
              this.dataSource = new MatTableDataSource(data.result)
              this.showLoader.loaderHide();
      },
      (error) => {
        this.error = error;
        ;}
      );
}
applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() { 
    this.showLoader.loaderShow(); 
  }
  
  

  
}
