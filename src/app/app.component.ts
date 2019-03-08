import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from 'shikshalokam';
import { AuthService } from './modules/private-modules/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 


 
  isLoggedIn:boolean;
  footerLink;
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
          value : "headings.homes",
            id:'home',
            anchorLink : "home"
        },
        {
          value : "headings.parentInterview",
            id:'parent',
            anchorLink : "parent"
        },
        {
          value :"headings.reports",
          id:'report',
            anchorLink:"report"
        },
        {
          value :"headings.configurations",
          id:'configurations',
            anchorLink:"configuration"
        }
      ]
      }
  ] 




  constructor(private route : ActivatedRoute,private authService :AuthService ,private translate: TranslateService) {
    localStorage.setItem('canAcess',JSON.stringify(['home','parent','report','configurations']));
    translate.use('en').then(() => {
  
    });
    if (window.screen.width < 760) { // 768px portrait
      this.opened = false;
      this.pushMode = 'push';
    }
    this.currentUser = this.authService.getCurrentUserDetails();
    if(this.currentUser){
      this.isLoggedIn=true;
    }
    else{
      this.isLoggedIn=false;
    }
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

