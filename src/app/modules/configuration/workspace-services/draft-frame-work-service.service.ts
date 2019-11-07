import { Injectable } from '@angular/core';
import { ConfigurationConfig } from 'src/app/modules/configuration/criteria/criteria-config';
import { ApiService } from 'shikshalokam';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { configOfFrameWorkAPIs } from 'src/app/modules/configuration/workspace-config';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class DraftFrameWorkServiceService {

  constructor(private apiService: ApiService, private http: HttpClient,private jwtHelper: JwtHelperService) { }

  createDraftFrameWork() {

    let tokenInfo = localStorage.getItem("auth-token");
    //  console.log("tokenInfo",tokenInfo);
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.post(environment.frameWorkbaseurl + configOfFrameWorkAPIs.createDraftFrameWork, {}, {
      headers: customHeader
    });

  }
  updateDraftFrameWork(obj,frameWorkId){

    let tokenInfo = localStorage.getItem("auth-token");
    //  console.log("tokenInfo",tokenInfo);
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.post(environment.frameWorkbaseurl + configOfFrameWorkAPIs.updateDraftFrameWork+frameWorkId,obj, {
      headers: customHeader
    });

  }

  listOfDraftFrameWork(limit,PageNumber){

    let tokenInfo = localStorage.getItem("auth-token");

    let token = this.jwtHelper.decodeToken(tokenInfo);
    //  console.log("tokenInfo",token.sub);
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftFrameWorkList+"?page="+PageNumber+"&limit="+limit, {
      headers: customHeader
    });

  }
  deleteDraftFrameWork(id){
    let tokenInfo = localStorage.getItem("auth-token");

    // let token = this.jwtHelper.decodeToken(tokenInfo);
    //  console.log("tokenInfo",token.sub);
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.deleteDraftFrameWork+id, {
      headers: customHeader
    });
  }
  draftCriteriaCreate(obj){
    let tokenInfo = localStorage.getItem("auth-token");

    // let token = this.jwtHelper.decodeToken(tokenInfo);
    //  console.log("tokenInfo",token.sub);
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.post(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftCriteriaCreate,obj, {
      headers: customHeader
    });
  }

  updateDraftCriteria(criteriaId,obj){
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.post(environment.frameWorkbaseurl + configOfFrameWorkAPIs.updateDraftCriteria+criteriaId,obj, {
      headers: customHeader
    });
  }
  draftCriteriaList(frameWorkId,criteriaListPageSize,nextPage){
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.listDraftCriteria+frameWorkId+'?page='+nextPage+'&limit='+criteriaListPageSize, {
      headers: customHeader
    });
  }

  draftCriteriaDelete(id){
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.draftCriteriaDelete+id, {
      headers: customHeader
    });
  }

  // to get frameWork Details, it accepts frameWorkId
  getDraftFrameworksdetails(id){
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.getDraftFrameWorkDetails+id, {
      headers: customHeader
    });

  }
  getEntityTypeList(){
    let tokenInfo = localStorage.getItem("auth-token");
    const customHeader = new HttpHeaders({
      'X-authenticated-user-token': tokenInfo,
      'Content-Type': 'application/json'
    })
    return this.http.get(environment.frameWorkbaseurl + configOfFrameWorkAPIs.getEntityTypeList, {
      headers: customHeader
    });
  }


}
