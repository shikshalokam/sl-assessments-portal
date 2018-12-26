import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ParentConfig } from '../../../modules/parent-interview/parent-config';
import { environment } from 'src/environments/environment';
import { ReportConfig } from 'src/app/modules/report/report-config';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  downloadReport(evedinceId){
    return this.http.get(environment.apibaseurl + ReportConfig.downloadReport + evedinceId);
  }

  getEcmReportGetSubmissionId(schoolId) {
    return this.http.get(environment.apibaseurl + ReportConfig.ecmReportGetSubmissionId+schoolId )
}
getSubmission(submissionId) {
    return this.http.get(environment.apibaseurl + ReportConfig.GetSubmission+submissionId )
}
}
