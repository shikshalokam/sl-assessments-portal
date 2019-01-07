import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UtilityService, ConfigurationService } from 'src/app/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-customize-question-modal',
  templateUrl: './customize-question-modal.component.html',
  styleUrls: ['./customize-question-modal.component.scss']
})
export class CustomizeQuestionComponent implements OnInit {
  questionGroup :FormGroup;
  ;
 
  constructor(private utility : UtilityService , private configurationService : ConfigurationService,
    public dialogRef: MatDialogRef<CustomizeQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data ) { 
      console.log(data);
    }
  ngOnInit() {
   
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  onUpdate(){
    this.dialogRef.close();
  }

}
