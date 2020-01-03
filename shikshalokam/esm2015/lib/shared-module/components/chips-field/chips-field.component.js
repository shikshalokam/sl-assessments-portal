/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
export class ChipsFieldComponent {
    constructor() {
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
    ngOnInit() {
        this.name = this.genericData.field;
        this.listOfChips = this.genericData.value;
        console.log("chips");
    }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        /** @type {?} */
        const input = event.input;
        /** @type {?} */
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.listOfChips.push({ [this.name]: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    /**
     * @param {?} chips
     * @return {?}
     */
    remove(chips) {
        /** @type {?} */
        const index = this.listOfChips.indexOf(chips);
        if (index >= 0) {
            this.listOfChips.splice(index, 1);
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9jaGlwcy1maWVsZC9jaGlwcy1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFRbkQsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQVNVLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEQsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRVIsdUJBQWtCLEdBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkQsZ0JBQVcsR0FBRyxFQUFFLENBQUM7SUE0QmpCLENBQUM7Ozs7SUEzQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3RCLENBQUM7Ozs7O0lBQ0QsR0FBRyxDQUFDLEtBQXdCOztjQUNwQixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUs7O2NBQ25CLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSztRQUV6QixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBRSxFQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDLENBQUM7U0FDdEQ7UUFFRCx3QkFBd0I7UUFDeEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQUs7O2NBQ0osS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUU3QyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7WUEzQ0EsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLCt6QkFBMkM7O2FBRTVDOzs7MEJBRUEsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsTUFBTTs7OztJQUhQLDBDQUFvQjs7SUFDcEIsMENBQThCOztJQUM5QiwwQ0FBNEI7O0lBQzVCLCtDQUFnRDs7SUFDaEQsc0NBQWU7O0lBQ2YseUNBQWtCOztJQUNsQix3Q0FBaUI7O0lBQ2pCLHdDQUFpQjs7SUFDakIsbUNBQU07O0lBQ04saURBQXVEOztJQUN2RCwwQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NPTU1BLCBFTlRFUn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7TWF0Q2hpcElucHV0RXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNoaXBzLWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoaXBzLWZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hpcHMtZmllbGQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0ZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbkBJbnB1dCgpZ2VuZXJpY0RhdGE7XG5ASW5wdXQoKWdlbmVyaWNGb3JtOkZvcm1Hcm91cDtcbkBJbnB1dCgpZ2VuZXJpY0VkaXQ6Ym9vbGVhbjtcbkBPdXRwdXQoKSBlbWl0UmVzcG9uc2VUeXBlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xudmlzaWJsZSA9IHRydWU7XG5zZWxlY3RhYmxlID0gdHJ1ZTtcbnJlbW92YWJsZSA9IHRydWU7XG5hZGRPbkJsdXIgPSB0cnVlO1xubmFtZSA7XG5yZWFkb25seSBzZXBhcmF0b3JLZXlzQ29kZXM6IG51bWJlcltdID0gW0VOVEVSLCBDT01NQV07XG5saXN0T2ZDaGlwcyA9IFtdO1xubmdPbkluaXQoKXtcbiAgdGhpcy5uYW1lID0gdGhpcy5nZW5lcmljRGF0YS5maWVsZDtcbiAgdGhpcy5saXN0T2ZDaGlwcyA9IHRoaXMuZ2VuZXJpY0RhdGEudmFsdWU7XG4gIGNvbnNvbGUubG9nKFwiY2hpcHNcIilcbn1cbmFkZChldmVudDogTWF0Q2hpcElucHV0RXZlbnQpOiB2b2lkIHtcbiAgY29uc3QgaW5wdXQgPSBldmVudC5pbnB1dDtcbiAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcblxuICAvLyBBZGQgb3VyIGZydWl0XG4gIGlmICgodmFsdWUgfHwgJycpLnRyaW0oKSkge1xuICAgIHRoaXMubGlzdE9mQ2hpcHMucHVzaCgge1t0aGlzLm5hbWVdIDogdmFsdWUudHJpbSgpfSk7XG4gIH1cblxuICAvLyBSZXNldCB0aGUgaW5wdXQgdmFsdWVcbiAgaWYgKGlucHV0KSB7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfVxufVxuXG5yZW1vdmUoY2hpcHMpOiB2b2lkIHtcbiAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RPZkNoaXBzLmluZGV4T2YoY2hpcHMpO1xuXG4gIGlmIChpbmRleCA+PSAwKSB7XG4gICAgdGhpcy5saXN0T2ZDaGlwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG59Il19