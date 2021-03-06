import { Component, OnInit, ViewChild } from '@angular/core';
import { ParentService } from '../../../core/services/parent-service/parent.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { UtilityService } from 'src/app/core/services/utility-service/utility.service';
import { ReportService } from 'src/app/core';

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
  schoolList;
  result;
  error: any;
  headings = 'headings.schoolListHeading';
  smallScreen = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private reportService: ReportService, private utility: UtilityService) {
    this.showConfig();
  }
  showConfig() {
    this.reportService.getSchoolList()
      .subscribe(data => {
        this.result = data['result']['length'];
        this.dataSource = new MatTableDataSource(data['result']);
        setTimeout(() => this.dataSource.paginator = this.paginator);
        this.schoolList = data['result'];
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
    if (window.screen.width < 760) { // 768px portrait
      this.smallScreen = true;
    }
  }
  // afterViewChecked(){
  //   if (window.screen.width < 760) { // 768px portrait
  //     this.smallScreen = true;
  // }

  objectKeys(obj) {
    return Object.keys(obj);
  }


}