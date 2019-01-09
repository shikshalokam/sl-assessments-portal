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
  generalSettingObjectArray :FormGroup ;
  choicesSettingObjectArray:FormGroup ;
  booleanArray = ['showRemarks', 'isCompleted', 'deleted'];
  arrayArray = ['question', 'options', 'questionGroup'];
  textArraay = ['externalId', 'responseType', "tip"];
  objectArray = ['validation'];

  generalArray = ['question', 'questionGroup', 'tip', 'validation', 'externalId', 'responseType', 'tip', 'showRemarks', 'isCompleted', 'deleted'];
  choicesArray = ['options'];
  validationArray = ['validation'];

  generalObjectArray = [];
  choicesObjectArray = [];
  validationObjectArray = [];
  choicesGroup;
  constructor(private utility: UtilityService, private configurationService: ConfigurationService,
    public dialogRef: MatDialogRef<CustomizeQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    console.log(data);
    
  }
  ngOnInit() {
    this.createGenericData();
    this.createChoicesForm();
    console.log(this.choicesObjectArray);
    console.log(this.choicesSettingObjectArray);
    console.log(this.generalObjectArray);
    console.log(this.generalSettingObjectArray);
    console.log(this.generalSettingObjectArray.getRawValue());
    console.log(this.generalSettingObjectArray.valid);
    console.log(this.choicesSettingObjectArray.valid)
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  onUpdate() {
    this.dialogRef.close();
  }

  createGenericData() {
    console.log("formcreate");
    Object.keys(this.data.questionObject).forEach(element => {
      if (this.generalArray.includes(element)) {
        const object = {
          editable: true,
          field: element,
          input: "",
          label: element,
          validation:
          {
            required: true
          },
          value: null,
          visible: true,
          array: []
        }
        if (this.textArraay.includes(element)) {
          object.input = "text";
        }
        else if (this.arrayArray.includes(element)) {
          object.input = "array";
          this.data.questionObject[element].forEach(arrayOption => {
            console.log()

            const arrayObj = {
              editable: true,
              field: Object.keys(arrayOption)[0],
              input: "text",
              label: arrayOption[Object.keys(arrayOption)[0]],
              validation: { required: true },
              value: null,
              visible: true,
            }
            console.log("beforePush")
            object.array.push(arrayObj);
          });
        }
        else if (this.booleanArray.includes(element)) {
          object.input = "boolean";
          object.value = true;
        }
        console.log(object)
        this.generalObjectArray.push(object);
      }


    });
    // console.log(this.generalObjectArray);
   this.generalSettingObjectArray = this.utility.toGroup(this.generalObjectArray)
    // console.log(this.generalSettingObjectArray);
  }
  createChoicesForm(){
    console.log("ChoicesForm")

    Object.keys(this.data.questionObject).forEach(element => {
      if (this.choicesArray.includes(element)){
        console.log(element)
        const object = {
          editable: true,
          field: element,
          input: "",
          label: "",
          validation:
          {
            required: true
          },
          value: "",
          visible: true,
          array: []
        }
        if(this.arrayArray.includes(element)){
          object.input = "array"
          this.data.questionObject[element].forEach(arrayOption => {
      
            const arrayObj = {
              editable: true,
              field: Object.keys(arrayOption)[0],
              input: "text",
              label: "",
              validation: { required: true },
              value: arrayOption[Object.keys(arrayOption)[0]],
              visible: true,
            }
            console.log("beforePush")
            object.array.push(arrayObj);
          });
        }
    this.choicesObjectArray.push(object);

      }
    },
    );
    // console.log(this.choicesObjectArray);
   this.choicesSettingObjectArray = this.utility.toGroup(this.choicesObjectArray);
    // console.log(this.choicesSettingObjectArray);
  }
}
