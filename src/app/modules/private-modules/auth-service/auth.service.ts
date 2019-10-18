import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as jwt_decode from "jwt-decode";
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from 'shikshalokam';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';

// import { environment } from 'src/environments/environment';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  userName: string;
  constructor(private jwtHelper: JwtHelperService, private apiService: ApiService, private http: HttpClient) { }


  private keycloakAuth: any;

  init(): Promise<any> {
    return new Promise((resolve, reject) => {
      const config = {
        'url': environment.keycloak.url,
        'realm': environment.keycloak.realm,
        'clientId': environment.keycloak.clientId
      };
      this.keycloakAuth = new Keycloak(config);
      this.keycloakAuth.init({ onLoad: 'login-required' })
        .success(() => {
          console.log("seting")
          localStorage.setItem('auth-token', this.keycloakAuth.token)
          localStorage.setItem('downloadReport-token', environment.downloadReportHeaderValue)

          resolve();
        })
        .error(() => {
          reject();
        });
    });
  }

  getToken(): string {
    return this.keycloakAuth.token;
  }

  getCurrentUserDetails() {
    // console.log(jwt_decode(this.keycloakAuth.token).name)
    // this.userName = jwt_decode(this.keycloakAuth.token).name;
    // return jwt_decode(this.keycloakAuth.token);
    this.userName = this.jwtHelper.decodeToken(this.getToken()).name;
    return this.jwtHelper.decodeToken(this.getToken());

  }

  getLogout() {
    localStorage.clear();
    return this.keycloakAuth.logout();
  }

  async getUserRoles() {

    let tokenInfo = this.jwtHelper.decodeToken(this.keycloakAuth.token);
    // console.log("tokenInfo",tokenInfo);
    const headers = new HttpHeaders()
      .set("X-authenticated-user-token", this.getToken());
    await this.http.get(environment.getProfileDetails + tokenInfo.sub, { headers }).toPromise()
    .then(
      data =>{
        // console.log("http data",data);
        if(data && data['status']){
          localStorage.setItem("roleInfo",JSON.stringify(data['result']));
          return (data);
        }else{
          return "";
        }
      }

    )

  }
  getAllowedUrls(){

    if(localStorage.getItem("roleInfo")){

    
    let roles = JSON.parse(localStorage.getItem("roleInfo"));
    let allowedArray = [];
    roles.roles.forEach(element => {

      if(element=="OBS_REVIEWER"){
        allowedArray.push("/workspace/publish");
        allowedArray.push("/workspace/under-review");
        allowedArray.push("/workspace/up-for-review");
      }else if(element=="OBS_DESIGNER"){
        allowedArray.push("/workspace");
        allowedArray.push("/workspace/create");
        allowedArray.push("/workspace/draft");
       }
    });
  
    console.log("allowedArray",allowedArray);

    return allowedArray;
  }else{
    return [];
  }

  }


}
