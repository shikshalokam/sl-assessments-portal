import { Injectable } from '@angular/core';
import { LoaderState } from 'src/app/shared/components/loader/loader';
import { Subject } from 'rxjs/internal/Subject';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  LoaderState:boolean;
  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();
  constructor() { }
  show() {
          console.log("loader shows");
          this.loaderSubject.next(<LoaderState>{show: true});
      }
  hide() {
          console.log("loader hide");
          this.loaderSubject.next(<LoaderState>{show: false});
      }
  }

