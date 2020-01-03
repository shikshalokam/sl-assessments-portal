import { ApiService } from '../../core-module/services/api-service/api.service';
export declare class OperationsService {
    private apiService;
    Url: any;
    constructor(apiService: ApiService);
    applyFilters(url: any): import("rxjs/internal/Observable").Observable<Object>;
    getUserSummary(url: any): import("rxjs/internal/Observable").Observable<Object>;
    getEntityReport(url: any): import("rxjs/internal/Observable").Observable<Object>;
    getAssessorReport(url: any): import("rxjs/internal/Observable").Observable<Object>;
    getUserProfileSummary(programId: any): import("rxjs/internal/Observable").Observable<Object>;
}
