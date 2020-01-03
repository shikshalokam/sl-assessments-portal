/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ApiService } from '../../core-module/services/api-service/api.service';
import * as i0 from "@angular/core";
import * as i1 from "../../core-module/services/api-service/api.service";
export class ReportService {
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @return {?}
     */
    getListOfBlock(apiBaseUrl, programId) {
        return this.apiService.get(apiBaseUrl + programId);
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} Id
     * @return {?}
     */
    getListOfentityl(apiBaseUrl, programId, Id) {
        return this.apiService.get(apiBaseUrl + programId + '&blockId=' + Id);
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} entitylId
     * @return {?}
     */
    getEcmReportGetSubmissionId(apiBaseUrl, entitylId) {
        return this.apiService.get(apiBaseUrl + entitylId);
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} submissionId
     * @return {?}
     */
    getSubmissionReport(apiBaseUrl, submissionId) {
        return this.apiService.get(apiBaseUrl + submissionId);
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @return {?}
     */
    getUserentitylsInProgram(apiBaseUrl, programId) {
        return this.apiService.get(apiBaseUrl + programId);
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    getSingleEntityReport(apiBaseUrl, programId, solutionId, entitylId, linkId) {
        if (linkId) {
            return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + entitylId + "&linkId=" + linkId);
        }
        return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + entitylId);
        // return this.apiService.get('/assests/insight.json');
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    getHighEntityReport(apiBaseUrl, programId, solutionId, entitylId, linkId) {
        if (linkId) {
            return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + entitylId + "&linkId=" + linkId);
        }
        return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + entitylId);
        // return this.apiService.get('/assests/insight.json');
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} blockName
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    getMultipleEntityReport(apiBaseUrl, programId, solutionId, blockName, entitylId, linkId) {
        /** @type {?} */
        let url = '';
        entitylId.forEach((/**
         * @param {?} Id
         * @param {?} index
         * @return {?}
         */
        (Id, index) => {
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
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} blockName
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    getMultipleEntityDrilldownReport(apiBaseUrl, programId, solutionId, blockName, entitylId, linkId) {
        /** @type {?} */
        let url = '';
        entitylId.forEach((/**
         * @param {?} Id
         * @param {?} index
         * @return {?}
         */
        (Id, index) => {
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
    }
}
ReportService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ReportService.ctorParameters = () => [
    { type: ApiService }
];
/** @nocollapse */ ReportService.ngInjectableDef = i0.defineInjectable({ factory: function ReportService_Factory() { return new ReportService(i0.inject(i1.ApiService)); }, token: ReportService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReportService.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvcmVwb3J0LW1vZHVsZS9yZXBvcnQtc2VydmljZS9yZXBvcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7OztBQUloRixNQUFNLE9BQU8sYUFBYTs7OztJQUV4QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQzs7Ozs7O0lBRy9DLGNBQWMsQ0FBQyxVQUFVLEVBQUcsU0FBUztRQUNuQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBVSxFQUFDLFNBQVMsRUFBRSxFQUFFO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFFLFNBQVMsR0FBRyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7O0lBSUQsMkJBQTJCLENBQUMsVUFBVSxFQUFDLFNBQVM7UUFDOUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUE7SUFDcEQsQ0FBQzs7Ozs7O0lBQ0QsbUJBQW1CLENBQUMsVUFBVSxFQUFDLFlBQVk7UUFDekMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLENBQUE7SUFDdkQsQ0FBQzs7Ozs7O0lBQ0Qsd0JBQXdCLENBQUMsVUFBVSxFQUFDLFNBQVM7UUFDM0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdB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VSxHQUFHLEdBQUcsR0FBQyxhQUFhLEdBQUMsU0FBUyxHQUFDLFVBQVUsR0FBQyxNQUFNLENBQUMsQ0FBQztTQUV4STtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFFLFNBQVMsR0FBRyxjQUFjLEdBQUMsVUFBVSxHQUFDLFVBQVUsR0FBSSxHQUFHLEdBQUMsYUFBYSxHQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hILHVEQUF1RDtJQUN6RCxDQUFDOzs7WUFsRkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSFEsVUFBVTs7Ozs7Ozs7SUFNTCxtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS1tb2R1bGUvc2VydmljZXMvYXBpLXNlcnZpY2UvYXBpLnNlcnZpY2UnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVwb3J0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7IH1cbiAgXG5cbiAgZ2V0TGlzdE9mQmxvY2soYXBpQmFzZVVybCAsIHByb2dyYW1JZCl7XG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoYXBpQmFzZVVybCArIHByb2dyYW1JZCk7XG4gIH1cblxuICBnZXRMaXN0T2ZlbnRpdHlsKGFwaUJhc2VVcmwscHJvZ3JhbUlkLCBJZCl7XG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoYXBpQmFzZVVybCsgcHJvZ3JhbUlkICsgJyZibG9ja0lkPScgKyBJZCk7XG4gIH1cbiBcblxuXG4gIGdldEVjbVJlcG9ydEdldFN1Ym1pc3Npb25JZChhcGlCYXNlVXJsLGVudGl0eWxJZCkge1xuICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KGFwaUJhc2VVcmwgKyBlbnRpdHlsSWQpXG4gIH1cbiAgZ2V0U3VibWlzc2lvblJlcG9ydChhcGlCYXNlVXJsLHN1Ym1pc3Npb25JZCkge1xuICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KGFwaUJhc2VVcmwgKyBzdWJtaXNzaW9uSWQpXG4gIH1cbiAgZ2V0VXNlcmVudGl0eWxzSW5Qcm9ncmFtKGFwaUJhc2VVcmwscHJvZ3JhbUlkKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoYXBpQmFzZVVybCArIHByb2dyYW1JZCk7XG4gIH1cblxuICBnZXRTaW5nbGVFbnRpdHlSZXBvcnQoYXBpQmFzZVVybCxwcm9ncmFtSWQsIHNvbHV0aW9uSWQsIGVudGl0eWxJZCxsaW5rSWQpIHtcbiAgICBpZihsaW5rSWQpe1xuICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KGFwaUJhc2VVcmwgKyBwcm9ncmFtSWQgKyAnP3NvbHV0aW9uSWQ9Jytzb2x1dGlvbklkICsnJmVudGl0eT0nICsgZW50aXR5bElkK1wiJmxpbmtJZD1cIisgbGlua0lkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoYXBpQmFzZVVybCArIHByb2dyYW1JZCArICc/c29sdXRpb25JZD0nK3NvbHV0aW9uSWQgKycmZW50aXR5PScgKyBlbnRpdHlsSWQpO1xuICAgIC8vIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KCcvYXNzZXN0cy9pbnNpZ2h0Lmpzb24nKTtcblxuICB9XG4gIGdldEhpZ2hFbnRpdHlSZXBvcnQoYXBpQmFzZVVybCxwcm9ncmFtSWQsc29sdXRpb25JZCwgZW50aXR5bElkICwgbGlua0lkKSB7XG4gICAgaWYobGlua0lkKXtcbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldChhcGlCYXNlVXJsKyAgcHJvZ3JhbUlkICsgJz9zb2x1dGlvbklkPScrc29sdXRpb25JZCArICcmZW50aXR5PScgKyBlbnRpdHlsSWQgK1wiJmxpbmtJZD1cIitsaW5rSWQpO1xuXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KGFwaUJhc2VVcmwrICBwcm9ncmFtSWQgKyAnP3NvbHV0aW9uSWQ9Jytzb2x1dGlvbklkICArICcmZW50aXR5PScgKyBlbnRpdHlsSWQpO1xuICAgIC8vIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KCcvYXNzZXN0cy9pbnNpZ2h0Lmpzb24nKTtcbiAgfVxuIFxuICBnZXRNdWx0aXBsZUVudGl0eVJlcG9ydChhcGlCYXNlVXJsLHByb2dyYW1JZCxzb2x1dGlvbklkLGJsb2NrTmFtZSwgZW50aXR5bElkLGxpbmtJZCkge1xuICAgIGxldCB1cmwgPSAnJztcbiAgICBlbnRpdHlsSWQuZm9yRWFjaCgoSWQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdXJsICs9IGVudGl0eWxJZFtpbmRleF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdXJsICs9IFwiLFwiICsgZW50aXR5bElkW2luZGV4XTtcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgaWYobGlua0lkKXtcbiAgICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KGFwaUJhc2VVcmwgKyBwcm9ncmFtSWQgKyAnP3NvbHV0aW9uSWQ9Jytzb2x1dGlvbklkKycmZW50aXR5PScgKyAgdXJsICsnJmJsb2NrTmFtZT0nK2Jsb2NrTmFtZStcIiZsaW5rSWQ9XCIrbGlua0lkKTtcblxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldChhcGlCYXNlVXJsICsgcHJvZ3JhbUlkICArICc/c29sdXRpb25JZD0nK3NvbHV0aW9uSWQrJyZlbnRpdHk9JyArICB1cmwgKycmYmxvY2tOYW1lPScrYmxvY2tOYW1lKTtcbiAgICAvLyByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldCgnL2Fzc2VzdHMvaW5zaWdodC5qc29uJyk7XG4gIH1cblxuICBnZXRNdWx0aXBsZUVudGl0eURyaWxsZG93blJlcG9ydChhcGlCYXNlVXJsLHByb2dyYW1JZCxzb2x1dGlvbklkICxibG9ja05hbWUsZW50aXR5bElkLGxpbmtJZCkge1xuICAgIGxldCB1cmwgPSAnJztcbiAgICBlbnRpdHlsSWQuZm9yRWFjaCgoSWQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdXJsICs9IGVudGl0eWxJZFtpbmRleF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdXJsICs9IFwiLFwiICsgZW50aXR5bElkW2luZGV4XTtcbiAgICAgIH1cblxuICAgIH0pO1xuICAgIGlmKGxpbmtJZCl7XG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQoYXBpQmFzZVVybCsgcHJvZ3JhbUlkICsgJz9zb2x1dGlvbklkPScrc29sdXRpb25JZCsnJmVudGl0eT0nICsgdXJsKycmYmxvY2tOYW1lPScrYmxvY2tOYW1lK1wiJmxpbmtJZD1cIitsaW5rSWQpO1xuXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KGFwaUJhc2VVcmwrIHByb2dyYW1JZCArICc/c29sdXRpb25JZD0nK3NvbHV0aW9uSWQrJyZlbnRpdHk9JyArICB1cmwrJyZibG9ja05hbWU9JytibG9ja05hbWUpO1xuICAgIC8vIHJldHVybiB0aGlzLmFwaVNlcnZpY2UuZ2V0KCcvYXNzZXN0cy9pbnNpZ2h0Lmpzb24nKTtcbiAgfVxufVxuIl19