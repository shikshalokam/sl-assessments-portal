import { Component, OnInit, VERSION } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { OperationsService } from 'src/app/core';

@Component({
  selector: 'app-uploading-csv',
  templateUrl: './uploading-csv.component.html',
  styleUrls: ['./uploading-csv.component.scss']
})
export class UploadingCsvComponent implements OnInit {

  uploadOprions = [
    {value: 'schools', viewValue: 'Upload Schools'},
    {value: 'assessors', viewValue: 'Upload Assessors'},
  ];
  percentDone: number;
  uploadSuccess: boolean;
  ngOnInit(){

  }
  constructor(
    private operationService :OperationsService
    ) { }
    
  version = VERSION
  
  upload(files: File[]){
    this.uploadAndProgress(files);
  }

  basicUpload(files: File[]){
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('schools', f))
    this.operationService.uploadSchools(formData).
    subscribe( event=>{
      console.log("successful")
    },
      error => {

      })
  }
  
  basicUploadSingle(file: File){    
    this.operationService.uploadSchools(file)
      .subscribe(event => {  
        console.log('done')
      })
  }
  
  uploadAndProgress(files: File[]){
    console.log(files)
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file',f))
    this.operationService.uploadSchools(formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
    });
  }
  
  uploadAndProgressSingle(file: File){    
    this.operationService.uploadSchools(file)
    .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
    });
  }
}
