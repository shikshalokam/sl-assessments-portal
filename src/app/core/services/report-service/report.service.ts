import { Injectable } from '@angular/core';
import { ReportConfig } from 'src/app/modules/report/report-config';
import { ApiService } from '../api-service/api.service';
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor( private apiService: ApiService) { }
  downloadReport(evedinceId) {
    return this.apiService.get( ReportConfig.downloadReport + evedinceId);
  }
  getSchoolList() {
    return this.apiService.get(ReportConfig.schoolListFind);
  }
  getEcmReportGetSubmissionId(schoolId) {
    return this.apiService.get( ReportConfig.ecmReportGetSubmissionId + schoolId)
  }
  getSubmissionReport(submissionId) {
    return this.apiService.get( ReportConfig.GetSubmission + submissionId)
  }
}
