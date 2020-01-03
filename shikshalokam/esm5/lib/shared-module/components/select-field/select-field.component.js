/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var SelectFieldComponent = /** @class */ (function () {
    function SelectFieldComponent() {
    }
    /**
     * @return {?}
     */
    SelectFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SelectFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-select-field',
                    template: "<div [formGroup]=\"genericForm\" >\n    <div class=\" col-sm-6 fixSize _halfWidth\">\n      <mat-checkbox   formControlName =\"{{genericData.field}}\" value=\"{{genericData.value}}\" [required]=\"genericData.validations.required\">{{genericData.label}}</mat-checkbox>\n    </div>\n  </div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SelectFieldComponent.ctorParameters = function () { return []; };
    SelectFieldComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }]
    };
    return SelectFieldComponent;
}());
export { SelectFieldComponent };
if (false) {
    /** @type {?} */
    SelectFieldComponent.prototype.genericData;
    /** @type {?} */
    SelectFieldComponent.prototype.genericForm;
    /** @type {?} */
    SelectFieldComponent.prototype.genericEdit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL2NvbXBvbmVudHMvc2VsZWN0LWZpZWxkL3NlbGVjdC1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQVNFO0lBQWdCLENBQUM7Ozs7SUFFakIsdUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDZTQUE0Qzs7aUJBRTdDOzs7Ozs4QkFFRSxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFNUiwyQkFBQztDQUFBLEFBZEQsSUFjQztTQVRZLG9CQUFvQjs7O0lBQy9CLDJDQUFvQjs7SUFDcEIsMkNBQThCOztJQUM5QiwyQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNlbGVjdC1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3QtZmllbGQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpZ2VuZXJpY0RhdGE7XG4gIEBJbnB1dCgpZ2VuZXJpY0Zvcm06Rm9ybUdyb3VwO1xuICBASW5wdXQoKWdlbmVyaWNFZGl0OmJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19