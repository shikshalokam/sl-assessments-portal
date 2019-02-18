import { Injectable } from '@angular/core';
import { ParentConfig } from '../../../modules/parent-interview/parent-config';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api-service/api.service';
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
    constructor(private apiService : ApiService) { }
    configUrl;

    getParentList(schoolId: string) {
       return  this.apiService.get(ParentConfig.parentListFind + schoolId);
        // return this.http.get<Config>(environment.apibaseurl + ParentConfig.parentListFind + schoolId);
    }
    getParentInfo(parentId: string) {
        return this.apiService.get(ParentConfig.parentEditFind + parentId)
        // return this.http.get<Config>(environment.apibaseurl + ParentConfig.parentEditFind + parentId);
    }
    // getSchoolList(pageIndex , pageSize ,search) {
    //     return this.http.get<Config>(environment.apibaseurl + ParentConfig.schoolListFind+'?pageIndex='+pageIndex+'&pageSize='+pageSize+'&search='+search);
    // }
    getSchoolList() {
        // return this.http.get<Config>("./assets/school-list.json");
        return this.apiService.get( ParentConfig.schoolListFind)
        // return this.http.get<Config>(environment.apibaseurl + ParentConfig.schoolListFind);
    }
    
    

    getAssessmentQuestions(schoolId) {
        return this.apiService.get(ParentConfig.getSurveyQuestions + schoolId + '?oncall=1')
        // return this.http.get(environment.apibaseurl + ParentConfig.getSurveyQuestions + schoolId + '?oncall=1');
    }
    parentInterviewSubmission(submissionId) {
        return this.apiService.post(ParentConfig.parentInterviewSubmission + submissionId,{})
        // return this.http.post(environment.apibaseurl + ParentConfig.parentInterviewSubmission + submissionId,{});
    }

    postParentData(temp: string, updateData) {
        return this.apiService.post(ParentConfig.parentEditFetch + temp, updateData)
        // return this.http.post<Config>(environment.apibaseurl + ParentConfig.parentEditFetch + temp, updateData)
    }

    submitParentsurvey(submissionId, payload)  {
        return this.apiService.post(ParentConfig.submitParentInterview + submissionId, payload );
        // return this.http.post(environment.apibaseurl + ParentConfig.submitParentInterview + submissionId, payload )
    }

    getParentResponses(submissionId, parentId) {
        return this.apiService.get(ParentConfig.getPreviousParentResponse + submissionId +'?parentId='+parentId )
        // return this.http.get(environment.apibaseurl + ParentConfig.getPreviousParentResponse + submissionId +'?parentId='+parentId )

    }
   
}