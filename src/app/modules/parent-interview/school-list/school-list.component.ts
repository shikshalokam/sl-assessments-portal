import { Component, OnInit, ViewChild,  } from '@angular/core';
import { MatTableDataSource, MatPaginator,  } from '@angular/material';
import { UtilityService } from 'shikshalokamcoremodule';
import { ParentService } from '../parent-service/parent.service';

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
  smallScreen = false;
  headings = 'headings.schoolListHeading';
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private parentService: ParentService, private utility: UtilityService) {
    if (window.screen.width < 760) { // 768px portrait
      this.smallScreen = true;
      console.log(this.smallScreen)
    }
    this.showConfig();
  }
  showConfig() {
    this.parentService.getSchoolList()
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
