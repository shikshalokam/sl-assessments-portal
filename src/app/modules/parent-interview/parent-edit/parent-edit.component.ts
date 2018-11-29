import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParentApiFetch } from 'src/app/core/services/parent-api-fetch-service';
import { ParentConfig } from '../parent-config';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-parent-edit',
  templateUrl: './parent-edit.component.html',
  styleUrls: ['./parent-edit.component.scss']
})
export class ParentEditComponent implements OnInit {
  sendUrl;
  parentEditData;
  constructor(private route :ActivatedRoute ,private apiFetch :ParentApiFetch) { 
    this.route.params.subscribe(params => {
      console.log( params["id"] );
      this.sendUrl = ParentConfig.parentEditFind + params["id"];

  });
  this.showConfig();
  console.log(this.parentEditData);

  }

  ngOnInit() {
    
}

showConfig() {
  this.apiFetch.getConfig(environment.apibaseurl,this.sendUrl)
      .subscribe(data => {
        console.log(data);
        this.parentEditData = data;
      });
}
} 
