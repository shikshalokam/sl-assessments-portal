/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var DialogBoxComponent = /** @class */ (function () {
    function DialogBoxComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    DialogBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    DialogBoxComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    DialogBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-dialog-box',
                    template: "<h1 mat-dialog-title>{{'message.alertHeading' | translate}}</h1>\n<div mat-dialog-content>\n  <p>{{'message.alertMessage' | translate}}</p>\n</div>\n<div mat-dialog-actions class=\"alingCenterline\" >\n  <button mat-button  class=\"margin\" (click)=\"onCancel()\">{{'buttons.cancel' | translate }}</button>\n  <button mat-button class=\"btnColor margin\"   [mat-dialog-close] = \"true\"   >{{'buttons.complete' | translate}}</button>\n</div>\n",
                    styles: [".btnColor{background-color:var(--primary-color);color:var(--white-color)}.alingCenterline{display:flex;align-items:center;justify-content:flex-end}.margin{margin:15px 0 0 10px}"]
                }] }
    ];
    /** @nocollapse */
    DialogBoxComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return DialogBoxComponent;
}());
export { DialogBoxComponent };
if (false) {
    /** @type {?} */
    DialogBoxComponent.prototype.dialogRef;
    /** @type {?} */
    DialogBoxComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2RpYWxvZy1ib3gvZGlhbG9nLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFHLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBQyxZQUFZLEVBQUUsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEU7SUFNRSw0QkFDUyxTQUEyQyxFQUNsQixJQUFJO1FBRDdCLGNBQVMsR0FBVCxTQUFTLENBQWtDO1FBQ2xCLFNBQUksR0FBSixJQUFJLENBQUE7SUFBRyxDQUFDOzs7O0lBRTFDLHFDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFDRCxxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQix1Y0FBMEM7O2lCQUUzQzs7OztnQkFMTyxZQUFZO2dEQVNmLE1BQU0sU0FBQyxlQUFlOztJQVMzQix5QkFBQztDQUFBLEFBakJELElBaUJDO1NBWlksa0JBQWtCOzs7SUFFM0IsdUNBQWtEOztJQUNsRCxrQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0ICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRpYWxvZy1ib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLWJveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy1ib3guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGlhbG9nQm94Q29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGEpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuICBcblxufVxuIl19