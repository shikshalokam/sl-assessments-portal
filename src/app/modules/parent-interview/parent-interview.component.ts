import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core';

@Component({
  selector: 'app-parent-interview',
  templateUrl: './parent-interview.component.html',
  styleUrls: ['./parent-interview.component.scss'],
  providers: [
   ]
})
export class ParentInterviewComponent implements OnInit {

  constructor(private auth: AuthService) {

   }

  ngOnInit() {
    console.log(this.auth.getToken())
  }
  
  
}
