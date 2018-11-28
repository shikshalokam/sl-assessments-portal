import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParentApiFetch } from 'src/app/core/services/parent-api-fetch-service';
import { environment } from 'src/environments/environment.prod';
import { ParentConfig } from '../parent-config';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss']
})
export class ParentListComponent implements OnInit {
  dataSource;
  constructor( private route :ActivatedRoute,private apiFetch :ParentApiFetch) { 
  }
  schoolId :any;
  isProdEnvironment:string;
  sendUrl;
  displayedColumns: string[] = ['studentName','name', 'phone1','gender','address','grade'];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.schoolId = params["id"];
      this.sendUrl = ParentConfig.parentListFind + this.schoolId
  });
  console.log(this.sendUrl);
  this.showConfig();

 }
 applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
 showConfig() {
  this.apiFetch.getConfig(environment.apibaseurl,this.sendUrl)
      .subscribe(data => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data.result)
      });
}

}
