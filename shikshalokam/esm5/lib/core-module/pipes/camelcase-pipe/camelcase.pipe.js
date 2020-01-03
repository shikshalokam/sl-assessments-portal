/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var CamelCasePipe = /** @class */ (function () {
    function CamelCasePipe() {
    }
    /**
     * @param {?} camelCase
     * @return {?}
     */
    CamelCasePipe.prototype.transform = /**
     * @param {?} camelCase
     * @return {?}
     */
    function (camelCase) {
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
    };
    CamelCasePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'camelcase',
                    pure: false
                },] }
    ];
    /** @nocollapse */
    CamelCasePipe.ctorParameters = function () { return []; };
    return CamelCasePipe;
}());
export { CamelCasePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZWxjYXNlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvcGlwZXMvY2FtZWxjYXNlLXBpcGUvY2FtZWxjYXNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBS0U7SUFBZSxDQUFDOzs7OztJQUNoQixpQ0FBUzs7OztJQUFULFVBQVUsU0FBYztRQUVwQixJQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLEVBQUUsRUFBRTtZQUN4QyxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUVELFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBQ3pCLE9BQU8sR0FBRyxFQUFFO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7bUJBQ3ZCLENBQUMsSUFBSSxDQUFDO21CQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLElBQUksR0FBRyxDQUFDO2FBQ2hCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3hDO2dCQUNFLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QjtTQUNGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Z0JBN0JKLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsV0FBVztvQkFDakIsSUFBSSxFQUFFLEtBQUs7aUJBQ1o7Ozs7SUEyQkMsb0JBQUM7Q0FBQSxBQTlCSCxJQThCRztTQTFCVSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjYW1lbGNhc2UnLFxuICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBDYW1lbENhc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgdHJhbnNmb3JtKGNhbWVsQ2FzZTogYW55KTogYW55IHtcbiAgIFxuICAgICAgaWYgKGNhbWVsQ2FzZSA9PSBudWxsIHx8IGNhbWVsQ2FzZSA9PSBcIlwiKSB7XG4gICAgICAgIHJldHVybiBjYW1lbENhc2U7XG4gICAgICB9XG4gIFxuICAgICAgY2FtZWxDYXNlID0gY2FtZWxDYXNlLnRyaW0oKTtcbiAgICAgIHZhciBuZXdUZXh0ID0gXCJcIjtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FtZWxDYXNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICgvW0EtWl0vLnRlc3QoY2FtZWxDYXNlW2ldKVxuICAgICAgICAgICAgJiYgaSAhPSAwXG4gICAgICAgICAgICAmJiAvW2Etel0vLnRlc3QoY2FtZWxDYXNlW2ktMV0pKSB7XG4gICAgICAgICAgbmV3VGV4dCArPSBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PSAwICYmIC9bYS16XS8udGVzdChjYW1lbENhc2VbaV0pKVxuICAgICAgICB7XG4gICAgICAgICAgbmV3VGV4dCArPSBjYW1lbENhc2VbaV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdUZXh0ICs9IGNhbWVsQ2FzZVtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIHJldHVybiBuZXdUZXh0O1xuICAgIH1cbiAgfVxuXG4iXX0=