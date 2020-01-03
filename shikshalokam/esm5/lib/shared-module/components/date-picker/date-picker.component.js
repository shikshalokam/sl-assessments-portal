/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent() {
    }
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-date-picker',
                    template: "<div [formGroup]=\"genericForm\" >\n  \n  <mat-form-field class=\" col-sm-6 fixSize _halfWidth\" >\n    <input *ngIf=\"genericData.label === 'end date'\"  placeholder=\"{{genericData.label | camelcase}} \"  matInput [matDatepicker]=\"picker\" formControlName=\"{{genericData.field}}\" [max]=\"genericData.max\" [min]=\"genericForm.controls.fromDate.value\" \n      (focus)=\"picker.open()\" (click)=\"picker.open()\" [required]=\"genericData.validation.required\" [disabled]=\"! genericForm.controls.fromDate.valid\">\n    <input *ngIf=\"genericData.label !== 'end date'\"  placeholder=\"{{genericData.label | camelcase}} \"  matInput [matDatepicker]=\"picker\" formControlName=\"{{genericData.field}}\" [max]=\"genericData.max\" [min]=\"genericData.min\" \n      (focus)=\"picker.open()\" (click)=\"picker.open()\" [required]=\"genericData.validation.required\">  \n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n</div>",
                    styles: [".space{padding:0 10px}.bold{font-size:15px;font-weight:900}.right{text-align:right}.fixSize{height:54.6px}"]
                }] }
    ];
    /** @nocollapse */
    DatePickerComponent.ctorParameters = function () { return []; };
    DatePickerComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }]
    };
    return DatePickerComponent;
}());
export { DatePickerComponent };
if (false) {
    /** @type {?} */
    DatePickerComponent.prototype.genericData;
    /** @type {?} */
    DatePickerComponent.prototype.genericForm;
    /** @type {?} */
    DatePickerComponent.prototype.genericEdit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFHLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQVNFO0lBQWdCLENBQUM7Ozs7SUFFakIsc0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHlnQ0FBMkM7O2lCQUU1Qzs7Ozs7OEJBRUEsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBTU4sMEJBQUM7Q0FBQSxBQWRELElBY0M7U0FUWSxtQkFBbUI7OztJQUNoQywwQ0FBb0I7O0lBQ3BCLDBDQUE4Qjs7SUFDOUIsMENBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0ICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGF0ZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuQElucHV0KClnZW5lcmljRGF0YTtcbkBJbnB1dCgpZ2VuZXJpY0Zvcm06Rm9ybUdyb3VwO1xuQElucHV0KClnZW5lcmljRWRpdDpib29sZWFuO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIFxufVxuIl19