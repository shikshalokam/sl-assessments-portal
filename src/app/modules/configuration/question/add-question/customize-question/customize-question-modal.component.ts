import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UtilityService } from 'shikshalokam';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { element } from '@angular/core/src/render3';
import { ConfigurationService } from '../../../configuration-service/configuration.service';
@Component({
  selector: 'app-customize-question-modal',
  templateUrl: './customize-question-modal.component.html',
  styleUrls: ['./customize-question-modal.component.scss']
})
export class CustomizeQuestionComponent implements OnInit {
  questionCount;
  optionCount ;
  questionForm;
  choiceForm;

  constructor(private utility: UtilityService,private _formBuilder :FormBuilder, private configurationService: ConfigurationService,
    public dialogRef: MatDialogRef<CustomizeQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      console.log(data)
  }
  ngOnInit() {
    this.createForm();
     }
  onCancel(): void {
    this.dialogRef.close();
  }
  
  createForm(){
    this.questionForm = this._formBuilder.group({
      question : this.setQuestion(),
      questionGroup : [ this.data.questionObject.questionGroup ? this.data.questionObject.questionGroup :'',Validators.required],
      externalId : [ this.data.questionObject._id ? this.data.questionObject._id :'',Validators.required],
      tip :  [ this.data.questionObject.tip ? this.data.questionObject.tip :'',Validators.required],
      responseType :  [ this.data.questionObject.responseType ? this.data.questionObject.responseType :'',Validators.required],
      required : [ this.data.questionObject.validation.required ? this.data.questionObject.validation.required :'',Validators.required],
      showRemarks :  [ this.data.questionObject.showRemarks ? this.data.questionObject.showRemarks :''],
    });

    this.choiceForm = this._formBuilder.group({
      options : this.setOption(),
    })
  }
  responseTypeOption =[
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
    },
    {
      label : "datePicker",
      value : "datePicker"
    }
  ];

  questionGroupOption = [
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
  ];
  
  setQuestion(){
    let arr = new FormArray([])
    this.questionCount = this.data.questionObject.question.length;
    this.data.questionObject.question.forEach(level => {
      arr.push(this._formBuilder.group({ 
        question :[level ? level :'',Validators.required]
      }))
    })
    return arr;
  }
  setOption(){
    let arr = new FormArray([])
    this.optionCount = this.data.questionObject.options.length;
    this.data.questionObject.options.forEach(level => {
      arr.push(this._formBuilder.group({ 
        label :[level.label ? level.label  :'',Validators.required],
        value :[level.value ? level.value  :'',Validators.required],
      }))
    })
    return arr;
  }

  addNewQuestion(control) {
    control.push(
      this._formBuilder.group({
        question: ['',Validators.required]
      }))
      this.questionCount+=1;
  }
  removeAllQuestion(){
    this.questionForm.controls.question = this.setQuestion();
    this.data.questionObject.question = ['question']
    this.questionCount =this.data.questionObject.question.length;
  }
  deleteQuestion(control, index) {
    control.removeAt(index)
    this.questionCount-=1;
  }

  addNewOption(control) {
    const varible = this.optionCount+1;
    this.data.questionObject.options.push (
      {
        label :"option"+varible,
        value :"option"+varible
      }
    );
    control.push(
      this._formBuilder.group({
        label: ['option'+varible ,Validators.required],
        value: ['option'+varible ,Validators.required],
      }))
      this.optionCount += 1;
  }
  removeAllOption(){
    this.data.questionObject.options = [
      {
        label :"option1",
        value :"option1"
      },
      {
        label :"option2",
        value :"option2"
      }
    ]
    this.choiceForm.controls.options = this.setOption();
    this.optionCount = 2;
  }
  deleteOption(control, index) {
    this.data.questionObject.options.splice(this.data.questionObject.options.length - 1 , 1);
    control.removeAt(index)
    this.optionCount -= 1;
  }
  onUpdate(){
    const questionArray = this.questionForm.getRawValue().question;
    this.data.questionObject.question = [];
    questionArray.forEach(question => {
      this.data.questionObject.question.push(question.question);
    })
    this.dialogRef.close(this.data);
  }
  changeResponseType(responseType){
    this.data.questionObject.responseType = responseType.value;
    if ( responseType.value == 'radio' || responseType.value == 'select')
    {
      this.data.questionObject.options.push (
        {
          label : "option1",
          value : "option1"
        },
        {
          label : "option2",
          value : "option2"
        }
      );

      this.choiceForm.controls.options = this.setOption();
    }
    if ( responseType.value != 'radio' && responseType.value != 'select' )
    {
      this.data.questionObject.options = [];
      this.choiceForm.controls.options = this.setOption();

    }
  }

 }