/** 
* name : home Component.ts
* author : Rakesh
* created-date : 03-Dec-2019
* Description : To load the home and Initial component.
*/

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../modules/private-modules/auth-service/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    curUser:string;

  constructor(private authService:AuthService) { 
    this.curUser=this.authService.userName;
  }


  // Initial loading after the construction
  ngOnInit() {
  }

}