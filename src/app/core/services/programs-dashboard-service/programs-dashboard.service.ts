import { Injectable } from '@angular/core';
import { ProgramsDashboardConfig } from 'src/app/modules/programs-dashboard/programs-dashboard-config';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramsDashboardService {

  constructor( private apiService :ApiService) { }
  
  getProgramList() {
    return this.apiService.get(ProgramsDashboardConfig.programList);
  }
}
