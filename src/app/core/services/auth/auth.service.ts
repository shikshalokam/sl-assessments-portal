import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as jwt_decode from "jwt-decode";
import { Observable , of} from 'rxjs';
import { delay,tap } from 'rxjs/operators';

declare var Keycloak: any;

@Injectable({
  providedIn:'root'
})
export class AuthService {
  isLoggedIn =false;
  redirectUrl:string;
  userName : string;
  constructor() { }

  
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
    console.log(jwt_decode(this.keycloakAuth.token).name)
    this.userName = jwt_decode(this.keycloakAuth.token).name;
    return jwt_decode(this.keycloakAuth.token);
  }

  getLogout(){
   return this.keycloakAuth.logout();
  }

  login() :Observable<boolean>{
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout():void{
    this.isLoggedIn = false;
  }


}
