import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

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

  constructor(private apiService: ApiService, private route: ActivatedRoute, public dialog: MatDialog) {
    this.schoolId = this.route.snapshot.paramMap.get('schoolId');
    console.log(this.schoolId)
    this.parentId = this.route.snapshot.paramMap.get('parentId');
    console.log(this.parentId)

  }

  ngOnInit() {
    this.getSurveyQuestions();
  }

  getSurveyQuestions(): void {
    this.apiService.getAssessmentQuestions(this.schoolId).subscribe(successData => {
      console.log(successData);
      if (successData['result'].assessments) {
        this.generalQuestions = successData['result'].assessments[0]['generalQuestions'];
        this.submissionId = successData['result'].assessments[0].submissionId;
        this.getPreviousResponses();
        // [0]['instanceQuestions']
        // this.length = this.generalQuestion.length
        // console.log(this.generalQuestion);
      }
    }, errorData => {

    })
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

  updateCallStatus(callStatus) {
    for (const field of callStatus) {
      this.currentCallStatus[field['field']] = field['value']
    }
    this.submitBtnDisable = this.currentCallStatus['callResponse'] === 'R7' && !this.allQuestionsAnswered ? true : false;
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

  openConfirmDialog(): void {
    const message = `Call status will be updated as ${this.currentCallStatus['label']}`
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: { message: message },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "confirmed") {
        this.submitSurvey();
      }
      console.log('The dialog was closed' + result);
    });
  }
  submitSurvey(): void {
    const payload = this.constructPayload("started");
    this.apiService.submitParentsurvey(this.submissionId, payload).subscribe(response => {
      this.submitCallStatus();
    })
  }

  submitBtnEnable() {

  }

  submitCallStatus() {
    this.apiService.postParentData(this.parentId, this.currentCallStatus).
      subscribe(data => {
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
