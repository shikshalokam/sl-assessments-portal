/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export class ShareLinkViewComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.sharLink = data;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
    /**
     * @param {?} inputElement
     * @return {?}
     */
    copyLink(inputElement) {
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
    }
}
ShareLinkViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'share-link-view',
                template: "<!-- <h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div> -->\n<div class=\"box col-xs-12\">\n\n<div class=\" col-xs-12 _noMarginPadding _flex-box _justify-content-space-between\">\n  <h1 mat-dialog-title class=\" _noMarginPadding \">Sharable Link </h1>\n\n    <button mat-icon-button (click)=\"onNoClick()\">\n        <i class=\"material-icons\">\n            close\n            </i>\n    </button>\n</div> \n<div class=\"col-xs-12\">\n    <mat-form-field class=\"col-xs-12\">\n        <input matInput  value=\"{{sharLink}}\" #link>\n    </mat-form-field>\n</div>\n<div class=\" col-xs-12 _flex-box  _flex-end positionBottom\">\n    <button mat-raised-button color=\"primary\" (click)=\"copyLink(link)\">\n       Copy\n    </button>\n</div>\n</div>\n",
                styles: [".box{position:relative;height:150px}.positionBottom{position:absolute;bottom:0}"]
            }] }
];
/** @nocollapse */
ShareLinkViewComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    ShareLinkViewComponent.prototype.sharLink;
    /** @type {?} */
    ShareLinkViewComponent.prototype.dialogRef;
    /** @type {?} */
    ShareLinkViewComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtbGluay1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9zaGFyZS1saW5rLXZpZXcvc2hhcmUtbGluay1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUWxFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBRWpDLFlBQ1MsU0FBK0MsRUFDdEIsSUFBSTtRQUQ3QixjQUFTLEdBQVQsU0FBUyxDQUFzQztRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFSCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUNBLFFBQVEsQ0FBQyxZQUFZO1FBQ3BCLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QixRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw2a0NBQStDOzthQUdoRDs7OztZQVBRLFlBQVk7NENBWWhCLE1BQU0sU0FBQyxlQUFlOzs7O0lBSHpCLDBDQUFTOztJQUVQLDJDQUFzRDs7SUFDdEQsc0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGFyZS1saW5rLXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJ3NoYXJlLWxpbmstZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2hhcmUtbGluay1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxuXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlTGlua1ZpZXdDb21wb25lbnQge1xuICBzaGFyTGluaztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFNoYXJlTGlua1ZpZXdDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YSkge1xuICAgICAgdGhpcy5zaGFyTGluayA9IGRhdGE7XG4gICAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG4gICBjb3B5TGluayhpbnB1dEVsZW1lbnQpIHtcbiAgICBpbnB1dEVsZW1lbnQuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBpbnB1dEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgMCk7XG4gIH1cbn1cbiJdfQ==