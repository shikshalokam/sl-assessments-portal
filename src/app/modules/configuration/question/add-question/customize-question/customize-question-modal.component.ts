import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UtilityService, ConfigurationService } from 'src/app/core';
import { FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-customize-question-modal',
  templateUrl: './customize-question-modal.component.html',
  styleUrls: ['./customize-question-modal.component.scss']
})
export class CustomizeQuestionComponent implements OnInit {
  // generalSettingObjectArray :FormGroup ;
  // choicesSettingObjectArray:FormGroup ;
  // booleanArray = ['showRemarks', 'isCompleted', 'deleted'];
  // arrayArray = ['question', 'options', 'questionGroup'];
  // textArraay = ['externalId', 'responseType', "tip"];
  // objectArray = ['validation'];

  // generalArray = ['question', 'questionGroup', 'tip', 'validation', 'externalId', 'responseType', 'tip', 'showRemarks', 'isCompleted', 'deleted'];
  // choicesArray = ['options'];
  // validationArray = ['validation'];

  // generalObjectArray = [];
  // choicesObjectArray = [];
  // validationObjectArray = [];
  // choicesGroup;
  choicesSecionInvalid= false;
  questionChoicesGroup;
  questionGeneralArray = [];
  questionGeneralGroup: FormGroup;
  questionChoicesArray = [];
  constructor(private utility: UtilityService, private configurationService: ConfigurationService,
    public dialogRef: MatDialogRef<CustomizeQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {

  }
  ngOnInit() {
    this.createDynamicFormArray();
    // this.createGenericData();
    // this.createChoicesForm();
    // console.log(this.choicesObjectArray);
    // console.log(this.choicesSettingObjectArray);
    // console.log(this.generalObjectArray);
    // console.log(this.generalSettingObjectArray);
    // console.log(this.generalSettingObjectArray.getRawValue());
    // console.log(this.generalSettingObjectArray.valid);
    // console.log(this.choicesSettingObjectArray.valid)
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  onUpdate() {
    this.dialogRef.close();
  }

  // createGenericData() {
  //   console.log("formcreate");
  //   Object.keys(this.data.questionObject).forEach(element => {
  //     if (this.generalArray.includes(element)) {
  //       const object = {
  //         editable: true,
  //         field: element,
  //         input: "",
  //         label: element,
  //         validation:
  //         {
  //           required: true
  //         },
  //         value: null,
  //         visible: true,
  //         array: []
  //       }
  //       if (this.textArraay.includes(element)) {
  //         object.input = "text";
  //       }
  //       else if (this.arrayArray.includes(element)) {
  //         object.input = "array";
  //         this.data.questionObject[element].forEach(arrayOption => {
  //           console.log()

  //           const arrayObj = {
  //             editable: true,
  //             field: Object.keys(arrayOption)[0],
  //             input: "text",
  //             label: arrayOption[Object.keys(arrayOption)[0]],
  //             validation: { required: true },
  //             value: null,
  //             visible: true,
  //           }
  //           console.log("beforePush")
  //           object.array.push(arrayObj);
  //         });
  //       }
  //       else if (this.booleanArray.includes(element)) {
  //         object.input = "boolean";
  //         object.value = true;
  //       }
  //       console.log(object)
  //       this.generalObjectArray.push(object);
  //     }


  //   });
  //   // console.log(this.generalObjectArray);
  //  this.generalSettingObjectArray = this.utility.toGroup(this.generalObjectArray)
  //   // console.log(this.generalSettingObjectArray);
  // }
  // createChoicesForm(){
  //   console.log("ChoicesForm")

  //   Object.keys(this.data.questionObject).forEach(element => {
  //     if (this.choicesArray.includes(element)){
  //       console.log(element)
  //       const object = {
  //         editable: true,
  //         field: element,
  //         input: element,
  //         label: element,
  //         validation:
  //         {
  //           required: true
  //         },
  //         value: "",
  //         visible: true,
  //         array: []
  //       }
  //       if(this.arrayArray.includes(element)){
  //         object.input = "array"
  //         this.data.questionObject[element].forEach(arrayOption => {

  //           const arrayObj = {
  //             editable: true,
  //             field: Object.keys(arrayOption)[0],
  //             input: "text",
  //             label: "",
  //             validation: { required: true },
  //             value: arrayOption[Object.keys(arrayOption)[0]],
  //             visible: true,
  //           }
  //           console.log("beforePush")
  //           object.array.push(arrayObj);
  //         });
  //       }
  //   this.choicesObjectArray.push(object);

  //     }
  //   },
  //   );
  //   // console.log(this.choicesObjectArray);
  //  this.choicesSettingObjectArray = this.utility.toGroup(this.choicesObjectArray);
  //   // console.log(this.choicesSettingObjectArray);
  // }
  createDynamicFormArray() {
    this.questionGeneralArray = [
      {
        editable: true,
        field: "question",
        input: "array",
        label: "Question",
        validation: { required: true },
        value: "question",
        visible: true,
        array: [
          {
            editable: true,
            field: "english",
            input: "text",
            label: "english",
            validation: { required: true },
            value: "English question",
            visible: true,
          },

        ]
      },
      {
        editable: true,
        field: "questionGroup",
        input: "multiselect",
        label: "Question Group",
        validation: { required: true },
        value: "",
        visible: true,
        options: [
          {
            value: "A1",
            label: "All (A1)"
          },
          {
            value: "A2",
            label: "A2 (All if applicable)"
          },
          {
            value: "A3",
            label: "A3 (All Govt)"
          },
          {
            value: "A4",
            label: "A4 (All Private)"
          },
          {
            value: "A5",
            label: "A5 (All 6th- 12th)"
          },
          {
            value: "A6",
            label: "A6 (All Nursery - 5th)"
          },
          {
            value: "A7",
            label: "A7 (Govt.DOE 6th - 12th)"
          },
          {
            value: "A8",
            label: "A8 (Private Nursery - 5th)"
          },
          {
            value: "A9",
            label: "A9 (Private Nursery - 8th / 10th)"
          },
          {
            value: "A10",
            label: "A10 (All Aided)"
          }
        ]
      },
      {
        editable: true,
        field: "externalId",
        input: "text",
        label: "Externa Id",
        validation: { required: true },
        value: "",
        visible: true,
        array: []
      },
      {
        editable: true,
        field: "tip",
        input: "text",
        label: "Tip",
        validation: { required: true },
        value: "",
        visible: true,
        array: []
      },
      {
        editable: true,
        field: "responseType",
        input: "dropdown",
        label: "responseType",
        validation: { required: true },
        value: this.data.questionObject['responseType'],
        visible: true,
        options: [
          {
            value: "radio",
            label: "radio"
          },
          {
            value: "text",
            label: "text"
          },
          {
            value: "select",
            label: "select"
          },
          {
            label: "number",
            value: "number"
          },
          {
            label: "textArea",
            value: "textarea"
          }
        ]
      },
      {
        editable: true,
        field: "required",
        input: "boolean",
        label: "Required",
        validation: { required: true },
        value: true,
        visible: true,
        array: []
      },
      {
        editable: true,
        field: "showRemark",
        input: "boolean",
        label: "Show Remark",
        validation: { required: true },
        value: true,
        visible: true,
        array: []
      }
    ]
    console.log(this.questionGeneralArray)
    this.questionGeneralGroup = this.utility.toGroup(this.questionGeneralArray);
    this.questionChoicesArray = [
      {
        label: "option",
        value: "value"
      },
      {
        label: "option",
        value: "value"
      }

    ];

  }
  pushOptions() {
    this.questionChoicesArray.push({
      label: "option",
      value: "value"
    })
  }
  checkValidation(index){
    const element = this.questionChoicesArray[index];
   console.log(this.questionChoicesArray[index].value)
    console.log(this.questionChoicesArray[index])
      if(this.questionChoicesArray[index].value == "" ||this.questionChoicesArray[index].label == ""){
        this.choicesSecionInvalid = true ;
        return;
      }
    
  }
  checkValidation1(event){
    console.log(event);
  }
}