/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.footerLink = [
            {
                name: "Copyright @2019 Shikshalokam"
            },
            {
                name: "Terms of Service"
            },
            {
                name: "Privacy Policy"
            },
            {
                name: "Contact Us"
            }
        ];
    }
    /**
     * @return {?}
     */
    FooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-footer',
                    template: "<div class=\"footer\">\n    <ul class=\"list\">\n      <li *ngFor=\"let link of footerLink; let last=last\">\n          <a class=\"footerName\">{{link.name}}\n          <span *ngIf=\"!last\" class=\"pipe\">|</span>\n          </a>\n      </li>\n    </ul>\n</div>",
                    styles: [".footer{height:30px;background-color:var(--white-color);width:100%;line-height:30px}.footer .list{list-style:none;margin:0;padding:0;display:flex;justify-content:center;border-top:1px solid var(--light-grey-color)}.footer .list li{display:inline-block;margin:5px;cursor:pointer}.footer .list li .pipe{padding-left:5px}.footerName{font-size:12px;color:var(--primary-color)}"]
                }] }
    ];
    /** @nocollapse */
    FooterComponent.ctorParameters = function () { return []; };
    return FooterComponent;
}());
export { FooterComponent };
if (false) {
    /** @type {?} */
    FooterComponent.prototype.footerLink;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLW1vZHVsZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxEO0lBT0U7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFFO1lBQ2Y7Z0JBQ0UsSUFBSSxFQUFFLDhCQUE4QjthQUNyQztZQUNEO2dCQUNFLElBQUksRUFBRSxrQkFBa0I7YUFDekI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7YUFDbkI7U0FDSCxDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLGtSQUFzQzs7aUJBRXZDOzs7O0lBdUJELHNCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0F0QlksZUFBZTs7O0lBQzFCLHFDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb290ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb290ZXJMaW5rXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZm9vdGVyTGluayA9W1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIkNvcHlyaWdodCBAMjAxOSBTaGlrc2hhbG9rYW1cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJUZXJtcyBvZiBTZXJ2aWNlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUHJpdmFjeSBQb2xpY3lcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJDb250YWN0IFVzXCJcbiAgICAgIH1cbiAgIF07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59Il19