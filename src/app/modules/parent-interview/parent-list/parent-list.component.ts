import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api-service';
import { environment } from 'src/environments/environment.prod';
import { ParentConfig } from '../parent-config';
import {MatTableDataSource} from '@angular/material';
import { TranslateService } from 'src/app/core';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss']
})
export class ParentListComponent implements OnInit {
  dataSource;
  errorMessage;
  breadcrumbRoute;
  constructor( private route :ActivatedRoute,private apiFetch :ApiService ) { 
    this.route.params.subscribe(params => {
      this.schoolId = params["id"];
  });
  }
  schoolId :any;
  isProdEnvironment:string;
  displayedColumns: string[] = ['studentName','name', 'phone1','gender','address','grade'];
 
  ngOnInit() {
    this.breadcrumbRoute = [ 
      {
        label : "Parent List",
        url : "/parent/parent-list/",
        id : this.schoolId
      }
  ];
  this.showConfig();

 }
 applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  
}
 showConfig() {
  this.apiFetch.getParentList(this.schoolId)
      .subscribe(data => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data.result)
      });
}

}
