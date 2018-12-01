import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api-service';
import { CreateFormGroup } from 'src/app/core/services/create-formgroup-service';
import { FormGroup } from '@angular/forms';
import { startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-parent-edit',
  templateUrl: './parent-edit.component.html',
  styleUrls: ['./parent-edit.component.scss']
})
export class ParentEditComponent implements OnInit {
  sendUrl;
  parentEditData;
  flag=false;
  parentForm:FormGroup;
  constructor(private route :ActivatedRoute ,private apiFetch :ApiService , private createForm :CreateFormGroup) { 
    this.route.params.subscribe(params => {
      this.sendUrl = params["id"];
  });
  this.showConfig(); 
  }
  ngOnInit() {

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
getData(){
  console.log(this.parentForm.controls);
}

} 
