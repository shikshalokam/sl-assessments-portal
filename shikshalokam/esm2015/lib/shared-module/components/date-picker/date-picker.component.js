/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class DatePickerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-date-picker',
                template: "<div [formGroup]=\"genericForm\" >\n  \n  <mat-form-field class=\" col-sm-6 fixSize _halfWidth\" >\n    <input *ngIf=\"genericData.label === 'end date'\"  placeholder=\"{{genericData.label | camelcase}} \"  matInput [matDatepicker]=\"picker\" formControlName=\"{{genericData.field}}\" [max]=\"genericData.max\" [min]=\"genericForm.controls.fromDate.value\" \n      (focus)=\"picker.open()\" (click)=\"picker.open()\" [required]=\"genericData.validation.required\" [disabled]=\"! genericForm.controls.fromDate.valid\">\n    <input *ngIf=\"genericData.label !== 'end date'\"  placeholder=\"{{genericData.label | camelcase}} \"  matInput [matDatepicker]=\"picker\" formControlName=\"{{genericData.field}}\" [max]=\"genericData.max\" [min]=\"genericData.min\" \n      (focus)=\"picker.open()\" (click)=\"picker.open()\" [required]=\"genericData.validation.required\">  \n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n</div>",
                styles: [".space{padding:0 10px}.bold{font-size:15px;font-weight:900}.right{text-align:right}.fixSize{height:54.6px}"]
            }] }
];
/** @nocollapse */
DatePickerComponent.ctorParameters = () => [];
DatePickerComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DatePickerComponent.prototype.genericData;
    /** @type {?} */
    DatePickerComponent.prototype.genericForm;
    /** @type {?} */
    DatePickerComponent.prototype.genericEdit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFHLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zQyxNQUFNLE9BQU8sbUJBQW1CO0lBSTlCLGdCQUFnQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IseWdDQUEyQzs7YUFFNUM7Ozs7OzBCQUVBLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBRk4sMENBQW9COztJQUNwQiwwQ0FBOEI7O0lBQzlCLDBDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRhdGUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbkBJbnB1dCgpZ2VuZXJpY0RhdGE7XG5ASW5wdXQoKWdlbmVyaWNGb3JtOkZvcm1Hcm91cDtcbkBJbnB1dCgpZ2VuZXJpY0VkaXQ6Ym9vbGVhbjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBcbn1cbiJdfQ==