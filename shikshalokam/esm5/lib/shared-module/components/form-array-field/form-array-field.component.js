/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
var FormArrayFieldComponent = /** @class */ (function () {
    function FormArrayFieldComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.editquestion = new EventEmitter();
    }
    ;
    /**
     * @return {?}
     */
    FormArrayFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.questionCount = this.genericData['value'].length || 1;
    };
    /**
     * @param {?} edit
     * @return {?}
     */
    FormArrayFieldComponent.prototype.editQuestion = /**
     * @param {?} edit
     * @return {?}
     */
    function (edit) {
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
    };
    /**
     * @return {?}
     */
    FormArrayFieldComponent.prototype.getControls = /**
     * @return {?}
     */
    function () {
        return ((/** @type {?} */ (this.genericForm.controls[this.genericData.field]))).controls;
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormArrayFieldComponent.prototype.add = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        var _a;
        control.push(this._formBuilder.group((_a = {},
            _a[this.genericData.field] = ['', Validators.required],
            _a)));
        this.questionCount++;
    };
    /**
     * @param {?} control
     * @param {?} index
     * @return {?}
     */
    FormArrayFieldComponent.prototype.delete = /**
     * @param {?} control
     * @param {?} index
     * @return {?}
     */
    function (control, index) {
        control.removeAt(index);
        this.questionCount--;
    };
    FormArrayFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-form-array-field',
                    template: "<form [formGroup]=\"genericForm\" *ngIf=\"genericForm\" class=\"col-sm-6 fixSize _halfWidth\">\n  <div formArrayName=\"{{genericData.field}}\" class=\"col-xs-12\" >\n    <div *ngFor=\"let quest of getControls() ; let i = index\" class=\"_flex-box _justify-content-center\" >\n      <div [formGroup]=\"quest\" class=\"col-xs-12 noPadding\">\n          <mat-form-field class=\"col-xs-10 noPadding\">\n              <input matInput placeholder=\"{{genericData.field}}\" formControlName=\"{{genericData.field}}\" />\n            </mat-form-field>\n      \n          <button class =\"col-xs-1\"*ngIf=\"questionCount >1\" mat-icon-button (click)=\"delete(genericForm.controls[genericData.field],i)\" color=\"warn\">\n            <i class=\"material-icons\">\n                close\n                </i>\n          </button>\n        </div>\n        </div>\n    \n  </div>\n  <button mat-raised-button (click)=\"add(genericForm.controls[genericData.field])\" class=\"_primary-btn btn-margin\">\n              \n      {{'buttons.addNew'| translate}}\n      <i class=\"material-icons\">\n          add\n          </i>\n    </button>\n    <!-- <button mat-raised-button *ngIf=\"questionCount>1\"(click)=\"reset()\" color=\"warn\" [disabled]=\" questionCount<2\" class=\"btn-margin\">\n              \n        {{'buttons.removeAll'| translate}}\n        <i class=\"material-icons white\">\n            delete_forever\n            </i>\n      </button> -->\n    </form>",
                    styles: [".btn-margin{margin:0 10px}._flexbox{flex-direction:column;align-items:center;display:flex}.noPadding{padding:0}"]
                }] }
    ];
    /** @nocollapse */
    FormArrayFieldComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    FormArrayFieldComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }],
        editquestion: [{ type: Output }]
    };
    return FormArrayFieldComponent;
}());
export { FormArrayFieldComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1hcnJheS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2Zvcm0tYXJyYXktZmllbGQvZm9ybS1hcnJheS1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0U7SUFhRSxpQ0FBcUIsWUFBd0I7UUFBeEIsaUJBQVksR0FBWixZQUFZLENBQVk7UUFIbkMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRyxDQUFDO0lBR0ksQ0FBQztJQURsRCxDQUFDOzs7O0lBR0QsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCw4Q0FBWTs7OztJQUFaLFVBQWEsSUFBSTtRQUNmLElBQUcsSUFBSSxJQUFJLEtBQUssRUFDaEI7WUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDcEI7Z0JBQ0UsSUFBSSxFQUFHLElBQUk7Z0JBQ1osV0FBVyxFQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSzthQUNwQyxDQUNBLENBQUM7U0FDTDthQUNJLElBQUcsSUFBSSxJQUFJLE9BQU8sRUFBQztZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDcEI7Z0JBQ0UsSUFBSSxFQUFHLElBQUk7Z0JBQ1osV0FBVyxFQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSzthQUNwQyxDQUNBLENBQUM7U0FDTDthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3BCO2dCQUNFLElBQUksRUFBRyxRQUFRO2dCQUNoQixXQUFXLEVBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO2dCQUNwQyxLQUFLLEVBQUcsSUFBSTthQUNaLENBQ0EsQ0FBQztTQUNMO0lBRUgsQ0FBQzs7OztJQUVELDZDQUFXOzs7SUFBWDtRQUNFLE9BQU8sQ0FBQyxtQkFBVyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFBLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDakYsQ0FBQzs7Ozs7SUFJRCxxQ0FBRzs7OztJQUFILFVBQUksT0FBTzs7UUFDVCxPQUFPLENBQUMsSUFBSSxDQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSztZQUNyQixHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFHLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7Z0JBQ25ELENBQ0gsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUV2QixDQUFDOzs7Ozs7SUFFRCx3Q0FBTTs7Ozs7SUFBTixVQUFRLE9BQU8sRUFBRyxLQUFLO1FBQ3JCLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRXZCLENBQUM7O2dCQXZFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsNjdDQUFnRDs7aUJBRWpEOzs7O2dCQU44QixXQUFXOzs7OEJBUXZDLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLOytCQUVMLE1BQU07O0lBK0RULDhCQUFDO0NBQUEsQUF6RUQsSUF5RUM7U0FwRVksdUJBQXVCOzs7SUFDbEMsOENBQW9COztJQUNwQiw4Q0FBOEI7O0lBQzlCLDhDQUE0Qjs7SUFDNUIsMkNBQXFCOztJQUNyQiwrQ0FBNkM7O0lBQzdDLGdEQUFjOzs7OztJQUVELCtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvcm0tYXJyYXktZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS1hcnJheS1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvcm0tYXJyYXktZmllbGQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQXJyYXlGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpZ2VuZXJpY0RhdGE7XG4gIEBJbnB1dCgpZ2VuZXJpY0Zvcm06Rm9ybUdyb3VwO1xuICBASW5wdXQoKWdlbmVyaWNFZGl0OmJvb2xlYW47XG4gIHF1ZXN0aW9uIDogRm9ybUFycmF5O1xuICBAT3V0cHV0KCkgZWRpdHF1ZXN0aW9uID0gbmV3IEV2ZW50RW1pdHRlciAoKTtcbiAgcXVlc3Rpb25Db3VudDtcbiAgO1xuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6Rm9ybUJ1aWxkZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucXVlc3Rpb25Db3VudCA9IHRoaXMuZ2VuZXJpY0RhdGFbJ3ZhbHVlJ10ubGVuZ3RoICB8fCAxO1xuICB9XG4gIFxuICBlZGl0UXVlc3Rpb24oZWRpdCl7XG4gICAgaWYoZWRpdCA9PSAnYWRkJylcbiAgICB7XG4gICAgICB0aGlzLmVkaXRxdWVzdGlvbi5lbWl0KFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZSA6IGVkaXQgLFxuICAgICAgICAgY29udHJvbE5hbWUgOiB0aGlzLmdlbmVyaWNEYXRhLmZpZWxkLFxuICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIGVsc2UgaWYoZWRpdCA9PSAncmVzZXQnKXtcbiAgICAgIHRoaXMucXVlc3Rpb25Db3VudCA9IDE7XG4gICAgICB0aGlzLmVkaXRxdWVzdGlvbi5lbWl0KFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZSA6IGVkaXQgLFxuICAgICAgICAgY29udHJvbE5hbWUgOiB0aGlzLmdlbmVyaWNEYXRhLmZpZWxkLFxuICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5xdWVzdGlvbkNvdW50IC09IDE7XG4gICAgICB0aGlzLmVkaXRxdWVzdGlvbi5lbWl0KFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZSA6IFwiZGVsZXRlXCIgLFxuICAgICAgICAgY29udHJvbE5hbWUgOiB0aGlzLmdlbmVyaWNEYXRhLmZpZWxkLFxuICAgICAgICAgaW5kZXggOiBlZGl0XG4gICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICBcbiAgfVxuXG4gIGdldENvbnRyb2xzKCkge1xuICAgIHJldHVybiAoPEZvcm1BcnJheT50aGlzLmdlbmVyaWNGb3JtLmNvbnRyb2xzW3RoaXMuZ2VuZXJpY0RhdGEuZmllbGRdKS5jb250cm9scztcbiAgfVxuXG5cbiAgXG4gIGFkZChjb250cm9sKXtcbiAgICBjb250cm9sLnB1c2goXG4gICAgICB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgIFt0aGlzLmdlbmVyaWNEYXRhLmZpZWxkXTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMucXVlc3Rpb25Db3VudCsrO1xuXG4gIH1cblxuICBkZWxldGUoIGNvbnRyb2wgLCBpbmRleCApe1xuICAgIGNvbnRyb2wucmVtb3ZlQXQoaW5kZXgpO1xuICAgIHRoaXMucXVlc3Rpb25Db3VudC0tO1xuXG4gIH1cblxufVxuIl19