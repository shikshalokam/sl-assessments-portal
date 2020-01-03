/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ApiService } from '../../core-module/services/api-service/api.service';
import * as i0 from "@angular/core";
import * as i1 from "../../core-module/services/api-service/api.service";
var ReportService = /** @class */ (function () {
    function ReportService(apiService) {
        this.apiService = apiService;
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @return {?}
     */
    ReportService.prototype.getListOfBlock = /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @return {?}
     */
    function (apiBaseUrl, programId) {
        return this.apiService.get(apiBaseUrl + programId);
    };
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} Id
     * @return {?}
     */
    ReportService.prototype.getListOfentityl = /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} Id
     * @return {?}
     */
    function (apiBaseUrl, programId, Id) {
        return this.apiService.get(apiBaseUrl + programId + '&blockId=' + Id);
    };
    /**
     * @param {?} apiBaseUrl
     * @param {?} entitylId
     * @return {?}
     */
    ReportService.prototype.getEcmReportGetSubmissionId = /**
     * @param {?} apiBaseUrl
     * @param {?} entitylId
     * @return {?}
     */
    function (apiBaseUrl, entitylId) {
        return this.apiService.get(apiBaseUrl + entitylId);
    };
    /**
     * @param {?} apiBaseUrl
     * @param {?} submissionId
     * @return {?}
     */
    ReportService.prototype.getSubmissionReport = /**
     * @param {?} apiBaseUrl
     * @param {?} submissionId
     * @return {?}
     */
    function (apiBaseUrl, submissionId) {
        return this.apiService.get(apiBaseUrl + submissionId);
    };
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @return {?}
     */
    ReportService.prototype.getUserentitylsInProgram = /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @return {?}
     */
    function (apiBaseUrl, programId) {
        return this.apiService.get(apiBaseUrl + programId);
    };
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    ReportService.prototype.getSingleEntityReport = /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    function (apiBaseUrl, programId, solutionId, entitylId, linkId) {
        if (linkId) {
            return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + entitylId + "&linkId=" + linkId);
        }
        return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + entitylId);
        // return this.apiService.get('/assests/insight.json');
    };
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    ReportService.prototype.getHighEntityReport = /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    function (apiBaseUrl, programId, solutionId, entitylId, linkId) {
        if (linkId) {
            return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + entitylId + "&linkId=" + linkId);
        }
        return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + entitylId);
        // return this.apiService.get('/assests/insight.json');
    };
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} blockName
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    ReportService.prototype.getMultipleEntityReport = /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} blockName
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    function (apiBaseUrl, programId, solutionId, blockName, entitylId, linkId) {
        /** @type {?} */
        var url = '';
        entitylId.forEach((/**
         * @param {?} Id
         * @param {?} index
         * @return {?}
         */
        function (Id, index) {
            if (index === 0) {
                url += entitylId[index];
            }
            else {
                url += "," + entitylId[index];
            }
        }));
        if (linkId) {
            return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + url + '&blockName=' + blockName + "&linkId=" + linkId);
        }
        return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + url + '&blockName=' + blockName);
        // return this.apiService.get('/assests/insight.json');
    };
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} blockName
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    ReportService.prototype.getMultipleEntityDrilldownReport = /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} blockName
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    function (apiBaseUrl, programId, solutionId, blockName, entitylId, linkId) {
        /** @type {?} */
        var url = '';
        entitylId.forEach((/**
         * @param {?} Id
         * @param {?} index
         * @return {?}
         */
        function (Id, index) {
            if (index === 0) {
                url += entitylId[index];
            }
            else {
                url += "," + entitylId[index];
            }
        }));
        if (linkId) {
            return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + url + '&blockName=' + blockName + "&linkId=" + linkId);
        }
        return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + url + '&blockName=' + blockName);
        // return this.apiService.get('/assests/insight.json');
    };
    ReportService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ReportService.ctorParameters = function () { return [
        { type: ApiService }
    ]; };
    /** @nocollapse */ ReportService.ngInjectableDef = i0.defineInjectable({ factory: function ReportService_Factory() { return new ReportService(i0.inject(i1.ApiService)); }, token: ReportService, providedIn: "root" });
    return ReportService;
}());
export { ReportService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReportService.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvcmVwb3J0LW1vZHVsZS9yZXBvcnQtc2VydmljZS9yZXBvcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7OztBQUNoRjtJQUtFLHVCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQzs7Ozs7O0lBRy9DLHNDQUFjOzs7OztJQUFkLFVBQWUsVUFBVSxFQUFHLFNBQVM7UUFDbkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7OztJQUVELHdDQUFnQjs7Ozs7O0lBQWhCLFVBQWlCLFVBQVUsRUFBQyxTQUFTLEVBQUUsRUFBRTtRQUN2QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRSxTQUFTLEdBQUcsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7OztJQUlELG1EQUEyQjs7Ozs7SUFBM0IsVUFBNEIsVUFBVSxFQUFDLFNBQVM7UUFDOUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUE7SUFDcEQsQ0FBQzs7Ozs7O0lBQ0QsMkNBQW1COzs7OztJQUFuQixVQUFvQixVQUFVLEVBQUMsWUFBWTtRQUN6QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsQ0FBQTtJQUN2RCxDQUFDOzs7Ozs7SUFDRCxnREFBd0I7Ozs7O0lBQXhCLFVBQXlCLFVBQVUsRUFBQyxTQUFTO1FBQzNDLE9BQU8s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TyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUUsU0FBUyxHQUFHLGNBQWMsR0FBQyxVQUFVLEdBQUMsVUFBVSxHQUFHLEdBQUcsR0FBQyxhQUFhLEdBQUMsU0FBUyxHQUFDLFVBQVUsR0FBQyxNQUFNLENBQUMsQ0FBQztTQUV4STtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFFLFNBQVMsR0FBRyxjQUFjLEdBQUMsVUFBVSxHQUFDLFVBQVUsR0FBSSxHQUFHLEdBQUMsYUFBYSxHQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hILHVEQUF1RDtJQUN6RCxDQUFDOztnQkFsRkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFIUSxVQUFVOzs7d0JBRG5CO0NBcUZDLEFBbkZELElBbUZDO1NBaEZZLGFBQWE7Ozs7OztJQUVaLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlLW1vZHVsZS9zZXJ2aWNlcy9hcGktc2VydmljZS9hcGkuc2VydmljZSc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHsgfVxuICBcblxuICBnZXRMaXN0T2ZCbG9jayhhcGlCYXNlVXJsICwgcHJvZ3JhbUlkKXtcbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldChhcGlCYXNlVXJsICsgcHJvZ3JhbUlkKTtcbiAgfVxuXG4gIGdldExpc3RPZmVudGl0eWwoYXBpQmFzZVVybCxwcm9ncmFtSWQsIElkKXtcbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldChhcGlCYXNlVXJsKyBwcm9ncmFtSWQgKyAnJmJsb2NrSWQ9JyArIElkKTtcbiAgfVxuIFxuXG5cbiAgZ2V0RWNtUmVwb3J0R2V0U3VibWlzc2lvbklkKGFwaUJhc2VVcmwsZW50aXR5bElkKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoYXBpQmFzZVVybCArIGVudGl0eWxJZClcbiAgfVxuICBnZXRTdWJtaXNzaW9uUmVwb3J0KGFwaUJhc2VVcmwsc3VibWlzc2lvbklkKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoYXBpQmFzZVVybCArIHN1Ym1pc3Npb25JZClcbiAgfVxuICBnZXRVc2VyZW50aXR5bHNJblByb2dyYW0oYXBpQmFzZVVybCxwcm9ncmFtSWQpIHtcbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldChhcGlCYXNlVXJsICsgcHJvZ3JhbUlkKTtcbiAgfVxuXG4gIGdldFNpbmdsZUVudGl0eVJlcG9ydChhcGlCYXNlVXJsLHByb2dyYW1JZCwgc29sdXRpb25JZCwgZW50aXR5bElkLGxpbmtJZCkge1xuICAgIGlmKGxpbmtJZCl7XG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoYXBpQmFzZVVybCArIHByb2dyYW1JZCArICc/c29sdXRpb25JZD0nK3NvbHV0aW9uSWQgKycmZW50aXR5PScgKyBlbnRpdHlsSWQrXCImbGlua0lkPVwiKyBsaW5rSWQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldChhcGlCYXNlVXJsICsgcHJvZ3JhbUlkICsgJz9zb2x1dGlvbklkPScrc29sdXRpb25JZCArJyZlbnRpdHk9JyArIGVudGl0eWxJZCk7XG4gICAgLy8gcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoJy9hc3Nlc3RzL2luc2lnaHQuanNvbicpO1xuXG4gIH1cbiAgZ2V0SGlnaEVudGl0eVJlcG9ydChhcGlCYXNlVXJsLHByb2dyYW1JZCxzb2x1dGlvbklkLCBlbnRpdHlsSWQgLCBsaW5rSWQpIHtcbiAgICBpZihsaW5rSWQpe1xuICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KGFwaUJhc2VVcmwrICBwcm9ncmFtSWQgKyAnP3NvbHV0aW9uSWQ9Jytzb2x1dGlvbklkICsgJyZlbnRpdHk9JyArIGVudGl0eWxJZCArXCImbGlua0lkPVwiK2xpbmtJZCk7XG5cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoYXBpQmFzZVVybCsgIHByb2dyYW1JZCArICc/c29sdXRpb25JZD0nK3NvbHV0aW9uSWQgICsgJyZlbnRpdHk9JyArIGVudGl0eWxJZCk7XG4gICAgLy8gcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoJy9hc3Nlc3RzL2luc2lnaHQuanNvbicpO1xuICB9XG4gXG4gIGdldE11bHRpcGxlRW50aXR5UmVwb3J0KGFwaUJhc2VVcmwscHJvZ3JhbUlkLHNvbHV0aW9uSWQsYmxvY2tOYW1lLCBlbnRpdHlsSWQsbGlua0lkKSB7XG4gICAgbGV0IHVybCA9ICcnO1xuICAgIGVudGl0eWxJZC5mb3JFYWNoKChJZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB1cmwgKz0gZW50aXR5bElkW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB1cmwgKz0gXCIsXCIgKyBlbnRpdHlsSWRbaW5kZXhdO1xuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBpZihsaW5rSWQpe1xuICAgICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoYXBpQmFzZVVybCArIHByb2dyYW1JZCArICc/c29sdXRpb25JZD0nK3NvbHV0aW9uSWQrJyZlbnRpdHk9JyArICB1cmwgKycmYmxvY2tOYW1lPScrYmxvY2tOYW1lK1wiJmxpbmtJZD1cIitsaW5rSWQpO1xuXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KGFwaUJhc2VVcmwgKyBwcm9ncmFtSWQgICsgJz9zb2x1dGlvbklkPScrc29sdXRpb25JZCsnJmVudGl0eT0nICsgIHVybCArJyZibG9ja05hbWU9JytibG9ja05hbWUpO1xuICAgIC8vIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KCcvYXNzZXN0cy9pbnNpZ2h0Lmpzb24nKTtcbiAgfVxuXG4gIGdldE11bHRpcGxlRW50aXR5RHJpbGxkb3duUmVwb3J0KGFwaUJhc2VVcmwscHJvZ3JhbUlkLHNvbHV0aW9uSWQgLGJsb2NrTmFtZSxlbnRpdHlsSWQsbGlua0lkKSB7XG4gICAgbGV0IHVybCA9ICcnO1xuICAgIGVudGl0eWxJZC5mb3JFYWNoKChJZCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB1cmwgKz0gZW50aXR5bElkW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB1cmwgKz0gXCIsXCIgKyBlbnRpdHlsSWRbaW5kZXhdO1xuICAgICAgfVxuXG4gICAgfSk7XG4gICAgaWYobGlua0lkKXtcbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldChhcGlCYXNlVXJsKyBwcm9ncmFtSWQgKyAnP3NvbHV0aW9uSWQ9Jytzb2x1dGlvbklkKycmZW50aXR5PScgKyB1cmwrJyZibG9ja05hbWU9JytibG9ja05hbWUrXCImbGlua0lkPVwiK2xpbmtJZCk7XG5cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoYXBpQmFzZVVybCsgcHJvZ3JhbUlkICsgJz9zb2x1dGlvbklkPScrc29sdXRpb25JZCsnJmVudGl0eT0nICsgIHVybCsnJmJsb2NrTmFtZT0nK2Jsb2NrTmFtZSk7XG4gICAgLy8gcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoJy9hc3Nlc3RzL2luc2lnaHQuanNvbicpO1xuICB9XG59XG4iXX0=