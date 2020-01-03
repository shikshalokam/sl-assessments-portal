/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var MinCharacterPipe = /** @class */ (function () {
    function MinCharacterPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} length
     * @return {?}
     */
    MinCharacterPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} length
     * @return {?}
     */
    function (value, length) {
        value = value.trim();
        if (value.length <= length || value == "") {
            return value;
        }
        else {
            value = value.substring(0, length - 3) + '...';
            return value;
        }
    };
    MinCharacterPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'minchar',
                    pure: false
                },] }
    ];
    /** @nocollapse */
    MinCharacterPipe.ctorParameters = function () { return []; };
    return MinCharacterPipe;
}());
export { MinCharacterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLWNoYXJhY3Rlci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL2NvcmUtbW9kdWxlL3BpcGVzL21pbi1jaGFyYWN0ZXItcGlwZS9taW4tY2hhcmFjdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBS0U7SUFBZSxDQUFDOzs7Ozs7SUFDaEIsb0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFVLEVBQUcsTUFBTztRQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxNQUFNLElBQUssS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUMxQyxPQUFPLEtBQUssQ0FBQztTQUNkO2FBQ0c7WUFDRixLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQztZQUMxQyxPQUFPLEtBQUssQ0FBQztTQUNkO0lBR0gsQ0FBQzs7Z0JBakJKLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsU0FBUztvQkFDZixJQUFJLEVBQUUsS0FBSztpQkFDWjs7OztJQWVDLHVCQUFDO0NBQUEsQUFsQkgsSUFrQkc7U0FkVSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ21pbmNoYXInLFxuICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBNaW5DaGFyYWN0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnkgLCBsZW5ndGg/KTogYW55IHtcbiAgICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBsZW5ndGggIHx8IHZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCxsZW5ndGgtMykrJy4uLic7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIFxuICBcbiAgICB9XG4gIH1cblxuIl19