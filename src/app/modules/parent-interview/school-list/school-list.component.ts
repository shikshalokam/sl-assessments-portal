import { Component, OnInit, ViewChild } from '@angular/core';
import { ParentConfig } from '../parent-config';
import { ApiService } from '../../../core/services/api-service';
import { environment } from '../../../../environments/environment.prod';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { UtilityService } from 'src/app/core/services/utility-service';
@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'city', 'state', 'externalId',' '];
  dataSource;
  result;
  error: any;
  headings = 'headings.schoolListHeading';
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiFetch: ApiService, private utility: UtilityService) {
    this.showConfig();
  }
  showConfig() {
    this.apiFetch.getSchoolList()
      .subscribe(data => {
        this.result = data.result.length;
        console.log(data.result);
        this.dataSource = new MatTableDataSource(data.result);
        this.dataSource.paginator = this.paginator;
        this.utility.loaderHide();
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




}
