/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from "@angular/router";
import { filter } from "rxjs/operators";
import { BreadcrumbsService } from "../../services/breadcrumb-service/breadcrumbs.service";
import { UtilityService } from "../../../core-module/services/utility-service/utility.service";
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(breadcrumbService, utilityService, activatedRoute, router) {
        var _this = this;
        this.breadcrumbService = breadcrumbService;
        this.utilityService = utilityService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.ROUTE_DATA_BREADCRUMB = "breadcrumb";
        this.ROUTE_PARAM_BREADCRUMB = "breadcrumb";
        this.PREFIX_BREADCRUMB = "prefixBreadcrumb";
        breadcrumbService.get().subscribe((/**
         * @param {?} breadcrumbs
         * @return {?}
         */
        function (breadcrumbs) {
            _this.breadcrumbs = (/** @type {?} */ (breadcrumbs));
        }));
    }
    /**
     * @param {?} breadcrumb
     * @return {?}
     */
    BreadcrumbComponent.prototype.hasParams = /**
     * @param {?} breadcrumb
     * @return {?}
     */
    function (breadcrumb) {
        return Object.keys(breadcrumb.params).length ? [breadcrumb.url, breadcrumb.params] : [breadcrumb.url];
    };
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.onBack = /**
     * @return {?}
     */
    function () {
        this.utilityService.onBack();
    };
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.router.navigated) {
            this.generateBreadcrumbTrail();
        }
        ;
        this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof NavigationEnd; }))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.generateBreadcrumbTrail();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    BreadcrumbComponent.prototype.generateBreadcrumbTrail = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentBreadcrumbs = [];
        /** @type {?} */
        var currentRoute = this.activatedRoute.root;
        /** @type {?} */
        var url = "";
        var _loop_1 = function () {
            /** @type {?} */
            var childrenRoutes = currentRoute.children;
            /** @type {?} */
            var breadCrumbLabel = "";
            childrenRoutes.forEach((/**
             * @param {?} route
             * @return {?}
             */
            function (route) {
                currentRoute = route;
                if (route.outlet !== PRIMARY_OUTLET) {
                    return;
                }
                /** @type {?} */
                var hasData = (route.routeConfig && route.routeConfig.data);
                /** @type {?} */
                var hasDynamicBreadcrumb = route.snapshot.params.hasOwnProperty(_this.ROUTE_PARAM_BREADCRUMB);
                if (hasData || hasDynamicBreadcrumb) {
                    if (hasDynamicBreadcrumb) {
                        breadCrumbLabel = route.snapshot.params[_this.ROUTE_PARAM_BREADCRUMB].replace(/_/g, " ");
                    }
                    else if (route.snapshot.data.hasOwnProperty(_this.ROUTE_DATA_BREADCRUMB)) {
                        breadCrumbLabel = route.snapshot.data[_this.ROUTE_DATA_BREADCRUMB];
                    }
                    /** @type {?} */
                    var routeURL = route.snapshot.url.map((/**
                     * @param {?} segment
                     * @return {?}
                     */
                    function (segment) { return segment.path; })).join("/");
                    url += "/" + routeURL;
                    if (routeURL.length === 0) {
                        route.snapshot.params = {};
                    }
                    /** @type {?} */
                    var breadcrumb = {
                        label: breadCrumbLabel,
                        params: route.snapshot.params,
                        url: url
                    };
                    if (route.snapshot.data.hasOwnProperty(_this.PREFIX_BREADCRUMB)) {
                        _this.breadcrumbService.storePrefixed(breadcrumb);
                    }
                    else {
                        _this.currentBreadcrumbs.push(breadcrumb);
                    }
                }
            }));
            this_1.breadcrumbService.store(this_1.currentBreadcrumbs);
        };
        var this_1 = this;
        while (currentRoute.children.length > 0) {
            _loop_1();
        }
    };
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: "breadcrumb",
                    template: "<div class=\"breadcrumbBox\" >\n    <ol class=\"_flex-box orderedList\">\n            <button  *ngIf=\"!showControl\" class=\"noPadding\" mat-button (click)=\"onBack()\"><i class=\"material-icons\">\n                    keyboard_arrow_left\n                  </i>\n                  <span>Back</span>\n                </button>\n        <li *ngFor=\"let breadcrumb of breadcrumbs; let last = last\" class=\"padding breadcrumbList\">\n            <span *ngIf=\"breadcrumb.label !=''\">\n\n                <a *ngIf=\" breadcrumb == breadcrumbs[startIndex] \" [routerLink]=\"hasParams(breadcrumb)\" class=\"_flex-box breadcrumbLink\">\n                            {{breadcrumb.label | translate}}\n                </a>\n             \n\n                <a *ngIf=\"(!last) &&( breadcrumb != breadcrumbs[startIndex])\" [routerLink]=\"hasParams(breadcrumb)\" class=\"_flex-box breadcrumbLink\">\n                    \n                    <i class=\"material-icons\">\n                        keyboard_arrow_right\n                    </i>\n                    {{breadcrumb.label | translate}} \n                   \n                </a>\n                <span class=\"last _flex-box \" *ngIf=\"last\" [routerLink]=\"hasParams(breadcrumb)\">\n                        <i class=\"material-icons\">\n                                keyboard_arrow_right\n                            </i>\n                    {{ breadcrumb.label | translate }} \n                </span>\n            </span>\n        </li>\n    </ol>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".fluid-bread{background-color:#fff}.breadcrumb{background-color:#fff;padding:4px;margin-bottom:0}.padding{padding:0 5px}.orderedList{padding:0;list-style:none;margin:0}.breadcrumbList{color:var(--dark-blue-color)}.breadcrumbList .breadcrumbLink{color:var(--dark-blue-color);text-decoration:none;font-size:18px}.breadcrumbList .breadcrumbLink:hover{text-decoration:none;font-weight:700}.breadcrumbList .last{font-weight:bolder;font-size:18px}"]
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: BreadcrumbsService },
        { type: UtilityService },
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    BreadcrumbComponent.propDecorators = {
        addClass: [{ type: Input }],
        showControl: [{ type: Input }],
        startIndex: [{ type: Input }]
    };
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.ROUTE_DATA_BREADCRUMB;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.ROUTE_PARAM_BREADCRUMB;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.PREFIX_BREADCRUMB;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.currentBreadcrumbs;
    /** @type {?} */
    BreadcrumbComponent.prototype.breadcrumbs;
    /** @type {?} */
    BreadcrumbComponent.prototype.addClass;
    /** @type {?} */
    BreadcrumbComponent.prototype.showControl;
    /** @type {?} */
    BreadcrumbComponent.prototype.startIndex;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.breadcrumbService;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.utilityService;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFVLGNBQWMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzlGLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUN6RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0RBQStELENBQUM7QUFHL0Y7SUFxQkUsNkJBQTJCLGlCQUFxQyxFQUFTLGNBQThCLEVBQVUsY0FBOEIsRUFBVSxNQUFjO1FBQXZLLGlCQUtDO1FBTDBCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBYi9KLDBCQUFxQixHQUFXLFlBQVksQ0FBQztRQUM3QywyQkFBc0IsR0FBVyxZQUFZLENBQUM7UUFDOUMsc0JBQWlCLEdBQVcsa0JBQWtCLENBQUM7UUFZckQsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsV0FBMEI7WUFDM0QsS0FBSSxDQUFDLFdBQVcsR0FBRyxtQkFBQSxXQUFXLEVBQWlCLENBQUM7UUFDbEQsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7OztJQUVNLHVDQUFTOzs7O0lBQWhCLFVBQWlCLFVBQXVCO1FBQ3RDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RyxDQUFDOzs7O0lBRUQsb0NBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBQ1Esc0NBQVE7OztJQUFmO1FBQUEsaUJBVUM7UUFUQyxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFDO1lBQ3ZCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQ2hDO1FBQUEsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDckIsTUFBTTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxZQUFZLGFBQWEsRUFBOUIsQ0FBOEIsRUFDL0MsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDaEIsS0FBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLHFEQUF1Qjs7OztJQUEvQjtRQUFBLGlCQWdEQztRQS9DQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDOztZQUd6QixZQUFZLEdBQW1CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSTs7WUFHdkQsR0FBRyxHQUFXLEVBQUU7OztnQkFHZCxjQUFjLEdBQXFCLFlBQVksQ0FBQyxRQUFROztnQkFDeEQsZUFBZSxHQUFXLEVBQUU7WUFFaEMsY0FBYyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQzFCLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxjQUFjLEVBQUU7b0JBQ25DLE9BQU87aUJBQ1I7O29CQUNLLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7O29CQUN2RCxvQkFBb0IsR0FBWSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLHNCQUFzQixDQUFDO2dCQUV2RyxJQUFJLE9BQU8sSUFBSSxvQkFBb0IsRUFBRTtvQkFFbkMsSUFBSSxvQkFBb0IsRUFBRTt3QkFDeEIsZUFBZSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQ3pGO3lCQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO3dCQUN6RSxlQUFlLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7cUJBQ25FOzt3QkFDRyxRQUFRLEdBQVcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRzs7OztvQkFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQVosQ0FBWSxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDaEYsR0FBRyxJQUFJLE1BQUksUUFBVSxDQUFDO29CQUN0QixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO3dCQUN6QixLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7cUJBQzVCOzt3QkFDRyxVQUFVLEdBQWdCO3dCQUM1QixLQUFLLEVBQUUsZUFBZTt3QkFDdEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTTt3QkFDN0IsR0FBRyxFQUFFLEdBQUc7cUJBQ1Q7b0JBQ0QsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7d0JBQzlELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQ2xEO3lCQUNJO3dCQUNILEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQzFDO2lCQUNGO1lBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDSCxPQUFLLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFLLGtCQUFrQixDQUFDLENBQUM7UUFDeEQsQ0FBQzs7UUF0Q0QsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDOztTQXNDdEM7SUFDSCxDQUFDOztnQkEvRkYsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixxL0NBQTJDO29CQUUzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3hDOzs7O2dCQVRPLGtCQUFrQjtnQkFDakIsY0FBYztnQkFKUCxjQUFjO2dCQUF0QixNQUFNOzs7MkJBc0JYLEtBQUs7OEJBR0wsS0FBSzs2QkFDTCxLQUFLOztJQTZFUiwwQkFBQztDQUFBLEFBaEdELElBZ0dDO1NBekZZLG1CQUFtQjs7Ozs7O0lBQzlCLG9EQUFxRDs7Ozs7SUFDckQscURBQXNEOzs7OztJQUN0RCxnREFBdUQ7Ozs7O0lBRXZELGlEQUEwQzs7SUFDMUMsMENBQWtDOztJQUVsQyx1Q0FDd0I7O0lBRXhCLDBDQUFxQjs7SUFDckIseUNBQW9COzs7OztJQUVELGdEQUE2Qzs7Ozs7SUFBQyw2Q0FBc0M7Ozs7O0lBQUUsNkNBQXNDOzs7OztJQUFFLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBQYXJhbXMsIFBSSU1BUllfT1VUTEVUfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7ZmlsdGVyfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHtJQnJlYWRjcnVtYn0gZnJvbSBcIi4vYnJlYWRjcnVtYnMubW9kZWxcIjtcclxuaW1wb3J0IHtCcmVhZGNydW1ic1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9icmVhZGNydW1iLXNlcnZpY2UvYnJlYWRjcnVtYnMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlLW1vZHVsZS9zZXJ2aWNlcy91dGlsaXR5LXNlcnZpY2UvdXRpbGl0eS5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJicmVhZGNydW1iXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIFJPVVRFX0RBVEFfQlJFQURDUlVNQjogc3RyaW5nID0gXCJicmVhZGNydW1iXCI7XHJcbiAgcHJpdmF0ZSBST1VURV9QQVJBTV9CUkVBRENSVU1COiBzdHJpbmcgPSBcImJyZWFkY3J1bWJcIjtcclxuICBwcml2YXRlIFBSRUZJWF9CUkVBRENSVU1COiBzdHJpbmcgPSBcInByZWZpeEJyZWFkY3J1bWJcIjtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50QnJlYWRjcnVtYnM6IElCcmVhZGNydW1iW107XHJcbiAgcHVibGljIGJyZWFkY3J1bWJzOiBJQnJlYWRjcnVtYltdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBhZGRDbGFzczogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBzaG93Q29udHJvbDtcclxuICBASW5wdXQoKSBzdGFydEluZGV4O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBicmVhZGNydW1iU2VydmljZTogQnJlYWRjcnVtYnNTZXJ2aWNlLHByaXZhdGUgdXRpbGl0eVNlcnZpY2UgOlV0aWxpdHlTZXJ2aWNlLCBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgYnJlYWRjcnVtYlNlcnZpY2UuZ2V0KCkuc3Vic2NyaWJlKChicmVhZGNydW1iczogSUJyZWFkY3J1bWJbXSkgPT4ge1xyXG4gICAgICB0aGlzLmJyZWFkY3J1bWJzID0gYnJlYWRjcnVtYnMgYXMgSUJyZWFkY3J1bWJbXTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNQYXJhbXMoYnJlYWRjcnVtYjogSUJyZWFkY3J1bWIpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhicmVhZGNydW1iLnBhcmFtcykubGVuZ3RoID8gW2JyZWFkY3J1bWIudXJsLCBicmVhZGNydW1iLnBhcmFtc10gOiBbYnJlYWRjcnVtYi51cmxdO1xyXG4gIH1cclxuXHJcbiAgb25CYWNrKCkge1xyXG4gICAgdGhpcy51dGlsaXR5U2VydmljZS5vbkJhY2soKTtcclxufVxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIGlmKHRoaXMucm91dGVyLm5hdmlnYXRlZCl7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVCcmVhZGNydW1iVHJhaWwoKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXHJcbiAgICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmRcclxuICAgICkpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVCcmVhZGNydW1iVHJhaWwoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZUJyZWFkY3J1bWJUcmFpbCgpe1xyXG4gICAgdGhpcy5jdXJyZW50QnJlYWRjcnVtYnMgPSBbXTtcclxuXHJcblxyXG4gICAgbGV0IGN1cnJlbnRSb3V0ZTogQWN0aXZhdGVkUm91dGUgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnJvb3Q7XHJcblxyXG5cclxuICAgIGxldCB1cmw6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgd2hpbGUgKGN1cnJlbnRSb3V0ZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBjaGlsZHJlblJvdXRlczogQWN0aXZhdGVkUm91dGVbXSA9IGN1cnJlbnRSb3V0ZS5jaGlsZHJlbjtcclxuICAgICAgbGV0IGJyZWFkQ3J1bWJMYWJlbDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgIGNoaWxkcmVuUm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRSb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIGlmIChyb3V0ZS5vdXRsZXQgIT09IFBSSU1BUllfT1VUTEVUKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGhhc0RhdGEgPSAocm91dGUucm91dGVDb25maWcgJiYgcm91dGUucm91dGVDb25maWcuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgaGFzRHluYW1pY0JyZWFkY3J1bWI6IGJvb2xlYW4gPSByb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaGFzT3duUHJvcGVydHkodGhpcy5ST1VURV9QQVJBTV9CUkVBRENSVU1CKTtcclxuXHJcbiAgICAgICAgaWYgKGhhc0RhdGEgfHwgaGFzRHluYW1pY0JyZWFkY3J1bWIpIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoaGFzRHluYW1pY0JyZWFkY3J1bWIpIHtcclxuICAgICAgICAgICAgYnJlYWRDcnVtYkxhYmVsID0gcm91dGUuc25hcHNob3QucGFyYW1zW3RoaXMuUk9VVEVfUEFSQU1fQlJFQURDUlVNQl0ucmVwbGFjZSgvXy9nLCBcIiBcIik7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLnNuYXBzaG90LmRhdGEuaGFzT3duUHJvcGVydHkodGhpcy5ST1VURV9EQVRBX0JSRUFEQ1JVTUIpKSB7XHJcbiAgICAgICAgICAgIGJyZWFkQ3J1bWJMYWJlbCA9IHJvdXRlLnNuYXBzaG90LmRhdGFbdGhpcy5ST1VURV9EQVRBX0JSRUFEQ1JVTUJdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IHJvdXRlVVJMOiBzdHJpbmcgPSByb3V0ZS5zbmFwc2hvdC51cmwubWFwKHNlZ21lbnQgPT4gc2VnbWVudC5wYXRoKS5qb2luKFwiL1wiKTtcclxuICAgICAgICAgIHVybCArPSBgLyR7cm91dGVVUkx9YDtcclxuICAgICAgICAgIGlmIChyb3V0ZVVSTC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcm91dGUuc25hcHNob3QucGFyYW1zID0ge307XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgYnJlYWRjcnVtYjogSUJyZWFkY3J1bWIgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBicmVhZENydW1iTGFiZWwsXHJcbiAgICAgICAgICAgIHBhcmFtczogcm91dGUuc25hcHNob3QucGFyYW1zLFxyXG4gICAgICAgICAgICB1cmw6IHVybFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlmIChyb3V0ZS5zbmFwc2hvdC5kYXRhLmhhc093blByb3BlcnR5KHRoaXMuUFJFRklYX0JSRUFEQ1JVTUIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYlNlcnZpY2Uuc3RvcmVQcmVmaXhlZChicmVhZGNydW1iKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCcmVhZGNydW1icy5wdXNoKGJyZWFkY3J1bWIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuYnJlYWRjcnVtYlNlcnZpY2Uuc3RvcmUodGhpcy5jdXJyZW50QnJlYWRjcnVtYnMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=