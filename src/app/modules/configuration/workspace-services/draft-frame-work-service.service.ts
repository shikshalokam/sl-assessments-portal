/**
 * Name : draft-frame-work-service.ts
 * Author : Rakesh
 * Created-date : 16-Dec-2019
 * Description : To Maintain all the services.
 */

import { Injectable } from '@angular/core';
import { ConfigurationConfig } from 'src/app/modules/configuration/criteria/criteria-config';
// import { ApiService } from 'shikshalokam';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { configOfFrameWorkAPIs } from 'src/app/modules/configuration/workspace-config';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class DraftFrameWorkServiceService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  // To Create draft framework 
  createDraftFrameWork() {
    let tokenInfo = localStorage.getItem("auth-token");
    console.log("tokenInfo", tokenInfo);
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.post(environment.frameWorkbaseurl + configOfFrameWorkAPIs.createDraftFrameWork, {}, {
      headers: customHeader
    });
  }

  // To update the object based on frameworkId
  updateDraftFrameWork(obj, frameWorkId) {
    let tokenInfo = localStorage.getItem("auth-token");
    //  console.log("tokenInfo",tokenInfo);
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.post(environment.frameWorkbaseurl + configOfFrameWorkAPIs.updateDraftFrameWork + frameWorkId, obj, {
      headers: customHeader
    });

  }

  // To get the list of drafts
  listOfDraftFrameWork(limit, PageNumber, listType) {
    let tokenInfo = localStorage.getItem("auth-token");
    let token = this.jwtHelper.decodeToken(tokenInfo);
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftFrameWorkList + "?page=" + PageNumber + "&limit=" + limit + "&listType=" + listType, {
      headers: customHeader
    });
  }

  // TO delete the draft based on id
  deleteDraftFrameWork(id) {
    let tokenInfo = localStorage.getItem("auth-token");
    // let token = this.jwtHelper.decodeToken(tokenInfo);
    //  console.log("tokenInfo",token.sub);
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.deleteDraftFrameWork + id, {
      headers: customHeader
    });
  }

  // To create the criteria
  draftCriteriaCreate(obj) {
    let tokenInfo = localStorage.getItem("auth-token");
    // let token = this.jwtHelper.decodeToken(tokenInfo);
    //  console.log("tokenInfo",token.sub);
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.post(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftCriteriaCreate, obj, {
      headers: customHeader
    });
  }

  // To update the criteria
  updateDraftCriteria(criteriaId, obj) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.post(environment.frameWorkbaseurl + configOfFrameWorkAPIs.updateDraftCriteria + criteriaId, obj, {
      headers: customHeader
    });
  }

  //To get the criteria list
  draftCriteriaList(frameWorkId, criteriaListPageSize, nextPage) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.listDraftCriteria + frameWorkId + '?page=' + nextPage + '&limit=' + criteriaListPageSize, {
      headers: customHeader
    });
  }

  // To Delete the criteria
  draftCriteriaDelete(id) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftCriteriaDelete + id, {
      headers: customHeader
    });
  }

  // to get frameWork Details, it accepts frameWorkId
  getDraftFrameworksdetails(id) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.getDraftFrameWorkDetails + id, {
      headers: customHeader
    });

  }

  // To get the entity type list
  getEntityTypeList() {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.getEntityTypeList, {
      headers: customHeader
    });
  }

  // To save the evidence collection method based on the frameworkid
  draftEcmCreate(frameWorkId) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    let obj = {
      draftFrameworkId: frameWorkId
    }
    return this.http.post(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftEcmCreate, obj, {
      headers: customHeader
    });
  }

  // To create the draft based on the framework id
  draftSectionCreate(frameWorkId) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    let obj = {
      draftFrameworkId: frameWorkId
    }
    return this.http.post(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftSectionCreate, obj, {
      headers: customHeader
    });

  }

   // To show the list of questions
  listDraftSection(frameWorkId) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.listDraftSection + '/' + frameWorkId, {
      headers: customHeader
    });

  }

  // To show the list of Evidence collection
  listDraftEcm(frameWorkId) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.listDraftEcm + '/' + frameWorkId, {
      headers: customHeader
    });

  }

  // Questions creation
  draftQuestionCreate(obj) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.post(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftCreateQuestion, obj, {
      headers: customHeader
    });
  }

  // update status
  updateDraftQuestion(obj, questionId) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.post(environment.frameWorkbaseurl + configOfFrameWorkAPIs.updateDraftQuestion + questionId, obj, {
      headers: customHeader
    });
  }

  // To get all the questions based on the framework
  draftQuestionList(frameWorkId) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftQuestionList + frameWorkId, {
      headers: customHeader
    });
  }

  // For Deleting the draft question
  deleteDraftQuestion(questionId) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.deleteDraftQuestion + questionId, {
      headers: customHeader
    });
  }

  // Details for each question
  detailsDraftQuestion(questionId) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.detailsDraftQuestion + questionId, {
      headers: customHeader
    });

  }

  // Publishing the draft framework
  publishDraftFrameWork(frameWorkId, entityType) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.post(environment.frameWorkbaseurl + configOfFrameWorkAPIs.publishDraftFrameWork + frameWorkId + '?entityType=' + entityType, {}, {
      headers: customHeader
    });

  }

  //update the draft Ecm
  updateDraftECM(ecmId, obj) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.post(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftEcmUpdate + ecmId, obj, {
      headers: customHeader
    });

  }
   //update the draft Section
  updateDraftSection(sectionId, obj) {
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.post(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftSectionUpdate + sectionId, obj, {
      headers: customHeader
    });

  }

}
