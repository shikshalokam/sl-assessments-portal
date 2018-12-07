import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api-service';
import { CreateFormGroup } from 'src/app/core/services/create-formgroup-service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from 'src/app/core/services/utility-service';
import { Location } from '@angular/common';

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
  error;
  headings = 'headings.parentInfoHeading';
  constructor(private location: Location,private route :ActivatedRoute,private showLoader : UtilityService ,private apiFetch :ApiService , private createForm :CreateFormGroup , private http :HttpClient) { 
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
      this.showLoader.loaderShow();

  this.apiFetch.getParentInfo(this.sendUrl)
      .subscribe(data => {
        console.log(data);
        this.parentEditData = data.result;
        for(let i =0;i<this.parentEditData.length;i++){
          if(this.parentEditData[i]['field'] == "callResponse")
          {
            this.parentEditData[i].visible = false ;
            console.log(this.parentEditData[i].visible);
          }
        }
        this.parentForm = this.createForm.toGroup(data.result) ;
        this.showLoader.loaderHide();
        console.log(this.parentForm);
        console.log(this.parentEditData);

      },
      (error) => {
        this.error = error;
      }
      );
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
  onCancel(){
    this.location.back();
  }
} 
