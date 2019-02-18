import { Injectable } from '@angular/core';
import { ParentConfig } from '../../../modules/parent-interview/parent-config';
import { ApiService } from '../api-service/api.service';
@Injectable()
export class ParentService {
    constructor(private apiService : ApiService) { }
    configUrl;

    getParentList(schoolId: string) {
       return  this.apiService.get(ParentConfig.parentListFind + schoolId);
    }
    getParentInfo(parentId: string) {
        return this.apiService.get(ParentConfig.parentEditFind + parentId)
    }
    getSchoolList() {
        return this.apiService.get( ParentConfig.schoolListFind)
    }
    
    

    getAssessmentQuestions(schoolId) {
        return this.apiService.get(ParentConfig.getSurveyQuestions + schoolId + '?oncall=1')
    }
    parentInterviewSubmission(submissionId) {
        return this.apiService.post(ParentConfig.parentInterviewSubmission + submissionId,{})
    }

    postParentData(temp: string, updateData) {
        return this.apiService.post(ParentConfig.parentEditFetch + temp, updateData)
    }

    submitParentsurvey(submissionId, payload)  {
        return this.apiService.post(ParentConfig.submitParentInterview + submissionId, payload );
    }

    getParentResponses(submissionId, parentId) {
        return this.apiService.get(ParentConfig.getPreviousParentResponse + submissionId +'?parentId='+parentId )

    }
   
}