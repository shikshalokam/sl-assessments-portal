/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class ResponsiveNavbarComponent {
    constructor() {
        this.showDropdown = false;
        this.openDrawer = new EventEmitter();
        this.Logout = new EventEmitter();
        this.noAssess = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.openSideNav();
    }
    /**
     * @return {?}
     */
    onSignout() {
        this.Logout.emit(true);
    }
    /**
     * @return {?}
     */
    openSideNav() {
        this.openDrawer.emit(true);
    }
    /**
     * @return {?}
     */
    openDropdown() {
        this.showDropdown = !this.showDropdown;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    navigate(url) {
        window.open(url, "_blank");
    }
}
ResponsiveNavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-responsive-navbar',
                template: "<nav class=\"responsiveNavbar noMarginPadding\">\n  <body class=\" col-xs-12 noMarginPadding alingCenterline\" >\n      <span  *ngIf=\"!noAssess\"class=\"col-xs-4 alingCenterline noMarginPadding\">\n          <button mat-icon-button>\n          <i class=\"material-icons\" (click)=\"openSideNav()\">\n            menu\n              </i>\n              </button>\n      </span>\n    \n    <mat-card-title [ngClass]=\"{'pageBrand col-xs-4 alingCenterline' : !noAssess , 'col-xs-8  _flexStart' : noAssess }\" class=\"pageBrand col-xs-4 alingCenterline\">\n        <img  class=\"logo\" src ={{logo}} >\n      <!-- <strong>{{ 'brandResponsive' | translate }}</strong> -->\n    </mat-card-title>\n\n    <span class=\"col-xs-4 noMarginPadding _flexEnd\">\n\n     <!-- Responsive nav -->\n\n\n        <span *ngIf=\"!noAssess\" class=\"right _flex-box alingCenterline app-box\">\n            <button mat-icon-button (click)=\"openDropdown()\">\n                  <i class=\"material-icons\">apps</i>\n            </button>\n            \n            <div id=\"overlay\" (click)=\"openDropdown()\" *ngIf=\"showDropdown\">\n             <app-container [url]=\"url\" [portal]=\"portal\"></app-container>\n              </div>\n\n\n\n\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\" _cursor-pointer\">\n          <i class=\"material-icons dropdownIcon\">\n              person\n              </i>\n        </button>\n      </span>\n\n        <mat-menu #menu=\"matMenu\">\n          <span mat-menu-item class=\"matmenuIcon\">\n            <i class=\"material-icons\">\n              supervised_user_circle\n            </i>\n            <span class=\"padding\">{{currentUser?.email}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"matmenuIcon black\">\n            <i class=\"material-icons\">\n              done\n            </i>\n            <span class=\"padding\">{{currentUser?.name}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"padding\" (click)=\"onSignout()\">\n            <span class=\"bigPadding \">\n              {{'menuDropdown.signOut' | translate}}\n            </span>\n          </span>\n  \n        </mat-menu>\n      </span>\n    \n    </body>\n</nav>",
                styles: [".noMarginPadding{margin:0;padding:0}.icon{font-size:16px;padding-right:10px}._flexEnd{display:flex;justify-content:flex-end}.logo{height:50px}._flexStart{display:flex;justify-content:flex-start}.responsiveNavbar{display:none;align-items:center;height:51px}.line{line-height:12px}.pageBrand{font-size:18px;padding:0 10px;margin-bottom:-4px;display:flex;justify-content:center}.pageMenu{margin-top:0}.alingCenterline{display:flex;align-items:center}.dropdownIcon{top:1px;margin-top:7px;font-weight:700}.active{color:var(--white-color);background-color:var(--primary-color)}.matmenuIcon{display:flex;align-items:center;color:var(--grey-color)}.padding{padding-left:10px}.bigPadding{padding-left:40px}.black{color:var(--black-color)}.responsiveLogo{margin-top:-5px}.right{display:flex;justify-content:flex-end}.app-box{width:300px!important}"]
            }] }
];
/** @nocollapse */
ResponsiveNavbarComponent.ctorParameters = () => [];
ResponsiveNavbarComponent.propDecorators = {
    openDrawer: [{ type: Output }],
    currentUser: [{ type: Input }],
    logo: [{ type: Input }],
    Logout: [{ type: Output }],
    url: [{ type: Input }],
    portal: [{ type: Input }],
    noAssess: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ResponsiveNavbarComponent.prototype.showDropdown;
    /** @type {?} */
    ResponsiveNavbarComponent.prototype.openDrawer;
    /** @type {?} */
    ResponsiveNavbarComponent.prototype.currentUser;
    /** @type {?} */
    ResponsiveNavbarComponent.prototype.logo;
    /** @type {?} */
    ResponsiveNavbarComponent.prototype.Logout;
    /** @type {?} */
    ResponsiveNavbarComponent.prototype.url;
    /** @type {?} */
    ResponsiveNavbarComponent.prototype.portal;
    /** @type {?} */
    ResponsiveNavbarComponent.prototype.noAssess;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL2NvcmUtbW9kdWxlL2NvbXBvbmVudHMvcmVzcG9uc2l2ZS1uYXZiYXIvcmVzcG9uc2l2ZS1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyx5QkFBeUI7SUFVcEM7UUFUQSxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUVYLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRyxDQUFDO1FBRzlCLGFBQVEsR0FBRSxLQUFLLENBQUM7SUFFekIsQ0FBQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUNELFNBQVM7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFDRCxRQUFRLENBQUMsR0FBRztRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsdXdFQUFpRDs7YUFFbEQ7Ozs7O3lCQUlFLE1BQU07MEJBQ04sS0FBSzttQkFDTCxLQUFLO3FCQUNMLE1BQU07a0JBQ04sS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFSTixpREFBcUI7O0lBRXJCLCtDQUEwQzs7SUFDMUMsZ0RBQTBCOztJQUMxQix5Q0FBZTs7SUFDZiwyQ0FBdUM7O0lBQ3ZDLHdDQUFhOztJQUNiLDJDQUFnQjs7SUFDaEIsNkNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcmVzcG9uc2l2ZS1uYXZiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzcG9uc2l2ZS1uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXNwb25zaXZlLW5hdmJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzaG93RHJvcGRvd24gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgb3BlbkRyYXdlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgY3VycmVudFVzZXI6IGFueTtcbiAgQElucHV0KCkgbG9nbyA7XG4gIEBPdXRwdXQoKSBMb2dvdXQgPSBuZXcgRXZlbnRFbWl0dGVyICgpO1xuICBASW5wdXQoKSB1cmw7XG4gIEBJbnB1dCgpIHBvcnRhbDtcbiAgQElucHV0KCkgbm9Bc3Nlc3M9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9wZW5TaWRlTmF2KCk7XG4gIH1cbiAgb25TaWdub3V0KCl7XG4gICAgdGhpcy5Mb2dvdXQuZW1pdCh0cnVlKTtcbiAgfVxuICBvcGVuU2lkZU5hdigpe1xuICAgIHRoaXMub3BlbkRyYXdlci5lbWl0KHRydWUpO1xuICB9XG5cbiAgb3BlbkRyb3Bkb3duKCkge1xuICAgIHRoaXMuc2hvd0Ryb3Bkb3duID0gIXRoaXMuc2hvd0Ryb3Bkb3duO1xuICB9XG4gIG5hdmlnYXRlKHVybCl7XG4gICAgd2luZG93Lm9wZW4odXJsLCBcIl9ibGFua1wiKTtcbiAgfVxuIFxufVxuIl19