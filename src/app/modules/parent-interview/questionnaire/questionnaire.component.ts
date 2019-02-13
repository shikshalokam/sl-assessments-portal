import { Component, OnInit , ViewChild, } from '@angular/core';
import {Location} from '@angular/common';
import { ParentService } from 'src/app/core/services/parent-service/parent.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog,   } from '@angular/material';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { MatSnackBar } from '@angular/material';
import { UtilityService } from 'src/app/core/services/utility-service/utility.service';
import { ParentInformationComponent } from '../parent-information/parent-information.component';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  @ViewChild(ParentInformationComponent) parentInfoCmp: ParentInformationComponent; 
  parentInfo: any;
  parentId: string;
  schoolId: string;
  start: number = 0;
  end: number = 1;
  length: number;
  selectResponse: string;
  generalQuestions: any;
  submissionId: any;
  allQuestionsAnswered: boolean;
  currentCallStatus = {};
  submitBtnDisable: boolean;
  previousResponses: any;
  callstatusLabel: any;
  parentInterviewCompleted: boolean;
  remarksObj = { remarks: "" };
  schoolName: string;
  currentParentType: any;
  disableNext: boolean = false;



  constructor(private parentService: ParentService, private route: ActivatedRoute, 
    public dialog: MatDialog, private snackBar : MatSnackBar, private location: Location, private utils: UtilityService) {
    this.schoolId = this.route.snapshot.paramMap.get('schoolId');
    this.schoolName = this.route.snapshot.paramMap.get('schoolName')
    this.parentId = this.route.snapshot.paramMap.get('parentId');
  }

  ngOnInit() {
    this.utils.loaderShow();
    this.getSurveyQuestions();
  }


  goBack() {
    this.location.back();
  }
  getSurveyQuestions(): void {
    this.parentService.getAssessmentQuestions(this.schoolId).subscribe(successData => {
      if (successData['result'].assessments) {
        this.generalQuestions = successData['result'].assessments[0]['generalQuestions'];

        this.submissionId = successData['result'].assessments[0].submissionId;
        this.generalQuestions[0]['instanceQuestions'][0].value = [];
        this.getPreviousResponses();

      }
    }, (error) => {

      ;
    })
  }


  getPreviousResponses(): void {
    this.parentService.getParentResponses(this.submissionId, this.parentId).subscribe(response => {
      this.currentParentType = this.parentInfoCmp.getParentInfo().type;

      console.log(this.currentParentType)
      if (response['result']) {
        const resp = response['result'].answers;
        if (resp) {
          for (const key of Object.keys(resp)) {
            this.previousResponses = resp[key].value;
          }
          this.mapPreviousResponse()
          if (response['result'].status === 'completed') {
            this.parentInterviewCompleted = true;
          }
        } else {
          this.utils.loaderHide();
          this.generalQuestions[0]['instanceQuestions'][0].value = this.currentParentType;
        }
      } else {
        //console.log(this.currentCallStatus['type'] +"hihiii")
        //console.log(this.generalQuestions[0]['instanceQuestions'][0].value)
        this.generalQuestions[0]['instanceQuestions'][0].value = this.currentParentType;
        this.utils.loaderHide();

      }

      // //console.log(this.previousResponses)
    },(error)=>{
      this.utils.loaderHide();

      this.snackBar.open(error['message'], "Ok", {duration: 3000});
    }
    )
  }


  mapPreviousResponse(): void {
    console.log("yesss")
    for (const question of this.generalQuestions[0]['instanceQuestions']) {
      for (const response of this.previousResponses) {
        if (response[question._id]) {
          question.value = response[question._id].value;
          question.remarks = response[question._id].remarks;
          question.startTime = response[question._id].startTime;
          question.endTime = response[question._id].endtime;
          question.isCompleted = (response[question._id].payload.isCompleted) ? true : false;
        }
      }
    }

    // console.log(JSON.stringify(this.generalQuestions[0]['instanceQuestions']))
    //console.log(this.currentCallStatus['type'] +"hihiii")
    this.generalQuestions[0]['instanceQuestions'][0].value.push( this.currentCallStatus['type']);

    // if(!this.generalQuestions[0]['instanceQuestions'][0].value.length) {
    //   this.generalQuestions[0]['instanceQuestions'][0].value.push( this.currentCallStatus['type']);
    // } else {
    //   this.generalQuestions[0]['instanceQuestions'][0].value = this.generalQuestions[0]['instanceQuestions'][0].value;
    // }
    // this.generalQuestions[0]['instanceQuestions'][0].value.push(!this.generalQuestions[0]['instanceQuestions'][0].value.length ? this.currentCallStatus['type'] : this.generalQuestions[0]['instanceQuestions'][0].value);
    this.utils.loaderHide();

  }

  setcallResponse(select: string) {
    if (select) {
      this.selectResponse = select;
      //console.log(this.selectResponse);
    }
  }

  previousQeustion(): void {
    this.disableNext = false;
    this.checkForCompletionOfQuestion();
    if (this.start) {
      this.generalQuestions[0]['instanceQuestions'][this.start].endTime = Date.now()
      this.start--;
      this.end--;
      this.generalQuestions[0]['instanceQuestions'][this.start].startTime = Date.now()
      if (this.generalQuestions[0]['instanceQuestions'][this.start].visibleIf && !this.checkForDependentVisibility(this.generalQuestions[0]['instanceQuestions'][this.start])) {
        //console.log("visibility: " + this.checkForDependentVisibility(this.generalQuestions[0]['instanceQuestions'][this.start]));
        this.generalQuestions[0]['instanceQuestions'][this.start].validation.required = false;
        this.previousQeustion();
      }
    } else {
      this.checkForCompletionOfInterview();
    }
  }

  updateCallStatus(callStatusObj) {
    for (const field of JSON.parse(callStatusObj).obj) {
      this.currentCallStatus[field['field']] = field['value']
    }
    this.callstatusLabel = JSON.parse(callStatusObj).callStatus.label;
    //console.log(this.callstatusLabel)
    this.submitBtnDisable = this.currentCallStatus['callResponse'] === 'R7' && !this.allQuestionsAnswered ? true : false;
    if (this.generalQuestions && this.generalQuestions[0] && !this.generalQuestions[0]['instanceQuestions'][0].value) {
      this.generalQuestions[0]['instanceQuestions'][0].value =  this.currentCallStatus['type'];

      // if(!this.generalQuestions[0]['instanceQuestions'][0].value.length) {
      //   this.generalQuestions[0]['instanceQuestions'][0].value.push( this.currentCallStatus['type']);
      // } else {
        // this.generalQuestions[0]['instanceQuestions'][0].value = this.generalQuestions[0]['instanceQuestions'][0].value;
      // }
      // this.generalQuestions[0]['instanceQuestions'][0].value = (!this.generalQuestions[0]['instanceQuestions'][0].value) ? this.currentCallStatus['type'] : this.generalQuestions[0]['instanceQuestions'][0].value;
    }

  }

  nextQuestion(): void {
    this.checkForCompletionOfQuestion();
    //console.log(this.end + " " + this.generalQuestions[0]['instanceQuestions'].length)
    if (this.end < this.generalQuestions[0]['instanceQuestions'].length) {
      this.generalQuestions[0]['instanceQuestions'][this.start].endTime = Date.now();
      this.start++;
      this.end++;
      this.generalQuestions[0]['instanceQuestions'][this.start].startTime = Date.now();
      if (this.generalQuestions[0]['instanceQuestions'][this.start].visibleIf && !this.checkForDependentVisibility(this.generalQuestions[0]['instanceQuestions'][this.start])) {
        // //console.log("visibility: " + this.checkForDependentVisibility(this.generalQuestions[0]['instanceQuestions'][this.start]));
        this.generalQuestions[0]['instanceQuestions'][this.start].validation.required = false;
        this.nextQuestion();
      }
    } else {
      this.checkForCompletionOfInterview();
      if (this.allQuestionsAnswered && !this.parentInterviewCompleted) {
        if(!this.checkForDependentVisibility(this.generalQuestions[0]['instanceQuestions'][this.start])) {
          this.previousQeustion();
        }
        this.openCompleteModel("completed")
      } else {
        console.log("in")
        // this.previousQeustion();
        if(!this.checkForDependentVisibility(this.generalQuestions[0]['instanceQuestions'][this.start])) {
          this.previousQeustion();
        }
        this.disableNext = true;
      }
      // if(this.allQuestionsAnswered){
      //   this.snackBar.open("All questions Answered. Please Change the call status to completed and save.","Ok" ,{duration: 10000})
      // } else {
      //   this.snackBar.open("Please complete all the questions and complete the survey", "Ok" ,{duration: 2000})
      // }
    }
  }

  checkForCompletionOfQuestion() {
    const currentQuestionanswer = this.generalQuestions[0]['instanceQuestions'][this.start].value && this.generalQuestions[0]['instanceQuestions'][this.start].value.length ? this.generalQuestions[0]['instanceQuestions'][this.start].value : "";
    if (this.generalQuestions[0]['instanceQuestions'][this.start].validation.required) {
      this.generalQuestions[0]['instanceQuestions'][this.start].isCompleted = currentQuestionanswer ? true : false;
      //console.log(this.generalQuestions[0]['instanceQuestions'][this.start].isCompleted)
    } else {
      this.generalQuestions[0]['instanceQuestions'][this.start].isCompleted = true;
    }
  }

  onCancelDialog() {
    const message = "All your unsaved datas will be lost. Do you want to continue ?"
    // const message = status=== 'save' ? `Call status will be updated as " ${this.callstatusLabel}"`  : `All your unsaved datas will be lost. Do you want to continue ? `
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: { message: message, status: 'cancel' },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result === "save") {
        // this.submitSurvey("started");
        // this.goBack();

      } if (result === "cancel") {
        this.goBack();
      } else {
      }
      //console.log('The dialog was closed' + result);
    });
  }

  openConfirmDialog(status): void {
    const message = "Do you want to save the current changes?"
    // const message = status=== 'save' ? `Call status will be updated as " ${this.callstatusLabel}"`  : `All your unsaved datas will be lost. Do you want to continue ? `
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: { message: message, status: status },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "save") {
        this.submitSurvey("started");
      } if (result === "cancel") {
        this.goBack();
      } else {
      }
      //console.log('The dialog was closed' + result);
    });
  }

  submitSurvey(status): void {
    let surveyStatus = status;
    // if(this.currentCallStatus['callResponse'] === 'R7'){

    // }
    const payload = this.constructPayload(surveyStatus);
    console.log(JSON.stringify(payload))
    this.parentService.submitParentsurvey(this.submissionId, payload).subscribe(response => {
      this.submitCallStatus(status);
    })
  }

  submitCallStatus(status) {
    // if (this.currentCallStatus['type'] !== this.generalQuestions[0]['instanceQuestions'][0].value) {
      this.currentCallStatus['type'] = this.generalQuestions[0]['instanceQuestions'][0].value;
    // }
    // if(status === 'completed'){
    this.currentCallStatus['callResponse'] = status === 'completed' ? "R7" : "";
    // }
    this.parentService.postParentData(this.parentId, this.currentCallStatus).
      subscribe(response => {
        this.snackBar.open(response.message, "Ok", { duration: 3000 });
        this.goBack();
      });
  }



  checkForDependentVisibility(qst): boolean {
    let display = true;
    for (const question of this.generalQuestions[0]['instanceQuestions']) {
      for (const condition of qst.visibleIf) {
        if (condition._id === question._id) {
          if (condition.operator === "||") {
            for (const value of condition.value) {
              if(question.value.includes(value)) {
                return true
              } else {
                display = false;
              }
            }
            return display
            // if (!condition.value.includes(question.value)) {
            //   return false
            // }
          } else {
            // if(question.value.includes(condition.value)) {
            //   return true
            // }
            // console.log(question.value);
            // console.log(question.value + " "  +condition.operator +" " + condition.value + question.value.includes(condition.value))
            return question.value.includes(condition.value)
            // for (const value of question.value) {
            //   if ((eval('"' + value + '"' + condition.operator + '"' + condition.value + '"'))) {
            //     return true
            //   } else {
            //     display = false;
            //   }
            // }
            return display
            // if ((!eval('"' + question.value + '"' + condition.operator + '"' + condition.value + '"'))) {
            //   return false
            // }
            // if(question.value.includes(condition.value)) {

            // }
          }
        }

      }
    }
    return display
  }

  updateValues() {
    //console.log("in update");
    this.checkForCompletionOfQuestion();
    this.checkForCompletionOfInterview();
  }

  checkForCompletionOfInterview() {
    // //console.log(currentQuestionanswer + " " + this.generalQuestions[0]['instanceQuestions'][this.start].isCompleted)
    let completedAllQuestions = true;
    for (const question of this.generalQuestions[0]['instanceQuestions']) {
      if (!question.isCompleted) {
        completedAllQuestions = false;
        // break
      }
    }
    //console.log(completedAllQuestions);
    this.allQuestionsAnswered = completedAllQuestions;

    // this.submitBtnDisable = this.currentCallStatus['callResponse'] === 'R7' && !this.allQuestionsAnswered ? true : false;

  }

  openCompleteModel(status) {
    const message = `All questions are completed. Do you want submit the survey? `
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: { message: message, status: "completed", okBtn: "Complete Survey", remarks: true, remarksData: this.remarksObj },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      // //console.log(result)
      if (result.status === 'completed') {
        this.generalQuestions[0].remarks = result.remarks;
        this.submitSurvey("completed");
      } 
    });
  }

  constructPayload(status) {
    const payload = {
      parentId: this.parentId,
      status: status,
      answers: {}
    }
    for (const question of this.generalQuestions) {
      //console.log(question)
      payload.answers[question._id] = {
        "qid": question._id,
        "value": [],
        "remarks": "",
        "fileName": [
        ],
        "payload": {
          "question": question.question,
          "labels": [],
          "responseType": "matrix",
          "isCompleted": question.isCompleted
        },
        "startTime": question.startTime,
        "endTime": question.endTime,
        "countOfInstances": 1,
      };
      for (const key of Object.keys(question.payload)) {
        payload.answers[question._id][key] = question.payload[key]
      }
      for (const instanceQuestion of question['instanceQuestions']) {
        const obj = {};
        obj[instanceQuestion._id] = {
          "qid": instanceQuestion._id,
          "value": instanceQuestion.value,
          "remarks": instanceQuestion.remarks,
          "fileName": [
          ],
          "payload": {
            "question": instanceQuestion.question,
            "labels": [],
            "responseType": instanceQuestion.responseType,
            "isCompleted": instanceQuestion.isCompleted

          },
          "startTime": instanceQuestion.startTime,
          "endTime": instanceQuestion.endTime,
          "countOfInstances": 1,
        }
        if (instanceQuestion.responseType === "radio") {
          for (const optn of instanceQuestion.options) {
            if (optn.value === instanceQuestion.value) {
              obj[instanceQuestion._id].payload.labels.push(optn.label)
            }
          }
        } else {
          for (const val of instanceQuestion.value) {
            for (const option of instanceQuestion.options) {
              if (val === option.value) {
                obj[instanceQuestion._id].payload.labels.push(option.label)
              }
            }
            // if(optn.value === instanceQuestion.value){
            //   obj[instanceQuestion._id].payload.labels.push(optn.label)
            // }
          }
        }
        for (const key of Object.keys(instanceQuestion.payload)) {
          obj[instanceQuestion._id][key] = instanceQuestion.payload[key]
        }
        payload.answers[question._id].value.push(obj)
      }
    }
    return payload
  }





}
