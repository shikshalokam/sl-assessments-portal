import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ParentConfig } from '../../../modules/parent-interview/parent-config';
import { environment } from 'src/environments/environment';
import { ReportConfig } from 'src/app/modules/report/report-config';
export interface Confg {
  message: string;
  status: number;
  result: [
      {
          name: string,
          id: string,
          externalId: string
      }
  ]
}
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  downloadReport(evedinceId){
    return this.http.get<Confg>(environment.apibaseurl + ReportConfig.downloadReport + evedinceId);
  }

}
