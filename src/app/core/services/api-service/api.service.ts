import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { }

  get(url : string){
    return this.http.get(environment.apibaseurl + url);
  }
  post(url:string,updateData:any){
    return this.http.post(environment.apibaseurl + url , updateData)
  }
  upload(url: string, file: File , name :string) {
    const formData: FormData = new FormData();
    if (file) {
      formData.append(name, file);
    }
    return this.post(url, formData);
  }
}
