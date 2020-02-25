import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../auth-service/auth.service';
import { async } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pureFunction1 } from '@angular/core/src/render3';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
// export class AuthGuard implements CanActivate, CanActivateChild {
export class AuthGuard implements CanActivate {

  authServe: any;

  constructor(private _http: HttpClient, private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {
    this.authServe = authService;
  }
  url;
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    let url: string = state.url;
    this.url = state.url;
    let allowedArray = [];

    if (!localStorage.getItem("roleInfo")) {
      let res = await this.authServe.getUserRoles();
    }
    allowedArray = this.authServe.getAllowedUrls();


    if (allowedArray.includes(this.url)) {
      return true;
    } else {
      return false;

    }

  }
  checkProgarmId(url) {
    if (url.includes('/assessments')) {
      if (localStorage.getItem('currentProgram') === null) {
        this.router.navigate(['/programs']);
        return false;
      }
      return true;
    }
    // console.log("url",url);
    //  if(url.includes('/configuration') ){
    //   if(localStorage.getItem('currentProgram2') === null){
    //     this.router.navigate(['/programs']);
    //     return false;
    //   }else{
    //     return true;
    //   }

    // }

    //   return true;
    // }
    return true;

  }
  checkUser(url: string) {
    if (url.includes("parent")) {
      if (this.authService.userName == 'Sandeep') {
        return true;
      }
      this.snackBar.open("Unauthorized Access", "Ok", { duration: 3000 });
      return false;
    }
    else {
      if (this.authService.userName == 'Mouneesh') {
        return true;
      }
      this.snackBar.open("Unauthorized Access", "Ok", { duration: 3000 });
      return false;

    }

  }


  async getRoleInfo() {
    // return new Promise(async function(resolve,reject){
    this.authServe.getUserRoles("ss").then(function (data) {

      var curentRoles = data['result']['roles'];

      var allowedArray = [];


      if (curentRoles.includes(environment.obs_designer)) {
        allowedArray.push("/workspace");
        allowedArray.push("/workspace/create");
        allowedArray.push("/workspace/under-review");
      }

      if (curentRoles.includes(environment.obs_reviewer)) {
        allowedArray.push("/workspace");
        allowedArray.push("/workspace/up-for-review");
        allowedArray.push("/workspace/publish");
      }



      if (allowedArray.includes(this.url)) {
        return true;
      } else {
        return false;

      }

    });

    // },(error)=>{

    //   return false;
    //   // console.log("err",error);
    // }
    // );
    // console.log("last line");
    // return false;
    // });
  }

  //
  // canActivateChild(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean {
  //   return this.canActivate(route, state);
  // }

  /* . . . */



}