import { ApiService } from '../../core-module/services/api-service/api.service';
export declare class ReportService {
    private apiService;
    constructor(apiService: ApiService);
    getListOfBlock(apiBaseUrl: any, programId: any): import("rxjs/internal/Observable").Observable<Object>;
    getListOfentityl(apiBaseUrl: any, programId: any, Id: any): import("rxjs/internal/Observable").Observable<Object>;
    getEcmReportGetSubmissionId(apiBaseUrl: any, entitylId: any): import("rxjs/internal/Observable").Observable<Object>;
    getSubmissionReport(apiBaseUrl: any, submissionId: any): import("rxjs/internal/Observable").Observable<Object>;
    getUserentitylsInProgram(apiBaseUrl: any, programId: any): import("rxjs/internal/Observable").Observable<Object>;
    getSingleEntityReport(apiBaseUrl: any, programId: any, solutionId: any, entitylId: any, linkId: any): import("rxjs/internal/Observable").Observable<Object>;
    getHighEntityReport(apiBaseUrl: any, programId: any, solutionId: any, entitylId: any, linkId: any): import("rxjs/internal/Observable").Observable<Object>;
    getMultipleEntityReport(apiBaseUrl: any, programId: any, solutionId: any, blockName: any, entitylId: any, linkId: any): import("rxjs/internal/Observable").Observable<Object>;
    getMultipleEntityDrilldownReport(apiBaseUrl: any, programId: any, solutionId: any, blockName: any, entitylId: any, linkId: any): import("rxjs/internal/Observable").Observable<Object>;
}
