import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './operations.component';
import { OperationsRoutingModule } from './operations-routing.module';
import { UploadingCsvComponent } from './uploading-csv/uploading-csv.component';
import { MatInputModule,MatSelectModule } from '@angular/material';
import { CoreModule } from 'src/app/core';

@NgModule({
  declarations: [OperationsComponent, UploadingCsvComponent],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    MatInputModule,
    MatSelectModule,
    CoreModule
  ]
})
export class OperationsModule { }
