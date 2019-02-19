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
  getSchools(programId,componentId,search,pageIndex,pageSize){
    if(pageIndex === undefined){
      pageIndex = 1;
      pageSize = 4;
    }
    pageIndex++;
<<<<<<< HEAD
    return this.apiService.get( OperationConfig.viewSchools+"programId="+programId+"&componentId="+componentId+"&search="+search+"&pageIndex="+pageIndex+"&pageSize="+pageSize);
=======
    return this.http.get(environment.apibaseurl + OperationConfig.viewSchools+"programId="+programId+"&componentId="+componentId+"&search="+search+"&pageIndex="+pageIndex+"&pageSize="+pageSize);
>>>>>>> 5edb52020051ff5993ba09f447339ef84a4e4001
  }

}
