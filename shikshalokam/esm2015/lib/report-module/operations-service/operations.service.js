/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ApiService } from '../../core-module/services/api-service/api.service';
import * as i0 from "@angular/core";
import * as i1 from "../../core-module/services/api-service/api.service";
export class OperationsService {
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    applyFilters(url) {
        return this.apiService.get(url);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getUserSummary(url) {
        return this.apiService.get(url);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getEntityReport(url) {
        return this.apiService.get(url);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getAssessorReport(url) {
        return this.apiService.get(url);
    }
    /**
     * @param {?} programId
     * @return {?}
     */
    getUserProfileSummary(programId) {
        return this.apiService.get(programId);
    }
}
OperationsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
OperationsService.ctorParameters = () => [
    { type: ApiService }
];
/** @nocollapse */ OperationsService.ngInjectableDef = i0.defineInjectable({ factory: function OperationsService_Factory() { return new OperationsService(i0.inject(i1.ApiService)); }, token: OperationsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    OperationsService.prototype.Url;
    /**
     * @type {?}
     * @private
     */
    OperationsService.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3JlcG9ydC1tb2R1bGUvb3BlcmF0aW9ucy1zZXJ2aWNlL29wZXJhdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7OztBQUloRixNQUFNLE9BQU8saUJBQWlCOzs7O0lBRzVCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDOzs7OztJQUcvQyxZQUFZLENBQUMsR0FBRztRQUVkLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFDRCxjQUFjLENBQUMsR0FBRztRQUVoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBQ0QsZUFBZSxDQUFDLEdBQUc7UUFFakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUNELGlCQUFpQixDQUFDLEdBQUc7UUFFbkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUdELHFCQUFxQixDQUFDLFNBQVM7UUFDN0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUE3QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSFEsVUFBVTs7Ozs7SUFLaEIsZ0NBQUk7Ozs7O0lBRU8sdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUtbW9kdWxlL3NlcnZpY2VzL2FwaS1zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE9wZXJhdGlvbnNTZXJ2aWNlIHtcbiAgIFVybDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2UgOkFwaVNlcnZpY2UpIHsgfVxuIFxuXG4gIGFwcGx5RmlsdGVycyh1cmwpe1xuXG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQodXJsKTtcbiAgfVxuICBnZXRVc2VyU3VtbWFyeSh1cmwpe1xuXG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQodXJsKTtcbiAgfVxuICBnZXRFbnRpdHlSZXBvcnQodXJsKXtcblxuICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KHVybCk7XG4gIH1cbiAgZ2V0QXNzZXNzb3JSZXBvcnQodXJsKXtcblxuICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KHVybCk7XG4gIH1cblxuXG4gIGdldFVzZXJQcm9maWxlU3VtbWFyeShwcm9ncmFtSWQpe1xuICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KHByb2dyYW1JZCk7XG4gIH1cbn0iXX0=