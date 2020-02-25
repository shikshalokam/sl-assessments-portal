/** 
* name : CriteriaListComponent.ts
* author : Rakesh
* created-date : 03-Dec-2019
* Description : To Maintain the delete Confirmation .
*/

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss']
})
// Delete confirmation
export class DeleteConfirmComponent {
  title: string;
  message: string;

  constructor(public dialogRef: MatDialogRef<DeleteConfirmComponent>
    , @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {

    /**
     * Assign Title, if it is having data
     */
    if (data && data.title) {
      this.title = data.title;
    }

    /**
     * Assign the message if having or else static data
     */
    if (data && data.message) {
      this.message = data.message;
    } else {
      this.message = "Do you want to delete ?";
    }

  }

}
/**
 * To Maintain the Confirmation popup
 */
export class ConfirmDialogModel {

  constructor(public title: string, public message: string) {
  }
}
