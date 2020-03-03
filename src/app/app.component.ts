/**
 * Name : app.component.ts
 * Author : Rakesh
 * Created-date : 16-Dec-2019
 * Description : Initial load of the application.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService, ApiService } from 'shikshalokam';
import { AuthService } from './modules/private-modules/auth-service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// To Load initial component 
export class AppComponent implements OnInit {
  isLoggedIn: boolean;
  programId;
  assessmentId;
  // links ;
  opened = true;
  pushMode = 'side';
  currentUser;
  logo = " ./assets/shikshalokam.png";
  baseUrl;
  portalName;
  links = [];

  constructor(private route: ActivatedRoute, private authService: AuthService, private translate: TranslateService, private apiService: ApiService) {
    localStorage.setItem('canAcess', JSON.stringify(['home', 'parent', 'report', 'configurations']));
    translate.use('en').then(() => {

    });
    if (window.screen.width < 760) { // 768px portrait
      this.opened = false;
      this.pushMode = 'push';
    }
    this.currentUser = this.authService.getCurrentUserDetails();
    this.baseUrl = environment.base_url;
    this.portalName = environment.portal_name;


    if (this.currentUser) {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
  }

  /**
     * Angular first displays the data-bound properties and sets the directive/component's input properties.
     *  Called once, after the first ngOnChanges().
     */
  async ngOnInit() {
    let res = await this.authService.getUserRoles();
    let roles = localStorage.getItem("roleInfo");
    let rolesI = JSON.parse(roles);
    let roleInfo = rolesI['roles'];
    let subMenusOfWorkSpace = [];
    let createSubMenu = {
      value: "Create",
      anchorLink: "/workspace/create",
      route: '',
      icon: "description",
    }

    let draftMenu = {
      value: "Drafts",
      anchorLink: "/workspace/draft",
      icon: "description"
    };

    let review = {
      value: "Sent For Review",
      anchorLink: "/workspace/under-review",
      icon: "rate_review"
    }

    let upForReview = {
      value: "Up For Review",
      anchorLink: "/workspace/up-for-review",
      icon: "rate_review"
    }

    let publishMenu = {
      value: "Published",
      anchorLink: "/workspace/publish",
      icon: "description"
    }

    if (roleInfo.includes(environment.obs_designer)) {
      subMenusOfWorkSpace.push(createSubMenu);
      subMenusOfWorkSpace.push(draftMenu);
      subMenusOfWorkSpace.push(review);
    }
    if (roleInfo.includes(environment.obs_reviewer)) {
      subMenusOfWorkSpace.push(upForReview);
      subMenusOfWorkSpace.push(publishMenu);
    }

    this.links = [{
      linkHeading: "headings.features",
      options: [
        {
          value: "headings.homes",
          id: 'home',
          anchorLink: "home",
          icon: "home"
        },
        // {
        //   value: "headings.parentInterview",
        //   id: 'parent',
        //   anchorLink: "parent",
        //   icon:"supervisor_account"
        // },
        // {
        //   value: "headings.reports",
        //   id: 'report',
        //   anchorLink: "report",
        //   icon:"description"
        // },
        {
          value: "WorkSpace",
          // value: "headings.configurations",
          id: 'configurations',
          anchorLink: "/workspace/create",
          icon: "comment",
          iconName: "comment",
          linkActive: false,
          displayName: "WorkSpace",
          children: subMenusOfWorkSpace
        }
      ]
    }
    ]
  }

  /**
   * This logout function is used to make user logout form the application
   */
  onLogout() {
    this.authService.getLogout();
  }
  onResize(event) {
    if (event.target.innerWidth < 760) {
      this.opened = false;
      this.pushMode = 'push';
    }
    else {
      this.opened = true;
      this.pushMode = 'side';

    }
  }
}
