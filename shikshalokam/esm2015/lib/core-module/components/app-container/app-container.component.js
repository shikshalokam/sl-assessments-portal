/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class AppContainerComponent {
    constructor() {
        this.showDropdown = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.apps = [
            // {    
            //   icon:" assignment_turned_in",
            //   tooltip:"Assessments",
            //   url:this.url
            // },
            {
                icon: "school",
                tooltip: "Learning",
                url: this.url + "/assessments/learning"
            },
            {
                icon: "dashboard",
                tooltip: "Programs",
                url: this.url + "/programs"
            },
        ];
    }
    /**
     * @return {?}
     */
    openDropdown() {
        this.showDropdown = !this.showDropdown;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    navigate(url) {
        window.open(url, "_blank");
    }
}
AppContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "app-container",
                template: "<div class=\"dropdownDiv\">\n  <div class=\"insideDiv\">\n      <ul class=\"dropdownFeature\">\n          <li class=\"verticalCenteralign\" *ngFor=\"let app of apps\">\n            <a (click)=\"navigate(app.url)\" class=\"appName\">\n              <div class=\"apple\">\n                <i class=\"material-icons\" id=\"whiteIcon\">\n                  {{app.icon}}\n                </i>\n              </div>\n              <div class=\"title\" matTooltip={{app.tooltip}}>\n              <div [ngClass]=\"{'active':app.tooltip==portal, 'inactive':app.tooltip!==portal}\">\n                {{app.tooltip}}\n              </div>\n            </div>\n            </a>\n          </li>\n        </ul>\n  </div>\n</div>\n\n",
                styles: [".dropdownDiv{color:var(--app-black-color);background-color:var(--white-color);position:absolute;width:500px;height:350px;right:8px;top:35px;z-index:105;border-radius:2px;box-shadow:0 0 3px 3px rgba(0,0,0,.08);margin:20px;padding:20px 0}.insideDiv{width:500px;height:310px;overflow-y:auto;overflow-x:hidden}.dropdownDiv:before{content:\"\";position:absolute;top:-27px;right:60px;border:13px solid transparent;border-bottom:13px solid rgba(0,0,0,.08)}.dropdownDiv:after{content:\"\";position:absolute;top:-24px;right:60px;border:12px solid transparent;border-bottom:12px solid var(--white-color)}#overlay{position:fixed;display:hidden;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:transparent;z-index:101}.dropdownFeature{display:flex;justify-content:left;flex-wrap:wrap;width:483px;list-style:none}.verticalCenteralign{display:inline-block;flex-direction:column;align-items:center;cursor:pointer;padding:0 30px 20px}.verticalCenteralign .appName{text-decoration:none}.apple{background:linear-gradient(to bottom,var(--app-blue-color) 10%,var(--app-darkBlue-color) 90%);height:80px;width:80px;border:1px solid var(--primary-color);border-radius:15px;padding:10px;display:flex;align-items:center;justify-content:center}#whiteIcon{color:var(--white-color);font-size:45px;line-height:1}.active{margin-top:10px;border-radius:12px;border:1px solid var(--primary-color);padding:0 8px;font-size:11px;width:100%;text-align:center;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;color:var(--app-blue-color)}.inactive{color:var(--darkBlack-color);text-align:center;padding-top:10px;font-size:12px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.title{height:20px;line-height:20px;width:80px}"]
            }] }
];
/** @nocollapse */
AppContainerComponent.ctorParameters = () => [];
AppContainerComponent.propDecorators = {
    url: [{ type: Input }],
    portal: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AppContainerComponent.prototype.showDropdown;
    /** @type {?} */
    AppContainerComponent.prototype.url;
    /** @type {?} */
    AppContainerComponent.prototype.portal;
    /** @type {?} */
    AppContainerComponent.prototype.apps;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvY29tcG9uZW50cy9hcHAtY29udGFpbmVyL2FwcC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF6RCxNQUFNLE9BQU8scUJBQXFCO0lBTWhDO1FBTEEsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFPckIsQ0FBQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsUUFBUTtZQUNSLGtDQUFrQztZQUNsQywyQkFBMkI7WUFDM0IsaUJBQWlCO1lBQ2pCLEtBQUs7WUFDTDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsVUFBVTtnQkFDbkIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsdUJBQXVCO2FBQ3hDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXO2FBQzVCO1NBS0YsQ0FBQTtJQUNILENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBRztRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDB0QkFBNkM7O2FBRTlDOzs7OztrQkFJRSxLQUFLO3FCQUNMLEtBQUs7Ozs7SUFGTiw2Q0FBcUI7O0lBQ3JCLG9DQUFhOztJQUNiLHVDQUFnQjs7SUFDaEIscUNBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWNvbnRhaW5lclwiLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNob3dEcm9wZG93biA9IGZhbHNlO1xuICBASW5wdXQoKSB1cmw7XG4gIEBJbnB1dCgpIHBvcnRhbDtcbiAgYXBwcztcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBwcyA9IFtcbiAgICAgIC8vIHsgICAgXG4gICAgICAvLyAgIGljb246XCIgYXNzaWdubWVudF90dXJuZWRfaW5cIixcbiAgICAgIC8vICAgdG9vbHRpcDpcIkFzc2Vzc21lbnRzXCIsXG4gICAgICAvLyAgIHVybDp0aGlzLnVybFxuICAgICAgLy8gfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJzY2hvb2xcIixcbiAgICAgICAgdG9vbHRpcDogXCJMZWFybmluZ1wiLFxuICAgICAgICB1cmw6IHRoaXMudXJsICsgXCIvYXNzZXNzbWVudHMvbGVhcm5pbmdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJkYXNoYm9hcmRcIixcbiAgICAgICAgdG9vbHRpcDogXCJQcm9ncmFtc1wiLFxuICAgICAgICB1cmw6IHRoaXMudXJsICsgXCIvcHJvZ3JhbXNcIlxuICAgICAgfSxcbiAgICAgIC8vIHsgICAgXG4gICAgICAvLyAgIGljb246XCJ3b3JrX291dGxpbmVcIixcbiAgICAgIC8vICAgdG9vbHRpcDpcIldvcmtzaG9wXCIsXG4gICAgICAvLyB9XG4gICAgXVxuICB9XG5cbiAgb3BlbkRyb3Bkb3duKCkge1xuICAgIHRoaXMuc2hvd0Ryb3Bkb3duID0gIXRoaXMuc2hvd0Ryb3Bkb3duO1xuICB9XG5cbiAgbmF2aWdhdGUodXJsKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCBcIl9ibGFua1wiKTtcbiAgfVxuXG5cbn1cblxuXG4iXX0=