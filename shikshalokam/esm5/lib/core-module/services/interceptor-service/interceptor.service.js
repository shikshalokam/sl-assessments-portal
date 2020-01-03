/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import * as i0 from "@angular/core";
var ApiInterceptor = /** @class */ (function () {
    function ApiInterceptor() {
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    ApiInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        /** @type {?} */
        var downloadReportUrl = 'programsSubmissionStatus/DCPCR?evidenceId=';
        /** @type {?} */
        var authToken = localStorage.getItem('auth-token');
        if (req.url.includes(downloadReportUrl)) {
            /** @type {?} */
            var authReq_1 = req.clone({ setHeaders: { "internal-access-token": localStorage.getItem('downloadReport-token') } });
            return next.handle(authReq_1);
        }
        /** @type {?} */
        var authReq = req.clone({ setHeaders: { "X-authenticated-user-token": authToken } });
        return next.handle(authReq)
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return throwError(error);
        })));
    };
    ApiInterceptor.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ ApiInterceptor.ngInjectableDef = i0.defineInjectable({ factory: function ApiInterceptor_Factory() { return new ApiInterceptor(); }, token: ApiInterceptor, providedIn: "root" });
    return ApiInterceptor;
}());
export { ApiInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLW1vZHVsZS9zZXJ2aWNlcy9pbnRlcmNlcHRvci1zZXJ2aWNlL2ludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRWxDO0lBQUE7S0EyQkM7Ozs7OztJQW5CQyxrQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7O1lBQzFDLGlCQUFpQixHQUFHLDRDQUE0Qzs7WUFDaEUsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3BELElBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFDcEM7O2dCQUNRLFNBQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsdUJBQXVCLEVBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFDLEVBQUMsQ0FBQztZQUNoSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBTyxDQUFDLENBQUM7U0FDN0I7O1lBQ0ssT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSw0QkFBNEIsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDO1FBQ3BGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDMUIsSUFBSSxDQUNILFVBQVU7Ozs7UUFBRSxVQUFDLEtBQXdCO1lBR2xDLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUNKLENBQUE7SUFDUCxDQUFDOztnQkF6QkYsVUFBVSxTQUNUO29CQUNFLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O3lCQWRIO0NBc0NDLEFBM0JELElBMkJDO1NBdEJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xuXG5ASW5qZWN0YWJsZShcbiAge1xuICAgIHByb3ZpZGVkSW46ICdyb290JyxcbiAgfVxuKVxuZXhwb3J0IGNsYXNzIEFwaUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKSB7XG4gICAgY29uc3QgZG93bmxvYWRSZXBvcnRVcmwgPSAncHJvZ3JhbXNTdWJtaXNzaW9uU3RhdHVzL0RDUENSP2V2aWRlbmNlSWQ9J1xuICAgIGNvbnN0IGF1dGhUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoLXRva2VuJyk7XG4gICAgaWYocmVxLnVybC5pbmNsdWRlcyhkb3dubG9hZFJlcG9ydFVybCkpXG4gICAgICB7XG4gICAgICAgIGNvbnN0IGF1dGhSZXEgPSByZXEuY2xvbmUoe3NldEhlYWRlcnM6e1wiaW50ZXJuYWwtYWNjZXNzLXRva2VuXCIgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG93bmxvYWRSZXBvcnQtdG9rZW4nKX19KTtcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGF1dGhSZXEpO1xuICAgICAgfVxuICAgICAgY29uc3QgYXV0aFJlcSA9IHJlcS5jbG9uZSh7IHNldEhlYWRlcnM6IHsgXCJYLWF1dGhlbnRpY2F0ZWQtdXNlci10b2tlblwiOiBhdXRoVG9rZW4gfSB9KVxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUoYXV0aFJlcSkgXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGNhdGNoRXJyb3IoIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHsgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICB9IFxuICBcbn1cbiJdfQ==