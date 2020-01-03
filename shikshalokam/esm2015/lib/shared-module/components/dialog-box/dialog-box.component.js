/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export class DialogBoxComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close();
    }
}
DialogBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dialog-box',
                template: "<h1 mat-dialog-title>{{'message.alertHeading' | translate}}</h1>\n<div mat-dialog-content>\n  <p>{{'message.alertMessage' | translate}}</p>\n</div>\n<div mat-dialog-actions class=\"alingCenterline\" >\n  <button mat-button  class=\"margin\" (click)=\"onCancel()\">{{'buttons.cancel' | translate }}</button>\n  <button mat-button class=\"btnColor margin\"   [mat-dialog-close] = \"true\"   >{{'buttons.complete' | translate}}</button>\n</div>\n",
                styles: [".btnColor{background-color:var(--primary-color);color:var(--white-color)}.alingCenterline{display:flex;align-items:center;justify-content:flex-end}.margin{margin:15px 0 0 10px}"]
            }] }
];
/** @nocollapse */
DialogBoxComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    DialogBoxComponent.prototype.dialogRef;
    /** @type {?} */
    DialogBoxComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2RpYWxvZy1ib3gvZGlhbG9nLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFHLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBQyxZQUFZLEVBQUUsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFNaEUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFDN0IsWUFDUyxTQUEyQyxFQUNsQixJQUFJO1FBRDdCLGNBQVMsR0FBVCxTQUFTLENBQWtDO1FBQ2xCLFNBQUksR0FBSixJQUFJLENBQUE7SUFBRyxDQUFDOzs7O0lBRTFDLFFBQVE7SUFDUixDQUFDOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHVjQUEwQzs7YUFFM0M7Ozs7WUFMTyxZQUFZOzRDQVNmLE1BQU0sU0FBQyxlQUFlOzs7O0lBRHZCLHVDQUFrRDs7SUFDbEQsa0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEF9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kaWFsb2ctYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy1ib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctYm94LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0JveENvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbiAgXG5cbn1cbiJdfQ==