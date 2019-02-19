import { Injectable } from '@angular/core';
import { ConfigurationConfig } from 'src/app/modules/configuration/criteria/criteria-config';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private apiService :ApiService) { }

  getCriteria(){
    return this.apiService.get( ConfigurationConfig.getCriteria)
  }
  addNewCriteria(updateData){
    return this.apiService.post(ConfigurationConfig.addCriteria , updateData)

  }
}
