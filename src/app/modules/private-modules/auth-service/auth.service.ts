/**
 * name : auth.service.ts
 * author : srikanth
 * created-date : 03-Dec-2019
 * Description : To call the api's related to authorization part.
 */

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { authConfig } from '../auth-config'
import { Token } from '@angular/compiler';
declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
/**
 * To main all the api  calls related to authorizations
 */
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  userName: string;
  constructor(private jwtHelper: JwtHelperService, private http: HttpClient) { }


  private keycloakAuth: any;

  /**
   * Implementing the keycloak login
   * @returns {JSON} - Response data.
   */
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
          localStorage.setItem('auth-token', this.keycloakAuth.token)
          localStorage.setItem('downloadReport-token', environment.downloadReportHeaderValue)

          resolve();
        })
        .error(() => {
          reject();
        });
    });
  }

  /**
   * Passing the token to entire application
   * @returns {Token} - Returns token.
   */

  getToken(): string {
    return this.keycloakAuth.token;
  }

  /**
   * To get the current login user details
   * @returns {JSON} - Response data.
   */
  getCurrentUserDetails() {
    // this.userName = jwt_decode(this.keycloakAuth.token).name;
    // return jwt_decode(this.keycloakAuth.token);
    this.userName = this.jwtHelper.decodeToken(this.getToken()).name;
    return this.jwtHelper.decodeToken(this.getToken());

  }

  /**
   * This method is used to logout the current user
   * To clear all the data from local storage
   */
  getLogout() {
    localStorage.clear();
    return this.keycloakAuth.logout();
  }

  /**
   * Based on the user login get all the user roles 
   * @returns {JSON} - Response data.
   */
  async getUserRoles() {
    let tokenInfo = this.jwtHelper.decodeToken(this.keycloakAuth.token);
    const headers = new HttpHeaders()
      .set("X-authenticated-user-token", this.getToken());
    await this.http.get(environment.kendra_base_url + authConfig.getProfileDetails + tokenInfo.sub, { headers }).toPromise()
      .then(
        data => {
          if (data && data['status']) {
            localStorage.setItem("roleInfo", JSON.stringify(data['result']));
            return (data);
          } else {
            return "";
          }
        }

      )

  }

  /**
   * Restricting the urls based on the user role
   * @returns {Array} - Response data.
   */
  getAllowedUrls() {
    if (localStorage.getItem("roleInfo")) {
      let roles = JSON.parse(localStorage.getItem("roleInfo"));
      let allowedArray = [];
      roles.roles.forEach(element => {
        if (element == environment.obs_reviewer) {
          allowedArray.push("/workspace");
          allowedArray.push("/workspace/publish");
          allowedArray.push("/workspace/up-for-review");
        } else if (element == environment.obs_designer) {
          allowedArray.push("/workspace");
          allowedArray.push("/workspace/create");
          allowedArray.push("/workspace/draft");
          allowedArray.push("/workspace/under-review");
        }
      });
      return allowedArray;
    } else {
      return [];
    }

  }


}