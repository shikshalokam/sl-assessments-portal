/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var TextareaFieldComponent = /** @class */ (function () {
    function TextareaFieldComponent() {
    }
    /**
     * @return {?}
     */
    TextareaFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} val
     * @return {?}
     */
    TextareaFieldComponent.prototype.check = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
    };
    TextareaFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-textarea-field',
                    template: "<div [formGroup]=\"genericForm\" *ngIf=\"genericForm\"  >\n    <mat-form-field class=\"col-sm-6 fixSize  _halfWidth\">\n        <div class=\"form-group\">\n            <textarea  matInput formControlName=\"{{genericData.field}}\" [required]=\"genericData.validation.required\"  placeholder=\"{{genericData.label | camelcase}} \" ></textarea>\n        </div>\n    </mat-form-field>\n</div>",
                    styles: [".bold{font-size:15px;font-weight:550}.right{text-align:right}.fixSize{height:54.6px;margin-bottom:30px}"]
                }] }
    ];
    /** @nocollapse */
    TextareaFieldComponent.ctorParameters = function () { return []; };
    TextareaFieldComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }]
    };
    return TextareaFieldComponent;
}());
export { TextareaFieldComponent };
if (false) {
    /** @type {?} */
    TextareaFieldComponent.prototype.genericData;
    /** @type {?} */
    TextareaFieldComponent.prototype.genericForm;
    /** @type {?} */
    TextareaFieldComponent.prototype.genericEdit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy90ZXh0YXJlYS1maWVsZC90ZXh0YXJlYS1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQVVFO0lBQWdCLENBQUM7Ozs7SUFFakIseUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFDRCxzQ0FBSzs7OztJQUFMLFVBQU0sR0FBRztJQUNULENBQUM7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixnWkFBOEM7O2lCQUUvQzs7Ozs7OEJBRUUsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBUVIsNkJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVhZLHNCQUFzQjs7O0lBQ2pDLDZDQUFvQjs7SUFDcEIsNkNBQThCOztJQUM5Qiw2Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRleHRhcmVhLWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHRhcmVhLWZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dGFyZWEtZmllbGQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClnZW5lcmljRGF0YTtcbiAgQElucHV0KClnZW5lcmljRm9ybTpGb3JtR3JvdXA7XG4gIEBJbnB1dCgpZ2VuZXJpY0VkaXQ6Ym9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIGNoZWNrKHZhbCl7XG4gIH1cbn1cbiJdfQ==