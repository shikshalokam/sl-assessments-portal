import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  links;
  constructor(private translate: TranslateService, private route : ActivatedRoute) {

    translate.use('en').then(() => {
    
    });
    
    this.links = [  
      { 
        linkHeading : "headings.features",
        options:[
          {
            value : "headings.parentInterview",
            link :{
              anchorLink : "parent"
            }
          },
          {
            value :"headings.reports",
            link :{
              anchorLink:"report"
            }
          },
          {
            value :"headings.configurations",
            link :{
              anchorLink:"configuration"
            }
          }
        ]
        }
    ] 

  }
  ngOnInit(){
  }
 
      
}

