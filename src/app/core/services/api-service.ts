import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ParentConfig } from '../../modules/parent-interview/parent-config';
import { environment } from 'src/environments/environment.prod';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
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
export class ApiService {
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