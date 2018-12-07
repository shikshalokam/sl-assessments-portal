import { Component, OnInit, Input,Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Location } from '@angular/common';
import { UtilityService } from 'src/app/core/services/utility-service';
export interface DialogData {
}
@Component({
  selector: 'app-parent-heading',
  templateUrl: './parent-heading.component.html',
  styleUrls: ['./parent-heading.component.scss']
})

export class ParentHeadingComponent implements OnInit {
@Input()genericHeading : string ; 
 flag : boolean = true;
 noBackButton  = [ 'headings.schoolListHeading' ,];
@Output()sendMarkAsComplete = new EventEmitter<boolean>();
constructor(public dialog: MatDialog, private utilityService : UtilityService) {}


  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result)
        this.sendFlag();
    });
  }
  sendFlag(){
     this.sendMarkAsComplete.emit(this.flag);
  }

  onBack(){
    this.utilityService.onBack();
  }
}
