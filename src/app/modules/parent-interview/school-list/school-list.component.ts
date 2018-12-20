import { Component, OnInit, ViewChild } from '@angular/core';
import { ParentConfig } from '../parent-config';
import { ParentService } from '../../../core/services/parent-service/parent.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { UtilityService } from 'src/app/core/services/utility-service/utility.service';
import { environment } from 'src/environments/environment';

elementData:{
  
}
@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {
  displayedColumns: string[] = ['externalId','name', 'city', 'state','isParentInterviewCompleted'];
  dataSource;
  result;
  data;
  error: any;
  headings = 'headings.schoolListHeading';
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private parentService: ParentService, private utility: UtilityService) {
    this.showConfig();
  }
  showConfig() {
    this.parentService.getSchoolList()
      .subscribe(data => {
        this.data = data.result;
        this.result = data.result.length;
        this.dataSource = new MatTableDataSource(data.result);
        console.log(data.result);
        setTimeout(() => this.dataSource.paginator = this.paginator);
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


  objectKeys(obj) {
    return Object.keys(obj);
  }


}
