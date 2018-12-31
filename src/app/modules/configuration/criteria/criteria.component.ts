import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {

  constructor() { 
    console.log("criteria is called")

  }

  ngOnInit() {
    console.log("criteria is called")
  }

}
