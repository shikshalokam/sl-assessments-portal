/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { ApiService } from "../api-service/api.service";
import * as i0 from "@angular/core";
import * as i1 from "../api-service/api.service";
var GlobalConfigurationService = /** @class */ (function () {
    function GlobalConfigurationService(apiService) {
        this.apiService = apiService;
        this.roleAcess = [];
    }
    /**
     * @param {?} url
     * @return {?}
     */
    GlobalConfigurationService.prototype.getRolePermission = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.apiService.get(url);
    };
    /**
     * @param {?} result
     * @param {?} currentPortal
     * @return {?}
     */
    GlobalConfigurationService.prototype.getUniqueRoleAcessObject = /**
     * @param {?} result
     * @param {?} currentPortal
     * @return {?}
     */
    function (result, currentPortal) {
        /** @type {?} */
        var currentTabAction;
        this.roleAcess = [];
        result['tabActions'].forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (element.id === currentPortal) {
                currentTabAction = element;
            }
        }));
        this.getUniqueRoleAcess(currentTabAction);
        return this.roleAcess;
    };
    /**
     * @param {?} currentTabAction
     * @return {?}
     */
    GlobalConfigurationService.prototype.getUniqueRoleAcess = /**
     * @param {?} currentTabAction
     * @return {?}
     */
    function (currentTabAction) {
        var _this = this;
        currentTabAction['tabActions'].forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (element.accessibility === true) {
                _this.roleAcess.push(element.id);
            }
            if (element.tabActions) {
                _this.getUniqueRoleAcess(element);
            }
        }));
    };
    GlobalConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    GlobalConfigurationService.ctorParameters = function () { return [
        { type: ApiService }
    ]; };
    /** @nocollapse */ GlobalConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function GlobalConfigurationService_Factory() { return new GlobalConfigurationService(i0.inject(i1.ApiService)); }, token: GlobalConfigurationService, providedIn: "root" });
    return GlobalConfigurationService;
}());
export { GlobalConfigurationService };
if (false) {
    /** @type {?} */
    GlobalConfigurationService.prototype.roleAcess;
    /**
     * @type {?}
     * @private
     */
    GlobalConfigurationService.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWNvbmZpZ3VyYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLW1vZHVsZS9zZXJ2aWNlcy9nbG9iYWwtY29uZmlndXJhdGlvbi1zZXJ2aWNlL2dsb2JhbC1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFDeEQ7SUFPSSxvQ0FBb0IsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUQ3QyxjQUFTLEdBQUcsRUFBRSxDQUFDO0lBR1gsQ0FBQzs7Ozs7SUFFRCxzREFBaUI7Ozs7SUFBakIsVUFBa0IsR0FBRztRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUNELDZEQUF3Qjs7Ozs7SUFBeEIsVUFBeUIsTUFBTSxFQUFDLGFBQWE7O1lBQ3JDLGdCQUFnQjtRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVwQixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTzs7OztRQUFFLFVBQUEsT0FBTztZQUNuQyxJQUFHLE9BQU8sQ0FBQyxFQUFFLEtBQUssYUFBYSxFQUFFO2dCQUMvQixnQkFBZ0IsR0FBRyxPQUFPLENBQUM7YUFDNUI7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUNILHVEQUFrQjs7OztJQUFsQixVQUFtQixnQkFBZ0I7UUFBbkMsaUJBU0c7UUFSQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUcsVUFBQSxPQUFPO1lBQzlDLElBQUcsT0FBTyxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMvQjtZQUNELElBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFDckIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDOztnQkFuQ04sVUFBVSxTQUNUO29CQUNFLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKTSxVQUFVOzs7cUNBRm5CO0NBeUNDLEFBdENELElBc0NDO1NBakNZLDBCQUEwQjs7O0lBQ3ZDLCtDQUFlOzs7OztJQUNDLGdEQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSBcIi4uL2FwaS1zZXJ2aWNlL2FwaS5zZXJ2aWNlXCI7XG5ASW5qZWN0YWJsZShcbiAge1xuICAgIHByb3ZpZGVkSW46ICdyb290JyxcbiAgfVxuKVxuZXhwb3J0IGNsYXNzIEdsb2JhbENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcbnJvbGVBY2VzcyA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTpBcGlTZXJ2aWNlKXtcblxuICAgIH1cblxuICAgIGdldFJvbGVQZXJtaXNzaW9uKHVybCl7XG4gICAgICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQodXJsKTtcbiAgICB9XG4gICAgZ2V0VW5pcXVlUm9sZUFjZXNzT2JqZWN0KHJlc3VsdCxjdXJyZW50UG9ydGFsKXtcbiAgICAgICAgbGV0IGN1cnJlbnRUYWJBY3Rpb24gO1xuICAgICAgICB0aGlzLnJvbGVBY2VzcyA9IFtdO1xuXG4gICAgICAgIHJlc3VsdFsndGFiQWN0aW9ucyddLmZvckVhY2goIGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGlmKGVsZW1lbnQuaWQgPT09IGN1cnJlbnRQb3J0YWwpIHtcbiAgICAgICAgICAgIGN1cnJlbnRUYWJBY3Rpb24gPSBlbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2V0VW5pcXVlUm9sZUFjZXNzKGN1cnJlbnRUYWJBY3Rpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5yb2xlQWNlc3M7XG4gICAgICB9IFxuICAgIGdldFVuaXF1ZVJvbGVBY2VzcyhjdXJyZW50VGFiQWN0aW9uKXtcbiAgICAgICAgY3VycmVudFRhYkFjdGlvblsndGFiQWN0aW9ucyddLmZvckVhY2ggKCBlbGVtZW50ID0+IHtcbiAgICAgICAgICBpZihlbGVtZW50LmFjY2Vzc2liaWxpdHkgPT09IHRydWUpe1xuICAgICAgICAgIHRoaXMucm9sZUFjZXNzLnB1c2goZWxlbWVudC5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGVsZW1lbnQudGFiQWN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5nZXRVbmlxdWVSb2xlQWNlc3MoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG5cbn1cbiJdfQ==