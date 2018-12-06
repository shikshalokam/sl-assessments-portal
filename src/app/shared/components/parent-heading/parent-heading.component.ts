import { Component, OnInit, Input,Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Location } from '@angular/common';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-parent-heading',
  templateUrl: './parent-heading.component.html',
  styleUrls: ['./parent-heading.component.scss']
})

export class ParentHeadingComponent implements OnInit {
@Input()genericHeading : string ; 
 flag : boolean = true;
@Output()flagValue = new EventEmitter<boolean>();
constructor(public dialog: MatDialog, private location : Location) {}


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
    console.log(this.flag);
     this.flagValue.emit(this.flag);
     console.log("flag emitted");
  }

  onBack(){
    this.location.back();
  }
}
