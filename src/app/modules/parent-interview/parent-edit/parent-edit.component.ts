import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api-service';
import { CreateFormGroup } from 'src/app/core/services/create-formgroup-service';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import { ParentConfig } from '../parent-config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent-edit',
  templateUrl: './parent-edit.component.html',
  styleUrls: ['./parent-edit.component.scss']
})
export class ParentEditComponent implements OnInit {
  sendUrl;
  parentEditData;
  updateData
  parentForm:FormGroup;
  isEdit = false;
  breadcrumbRoute ;
  schoolId;
  // parentInfoHeading = "Parent Information";  
  constructor(private route :ActivatedRoute ,private apiFetch :ApiService , private createForm :CreateFormGroup , private http :HttpClient) { 
    this.route.params.subscribe(params => {
      this.sendUrl = params["id"];
      console.log(this.sendUrl)
  });

  this.showConfig(); 
  }
  ngOnInit() {
    
    this.breadcrumbRoute = [ 
      {
        label : "Parent List",
        url : "/parent/parent-list/",
        id: this.schoolId
      },
      {
        label : "Parent Information",
        url : "/parent/parent-edit/",
        id: this.sendUrl
      }
  ];
  }
    showConfig() {
  this.apiFetch.getParentInfo(this.sendUrl)
      .subscribe(data => {
        console.log(data);
        this.parentEditData = data.result;
        this.parentForm = this.createForm.toGroup(data.result) ;
        
        console.log(this.parentForm);
        console.log(this.parentEditData);

      });
}
  getUpdateData(){
  this.updateData = this.parentForm.getRawValue(); 
  console.log(this.updateData)
    this.apiFetch.postParentData(this.sendUrl,this.updateData).
    subscribe(data => {
      console.log(data);
   });
   this.isEdit=!this.isEdit;
  }
  onEdit(){
    this.isEdit = !this.isEdit ;
  }
} 
