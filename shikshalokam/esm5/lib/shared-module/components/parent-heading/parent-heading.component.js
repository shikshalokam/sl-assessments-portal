/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { UtilityService } from '../../../core-module/services/utility-service/utility.service';
;
var ParentHeadingComponent = /** @class */ (function () {
    function ParentHeadingComponent(dialog, utilityService) {
        this.dialog = dialog;
        this.utilityService = utilityService;
        this.sendMarkAsComplete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ParentHeadingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ParentHeadingComponent.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '450px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result)
                _this.sendFlag();
        }));
    };
    /**
     * @return {?}
     */
    ParentHeadingComponent.prototype.sendFlag = /**
     * @return {?}
     */
    function () {
        this.sendMarkAsComplete.emit(true);
    };
    /**
     * @return {?}
     */
    ParentHeadingComponent.prototype.onBack = /**
     * @return {?}
     */
    function () {
        this.utilityService.onBack();
    };
    ParentHeadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-parent-heading',
                    template: "<div class=\"horizontalLine\">\n  <span class=\" alingCenterlineParentHeading\">\n    <div>\n      <h4 class=\"primaryColor\">{{schoolName}}</h4>\n    </div>\n    <!-- <span *ngIf=\"genericHeading == 'headings.parentListHeading' && atleastOneComplete\"><button mat-raised-button  class=\" btnColor \"(click)=\"openDialog()\">{{'buttons.markasComplete' | translate}}</button></span> -->\n    <span *ngIf=\"genericHeading == 'headings.parentListHeading' && atleastOneComplete\"><span class=\" active \" (click)=\"openDialog()\">{{'buttons.markasComplete'\n        | translate}}</span></span>\n  </span>\n  <mat-divider *ngIf=\"schoolName || schoolNameDivider\" class=\"Margin noPadding\"></mat-divider>\n  <!-- <span class=\"alingCenterline smallMargin\"  *ngIf=\"!showControl\"> -->\n  <!-- <span class=\"alingCenterline smallMargin\">\n    <button  *ngIf=\"!showControl\" class=\"noPadding\" mat-button (click)=\"onBack()\"><i class=\"material-icons\">\n        keyboard_arrow_left\n      </i>\n      <span>Back</span>\n    </button>\n    <span class=\"heading  space noMargin space\" *ngIf=\"genericHeading\"> -->\n      <!-- {{ genericHeading | translate}} -->\n      <breadcrumb [showControl]=\"showControl\" [startIndex]=\"startIndex\"></breadcrumb>\n        <!-- </span>\n\n  </span> -->\n</div>",
                    styles: [".heading{margin-top:0;font-size:18px}.btnColor{background-color:var(--primary-color);color:var(--white-color);margin-left:30px}.alingCenterlineParentHeading{display:flex;align-items:center;flex-wrap:wrap}.active{border-radius:12px;border:1px solid var(--primary-color);padding:2px 8px;background-color:var(--button-background-color);cursor:pointer;margin-left:25px}.horizontalLine{display:flex;flex-direction:column}.noPadding{padding:0}.noMargin{margin:0}.Margin{margin:0 -20px}.primaryColor{color:var(--primary-color)}"]
                }] }
    ];
    /** @nocollapse */
    ParentHeadingComponent.ctorParameters = function () { return [
        { type: MatDialog },
        { type: UtilityService }
    ]; };
    ParentHeadingComponent.propDecorators = {
        genericHeading: [{ type: Input }],
        schoolName: [{ type: Input }],
        startIndex: [{ type: Input }],
        atleastOneComplete: [{ type: Input }],
        schoolId: [{ type: Input }],
        schoolNameDivider: [{ type: Input }],
        showControl: [{ type: Input }],
        sendMarkAsComplete: [{ type: Output }]
    };
    return ParentHeadingComponent;
}());
export { ParentHeadingComponent };
if (false) {
    /** @type {?} */
    ParentHeadingComponent.prototype.genericHeading;
    /** @type {?} */
    ParentHeadingComponent.prototype.schoolName;
    /** @type {?} */
    ParentHeadingComponent.prototype.startIndex;
    /** @type {?} */
    ParentHeadingComponent.prototype.atleastOneComplete;
    /** @type {?} */
    ParentHeadingComponent.prototype.schoolId;
    /** @type {?} */
    ParentHeadingComponent.prototype.schoolNameDivider;
    /** @type {?} */
    ParentHeadingComponent.prototype.showControl;
    /** @type {?} */
    ParentHeadingComponent.prototype.sendMarkAsComplete;
    /** @type {?} */
    ParentHeadingComponent.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    ParentHeadingComponent.prototype.utilityService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LWhlYWRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9wYXJlbnQtaGVhZGluZy9wYXJlbnQtaGVhZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsR0FBRyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUFBLENBQUM7QUFFaEc7SUFnQkUsZ0NBQW9CLE1BQWlCLEVBQVUsY0FBOEI7UUFBekQsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQURuRSx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBQ3NCLENBQUM7Ozs7SUFFbEYseUNBQVE7OztJQUFSO0lBRUEsQ0FBQzs7OztJQUVELDJDQUFVOzs7SUFBVjtRQUFBLGlCQVVDOztZQVRPLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNyRCxLQUFLLEVBQUUsT0FBTztZQUNkLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7UUFFRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsTUFBTTtZQUN0QyxJQUFJLE1BQU07Z0JBQ1IsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUNELHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELHVDQUFNOzs7SUFBTjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixneUNBQThDOztpQkFFL0M7Ozs7Z0JBUlEsU0FBUztnQkFFVCxjQUFjOzs7aUNBU3BCLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLO3FDQUVMLEtBQUs7MkJBQ0wsS0FBSztvQ0FDTCxLQUFLOzhCQUNMLEtBQUs7cUNBQ0wsTUFBTTs7SUF5QlQsNkJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQWxDWSxzQkFBc0I7OztJQUNqQyxnREFBZ0M7O0lBQ2hDLDRDQUFvQjs7SUFDcEIsNENBQW9COztJQUVwQixvREFBNEI7O0lBQzVCLDBDQUFrQjs7SUFDbEIsbURBQTRCOztJQUM1Qiw2Q0FBcUI7O0lBQ3JCLG9EQUEyRDs7SUFDOUMsd0NBQXdCOzs7OztJQUFFLGdEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBEaWFsb2dCb3hDb21wb25lbnQgfSBmcm9tICcuLi9kaWFsb2ctYm94L2RpYWxvZy1ib3guY29tcG9uZW50JztcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS1tb2R1bGUvc2VydmljZXMvdXRpbGl0eS1zZXJ2aWNlL3V0aWxpdHkuc2VydmljZSc7O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcGFyZW50LWhlYWRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFyZW50LWhlYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXJlbnQtaGVhZGluZy5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUGFyZW50SGVhZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGdlbmVyaWNIZWFkaW5nOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNjaG9vbE5hbWU7XG4gIEBJbnB1dCgpIHN0YXJ0SW5kZXg7XG5cbiAgQElucHV0KCkgYXRsZWFzdE9uZUNvbXBsZXRlO1xuICBASW5wdXQoKSBzY2hvb2xJZDtcbiAgQElucHV0KCkgc2Nob29sTmFtZURpdmlkZXIgO1xuICBASW5wdXQoKSBzaG93Q29udHJvbDtcbiAgQE91dHB1dCgpIHNlbmRNYXJrQXNDb21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgY29uc3RydWN0b3IoIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZywgcHJpdmF0ZSB1dGlsaXR5U2VydmljZTogVXRpbGl0eVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBvcGVuRGlhbG9nKCk6IHZvaWQge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQm94Q29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogJzQ1MHB4JyxcbiAgICAgIGRpc2FibGVDbG9zZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0KVxuICAgICAgICB0aGlzLnNlbmRGbGFnKCk7XG4gICAgfSk7XG4gIH1cbiAgc2VuZEZsYWcoKSB7XG4gICAgdGhpcy5zZW5kTWFya0FzQ29tcGxldGUuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIG9uQmFjaygpIHtcbiAgICAgIHRoaXMudXRpbGl0eVNlcnZpY2Uub25CYWNrKCk7XG4gIH1cbn1cbiJdfQ==