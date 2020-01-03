/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
var BreadcrumbsService = /** @class */ (function () {
    function BreadcrumbsService() {
        this.prefixedBreadcrumbs = [];
        this.breadcrumbs = [];
        this.breadcrumbsSource = new Subject();
        this.breadcrumbsChanged$ = this.breadcrumbsSource.asObservable();
        if (localStorage.getItem('prefixedBreadcrumbs') != null) {
            this.prefixedBreadcrumbs = (JSON.parse(localStorage.getItem('prefixedBreadcrumbs')));
        }
    }
    /**
     * @param {?} breadcrumbs
     * @return {?}
     */
    BreadcrumbsService.prototype.store = /**
     * @param {?} breadcrumbs
     * @return {?}
     */
    function (breadcrumbs) {
        this.breadcrumbs = breadcrumbs;
        /** @type {?} */
        var allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    };
    /**
     * @param {?} breadcrumb
     * @return {?}
     */
    BreadcrumbsService.prototype.storePrefixed = /**
     * @param {?} breadcrumb
     * @return {?}
     */
    function (breadcrumb) {
        this.storeIfUnique(breadcrumb);
        localStorage.setItem('prefixedBreadcrumbs', JSON.stringify(this.prefixedBreadcrumbs));
        /** @type {?} */
        var allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    };
    /**
     * @return {?}
     */
    BreadcrumbsService.prototype.get = /**
     * @return {?}
     */
    function () {
        return this.breadcrumbsChanged$;
    };
    /**
     * @private
     * @param {?} newBreadcrumb
     * @return {?}
     */
    BreadcrumbsService.prototype.storeIfUnique = /**
     * @private
     * @param {?} newBreadcrumb
     * @return {?}
     */
    function (newBreadcrumb) {
        var e_1, _a;
        /** @type {?} */
        var isUnique = true;
        try {
            for (var _b = tslib_1.__values(this.prefixedBreadcrumbs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var crumb = _c.value;
                if (newBreadcrumb.url == crumb.url) {
                    isUnique = false;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (isUnique) {
            this.prefixedBreadcrumbs.push(newBreadcrumb);
        }
    };
    BreadcrumbsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BreadcrumbsService.ctorParameters = function () { return []; };
    /** @nocollapse */ BreadcrumbsService.ngInjectableDef = i0.defineInjectable({ factory: function BreadcrumbsService_Factory() { return new BreadcrumbsService(); }, token: BreadcrumbsService, providedIn: "root" });
    return BreadcrumbsService;
}());
export { BreadcrumbsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BreadcrumbsService.prototype.breadcrumbs;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbsService.prototype.prefixedBreadcrumbs;
    /** @type {?} */
    BreadcrumbsService.prototype.breadcrumbsSource;
    /** @type {?} */
    BreadcrumbsService.prototype.breadcrumbsChanged$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL3NlcnZpY2VzL2JyZWFkY3J1bWItc2VydmljZS9icmVhZGNydW1icy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQXVCLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFFbkQ7SUFVSTtRQUpRLHdCQUFtQixHQUFpQixFQUFFLENBQUM7UUFLM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksT0FBTyxFQUFpQixDQUFDO1FBQ3RELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFakUsSUFBRyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3BELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUN2RjtJQUNMLENBQUM7Ozs7O0lBRU0sa0NBQUs7Ozs7SUFBWixVQUFhLFdBQXlCO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDOztZQUUzQixjQUFjLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFaEQsQ0FBQzs7Ozs7SUFHTSwwQ0FBYTs7OztJQUFwQixVQUFxQixVQUFzQjtRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDOztZQUNsRixjQUFjLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFaEQsQ0FBQzs7OztJQUdNLGdDQUFHOzs7SUFBVjtRQUNJLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFBO0lBQ25DLENBQUM7Ozs7OztJQUlPLDBDQUFhOzs7OztJQUFyQixVQUFzQixhQUF5Qjs7O1lBQ3ZDLFFBQVEsR0FBRyxJQUFJOztZQUNuQixLQUFpQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLG1CQUFtQixDQUFBLGdCQUFBLDRCQUFFO2dCQUF2QyxJQUFJLEtBQUssV0FBQTtnQkFDVCxJQUFJLGFBQWEsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtvQkFDaEMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsTUFBTTtpQkFDVDthQUNKOzs7Ozs7Ozs7UUFDRCxJQUFHLFFBQVEsRUFBRTtZQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDaEQ7SUFFTCxDQUFDOztnQkF4REosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7Ozs7NkJBTkQ7Q0E4REMsQUExREQsSUEwREM7U0F2RFksa0JBQWtCOzs7Ozs7SUFFM0IseUNBQWtDOzs7OztJQUNsQyxpREFBK0M7O0lBQy9DLCtDQUFnRDs7SUFDaEQsaURBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJQnJlYWRjcnVtYn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1icy5tb2RlbFwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlciwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1ic1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBicmVhZGNydW1iczpJQnJlYWRjcnVtYltdO1xuICAgIHByaXZhdGUgcHJlZml4ZWRCcmVhZGNydW1iczpJQnJlYWRjcnVtYltdID0gW107XG4gICAgcHVibGljIGJyZWFkY3J1bWJzU291cmNlOlN1YmplY3Q8SUJyZWFkY3J1bWJbXT47XG4gICAgcHVibGljIGJyZWFkY3J1bWJzQ2hhbmdlZCQ6T2JzZXJ2YWJsZTxJQnJlYWRjcnVtYltdPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJyZWFkY3J1bWJzID0gW107XG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnNTb3VyY2UgPSBuZXcgU3ViamVjdDxJQnJlYWRjcnVtYltdPigpO1xuICAgICAgICB0aGlzLmJyZWFkY3J1bWJzQ2hhbmdlZCQgPSB0aGlzLmJyZWFkY3J1bWJzU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVmaXhlZEJyZWFkY3J1bWJzJykgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wcmVmaXhlZEJyZWFkY3J1bWJzID0gKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByZWZpeGVkQnJlYWRjcnVtYnMnKSkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcmUoYnJlYWRjcnVtYnM6SUJyZWFkY3J1bWJbXSkge1xuICAgICAgICB0aGlzLmJyZWFkY3J1bWJzID0gYnJlYWRjcnVtYnM7XG5cbiAgICAgICAgbGV0IGFsbEJyZWFkY3J1bWJzID0gdGhpcy5wcmVmaXhlZEJyZWFkY3J1bWJzLmNvbmNhdCh0aGlzLmJyZWFkY3J1bWJzKTtcbiAgICAgICAgdGhpcy5icmVhZGNydW1ic1NvdXJjZS5uZXh0KGFsbEJyZWFkY3J1bWJzKTtcblxuICAgIH1cblxuXG4gICAgcHVibGljIHN0b3JlUHJlZml4ZWQoYnJlYWRjcnVtYjpJQnJlYWRjcnVtYikge1xuICAgICAgICB0aGlzLnN0b3JlSWZVbmlxdWUoYnJlYWRjcnVtYik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmVmaXhlZEJyZWFkY3J1bWJzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcmVmaXhlZEJyZWFkY3J1bWJzKSk7XG4gICAgICAgIGxldCBhbGxCcmVhZGNydW1icyA9IHRoaXMucHJlZml4ZWRCcmVhZGNydW1icy5jb25jYXQodGhpcy5icmVhZGNydW1icyk7XG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnNTb3VyY2UubmV4dChhbGxCcmVhZGNydW1icyk7XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJyZWFkY3J1bWJzQ2hhbmdlZCRcbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBzdG9yZUlmVW5pcXVlKG5ld0JyZWFkY3J1bWI6SUJyZWFkY3J1bWIpIHtcbiAgICAgICAgbGV0IGlzVW5pcXVlID0gdHJ1ZTtcbiAgICAgICAgZm9yKGxldCBjcnVtYiBvZiB0aGlzLnByZWZpeGVkQnJlYWRjcnVtYnMpIHtcbiAgICAgICAgICAgIGlmIChuZXdCcmVhZGNydW1iLnVybCA9PSBjcnVtYi51cmwpIHtcbiAgICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGlzVW5pcXVlKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZpeGVkQnJlYWRjcnVtYnMucHVzaChuZXdCcmVhZGNydW1iKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59Il19