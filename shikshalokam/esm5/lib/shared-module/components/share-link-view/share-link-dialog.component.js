/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var ShareLinkViewComponent = /** @class */ (function () {
    function ShareLinkViewComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.sharLink = data;
    }
    /**
     * @return {?}
     */
    ShareLinkViewComponent.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @param {?} inputElement
     * @return {?}
     */
    ShareLinkViewComponent.prototype.copyLink = /**
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
    };
    ShareLinkViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'share-link-view',
                    template: "<!-- <h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div> -->\n<div class=\"box col-xs-12\">\n\n<div class=\" col-xs-12 _noMarginPadding _flex-box _justify-content-space-between\">\n  <h1 mat-dialog-title class=\" _noMarginPadding \">Sharable Link </h1>\n\n    <button mat-icon-button (click)=\"onNoClick()\">\n        <i class=\"material-icons\">\n            close\n            </i>\n    </button>\n</div> \n<div class=\"col-xs-12\">\n    <mat-form-field class=\"col-xs-12\">\n        <input matInput  value=\"{{sharLink}}\" #link>\n    </mat-form-field>\n</div>\n<div class=\" col-xs-12 _flex-box  _flex-end positionBottom\">\n    <button mat-raised-button color=\"primary\" (click)=\"copyLink(link)\">\n       Copy\n    </button>\n</div>\n</div>\n",
                    styles: [".box{position:relative;height:150px}.positionBottom{position:absolute;bottom:0}"]
                }] }
    ];
    /** @nocollapse */
    ShareLinkViewComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return ShareLinkViewComponent;
}());
export { ShareLinkViewComponent };
if (false) {
    /** @type {?} */
    ShareLinkViewComponent.prototype.sharLink;
    /** @type {?} */
    ShareLinkViewComponent.prototype.dialogRef;
    /** @type {?} */
    ShareLinkViewComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtbGluay1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9zaGFyZS1saW5rLXZpZXcvc2hhcmUtbGluay1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxFO0lBUUUsZ0NBQ1MsU0FBK0MsRUFDdEIsSUFBSTtRQUQ3QixjQUFTLEdBQVQsU0FBUyxDQUFzQztRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFSCwwQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBQ0EseUNBQVE7Ozs7SUFBUixVQUFTLFlBQVk7UUFDcEIsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDZrQ0FBK0M7O2lCQUdoRDs7OztnQkFQUSxZQUFZO2dEQVloQixNQUFNLFNBQUMsZUFBZTs7SUFZM0IsNkJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWhCWSxzQkFBc0I7OztJQUNqQywwQ0FBUzs7SUFFUCwyQ0FBc0Q7O0lBQ3RELHNDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hhcmUtbGluay12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICdzaGFyZS1saW5rLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NoYXJlLWxpbmstZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cblxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZUxpbmtWaWV3Q29tcG9uZW50IHtcbiAgc2hhckxpbms7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxTaGFyZUxpbmtWaWV3Q29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGEpIHtcbiAgICAgIHRoaXMuc2hhckxpbmsgPSBkYXRhO1xuICAgIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuICAgY29weUxpbmsoaW5wdXRFbGVtZW50KSB7XG4gICAgaW5wdXRFbGVtZW50LnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgaW5wdXRFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIDApO1xuICB9XG59XG4iXX0=