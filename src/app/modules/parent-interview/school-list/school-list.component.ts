import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { KeycloakService } from 'keycloak-angular';


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


export class SchoolListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'id', 'externalId'];
  dataSource = ELEMENT_DATA;
  data: any = {};
  constructor(private http: HttpClient, private keyclock:KeycloakService) {
    keyclock.getToken().then(data => {
          console.log(data);
  } );
  this.getData();

}

  ngOnInit() { }
  getData() {
    this.http.get("https://dev.shikshalokam.org/assessment/api/v1/assessors/schools")
      .subscribe(data => {
        console.log(data);
        this.data = data;
      })
  }
  // sendToken(){

  // }

}