import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { ParentService } from '../../../core/services/parent-service/parent.service';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
import { UtilityService } from 'src/app/core/services/utility-service/utility.service';
import { OperationsService } from 'src/app/core';

@Component({
  selector: 'app-view-schools',
  templateUrl: './view-schools.component.html',
  styleUrls: ['./view-schools.component.scss']
})
export class ViewSchoolsComponent implements OnInit {
  displayedColumns: string[] = ['externalId', 'name', '_id'];
  dataSource;
  schoolList;
  result;
  error: any;
  smallScreen = false;
  programId = '5b98d7b6d4f87f317ff615ee';
  componenId= '5b98fa069f664f7e1ae7498c';
  headings = 'headings.schoolListHeading';
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private operationsService: OperationsService, private utility: UtilityService) {
    this.showConfig();
  }
  showConfig() {
    this.operationsService.getSchools(this.programId,this.componenId)
      .subscribe(data => {
        this.schoolList = data['result'];
        this.result = data['result']['length'];
        this.dataSource = new MatTableDataSource(data['result']);
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
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.utility.loaderShow();
    if (window.screen.width < 760) { // 768px portrait
      this.smallScreen = true;
      console.log(this.smallScreen)
    }
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }
  onResize(event)
  {
    console.log(event);
    if(event.target.innerWidth > 760)
    {
      console.log(true)
      this.smallScreen = true;
    }
  }
}
