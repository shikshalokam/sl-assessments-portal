import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService,ApiService } from 'shikshalokam';
import { AuthService } from './modules/private-modules/auth-service/auth.service';
import { environment } from 'src/environments/environment';
// import { ApiService } from 'shikshalokam';
// import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean;
  programId;
  assessmentId;
  // links ;
  opened = true;
  pushMode = 'side';
  currentUser;
  logo =" ./assets/shikshalokam.png";
  baseUrl;
  portalName;
  links = [  ];





  constructor(private route : ActivatedRoute,private authService :AuthService ,private translate: TranslateService,private apiService:ApiService) {
    localStorage.setItem('canAcess',JSON.stringify(['home','parent','report','configurations']));
    translate.use('en').then(() => {
  
    });
    if (window.screen.width < 760) { // 768px portrait
      this.opened = false;
      this.pushMode = 'push';
    }
    this.currentUser = this.authService.getCurrentUserDetails();
    this.baseUrl=environment.base_url;
    this.portalName = environment.portal_name;

    
    if(this.currentUser){
      this.isLoggedIn=true;
    }
    else {
      this.isLoggedIn = false;
    }
  }

  async ngOnInit() {

    // let details = this.apiService.get(environment.getProfileDetails);
    let allowedArray = [];
    let res = await this.authService.getUserRoles();

   allowedArray = this.authService.getAllowedUrls();
  

    this. links = [ { 
      linkHeading : "headings.features",
      options:[
        {
          value: "headings.homes",
          id: 'home',
          anchorLink: "home",
          icon:"home"
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
          anchorLink: "/workspace",
          icon:"comment",
          iconName:"comment",
          linkActive:false,
          displayName:"WorkSpace",
          children: [
            {
              value:"Create",
              anchorLink:"/workspace/create",
              route: '',
              icon:"description",
              
            },
            { 
              value:"Drafts",
            anchorLink:"/workspace/draft",
            icon:"description"
            },
            {
              value:"Sent For Review",
              anchorLink:"/workspace/under-review",
              icon:"description"
            },
            {
              value:"Up For Review",
              anchorLink:"/workspace/up-for-review",
              icon:"description"
            },
            {
              value:"Published",
              anchorLink:"/workspace/publish",
              icon:"description"
            }
          ]
        }
      ]
    }
  ]
  }

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

