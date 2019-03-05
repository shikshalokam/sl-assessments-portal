import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from 'shikshalokam';
import { AuthService } from './modules/private-modules/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 
  footerLink
  programId;
  assessmentId;
  // links ;
  opened = true;
  pushMode = 'side';
  currentUser;
  logo =" ./assets/shikshalokam.png";
  links = [  
    { 
      linkHeading : "headings.features",
      options:[
        {
          value : "headings.parentInterview",
          
            anchorLink : "parent"
        },
        {
          value :"headings.reports",
            anchorLink:"report"
        },
        {
          value :"headings.configurations",
            anchorLink:"configuration"
        }
      ]
      }
  ] 




  constructor(private route : ActivatedRoute,private authService :AuthService ,private translate: TranslateService) {
    translate.use('en').then(() => {
    this.footerLink =[
      {
        name: "Copyright @2019 Shikshalokam",
        line:"|"
      },
      {
        name: "Terms of Service",
        line:"|"
      },
      {
        name: "Privacy Policy",
        line:"|"
      },
      {
        name: "Contact Us",
      }
   ];
  
    });
    if (window.screen.width < 760) { // 768px portrait
      this.opened = false;
      this.pushMode = 'push';
    }
    this.currentUser = this.authService.getCurrentUserDetails();
   }

  ngOnInit() {
  }
   
  onLogout(){
    this.authService.getLogout();
  }
  onResize(event)
  {
    if(event.target.innerWidth < 760)
    {
      this.opened = false;
      this.pushMode = 'push';
    }
    else{
      this.opened = true;
      this.pushMode = 'side';

    }
  } 
}

