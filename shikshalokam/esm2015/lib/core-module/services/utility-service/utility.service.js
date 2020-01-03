/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-spinner";
import * as i3 from "@angular/forms";
export class UtilityService {
    /**
     * @param {?} location
     * @param {?} spinner
     * @param {?} _formBuilder
     */
    constructor(location, spinner, _formBuilder) {
        this.location = location;
        this.spinner = spinner;
        this._formBuilder = _formBuilder;
    }
    /**
     * @return {?}
     */
    onBack() {
        this.location.back();
    }
    /**
     * @return {?}
     */
    loaderShow() {
        this.spinner.show();
    }
    /**
     * @return {?}
     */
    loaderHide() {
        this.spinner.hide();
    }
    /**
     * @param {?} inputs
     * @return {?}
     */
    toGroup(inputs) {
        /** @type {?} */
        let group = {};
        inputs.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            if (element.input == "array") {
                group[element.field] = this.createFormArray(element);
            }
            else {
                group[element.field] = element.validation.required ? new FormControl({ value: element.value || '', disabled: !element.editable }, Validators.required)
                    : new FormControl({ value: element.value || '', disabled: !element.editable });
            }
        }));
        return new FormGroup(group);
    }
    /**
     * @param {?} inputs
     * @return {?}
     */
    createFormArray(inputs) {
        /** @type {?} */
        let elements = [];
        inputs.array.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            elements[element['field']] = element.validation.required ? new FormControl({ value: element.value || '', disabled: !element.editable }, Validators.required)
                : new FormControl({ value: element.value || '', disabled: !element.editable });
        }));
        return new FormArray(elements);
    }
    /**
     * @param {?} object
     * @return {?}
     */
    createControl(object) {
        this.objectForm = this._formBuilder.group({});
        object.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            /** @type {?} */
            let controlLabel = field.field;
            /** @type {?} */
            let controls;
            if (field.input === "array") {
                controls = new FormArray([]);
                field.value.forEach((/**
                 * @param {?} level
                 * @return {?}
                 */
                level => {
                    controls.push(this._formBuilder.group({
                        [controlLabel]: [level ? level : '', Validators.required]
                    }));
                }));
            }
            else {
                controls = new FormControl(field.value ? field.value : "", field.validation.required ? Validators.required : null);
            }
            this.objectForm.addControl(field.field, controls);
        }));
        return this.objectForm;
    }
    /**
     * @param {?} object
     * @return {?}
     */
    uploadFile(object) {
        this.objectForm = this._formBuilder.group({});
        object.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            /** @type {?} */
            let controlLabel = field.field;
            /** @type {?} */
            let controls;
            if (field.input === "file") {
                controls = new FormControl(field.value ? field.value : null, [field.validation.required ? Validators.required : null]);
            }
            this.objectForm.addControl(field.field, controls);
        }));
        console.log(this.objectForm);
        return this.objectForm;
    }
}
UtilityService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UtilityService.ctorParameters = () => [
    { type: Location },
    { type: NgxSpinnerService },
    { type: FormBuilder }
];
/** @nocollapse */ UtilityService.ngInjectableDef = i0.defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(i0.inject(i1.Location), i0.inject(i2.NgxSpinnerService), i0.inject(i3.FormBuilder)); }, token: UtilityService, providedIn: "root" });
if (false) {
    /** @type {?} */
    UtilityService.prototype.objectForm;
    /**
     * @type {?}
     * @private
     */
    UtilityService.prototype.location;
    /**
     * @type {?}
     * @private
     */
    UtilityService.prototype.spinner;
    /**
     * @type {?}
     * @private
     */
    UtilityService.prototype._formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL2NvcmUtbW9kdWxlL3NlcnZpY2VzL3V0aWxpdHktc2VydmljZS91dGlsaXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUk1RixNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBR3pCLFlBQW9CLFFBQWtCLEVBQVUsT0FBMEIsRUFBVSxZQUF5QjtRQUF6RixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUM3RyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNELFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELE9BQU8sQ0FBQyxNQUFNOztZQUVSLEtBQUssR0FBUSxFQUFFO1FBQ25CLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFBRTtnQkFDNUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENB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QUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBTTtRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTs7Z0JBQ2pCLFlBQVksR0FBRyxLQUFLLENBQUMsS0FBSzs7Z0JBQzFCLFFBQVE7WUFFWixJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssTUFBTSxFQUFFO2dCQUcxQixRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUNwSCxDQUFDO2FBQ0g7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDNUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBRXpCLENBQUM7OztZQXRGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMUSxRQUFRO1lBQ1IsaUJBQWlCO1lBQzhCLFdBQVc7Ozs7O0lBS2pFLG9DQUFXOzs7OztJQUVDLGtDQUEwQjs7Ozs7SUFBRSxpQ0FBa0M7Ozs7O0lBQUUsc0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmd4U3Bpbm5lclNlcnZpY2UgfSBmcm9tICduZ3gtc3Bpbm5lcic7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUdyb3VwLCBGb3JtQXJyYXksIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXRpbGl0eVNlcnZpY2Uge1xuICBvYmplY3RGb3JtO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIHNwaW5uZXI6IE5neFNwaW5uZXJTZXJ2aWNlLCBwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgfVxuXG4gIG9uQmFjaygpIHtcbiAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgfVxuICBsb2FkZXJTaG93KCkge1xuICAgIHRoaXMuc3Bpbm5lci5zaG93KCk7XG4gIH1cbiAgbG9hZGVySGlkZSgpIHtcbiAgICB0aGlzLnNwaW5uZXIuaGlkZSgpO1xuICB9XG4gIHRvR3JvdXAoaW5wdXRzKSB7XG5cbiAgICBsZXQgZ3JvdXA6IGFueSA9IHt9O1xuICAgIGlucHV0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuaW5wdXQgPT0gXCJhcnJheVwiKSB7XG4gICAgICAgIGdyb3VwW2VsZW1lbnQuZmllbGRdID0gdGhpcy5jcmVhdGVGb3JtQXJyYXkoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZ3JvdXBbZWxlbWVudC5maWVsZF0gPSBlbGVtZW50LnZhbGlkYXRpb24ucmVxdWlyZWQgPyBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogZWxlbWVudC52YWx1ZSB8fCAnJywgZGlzYWJsZWQ6ICFlbGVtZW50LmVkaXRhYmxlIH0sIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgICAgICAgOiBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogZWxlbWVudC52YWx1ZSB8fCAnJywgZGlzYWJsZWQ6ICFlbGVtZW50LmVkaXRhYmxlIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKGdyb3VwKTtcbiAgfVxuICBjcmVhdGVGb3JtQXJyYXkoaW5wdXRzKSB7XG5cbiAgICBsZXQgZWxlbWVudHM6IGFueSA9IFtdO1xuICAgIGlucHV0cy5hcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudHNbZWxlbWVudFsnZmllbGQnXV0gPSBlbGVtZW50LnZhbGlkYXRpb24ucmVxdWlyZWQgPyBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogZWxlbWVudC52YWx1ZSB8fCAnJywgZGlzYWJsZWQ6ICFlbGVtZW50LmVkaXRhYmxlIH0sIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgICAgIDogbmV3IEZvcm1Db250cm9sKHsgdmFsdWU6IGVsZW1lbnQudmFsdWUgfHwgJycsIGRpc2FibGVkOiAhZWxlbWVudC5lZGl0YWJsZSB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgRm9ybUFycmF5KGVsZW1lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2wob2JqZWN0KSB7XG4gICAgdGhpcy5vYmplY3RGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe30pO1xuXG4gICAgb2JqZWN0LmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgbGV0IGNvbnRyb2xMYWJlbCA9IGZpZWxkLmZpZWxkO1xuICAgICAgbGV0IGNvbnRyb2xzO1xuXG4gICAgICBpZiAoZmllbGQuaW5wdXQgPT09IFwiYXJyYXlcIikge1xuICAgICAgICBjb250cm9scyA9IG5ldyBGb3JtQXJyYXkoW10pXG4gICAgICAgIGZpZWxkLnZhbHVlLmZvckVhY2gobGV2ZWwgPT4ge1xuICAgICAgICAgIGNvbnRyb2xzLnB1c2godGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgW2NvbnRyb2xMYWJlbF06IFtsZXZlbCA/IGxldmVsIDogJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0pXG5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb250cm9scyA9IG5ldyBGb3JtQ29udHJvbChmaWVsZC52YWx1ZSA/IGZpZWxkLnZhbHVlIDogXCJcIiwgZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZCA/IFZhbGlkYXRvcnMucmVxdWlyZWQgOiBudWxsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLm9iamVjdEZvcm0uYWRkQ29udHJvbChmaWVsZC5maWVsZCwgY29udHJvbHMpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLm9iamVjdEZvcm07XG4gIH1cblxuICB1cGxvYWRGaWxlKG9iamVjdCl7XG4gICAgdGhpcy5vYmplY3RGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe30pO1xuICAgIG9iamVjdC5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGxldCBjb250cm9sTGFiZWwgPSBmaWVsZC5maWVsZDtcbiAgICAgIGxldCBjb250cm9scztcblxuICAgICAgaWYgKGZpZWxkLmlucHV0ID09PSBcImZpbGVcIikge1xuXG4gICAgICAgXG4gICAgICAgIGNvbnRyb2xzID0gbmV3IEZvcm1Db250cm9sKGZpZWxkLnZhbHVlID8gZmllbGQudmFsdWUgOiBudWxsLCBbZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZCA/IFZhbGlkYXRvcnMucmVxdWlyZWQgOiBudWxsXVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5vYmplY3RGb3JtLmFkZENvbnRyb2woZmllbGQuZmllbGQsIGNvbnRyb2xzKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm9iamVjdEZvcm0pXG4gICAgcmV0dXJuIHRoaXMub2JqZWN0Rm9ybTtcblxuICB9XG5cbn1cbi8vIGV4cG9ydCBmdW5jdGlvbiByZXF1aXJlZEZpbGVUeXBlKCB0eXBlczogU3RyaW5nW10gKSB7XG4vLyAgIHJldHVybiBmdW5jdGlvbiAoY29udHJvbDogRm9ybUNvbnRyb2wpIHtcbi8vICAgICB0eXBlcy5mb3JFYWNoKCB0eXBlID0+IHtcblxuLy8gICAgIGNvbnN0IGZpbGUgPSBjb250cm9sLnZhbHVlO1xuXG4vLyAgICAgaWYgKCBmaWxlICkge1xuICAgICAgXG4vLyAgICAgICBsZXQgZXh0ZW5zaW9uID0gZmlsZS5sYXN0SW5kZXhPZihcIi5cIik7XG4vLyAgICAgICBleHRlbnNpb24gPSBmaWxlLnN1YnN0cmluZyhleHRlbnNpb24rMSkudG9Mb3dlckNhc2UoKTtcblxuLy8gICAgICAgaWYgKCB0eXBlLnRvTG93ZXJDYXNlKCkgPT09IGV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpICkge1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgIHJlcXVpcmVkRmlsZVR5cGU6IHRydWVcbi8vICAgICAgICAgfTtcbi8vICAgICAgIH1cbiAgICAgIFxuLy8gICAgICAgLy8gcmV0dXJuIG51bGw7XG4vLyAgICAgfVxuLy8gICB9KVxuXG5cbi8vICAgICByZXR1cm4gbnVsbDtcbi8vICAgfTtcbi8vIH1cbiJdfQ==