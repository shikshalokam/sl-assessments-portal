import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ApiService } from 'src/app/core/services/api-service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

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

  constructor(private apiService: ApiService, private route: ActivatedRoute, 
    public dialog: MatDialog, private snackBar : MatSnackBar, private location: Location) {
    this.schoolId = this.route.snapshot.paramMap.get('schoolId');
    console.log(this.schoolId)
    this.parentId = this.route.snapshot.paramMap.get('parentId');
    console.log(this.parentId)

  }

  ngOnInit() {
    this.getSurveyQuestions();
  }

  goBack() {
    this.location.back();
  }
  getSurveyQuestions(): void {
    this.apiService.getAssessmentQuestions(this.schoolId).subscribe(successData => {
      console.log(successData);
      if (successData['result'].assessments) {
        this.generalQuestions = successData['result'].assessments[0]['generalQuestions'];
        console.log(this.currentCallStatus['type'])
        this.generalQuestions[0]['instanceQuestions'][0].value = (this.generalQuestions && !this.generalQuestions[0]['instanceQuestions'][0].value) ? this.currentCallStatus['type']:this.generalQuestions[0]['instanceQuestions'][0].value;
        this.submissionId = successData['result'].assessments[0].submissionId;
        this.getPreviousResponses();
        // [0]['instanceQuestions']
        // this.length = this.generalQuestion.length
        // console.log(this.generalQuestion);
      }
    },(error) => {
      ;})
  }


  getPreviousResponses(): void {
    this.apiService.getParentResponses(this.submissionId, this.parentId).subscribe( response => {
      const resp= response['result'].answers;
      for (const key of Object.keys(resp)) {
        this.previousResponses  = resp[key].value;
      }
      this.mapPreviousResponse()
      // console.log(this.previousResponses)
    })
  }

  mapPreviousResponse(): void {
    for (const question of this.generalQuestions[0]['instanceQuestions']) {
      for (const response of this.previousResponses) {
        if(response[question._id ]){
          question.value = response[question._id ].value;
          question.remarks = response[question._id ].remarks;
          question.startTime = response[question._id ].startTime;
          question.endTime = response[question._id].endtime;
        }
      }
    }
    // this.generalQuestions[0]['instanceQuestions'][0].value = !this.generalQuestions[0]['instanceQuestions'][0].value ? this.currentCallStatus['type']:this.generalQuestions[0]['instanceQuestions'][0].value;
  }

  setcallResponse(select: string) {
    if (select) {
      this.selectResponse = select;
      console.log(this.selectResponse);
    }
  }

  previousQeustion(): void {
    this.checkForCompletionOfQuestion();
    if (this.start) {
      this.start--;
      this.end--;
      if (this.generalQuestions[0]['instanceQuestions'][this.start].visibleIf && !this.checkForDependentVisibility(this.generalQuestions[0]['instanceQuestions'][this.start])) {
        console.log("visibility: " + this.checkForDependentVisibility(this.generalQuestions[0]['instanceQuestions'][this.start]));
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
    console.log(this.callstatusLabel)
    this.submitBtnDisable = this.currentCallStatus['callResponse'] === 'R7' && !this.allQuestionsAnswered ? true : false;
    if(this.generalQuestions && this.generalQuestions[0] && !this.generalQuestions[0]['instanceQuestions'][0].value) {
      this.generalQuestions[0]['instanceQuestions'][0].value = (this.generalQuestions && !this.generalQuestions[0]['instanceQuestions'][0].value) ? this.currentCallStatus['type']:this.generalQuestions[0]['instanceQuestions'][0].value;
    }

  }

  nextQuestion(): void {
    this.checkForCompletionOfQuestion();
    if (this.end < this.generalQuestions[0]['instanceQuestions'].length) {
      this.start++;
      this.end++;
      if (this.generalQuestions[0]['instanceQuestions'][this.start].visibleIf && !this.checkForDependentVisibility(this.generalQuestions[0]['instanceQuestions'][this.start])) {
        // console.log("visibility: " + this.checkForDependentVisibility(this.generalQuestions[0]['instanceQuestions'][this.start]));
        this.generalQuestions[0]['instanceQuestions'][this.start].validation.required = false;
        this.nextQuestion();
      }
    } else {
      this.checkForCompletionOfInterview();
      if(this.allQuestionsAnswered){
        this.snackBar.open("All questions Answered. Please Change the call status to completed and save.","Ok" ,{duration: 10000})
      } else {
        this.snackBar.open("Please complete all the questions and complete the survey")
      }
    }
  }

  checkForCompletionOfQuestion() {
    const currentQuestionanswer = this.generalQuestions[0]['instanceQuestions'][this.start].value && this.generalQuestions[0]['instanceQuestions'][this.start].value.length ? this.generalQuestions[0]['instanceQuestions'][this.start].value : "";
    if (this.generalQuestions[0]['instanceQuestions'][this.start].validation.required) {
      this.generalQuestions[0]['instanceQuestions'][this.start].isCompleted = currentQuestionanswer ? true : false;
      console.log(this.generalQuestions[0]['instanceQuestions'][this.start].isCompleted)
    } else {
      this.generalQuestions[0]['instanceQuestions'][this.start].isCompleted = true;
    }
  }

  openConfirmDialog(status): void {
    const message = status=== 'save' ? `Call status will be updated as " ${this.callstatusLabel}"`  : `All your unsaved datas will be lost. Do you want to continue ? `
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: { message: message , status: status},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "save") {
        this.submitSurvey();
      } if(result === "cancel") {
        this.goBack();
      }else {
      }
      console.log('The dialog was closed' + result);
    });
  }
  submitSurvey(): void {
    let surveyStatus = this.currentCallStatus['callResponse'] === 'R7' ? "completed" : "started";
    // if(this.currentCallStatus['callResponse'] === 'R7'){

    // }
    const payload = this.constructPayload(surveyStatus);
    this.apiService.submitParentsurvey(this.submissionId, payload).subscribe(response => {
      this.submitCallStatus();
    })
  }

  submitCallStatus() {
    if(this.currentCallStatus['type'] !== this.generalQuestions[0]['instanceQuestions'][0].value){
      this.currentCallStatus['type'] = this.generalQuestions[0]['instanceQuestions'][0].value;
    }
    this.apiService.postParentData(this.parentId, this.currentCallStatus).
      subscribe(response => {
        this.snackBar.open(response.message, "Ok", {duration: 3000});
        this.goBack();
      });
  }

  checkForDependentVisibility(qst): boolean {
    let display = true;
    for (const question of this.generalQuestions[0]['instanceQuestions']) {
      for (const condition of qst.visibleIf) {
        if (condition._id === question._id) {
          if (condition.operator === "||") {
            if (!condition.value.includes(question.value)) {
              return false
            }
          } else {
            if ((!eval('"' + question.value + '"' + condition.operator + '"' + condition.value + '"'))) {
              return false
            }
          }
        }

      }
    }
    return display
  }

  updateValues() {
    console.log("in update");
    this.checkForCompletionOfQuestion();
    this.checkForCompletionOfInterview();
  }

  checkForCompletionOfInterview() {
    // console.log(currentQuestionanswer + " " + this.generalQuestions[0]['instanceQuestions'][this.start].isCompleted)
    let completedAllQuestions = true;
    for (const question of this.generalQuestions[0]['instanceQuestions']) {
      if (!question.isCompleted) {
        completedAllQuestions = false;
        break
      }
    }
    console.log(completedAllQuestions);
    this.allQuestionsAnswered = completedAllQuestions;
    this.submitBtnDisable = this.currentCallStatus['callResponse'] === 'R7' && !this.allQuestionsAnswered ? true : false;

  }

  constructPayload(status) {
    const payload = {
      parentId: this.parentId,
      status: status,
      answers: {}
    }
    for (const question of this.generalQuestions) {
      console.log(question)
      payload.answers[question._id] = {
        "qid": question.qid,
        "value": [],
        "remarks": "",
        "fileName": [
        ],
        "payload": {
          "question": question.question,
          "labels": [],
          "responseType": "matrix"
        },
        "startTime": 1543765755948,
        "endTime": Date.now(),
        "countOfInstances": 1,
      };
      for (const key of Object.keys(question.payload)) {
        payload.answers[question._id][key] = question.payload[key]
      }
      for (const instanceQuestion of question['instanceQuestions']) {
        const obj = {};
        obj[instanceQuestion._id] = {
          "qid": instanceQuestion.qid,
          "value": instanceQuestion.value,
          "remarks": instanceQuestion.remarks,
          "fileName": [
          ],
          "payload": {
            "question": instanceQuestion.question,
            "labels": [],
            "responseType": "matrix"
          },
          "startTime": 1543765755948,
          "endTime": Date.now(),
          "countOfInstances": 1,
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
