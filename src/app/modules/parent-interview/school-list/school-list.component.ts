import { Component, OnInit } from '@angular/core';
import { ParentConfig } from '../parent-config';
import { ApiFetch } from '../../../core/services/api-fetch-service';
import { environment } from '../../../../environments/environment.prod';


export interface PeriodicElement {
 id:string;
 externalId:string;
 name : string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
      id: "5bebcfcf92ec921dcf114827",
      externalId: "Chandapura01",
      name: "GHPS, Muttanallur"
  },
  {
      id: "5bebcfcf92ec921dcf114829",
      externalId: "Goripalaya01",
      name: "R.M Educational Society"
  },
  {
      id: "5bebcfcf92ec921dcf114828",
      externalId: "Chandapura02",
      name: "GHS, Chattrakhane"
  },
  {
      id: "5bebcfcf92ec921dcf11482a",
      externalId: "Goripalaya02",
     name: "GLPS Urdu, Arfathanagara"
  },
  {
      id: "5bebcfcf92ec921dcf11482b",
      externalId: "HosaRoad01",
      name: "Sujana Convent School"
  },
  {
      id: "5beaa888af0065f0e0a10515",
      externalId: "9999999999",
      name: "Apple School"
  }
]

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit{
  displayedColumns: string[] = ['name', '_id', 'externalId'];
  dataSource;
  constructor(private apiFetch :ApiFetch ) {
  this.showConfig();
  }
  showConfig() {
  this.apiFetch.getConfig(environment.apibaseurl,ParentConfig.schoolListFind)
      .subscribe(data => {
        console.log(JSON.stringify(data)) 
        this.dataSource = data.result;
      });
}
  ngOnInit() { }
  

  
}