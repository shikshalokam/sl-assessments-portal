import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ParentConfig } from '../../../modules/parent-interview/parent-config';
import { environment } from 'src/environments/environment.prod';
import { throwError } from 'rxjs';
import { ReportConfig } from 'src/app/modules/report/report-config';

export interface Config {
    message: string;
    status: number;
    result: [
        {
            name: string,
            id: string,
            externalId: string
        }
    ]
}
@Injectable()
export class ParentService {
    constructor(private http: HttpClient) { }
    configUrl;

    getParentList(schoolId: string) {
        return this.http.get<Config>(environment.apibaseurl + ParentConfig.parentListFind + schoolId);
    }
    getParentInfo(parentId: string) {
        return this.http.get<Config>(environment.apibaseurl + ParentConfig.parentEditFind + parentId);
    }
    getSchoolList() {
        return this.http.get<Config>(environment.apibaseurl + ParentConfig.schoolListFind);
    }

    getAssessmentQuestions(schoolId) {
        return this.http.get(environment.apibaseurl + ParentConfig.getSurveyQuestions + schoolId + '?oncall=1');
    }
    parentInterviewSubmission(submissionId) {
        return this.http.post(environment.apibaseurl + ParentConfig.parentInterviewSubmission + submissionId,{});
    }

    postParentData(temp: string, updateData) {
        return this.http.post<Config>(environment.apibaseurl + ParentConfig.parentEditFetch + temp, updateData)
    }

    submitParentsurvey(submissionId, payload)  {
        return this.http.post(environment.apibaseurl + ParentConfig.submitParentInterview + submissionId, payload )
    }

    getParentResponses(submissionId, parentId) {
        return this.http.get(environment.apibaseurl + ParentConfig.getPreviousParentResponse + submissionId +'?parentId='+parentId )

    }
    getEcmReportGetSubmissionId(schoolId) {
        return this.http.get(environment.apibaseurl + ReportConfig.ecmReportGetSubmissionId+schoolId )
    }
    getSubmission(submissionId) {
        return this.http.get(environment.apibaseurl + ReportConfig.GetSubmission+submissionId )
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(
            'Something bad happened; please try again later.');
    };
}