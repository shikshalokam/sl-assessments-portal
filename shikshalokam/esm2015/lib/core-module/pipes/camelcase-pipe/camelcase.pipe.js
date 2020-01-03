/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class CamelCasePipe {
    constructor() { }
    /**
     * @param {?} camelCase
     * @return {?}
     */
    transform(camelCase) {
        if (camelCase == null || camelCase == "") {
            return camelCase;
        }
        camelCase = camelCase.trim();
        /** @type {?} */
        var newText = "";
        for (var i = 0; i < camelCase.length; i++) {
            if (/[A-Z]/.test(camelCase[i])
                && i != 0
                && /[a-z]/.test(camelCase[i - 1])) {
                newText += " ";
            }
            if (i == 0 && /[a-z]/.test(camelCase[i])) {
                newText += camelCase[i].toUpperCase();
            }
            else {
                newText += camelCase[i];
            }
        }
        return newText;
    }
}
CamelCasePipe.decorators = [
    { type: Pipe, args: [{
                name: 'camelcase',
                pure: false
            },] }
];
/** @nocollapse */
CamelCasePipe.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZWxjYXNlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvcGlwZXMvY2FtZWxjYXNlLXBpcGUvY2FtZWxjYXNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBTXBELE1BQU0sT0FBTyxhQUFhO0lBQ3hCLGdCQUFlLENBQUM7Ozs7O0lBQ2hCLFNBQVMsQ0FBQyxTQUFjO1FBRXBCLElBQUksU0FBUyxJQUFJLElBQUksSUFBSSxTQUFTLElBQUksRUFBRSxFQUFFO1lBQ3hDLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBRUQsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFDekIsT0FBTyxHQUFHLEVBQUU7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzttQkFDdkIsQ0FBQyxJQUFJLENBQUM7bUJBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sSUFBSSxHQUFHLENBQUM7YUFDaEI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDeEM7Z0JBQ0UsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN2QztpQkFBTTtnQkFDTCxPQUFPLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pCO1NBQ0Y7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7WUE3QkosSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsS0FBSzthQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjYW1lbGNhc2UnLFxuICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBDYW1lbENhc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgdHJhbnNmb3JtKGNhbWVsQ2FzZTogYW55KTogYW55IHtcbiAgIFxuICAgICAgaWYgKGNhbWVsQ2FzZSA9PSBudWxsIHx8IGNhbWVsQ2FzZSA9PSBcIlwiKSB7XG4gICAgICAgIHJldHVybiBjYW1lbENhc2U7XG4gICAgICB9XG4gIFxuICAgICAgY2FtZWxDYXNlID0gY2FtZWxDYXNlLnRyaW0oKTtcbiAgICAgIHZhciBuZXdUZXh0ID0gXCJcIjtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FtZWxDYXNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICgvW0EtWl0vLnRlc3QoY2FtZWxDYXNlW2ldKVxuICAgICAgICAgICAgJiYgaSAhPSAwXG4gICAgICAgICAgICAmJiAvW2Etel0vLnRlc3QoY2FtZWxDYXNlW2ktMV0pKSB7XG4gICAgICAgICAgbmV3VGV4dCArPSBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PSAwICYmIC9bYS16XS8udGVzdChjYW1lbENhc2VbaV0pKVxuICAgICAgICB7XG4gICAgICAgICAgbmV3VGV4dCArPSBjYW1lbENhc2VbaV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdUZXh0ICs9IGNhbWVsQ2FzZVtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIHJldHVybiBuZXdUZXh0O1xuICAgIH1cbiAgfVxuXG4iXX0=