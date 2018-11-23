import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response} from '@angular/http';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  data : any ={};
  constructor( private http :HttpClient) {
    this.getData();
   }

  ngOnInit() {}
   getData(){
    let headers = new HttpHeaders();
    headers.set('Content-Tyasdpe', 'text/html');


    var firstHeaders = new Headers();
      firstHeaders.append('X-authenticated-user-token','bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJwZU9VQ3ZTVUR2ekprYzlyeXJVNTNWLXV6ME1nOFVCbk4tSzJfTmFpX2N3In0.eyJqdGkiOiIzMjFjNDFiZS0zYWRlLTQ4NjMtOGU3Yy0zYWU3YTE1NDljMWIiLCJleHAiOjE1NDMwNjYzODksIm5iZiI6MCwiaWF0IjoxNTQyOTc5OTg5LCJpc3MiOiJodHRwczovL2Rldi5zaGlrc2hhbG9rYW0ub3JnL2F1dGgvcmVhbG1zL3N1bmJpcmQiLCJhdWQiOiJzbC1pb25pYy1jb25uZWN0Iiwic3ViIjoiZTk3YjU1ODItNDcxYy00NjQ5LTg0MDEtM2NjNDI0OTM1OWJiIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2wtaW9uaWMtY29ubmVjdCIsIm5vbmNlIjoiOWZkYjI2YWYtMDgzNy00NzdhLTk1OWMtNjljZmViZjgxNmM2IiwiYXV0aF90aW1lIjoxNTQyOTQ4MzIxLCJzZXNzaW9uX3N0YXRlIjoiZTk0ZmQwODMtMGNlNi00ZjM1LWEzZDEtZjA1MjFhZTkzMzllIiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sIm5hbWUiOiJTYW5kZWVwIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYTFAc2hpa3NoYWxva2FtZGV2IiwiZ2l2ZW5fbmFtZSI6IlNhbmRlZXAiLCJmYW1pbHlfbmFtZSI6IiIsImVtYWlsIjoiYTFAc2hpa3NoYWxva2FtZGV2LmRldiJ9.LwDMpgF3GRG15EtUZETtfz-Utu7jSxIh0U5gc4MT8vZY4sQ9zn6O6NJQyZkdq25EpNPfTkB7aXIdkOmbUIKt5s9v2WHLxQIqsNiwpjJb_WeQ4OEmF-WPfbtHWKrO3sO1qbHcDXJZ6Q9ColbT6cO9w97W7rtaXKNkb1X4RiQTwZ5jyzIlfDe1PlOl0FRzBGTle-cAReuhSJ2AVd6FGMPQ1riiIqigOXy-aufDaFR1qkYx_2p0Z7AuYz-rUVO106tmMbb9yCNBeGWuORUHmN38SlycRai8ldDczqOlZvqN37LJwwQ2bzp8oLLjVqbWvElJgizjdCRsF1yHdo5VVTpucA');

      console.log(firstHeaders.get('-authenticated-user-token')) //'image/jpeg'
    
     this.http.get("https://dev.shikshalokam.org/assessment/api/v1/assessors/schools")
     .subscribe(data => 
      {
        console.log(data);
        this.data=data;
      })
   }
  
  }