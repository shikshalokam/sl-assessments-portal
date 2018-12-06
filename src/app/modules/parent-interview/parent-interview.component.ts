import { Component, OnInit } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateService } from 'src/app/core/services/translate-service/translate.service';

@Component({
  selector: 'app-parent-interview',
  templateUrl: './parent-interview.component.html',
  styleUrls: ['./parent-interview.component.scss'],
  providers: [
   ]
})
export class ParentInterviewComponent implements OnInit {

  constructor(private translate: TranslateService) {
   }

  ngOnInit() {
  }
  
  
}
