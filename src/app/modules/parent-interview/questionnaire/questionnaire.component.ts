import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  parentInfo: any;
  parentId: string;
  schoolId: string;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { 
    this.schoolId = this.route.snapshot.paramMap.get('schoolId');
    console.log(this.schoolId)
    this.parentId = this.route.snapshot.paramMap.get('parentId');
    console.log(this.parentId)

  }

  ngOnInit() {
    this.getSurveyQuestions();
  }


  getSurveyQuestions() : void {
    this.apiService.getAssessmentQuestions(this.schoolId).subscribe(successData => {
      if(successData['result'].assessments){

      }
    }, errorData => {

    })
  }



}
