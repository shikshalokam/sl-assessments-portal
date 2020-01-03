/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import * as i0 from "@angular/core";
export class ApiInterceptor {
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        const downloadReportUrl = 'programsSubmissionStatus/DCPCR?evidenceId=';
        /** @type {?} */
        const authToken = localStorage.getItem('auth-token');
        if (req.url.includes(downloadReportUrl)) {
            /** @type {?} */
            const authReq = req.clone({ setHeaders: { "internal-access-token": localStorage.getItem('downloadReport-token') } });
            return next.handle(authReq);
        }
        /** @type {?} */
        const authReq = req.clone({ setHeaders: { "X-authenticated-user-token": authToken } });
        return next.handle(authReq)
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            return throwError(error);
        })));
    }
}
ApiInterceptor.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ ApiInterceptor.ngInjectableDef = i0.defineInjectable({ factory: function ApiInterceptor_Factory() { return new ApiInterceptor(); }, token: ApiInterceptor, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLW1vZHVsZS9zZXJ2aWNlcy9pbnRlcmNlcHRvci1zZXJ2aWNlL2ludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBT2xDLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFHekIsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7O2NBQzFDLGlCQUFpQixHQUFHLDRDQUE0Qzs7Y0FDaEUsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3BELElBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFDcEM7O2tCQUNRLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsdUJBQXVCLEVBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFDLEVBQUMsQ0FBQztZQUNoSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0I7O2NBQ0ssT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSw0QkFBNEIsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDO1FBQ3BGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDMUIsSUFBSSxDQUNILFVBQVU7Ozs7UUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRTtZQUd0QyxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FDSixDQUFBO0lBQ1AsQ0FBQzs7O1lBekJGLFVBQVUsU0FDVDtnQkFDRSxVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG59IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKFxuICB7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICB9XG4pXG5leHBvcnQgY2xhc3MgQXBpSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpIHtcbiAgICBjb25zdCBkb3dubG9hZFJlcG9ydFVybCA9ICdwcm9ncmFtc1N1Ym1pc3Npb25TdGF0dXMvRENQQ1I/ZXZpZGVuY2VJZD0nXG4gICAgY29uc3QgYXV0aFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgtdG9rZW4nKTtcbiAgICBpZihyZXEudXJsLmluY2x1ZGVzKGRvd25sb2FkUmVwb3J0VXJsKSlcbiAgICAgIHtcbiAgICAgICAgY29uc3QgYXV0aFJlcSA9IHJlcS5jbG9uZSh7c2V0SGVhZGVyczp7XCJpbnRlcm5hbC1hY2Nlc3MtdG9rZW5cIiA6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb3dubG9hZFJlcG9ydC10b2tlbicpfX0pO1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUoYXV0aFJlcSk7XG4gICAgICB9XG4gICAgICBjb25zdCBhdXRoUmVxID0gcmVxLmNsb25lKHsgc2V0SGVhZGVyczogeyBcIlgtYXV0aGVudGljYXRlZC11c2VyLXRva2VuXCI6IGF1dGhUb2tlbiB9IH0pXG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShhdXRoUmVxKSBcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgY2F0Y2hFcnJvciggKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4geyBcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICB9KVxuICAgICAgICApXG4gIH0gXG4gIFxufVxuIl19