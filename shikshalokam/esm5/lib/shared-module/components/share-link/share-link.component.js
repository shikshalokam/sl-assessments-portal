/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ShareLinkViewComponent } from '../share-link-view/share-link-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core-module/services/api-service/api.service';
import { UtilityService } from '../../../core-module/services/utility-service/utility.service';
var ShareLinkComponent = /** @class */ (function () {
    function ShareLinkComponent(dialog, snackBar, utility, router, route, apiService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.utility = utility;
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.url = {
            publicURL: '',
            privateURL: '',
            reportName: ''
        };
    }
    /**
     * @return {?}
     */
    ShareLinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.publicSharedBaseUrl);
    };
    /**
     * @return {?}
     */
    ShareLinkComponent.prototype.shareLink = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.url.privateURL = window.location.href;
        console.log("shared link");
        this.route.url.subscribe((/**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            console.log(url);
            /** @type {?} */
            var routeIndex = _this.url.privateURL.indexOf(url[0].path);
            _this.url.publicURL = _this.publicSharedBaseUrl + _this.url.privateURL.slice(routeIndex) + "&componentName=" + _this.componentId;
            console.log(_this.url);
            _this.url.reportName = _this.componentId;
        }));
        this.apiService.post(this.shareLinkApi, this.url).subscribe((/**
         * @param {?} successData
         * @return {?}
         */
        function (successData) {
            console.log(successData);
            _this.uuId = _this.publicSharedBaseUrl.substring(0, _this.publicSharedBaseUrl.length - 1) + "?linkId=" + successData['result']['linkId'];
            _this.url.publicURL = _this.baseUrl + "/" + _this.portalName.toLowerCase() + "/public?linkId=" + successData['result']['linkId'];
            _this.openDialog();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            //this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
            _this.utility.loaderHide();
        }));
    };
    /**
     * @return {?}
     */
    ShareLinkComponent.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dialogRef = this.dialog.open(ShareLinkViewComponent, {
            width: '500px',
            height: '200px',
            data: this.url.publicURL
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            console.log('The dialog was closed');
        }));
    };
    ShareLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-share-link',
                    template: "<span class=\"_margin-top\">\n  <!-- <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Share Link</button> -->\n  <button mat-icon-button color=\"primary\" (click)=\"shareLink()\">\n    <mat-icon>share</mat-icon>\n  </button>\n</span>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ShareLinkComponent.ctorParameters = function () { return [
        { type: MatDialog },
        { type: MatSnackBar },
        { type: UtilityService },
        { type: Router },
        { type: ActivatedRoute },
        { type: ApiService }
    ]; };
    ShareLinkComponent.propDecorators = {
        publicSharedBaseUrl: [{ type: Input }],
        shareLinkApi: [{ type: Input }],
        globalConfig: [{ type: Input }],
        componentId: [{ type: Input }],
        baseUrl: [{ type: Input }],
        portalName: [{ type: Input }]
    };
    return ShareLinkComponent;
}());
export { ShareLinkComponent };
if (false) {
    /** @type {?} */
    ShareLinkComponent.prototype.publicSharedBaseUrl;
    /** @type {?} */
    ShareLinkComponent.prototype.shareLinkApi;
    /** @type {?} */
    ShareLinkComponent.prototype.globalConfig;
    /** @type {?} */
    ShareLinkComponent.prototype.componentId;
    /** @type {?} */
    ShareLinkComponent.prototype.baseUrl;
    /** @type {?} */
    ShareLinkComponent.prototype.portalName;
    /** @type {?} */
    ShareLinkComponent.prototype.url;
    /** @type {?} */
    ShareLinkComponent.prototype.uuId;
    /** @type {?} */
    ShareLinkComponent.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    ShareLinkComponent.prototype.snackBar;
    /**
     * @type {?}
     * @private
     */
    ShareLinkComponent.prototype.utility;
    /**
     * @type {?}
     * @private
     */
    ShareLinkComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    ShareLinkComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    ShareLinkComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL3NoYXJlLWxpbmsvc2hhcmUtbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDeEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRS9GO0lBa0JFLDRCQUFtQixNQUFpQixFQUMxQixRQUFzQixFQUN0QixPQUF3QixFQUN4QixNQUFjLEVBQVUsS0FBcUIsRUFBVSxVQUFzQjtRQUhwRSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVR2RixRQUFHLEdBQUc7WUFDSixTQUFTLEVBQUUsRUFBRTtZQUNiLFVBQVUsRUFBRSxFQUFFO1lBQ2QsVUFBVSxFQUFHLEVBQUU7U0FDaEIsQ0FBQTtJQUswRixDQUFDOzs7O0lBQzVGLHFDQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFDdkMsQ0FBQzs7OztJQUVE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QUFzQjs7SUFDdEIscUNBQWlCOztJQUNqQix3Q0FBb0I7O0lBQ3BCLGlDQUlDOztJQUNELGtDQUFVOztJQUNFLG9DQUF3Qjs7Ozs7SUFDbEMsc0NBQThCOzs7OztJQUM5QixxQ0FBZ0M7Ozs7O0lBQ2hDLG9DQUFzQjs7Ozs7SUFBRSxtQ0FBNkI7Ozs7O0lBQUUsd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU2hhcmVMaW5rVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlLWxpbmstdmlldy9zaGFyZS1saW5rLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS1tb2R1bGUvc2VydmljZXMvYXBpLXNlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlLW1vZHVsZS9zZXJ2aWNlcy91dGlsaXR5LXNlcnZpY2UvdXRpbGl0eS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNoYXJlLWxpbmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hhcmUtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NoYXJlLWxpbmsuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZUxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWNTaGFyZWRCYXNlVXJsO1xuICBASW5wdXQoKSBzaGFyZUxpbmtBcGkgIDtcbiAgQElucHV0KCkgZ2xvYmFsQ29uZmlnO1xuICBASW5wdXQoKSBjb21wb25lbnRJZCA7XG4gIEBJbnB1dCgpIGJhc2VVcmw7XG4gIEBJbnB1dCgpIHBvcnRhbE5hbWU7XG4gIHVybCA9IHtcbiAgICBwdWJsaWNVUkw6ICcnLFxuICAgIHByaXZhdGVVUkw6ICcnLFxuICAgIHJlcG9ydE5hbWUgOiAnJ1xuICB9XG4gIHV1SWQ6IGFueTtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nLCBcbiAgICBwcml2YXRlIHNuYWNrQmFyIDogTWF0U25hY2tCYXIsXG4gICAgcHJpdmF0ZSB1dGlsaXR5IDogVXRpbGl0eVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSkgeyB9XG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHVibGljU2hhcmVkQmFzZVVybClcbiAgfVxuXG4gIHNoYXJlTGluaygpOiB2b2lkIHtcbiAgICB0aGlzLnVybC5wcml2YXRlVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgY29uc29sZS5sb2coXCJzaGFyZWQgbGlua1wiKVxuICAgIHRoaXMucm91dGUudXJsLnN1YnNjcmliZSh1cmwgPT4ge1xuXG4gICAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgICAgbGV0IHJvdXRlSW5kZXggPSB0aGlzLnVybC5wcml2YXRlVVJMLmluZGV4T2YodXJsWzBdLnBhdGgpXG4gICAgICB0aGlzLnVybC5wdWJsaWNVUkwgPSB0aGlzLnB1YmxpY1NoYXJlZEJhc2VVcmwgKyB0aGlzLnVybC5wcml2YXRlVVJMLnNsaWNlKHJvdXRlSW5kZXgpK1wiJmNvbXBvbmVudE5hbWU9XCIrdGhpcy5jb21wb25lbnRJZDtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudXJsKVxuICAgICAgdGhpcy51cmwucmVwb3J0TmFtZSA9IHRoaXMuY29tcG9uZW50SWQ7XG4gICAgfSlcbiAgICB0aGlzLmFwaVNlcnZpY2UucG9zdCh0aGlzLnNoYXJlTGlua0FwaSAsIHRoaXMudXJsKS5zdWJzY3JpYmUoIHN1Y2Nlc3NEYXRhID0+e1xuICAgICAgY29uc29sZS5sb2coc3VjY2Vzc0RhdGEpO1xuICAgICAgXG5cbiAgICAgIHRoaXMudXVJZCA9IHRoaXMucHVibGljU2hhcmVkQmFzZVVybC5zdWJzdHJpbmcoMCwgdGhpcy5wdWJsaWNTaGFyZWRCYXNlVXJsLmxlbmd0aCAtIDEpICArXCI/bGlua0lkPVwiKyBzdWNjZXNzRGF0YVsncmVzdWx0J11bJ2xpbmtJZCddO1xuICAgICAgdGhpcy51cmwucHVibGljVVJMID0gdGhpcy5iYXNlVXJsK1wiL1wiK3RoaXMucG9ydGFsTmFtZS50b0xvd2VyQ2FzZSgpK1wiL3B1YmxpYz9saW5rSWQ9XCIrc3VjY2Vzc0RhdGFbJ3Jlc3VsdCddWydsaW5rSWQnXSA7XG5cbiAgICAgIHRoaXMub3BlbkRpYWxvZygpO1xuICAgIH0sZXJyb3IgPT4ge1xuICAgICAgLy90aGlzLnNuYWNrQmFyLm9wZW4odGhpcy5nbG9iYWxDb25maWcuZXJyb3JNZXNzYWdlLCBcIk9rXCIsIHsgZHVyYXRpb246IDkwMDAgfSk7XG4gICAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJIaWRlKCk7XG4gICAgfVxuXG4gICAgKVxuXG5cblxuICB9XG4gIG9wZW5EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihTaGFyZUxpbmtWaWV3Q29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogJzUwMHB4JyxcbiAgICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICAgIGRhdGEgOiB0aGlzLnVybC5wdWJsaWNVUkxcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1RoZSBkaWFsb2cgd2FzIGNsb3NlZCcpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuXG4iXX0=