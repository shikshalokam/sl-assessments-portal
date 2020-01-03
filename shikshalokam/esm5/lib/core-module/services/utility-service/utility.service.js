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
var UtilityService = /** @class */ (function () {
    function UtilityService(location, spinner, _formBuilder) {
        this.location = location;
        this.spinner = spinner;
        this._formBuilder = _formBuilder;
    }
    /**
     * @return {?}
     */
    UtilityService.prototype.onBack = /**
     * @return {?}
     */
    function () {
        this.location.back();
    };
    /**
     * @return {?}
     */
    UtilityService.prototype.loaderShow = /**
     * @return {?}
     */
    function () {
        this.spinner.show();
    };
    /**
     * @return {?}
     */
    UtilityService.prototype.loaderHide = /**
     * @return {?}
     */
    function () {
        this.spinner.hide();
    };
    /**
     * @param {?} inputs
     * @return {?}
     */
    UtilityService.prototype.toGroup = /**
     * @param {?} inputs
     * @return {?}
     */
    function (inputs) {
        var _this = this;
        /** @type {?} */
        var group = {};
        inputs.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (element.input == "array") {
                group[element.field] = _this.createFormArray(element);
            }
            else {
                group[element.field] = element.validation.required ? new FormControl({ value: element.value || '', disabled: !element.editable }, Validators.required)
                    : new FormControl({ value: element.value || '', disabled: !element.editable });
            }
        }));
        return new FormGroup(group);
    };
    /**
     * @param {?} inputs
     * @return {?}
     */
    UtilityService.prototype.createFormArray = /**
     * @param {?} inputs
     * @return {?}
     */
    function (inputs) {
        /** @type {?} */
        var elements = [];
        inputs.array.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            elements[element['field']] = element.validation.required ? new FormControl({ value: element.value || '', disabled: !element.editable }, Validators.required)
                : new FormControl({ value: element.value || '', disabled: !element.editable });
        }));
        return new FormArray(elements);
    };
    /**
     * @param {?} object
     * @return {?}
     */
    UtilityService.prototype.createControl = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        var _this = this;
        this.objectForm = this._formBuilder.group({});
        object.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            /** @type {?} */
            var controlLabel = field.field;
            /** @type {?} */
            var controls;
            if (field.input === "array") {
                controls = new FormArray([]);
                field.value.forEach((/**
                 * @param {?} level
                 * @return {?}
                 */
                function (level) {
                    var _a;
                    controls.push(_this._formBuilder.group((_a = {},
                        _a[controlLabel] = [level ? level : '', Validators.required],
                        _a)));
                }));
            }
            else {
                controls = new FormControl(field.value ? field.value : "", field.validation.required ? Validators.required : null);
            }
            _this.objectForm.addControl(field.field, controls);
        }));
        return this.objectForm;
    };
    /**
     * @param {?} object
     * @return {?}
     */
    UtilityService.prototype.uploadFile = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        var _this = this;
        this.objectForm = this._formBuilder.group({});
        object.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            /** @type {?} */
            var controlLabel = field.field;
            /** @type {?} */
            var controls;
            if (field.input === "file") {
                controls = new FormControl(field.value ? field.value : null, [field.validation.required ? Validators.required : null]);
            }
            _this.objectForm.addControl(field.field, controls);
        }));
        console.log(this.objectForm);
        return this.objectForm;
    };
    UtilityService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UtilityService.ctorParameters = function () { return [
        { type: Location },
        { type: NgxSpinnerService },
        { type: FormBuilder }
    ]; };
    /** @nocollapse */ UtilityService.ngInjectableDef = i0.defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(i0.inject(i1.Location), i0.inject(i2.NgxSpinnerService), i0.inject(i3.FormBuilder)); }, token: UtilityService, providedIn: "root" });
    return UtilityService;
}());
export { UtilityService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL2NvcmUtbW9kdWxlL3NlcnZpY2VzL3V0aWxpdHktc2VydmljZS91dGlsaXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUM1RjtJQU1FLHdCQUFvQixRQUFrQixFQUFVLE9BQTBCLEVBQVUsWUFBeUI7UUFBekYsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFDN0csQ0FBQzs7OztJQUVELCtCQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNELG1DQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUNELG1DQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFDRCxnQ0FBTzs7OztJQUFQLFVBQVEsTUFBTTtRQUFkLGlCQWFDOztZQVhLLEtBQUssR0FBUSxFQUFFO1FBQ25CLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ3BCLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLEVBQUU7Z0JBQzVCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0RDtpQkFDSTtnQkFDSCxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztvQkFDcEosQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2xGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBQ0Qsd0NBQWU7Ozs7SUFBZixVQUFnQixNQUFNOztZQUVoQixRQUFRLEdBQVEsRUFBRTtRQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDMUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztnQkFDMUosQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELHNDQUFhOzs7O0lBQWIsVUFBYyxNQUFNO1FBQXBCLGlCQXdCQztRQXZCQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxLQUFLOztnQkFDZCxZQUFZLEdBQUcsS0FBSyxDQUFDLEtBQUs7O2dCQUMxQixRQUFRO1lBRVosSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTtnQkFDM0IsUUFBUSxHQUFHLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxLQUFLOztvQkFDdkIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUs7d0JBQ25DLEdBQUMsWUFBWSxJQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDOzRCQUN6RCxDQUNELENBQUE7Z0JBQ0gsQ0FBQyxFQUFDLENBQUE7YUFFSDtpQkFDSTtnQkFDSCxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2hILENBQUM7YUFDSDtZQUNELEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxtQ0FBVTs7OztJQUFWLFVBQVcsTUFBTTtRQUFqQixpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsS0FBSzs7Z0JBQ2QsWUFBWSxHQUFHLEtBQUssQ0FBQyxLQUFLOztnQkFDMUIsUUFBUTtZQUVaLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQUU7Z0JBRzFCLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQ3BILENBQUM7YUFDSDtZQUNELEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM1QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFFekIsQ0FBQzs7Z0JBdEZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsUUFBUTtnQkFDUixpQkFBaUI7Z0JBQzhCLFdBQVc7Ozt5QkFIbkU7Q0E0RkMsQUF4RkQsSUF3RkM7U0FyRlksY0FBYzs7O0lBQ3pCLG9DQUFXOzs7OztJQUVDLGtDQUEwQjs7Ozs7SUFBRSxpQ0FBa0M7Ozs7O0lBQUUsc0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmd4U3Bpbm5lclNlcnZpY2UgfSBmcm9tICduZ3gtc3Bpbm5lcic7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUdyb3VwLCBGb3JtQXJyYXksIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXRpbGl0eVNlcnZpY2Uge1xuICBvYmplY3RGb3JtO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIHNwaW5uZXI6IE5neFNwaW5uZXJTZXJ2aWNlLCBwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgfVxuXG4gIG9uQmFjaygpIHtcbiAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgfVxuICBsb2FkZXJTaG93KCkge1xuICAgIHRoaXMuc3Bpbm5lci5zaG93KCk7XG4gIH1cbiAgbG9hZGVySGlkZSgpIHtcbiAgICB0aGlzLnNwaW5uZXIuaGlkZSgpO1xuICB9XG4gIHRvR3JvdXAoaW5wdXRzKSB7XG5cbiAgICBsZXQgZ3JvdXA6IGFueSA9IHt9O1xuICAgIGlucHV0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuaW5wdXQgPT0gXCJhcnJheVwiKSB7XG4gICAgICAgIGdyb3VwW2VsZW1lbnQuZmllbGRdID0gdGhpcy5jcmVhdGVGb3JtQXJyYXkoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZ3JvdXBbZWxlbWVudC5maWVsZF0gPSBlbGVtZW50LnZhbGlkYXRpb24ucmVxdWlyZWQgPyBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogZWxlbWVudC52YWx1ZSB8fCAnJywgZGlzYWJsZWQ6ICFlbGVtZW50LmVkaXRhYmxlIH0sIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgICAgICAgOiBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogZWxlbWVudC52YWx1ZSB8fCAnJywgZGlzYWJsZWQ6ICFlbGVtZW50LmVkaXRhYmxlIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKGdyb3VwKTtcbiAgfVxuICBjcmVhdGVGb3JtQXJyYXkoaW5wdXRzKSB7XG5cbiAgICBsZXQgZWxlbWVudHM6IGFueSA9IFtdO1xuICAgIGlucHV0cy5hcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudHNbZWxlbWVudFsnZmllbGQnXV0gPSBlbGVtZW50LnZhbGlkYXRpb24ucmVxdWlyZWQgPyBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogZWxlbWVudC52YWx1ZSB8fCAnJywgZGlzYWJsZWQ6ICFlbGVtZW50LmVkaXRhYmxlIH0sIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgICAgIDogbmV3IEZvcm1Db250cm9sKHsgdmFsdWU6IGVsZW1lbnQudmFsdWUgfHwgJycsIGRpc2FibGVkOiAhZWxlbWVudC5lZGl0YWJsZSB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgRm9ybUFycmF5KGVsZW1lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2wob2JqZWN0KSB7XG4gICAgdGhpcy5vYmplY3RGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe30pO1xuXG4gICAgb2JqZWN0LmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgbGV0IGNvbnRyb2xMYWJlbCA9IGZpZWxkLmZpZWxkO1xuICAgICAgbGV0IGNvbnRyb2xzO1xuXG4gICAgICBpZiAoZmllbGQuaW5wdXQgPT09IFwiYXJyYXlcIikge1xuICAgICAgICBjb250cm9scyA9IG5ldyBGb3JtQXJyYXkoW10pXG4gICAgICAgIGZpZWxkLnZhbHVlLmZvckVhY2gobGV2ZWwgPT4ge1xuICAgICAgICAgIGNvbnRyb2xzLnB1c2godGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgW2NvbnRyb2xMYWJlbF06IFtsZXZlbCA/IGxldmVsIDogJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0pXG5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb250cm9scyA9IG5ldyBGb3JtQ29udHJvbChmaWVsZC52YWx1ZSA/IGZpZWxkLnZhbHVlIDogXCJcIiwgZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZCA/IFZhbGlkYXRvcnMucmVxdWlyZWQgOiBudWxsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLm9iamVjdEZvcm0uYWRkQ29udHJvbChmaWVsZC5maWVsZCwgY29udHJvbHMpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLm9iamVjdEZvcm07XG4gIH1cblxuICB1cGxvYWRGaWxlKG9iamVjdCl7XG4gICAgdGhpcy5vYmplY3RGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe30pO1xuICAgIG9iamVjdC5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGxldCBjb250cm9sTGFiZWwgPSBmaWVsZC5maWVsZDtcbiAgICAgIGxldCBjb250cm9scztcblxuICAgICAgaWYgKGZpZWxkLmlucHV0ID09PSBcImZpbGVcIikge1xuXG4gICAgICAgXG4gICAgICAgIGNvbnRyb2xzID0gbmV3IEZvcm1Db250cm9sKGZpZWxkLnZhbHVlID8gZmllbGQudmFsdWUgOiBudWxsLCBbZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZCA/IFZhbGlkYXRvcnMucmVxdWlyZWQgOiBudWxsXVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5vYmplY3RGb3JtLmFkZENvbnRyb2woZmllbGQuZmllbGQsIGNvbnRyb2xzKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm9iamVjdEZvcm0pXG4gICAgcmV0dXJuIHRoaXMub2JqZWN0Rm9ybTtcblxuICB9XG5cbn1cbi8vIGV4cG9ydCBmdW5jdGlvbiByZXF1aXJlZEZpbGVUeXBlKCB0eXBlczogU3RyaW5nW10gKSB7XG4vLyAgIHJldHVybiBmdW5jdGlvbiAoY29udHJvbDogRm9ybUNvbnRyb2wpIHtcbi8vICAgICB0eXBlcy5mb3JFYWNoKCB0eXBlID0+IHtcblxuLy8gICAgIGNvbnN0IGZpbGUgPSBjb250cm9sLnZhbHVlO1xuXG4vLyAgICAgaWYgKCBmaWxlICkge1xuICAgICAgXG4vLyAgICAgICBsZXQgZXh0ZW5zaW9uID0gZmlsZS5sYXN0SW5kZXhPZihcIi5cIik7XG4vLyAgICAgICBleHRlbnNpb24gPSBmaWxlLnN1YnN0cmluZyhleHRlbnNpb24rMSkudG9Mb3dlckNhc2UoKTtcblxuLy8gICAgICAgaWYgKCB0eXBlLnRvTG93ZXJDYXNlKCkgPT09IGV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpICkge1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgIHJlcXVpcmVkRmlsZVR5cGU6IHRydWVcbi8vICAgICAgICAgfTtcbi8vICAgICAgIH1cbiAgICAgIFxuLy8gICAgICAgLy8gcmV0dXJuIG51bGw7XG4vLyAgICAgfVxuLy8gICB9KVxuXG5cbi8vICAgICByZXR1cm4gbnVsbDtcbi8vICAgfTtcbi8vIH1cbiJdfQ==