/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NavbarComponent {
    constructor() {
        this.showDropdown = false;
        this.Logout = new EventEmitter();
        this.noAssess = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    homePage(url) {
        window.open(url, "_self");
    }
    /**
     * @return {?}
     */
    openDropdown() {
        this.showDropdown = !this.showDropdown;
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
    onLogin() {
        this.isLoggedIn = !this.isLoggedIn;
        this.onSignout();
    }
}
NavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-navbar',
                template: "<div *ngIf=\"url\">\n  <nav class=\"navbar noMarginPadding \">\n\n    <div class=\"col-sm-6  col-md-6 col-xs-6 col-lg-6 alingCenterline noMarginPadding\">\n\n      <img class=\"logo\" src={{logo}} (click)=\"homePage(url)\">\n      <!-- <mat-card-title class=\"pageBrand\">\n          <strong>{{ 'brand' | translate }}</strong>\n        </mat-card-title> -->\n    </div>\n\n    <!-- <div class=\"col-sm-4 mod \">\n           <mat-card-title style=\"font-size:18px; color:gray; text-align: center;\" >\n            Sikhshalocham Samikhsa \n              <mat-icon svgIcon=\"thumbs-up\" style=\"font-size:29px; color: gray;\">\n              </mat-icon>\n          </mat-card-title> \n        </div> -->\n\n\n\n\n    <div class=\"col-sm-6 col-md-6 col-xs-6 col-lg-6\">\n      <span *ngIf=\"!noAssess\" class=\"right _flex-box alingCenterline\">\n\n        \n        <button mat-icon-button (click)=\"openDropdown()\">\n          <i class=\"material-icons\">apps</i>\n        </button>\n\n        <div id=\"overlay\" (click)=\"openDropdown()\" *ngIf=\"showDropdown\">\n          <app-container [url]=\"url\" [portal]=\"portal\"></app-container>\n        </div>\n\n\n\n\n        <span mat-button [matMenuTriggerFor]=\"menu\" class=\"alingCenterline _cursor-pointer\" *ngIf=\"currentUser\">\n          <i class=\"material-icons brand dropdownIcon\">\n            person\n          </i>\n          <!-- <span class=\"brand \">{{currentUser?.name}}</span> -->\n          <i class=\"material-icons brand icon\">\n            keyboard_arrow_down\n          </i>\n        </span>\n        <mat-menu #menu=\"matMenu\">\n          <span mat-menu-item class=\"matmenuIcon\">\n            <i class=\"material-icons\">\n              supervised_user_circle\n            </i>\n            <span class=\"padding\">{{currentUser?.email}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"matmenuIcon black\">\n            <i class=\"material-icons\">\n              done\n            </i>\n            <span class=\"padding\">{{currentUser?.name}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"padding\" (click)=\"onSignout()\">\n            <span class=\"bigPadding black\">\n              {{'menuDropdown.signOut' | translate}}\n            </span>\n          </span>\n        </mat-menu>\n        <!-- <div class=\"right horizontalLine\">\n          <i class=\"material-icons brand helpIcon\">\n            help_outline\n          </i>\n        </div> -->\n      </span>\n\n    </div>\n\n\n  </nav>\n\n\n\n</div>",
                styles: [".noMarginPadding{margin:0;padding:0}.brand{color:var(--primary-color);margin-bottom:0}.logo{height:50px}.horizontalLine{position:relative;padding:0 8px}.icon{font-size:16px;padding-right:10px}.helpIcon{font-weight:10px}.horizontalLine:before{content:\"\";background:var(--border-color);position:absolute;bottom:20%;left:-5px;height:60%;width:1px}.navbar{display:flex;align-items:center}.line{line-height:12px}#overlay{position:fixed;display:hidden;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:transperent;z-index:101}.pageBrand{font-size:18px;padding:0 10px;margin-bottom:0}.pageMenu{margin-bottom:0}.alingCenterline{display:flex;align-items:center}.dropdownIcon{top:1px;line-height:2}.right{display:flex;justify-content:flex-end}.matmenuIcon{display:flex;align-items:center;color:#bababa}.padding{padding-left:10px}.bigPadding{padding-left:40px}.black{color:var(--grey-color)}._primary-btn{font-size:14px;padding-bottom:2px;height:30px;line-height:0;margin-bottom:6px;color:var(--white-color)}"]
            }] }
];
/** @nocollapse */
NavbarComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLW1vZHVsZS9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxlQUFlO0lBVzFCO1FBVEEsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFJWCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUcsQ0FBQztRQUc5QixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBRzFCLENBQUM7Ozs7SUFHRCxRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFDRCxRQUFRLENBQUMsR0FBRztRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDekMsQ0FBQzs7OztJQUNELFNBQVM7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBQ0QsT0FBTztRQUNMLElBQUksQ0FBQyxVQUFVLEdBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7WUFuQ0gsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0Qiw0akZBQXNDOzthQUV2Qzs7Ozs7a0JBRUUsS0FBSzs0QkFFTCxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxNQUFNO3lCQUNOLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzs7O0lBUk4sOEJBQWE7O0lBQ2IsdUNBQXFCOztJQUNyQix3Q0FBdUI7O0lBQ3ZCLHNDQUEwQjs7SUFDMUIsK0JBQWU7O0lBQ2YsaUNBQXVDOztJQUN2QyxxQ0FBb0I7O0lBQ3BCLGlDQUFnQjs7SUFDaEIsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbmF2YmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdmJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHVybDtcbiAgc2hvd0Ryb3Bkb3duID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRyb3Bkb3duTGFiZWw7XG4gIEBJbnB1dCgpIGN1cnJlbnRVc2VyOiBhbnk7XG4gIEBJbnB1dCgpIGxvZ28gO1xuICBAT3V0cHV0KCkgTG9nb3V0ID0gbmV3IEV2ZW50RW1pdHRlciAoKTtcbiAgQElucHV0KCkgaXNMb2dnZWRJbjtcbiAgQElucHV0KCkgcG9ydGFsO1xuICBASW5wdXQoKSBub0Fzc2VzcyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBob21lUGFnZSh1cmwpe1xuICAgIHdpbmRvdy5vcGVuKHVybCwgXCJfc2VsZlwiKTtcbiAgfVxuXG4gIG9wZW5Ecm9wZG93bigpIHtcbiAgICB0aGlzLnNob3dEcm9wZG93biA9ICF0aGlzLnNob3dEcm9wZG93bjtcbiAgfVxuICBvblNpZ25vdXQoKSB7XG4gICAgdGhpcy5Mb2dvdXQuZW1pdCh0cnVlKTtcbiAgfVxuICBvbkxvZ2luKCkge1xuICAgIHRoaXMuaXNMb2dnZWRJbj0hdGhpcy5pc0xvZ2dlZEluO1xuICAgIHRoaXMub25TaWdub3V0KCk7XG4gICB9XG59XG5cblxuXG5cblxuXG4iXX0=