/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
var ChipsFieldComponent = /** @class */ (function () {
    function ChipsFieldComponent() {
        this.emitResponseType = new EventEmitter();
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.listOfChips = [];
    }
    /**
     * @return {?}
     */
    ChipsFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.name = this.genericData.field;
        this.listOfChips = this.genericData.value;
        console.log("chips");
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ChipsFieldComponent.prototype.add = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _a;
        /** @type {?} */
        var input = event.input;
        /** @type {?} */
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.listOfChips.push((_a = {}, _a[this.name] = value.trim(), _a));
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    /**
     * @param {?} chips
     * @return {?}
     */
    ChipsFieldComponent.prototype.remove = /**
     * @param {?} chips
     * @return {?}
     */
    function (chips) {
        /** @type {?} */
        var index = this.listOfChips.indexOf(chips);
        if (index >= 0) {
            this.listOfChips.splice(index, 1);
        }
    };
    ChipsFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-chips-field',
                    template: "<div [formGroup]=\"genericForm\" >\n  <mat-form-field class=\" col-sm-6 fixSize _halfWidth\" *ngIf=\"genericData.input == 'chips' \">\n    <mat-chip-list #chipList>\n      <mat-chip *ngFor=\"let chip of listOfChips\" [selectable]=\"selectable\"\n               [removable]=\"removable\" (removed)=\"remove(chip)\">\n        {{chip[genericData.field]}}\n        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n      </mat-chip>\n      <input placeholder=\"{{genericData.field}}\"\n            formControlName=\"{{genericData.field}}\"\n             [matChipInputFor]=\"chipList\"\n             [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n             [matChipInputAddOnBlur]=\"addOnBlur\"\n             (matChipInputTokenEnd)=\"add($event)\">\n    </mat-chip-list>\n  </mat-form-field>\n</div>",
                    styles: [".space{padding:0 10px}.bold{font-size:15px;font-weight:1000}.right{text-align:right}.fixSize{height:54.6px}"]
                }] }
    ];
    ChipsFieldComponent.propDecorators = {
        genericData: [{ type: Input }],
        genericForm: [{ type: Input }],
        genericEdit: [{ type: Input }],
        emitResponseType: [{ type: Output }]
    };
    return ChipsFieldComponent;
}());
export { ChipsFieldComponent };
if (false) {
    /** @type {?} */
    ChipsFieldComponent.prototype.genericData;
    /** @type {?} */
    ChipsFieldComponent.prototype.genericForm;
    /** @type {?} */
    ChipsFieldComponent.prototype.genericEdit;
    /** @type {?} */
    ChipsFieldComponent.prototype.emitResponseType;
    /** @type {?} */
    ChipsFieldComponent.prototype.visible;
    /** @type {?} */
    ChipsFieldComponent.prototype.selectable;
    /** @type {?} */
    ChipsFieldComponent.prototype.removable;
    /** @type {?} */
    ChipsFieldComponent.prototype.addOnBlur;
    /** @type {?} */
    ChipsFieldComponent.prototype.name;
    /** @type {?} */
    ChipsFieldComponent.prototype.separatorKeysCodes;
    /** @type {?} */
    ChipsFieldComponent.prototype.listOfChips;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9jaGlwcy1maWVsZC9jaGlwcy1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFHbkQ7SUFBQTtRQVNVLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEQsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRVIsdUJBQWtCLEdBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkQsZ0JBQVcsR0FBRyxFQUFFLENBQUM7SUE0QmpCLENBQUM7Ozs7SUEzQkQsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDdEIsQ0FBQzs7Ozs7SUFDRCxpQ0FBRzs7OztJQUFILFVBQUksS0FBd0I7OztZQUNwQixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUs7O1lBQ25CLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSztRQUV6QixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksV0FBRyxHQUFDLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxNQUFFLENBQUM7U0FDdEQ7UUFFRCx3QkFBd0I7UUFDeEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7O0lBRUQsb0NBQU07Ozs7SUFBTixVQUFPLEtBQUs7O1lBQ0osS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUU3QyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDOztnQkEzQ0EsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLCt6QkFBMkM7O2lCQUU1Qzs7OzhCQUVBLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLO21DQUNMLE1BQU07O0lBbUNQLDBCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0F2Q1ksbUJBQW1COzs7SUFDaEMsMENBQW9COztJQUNwQiwwQ0FBOEI7O0lBQzlCLDBDQUE0Qjs7SUFDNUIsK0NBQWdEOztJQUNoRCxzQ0FBZTs7SUFDZix5Q0FBa0I7O0lBQ2xCLHdDQUFpQjs7SUFDakIsd0NBQWlCOztJQUNqQixtQ0FBTTs7SUFDTixpREFBdUQ7O0lBQ3ZELDBDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q09NTUEsIEVOVEVSfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtNYXRDaGlwSW5wdXRFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2hpcHMtZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hpcHMtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGlwcy1maWVsZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuQElucHV0KClnZW5lcmljRGF0YTtcbkBJbnB1dCgpZ2VuZXJpY0Zvcm06Rm9ybUdyb3VwO1xuQElucHV0KClnZW5lcmljRWRpdDpib29sZWFuO1xuQE91dHB1dCgpIGVtaXRSZXNwb25zZVR5cGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG52aXNpYmxlID0gdHJ1ZTtcbnNlbGVjdGFibGUgPSB0cnVlO1xucmVtb3ZhYmxlID0gdHJ1ZTtcbmFkZE9uQmx1ciA9IHRydWU7XG5uYW1lIDtcbnJlYWRvbmx5IHNlcGFyYXRvcktleXNDb2RlczogbnVtYmVyW10gPSBbRU5URVIsIENPTU1BXTtcbmxpc3RPZkNoaXBzID0gW107XG5uZ09uSW5pdCgpe1xuICB0aGlzLm5hbWUgPSB0aGlzLmdlbmVyaWNEYXRhLmZpZWxkO1xuICB0aGlzLmxpc3RPZkNoaXBzID0gdGhpcy5nZW5lcmljRGF0YS52YWx1ZTtcbiAgY29uc29sZS5sb2coXCJjaGlwc1wiKVxufVxuYWRkKGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCk6IHZvaWQge1xuICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xuICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlO1xuXG4gIC8vIEFkZCBvdXIgZnJ1aXRcbiAgaWYgKCh2YWx1ZSB8fCAnJykudHJpbSgpKSB7XG4gICAgdGhpcy5saXN0T2ZDaGlwcy5wdXNoKCB7W3RoaXMubmFtZV0gOiB2YWx1ZS50cmltKCl9KTtcbiAgfVxuXG4gIC8vIFJlc2V0IHRoZSBpbnB1dCB2YWx1ZVxuICBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICB9XG59XG5cbnJlbW92ZShjaGlwcyk6IHZvaWQge1xuICBjb25zdCBpbmRleCA9IHRoaXMubGlzdE9mQ2hpcHMuaW5kZXhPZihjaGlwcyk7XG5cbiAgaWYgKGluZGV4ID49IDApIHtcbiAgICB0aGlzLmxpc3RPZkNoaXBzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbn0iXX0=