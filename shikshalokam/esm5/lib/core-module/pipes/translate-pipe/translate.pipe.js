/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { TranslateService } from '../../services/translate-service/translate.service';
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translate) {
        this.translate = translate;
        this.resarray = '';
        this.obj = {};
    }
    /**
     * @param {?} key
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
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
            function (element) {
                if (_this.resarray) {
                    _this.resarray = _this.resarray[element];
                }
            }));
            return this.resarray || key;
        }
    };
    TranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'translate',
                    pure: false
                },] }
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
    return TranslatePipe;
}());
export { TranslatePipe };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvcGlwZXMvdHJhbnNsYXRlLXBpcGUvdHJhbnNsYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXRGO0lBT0UsdUJBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBRi9DLGFBQVEsR0FBQyxFQUFFLENBQUM7UUFDWixRQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ3lDLENBQUM7Ozs7O0lBQ25ELGlDQUFTOzs7O0lBQVQsVUFBVSxHQUFRO1FBQWxCLGlCQWVDO1FBZEMsSUFBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMxQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7U0FDL0M7YUFDRzs7Z0JBQ0ksS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBRTtZQUM1QyxLQUFLLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsT0FBTztnQkFDbkIsSUFBRyxLQUFJLENBQUMsUUFBUSxFQUFDO29CQUNmLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDeEM7WUFDSCxDQUFDLEVBQUMsQ0FBQztZQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUM7U0FDN0I7SUFDSCxDQUFDOztnQkF2QkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxXQUFXO29CQUNqQixJQUFJLEVBQUUsS0FBSztpQkFDWjs7OztnQkFMUSxnQkFBZ0I7O0lBMEJ6QixvQkFBQztDQUFBLEFBeEJELElBd0JDO1NBcEJZLGFBQWE7OztJQUN4QixpQ0FBWTs7SUFDWiw0QkFBUzs7Ozs7SUFDRyxrQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdHJhbnNsYXRlLXNlcnZpY2UvdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0cmFuc2xhdGUnLFxuICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHJlc2FycmF5PScnO1xuICBvYmogPSB7fTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG4gIHRyYW5zZm9ybShrZXk6IGFueSk6IGFueSB7XG4gICAgaWYoa2V5LmluZGV4T2YoJy4nKSA9PT0gLTEpXG4gICAge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlWydsYW5ndWFnZSddW2tleV0gfHwga2V5O1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICB2YXIgYXJyYXkgPSBrZXkuc3BsaXQoXCIuXCIpO1xuICAgICAgICB0aGlzLnJlc2FycmF5ID0gdGhpcy50cmFuc2xhdGVbJ2xhbmd1YWdlJ10gO1xuICAgICAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGlmKHRoaXMucmVzYXJyYXkpe1xuICAgICAgICAgICAgdGhpcy5yZXNhcnJheSA9IHRoaXMucmVzYXJyYXlbZWxlbWVudF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLnJlc2FycmF5IHx8IGtleTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==