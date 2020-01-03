/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.showDropdown = false;
        this.Logout = new EventEmitter();
        this.noAssess = false;
    }
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} url
     * @return {?}
     */
    NavbarComponent.prototype.homePage = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        window.open(url, "_self");
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        this.showDropdown = !this.showDropdown;
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.onSignout = /**
     * @return {?}
     */
    function () {
        this.Logout.emit(true);
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.onLogin = /**
     * @return {?}
     */
    function () {
        this.isLoggedIn = !this.isLoggedIn;
        this.onSignout();
    };
    NavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-navbar',
                    template: "<div *ngIf=\"url\">\n  <nav class=\"navbar noMarginPadding \">\n\n    <div class=\"col-sm-6  col-md-6 col-xs-6 col-lg-6 alingCenterline noMarginPadding\">\n\n      <img class=\"logo\" src={{logo}} (click)=\"homePage(url)\">\n      <!-- <mat-card-title class=\"pageBrand\">\n          <strong>{{ 'brand' | translate }}</strong>\n        </mat-card-title> -->\n    </div>\n\n    <!-- <div class=\"col-sm-4 mod \">\n           <mat-card-title style=\"font-size:18px; color:gray; text-align: center;\" >\n            Sikhshalocham Samikhsa \n              <mat-icon svgIcon=\"thumbs-up\" style=\"font-size:29px; color: gray;\">\n              </mat-icon>\n          </mat-card-title> \n        </div> -->\n\n\n\n\n    <div class=\"col-sm-6 col-md-6 col-xs-6 col-lg-6\">\n      <span *ngIf=\"!noAssess\" class=\"right _flex-box alingCenterline\">\n\n        \n        <button mat-icon-button (click)=\"openDropdown()\">\n          <i class=\"material-icons\">apps</i>\n        </button>\n\n        <div id=\"overlay\" (click)=\"openDropdown()\" *ngIf=\"showDropdown\">\n          <app-container [url]=\"url\" [portal]=\"portal\"></app-container>\n        </div>\n\n\n\n\n        <span mat-button [matMenuTriggerFor]=\"menu\" class=\"alingCenterline _cursor-pointer\" *ngIf=\"currentUser\">\n          <i class=\"material-icons brand dropdownIcon\">\n            person\n          </i>\n          <!-- <span class=\"brand \">{{currentUser?.name}}</span> -->\n          <i class=\"material-icons brand icon\">\n            keyboard_arrow_down\n          </i>\n        </span>\n        <mat-menu #menu=\"matMenu\">\n          <span mat-menu-item class=\"matmenuIcon\">\n            <i class=\"material-icons\">\n              supervised_user_circle\n            </i>\n            <span class=\"padding\">{{currentUser?.email}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"matmenuIcon black\">\n            <i class=\"material-icons\">\n              done\n            </i>\n            <span class=\"padding\">{{currentUser?.name}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"padding\" (click)=\"onSignout()\">\n            <span class=\"bigPadding black\">\n              {{'menuDropdown.signOut' | translate}}\n            </span>\n          </span>\n        </mat-menu>\n        <!-- <div class=\"right horizontalLine\">\n          <i class=\"material-icons brand helpIcon\">\n            help_outline\n          </i>\n        </div> -->\n      </span>\n\n    </div>\n\n\n  </nav>\n\n\n\n</div>",
                    styles: [".noMarginPadding{margin:0;padding:0}.brand{color:var(--primary-color);margin-bottom:0}.logo{height:50px}.horizontalLine{position:relative;padding:0 8px}.icon{font-size:16px;padding-right:10px}.helpIcon{font-weight:10px}.horizontalLine:before{content:\"\";background:var(--border-color);position:absolute;bottom:20%;left:-5px;height:60%;width:1px}.navbar{display:flex;align-items:center}.line{line-height:12px}#overlay{position:fixed;display:hidden;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:transperent;z-index:101}.pageBrand{font-size:18px;padding:0 10px;margin-bottom:0}.pageMenu{margin-bottom:0}.alingCenterline{display:flex;align-items:center}.dropdownIcon{top:1px;line-height:2}.right{display:flex;justify-content:flex-end}.matmenuIcon{display:flex;align-items:center;color:#bababa}.padding{padding-left:10px}.bigPadding{padding-left:40px}.black{color:var(--grey-color)}._primary-btn{font-size:14px;padding-bottom:2px;height:30px;line-height:0;margin-bottom:6px;color:var(--white-color)}"]
                }] }
    ];
    /** @nocollapse */
    NavbarComponent.ctorParameters = function () { return []; };
    NavbarComponent.propDecorators = {
        url: [{ type: Input }],
        dropdownLabel: [{ type: Input }],
        currentUser: [{ type: Input }],
        logo: [{ type: Input }],
        Logout: [{ type: Output }],
        isLoggedIn: [{ type: Input }],
        portal: [{ type: Input }],
        noAssess: [{ type: Input }]
    };
    return NavbarComponent;
}());
export { NavbarComponent };
if (false) {
    /** @type {?} */
    NavbarComponent.prototype.url;
    /** @type {?} */
    NavbarComponent.prototype.showDropdown;
    /** @type {?} */
    NavbarComponent.prototype.dropdownLabel;
    /** @type {?} */
    NavbarComponent.prototype.currentUser;
    /** @type {?} */
    NavbarComponent.prototype.logo;
    /** @type {?} */
    NavbarComponent.prototype.Logout;
    /** @type {?} */
    NavbarComponent.prototype.isLoggedIn;
    /** @type {?} */
    NavbarComponent.prototype.portal;
    /** @type {?} */
    NavbarComponent.prototype.noAssess;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLW1vZHVsZS9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBZ0JFO1FBVEEsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFJWCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUcsQ0FBQztRQUc5QixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBRzFCLENBQUM7Ozs7SUFHRCxrQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUNELGtDQUFROzs7O0lBQVIsVUFBUyxHQUFHO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELHNDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFDRCxtQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBQ0QsaUNBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7O2dCQW5DSCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLDRqRkFBc0M7O2lCQUV2Qzs7Ozs7c0JBRUUsS0FBSztnQ0FFTCxLQUFLOzhCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxNQUFNOzZCQUNOLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQXNCUixzQkFBQztDQUFBLEFBcENELElBb0NDO1NBL0JZLGVBQWU7OztJQUMxQiw4QkFBYTs7SUFDYix1Q0FBcUI7O0lBQ3JCLHdDQUF1Qjs7SUFDdkIsc0NBQTBCOztJQUMxQiwrQkFBZTs7SUFDZixpQ0FBdUM7O0lBQ3ZDLHFDQUFvQjs7SUFDcEIsaUNBQWdCOztJQUNoQixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1uYXZiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2YmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdXJsO1xuICBzaG93RHJvcGRvd24gPSBmYWxzZTtcbiAgQElucHV0KCkgZHJvcGRvd25MYWJlbDtcbiAgQElucHV0KCkgY3VycmVudFVzZXI6IGFueTtcbiAgQElucHV0KCkgbG9nbyA7XG4gIEBPdXRwdXQoKSBMb2dvdXQgPSBuZXcgRXZlbnRFbWl0dGVyICgpO1xuICBASW5wdXQoKSBpc0xvZ2dlZEluO1xuICBASW5wdXQoKSBwb3J0YWw7XG4gIEBJbnB1dCgpIG5vQXNzZXNzID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIGhvbWVQYWdlKHVybCl7XG4gICAgd2luZG93Lm9wZW4odXJsLCBcIl9zZWxmXCIpO1xuICB9XG5cbiAgb3BlbkRyb3Bkb3duKCkge1xuICAgIHRoaXMuc2hvd0Ryb3Bkb3duID0gIXRoaXMuc2hvd0Ryb3Bkb3duO1xuICB9XG4gIG9uU2lnbm91dCgpIHtcbiAgICB0aGlzLkxvZ291dC5lbWl0KHRydWUpO1xuICB9XG4gIG9uTG9naW4oKSB7XG4gICAgdGhpcy5pc0xvZ2dlZEluPSF0aGlzLmlzTG9nZ2VkSW47XG4gICAgdGhpcy5vblNpZ25vdXQoKTtcbiAgIH1cbn1cblxuXG5cblxuXG5cbiJdfQ==