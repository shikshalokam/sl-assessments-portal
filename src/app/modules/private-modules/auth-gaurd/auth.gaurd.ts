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


@Injectable({
  providedIn: 'root',
})
// export class AuthGuard implements CanActivate, CanActivateChild {
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) { }
  url;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = state.url;
    this.url = state.url;

    console.log("route", this.url);

    var roles = {

      ds_creator: ['/workspace', '/workspace/create']
    }

    // let data = this.authService.getUserRoles("ss");

    // this.authService.getUserRoles("ss").subscribe( data => {
    //   console.log("err",data);
    let data = {
      "_id": "5da6e08f436f9f3cd80b57b9",
      "roles": [
        "OBS_DESIGNER",
        "OBS_REVIEWERS"
      ],
      "status": "active",
      "updatedBy": "e97b5582-471c-4649-8401-3cc4249359bb",
      "createdBy": "e97b5582-471c-4649-8401-3cc4249359bb",
      "userId": "e97b5582-471c-4649-8401-3cc4249359bb",
      "username": "a1",
    };

    var curentRole = data['roles'][0];
    console.log("curentRole", curentRole);


    let role = "OBS_DESIGNER";
    var allowedArray = [];
    switch (role) {

      case role = "OBS_DESIGNER":
        allowedArray.push("/workspace");
        // allowedArray.push("/workspace/create");
        break;

      case role = "OBS_REVIEWERS":
        allowedArray.push("/workspace");
        allowedArray.push("/workspace/create");
        break;

    }

    if (allowedArray.includes(this.url)) {
      return true;
    } else {
      return true;

    }
    // },(error)=>{
    //   console.log("err",error);
    // }
    // )






    // return this.checkProgarmId(url);

    // if(){

    // }
    // return this.checkUser(url)
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

  //
  // canActivateChild(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean {
  //   return this.canActivate(route, state);
  // }

  /* . . . */
}