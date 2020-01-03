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
export class ShareLinkComponent {
    /**
     * @param {?} dialog
     * @param {?} snackBar
     * @param {?} utility
     * @param {?} router
     * @param {?} route
     * @param {?} apiService
     */
    constructor(dialog, snackBar, utility, router, route, apiService) {
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
    ngOnInit() {
        console.log(this.publicSharedBaseUrl);
    }
    /**
     * @return {?}
     */
    shareLink() {
        this.url.privateURL = window.location.href;
        console.log("shared link");
        this.route.url.subscribe((/**
         * @param {?} url
         * @return {?}
         */
        url => {
            console.log(url);
            /** @type {?} */
            let routeIndex = this.url.privateURL.indexOf(url[0].path);
            this.url.publicURL = this.publicSharedBaseUrl + this.url.privateURL.slice(routeIndex) + "&componentName=" + this.componentId;
            console.log(this.url);
            this.url.reportName = this.componentId;
        }));
        this.apiService.post(this.shareLinkApi, this.url).subscribe((/**
         * @param {?} successData
         * @return {?}
         */
        successData => {
            console.log(successData);
            this.uuId = this.publicSharedBaseUrl.substring(0, this.publicSharedBaseUrl.length - 1) + "?linkId=" + successData['result']['linkId'];
            this.url.publicURL = this.baseUrl + "/" + this.portalName.toLowerCase() + "/public?linkId=" + successData['result']['linkId'];
            this.openDialog();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            //this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
            this.utility.loaderHide();
        }));
    }
    /**
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(ShareLinkViewComponent, {
            width: '500px',
            height: '200px',
            data: this.url.publicURL
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            console.log('The dialog was closed');
        }));
    }
}
ShareLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-share-link',
                template: "<span class=\"_margin-top\">\n  <!-- <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Share Link</button> -->\n  <button mat-icon-button color=\"primary\" (click)=\"shareLink()\">\n    <mat-icon>share</mat-icon>\n  </button>\n</span>",
                styles: [""]
            }] }
];
/** @nocollapse */
ShareLinkComponent.ctorParameters = () => [
    { type: MatDialog },
    { type: MatSnackBar },
    { type: UtilityService },
    { type: Router },
    { type: ActivatedRoute },
    { type: ApiService }
];
ShareLinkComponent.propDecorators = {
    publicSharedBaseUrl: [{ type: Input }],
    shareLinkApi: [{ type: Input }],
    globalConfig: [{ type: Input }],
    componentId: [{ type: Input }],
    baseUrl: [{ type: Input }],
    portalName: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL3NoYXJlLWxpbmsvc2hhcmUtbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDeEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBTy9GLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7OztJQWE3QixZQUFtQixNQUFpQixFQUMxQixRQUFzQixFQUN0QixPQUF3QixFQUN4QixNQUFjLEVBQVUsS0FBcUIsRUFBVSxVQUFzQjtRQUhwRSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVR2RixRQUFHLEdBQUc7WUFDSixTQUFTLEVBQUUsRUFBRTtZQUNiLFVBQVUsRUFBRSxFQUFFO1lBQ2QsVUFBVSxFQUFHLEVBQUU7U0FDaEIsQ0FBQTtJQUswRixDQUFDOzs7O0lBQzVGLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lB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SUM7O0lBQ0Qsa0NBQVU7O0lBQ0Usb0NBQXdCOzs7OztJQUNsQyxzQ0FBOEI7Ozs7O0lBQzlCLHFDQUFnQzs7Ozs7SUFDaEMsb0NBQXNCOzs7OztJQUFFLG1DQUE2Qjs7Ozs7SUFBRSx3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTaGFyZUxpbmtWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmUtbGluay12aWV3L3NoYXJlLWxpbmstZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlLW1vZHVsZS9zZXJ2aWNlcy9hcGktc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUtbW9kdWxlL3NlcnZpY2VzL3V0aWxpdHktc2VydmljZS91dGlsaXR5LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2hhcmUtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaGFyZS1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2hhcmUtbGluay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlTGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpY1NoYXJlZEJhc2VVcmw7XG4gIEBJbnB1dCgpIHNoYXJlTGlua0FwaSAgO1xuICBASW5wdXQoKSBnbG9iYWxDb25maWc7XG4gIEBJbnB1dCgpIGNvbXBvbmVudElkIDtcbiAgQElucHV0KCkgYmFzZVVybDtcbiAgQElucHV0KCkgcG9ydGFsTmFtZTtcbiAgdXJsID0ge1xuICAgIHB1YmxpY1VSTDogJycsXG4gICAgcHJpdmF0ZVVSTDogJycsXG4gICAgcmVwb3J0TmFtZSA6ICcnXG4gIH1cbiAgdXVJZDogYW55O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csIFxuICAgIHByaXZhdGUgc25hY2tCYXIgOiBNYXRTbmFja0JhcixcbiAgICBwcml2YXRlIHV0aWxpdHkgOiBVdGlsaXR5U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7IH1cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wdWJsaWNTaGFyZWRCYXNlVXJsKVxuICB9XG5cbiAgc2hhcmVMaW5rKCk6IHZvaWQge1xuICAgIHRoaXMudXJsLnByaXZhdGVVUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBjb25zb2xlLmxvZyhcInNoYXJlZCBsaW5rXCIpXG4gICAgdGhpcy5yb3V0ZS51cmwuc3Vic2NyaWJlKHVybCA9PiB7XG5cbiAgICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgICBsZXQgcm91dGVJbmRleCA9IHRoaXMudXJsLnByaXZhdGVVUkwuaW5kZXhPZih1cmxbMF0ucGF0aClcbiAgICAgIHRoaXMudXJsLnB1YmxpY1VSTCA9IHRoaXMucHVibGljU2hhcmVkQmFzZVVybCArIHRoaXMudXJsLnByaXZhdGVVUkwuc2xpY2Uocm91dGVJbmRleCkrXCImY29tcG9uZW50TmFtZT1cIit0aGlzLmNvbXBvbmVudElkO1xuICAgICAgY29uc29sZS5sb2codGhpcy51cmwpXG4gICAgICB0aGlzLnVybC5yZXBvcnROYW1lID0gdGhpcy5jb21wb25lbnRJZDtcbiAgICB9KVxuICAgIHRoaXMuYXBpU2VydmljZS5wb3N0KHRoaXMuc2hhcmVMaW5rQXBpICwgdGhpcy51cmwpLnN1YnNjcmliZSggc3VjY2Vzc0RhdGEgPT57XG4gICAgICBjb25zb2xlLmxvZyhzdWNjZXNzRGF0YSk7XG4gICAgICBcblxuICAgICAgdGhpcy51dUlkID0gdGhpcy5wdWJsaWNTaGFyZWRCYXNlVXJsLnN1YnN0cmluZygwLCB0aGlzLnB1YmxpY1NoYXJlZEJhc2VVcmwubGVuZ3RoIC0gMSkgICtcIj9saW5rSWQ9XCIrIHN1Y2Nlc3NEYXRhWydyZXN1bHQnXVsnbGlua0lkJ107XG4gICAgICB0aGlzLnVybC5wdWJsaWNVUkwgPSB0aGlzLmJhc2VVcmwrXCIvXCIrdGhpcy5wb3J0YWxOYW1lLnRvTG93ZXJDYXNlKCkrXCIvcHVibGljP2xpbmtJZD1cIitzdWNjZXNzRGF0YVsncmVzdWx0J11bJ2xpbmtJZCddIDtcblxuICAgICAgdGhpcy5vcGVuRGlhbG9nKCk7XG4gICAgfSxlcnJvciA9PiB7XG4gICAgICAvL3RoaXMuc25hY2tCYXIub3Blbih0aGlzLmdsb2JhbENvbmZpZy5lcnJvck1lc3NhZ2UsIFwiT2tcIiwgeyBkdXJhdGlvbjogOTAwMCB9KTtcbiAgICAgICAgdGhpcy51dGlsaXR5LmxvYWRlckhpZGUoKTtcbiAgICB9XG5cbiAgICApXG5cblxuXG4gIH1cbiAgb3BlbkRpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFNoYXJlTGlua1ZpZXdDb21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnNTAwcHgnLFxuICAgICAgaGVpZ2h0OiAnMjAwcHgnLFxuICAgICAgZGF0YSA6IHRoaXMudXJsLnB1YmxpY1VSTFxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlIGRpYWxvZyB3YXMgY2xvc2VkJyk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5cbiJdfQ==