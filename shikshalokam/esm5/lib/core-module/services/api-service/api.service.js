/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    ApiService.prototype.get = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.http.get(url);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    ApiService.prototype.getJSON = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.http.get(url);
    };
    /**
     * @param {?} url
     * @param {?} updateData
     * @return {?}
     */
    ApiService.prototype.post = /**
     * @param {?} url
     * @param {?} updateData
     * @return {?}
     */
    function (url, updateData) {
        return this.http.post(url, updateData);
    };
    /**
     * @param {?} url
     * @param {?} file
     * @param {?} name
     * @return {?}
     */
    ApiService.prototype.upload = /**
     * @param {?} url
     * @param {?} file
     * @param {?} name
     * @return {?}
     */
    function (url, file, name) {
        /** @type {?} */
        var formData = new FormData();
        if (file) {
            Array.from(file).forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) {
                formData.append(name, f);
            }));
        }
        //console.log(formData)
        return this.http.post(url, formData, { reportProgress: true, observe: 'events' });
    };
    ApiService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return ApiService;
}());
export { ApiService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvc2VydmljZXMvYXBpLXNlcnZpY2UvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxEO0lBR0Usb0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDOzs7OztJQUV6Qyx3QkFBRzs7OztJQUFILFVBQUksR0FBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFDRCw0QkFBTzs7OztJQUFQLFVBQVEsR0FBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRTdCLENBQUM7Ozs7OztJQUNELHlCQUFJOzs7OztJQUFKLFVBQUssR0FBVSxFQUFDLFVBQWM7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUcsVUFBVSxDQUFDLENBQUE7SUFDekMsQ0FBQzs7Ozs7OztJQUNELDJCQUFNOzs7Ozs7SUFBTixVQUFPLEdBQVcsRUFBRSxJQUFTLEVBQUcsSUFBWTs7WUFDcEMsUUFBUSxHQUFhLElBQUksUUFBUSxFQUFFO1FBQ3pDLElBQUksSUFBSSxFQUFFO1lBQ1IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxDQUFDO2dCQUNwQixRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQTtZQUN6QixDQUFDLEVBQUMsQ0FBQTtTQUNQO1FBQ0QsdUJBQXVCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRyxFQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Z0JBeEJGLFVBQVU7Ozs7Z0JBRkYsVUFBVTs7SUEyQm5CLGlCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F4QlksVUFBVTs7Ozs7O0lBRVQsMEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgZ2V0KHVybCA6IHN0cmluZyl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcbiAgfVxuICBnZXRKU09OKHVybCA6IHN0cmluZyl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoIHVybCk7XG5cbiAgfVxuICBwb3N0KHVybDpzdHJpbmcsdXBkYXRlRGF0YTphbnkpe1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwgLCB1cGRhdGVEYXRhKVxuICB9XG4gIHVwbG9hZCh1cmw6IHN0cmluZywgZmlsZSA6IFtdICwgbmFtZSA6c3RyaW5nKSB7XG4gICAgY29uc3QgZm9ybURhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIEFycmF5LmZyb20oZmlsZSkuZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLGYpXG4gICAgICAgICAgfSlcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhmb3JtRGF0YSlcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBmb3JtRGF0YSAsIHtyZXBvcnRQcm9ncmVzczogdHJ1ZSwgb2JzZXJ2ZTogJ2V2ZW50cyd9KTtcbiAgfVxufVxuIl19