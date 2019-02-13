
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import { AuthService } from "../auth/auth.service";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/internal/operators/tap";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService,private snackBar :MatSnackBar) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const downloadReportUrl = 'programsSubmissionStatus/DCPCR?evidenceId='
    const authToken = this.auth.getToken();
    // console.log(req.url)
    if(req.url.includes(downloadReportUrl))
      {
        const authReq = req.clone({setHeaders:{"internal-access-token" :  environment.downloadReportHeaderValue}});
        return next.handle(authReq);
      }
      const authReq = req.clone({ setHeaders: { "X-authenticsadated-user-token": authToken } })
        return next.handle(authReq)
        .pipe(tap(
          (response: HttpEvent<any>) => {
          },
          (error: HttpErrorResponse) => {
            // console.log(error.status);
            if(error.status === 401){
             setTimeout(()=>{
              this.snackBar.open("Your Session Expired, Login To Continue.", "Ok", { duration: 3000 });
              setTimeout( () => {
                this.auth.getLogout();     
              },3000);
             },3000
             )
            }
           
          },
          () => {
            // console.log("completed successfully"); 
          }
        ));
  }
}
