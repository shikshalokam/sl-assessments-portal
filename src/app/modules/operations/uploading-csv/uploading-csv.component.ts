import { Component, OnInit, VERSION } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { OperationsService } from 'src/app/core';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uploading-csv',
  templateUrl: './uploading-csv.component.html',
  styleUrls: ['./uploading-csv.component.scss']
})
export class UploadingCsvComponent implements OnInit {
  fileUpload = false;
  CsvFileForm: FormGroup;
  uploadOprions = [
    { value: 'schools', viewValue: 'Upload Schools' },
    { value: 'assessors', viewValue: 'Upload Assessors' },
  ];
  file = [];
  headings='headings.uploadingCsv'
  uploadtype = '';
  percentDone: number;
  uploadSuccess: boolean;
  fileSelected = false;
  uploadTypeSelected = false;
  formData;
  showStatus = false;
  programId;
  assessmentId;
  ngOnInit() {

  }


  constructor(
    private operationsService: OperationsService,
    private snackBar: MatSnackBar,
    fb: FormBuilder,
    private route :ActivatedRoute

  ) {
    this.CsvFileForm = fb.group({
      name: [""],
      fileName: [""]
    });
    this.route.parent.queryParams.subscribe(params => {
      this.programId = params['programId'];
      this.assessmentId = params['assessmentId']

    });

  }

  version = VERSION
  updateUploadType(uploadType) {
    if (uploadType != '')
      this.uploadTypeSelected = true;
    this.uploadtype = uploadType;

  }
  upload(files: File[]) {
    this.file = files;
    this.fileSelected = true;
    this.showStatus = true;
  }
  deleteFile(index, files) {
    files.value = null;
    this.fileSelected = false;
    this.showStatus = false;
    this.file = []
  }
  
  csvUpload() {
    this.operationsService.uploadCsv(this.file,this.uploadtype,this.programId,this.assessmentId)
      .subscribe(event => {
        this.fileUpload = true;

        if (event.type === HttpEventType.UploadProgress) {

          this.percentDone = Math.round(100 * event.loaded / event.total);
          this.snackBar.open('Upload Sucessful', "Ok", { duration: 3000 });
        }
      },
        error => {
          this.snackBar.open(error['message'], "Ok", { duration: 3000 });
        });
    setTimeout(() => {
      this.CsvFileForm.reset();
      this.showStatus = false;
      this.fileSelected = false;
      this.uploadTypeSelected = false;
    }, 3000);
  }
}
