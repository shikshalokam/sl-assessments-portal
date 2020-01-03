/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class TextareaFieldComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    check(val) {
    }
}
TextareaFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-textarea-field',
                template: "<div [formGroup]=\"genericForm\" *ngIf=\"genericForm\"  >\n    <mat-form-field class=\"col-sm-6 fixSize  _halfWidth\">\n        <div class=\"form-group\">\n            <textarea  matInput formControlName=\"{{genericData.field}}\" [required]=\"genericData.validation.required\"  placeholder=\"{{genericData.label | camelcase}} \" ></textarea>\n        </div>\n    </mat-form-field>\n</div>",
                styles: [".bold{font-size:15px;font-weight:550}.right{text-align:right}.fixSize{height:54.6px;margin-bottom:30px}"]
            }] }
];
/** @nocollapse */
TextareaFieldComponent.ctorParameters = () => [];
TextareaFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TextareaFieldComponent.prototype.genericData;
    /** @type {?} */
    TextareaFieldComponent.prototype.genericForm;
    /** @type {?} */
    TextareaFieldComponent.prototype.genericEdit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy90ZXh0YXJlYS1maWVsZC90ZXh0YXJlYS1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zQyxNQUFNLE9BQU8sc0JBQXNCO0lBS2pDLGdCQUFnQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7OztJQUNELEtBQUssQ0FBQyxHQUFHO0lBQ1QsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGdaQUE4Qzs7YUFFL0M7Ozs7OzBCQUVFLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBRk4sNkNBQW9COztJQUNwQiw2Q0FBOEI7O0lBQzlCLDZDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdGV4dGFyZWEtZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dGFyZWEtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0YXJlYS1maWVsZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKWdlbmVyaWNEYXRhO1xuICBASW5wdXQoKWdlbmVyaWNGb3JtOkZvcm1Hcm91cDtcbiAgQElucHV0KClnZW5lcmljRWRpdDpib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgY2hlY2sodmFsKXtcbiAgfVxufVxuIl19