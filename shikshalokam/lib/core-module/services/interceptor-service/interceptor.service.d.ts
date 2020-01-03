import { HttpRequest, HttpHandler, HttpInterceptor } from "@angular/common/http";
export declare class ApiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs/internal/Observable").Observable<import("@angular/common/http/src/response").HttpEvent<any>>;
}
