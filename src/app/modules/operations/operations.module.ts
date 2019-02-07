import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsComponent } from './operations.component';
import { OperationsRoutingModule } from './operations-routing.module';
import { UploadingCsvComponent } from './uploading-csv/uploading-csv.component';
import { MatInputModule,MatSelectModule, MatButtonModule } from '@angular/material';
import { CoreModule } from 'src/app/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ProgressBarModule} from "angular-progress-bar"

@NgModule({
  declarations: [OperationsComponent, UploadingCsvComponent],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    MatInputModule,
    MatSelectModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    ProgressBarModule,
    MatButtonModule
    // MatFileUploadModule
  ]
,
// providers:[MatFileUploadModule]
})
export class OperationsModule { }
