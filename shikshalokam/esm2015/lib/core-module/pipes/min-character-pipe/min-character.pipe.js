/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class MinCharacterPipe {
    constructor() { }
    /**
     * @param {?} value
     * @param {?=} length
     * @return {?}
     */
    transform(value, length) {
        value = value.trim();
        if (value.length <= length || value == "") {
            return value;
        }
        else {
            value = value.substring(0, length - 3) + '...';
            return value;
        }
    }
}
MinCharacterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'minchar',
                pure: false
            },] }
];
/** @nocollapse */
MinCharacterPipe.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLWNoYXJhY3Rlci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL2NvcmUtbW9kdWxlL3BpcGVzL21pbi1jaGFyYWN0ZXItcGlwZS9taW4tY2hhcmFjdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBTXBELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsZ0JBQWUsQ0FBQzs7Ozs7O0lBQ2hCLFNBQVMsQ0FBQyxLQUFVLEVBQUcsTUFBTztRQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxNQUFNLElBQUssS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUMxQyxPQUFPLEtBQUssQ0FBQztTQUNkO2FBQ0c7WUFDRixLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQztZQUMxQyxPQUFPLEtBQUssQ0FBQztTQUNkO0lBR0gsQ0FBQzs7O1lBakJKLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsS0FBSzthQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdtaW5jaGFyJyxcbiAgcHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTWluQ2hhcmFjdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55ICwgbGVuZ3RoPyk6IGFueSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gbGVuZ3RoICB8fCB2YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsbGVuZ3RoLTMpKycuLi4nO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICBcbiAgXG4gICAgfVxuICB9XG5cbiJdfQ==