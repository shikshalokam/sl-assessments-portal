import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { ReportRoutingModule } from './report-routing.module';
import { SchoolListComponent } from './school-list/school-list.component';
import { SharedModule, CoreModule } from 'shikshalokam';
import {
  MatSelectModule, MatTooltipModule, MatTableModule,
  MatDialogModule, MatExpansionModule, MatTabsModule, MatCardModule,
  MatButtonModule, MatInputModule, MatFormFieldModule, MatPaginatorModule,
  MatDividerModule, MatSortModule
} from '@angular/material';
import { EcmReportComponent } from './ecm-report/ecm-report.component';
import { ImageModalComponent } from './ecm-report/image-modal/image-modal.component';
import { DownloadReportComponent } from './download-report/download-report.component';
@NgModule({
  declarations: [
    ReportComponent,
    SchoolListComponent,
    EcmReportComponent,
    ImageModalComponent,
    DownloadReportComponent
  ],
  imports: [
    // CommonModule,
    MatDividerModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    SharedModule,
    CoreModule,
    MatPaginatorModule,
    ReportRoutingModule,
    // MatSortModule

  ],
  entryComponents: [ImageModalComponent],

  providers: [
  ],
})
export class ReportModule { }
