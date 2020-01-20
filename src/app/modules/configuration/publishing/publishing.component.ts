import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatDialog, PageEvent, MatPaginator, MatSort, Sort } from '@angular/material';
import { DraftFrameWorkServiceService } from '../../configuration/workspace-services/draft-frame-work-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-publishing',
  templateUrl: './publishing.component.html',
  styleUrls: ['./publishing.component.scss']
})
export class PublishingComponent implements OnInit {

  field: Subject<any> = new Subject();
  dataSource: any;
  display: boolean = false;
  displayedColumns: string[] = ['no', 'externalId', 'name', 'description', 'action'];
  pageSize = 10;
  totalFrameWorks: any;
  tableData: any;
  spin: any;
  config = {
    search: true,
    sort: true,
    pagination: true,
    actions: true,
    title: "Publishing"
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private frameWorkServ: DraftFrameWorkServiceService, private cdr: ChangeDetectorRef,
    private spinner: NgxSpinnerService, private route: Router) { }

  ngOnInit() {
    this.getList();
    this.spinner.show();
  }


  getList() {
    this.frameWorkServ.listOfDraftFrameWork(this.pageSize, 1,'draft').subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Element>(data['result'].data);
        this.totalFrameWorks = data['result'].count;
        this.dataSource = []; // after changing api remove this
        this.totalFrameWorks = 0; // after changing api remove this
        this.tableData = {
          data: this.dataSource,
          displayedColumns: this.displayedColumns,
          totalRecords: this.totalFrameWorks,
          configdata: this.config
        }
        this.spinner.hide();
        this.cdr.detectChanges();

        this.display = true;
        this.dataSource.sort = this.sort;

        this.dataSource.paginator = this.paginator;
        this.field.next();
        this.cdr.detectChanges();
        // this.spinner.hide();

      },
      error => {
        console.log("data", error);
      }
    );
  }


  dataFromChild(data) {
    console.log('under-review', data);
    if (data.action == 'Edit') {
      // this.route.navigateByUrl('/workspace/edit/' + data._id);
    }
    if (data.action == 'delete') {
      // this.deleteDraftFW(data._id);
    }

    if (data.action == 'pagination') {
      this.getNext(data);
    }

  }

  // pagination purpose
  getNext(event: PageEvent) {
    console.log('getNext', event);
    this.pageSize = event.pageSize;
    let offset = event.pageSize * event.pageIndex;
    this.frameWorkServ.listOfDraftFrameWork(this.pageSize, event.pageIndex + 1,'draft').subscribe(
      data => {
        this.dataSource = data['result'].data;
        console.log('==this.dataSource=', this.dataSource);
        this.totalFrameWorks = data['result'].count;
        this.tableData = {
          data: this.dataSource,
          displayedColumns: this.displayedColumns,
          totalRecords: this.totalFrameWorks,
          configdata: this.config
        }
        console.log('==this.tableData=', this.tableData);

        this.cdr.detectChanges();
        this.field.next();
      },
      error => {
        console.log("data", error);
      }
    );
    // call your api function here with the offset
  }
}
