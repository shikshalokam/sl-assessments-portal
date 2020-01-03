/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslateService } from '../../services/translate-service/translate.service';
export class TranslatePipe {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
        this.resarray = '';
        this.obj = {};
    }
    /**
     * @param {?} key
     * @return {?}
     */
    transform(key) {
        if (key.indexOf('.') === -1) {
            return this.translate['language'][key] || key;
        }
        else {
            /** @type {?} */
            var array = key.split(".");
            this.resarray = this.translate['language'];
            array.forEach((/**
             * @param {?} element
             * @return {?}
             */
            element => {
                if (this.resarray) {
                    this.resarray = this.resarray[element];
                }
            }));
            return this.resarray || key;
        }
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translate',
                pure: false
            },] }
];
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: TranslateService }
];
if (false) {
    /** @type {?} */
    TranslatePipe.prototype.resarray;
    /** @type {?} */
    TranslatePipe.prototype.obj;
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvcGlwZXMvdHJhbnNsYXRlLXBpcGUvdHJhbnNsYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBTXRGLE1BQU0sT0FBTyxhQUFhOzs7O0lBR3hCLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBRi9DLGFBQVEsR0FBQyxFQUFFLENBQUM7UUFDWixRQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ3lDLENBQUM7Ozs7O0lBQ25ELFNBQVMsQ0FBQyxHQUFRO1FBQ2hCLElBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDO1NBQy9DO2FBQ0c7O2dCQUNJLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUU7WUFDNUMsS0FBSyxDQUFDLE9BQU87Ozs7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDdEIsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDO29CQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDeEM7WUFDSCxDQUFDLEVBQUMsQ0FBQztZQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7WUF2QkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsS0FBSzthQUNaOzs7O1lBTFEsZ0JBQWdCOzs7O0lBT3ZCLGlDQUFZOztJQUNaLDRCQUFTOzs7OztJQUNHLGtDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90cmFuc2xhdGUtc2VydmljZS90cmFuc2xhdGUuc2VydmljZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RyYW5zbGF0ZScsXG4gIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcmVzYXJyYXk9Jyc7XG4gIG9iaiA9IHt9O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge31cbiAgdHJhbnNmb3JtKGtleTogYW55KTogYW55IHtcbiAgICBpZihrZXkuaW5kZXhPZignLicpID09PSAtMSlcbiAgICB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVbJ2xhbmd1YWdlJ11ba2V5XSB8fCBrZXk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHZhciBhcnJheSA9IGtleS5zcGxpdChcIi5cIik7XG4gICAgICAgIHRoaXMucmVzYXJyYXkgPSB0aGlzLnRyYW5zbGF0ZVsnbGFuZ3VhZ2UnXSA7XG4gICAgICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgaWYodGhpcy5yZXNhcnJheSl7XG4gICAgICAgICAgICB0aGlzLnJlc2FycmF5ID0gdGhpcy5yZXNhcnJheVtlbGVtZW50XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMucmVzYXJyYXkgfHwga2V5O1xuICAgIH1cbiAgfVxufVxuIl19