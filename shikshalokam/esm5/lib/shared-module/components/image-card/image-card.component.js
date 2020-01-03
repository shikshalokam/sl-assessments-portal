/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ImageCardComponent = /** @class */ (function () {
    function ImageCardComponent() {
    }
    /**
     * @return {?}
     */
    ImageCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ImageCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-image-card',
                    template: "<span *ngFor=\"let url of imageUrl\">\n  <div class=\"card\">\n    <div class=\"roundedCard\">\n      <img src={{url}} class=\"imageCard\">\n    </div>\n  </div>\n</span>",
                    styles: [".roundedCard{display:flex;align-items:center;margin:10px;height:130px;border:2px solid var(--grey-color);border-radius:5px;width:130px;background-color:var(--light-grey-color)}.imageCard{width:126px;height:auto}.card{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    ImageCardComponent.ctorParameters = function () { return []; };
    ImageCardComponent.propDecorators = {
        imageUrl: [{ type: Input }]
    };
    return ImageCardComponent;
}());
export { ImageCardComponent };
if (false) {
    /** @type {?} */
    ImageCardComponent.prototype.imageUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2ltYWdlLWNhcmQvaW1hZ2UtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBT0U7SUFBZ0IsQ0FBQzs7OztJQUVqQixxQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsc0xBQTBDOztpQkFFM0M7Ozs7OzJCQUVFLEtBQUs7O0lBTVIseUJBQUM7Q0FBQSxBQVpELElBWUM7U0FQWSxrQkFBa0I7OztJQUM3QixzQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWltYWdlLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLWNhcmQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpbWFnZVVybDsgXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19