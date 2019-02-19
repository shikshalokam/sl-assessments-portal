import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url : string){
    return this.http.get(environment.apibaseurl + url);
  }
  getJSON(url : string){
    return this.http.get( url);

  }
  post(url:string,updateData:any){
    return this.http.post(environment.apibaseurl + url , updateData)
  }
  upload(url: string, file : [] , name :string) {
    const formData: FormData = new FormData();
    if (file) {
      Array.from(file).forEach(f => {
            formData.append(name,f)
          })
    }
    console.log(formData)
    return this.http.post(environment.apibaseurl + url, formData , {reportProgress: true, observe: 'events'});
  }
}
