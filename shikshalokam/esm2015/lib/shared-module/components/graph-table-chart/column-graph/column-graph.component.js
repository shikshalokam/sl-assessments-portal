/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CamelCasePipe } from '../../../../core-module/pipes/camelcase-pipe/camelcase.pipe';
export class ColumnGraphComponent {
    constructor() {
        this.graphData = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.createGraphObj();
    }
    /**
     * @return {?}
     */
    createGraphObj() {
        this.graphData['chartType'] = this.configs.chartType;
        this.graphData["data"] = this.datas.map((/**
         * @param {?} data
         * @return {?}
         */
        data => Object.values(data)));
        // this.graphData['title'] = this.configs.title;
        this.graphData['data'].forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
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
        let keys = Object.keys(this.datas[0]);
        this.graphData['columnNames'] = keys.map((/**
         * @param {?} key
         * @return {?}
         */
        key => new CamelCasePipe().transform(key)));
        // position: 'top',
        this.graphData['options']["legend"] = { maxLines: 2 };
        if (this.graphData['data'].length > 10) {
            Object.assign(this.graphData['options'].hAxis, { textPosition: 'none' });
        }
    }
}
ColumnGraphComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-column-graph',
                template: "<!-- <google-chart class=\"marginChart\" [options]=\"graphData.chartOptions\" style=\"width : 100%; height: 100%;\"\n  [title]=\"graphData.title\" [data]=\"graphData.data\" [type]=\"graphData.chartType\" [columnNames]=\"graphData.columnNames\">\n</google-chart> -->\n<div *ngIf=\"graphData\">\n  <div class=\"_flex-box _justify-content-center\">\n    <h4>{{configs?.title}}</h4>\n  </div >\n  <div class=\"_flex-box _justify-content-center subTitle\"> {{configs?.subTitle}}</div>\n  <div class=\"_full-width\">\n    <google-chart class=\"marginChart\" style=\"width : 100%; min-height: 500px;\" [options]=\"graphData['options']\"\n      [title]=\"graphData['title']\" [data]=\"graphData['data']\" [type]=\"graphData['chartType']\"\n      [columnNames]=\"graphData['columnNames']\">\n    </google-chart>\n  </div>\n</div>",
                styles: [".subTitle{color:var(--grey-color)}"]
            }] }
];
/** @nocollapse */
ColumnGraphComponent.ctorParameters = () => [];
ColumnGraphComponent.propDecorators = {
    datas: [{ type: Input }],
    configs: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ColumnGraphComponent.prototype.datas;
    /** @type {?} */
    ColumnGraphComponent.prototype.configs;
    /** @type {?} */
    ColumnGraphComponent.prototype.graphData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL2NvbXBvbmVudHMvZ3JhcGgtdGFibGUtY2hhcnQvY29sdW1uLWdyYXBoL2NvbHVtbi1ncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQU81RixNQUFNLE9BQU8sb0JBQW9CO0lBTy9CO1FBSEEsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUdDLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztRQUNyRSxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkMsd0JBQXdCO1FBQzFCLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQzs7Ozs7Ozs7OztZQVNsRCxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7UUFDcEYsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUE7UUFDdEQsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRyxFQUFDLFlBQVksRUFBRyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBR3hFO0lBQ0gsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixnMEJBQTRDOzthQUU3Qzs7Ozs7b0JBR0UsS0FBSztzQkFDTCxLQUFLOzs7O0lBRE4scUNBQWU7O0lBQ2YsdUNBQWlCOztJQUNqQix5Q0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FtZWxDYXNlUGlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUtbW9kdWxlL3BpcGVzL2NhbWVsY2FzZS1waXBlL2NhbWVsY2FzZS5waXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvbHVtbi1ncmFwaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2x1bW4tZ3JhcGguY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb2x1bW4tZ3JhcGguY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5HcmFwaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZGF0YXM7XG4gIEBJbnB1dCgpIGNvbmZpZ3M7XG4gIGdyYXBoRGF0YSA9IHt9O1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZUdyYXBoT2JqKCk7XG4gIH1cblxuICBjcmVhdGVHcmFwaE9iaigpIHtcbiAgICB0aGlzLmdyYXBoRGF0YVsnY2hhcnRUeXBlJ10gPSB0aGlzLmNvbmZpZ3MuY2hhcnRUeXBlO1xuICAgIHRoaXMuZ3JhcGhEYXRhW1wiZGF0YVwiXSA9IHRoaXMuZGF0YXMubWFwKGRhdGEgPT4gT2JqZWN0LnZhbHVlcyhkYXRhKSk7XG4gICAgLy8gdGhpcy5ncmFwaERhdGFbJ3RpdGxlJ10gPSB0aGlzLmNvbmZpZ3MudGl0bGU7XG4gICAgdGhpcy5ncmFwaERhdGFbJ2RhdGEnXS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyggZWxlbWVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5ncmFwaERhdGFbJ29wdGlvbnMnXSA9IHRoaXMuY29uZmlncy5jaGFydE9wdGlvbnM7XG4gIC8vICAgdGhpcy5ncmFwaERhdGFbJ29wdGlvbnMnXSBbJ3RpdGxlVGV4dFN0eWxlJ10gPSB7XG4gIC8vICAgICBjb2xvcjogXCJyZWRcIiwgICAgLy8gYW55IEhUTUwgc3RyaW5nIGNvbG9yICgncmVkJywgJyNjYzAwY2MnKVxuICAvLyAgICAgXCJtYXJnaW5cIjogXCIyMFwiLFxuICAvLyAgICAgLy8gZm9udE5hbWU6IDxzdHJpbmc+LCAvLyBpLmUuICdUaW1lcyBOZXcgUm9tYW4nXG4gIC8vICAgICBmb250U2l6ZTogMzAsIC8vIDEyLCAxOCB3aGF0ZXZlciB5b3Ugd2FudCAoZG9uJ3Qgc3BlY2lmeSBweClcbiAgLy8gICAgIFwiYm9sZFwiOiB0cnVlLCAgICBcbiAgLy8gICAgIGl0YWxpYzogdHJ1ZSAgIC8vIHRydWUgb2YgZmFsc2VcbiAgLy8gfVxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5kYXRhc1swXSk7XG4gICAgdGhpcy5ncmFwaERhdGFbJ2NvbHVtbk5hbWVzJ10gPSBrZXlzLm1hcChrZXkgPT4gbmV3IENhbWVsQ2FzZVBpcGUoKS50cmFuc2Zvcm0oa2V5KSk7XG4gICAgLy8gcG9zaXRpb246ICd0b3AnLFxuICAgIHRoaXMuZ3JhcGhEYXRhWydvcHRpb25zJ11bXCJsZWdlbmRcIl0gPSB7ICBtYXhMaW5lczogMiB9XG4gICAgaWYodGhpcy5ncmFwaERhdGFbJ2RhdGEnXS5sZW5ndGggPiAxMCApe1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5ncmFwaERhdGFbJ29wdGlvbnMnXS5oQXhpcyAsIHt0ZXh0UG9zaXRpb24gOiAnbm9uZSd9KTtcblxuXG4gICAgfVxuICB9XG5cbn1cbiJdfQ==