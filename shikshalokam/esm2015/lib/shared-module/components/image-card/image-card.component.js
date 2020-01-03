/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ImageCardComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ImageCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-image-card',
                template: "<span *ngFor=\"let url of imageUrl\">\n  <div class=\"card\">\n    <div class=\"roundedCard\">\n      <img src={{url}} class=\"imageCard\">\n    </div>\n  </div>\n</span>",
                styles: [".roundedCard{display:flex;align-items:center;margin:10px;height:130px;border:2px solid var(--grey-color);border-radius:5px;width:130px;background-color:var(--light-grey-color)}.imageCard{width:126px;height:auto}.card{display:inline-block}"]
            }] }
];
/** @nocollapse */
ImageCardComponent.ctorParameters = () => [];
ImageCardComponent.propDecorators = {
    imageUrl: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ImageCardComponent.prototype.imageUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2ltYWdlLWNhcmQvaW1hZ2UtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyxrQkFBa0I7SUFFN0IsZ0JBQWdCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixzTEFBMEM7O2FBRTNDOzs7Ozt1QkFFRSxLQUFLOzs7O0lBQU4sc0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1pbWFnZS1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS1jYXJkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaW1hZ2VVcmw7IFxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==