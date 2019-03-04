import { Injectable } from '@angular/core';
import { ConfigurationConfig } from 'src/app/modules/configuration/criteria/criteria-config';
import { ApiService } from 'shikshalokam';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private apiService :ApiService) { }

  getCriteria(){
    return this.apiService.get(environment.apibaseurl+ ConfigurationConfig.getCriteria)
  }
  addNewCriteria(updateData){
    return this.apiService.post( environment.apibaseurl+ConfigurationConfig.addCriteria , updateData)

  }
}
