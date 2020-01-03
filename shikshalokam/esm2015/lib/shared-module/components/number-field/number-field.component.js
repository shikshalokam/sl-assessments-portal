/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class NumberFieldComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NumberFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-number-field',
                template: "<div [formGroup]=\"genericForm\">\n  <mat-form-field *ngIf=\"genericData.validation.required\" class=\"col-sm-6 fixSize _halfWidth\">\n    <span *ngIf=\"genericData.input == 'number'\" matPrefix>+91 &nbsp;</span>\n    <input  type=\"number\"  pattern=\"^[0-9]{10}$\"  placeholder=\"{{genericData.label | camelcase}} \"  formControlName=\"{{genericData.field}}\" matInput [required]=\"genericData.validation.required\" > \n  </mat-form-field>\n\n  <mat-form-field  *ngIf=\"!genericData.validation.required\" class=\"col-sm-6 fixSize _halfWidth\">\n      <span *ngIf=\"genericData.input == 'number'\" matPrefix>+91 &nbsp;</span>\n      <input type=\"number\"   placeholder=\"{{genericData.label | camelcase}} \" formControlName=\"{{genericData.field}}\" matInput  > \n    </mat-form-field>\n</div>",
                styles: [".bold{font-size:15px;font-weight:1000}.right{text-align:right}.fixSize{height:54.6px}"]
            }] }
];
/** @nocollapse */
NumberFieldComponent.ctorParameters = () => [];
NumberFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NumberFieldComponent.prototype.genericData;
    /** @type {?} */
    NumberFieldComponent.prototype.genericForm;
    /** @type {?} */
    NumberFieldComponent.prototype.genericEdit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL2NvbXBvbmVudHMvbnVtYmVyLWZpZWxkL251bWJlci1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zQyxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLGdCQUFnQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsdXlCQUE0Qzs7YUFFN0M7Ozs7OzBCQUVFLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBRk4sMkNBQW9COztJQUNwQiwyQ0FBOEI7O0lBQzlCLDJDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbnVtYmVyLWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL251bWJlci1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL251bWJlci1maWVsZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlckZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClnZW5lcmljRGF0YTtcbiAgQElucHV0KClnZW5lcmljRm9ybTpGb3JtR3JvdXA7XG4gIEBJbnB1dCgpZ2VuZXJpY0VkaXQ6Ym9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==