import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParentService } from 'src/app/core/services/parent-service/parent.service';
import {MatTableDataSource, MatPaginator, MatSnackBar} from '@angular/material';
import { UtilityService } from 'src/app/core/services/utility-service/utility.service';
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
  parentList;
  result;
  headings = "headings.parentListHeading";
  schoolName ;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  constructor( private route :ActivatedRoute,private snackBar : MatSnackBar,private parentService :ParentService,private utility : UtilityService ) { 
    this.route.params.subscribe(params => {
      this.schoolId = params["id"];
      this.schoolName =params["name"];

  });
  }
  schoolId :any;
  submissionId:any;
  isProdEnvironment:string;
  atleastOneComplete : boolean;
  displayedColumns: string[] = ['studentName','name', 'phone1','gender','address','grade','programId','type'];
 
  ngOnInit() {
    this.utility.loaderShow();
    this.breadcrumbRoute = [ 
      {
        label : "Parent List",
        url : "/parent/parent-list/",
        id : this.schoolId
      },
  ];
  this.showConfig();

  
 }
 applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  
}
 showConfig() {
  this.parentService.getParentList(this.schoolId )
      .subscribe(data => {
        this.parentList = data.result;
        data.result.forEach(element=>{
          if(element['callResponse'] == 'R7')
          {
            this.atleastOneComplete = true;
          }
        })
        this.result=data.result.length;
        this.dataSource = new MatTableDataSource(data.result);
        console.log(data.result);
        setTimeout(() => this.dataSource.paginator = this.paginator);
        this.utility.loaderHide();
      },
      (error)=>{
        this.error = error;
        this.utility.loaderHide();
      });
}
parentInterviewSubmit(flag :boolean){
  if(flag){
    this.parentService.getAssessmentQuestions(this.schoolId).subscribe(successData => {
      this.submissionId =  successData['result'].assessments[0]['submissionId'];
      console.log(this.submissionId);
      this.parentService.parentInterviewSubmission(this.submissionId)
      .subscribe(successData =>{
        console.log(successData);
        this.snackBar.open(successData['message'], "Ok", {duration: 9000});
        this.utility.onBack();
      },
      (error)=>{
        this.snackBar.open(error['message'], "Ok", {duration: 9000});
      });
    },(error)=>{
      this.snackBar.open(error['message'], "Ok", {duration: 9000});
      this.error = error;
    }
    );

  }

}
objectKeys(obj) {
  return Object.keys(obj);
}

}
