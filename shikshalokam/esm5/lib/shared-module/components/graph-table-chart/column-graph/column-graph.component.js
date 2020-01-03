/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CamelCasePipe } from '../../../../core-module/pipes/camelcase-pipe/camelcase.pipe';
var ColumnGraphComponent = /** @class */ (function () {
    function ColumnGraphComponent() {
        this.graphData = {};
    }
    /**
     * @return {?}
     */
    ColumnGraphComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.createGraphObj();
    };
    /**
     * @return {?}
     */
    ColumnGraphComponent.prototype.createGraphObj = /**
     * @return {?}
     */
    function () {
        this.graphData['chartType'] = this.configs.chartType;
        this.graphData["data"] = this.datas.map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return Object.values(data); }));
        // this.graphData['title'] = this.configs.title;
        this.graphData['data'].forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            //console.log( element);
        }));
        this.graphData['options'] = this.configs.chartOptions;
        //   this.graphData['options'] ['titleTextStyle'] = {
        //     color: "red",    // any HTML string color ('red', '#cc00cc')
        //     "margin": "20",
        //     // fontName: <string>, // i.e. 'Times New Roman'
        //     fontSize: 30, // 12, 18 whatever you want (don't specify px)
        //     "bold": true,    
        //     italic: true   // true of false
        // }
        /** @type {?} */
        var keys = Object.keys(this.datas[0]);
        this.graphData['columnNames'] = keys.map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return new CamelCasePipe().transform(key); }));
        // position: 'top',
        this.graphData['options']["legend"] = { maxLines: 2 };
        if (this.graphData['data'].length > 10) {
            Object.assign(this.graphData['options'].hAxis, { textPosition: 'none' });
        }
    };
    ColumnGraphComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-column-graph',
                    template: "<!-- <google-chart class=\"marginChart\" [options]=\"graphData.chartOptions\" style=\"width : 100%; height: 100%;\"\n  [title]=\"graphData.title\" [data]=\"graphData.data\" [type]=\"graphData.chartType\" [columnNames]=\"graphData.columnNames\">\n</google-chart> -->\n<div *ngIf=\"graphData\">\n  <div class=\"_flex-box _justify-content-center\">\n    <h4>{{configs?.title}}</h4>\n  </div >\n  <div class=\"_flex-box _justify-content-center subTitle\"> {{configs?.subTitle}}</div>\n  <div class=\"_full-width\">\n    <google-chart class=\"marginChart\" style=\"width : 100%; min-height: 500px;\" [options]=\"graphData['options']\"\n      [title]=\"graphData['title']\" [data]=\"graphData['data']\" [type]=\"graphData['chartType']\"\n      [columnNames]=\"graphData['columnNames']\">\n    </google-chart>\n  </div>\n</div>",
                    styles: [".subTitle{color:var(--grey-color)}"]
                }] }
    ];
    /** @nocollapse */
    ColumnGraphComponent.ctorParameters = function () { return []; };
    ColumnGraphComponent.propDecorators = {
        datas: [{ type: Input }],
        configs: [{ type: Input }]
    };
    return ColumnGraphComponent;
}());
export { ColumnGraphComponent };
if (false) {
    /** @type {?} */
    ColumnGraphComponent.prototype.datas;
    /** @type {?} */
    ColumnGraphComponent.prototype.configs;
    /** @type {?} */
    ColumnGraphComponent.prototype.graphData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL2NvbXBvbmVudHMvZ3JhcGgtdGFibGUtY2hhcnQvY29sdW1uLWdyYXBoL2NvbHVtbi1ncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUU1RjtJQVlFO1FBSEEsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUdDLENBQUM7Ozs7SUFFakIsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCw2Q0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFuQixDQUFtQixFQUFDLENBQUM7UUFDckUsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTztZQUNwQyx3QkFBd0I7UUFDMUIsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDOzs7Ozs7Ozs7O1lBU2xELElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQWxDLENBQWtDLEVBQUMsQ0FBQztRQUNwRixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQTtRQUN0RCxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFHLEVBQUMsWUFBWSxFQUFHLE1BQU0sRUFBQyxDQUFDLENBQUM7U0FHeEU7SUFDSCxDQUFDOztnQkEzQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGcwQkFBNEM7O2lCQUU3Qzs7Ozs7d0JBR0UsS0FBSzswQkFDTCxLQUFLOztJQXFDUiwyQkFBQztDQUFBLEFBN0NELElBNkNDO1NBeENZLG9CQUFvQjs7O0lBRS9CLHFDQUFlOztJQUNmLHVDQUFpQjs7SUFDakIseUNBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbWVsQ2FzZVBpcGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlLW1vZHVsZS9waXBlcy9jYW1lbGNhc2UtcGlwZS9jYW1lbGNhc2UucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jb2x1bW4tZ3JhcGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29sdW1uLWdyYXBoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29sdW1uLWdyYXBoLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29sdW1uR3JhcGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGRhdGFzO1xuICBASW5wdXQoKSBjb25maWdzO1xuICBncmFwaERhdGEgPSB7fTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVHcmFwaE9iaigpO1xuICB9XG5cbiAgY3JlYXRlR3JhcGhPYmooKSB7XG4gICAgdGhpcy5ncmFwaERhdGFbJ2NoYXJ0VHlwZSddID0gdGhpcy5jb25maWdzLmNoYXJ0VHlwZTtcbiAgICB0aGlzLmdyYXBoRGF0YVtcImRhdGFcIl0gPSB0aGlzLmRhdGFzLm1hcChkYXRhID0+IE9iamVjdC52YWx1ZXMoZGF0YSkpO1xuICAgIC8vIHRoaXMuZ3JhcGhEYXRhWyd0aXRsZSddID0gdGhpcy5jb25maWdzLnRpdGxlO1xuICAgIHRoaXMuZ3JhcGhEYXRhWydkYXRhJ10uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coIGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuZ3JhcGhEYXRhWydvcHRpb25zJ10gPSB0aGlzLmNvbmZpZ3MuY2hhcnRPcHRpb25zO1xuICAvLyAgIHRoaXMuZ3JhcGhEYXRhWydvcHRpb25zJ10gWyd0aXRsZVRleHRTdHlsZSddID0ge1xuICAvLyAgICAgY29sb3I6IFwicmVkXCIsICAgIC8vIGFueSBIVE1MIHN0cmluZyBjb2xvciAoJ3JlZCcsICcjY2MwMGNjJylcbiAgLy8gICAgIFwibWFyZ2luXCI6IFwiMjBcIixcbiAgLy8gICAgIC8vIGZvbnROYW1lOiA8c3RyaW5nPiwgLy8gaS5lLiAnVGltZXMgTmV3IFJvbWFuJ1xuICAvLyAgICAgZm9udFNpemU6IDMwLCAvLyAxMiwgMTggd2hhdGV2ZXIgeW91IHdhbnQgKGRvbid0IHNwZWNpZnkgcHgpXG4gIC8vICAgICBcImJvbGRcIjogdHJ1ZSwgICAgXG4gIC8vICAgICBpdGFsaWM6IHRydWUgICAvLyB0cnVlIG9mIGZhbHNlXG4gIC8vIH1cbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YXNbMF0pO1xuICAgIHRoaXMuZ3JhcGhEYXRhWydjb2x1bW5OYW1lcyddID0ga2V5cy5tYXAoa2V5ID0+IG5ldyBDYW1lbENhc2VQaXBlKCkudHJhbnNmb3JtKGtleSkpO1xuICAgIC8vIHBvc2l0aW9uOiAndG9wJyxcbiAgICB0aGlzLmdyYXBoRGF0YVsnb3B0aW9ucyddW1wibGVnZW5kXCJdID0geyAgbWF4TGluZXM6IDIgfVxuICAgIGlmKHRoaXMuZ3JhcGhEYXRhWydkYXRhJ10ubGVuZ3RoID4gMTAgKXtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuZ3JhcGhEYXRhWydvcHRpb25zJ10uaEF4aXMgLCB7dGV4dFBvc2l0aW9uIDogJ25vbmUnfSk7XG5cblxuICAgIH1cbiAgfVxuXG59XG4iXX0=