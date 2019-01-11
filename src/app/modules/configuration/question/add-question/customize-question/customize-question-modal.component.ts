import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UtilityService, ConfigurationService } from 'src/app/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-customize-question-modal',
  templateUrl: './customize-question-modal.component.html',
  styleUrls: ['./customize-question-modal.component.scss']
})
export class CustomizeQuestionComponent implements OnInit {
  questionArray = [];
  questionCount=0;
  optionCount = 1;
  choicesSecionInvalid= false;
  questionSecionInvalid =false;
  questionChoicesGroup;
  questionGeneralArray = [];
  questionGeneralGroup: FormGroup;
  questionChoicesArray = [];
  questionForm;
  constructor(private utility: UtilityService,private _formBuilder :FormBuilder, private configurationService: ConfigurationService,
    public dialogRef: MatDialogRef<CustomizeQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      console.log(data)
  }
  ngOnInit() {
    this.createForm();
    // this.createDynamicFormArray();
     }
  onCancel(): void {
    this.dialogRef.close();
  }
  
  createForm(){
    this.questionForm =this._formBuilder.group({
      // question : this.setQuestion(),
      questionGroup : [ this.data.questionObject.questionGroup ? this.data.questionObject.questionGroup :'',Validators.required],
      externalId : ['',Validators.required],
      tip : ['',Validators.required],
      responseType : ['',Validators.required],
      required : ['',Validators.required],
      showRemark : ['',Validators.required]
    })
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
      // {
      //   editable: true,
      //   field: "question",
      //   input: "array",
      //   label: "Question",
      //   validation: { required: true },
      //   value: "question",
      //   visible: true,
      //   array: this.getQuestion(),
      //   //  [
      //   //   {
      //   //     editable: true,
      //   //     field: this.questionCount,
      //   //     input: "text",
      //   //     label: "english",
      //   //     validation: { required: true },
      //   //     value: "question",
      //   //     visible: true,
      //   //   },

      //   // ]
      // },
      {
        editable: true,
        field: "questionGroup",
        input: "multiselect",
        label: "Question Group",
        validation: { required: true },
        value: this.data.questionObject.questionGroup,
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
        value: this.data.questionObject.externalId,
        visible: true,
        array: []
      },
      {
        editable: true,
        field: "tip",
        input: "text",
        label: "Tip",
        validation: { required: true },
        value: this.data.questionObject.tip,
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
        value: this.data.questionObject.validation.required,
        visible: true,
        array: []
      },
      {
        editable: true,
        field: "showRemark",
        input: "boolean",
        label: "Show Remark",
        validation: { required: true },
        value: this.data.questionObject.showRemark,
        visible: true,
        array: []
      }
    ]
    console.log(this.questionGeneralArray)
    this.questionGeneralGroup = this.utility.toGroup(this.questionGeneralArray);
    this.resetAllOption();
    this.resetAllQuestion();
  }
  pushOptions() {
    this.questionChoicesArray.push({
      label: "option",
      value: "value"
    })
    this.optionCount++;
  }
  checkValidation(index){
      if(this.questionChoicesArray[index].value == "" ||this.questionChoicesArray[index].label == ""){
        this.choicesSecionInvalid = true ;
        return;
      }
      else {
        this.choicesSecionInvalid =false;
        return;
      } 
  }
  resetAllQuestion(){
    console.log(this.data.questionObject.question);
    this.questionArray = JSON.parse(JSON.stringify(this.data.questionObject.question));
    this.questionCount = this.data.questionObject.question.length;
  }
  addQuestionToArray(){
    this.questionArray.push('Question');
    this.questionCount++;
  }
  removeQuestionFromArray(index){
    this.questionArray.splice(index, 1);
    this.questionCount-= 1;
  }
  checkValidationQuestion(index){
    if(this.questionArray[index] == ""){
      this.questionSecionInvalid = true ;
      return;
    }
    else {
      this.questionSecionInvalid =false;
      return;
    } 
  }


  // editQuestion( edit ){
  //   if(edit == 'add'){
  //     this.questionGeneralArray[0].array.push(
  //       {
  //         editable: true,
  //         field: this.questionCount,
  //         input: "text",
  //         label: "english",
  //         validation: { required: true },
  //         value: "question",
  //         visible: true,
  //       },
  //     )
  //     this.questionCount++;
  //   }
  //   else if (edit == 'reset')
  //   {
  //     this.questionCount = 0;
  //     this.questionGeneralArray[0].array = [
  //       {
  //         editable: true,
  //         field: this.questionCount,
  //         input: "text",
  //         label: "english",
  //         validation: { required: true },
  //         value: "question",
  //         visible: true,
  //       },
  //     ]
  //   }
  //   else {
  //   this.questionGeneralArray[0].array .splice(edit, 1);
  //   }
  
  //   this.questionGeneralGroup = this.utility.toGroup(this.questionGeneralArray);


  // }

  removeOptions(index){
    this.optionCount--;
    this.questionChoicesArray.splice(index, 1);
  }
  resetAllOption(){
    this.questionChoicesArray = this.data.questionObject.options;
    this.optionCount = this.data.questionObject.options.length;
  }


  onUpdate(){
    console.log(this.questionGeneralGroup.getRawValue())
    this.data.questionObject.options =this.questionChoicesArray;
    const storeChangedProperty = this.questionGeneralGroup.getRawValue();
    this.data.questionObject.question = this.questionArray;
    this.data.questionObject.externalId = storeChangedProperty.externalId;
    this.data.questionObject.questionGroup = storeChangedProperty.questionGroup;
    this.data.questionObject.validation.required = storeChangedProperty.required;
    this.data.questionObject.responseType = storeChangedProperty.responseType
    this.data.questionObject.showRemark = storeChangedProperty.showRemark
    this.data.questionObject.tip = storeChangedProperty.tip
    console.log(this.data.questionObject);
    this.dialogRef.close(this.data);

  }



//   getQuestion(){
//     const questionArray = [];
    
//     console.log(this.data.questionObject['question']);
//     this.data.questionObject['question'].forEach(element =>{
//       console.log(element)
//       questionArray.push(
//     {
//       editable: true,
//       field: this.questionCount,
//       input: "text",
//       label: "english",
//       validation: { required: true },
//       value:element,
//       visible: true,
//     }
//       );
//       console.log(questionArray)
//     });
   
//     return questionArray;
//   }
 }