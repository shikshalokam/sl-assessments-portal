import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AuthService } from 'src/app/core';


@Component({
  selector: 'app-parent-interview',
  templateUrl: './parent-interview.component.html',
  styleUrls: ['./parent-interview.component.scss']
})
export class ParentInterviewComponent implements OnInit {

  constructor(private keycloakService: KeycloakService, private auth: AuthService) {

   }

  ngOnInit() {
    console.log(this.auth.getToken())
  }
  
  
}
