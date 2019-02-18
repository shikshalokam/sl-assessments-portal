import { Injectable } from '@angular/core';
import { OperationConfig } from 'src/app/modules/operations/operations.config';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
   Url;

  constructor( private apiService :ApiService) { }
  uploadCsv(csvFile,uploadType,programId,componentId) {
    if(uploadType == 'schools')
    {
      this.Url=OperationConfig.uploadSchool;
    }
    else if(uploadType =='assessors')
    {
      this.Url=OperationConfig.uploadAcessors;
    }
    return this.apiService.upload( this.Url+"programId="+programId+"&componentId="+componentId,csvFile ,uploadType)
  }
  getSchools(programId,componentId){
    return this.apiService.get(OperationConfig.viewSchools+"programId="+programId+"&componentId="+componentId);
  }

}
