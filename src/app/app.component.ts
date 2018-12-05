import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [  
          { 
            linkHeading : "Features",
            options:[ 
                      {
                        value : "parent Interview",
                        anchorLink : "/parent"
                      }
                    ]  
            }
        ] ;
      
}

