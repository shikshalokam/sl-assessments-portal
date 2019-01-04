import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
@Input() newQuestion :any ;
  constructor() { }

  ngOnInit() {
  }

}
