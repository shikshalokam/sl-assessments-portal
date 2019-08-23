import { Component, OnInit,ViewChild,TemplateRef,ElementRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-observation-review',
  templateUrl: './observation-review.component.html',
  styleUrls: ['./observation-review.component.scss']
})
export class ObservationReviewComponent implements OnInit {

  displayedColumns:any;
  dataSource:any;
  solutionDetails:any;

  animal: string;
  name: string;
  review = false;

  questionList:any;

  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;

  constructor(public dialog: MatDialog) { }

  categories:any;

   ELEMENT_DATA = [
    {position: 1, name: 'Category 1', l1: "aa", l2: "expr1",l3: "expr1",l4: "expr1",symbol: 'H',createdBy:"ABc"},
    {position: 2, name: 'Category 2', l1: "aa", l2: "expr1",l3: "expr1",l4: "expr1", symbol: 'He',createdBy:"ABc"},
    {position: 3, name: 'Category 3',l1: "aa", l2: "expr1",l3: "expr1",l4: "expr1", symbol: 'Li',createdBy:"ABc"},
    {position: 4, name: 'Category 4', l1: "aa", l2: "expr1",l3: "expr1",l4: "expr1", symbol: 'Be',createdBy:"ABc"},
    {position: 5, name: 'Category 5', l1: "aa", l2: "expr1",l3: "expr1",l4: "expr1", symbol: 'B',createdBy:"ABc"},
    {position: 6, name: 'Category 6', l1: "aa", l2: "expr1",l3: "expr1",l4: "expr1", symbol: 'C',createdBy:"ABc"},
  ];
  

  ngOnInit() {

    this.displayedColumns = ['position', 'name','L1','L2','L3','L4','createdBy','Action'];
    this.dataSource = this.ELEMENT_DATA;


    this.questionList = [
      "School Name",
      "Taluk details",
      "Destic",
      "Pincode"
    ]


    this.solutionDetails = [
      {name:"Observation solution",data:this.ELEMENT_DATA,status:"Pending"},
      {name:"Observation program 2019",data:this.ELEMENT_DATA,status:"Approved"},
      {name:"Observation solution 2019",data:this.ELEMENT_DATA,status:"Pending"},
      {name:"Observation solution karnataka",data:this.ELEMENT_DATA,status:"Pending"},
      {name:"Observation solution karnataka",data:this.ELEMENT_DATA,status:"Rejected"}
  ]


    this.categories =[
      {
      name:"category 1",
    },{
    name:"category 2",
    },{
      name:"category 3",
    },{
      name:"category 4",
    }
  ];
  }

  loadCategoryData(ele){

    console.log("ele",ele);

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(this.callAPIDialog, {
      width: '55%',
      
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
