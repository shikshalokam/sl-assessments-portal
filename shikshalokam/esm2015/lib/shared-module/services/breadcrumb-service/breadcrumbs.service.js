/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
export class BreadcrumbsService {
    constructor() {
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
    store(breadcrumbs) {
        this.breadcrumbs = breadcrumbs;
        /** @type {?} */
        let allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    }
    /**
     * @param {?} breadcrumb
     * @return {?}
     */
    storePrefixed(breadcrumb) {
        this.storeIfUnique(breadcrumb);
        localStorage.setItem('prefixedBreadcrumbs', JSON.stringify(this.prefixedBreadcrumbs));
        /** @type {?} */
        let allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    }
    /**
     * @return {?}
     */
    get() {
        return this.breadcrumbsChanged$;
    }
    /**
     * @private
     * @param {?} newBreadcrumb
     * @return {?}
     */
    storeIfUnique(newBreadcrumb) {
        /** @type {?} */
        let isUnique = true;
        for (let crumb of this.prefixedBreadcrumbs) {
            if (newBreadcrumb.url == crumb.url) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            this.prefixedBreadcrumbs.push(newBreadcrumb);
        }
    }
}
BreadcrumbsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BreadcrumbsService.ctorParameters = () => [];
/** @nocollapse */ BreadcrumbsService.ngInjectableDef = i0.defineInjectable({ factory: function BreadcrumbsService_Factory() { return new BreadcrumbsService(); }, token: BreadcrumbsService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL3NlcnZpY2VzL2JyZWFkY3J1bWItc2VydmljZS9icmVhZGNydW1icy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBdUIsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOztBQUtuRCxNQUFNLE9BQU8sa0JBQWtCO0lBTzNCO1FBSlEsd0JBQW1CLEdBQWlCLEVBQUUsQ0FBQztRQUszQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxPQUFPLEVBQWlCLENBQUM7UUFDdEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVqRSxJQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDcEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3ZGO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxLQUFLLENBQUMsV0FBeUI7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7O1lBRTNCLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVoRCxDQUFDOzs7OztJQUdNLGFBQWEsQ0FBQyxVQUFzQjtRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDOztZQUNsRixjQUFjLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFaEQsQ0FBQzs7OztJQUdNLEdBQUc7UUFDTixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQTtJQUNuQyxDQUFDOzs7Ozs7SUFJTyxhQUFhLENBQUMsYUFBeUI7O1lBQ3ZDLFFBQVEsR0FBRyxJQUFJO1FBQ25CLEtBQUksSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQ3ZDLElBQUksYUFBYSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUNoQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixNQUFNO2FBQ1Q7U0FDSjtRQUNELElBQUcsUUFBUSxFQUFFO1lBQ1QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNoRDtJQUVMLENBQUM7OztZQXhESixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7Ozs7Ozs7SUFHRyx5Q0FBa0M7Ozs7O0lBQ2xDLGlEQUErQzs7SUFDL0MsK0NBQWdEOztJQUNoRCxpREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lCcmVhZGNydW1ifSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWJzLm1vZGVsXCI7XG5pbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJzU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGJyZWFkY3J1bWJzOklCcmVhZGNydW1iW107XG4gICAgcHJpdmF0ZSBwcmVmaXhlZEJyZWFkY3J1bWJzOklCcmVhZGNydW1iW10gPSBbXTtcbiAgICBwdWJsaWMgYnJlYWRjcnVtYnNTb3VyY2U6U3ViamVjdDxJQnJlYWRjcnVtYltdPjtcbiAgICBwdWJsaWMgYnJlYWRjcnVtYnNDaGFuZ2VkJDpPYnNlcnZhYmxlPElCcmVhZGNydW1iW10+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSBbXTtcbiAgICAgICAgdGhpcy5icmVhZGNydW1ic1NvdXJjZSA9IG5ldyBTdWJqZWN0PElCcmVhZGNydW1iW10+KCk7XG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnNDaGFuZ2VkJCA9IHRoaXMuYnJlYWRjcnVtYnNTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByZWZpeGVkQnJlYWRjcnVtYnMnKSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZpeGVkQnJlYWRjcnVtYnMgPSAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlZml4ZWRCcmVhZGNydW1icycpKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdG9yZShicmVhZGNydW1iczpJQnJlYWRjcnVtYltdKSB7XG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSBicmVhZGNydW1icztcblxuICAgICAgICBsZXQgYWxsQnJlYWRjcnVtYnMgPSB0aGlzLnByZWZpeGVkQnJlYWRjcnVtYnMuY29uY2F0KHRoaXMuYnJlYWRjcnVtYnMpO1xuICAgICAgICB0aGlzLmJyZWFkY3J1bWJzU291cmNlLm5leHQoYWxsQnJlYWRjcnVtYnMpO1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc3RvcmVQcmVmaXhlZChicmVhZGNydW1iOklCcmVhZGNydW1iKSB7XG4gICAgICAgIHRoaXMuc3RvcmVJZlVuaXF1ZShicmVhZGNydW1iKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByZWZpeGVkQnJlYWRjcnVtYnMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByZWZpeGVkQnJlYWRjcnVtYnMpKTtcbiAgICAgICAgbGV0IGFsbEJyZWFkY3J1bWJzID0gdGhpcy5wcmVmaXhlZEJyZWFkY3J1bWJzLmNvbmNhdCh0aGlzLmJyZWFkY3J1bWJzKTtcbiAgICAgICAgdGhpcy5icmVhZGNydW1ic1NvdXJjZS5uZXh0KGFsbEJyZWFkY3J1bWJzKTtcblxuICAgIH1cblxuXG4gICAgcHVibGljIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWRjcnVtYnNDaGFuZ2VkJFxuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIHN0b3JlSWZVbmlxdWUobmV3QnJlYWRjcnVtYjpJQnJlYWRjcnVtYikge1xuICAgICAgICBsZXQgaXNVbmlxdWUgPSB0cnVlO1xuICAgICAgICBmb3IobGV0IGNydW1iIG9mIHRoaXMucHJlZml4ZWRCcmVhZGNydW1icykge1xuICAgICAgICAgICAgaWYgKG5ld0JyZWFkY3J1bWIudXJsID09IGNydW1iLnVybCkge1xuICAgICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoaXNVbmlxdWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZml4ZWRCcmVhZGNydW1icy5wdXNoKG5ld0JyZWFkY3J1bWIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn0iXX0=