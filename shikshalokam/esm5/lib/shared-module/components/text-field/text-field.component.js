/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var TextFieldComponent = /** @class */ (function () {
    function TextFieldComponent() {
    }
    /**
     * @return {?}
     */
    TextFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TextFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-text-field',
                    template: "<div [formGroup]= \"genericForm\" *ngIf=\"genericForm\">\n    <mat-form-field  class=\"col-sm-6 fixSize _halfWidth\">\n            <input  matInput   type=\"text\"  placeholder=\"{{genericData.label | camelcase}} \"  formControlName=\"{{genericData?.field}}\"  [required]=\"genericData.validation.required\">\n    </mat-form-field>\n</div>\n\n\n",
                    styles: [".bold{font-size:15px;font-weight:550}.right{text-align:right}.fixSize{height:54.6px}"]
                }] }
    ];
    /** @nocollapse */
    TextFieldComponent.ctorParameters = function () { return []; };
    TextFieldComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }]
    };
    return TextFieldComponent;
}());
export { TextFieldComponent };
if (false) {
    /** @type {?} */
    TextFieldComponent.prototype.genericData;
    /** @type {?} */
    TextFieldComponent.prototype.genericForm;
    /** @type {?} */
    TextFieldComponent.prototype.genericEdit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL3RleHQtZmllbGQvdGV4dC1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQVVFO0lBQWdCLENBQUM7Ozs7SUFFakIscUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLHFXQUEwQzs7aUJBRTNDOzs7Ozs4QkFFRSxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFPUix5QkFBQztDQUFBLEFBZkQsSUFlQztTQVZZLGtCQUFrQjs7O0lBQzdCLHlDQUFvQjs7SUFDcEIseUNBQThCOztJQUM5Qix5Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRleHQtZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtZmllbGQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0RmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKWdlbmVyaWNEYXRhO1xuICBASW5wdXQoKWdlbmVyaWNGb3JtOkZvcm1Hcm91cDtcbiAgQElucHV0KClnZW5lcmljRWRpdDpib29sZWFuO1xuICBcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBcbn1cbiJdfQ==