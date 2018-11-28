import { Component, OnInit } from '@angular/core';
import { ParentConfig } from '../parent-config';
import { ParentApiFetch } from '../../../core/services/parent-api-fetch-service';
import { environment } from '../../../../environments/environment.prod';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit{
  displayedColumns: string[] = ['name', '_id', 'externalId'];

  dataSource;
  constructor(private apiFetch :ParentApiFetch ) {
  this.showConfig();
  }
  showConfig() {
  this.apiFetch.getConfig(environment.apibaseurl,ParentConfig.schoolListFind)
      .subscribe(data => {
  this.dataSource = new MatTableDataSource(data.result)
      });
}
applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() { }
  
  

  
}
