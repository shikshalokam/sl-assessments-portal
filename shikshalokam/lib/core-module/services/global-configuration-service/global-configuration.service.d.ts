import { ApiService } from "../api-service/api.service";
export declare class GlobalConfigurationService {
    private apiService;
    roleAcess: any[];
    constructor(apiService: ApiService);
    getRolePermission(url: any): import("rxjs/internal/Observable").Observable<Object>;
    getUniqueRoleAcessObject(result: any, currentPortal: any): any[];
    getUniqueRoleAcess(currentTabAction: any): void;
}
