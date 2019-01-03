import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ReportConfig } from 'src/app/modules/report/report-config';
import { Headers, Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private https: Http, private http: HttpClient) { }
  // createAuthorizationHeader(headers: Headers) {
  //   headers.append(environment.downloadReportHeaderLabel, environment.downloadReportHeaderValue);
  // }
  downloadReport(evedinceId) {
    // console.log("service" + evedinceId);
    // let headers = new Headers();
    // this.http.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "Your Oauth token");

    // this.createAuthorizationHeader(headers);
    // return this.https.get(environment.apibaseurl + ReportConfig.downloadReport + evedinceId, {
    //   headers: headers
    // });
    // window.open(environment.apibaseurl + ReportConfig.downloadReport + evedinceId);
    console.log(this.http.get(environment.apibaseurl + ReportConfig.downloadReport + evedinceId))
    return this.http.get(environment.apibaseurl + ReportConfig.downloadReport + evedinceId);
  }
  getSchoolList() {
    return this.http.get(environment.apibaseurl + ReportConfig.schoolListFind);
  }
  getEcmReportGetSubmissionId(schoolId) {
    return this.http.get(environment.apibaseurl + ReportConfig.ecmReportGetSubmissionId + schoolId)
  }
  getSubmissionReport(submissionId) {
    return this.http.get(environment.apibaseurl + ReportConfig.GetSubmission + submissionId)
  }
}
