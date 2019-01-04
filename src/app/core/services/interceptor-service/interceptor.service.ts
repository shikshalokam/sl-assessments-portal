
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
    const downloadReportUrl = 'https://dev.shikshalokam.org/assessment/api/v1/reports/programsSubmissionStatus/DCPCR?evidenceId='
    const authToken = this.auth.getToken();
    if (req.url.includes(downloadReportUrl)) {
      const authReq = req.clone({ setHeaders: { "internal-access-token": environment.downloadReportHeaderValue } });
      return next.handle(authReq);
    }
    const authReq = req.clone({ setHeaders: { "X-authenticated-user-token": authToken } })
    return next.handle(authReq);
  }
}
