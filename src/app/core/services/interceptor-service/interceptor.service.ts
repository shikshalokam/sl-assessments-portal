
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from "@angular/common/http";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.getToken();
    console.log(authToken);
    const authReq = req.clone({ setHeaders: { "X-authenticated-user-token": authToken } });

    console.log(authReq)
    return next.handle(authReq);

  }
}
