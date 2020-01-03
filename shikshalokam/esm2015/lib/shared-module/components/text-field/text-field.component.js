/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class TextFieldComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TextFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-text-field',
                template: "<div [formGroup]= \"genericForm\" *ngIf=\"genericForm\">\n    <mat-form-field  class=\"col-sm-6 fixSize _halfWidth\">\n            <input  matInput   type=\"text\"  placeholder=\"{{genericData.label | camelcase}} \"  formControlName=\"{{genericData?.field}}\"  [required]=\"genericData.validation.required\">\n    </mat-form-field>\n</div>\n\n\n",
                styles: [".bold{font-size:15px;font-weight:550}.right{text-align:right}.fixSize{height:54.6px}"]
            }] }
];
/** @nocollapse */
TextFieldComponent.ctorParameters = () => [];
TextFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TextFieldComponent.prototype.genericData;
    /** @type {?} */
    TextFieldComponent.prototype.genericForm;
    /** @type {?} */
    TextFieldComponent.prototype.genericEdit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL3RleHQtZmllbGQvdGV4dC1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zQyxNQUFNLE9BQU8sa0JBQWtCO0lBSzdCLGdCQUFnQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIscVdBQTBDOzthQUUzQzs7Ozs7MEJBRUUsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFGTix5Q0FBb0I7O0lBQ3BCLHlDQUE4Qjs7SUFDOUIseUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10ZXh0LWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWZpZWxkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClnZW5lcmljRGF0YTtcbiAgQElucHV0KClnZW5lcmljRm9ybTpGb3JtR3JvdXA7XG4gIEBJbnB1dCgpZ2VuZXJpY0VkaXQ6Ym9vbGVhbjtcbiAgXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgXG59XG4iXX0=