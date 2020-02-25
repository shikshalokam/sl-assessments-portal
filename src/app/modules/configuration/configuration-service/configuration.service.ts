import { Injectable } from '@angular/core';
import { ConfigurationConfig } from 'src/app/modules/configuration/criteria/criteria-config';
import { ApiService } from 'shikshalokam';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private apiService :ApiService) { }

  /**
   * To get the all Criteria list
   */
  getCriteria(){
    return this.apiService.get(environment.apibaseurl+ ConfigurationConfig.getCriteria)
  }

  /**
   * Method is to add new Criteria
   */
  addNewCriteria(updateData){
    return this.apiService.post( environment.apibaseurl+ConfigurationConfig.addCriteria , updateData)

  }
}
