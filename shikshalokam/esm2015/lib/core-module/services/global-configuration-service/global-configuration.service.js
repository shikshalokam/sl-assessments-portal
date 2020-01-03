/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { ApiService } from "../api-service/api.service";
import * as i0 from "@angular/core";
import * as i1 from "../api-service/api.service";
export class GlobalConfigurationService {
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
        this.roleAcess = [];
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getRolePermission(url) {
        return this.apiService.get(url);
    }
    /**
     * @param {?} result
     * @param {?} currentPortal
     * @return {?}
     */
    getUniqueRoleAcessObject(result, currentPortal) {
        /** @type {?} */
        let currentTabAction;
        this.roleAcess = [];
        result['tabActions'].forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            if (element.id === currentPortal) {
                currentTabAction = element;
            }
        }));
        this.getUniqueRoleAcess(currentTabAction);
        return this.roleAcess;
    }
    /**
     * @param {?} currentTabAction
     * @return {?}
     */
    getUniqueRoleAcess(currentTabAction) {
        currentTabAction['tabActions'].forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            if (element.accessibility === true) {
                this.roleAcess.push(element.id);
            }
            if (element.tabActions) {
                this.getUniqueRoleAcess(element);
            }
        }));
    }
}
GlobalConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
GlobalConfigurationService.ctorParameters = () => [
    { type: ApiService }
];
/** @nocollapse */ GlobalConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function GlobalConfigurationService_Factory() { return new GlobalConfigurationService(i0.inject(i1.ApiService)); }, token: GlobalConfigurationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    GlobalConfigurationService.prototype.roleAcess;
    /**
     * @type {?}
     * @private
     */
    GlobalConfigurationService.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWNvbmZpZ3VyYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLW1vZHVsZS9zZXJ2aWNlcy9nbG9iYWwtY29uZmlndXJhdGlvbi1zZXJ2aWNlL2dsb2JhbC1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFNeEQsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUVuQyxZQUFvQixVQUFxQjtRQUFyQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBRDdDLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFHWCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEdBQUc7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFDRCx3QkFBd0IsQ0FBQyxNQUFNLEVBQUMsYUFBYTs7WUFDckMsZ0JBQWdCO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXBCLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUUsT0FBTyxDQUFDLEVBQUU7WUFDdEMsSUFBRyxPQUFPLENBQUMsRUFBRSxLQUFLLGFBQWEsRUFBRTtnQkFDL0IsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO2FBQzVCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFDSCxrQkFBa0IsQ0FBQyxnQkFBZ0I7UUFDL0IsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTzs7OztRQUFHLE9BQU8sQ0FBQyxFQUFFO1lBQ2pELElBQUcsT0FBTyxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUM7Z0JBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMvQjtZQUNELElBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDOzs7WUFuQ04sVUFBVSxTQUNUO2dCQUNFLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSk0sVUFBVTs7Ozs7SUFPbkIsK0NBQWU7Ozs7O0lBQ0MsZ0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tIFwiLi4vYXBpLXNlcnZpY2UvYXBpLnNlcnZpY2VcIjtcbkBJbmplY3RhYmxlKFxuICB7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICB9XG4pXG5leHBvcnQgY2xhc3MgR2xvYmFsQ29uZmlndXJhdGlvblNlcnZpY2Uge1xucm9sZUFjZXNzID0gW107XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOkFwaVNlcnZpY2Upe1xuXG4gICAgfVxuXG4gICAgZ2V0Um9sZVBlcm1pc3Npb24odXJsKXtcbiAgICAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldCh1cmwpO1xuICAgIH1cbiAgICBnZXRVbmlxdWVSb2xlQWNlc3NPYmplY3QocmVzdWx0LGN1cnJlbnRQb3J0YWwpe1xuICAgICAgICBsZXQgY3VycmVudFRhYkFjdGlvbiA7XG4gICAgICAgIHRoaXMucm9sZUFjZXNzID0gW107XG5cbiAgICAgICAgcmVzdWx0Wyd0YWJBY3Rpb25zJ10uZm9yRWFjaCggZWxlbWVudCA9PiB7XG4gICAgICAgICAgaWYoZWxlbWVudC5pZCA9PT0gY3VycmVudFBvcnRhbCkge1xuICAgICAgICAgICAgY3VycmVudFRhYkFjdGlvbiA9IGVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXRVbmlxdWVSb2xlQWNlc3MoY3VycmVudFRhYkFjdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzLnJvbGVBY2VzcztcbiAgICAgIH0gXG4gICAgZ2V0VW5pcXVlUm9sZUFjZXNzKGN1cnJlbnRUYWJBY3Rpb24pe1xuICAgICAgICBjdXJyZW50VGFiQWN0aW9uWyd0YWJBY3Rpb25zJ10uZm9yRWFjaCAoIGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGlmKGVsZW1lbnQuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgdGhpcy5yb2xlQWNlc3MucHVzaChlbGVtZW50LmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZWxlbWVudC50YWJBY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmdldFVuaXF1ZVJvbGVBY2VzcyhlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cblxufVxuIl19