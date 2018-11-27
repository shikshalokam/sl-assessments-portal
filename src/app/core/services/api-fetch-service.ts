import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
export class ApiFetch {
    constructor(private http: HttpClient) { }
    configUrl ;

    getConfig( baseurl :string , temp :string) {
         this.configUrl = baseurl+temp;
         return this.http.get<Config>(this.configUrl);
    }
}