import { Component, OnInit } from '@angular/core';
import { ParentConfig } from '../parent-config';
import { ApiFetch } from '../../../core/services/api-fetch-service';
import { environment } from '../../../../environments/environment.prod';
@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit{
  displayedColumns: string[] = ['name', '_id', 'externalId'];
  dataSource;
  constructor(private apiFetch :ApiFetch ) {
  this.showConfig();
  }
  showConfig() {
  this.apiFetch.getConfig(environment.apibaseurl,ParentConfig.schoolListFind)
      .subscribe(data => {
        console.log(JSON.stringify(data)) 
        this.dataSource = data.result;
      });
}
  ngOnInit() { }
  
}