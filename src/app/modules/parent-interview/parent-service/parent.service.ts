import { Injectable } from '@angular/core';
import { ParentConfig } from '../../parent-interview/parent-config';
import { ApiService } from 'shikshalokam';
import { environment } from 'src/environments/environment';
@Injectable(
    {
        providedIn : 'root'
    }
)
export class ParentService {
    constructor(private apiService : ApiService) { }
    configUrl;

    getParentList(schoolId: string) {
       return  this.apiService.get(environment.apibaseurl +ParentConfig.parentListFind + schoolId);
    }
    getParentInfo(parentId: string) {
        return this.apiService.get( environment.apibaseurl +ParentConfig.parentEditFind + parentId)
    }
    getSchoolList() {
        return this.apiService.get( environment.apibaseurl +ParentConfig.schoolListFind)
    }
    
    

    getAssessmentQuestions(schoolId) {
        return this.apiService.get(environment.apibaseurl +ParentConfig.getSurveyQuestions + schoolId + '?oncall=1')
    }
    parentInterviewSubmission(submissionId) {
        return this.apiService.post(environment.apibaseurl +ParentConfig.parentInterviewSubmission + submissionId,{})
    }

    postParentData(temp: string, updateData) {
        return this.apiService.post(environment.apibaseurl +ParentConfig.parentEditFetch + temp, updateData)
    }

    submitParentsurvey(submissionId, payload)  {
        return this.apiService.post(environment.apibaseurl +ParentConfig.submitParentInterview + submissionId, payload );
    }

    getParentResponses(submissionId, parentId) {
        return this.apiService.get(environment.apibaseurl +ParentConfig.getPreviousParentResponse + submissionId +'?parentId='+parentId )

    }
   
}