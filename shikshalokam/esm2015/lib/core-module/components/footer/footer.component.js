/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class FooterComponent {
    constructor() {
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
    ngOnInit() {
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-footer',
                template: "<div class=\"footer\">\n    <ul class=\"list\">\n      <li *ngFor=\"let link of footerLink; let last=last\">\n          <a class=\"footerName\">{{link.name}}\n          <span *ngIf=\"!last\" class=\"pipe\">|</span>\n          </a>\n      </li>\n    </ul>\n</div>",
                styles: [".footer{height:30px;background-color:var(--white-color);width:100%;line-height:30px}.footer .list{list-style:none;margin:0;padding:0;display:flex;justify-content:center;border-top:1px solid var(--light-grey-color)}.footer .list li{display:inline-block;margin:5px;cursor:pointer}.footer .list li .pipe{padding-left:5px}.footerName{font-size:12px;color:var(--primary-color)}"]
            }] }
];
/** @nocollapse */
FooterComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    FooterComponent.prototype.footerLink;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLW1vZHVsZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBT2xELE1BQU0sT0FBTyxlQUFlO0lBRTFCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRTtZQUNmO2dCQUNFLElBQUksRUFBRSw4QkFBOEI7YUFDckM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsa0JBQWtCO2FBQ3pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjthQUN2QjtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2FBQ25CO1NBQ0gsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsa1JBQXNDOzthQUV2Qzs7Ozs7O0lBRUMscUNBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvb3Rlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvb3RlckxpbmtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mb290ZXJMaW5rID1bXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiQ29weXJpZ2h0IEAyMDE5IFNoaWtzaGFsb2thbVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlRlcm1zIG9mIFNlcnZpY2VcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQcml2YWN5IFBvbGljeVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkNvbnRhY3QgVXNcIlxuICAgICAgfVxuICAgXTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn0iXX0=