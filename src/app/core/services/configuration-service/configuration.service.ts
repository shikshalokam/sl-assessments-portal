import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationConfig } from 'src/app/modules/configuration/criteria/criteria-config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { }

  getCriteria(){
    return this.http.get(environment.apibaseurl + ConfigurationConfig.getCriteria);
  }
  addNewCriteria(updateData){
    return this.http.post(environment.apibaseurl + ConfigurationConfig.addCriteria , updateData)

  }
}
