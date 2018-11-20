import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sl-assessments-portal';
  links = [
    
    //   linkHeading :"APP STORE INFORMATION",
    //   options : [
    //     { 
    //       value :"App Information",
    //       anchorLink : "https://www.google.com/"
    //     },
    //     { 
    //       value :"Pricing & Avability",
    //       anchorLink : "https://www.yahoo.com/"
    //   }
    //   ]
    // },
    // {
    //   linkHeading :"IOS APP",
    //   options : [
    //     { 
    //       value :"1.0 Pending Developer",
    //       anchorLink : "https://www.google.com/"
    //     },
    //     { 
    //       value :"Pricing & Avability",
    //       anchorLink : "https://www.yahoo.com/"
    //   }
    //   ]
    // }
   { 
     linkHeading : "Features",
     options:[ 
              {
                value : "Parent Interview",
                anchorLink : "https://www.google.com/"
        
                }
             ]  
    }
] ;

}

