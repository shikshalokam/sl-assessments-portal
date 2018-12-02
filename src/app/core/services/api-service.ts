import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ParentConfig } from '../../modules/parent-interview/parent-config';
import { environment } from 'src/environments/environment.prod';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
export interface Config {
    message: string;
    status: number;
    result : [
        { 
            name : string,
            id : string,
            externalId :string
        }
    ]
  }
@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }
    configUrl ;

    getParentList( temp :string){
         return this.http.get<Config>(environment.apibaseurl+ParentConfig.parentListFind+temp)
         .pipe(
            catchError(this.handleError)
          );;
    }
    getParentInfo( temp :string) {
        return this.http.get<Config>(environment.apibaseurl+ParentConfig.parentEditFind+temp);
   }
   getSchoolList( ) {
         return this.http.get<Config>(environment.apibaseurl+ParentConfig.schoolListFind);
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        return throwError(
          'Something bad happened; please try again later.');
      };
}