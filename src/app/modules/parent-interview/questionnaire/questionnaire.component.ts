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
  x = 0; 
  length : number;
  selectResponse :string;
  generalQuestion : [];
  error;
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
      console.log(successData);
      if(successData['result'].assessments){
        this.generalQuestion = successData['result'].assessments[0]['generalQuestions'][0]['instanceQuestions'];
        this.length = this.generalQuestion.length
        console.log(this.generalQuestion);
      }
    },(error) => {
      this.error = error;
      ;})
  }

  setcallResponse(select :string){
    if(select){
      this.selectResponse = select;
      console.log(this.selectResponse);
    }
  }

  nextQuestion(){
    if( this.x < this.length -1)
      this.x = this.x + 1; 
  }
  previousQuestion(){
    if(this.x > 0)
      this.x = this.x - 1; 
  }

}
