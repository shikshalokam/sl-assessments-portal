import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api-service';
import {MatTableDataSource} from '@angular/material';
import { UtilityService } from 'src/app/core/services/utility-service';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss']
})
export class ParentListComponent implements OnInit{
  dataSource;
  errorMessage;
  breadcrumbRoute;
  error;
  headings = "headings.parentListHeading";
  constructor( private route :ActivatedRoute,private apiFetch :ApiService,private utility : UtilityService ) { 
    this.route.params.subscribe(params => {
      this.schoolId = params["id"];
  });
  }
  schoolId :any;
  submissionId:any;
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
  this.utility.loaderShow();
  this.apiFetch.getParentList(this.schoolId )
      .subscribe(data => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data.result)
        this.utility.loaderHide();

      },
      (error)=>{
        this.error = error;
      });
}
parentInterviewSubmit(flag :boolean){
  if(flag){
    this.apiFetch.getAssessmentQuestions(this.schoolId).subscribe(successData => {
      this.submissionId =  successData['result'].assessments[0]['submissionId'];
      this.apiFetch.parentInterviewSubmission(this.submissionId)
      .subscribe(successData =>{
        console.log(successData);
      },
      (error)=>{
        this.error = error;
      });
    },(error)=>{
      this.error = error;
    }
    );

  }

}

}
