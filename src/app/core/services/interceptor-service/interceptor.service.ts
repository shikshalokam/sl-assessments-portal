
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from "@angular/common/http";
import { AuthService } from "../auth/auth.service";
import { environment } from "src/environments/environment";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.getToken();
    const authReq = req
    .clone({ setHeaders: { "X-authenticated-user-token": authToken } })
    .clone({setHeaders:{"internal-access-token" :  environment.downloadReportHeaderValue}})
    // .clone({setHeaders:{"responseType":'text'}})
    ;

    // debugger;
    console.log(authReq)
    return next.handle(authReq);

  }
}
