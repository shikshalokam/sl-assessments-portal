import { Component, OnInit } from '@angular/core';
import { TranslateService } from './core/services/translate-service/translate.service';
// import { environment} from '../environments/environment.prod'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  links = [  
    { 
      linkHeading : "headings.features",
      options:[
        {
          value : "headings.parentInterview",
          anchorLink : "/parent"
        },
        {
          value :"headings.reports",
          anchorLink : "/report"
        },
        {
          value :"headings.configurations",
          anchorLink :"/configuration"
        },
        {
          value :"headings.operations",
          anchorLink :"/operations"
        }
      ]
      }
  ] ;

  constructor(private translate: TranslateService) {
    translate.use('en').then(() => {
      
    });
  }
  ngOnInit(){
    // if (!(environment.production)){
    //   this.links[0].options = [
    //     {
    //       value : "headings.parentInterview",
    //       anchorLink : "/parent"
    //     },
    //     {
    //       value :"headings.reports",
    //       anchorLink : "/report"
    //     },
    //     {
    //       value :"headings.configurations",
    //       anchorLink :"/configuration"
    //     }
    //   ];
    // }
    // else{
    //   this.links[0].options = [
    //     {
    //       value : "headings.parentInterview",
    //       anchorLink : "/parent"
    //     },
    //   ];
    // }
  }
 
      
}

