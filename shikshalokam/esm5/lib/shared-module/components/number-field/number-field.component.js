/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var NumberFieldComponent = /** @class */ (function () {
    function NumberFieldComponent() {
    }
    /**
     * @return {?}
     */
    NumberFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NumberFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-number-field',
                    template: "<div [formGroup]=\"genericForm\">\n  <mat-form-field *ngIf=\"genericData.validation.required\" class=\"col-sm-6 fixSize _halfWidth\">\n    <span *ngIf=\"genericData.input == 'number'\" matPrefix>+91 &nbsp;</span>\n    <input  type=\"number\"  pattern=\"^[0-9]{10}$\"  placeholder=\"{{genericData.label | camelcase}} \"  formControlName=\"{{genericData.field}}\" matInput [required]=\"genericData.validation.required\" > \n  </mat-form-field>\n\n  <mat-form-field  *ngIf=\"!genericData.validation.required\" class=\"col-sm-6 fixSize _halfWidth\">\n      <span *ngIf=\"genericData.input == 'number'\" matPrefix>+91 &nbsp;</span>\n      <input type=\"number\"   placeholder=\"{{genericData.label | camelcase}} \" formControlName=\"{{genericData.field}}\" matInput  > \n    </mat-form-field>\n</div>",
                    styles: [".bold{font-size:15px;font-weight:1000}.right{text-align:right}.fixSize{height:54.6px}"]
                }] }
    ];
    /** @nocollapse */
    NumberFieldComponent.ctorParameters = function () { return []; };
    NumberFieldComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }]
    };
    return NumberFieldComponent;
}());
export { NumberFieldComponent };
if (false) {
    /** @type {?} */
    NumberFieldComponent.prototype.genericData;
    /** @type {?} */
    NumberFieldComponent.prototype.genericForm;
    /** @type {?} */
    NumberFieldComponent.prototype.genericEdit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL2NvbXBvbmVudHMvbnVtYmVyLWZpZWxkL251bWJlci1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQVVFO0lBQWdCLENBQUM7Ozs7SUFFakIsdUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHV5QkFBNEM7O2lCQUU3Qzs7Ozs7OEJBRUUsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBT1IsMkJBQUM7Q0FBQSxBQWZELElBZUM7U0FWWSxvQkFBb0I7OztJQUMvQiwyQ0FBb0I7O0lBQ3BCLDJDQUE4Qjs7SUFDOUIsMkNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1udW1iZXItZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnVtYmVyLWZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbnVtYmVyLWZpZWxkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKWdlbmVyaWNEYXRhO1xuICBASW5wdXQoKWdlbmVyaWNGb3JtOkZvcm1Hcm91cDtcbiAgQElucHV0KClnZW5lcmljRWRpdDpib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19