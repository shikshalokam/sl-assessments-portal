/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
var DropdownFieldComponent = /** @class */ (function () {
    function DropdownFieldComponent() {
        this.emitResponseType = new EventEmitter();
    }
    /**
     * @return {?}
     */
    DropdownFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} responseType
     * @return {?}
     */
    DropdownFieldComponent.prototype.changeResponseType = /**
     * @param {?} responseType
     * @return {?}
     */
    function (responseType) {
        //console.log(responseType)
        this.emitResponseType.emit(responseType);
    };
    DropdownFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-dropdown-field',
                    template: "<div [formGroup]=\"genericForm\" >\n  <mat-form-field class=\" col-sm-6 fixSize _halfWidth\" *ngIf=\"genericData.input == 'radio' ||genericData.input == 'dropdown' ||genericData.input == 'select' \">\n    <mat-select [disabled]=\"!genericData.editable\"  placeholder=\"{{genericData.label | camelcase}} \"  formControlName=\"{{genericData.field}}\" [required]=\"genericData.validation.required\" >\n        <mat-option *ngFor=\"let opt of genericData.options\" [value]=\"opt.value\" (click)=\"changeResponseType(opt.value)\" >\n          {{opt.label}} \n        </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\" col-sm-6 fixSize _halfWidth\"  *ngIf=\"genericData.input == 'multiselect' \">\n      <mat-select [disabled]=\"!genericData.editable\"  placeholder=\"{{genericData.label | camelcase}} \"  formControlName=\"{{genericData.field}}\" required multiple >\n          <mat-option *ngFor=\"let opt of genericData.options\" [value]=\"opt.value\" (click)=\"changeResponseType\">\n            {{opt.label}} \n          </mat-option>\n      </mat-select>\n    </mat-form-field>\n</div>",
                    styles: [".space{padding:0 10px}.bold{font-size:15px;font-weight:1000}.right{text-align:right}.fixSize{height:54.6px}"]
                }] }
    ];
    /** @nocollapse */
    DropdownFieldComponent.ctorParameters = function () { return []; };
    DropdownFieldComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }],
        emitResponseType: [{ type: Output }]
    };
    return DropdownFieldComponent;
}());
export { DropdownFieldComponent };
if (false) {
    /** @type {?} */
    DropdownFieldComponent.prototype.genericData;
    /** @type {?} */
    DropdownFieldComponent.prototype.genericForm;
    /** @type {?} */
    DropdownFieldComponent.prototype.genericEdit;
    /** @type {?} */
    DropdownFieldComponent.prototype.emitResponseType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9kcm9wZG93bi1maWVsZC9kcm9wZG93bi1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBVUU7UUFEUSxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFakIseUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFDRCxtREFBa0I7Ozs7SUFBbEIsVUFBbUIsWUFBWTtRQUM3QiwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDBtQ0FBOEM7O2lCQUUvQzs7Ozs7OEJBRUEsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7bUNBQ0wsTUFBTTs7SUFTUCw2QkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksc0JBQXNCOzs7SUFDbkMsNkNBQW9COztJQUNwQiw2Q0FBOEI7O0lBQzlCLDZDQUE0Qjs7SUFDNUIsa0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZHJvcGRvd24tZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24tZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi1maWVsZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuQElucHV0KClnZW5lcmljRGF0YTtcbkBJbnB1dCgpZ2VuZXJpY0Zvcm06Rm9ybUdyb3VwO1xuQElucHV0KClnZW5lcmljRWRpdDpib29sZWFuO1xuQE91dHB1dCgpIGVtaXRSZXNwb25zZVR5cGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgY2hhbmdlUmVzcG9uc2VUeXBlKHJlc3BvbnNlVHlwZSl7XG4gICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZVR5cGUpXG4gICAgdGhpcy5lbWl0UmVzcG9uc2VUeXBlLmVtaXQocmVzcG9uc2VUeXBlKTtcbiAgfVxufVxuIl19