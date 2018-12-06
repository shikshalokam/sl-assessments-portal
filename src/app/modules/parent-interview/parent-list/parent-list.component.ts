import { Component, OnInit, AfterContentChecked, OnChanges, AfterContentInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api-service';
import { environment } from 'src/environments/environment.prod';
import { ParentConfig } from '../parent-config';
import {MatTableDataSource} from '@angular/material';
import { TranslateService } from 'src/app/core';
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
  headings = "headings.parentListHeading";
  flag : boolean = false;
  constructor( private route :ActivatedRoute,private apiFetch :ApiService,private showLoader : UtilityService ) { 
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
  this.showLoader.show();
  this.apiFetch.getParentList(this.schoolId)
      .subscribe(data => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data.result)
        this.showLoader.hide();

      });
}
setFlag(flag :boolean){
  if(flag){
    this.flag = flag;
    console.log("eventCatch");
    this.apiFetch.getAssessmentQuestions(this.schoolId).subscribe(successData => {
      this.submissionId =  successData['result'].assessments[0]['submissionId'];
      console.log(this.submissionId);
      this.apiFetch.postSubmission(this.submissionId)
      .subscribe(successData =>{
        console.log(successData);
      },
        errorData=>{});
    },errorData =>{}
    );

  }

}
}
