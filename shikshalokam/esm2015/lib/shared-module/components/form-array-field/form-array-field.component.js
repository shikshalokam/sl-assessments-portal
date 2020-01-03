/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
export class FormArrayFieldComponent {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.editquestion = new EventEmitter();
    }
    ;
    /**
     * @return {?}
     */
    ngOnInit() {
        this.questionCount = this.genericData['value'].length || 1;
    }
    /**
     * @param {?} edit
     * @return {?}
     */
    editQuestion(edit) {
        if (edit == 'add') {
            this.editquestion.emit({
                mode: edit,
                controlName: this.genericData.field,
            });
        }
        else if (edit == 'reset') {
            this.questionCount = 1;
            this.editquestion.emit({
                mode: edit,
                controlName: this.genericData.field,
            });
        }
        else {
            this.questionCount -= 1;
            this.editquestion.emit({
                mode: "delete",
                controlName: this.genericData.field,
                index: edit
            });
        }
    }
    /**
     * @return {?}
     */
    getControls() {
        return ((/** @type {?} */ (this.genericForm.controls[this.genericData.field]))).controls;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    add(control) {
        control.push(this._formBuilder.group({
            [this.genericData.field]: ['', Validators.required]
        }));
        this.questionCount++;
    }
    /**
     * @param {?} control
     * @param {?} index
     * @return {?}
     */
    delete(control, index) {
        control.removeAt(index);
        this.questionCount--;
    }
}
FormArrayFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-form-array-field',
                template: "<form [formGroup]=\"genericForm\" *ngIf=\"genericForm\" class=\"col-sm-6 fixSize _halfWidth\">\n  <div formArrayName=\"{{genericData.field}}\" class=\"col-xs-12\" >\n    <div *ngFor=\"let quest of getControls() ; let i = index\" class=\"_flex-box _justify-content-center\" >\n      <div [formGroup]=\"quest\" class=\"col-xs-12 noPadding\">\n          <mat-form-field class=\"col-xs-10 noPadding\">\n              <input matInput placeholder=\"{{genericData.field}}\" formControlName=\"{{genericData.field}}\" />\n            </mat-form-field>\n      \n          <button class =\"col-xs-1\"*ngIf=\"questionCount >1\" mat-icon-button (click)=\"delete(genericForm.controls[genericData.field],i)\" color=\"warn\">\n            <i class=\"material-icons\">\n                close\n                </i>\n          </button>\n        </div>\n        </div>\n    \n  </div>\n  <button mat-raised-button (click)=\"add(genericForm.controls[genericData.field])\" class=\"_primary-btn btn-margin\">\n              \n      {{'buttons.addNew'| translate}}\n      <i class=\"material-icons\">\n          add\n          </i>\n    </button>\n    <!-- <button mat-raised-button *ngIf=\"questionCount>1\"(click)=\"reset()\" color=\"warn\" [disabled]=\" questionCount<2\" class=\"btn-margin\">\n              \n        {{'buttons.removeAll'| translate}}\n        <i class=\"material-icons white\">\n            delete_forever\n            </i>\n      </button> -->\n    </form>",
                styles: [".btn-margin{margin:0 10px}._flexbox{flex-direction:column;align-items:center;display:flex}.noPadding{padding:0}"]
            }] }
];
/** @nocollapse */
FormArrayFieldComponent.ctorParameters = () => [
    { type: FormBuilder }
];
FormArrayFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }],
    editquestion: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FormArrayFieldComponent.prototype.genericData;
    /** @type {?} */
    FormArrayFieldComponent.prototype.genericForm;
    /** @type {?} */
    FormArrayFieldComponent.prototype.genericEdit;
    /** @type {?} */
    FormArrayFieldComponent.prototype.question;
    /** @type {?} */
    FormArrayFieldComponent.prototype.editquestion;
    /** @type {?} */
    FormArrayFieldComponent.prototype.questionCount;
    /**
     * @type {?}
     * @private
     */
    FormArrayFieldComponent.prototype._formBuilder;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1hcnJheS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2Zvcm0tYXJyYXktZmllbGQvZm9ybS1hcnJheS1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPL0UsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQVFsQyxZQUFxQixZQUF3QjtRQUF4QixpQkFBWSxHQUFaLFlBQVksQ0FBWTtRQUhuQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFHLENBQUM7SUFHSSxDQUFDO0lBRGxELENBQUM7Ozs7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBSTtRQUNmLElBQUcsSUFBSSxJQUFJLEtBQUssRUFDaEI7WUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDcEI7Z0JBQ0UsSUFBSSxFQUFHLElBQUk7Z0JBQ1osV0FBVyxFQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSzthQUNwQyxDQUNBLENBQUM7U0FDTDthQUNJLElBQUcsSUFBSSxJQUFJLE9BQU8sRUFBQztZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDcEI7Z0JBQ0UsSUFBSSxFQUFHLElBQUk7Z0JBQ1osV0FBVyxFQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSzthQUNwQyxDQUNBLENBQUM7U0FDTDthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3BCO2dCQUNFLElBQUksRUFBRyxRQUFRO2dCQUNoQixXQUFXLEVBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO2dCQUNwQyxLQUFLLEVBQUcsSUFBSTthQUNaLENBQ0EsQ0FBQztTQUNMO0lBRUgsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsbUJBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBQSxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ2pGLENBQUM7Ozs7O0lBSUQsR0FBRyxDQUFDLE9BQU87UUFDVCxPQUFPLENBQUMsSUFBSSxDQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BELENBQUMsQ0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRXZCLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBRSxPQUFPLEVBQUcsS0FBSztRQUNyQixPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUV2QixDQUFDOzs7WUF2RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDY3Q0FBZ0Q7O2FBRWpEOzs7O1lBTjhCLFdBQVc7OzswQkFRdkMsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBRUwsTUFBTTs7OztJQUpQLDhDQUFvQjs7SUFDcEIsOENBQThCOztJQUM5Qiw4Q0FBNEI7O0lBQzVCLDJDQUFxQjs7SUFDckIsK0NBQTZDOztJQUM3QyxnREFBYzs7Ozs7SUFFRCwrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mb3JtLWFycmF5LWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tYXJyYXktZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtLWFycmF5LWZpZWxkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUFycmF5RmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKWdlbmVyaWNEYXRhO1xuICBASW5wdXQoKWdlbmVyaWNGb3JtOkZvcm1Hcm91cDtcbiAgQElucHV0KClnZW5lcmljRWRpdDpib29sZWFuO1xuICBxdWVzdGlvbiA6IEZvcm1BcnJheTtcbiAgQE91dHB1dCgpIGVkaXRxdWVzdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIgKCk7XG4gIHF1ZXN0aW9uQ291bnQ7XG4gIDtcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgX2Zvcm1CdWlsZGVyOkZvcm1CdWlsZGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnF1ZXN0aW9uQ291bnQgPSB0aGlzLmdlbmVyaWNEYXRhWyd2YWx1ZSddLmxlbmd0aCAgfHwgMTtcbiAgfVxuICBcbiAgZWRpdFF1ZXN0aW9uKGVkaXQpe1xuICAgIGlmKGVkaXQgPT0gJ2FkZCcpXG4gICAge1xuICAgICAgdGhpcy5lZGl0cXVlc3Rpb24uZW1pdChcbiAgICAgICAge1xuICAgICAgICAgIG1vZGUgOiBlZGl0ICxcbiAgICAgICAgIGNvbnRyb2xOYW1lIDogdGhpcy5nZW5lcmljRGF0YS5maWVsZCxcbiAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBlbHNlIGlmKGVkaXQgPT0gJ3Jlc2V0Jyl7XG4gICAgICB0aGlzLnF1ZXN0aW9uQ291bnQgPSAxO1xuICAgICAgdGhpcy5lZGl0cXVlc3Rpb24uZW1pdChcbiAgICAgICAge1xuICAgICAgICAgIG1vZGUgOiBlZGl0ICxcbiAgICAgICAgIGNvbnRyb2xOYW1lIDogdGhpcy5nZW5lcmljRGF0YS5maWVsZCxcbiAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucXVlc3Rpb25Db3VudCAtPSAxO1xuICAgICAgdGhpcy5lZGl0cXVlc3Rpb24uZW1pdChcbiAgICAgICAge1xuICAgICAgICAgIG1vZGUgOiBcImRlbGV0ZVwiICxcbiAgICAgICAgIGNvbnRyb2xOYW1lIDogdGhpcy5nZW5lcmljRGF0YS5maWVsZCxcbiAgICAgICAgIGluZGV4IDogZWRpdFxuICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgXG4gIH1cblxuICBnZXRDb250cm9scygpIHtcbiAgICByZXR1cm4gKDxGb3JtQXJyYXk+dGhpcy5nZW5lcmljRm9ybS5jb250cm9sc1t0aGlzLmdlbmVyaWNEYXRhLmZpZWxkXSkuY29udHJvbHM7XG4gIH1cblxuXG4gIFxuICBhZGQoY29udHJvbCl7XG4gICAgY29udHJvbC5wdXNoKFxuICAgICAgdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICBbdGhpcy5nZW5lcmljRGF0YS5maWVsZF06IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLnF1ZXN0aW9uQ291bnQrKztcblxuICB9XG5cbiAgZGVsZXRlKCBjb250cm9sICwgaW5kZXggKXtcbiAgICBjb250cm9sLnJlbW92ZUF0KGluZGV4KTtcbiAgICB0aGlzLnF1ZXN0aW9uQ291bnQtLTtcblxuICB9XG5cbn1cbiJdfQ==