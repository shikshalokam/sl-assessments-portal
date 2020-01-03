/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { UtilityService } from '../../../core-module/services/utility-service/utility.service';
;
export class ParentHeadingComponent {
    /**
     * @param {?} dialog
     * @param {?} utilityService
     */
    constructor(dialog, utilityService) {
        this.dialog = dialog;
        this.utilityService = utilityService;
        this.sendMarkAsComplete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '450px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result)
                this.sendFlag();
        }));
    }
    /**
     * @return {?}
     */
    sendFlag() {
        this.sendMarkAsComplete.emit(true);
    }
    /**
     * @return {?}
     */
    onBack() {
        this.utilityService.onBack();
    }
}
ParentHeadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-parent-heading',
                template: "<div class=\"horizontalLine\">\n  <span class=\" alingCenterlineParentHeading\">\n    <div>\n      <h4 class=\"primaryColor\">{{schoolName}}</h4>\n    </div>\n    <!-- <span *ngIf=\"genericHeading == 'headings.parentListHeading' && atleastOneComplete\"><button mat-raised-button  class=\" btnColor \"(click)=\"openDialog()\">{{'buttons.markasComplete' | translate}}</button></span> -->\n    <span *ngIf=\"genericHeading == 'headings.parentListHeading' && atleastOneComplete\"><span class=\" active \" (click)=\"openDialog()\">{{'buttons.markasComplete'\n        | translate}}</span></span>\n  </span>\n  <mat-divider *ngIf=\"schoolName || schoolNameDivider\" class=\"Margin noPadding\"></mat-divider>\n  <!-- <span class=\"alingCenterline smallMargin\"  *ngIf=\"!showControl\"> -->\n  <!-- <span class=\"alingCenterline smallMargin\">\n    <button  *ngIf=\"!showControl\" class=\"noPadding\" mat-button (click)=\"onBack()\"><i class=\"material-icons\">\n        keyboard_arrow_left\n      </i>\n      <span>Back</span>\n    </button>\n    <span class=\"heading  space noMargin space\" *ngIf=\"genericHeading\"> -->\n      <!-- {{ genericHeading | translate}} -->\n      <breadcrumb [showControl]=\"showControl\" [startIndex]=\"startIndex\"></breadcrumb>\n        <!-- </span>\n\n  </span> -->\n</div>",
                styles: [".heading{margin-top:0;font-size:18px}.btnColor{background-color:var(--primary-color);color:var(--white-color);margin-left:30px}.alingCenterlineParentHeading{display:flex;align-items:center;flex-wrap:wrap}.active{border-radius:12px;border:1px solid var(--primary-color);padding:2px 8px;background-color:var(--button-background-color);cursor:pointer;margin-left:25px}.horizontalLine{display:flex;flex-direction:column}.noPadding{padding:0}.noMargin{margin:0}.Margin{margin:0 -20px}.primaryColor{color:var(--primary-color)}"]
            }] }
];
/** @nocollapse */
ParentHeadingComponent.ctorParameters = () => [
    { type: MatDialog },
    { type: UtilityService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LWhlYWRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9wYXJlbnQtaGVhZGluZy9wYXJlbnQtaGVhZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsR0FBRyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUFBLENBQUM7QUFRaEcsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFVakMsWUFBb0IsTUFBaUIsRUFBVSxjQUE4QjtRQUF6RCxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRG5FLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFDc0IsQ0FBQzs7OztJQUVsRixRQUFRO0lBRVIsQ0FBQzs7OztJQUVELFVBQVU7O2NBQ0YsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3JELEtBQUssRUFBRSxPQUFPO1lBQ2QsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQztRQUVGLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsSUFBSSxNQUFNO2dCQUNSLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakMsQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixneUNBQThDOzthQUUvQzs7OztZQVJRLFNBQVM7WUFFVCxjQUFjOzs7NkJBU3BCLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO2lDQUVMLEtBQUs7dUJBQ0wsS0FBSztnQ0FDTCxLQUFLOzBCQUNMLEtBQUs7aUNBQ0wsTUFBTTs7OztJQVJQLGdEQUFnQzs7SUFDaEMsNENBQW9COztJQUNwQiw0Q0FBb0I7O0lBRXBCLG9EQUE0Qjs7SUFDNUIsMENBQWtCOztJQUNsQixtREFBNEI7O0lBQzVCLDZDQUFxQjs7SUFDckIsb0RBQTJEOztJQUM5Qyx3Q0FBd0I7Ozs7O0lBQUUsZ0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IERpYWxvZ0JveENvbXBvbmVudCB9IGZyb20gJy4uL2RpYWxvZy1ib3gvZGlhbG9nLWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlLW1vZHVsZS9zZXJ2aWNlcy91dGlsaXR5LXNlcnZpY2UvdXRpbGl0eS5zZXJ2aWNlJzs7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wYXJlbnQtaGVhZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXJlbnQtaGVhZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhcmVudC1oZWFkaW5nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBQYXJlbnRIZWFkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZ2VuZXJpY0hlYWRpbmc6IHN0cmluZztcbiAgQElucHV0KCkgc2Nob29sTmFtZTtcbiAgQElucHV0KCkgc3RhcnRJbmRleDtcblxuICBASW5wdXQoKSBhdGxlYXN0T25lQ29tcGxldGU7XG4gIEBJbnB1dCgpIHNjaG9vbElkO1xuICBASW5wdXQoKSBzY2hvb2xOYW1lRGl2aWRlciA7XG4gIEBJbnB1dCgpIHNob3dDb250cm9sO1xuICBAT3V0cHV0KCkgc2VuZE1hcmtBc0NvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBjb25zdHJ1Y3RvciggcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLCBwcml2YXRlIHV0aWxpdHlTZXJ2aWNlOiBVdGlsaXR5U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dCb3hDb21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnNDUwcHgnLFxuICAgICAgZGlzYWJsZUNsb3NlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgIHRoaXMuc2VuZEZsYWcoKTtcbiAgICB9KTtcbiAgfVxuICBzZW5kRmxhZygpIHtcbiAgICB0aGlzLnNlbmRNYXJrQXNDb21wbGV0ZS5lbWl0KHRydWUpO1xuICB9XG5cbiAgb25CYWNrKCkge1xuICAgICAgdGhpcy51dGlsaXR5U2VydmljZS5vbkJhY2soKTtcbiAgfVxufVxuIl19