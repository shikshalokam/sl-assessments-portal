import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss']
})
export class DeleteConfirmComponent implements OnInit {

  title: string;
  message: string;

  constructor(public dialogRef: MatDialogRef<DeleteConfirmComponent>
     ,@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {

      if(data && data.title){
        this.title = data.title;
      }
    
      console.log("incoming data",data);
      if(data && data.message){
        this.message = data.message;
      }else{
        this.message = "Do you want to delete ?";
      }
     
      }

  ngOnInit() {


  }

}
export class ConfirmDialogModel {

  constructor(public title: string, public message: string) {
  }
}
