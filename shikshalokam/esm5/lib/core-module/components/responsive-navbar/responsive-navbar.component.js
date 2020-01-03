/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ResponsiveNavbarComponent = /** @class */ (function () {
    function ResponsiveNavbarComponent() {
        this.showDropdown = false;
        this.openDrawer = new EventEmitter();
        this.Logout = new EventEmitter();
        this.noAssess = false;
    }
    /**
     * @return {?}
     */
    ResponsiveNavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.openSideNav();
    };
    /**
     * @return {?}
     */
    ResponsiveNavbarComponent.prototype.onSignout = /**
     * @return {?}
     */
    function () {
        this.Logout.emit(true);
    };
    /**
     * @return {?}
     */
    ResponsiveNavbarComponent.prototype.openSideNav = /**
     * @return {?}
     */
    function () {
        this.openDrawer.emit(true);
    };
    /**
     * @return {?}
     */
    ResponsiveNavbarComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        this.showDropdown = !this.showDropdown;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    ResponsiveNavbarComponent.prototype.navigate = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        window.open(url, "_blank");
    };
    ResponsiveNavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-responsive-navbar',
                    template: "<nav class=\"responsiveNavbar noMarginPadding\">\n  <body class=\" col-xs-12 noMarginPadding alingCenterline\" >\n      <span  *ngIf=\"!noAssess\"class=\"col-xs-4 alingCenterline noMarginPadding\">\n          <button mat-icon-button>\n          <i class=\"material-icons\" (click)=\"openSideNav()\">\n            menu\n              </i>\n              </button>\n      </span>\n    \n    <mat-card-title [ngClass]=\"{'pageBrand col-xs-4 alingCenterline' : !noAssess , 'col-xs-8  _flexStart' : noAssess }\" class=\"pageBrand col-xs-4 alingCenterline\">\n        <img  class=\"logo\" src ={{logo}} >\n      <!-- <strong>{{ 'brandResponsive' | translate }}</strong> -->\n    </mat-card-title>\n\n    <span class=\"col-xs-4 noMarginPadding _flexEnd\">\n\n     <!-- Responsive nav -->\n\n\n        <span *ngIf=\"!noAssess\" class=\"right _flex-box alingCenterline app-box\">\n            <button mat-icon-button (click)=\"openDropdown()\">\n                  <i class=\"material-icons\">apps</i>\n            </button>\n            \n            <div id=\"overlay\" (click)=\"openDropdown()\" *ngIf=\"showDropdown\">\n             <app-container [url]=\"url\" [portal]=\"portal\"></app-container>\n              </div>\n\n\n\n\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\" _cursor-pointer\">\n          <i class=\"material-icons dropdownIcon\">\n              person\n              </i>\n        </button>\n      </span>\n\n        <mat-menu #menu=\"matMenu\">\n          <span mat-menu-item class=\"matmenuIcon\">\n            <i class=\"material-icons\">\n              supervised_user_circle\n            </i>\n            <span class=\"padding\">{{currentUser?.email}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"matmenuIcon black\">\n            <i class=\"material-icons\">\n              done\n            </i>\n            <span class=\"padding\">{{currentUser?.name}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"padding\" (click)=\"onSignout()\">\n            <span class=\"bigPadding \">\n              {{'menuDropdown.signOut' | translate}}\n            </span>\n          </span>\n  \n        </mat-menu>\n      </span>\n    \n    </body>\n</nav>",
                    styles: [".noMarginPadding{margin:0;padding:0}.icon{font-size:16px;padding-right:10px}._flexEnd{display:flex;justify-content:flex-end}.logo{height:50px}._flexStart{display:flex;justify-content:flex-start}.responsiveNavbar{display:none;align-items:center;height:51px}.line{line-height:12px}.pageBrand{font-size:18px;padding:0 10px;margin-bottom:-4px;display:flex;justify-content:center}.pageMenu{margin-top:0}.alingCenterline{display:flex;align-items:center}.dropdownIcon{top:1px;margin-top:7px;font-weight:700}.active{color:var(--white-color);background-color:var(--primary-color)}.matmenuIcon{display:flex;align-items:center;color:var(--grey-color)}.padding{padding-left:10px}.bigPadding{padding-left:40px}.black{color:var(--black-color)}.responsiveLogo{margin-top:-5px}.right{display:flex;justify-content:flex-end}.app-box{width:300px!important}"]
                }] }
    ];
    /** @nocollapse */
    ResponsiveNavbarComponent.ctorParameters = function () { return []; };
    ResponsiveNavbarComponent.propDecorators = {
        openDrawer: [{ type: Output }],
        currentUser: [{ type: Input }],
        logo: [{ type: Input }],
        Logout: [{ type: Output }],
        url: [{ type: Input }],
        portal: [{ type: Input }],
        noAssess: [{ type: Input }]
    };
    return ResponsiveNavbarComponent;
}());
export { ResponsiveNavbarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL2NvcmUtbW9kdWxlL2NvbXBvbmVudHMvcmVzcG9uc2l2ZS1uYXZiYXIvcmVzcG9uc2l2ZS1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBZUU7UUFUQSxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUVYLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRyxDQUFDO1FBRzlCLGFBQVEsR0FBRSxLQUFLLENBQUM7SUFFekIsQ0FBQzs7OztJQUNELDRDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBQ0QsNkNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7OztJQUNELCtDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxnREFBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDOzs7OztJQUNELDRDQUFROzs7O0lBQVIsVUFBUyxHQUFHO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyx1d0VBQWlEOztpQkFFbEQ7Ozs7OzZCQUlFLE1BQU07OEJBQ04sS0FBSzt1QkFDTCxLQUFLO3lCQUNMLE1BQU07c0JBQ04sS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBb0JSLGdDQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E3QlkseUJBQXlCOzs7SUFDcEMsaURBQXFCOztJQUVyQiwrQ0FBMEM7O0lBQzFDLGdEQUEwQjs7SUFDMUIseUNBQWU7O0lBQ2YsMkNBQXVDOztJQUN2Qyx3Q0FBYTs7SUFDYiwyQ0FBZ0I7O0lBQ2hCLDZDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJlc3BvbnNpdmUtbmF2YmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3BvbnNpdmUtbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzcG9uc2l2ZS1uYXZiYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2hvd0Ryb3Bkb3duID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIG9wZW5EcmF3ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGN1cnJlbnRVc2VyOiBhbnk7XG4gIEBJbnB1dCgpIGxvZ28gO1xuICBAT3V0cHV0KCkgTG9nb3V0ID0gbmV3IEV2ZW50RW1pdHRlciAoKTtcbiAgQElucHV0KCkgdXJsO1xuICBASW5wdXQoKSBwb3J0YWw7XG4gIEBJbnB1dCgpIG5vQXNzZXNzPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcGVuU2lkZU5hdigpO1xuICB9XG4gIG9uU2lnbm91dCgpe1xuICAgIHRoaXMuTG9nb3V0LmVtaXQodHJ1ZSk7XG4gIH1cbiAgb3BlblNpZGVOYXYoKXtcbiAgICB0aGlzLm9wZW5EcmF3ZXIuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIG9wZW5Ecm9wZG93bigpIHtcbiAgICB0aGlzLnNob3dEcm9wZG93biA9ICF0aGlzLnNob3dEcm9wZG93bjtcbiAgfVxuICBuYXZpZ2F0ZSh1cmwpe1xuICAgIHdpbmRvdy5vcGVuKHVybCwgXCJfYmxhbmtcIik7XG4gIH1cbiBcbn1cbiJdfQ==