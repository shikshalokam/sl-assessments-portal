/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material';
var DashboardBlocksComponent = /** @class */ (function () {
    function DashboardBlocksComponent(snackBar) {
        this.snackBar = snackBar;
        this.canAcess = localStorage.getItem('canAcess');
        this.sendNavigationLink = new EventEmitter();
    }
    /**
     * @return {?}
     */
    DashboardBlocksComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} nav
     * @return {?}
     */
    DashboardBlocksComponent.prototype.navigateLink = /**
     * @param {?} nav
     * @return {?}
     */
    function (nav) {
        this.sendNavigationLink.emit(nav);
    };
    /**
     * @return {?}
     */
    DashboardBlocksComponent.prototype.showMessage = /**
     * @return {?}
     */
    function () {
        this.snackBar.open("Comming Soon.", "Ok", { duration: 9000 });
    };
    DashboardBlocksComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dashboard-blocks',
                    template: "\n<div class=\"_flex-box _justify-content-center wrapper\">\n\n  <div class=\"_full-width \">\n    <div *ngFor=\"let dashBoard of list\" >\n      <div class=\" col-lg-3 col-md-4 col-sm-6 col-xs-12 margin-top _justify-content-center flex-box\"  title=\"{{dashBoard.tooltip|translate}}\" *ngIf=\"canAcess.includes(dashBoard.id)\"  (click)=\"dashBoard?.disabled ?  navigateLink(dashBoard.anchorLink) : showMessage()\">\n        <div class=\" box iconBox\">\n          <i class=\"material-icons folderIcon\">\n           {{dashBoard.icon}}\n          </i>\n        </div>\n        <div class=\" box \">\n          <div class=\"description\">\n              {{dashBoard.tooltip|translate}}\n          </div>\n          \n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>",
                    styles: [".flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.description{color:var(--grey-color);text-overflow:ellipsis;overflow:hidden;width:110px;text-align:center}.dashBoardIcon{width:200px;height:200px;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;border-radius:20px;margin:0 20px}.margin-top{margin-top:20px}.folderIcon{font-size:70px;color:var(--blue-gradient-color);display:flex;align-items:center}.wrapper{padding:0 20px}.box{width:100%;display:flex;justify-content:center}.iconBox{background-image:linear-gradient(to top,#e8eced 10%,#fff 90%);height:120px;width:120px;border:1px solid var(--grey-color);border-radius:15px}"]
                }] }
    ];
    /** @nocollapse */
    DashboardBlocksComponent.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    DashboardBlocksComponent.propDecorators = {
        list: [{ type: Input }],
        sendNavigationLink: [{ type: Output }]
    };
    return DashboardBlocksComponent;
}());
export { DashboardBlocksComponent };
if (false) {
    /** @type {?} */
    DashboardBlocksComponent.prototype.canAcess;
    /** @type {?} */
    DashboardBlocksComponent.prototype.list;
    /** @type {?} */
    DashboardBlocksComponent.prototype.sendNavigationLink;
    /**
     * @type {?}
     * @private
     */
    DashboardBlocksComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWJsb2Nrcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2Rhc2hib2FyZC1ibG9ja3MvZGFzaGJvYXJkLWJsb2Nrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhEO0lBT0Usa0NBQW9CLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFEM0MsYUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFJbEMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUZqRCxDQUFDOzs7O0lBR0EsMkNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFFRCwrQ0FBWTs7OztJQUFaLFVBQWEsR0FBRztRQUNkLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUNELDhDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLGVBQWUsRUFBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUM5RCxDQUFDOztnQkFuQkgsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHN4QkFBZ0Q7O2lCQUVqRDs7OztnQkFOUSxXQUFXOzs7dUJBV2pCLEtBQUs7cUNBQ0wsTUFBTTs7SUFVVCwrQkFBQztDQUFBLEFBcEJELElBb0JDO1NBZlksd0JBQXdCOzs7SUFDcEMsNENBQTRDOztJQUczQyx3Q0FBbUI7O0lBQ25CLHNEQUFpRDs7Ozs7SUFIckMsNENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Rhc2hib2FyZC1ibG9ja3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLWJsb2Nrcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC1ibG9ja3MuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRCbG9ja3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuIGNhbkFjZXNzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhbkFjZXNzJyk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXIgOiBNYXRTbmFja0JhcikgeyBcbiAgfVxuICBASW5wdXQoKSBsaXN0OiBhbnk7XG4gIEBPdXRwdXQoKXNlbmROYXZpZ2F0aW9uTGluayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIG5nT25Jbml0KCkge1xuICAgfVxuXG4gICBuYXZpZ2F0ZUxpbmsobmF2KXtcbiAgICAgdGhpcy5zZW5kTmF2aWdhdGlvbkxpbmsuZW1pdChuYXYpO1xuICAgfVxuICAgc2hvd01lc3NhZ2UoKXtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW4oIFwiQ29tbWluZyBTb29uLlwiLFwiT2tcIiwgeyBkdXJhdGlvbjogOTAwMCB9KVxuICAgfVxufVxuIl19