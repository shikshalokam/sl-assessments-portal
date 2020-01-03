/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class TranslateService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.language = {};
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const langPath = `assets/i18n/${lang || 'en'}.json`;
            // const langPath = `assets/i18n/od.json`;
            this.http.get(langPath).subscribe((/**
             * @param {?} translation
             * @return {?}
             */
            translation => {
                this.language = Object.assign({}, translation || {});
                resolve(this.language);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                this.language = {};
                resolve(this.language);
            }));
        }));
    }
}
TranslateService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TranslateService.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /** @type {?} */
    TranslateService.prototype.language;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvc2VydmljZXMvdHJhbnNsYXRlLXNlcnZpY2UvdHJhbnNsYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2xELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFJM0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxhQUFRLEdBQVEsRUFBRSxDQUFDO0lBRXFCLENBQUM7Ozs7O0lBRXpDLEdBQUcsQ0FBQyxJQUFZO1FBQ2QsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O2tCQUNuQyxRQUFRLEdBQUcsZUFBZSxJQUFJLElBQUksSUFBSSxPQUFPO1lBQ25ELDBDQUEwQztZQUUxQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSyxRQUFRLENBQUMsQ0FBQyxTQUFTOzs7O1lBQ25DLFdBQVcsQ0FBQyxFQUFFO2dCQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pCLENBQUM7Ozs7WUFDRCxLQUFLLENBQUMsRUFBRTtnQkFDTixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdkJGLFVBQVU7Ozs7WUFGRixVQUFVOzs7O0lBS2pCLG9DQUFtQjs7Ozs7SUFFUCxnQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XG5cbiAgbGFuZ3VhZ2U6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgdXNlKGxhbmc6IHN0cmluZyk6IFByb21pc2U8e30+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8e30+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGxhbmdQYXRoID0gYGFzc2V0cy9pMThuLyR7bGFuZyB8fCAnZW4nfS5qc29uYDtcbiAgICAgIC8vIGNvbnN0IGxhbmdQYXRoID0gYGFzc2V0cy9pMThuL29kLmpzb25gO1xuXG4gICAgICB0aGlzLmh0dHAuZ2V0PHt9PihsYW5nUGF0aCkuc3Vic2NyaWJlKFxuICAgICAgICB0cmFuc2xhdGlvbiA9PiB7XG4gICAgICAgICAgdGhpcy5sYW5ndWFnZSA9IE9iamVjdC5hc3NpZ24oe30sIHRyYW5zbGF0aW9uIHx8IHt9KTtcbiAgICAgICAgICByZXNvbHZlKHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5sYW5ndWFnZSA9IHt9O1xuICAgICAgICAgIHJlc29sdmUodGhpcy5sYW5ndWFnZSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==