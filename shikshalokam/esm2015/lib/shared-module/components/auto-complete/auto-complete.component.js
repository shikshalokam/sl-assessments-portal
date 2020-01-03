/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../../core-module/services/api-service/api.service';
import { ActivatedRoute } from '@angular/router';
export class AutoCompeteComponent {
    /**
     * @param {?} apiService
     * @param {?} route
     */
    constructor(apiService, route) {
        this.apiService = apiService;
        this.route = route;
        this.id = "";
        this.route.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            this.solutionId = params['solutionId'];
            //console.log(this.solutionId)
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getAutoComplete(url) {
        this.apiService.get(this.hostUrl + this.genericData.url + this.solutionId + "?id=" + url).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.autoCompleteData = data['result'];
            console.log(this.hostUrl);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            //console.log(error.message);
            this.autoCompleteData = [];
            console.log(this.hostUrl);
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    inputChange(event) {
        this.id = event.target.value;
        //console.log(event)
    }
    /**
     * @param {?} event
     * @return {?}
     */
    searchEntityIdInApi(event) {
        this.getAutoComplete(event);
        //console.log(event)
    }
}
AutoCompeteComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-auto-complete',
                template: "<div [formGroup]= \"genericForm\" *ngIf=\"genericForm\">\n    <mat-form-field  class=\"col-sm-6 fixSize _halfWidth\">\n            <input  matInput   type=\"text\" \n            placeholder=\"{{genericData.label | camelcase}} \"  formControlName=\"{{genericData.field}}\" \n            (keyup)=\"inputChange($event)\"\n            [matAutocomplete]=\"auto\" appDebounceSearch (debounceSearch)=\"searchEntityIdInApi($event)\"\n            [debounceTime]=\"200\" [searchValue]=\"id\"\n             [required]=\"genericData.validation.required\"\n             >\n\n            <mat-autocomplete  #auto=\"matAutocomplete\" >\n                <mat-option *ngFor=\"let option of autoCompleteData \" [value]=\"option.externalId\" matTooltip=\"{{option.name}}\">\n                                {{option.externalId}}-{{option.name}}\n                </mat-option>\n            </mat-autocomplete>\n    </mat-form-field>\n</div>\n\n\n",
                styles: [".bold{font-size:15px;font-weight:550}.right{text-align:right}.fixSize{height:54.6px}"]
            }] }
];
/** @nocollapse */
AutoCompeteComponent.ctorParameters = () => [
    { type: ApiService },
    { type: ActivatedRoute }
];
AutoCompeteComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }],
    hostUrl: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AutoCompeteComponent.prototype.genericData;
    /** @type {?} */
    AutoCompeteComponent.prototype.genericForm;
    /** @type {?} */
    AutoCompeteComponent.prototype.genericEdit;
    /** @type {?} */
    AutoCompeteComponent.prototype.hostUrl;
    /** @type {?} */
    AutoCompeteComponent.prototype.autoCompleteData;
    /** @type {?} */
    AutoCompeteComponent.prototype.id;
    /** @type {?} */
    AutoCompeteComponent.prototype.solutionId;
    /**
     * @type {?}
     * @private
     */
    AutoCompeteComponent.prototype.apiService;
    /**
     * @type {?}
     * @private
     */
    AutoCompeteComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL2F1dG8tY29tcGxldGUvYXV0by1jb21wbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbkYsT0FBTyxFQUFTLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3hELE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBUS9CLFlBQ1UsVUFBc0IsRUFDdEIsS0FBcUI7UUFEckIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUovQixPQUFFLEdBQUMsRUFBRSxDQUFDO1FBTUosSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ3RDLDhCQUE4QjtRQUNoQyxDQUFDLEVBQUMsQ0FBQTtJQUNILENBQUM7Ozs7SUFFRixRQUFRO0lBRVIsQ0FBQzs7Ozs7SUFDRCxlQUFlLENBQUMsR0FBRztRQUVqQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxVQUFVLEdBQUMsTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNqRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUM7Ozs7UUFDRCxLQUFLLENBQUMsRUFBRTtZQUNOLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFDQSxXQUFXLENBQUMsS0FBSztRQUNoQixJQUFJLENBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzNCLG9CQUFvQjtJQUN0QixDQUFDOzs7OztJQUNELG1CQUFtQixDQUFDLEtBQUs7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixvQkFBb0I7SUFDdEIsQ0FBQzs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QiwwNkJBQTZDOzthQUU5Qzs7OztZQVBRLFVBQVU7WUFDSCxjQUFjOzs7MEJBUTNCLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7Ozs7SUFITiwyQ0FBb0I7O0lBQ3BCLDJDQUE4Qjs7SUFDOUIsMkNBQTRCOztJQUM1Qix1Q0FBZ0I7O0lBQ2hCLGdEQUFpQjs7SUFDakIsa0NBQU07O0lBQ04sMENBQVc7Ozs7O0lBRVQsMENBQThCOzs7OztJQUM5QixxQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS1tb2R1bGUvc2VydmljZXMvYXBpLXNlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGUsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWF1dG8tY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0by1jb21wbGV0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dG8tY29tcGxldGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpZ2VuZXJpY0RhdGE7XG4gIEBJbnB1dCgpZ2VuZXJpY0Zvcm06Rm9ybUdyb3VwO1xuICBASW5wdXQoKWdlbmVyaWNFZGl0OmJvb2xlYW47XG4gIEBJbnB1dCgpaG9zdFVybDtcbiAgYXV0b0NvbXBsZXRlRGF0YTtcbiAgaWQ9XCJcIjtcbiAgc29sdXRpb25JZDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcGlTZXJ2aWNlIDpBcGlTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGUgOkFjdGl2YXRlZFJvdXRlXG4gICkge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLnNvbHV0aW9uSWQgPSBwYXJhbXNbJ3NvbHV0aW9uSWQnXVxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnNvbHV0aW9uSWQpXG4gICAgfSlcbiAgIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG4gIGdldEF1dG9Db21wbGV0ZSh1cmwpe1xuICAgXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldCh0aGlzLmhvc3RVcmwrdGhpcy5nZW5lcmljRGF0YS51cmwrdGhpcy5zb2x1dGlvbklkK1wiP2lkPVwiK3VybCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5hdXRvQ29tcGxldGVEYXRhID0gZGF0YVsncmVzdWx0J107XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmhvc3RVcmwpO1xuICAgIH0sXG4gICAgZXJyb3IgPT57XG4gICAgICAvL2NvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgdGhpcy5hdXRvQ29tcGxldGVEYXRhID0gW107XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmhvc3RVcmwpO1xuXG4gICAgfSk7XG4gIH1cbiAgIGlucHV0Q2hhbmdlKGV2ZW50KXtcbiAgICB0aGlzLmlkPWV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAvL2NvbnNvbGUubG9nKGV2ZW50KVxuICB9XG4gIHNlYXJjaEVudGl0eUlkSW5BcGkoZXZlbnQpe1xuICAgIHRoaXMuZ2V0QXV0b0NvbXBsZXRlKGV2ZW50KTtcbiAgICAvL2NvbnNvbGUubG9nKGV2ZW50KVxuICB9XG4gIFxuXG59XG4iXX0=