import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OperationConfig } from 'src/app/modules/operations/operations.config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  constructor(private http: HttpClient) { }
  uploadSchools(csvFile ) {
      return this.http.post(environment.apibaseurl + OperationConfig.uploadSchool, csvFile , {reportProgress: true, observe: 'events'});
  }
  uploadAssessors(csvFile) {
      return this.http.post(environment.apibaseurl + OperationConfig.uploadAcessors , csvFile);
  }
}
