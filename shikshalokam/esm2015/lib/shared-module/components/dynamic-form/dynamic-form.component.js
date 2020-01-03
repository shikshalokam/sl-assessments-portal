/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class DynamicFormComponent {
    constructor() {
        this.editnewquestion = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    changeResponseType(event, index) {
        this.genericData[index].value = event;
    }
    /**
     * @param {?} edit
     * @return {?}
     */
    editquestion(edit) {
        this.editnewquestion.emit(edit);
    }
}
DynamicFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dynamic-form',
                template: "<div class=\"col-sm-12 \" [formGroup]= \"genericForm\"  *ngIf=\" genericForm\" >\n  <div *ngFor=\"let data of genericData ; let i  = index\" >\n    <app-dropdown-field *ngIf=\"(data.input == 'radio'|| data.input == 'dropdown' || data.input == 'multiselect' || data.input == 'select'  ) && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" (emitResponseType)=\"changeResponseType($event,i)\"></app-dropdown-field>\n  \n    <app-text-field *ngIf=\"data.input == 'text' && !data.autocomplete  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-text-field>\n    \n    <app-textarea-field *ngIf=\"data.input == 'textarea'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-textarea-field>\n   \n    <app-number-field *ngIf=\"data.input == 'number'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-number-field>\n    \n    <app-select-field *ngIf=\"data.input == 'boolean'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-select-field>\n\n    <app-form-array-field (editquestion)=\"editquestion($event)\" *ngIf=\"data.input == 'array'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-form-array-field>\n\n    <app-date-picker  *ngIf=\"data.input == 'date' && data.visible\" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-date-picker>\n\n    <app-chips-field *ngIf=\"data.input == 'chips'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-chips-field>\n\n    <app-auto-complete  *ngIf=\"data.input == 'text'&& data.autocomplete && data.visible\" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\" [hostUrl]=\"hostUrl\"></app-auto-complete>\n  </div> \n\n\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
DynamicFormComponent.ctorParameters = () => [];
DynamicFormComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }],
    editnewquestion: [{ type: Output }],
    hostUrl: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DynamicFormComponent.prototype.genericData;
    /** @type {?} */
    DynamicFormComponent.prototype.genericForm;
    /** @type {?} */
    DynamicFormComponent.prototype.genericEdit;
    /** @type {?} */
    DynamicFormComponent.prototype.editnewquestion;
    /** @type {?} */
    DynamicFormComponent.prototype.hostUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBQyxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzNDLE1BQU0sT0FBTyxvQkFBb0I7SUFRL0I7UUFIVSxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNL0MsQ0FBQzs7OztJQUVELFFBQVE7SUFFUixDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxLQUFLLEVBQUcsS0FBSztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7SUFHdEMsQ0FBQzs7Ozs7SUFDRCxZQUFZLENBQUMsSUFBSTtRQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBRVQsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIscytEQUE0Qzs7YUFFN0M7Ozs7OzBCQUdFLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLE1BQU07c0JBQ04sS0FBSzs7OztJQUpOLDJDQUE0Qjs7SUFDNUIsMkNBQStCOztJQUMvQiwyQ0FBNEI7O0lBQzVCLCtDQUErQzs7SUFDL0MsdUNBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5AQ29tcG9uZW50KHtcblxuICBzZWxlY3RvcjogJ2FwcC1keW5hbWljLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHluYW1pYy1mb3JtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGdlbmVyaWNEYXRhIDogYW55IDtcbiAgQElucHV0KClnZW5lcmljRm9ybSA6Rm9ybUdyb3VwO1xuICBASW5wdXQoKWdlbmVyaWNFZGl0OmJvb2xlYW47XG4gIEBPdXRwdXQoKSBlZGl0bmV3cXVlc3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGhvc3RVcmwgO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgICBcbiAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgXG4gIH1cblxuICBjaGFuZ2VSZXNwb25zZVR5cGUoZXZlbnQgLCBpbmRleCl7XG4gICAgdGhpcy5nZW5lcmljRGF0YVtpbmRleF0udmFsdWU9ZXZlbnQ7XG4gICAgXG5cbiAgfVxuICBlZGl0cXVlc3Rpb24oZWRpdCl7XG4gICAgdGhpcy5lZGl0bmV3cXVlc3Rpb24uZW1pdChlZGl0KTtcbiAgfVxufVxuIl19