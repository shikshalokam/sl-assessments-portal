/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var TranslateService = /** @class */ (function () {
    function TranslateService(http) {
        this.http = http;
        this.language = {};
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.use = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var langPath = "assets/i18n/" + (lang || 'en') + ".json";
            // const langPath = `assets/i18n/od.json`;
            _this.http.get(langPath).subscribe((/**
             * @param {?} translation
             * @return {?}
             */
            function (translation) {
                _this.language = Object.assign({}, translation || {});
                resolve(_this.language);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.language = {};
                resolve(_this.language);
            }));
        }));
    };
    TranslateService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TranslateService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return TranslateService;
}());
export { TranslateService };
if (false) {
    /** @type {?} */
    TranslateService.prototype.language;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvc2VydmljZXMvdHJhbnNsYXRlLXNlcnZpY2UvdHJhbnNsYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxEO0lBS0UsMEJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsYUFBUSxHQUFRLEVBQUUsQ0FBQztJQUVxQixDQUFDOzs7OztJQUV6Qyw4QkFBRzs7OztJQUFILFVBQUksSUFBWTtRQUFoQixpQkFnQkM7UUFmQyxPQUFPLElBQUksT0FBTzs7Ozs7UUFBSyxVQUFDLE9BQU8sRUFBRSxNQUFNOztnQkFDL0IsUUFBUSxHQUFHLGtCQUFlLElBQUksSUFBSSxJQUFJLFdBQU87WUFDbkQsMENBQTBDO1lBRTFDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFLLFFBQVEsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFDbkMsVUFBQSxXQUFXO2dCQUNULEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pCLENBQUM7Ozs7WUFDRCxVQUFBLEtBQUs7Z0JBQ0gsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekIsQ0FBQyxFQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXZCRixVQUFVOzs7O2dCQUZGLFVBQVU7O0lBMEJuQix1QkFBQztDQUFBLEFBeEJELElBd0JDO1NBdkJZLGdCQUFnQjs7O0lBRTNCLG9DQUFtQjs7Ozs7SUFFUCxnQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XG5cbiAgbGFuZ3VhZ2U6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgdXNlKGxhbmc6IHN0cmluZyk6IFByb21pc2U8e30+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8e30+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGxhbmdQYXRoID0gYGFzc2V0cy9pMThuLyR7bGFuZyB8fCAnZW4nfS5qc29uYDtcbiAgICAgIC8vIGNvbnN0IGxhbmdQYXRoID0gYGFzc2V0cy9pMThuL29kLmpzb25gO1xuXG4gICAgICB0aGlzLmh0dHAuZ2V0PHt9PihsYW5nUGF0aCkuc3Vic2NyaWJlKFxuICAgICAgICB0cmFuc2xhdGlvbiA9PiB7XG4gICAgICAgICAgdGhpcy5sYW5ndWFnZSA9IE9iamVjdC5hc3NpZ24oe30sIHRyYW5zbGF0aW9uIHx8IHt9KTtcbiAgICAgICAgICByZXNvbHZlKHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5sYW5ndWFnZSA9IHt9O1xuICAgICAgICAgIHJlc29sdmUodGhpcy5sYW5ndWFnZSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==