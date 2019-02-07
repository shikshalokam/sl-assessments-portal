import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OperationConfig } from 'src/app/modules/operations/operations.config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
   Url;

  constructor(private http: HttpClient) { }
  uploadCsv(csvFile,uploadType) {
    if(uploadType == 'schools')
    {
      this.Url=OperationConfig.uploadSchool;
    }
    else if(uploadType =='assessors')
    {
      this.Url=OperationConfig.uploadAcessors;
    }
    return this.http.post(environment.apibaseurl + this.Url, csvFile , {reportProgress: true, observe: 'events'});
  }
}
