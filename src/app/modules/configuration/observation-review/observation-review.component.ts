import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observation-review',
  templateUrl: './observation-review.component.html',
  styleUrls: ['./observation-review.component.scss']
})
export class ObservationReviewComponent implements OnInit {

  displayedColumns:any;
  dataSource:any;

  constructor() { }

  categories:any;

   ELEMENT_DATA = [
    {position: 1, name: 'Category 1', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Category 2', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Category 3', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Category 4', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Category 5', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Category 6', weight: 12.0107, symbol: 'C'},
  ];
  

  ngOnInit() {

    this.displayedColumns = ['position', 'name'];
    this.dataSource = this.ELEMENT_DATA;


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

}
