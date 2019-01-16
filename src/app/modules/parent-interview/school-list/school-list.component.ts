import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ParentConfig } from '../parent-config';
import { ParentService } from '../../../core/services/parent-service/parent.service';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
import { UtilityService } from 'src/app/core/services/utility-service/utility.service';
import { environment } from 'src/environments/environment';

elementData: {

}
@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {
  displayedColumns: string[] = ['externalId', 'name', 'city', 'state', 'isParentInterviewCompleted'];
  dataSource;
  result;
  schoolList;
  error: any;
  flag ;
  hidePageSize: boolean =true;
  pageIndex: number = 0;
  pageSize: number = 1;
  pageEvent: PageEvent;
  length : number = 100;
  pageSizeOptions = [1,50,100];
  headings = 'headings.schoolListHeading';
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private parentService: ParentService, private utility: UtilityService) {
    this.callSchoolList();
  }
  callSchoolList() {
    this.parentService.getSchoolList()
      .subscribe(data => {
        this.schoolList = data.result;
        this.result = data.result.length;
        this.dataSource = new MatTableDataSource(data.result);
        console.log(data.result);
        // setTimeout(() =>{ 
        //   this.dataSource.paginator = this.paginator;
        // }
        // );
        this.utility.loaderHide()
      },
        (error) => {
          this.error = error;
          this.utility.loaderHide();
          ;
        }
      );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.utility.loaderShow();
    
  }
 
  seePaginatio(event){
   
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  onPaginateChange(event)
  {
    console.log(event)
    if((event.previousPageIndex > event.pageIndex) && !(event.pageIndex != 0))
    {
      if( (event.previousPageIndex - event.pageIndex) > 1 )
      {
        this.pageIndex = 0;
        console.log("firstpage");
        return;
        
      }
      this.pageIndex -=1;

    console.log(this.pageIndex ,"changed Manually")

    }
    if ( (event.previousPageIndex < event.pageIndex)  && (event.pageIndex != (event.length/event.pageSize)) )
    {

      if( (event.pageIndex - event.previousPageIndex) > 1 )
      {
        this.pageIndex = event.pageIndex;
        console.log("lastPage");
        return;
      }
      this.pageIndex +=1;

    console.log(this.pageIndex, "changed Manually")

    }

    if (event.pageSize != this.pageSize)
    {
      this.pageSize = event.pageSize;
    console.log(this.pageSize , "changed Manually")

    }
    // console.log(event)
    // this.pageIndex = 0;
    // this.pageSize = 0;
  }

}
