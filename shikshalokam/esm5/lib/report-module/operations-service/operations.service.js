/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ApiService } from '../../core-module/services/api-service/api.service';
import * as i0 from "@angular/core";
import * as i1 from "../../core-module/services/api-service/api.service";
var OperationsService = /** @class */ (function () {
    function OperationsService(apiService) {
        this.apiService = apiService;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    OperationsService.prototype.applyFilters = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.apiService.get(url);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    OperationsService.prototype.getUserSummary = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.apiService.get(url);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    OperationsService.prototype.getEntityReport = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.apiService.get(url);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    OperationsService.prototype.getAssessorReport = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.apiService.get(url);
    };
    /**
     * @param {?} programId
     * @return {?}
     */
    OperationsService.prototype.getUserProfileSummary = /**
     * @param {?} programId
     * @return {?}
     */
    function (programId) {
        return this.apiService.get(programId);
    };
    OperationsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    OperationsService.ctorParameters = function () { return [
        { type: ApiService }
    ]; };
    /** @nocollapse */ OperationsService.ngInjectableDef = i0.defineInjectable({ factory: function OperationsService_Factory() { return new OperationsService(i0.inject(i1.ApiService)); }, token: OperationsService, providedIn: "root" });
    return OperationsService;
}());
export { OperationsService };
if (false) {
    /** @type {?} */
    OperationsService.prototype.Url;
    /**
     * @type {?}
     * @private
     */
    OperationsService.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3JlcG9ydC1tb2R1bGUvb3BlcmF0aW9ucy1zZXJ2aWNlL29wZXJhdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7OztBQUNoRjtJQU1FLDJCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQzs7Ozs7SUFHL0Msd0NBQVk7Ozs7SUFBWixVQUFhLEdBQUc7UUFFZCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBQ0QsMENBQWM7Ozs7SUFBZCxVQUFlLEdBQUc7UUFFaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUNELDJDQUFlOzs7O0lBQWYsVUFBZ0IsR0FBRztRQUVqQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBQ0QsNkNBQWlCOzs7O0lBQWpCLFVBQWtCLEdBQUc7UUFFbkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUdELGlEQUFxQjs7OztJQUFyQixVQUFzQixTQUFTO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBN0JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSFEsVUFBVTs7OzRCQURuQjtDQWdDQyxBQTlCRCxJQThCQztTQTNCWSxpQkFBaUI7OztJQUMzQixnQ0FBSTs7Ozs7SUFFTyx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS1tb2R1bGUvc2VydmljZXMvYXBpLXNlcnZpY2UvYXBpLnNlcnZpY2UnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT3BlcmF0aW9uc1NlcnZpY2Uge1xuICAgVXJsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZSA6QXBpU2VydmljZSkgeyB9XG4gXG5cbiAgYXBwbHlGaWx0ZXJzKHVybCl7XG5cbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldCh1cmwpO1xuICB9XG4gIGdldFVzZXJTdW1tYXJ5KHVybCl7XG5cbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldCh1cmwpO1xuICB9XG4gIGdldEVudGl0eVJlcG9ydCh1cmwpe1xuXG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQodXJsKTtcbiAgfVxuICBnZXRBc3Nlc3NvclJlcG9ydCh1cmwpe1xuXG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQodXJsKTtcbiAgfVxuXG5cbiAgZ2V0VXNlclByb2ZpbGVTdW1tYXJ5KHByb2dyYW1JZCl7XG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQocHJvZ3JhbUlkKTtcbiAgfVxufSJdfQ==