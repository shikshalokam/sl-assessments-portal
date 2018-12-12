import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { UtilityService } from 'src/app/core/services/utility-service/utility.service';
import { Router, ActivatedRoute } from '@angular/router';
export interface DialogData {
}
@Component({
  selector: 'app-parent-heading',
  templateUrl: './parent-heading.component.html',
  styleUrls: ['./parent-heading.component.scss']
})

export class ParentHeadingComponent implements OnInit {
  @Input() genericHeading: string;
  @Input() schoolName;
  @Input() atleastOneComplete;
  @Input() schoolId;
  noBackButton = ['headings.schoolListHeading',];
  @Output() sendMarkAsComplete = new EventEmitter<boolean>();
  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog, private utilityService: UtilityService) { }

  ngOnInit() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '450px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result)
        this.sendFlag();
    });
  }
  sendFlag() {
    this.sendMarkAsComplete.emit(true);
  }

  onBack() {
      this.utilityService.onBack();
  }
}
