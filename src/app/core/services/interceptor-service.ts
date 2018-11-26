
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor() { }
  //function which will be called for all http calls
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //how to update the request Parameters
    
   var updatedRequest = request.headers.append("X-authenticated-user-token", "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJwZU9VQ3ZTVUR2ekprYzlyeXJVNTNWLXV6ME1nOFVCbk4tSzJfTmFpX2N3In0.eyJqdGkiOiJlYjJhYzEwZS1lOGY0LTQwZDUtYTdiMi1kYmIyYTkwZTY1M2IiLCJleHAiOjE1NDMzMjA0NDMsIm5iZiI6MCwiaWF0IjoxNTQzMjM0MDQzLCJpc3MiOiJodHRwczovL2Rldi5zaGlrc2hhbG9rYW0ub3JnL2F1dGgvcmVhbG1zL3N1bmJpcmQiLCJhdWQiOiJzbC1pb25pYy1jb25uZWN0Iiwic3ViIjoiZTk3YjU1ODItNDcxYy00NjQ5LTg0MDEtM2NjNDI0OTM1OWJiIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2wtaW9uaWMtY29ubmVjdCIsIm5vbmNlIjoiMWIxZGVmZjItNjUzNC00MDkyLTlhYTctMDNkNGIxMzU4MjBiIiwiYXV0aF90aW1lIjoxNTQzMjM0MDQxLCJzZXNzaW9uX3N0YXRlIjoiNmZlMGZjYzQtZDlmOS00ZDE1LWExYzQtNmYwNTUxYjE5ODVjIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sIm5hbWUiOiJTYW5kZWVwIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYTFAc2hpa3NoYWxva2FtZGV2IiwiZ2l2ZW5fbmFtZSI6IlNhbmRlZXAiLCJmYW1pbHlfbmFtZSI6IiIsImVtYWlsIjoiYTFAc2hpa3NoYWxva2FtZGV2LmRldiJ9.Cv7kRM2zZbunshnoPw0Mo1zjRRFqiwadeHFvqWkE8X12sPv7GmjmQngL9yUqwjXB0GjU2LjbmLNKJkHpFMoAMxDtNMU4VslWwe7TzrzPyyNgPNBcqECwqSihbdy4fzimM1JHyejl8_8ztjSk7k3RnjYvhj_XnajjRb_lkM5hF1J1-Q1-Z7OA6aqZ0dLnb3rMQB7T-MYg7_3sWrQ5OatvmhMYuHvzHRAlnyZsUU0NINcKSY3GwYeFlFm3chr2Qxvrs79BcRaJrdT2E4T_1OMz_qHrb5QzlYg0cmfnSJXsRT1V-w5eFMAyqRgtXkL-jbZ_VKul2d07yB9KDNZaKtGC8g"),
      updatedRequest = request.headers.append("gpsLocation","0,0"),
      updatedRequest = request.headers.append("X-Channel-id","0.0")

  //  updatedRequest = request.clone({
  //     headers:request.headers.append("X-authenticated-user-token", "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJwZU9VQ3ZTVUR2ekprYzlyeXJVNTNWLXV6ME1nOFVCbk4tSzJfTmFpX2N3In0.eyJqdGkiOiJlYjJhYzEwZS1lOGY0LTQwZDUtYTdiMi1kYmIyYTkwZTY1M2IiLCJleHAiOjE1NDMzMjA0NDMsIm5iZiI6MCwiaWF0IjoxNTQzMjM0MDQzLCJpc3MiOiJodHRwczovL2Rldi5zaGlrc2hhbG9rYW0ub3JnL2F1dGgvcmVhbG1zL3N1bmJpcmQiLCJhdWQiOiJzbC1pb25pYy1jb25uZWN0Iiwic3ViIjoiZTk3YjU1ODItNDcxYy00NjQ5LTg0MDEtM2NjNDI0OTM1OWJiIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2wtaW9uaWMtY29ubmVjdCIsIm5vbmNlIjoiMWIxZGVmZjItNjUzNC00MDkyLTlhYTctMDNkNGIxMzU4MjBiIiwiYXV0aF90aW1lIjoxNTQzMjM0MDQxLCJzZXNzaW9uX3N0YXRlIjoiNmZlMGZjYzQtZDlmOS00ZDE1LWExYzQtNmYwNTUxYjE5ODVjIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sIm5hbWUiOiJTYW5kZWVwIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYTFAc2hpa3NoYWxva2FtZGV2IiwiZ2l2ZW5fbmFtZSI6IlNhbmRlZXAiLCJmYW1pbHlfbmFtZSI6IiIsImVtYWlsIjoiYTFAc2hpa3NoYWxva2FtZGV2LmRldiJ9.Cv7kRM2zZbunshnoPw0Mo1zjRRFqiwadeHFvqWkE8X12sPv7GmjmQngL9yUqwjXB0GjU2LjbmLNKJkHpFMoAMxDtNMU4VslWwe7TzrzPyyNgPNBcqECwqSihbdy4fzimM1JHyejl8_8ztjSk7k3RnjYvhj_XnajjRb_lkM5hF1J1-Q1-Z7OA6aqZ0dLnb3rMQB7T-MYg7_3sWrQ5OatvmhMYuHvzHRAlnyZsUU0NINcKSY3GwYeFlFm3chr2Qxvrs79BcRaJrdT2E4T_1OMz_qHrb5QzlYg0cmfnSJXsRT1V-w5eFMAyqRgtXkL-jbZ_VKul2d07yB9KDNZaKtGC8g"),
      

  //   });
  //    updatedRequest = request.clone({
  //     headers:request.headers.set("gpsLocation","0,0")
  //   });
  //   updatedRequest = request.clone({
  //     headers:request.headers.append("X-Channel-id","0.0")
  //   });

    //logging the updated Parameters to browser's console
    console.log("Before making api call : ", updatedRequest);
    return next.handle(request).pipe(
      tap(
        event => {
          //logging the http response to browser's console in case of a success
          if (event instanceof HttpResponse) {
            console.log("api call success :", event);
          }
        },
        error => {
          //logging the http response to browser's console in case of a failuer
          if (event instanceof HttpResponse) {
            console.log("api call error :", event);
          }
        }
      )
    );
  }
}
