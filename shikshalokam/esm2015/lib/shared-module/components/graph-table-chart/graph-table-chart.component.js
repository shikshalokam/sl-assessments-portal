/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class GraphTableChartComponent {
    constructor() {
        this.pagination = false;
        this.pageIndex = 0;
        this.pageLimit = 10;
        this.itemsPerPage = [10, 15, 20];
        this.pageEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //console.log(this.section.subSections)
    }
    /**
     * @param {?} event
     * @return {?}
     */
    pageResponse(event) {
        this.pageEvent.emit(event);
    }
}
GraphTableChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-graph-table-chart',
                template: "<div *ngIf=\"section\" >\n    <div *ngFor=\"let sections of section.subSections\">\n\n    <div>\n        <app-table-component [headers]=\"sections?.tabularData?.headers\" [datas]=\"sections?.data\" [tableScroll]=\"sections?.tableScroll\" *ngIf=\"sections?.table\">\n        </app-table-component>\n    </div>\n    <div class=\"marginTop _border\">\n        <app-column-graph [datas]=\"sections?.newGraphData ? sections?.newGraphData : sections?.data\" [configs]=\"sections?.graphData\" *ngIf=\"sections?.graph\">\n        </app-column-graph>\n    </div>\n\n    <app-pagination *ngIf=\"pagination\" [length]=\"section?.data.length\" [pageLimit]=\"pageLimit\"\n              [pageIndex]=\"pageIndex\" [itemsPerPage]=\"itemsPerPage\" (paginationResponse)=\"pageResponse($event)\"\n              [paginationLabel]=\"paginationLabel\"></app-pagination>\n    </div>\n    \n</div>",
                styles: [".marginTop{margin-top:20px}"]
            }] }
];
/** @nocollapse */
GraphTableChartComponent.ctorParameters = () => [];
GraphTableChartComponent.propDecorators = {
    section: [{ type: Input }],
    pagination: [{ type: Input }],
    pageIndex: [{ type: Input }],
    pageLimit: [{ type: Input }],
    itemsPerPage: [{ type: Input }],
    paginationLabel: [{ type: Input }],
    pageEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    GraphTableChartComponent.prototype.section;
    /** @type {?} */
    GraphTableChartComponent.prototype.pagination;
    /** @type {?} */
    GraphTableChartComponent.prototype.pageIndex;
    /** @type {?} */
    GraphTableChartComponent.prototype.pageLimit;
    /** @type {?} */
    GraphTableChartComponent.prototype.itemsPerPage;
    /** @type {?} */
    GraphTableChartComponent.prototype.paginationLabel;
    /** @type {?} */
    GraphTableChartComponent.prototype.pageEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGgtdGFibGUtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9ncmFwaC10YWJsZS1jaGFydC9ncmFwaC10YWJsZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLHdCQUF3QjtJQVFuQztRQU5PLGVBQVUsR0FBYSxLQUFLLENBQUM7UUFDN0IsY0FBUyxHQUFHLENBQUMsQ0FBRTtRQUNmLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUUxQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTix1Q0FBdUM7SUFDekMsQ0FBQzs7Ozs7SUFDRCxZQUFZLENBQUMsS0FBSztRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLHEzQkFBaUQ7O2FBRWxEOzs7OztzQkFFQSxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxNQUFNOzs7O0lBTlAsMkNBQWtCOztJQUNsQiw4Q0FBc0M7O0lBQ3RDLDZDQUF3Qjs7SUFDeEIsNkNBQXdCOztJQUN4QixnREFBb0M7O0lBQ3BDLG1EQUEyQjs7SUFDM0IsNkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZ3JhcGgtdGFibGUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JhcGgtdGFibGUtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ncmFwaC10YWJsZS1jaGFydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdyYXBoVGFibGVDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5ASW5wdXQoKSBzZWN0aW9uIDtcbkBJbnB1dCgpIHBhZ2luYXRpb24gOiBib29sZWFuID0gZmFsc2U7XG5ASW5wdXQoKSBwYWdlSW5kZXggPSAwIDtcbkBJbnB1dCgpIHBhZ2VMaW1pdCA9IDEwO1xuQElucHV0KCkgaXRlbXNQZXJQYWdlID0gWzEwLCAxNSwyMF07XG5ASW5wdXQoKSAgcGFnaW5hdGlvbkxhYmVsIDtcbkBPdXRwdXQoKSBwYWdlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnNlY3Rpb24uc3ViU2VjdGlvbnMpXG4gIH1cbiAgcGFnZVJlc3BvbnNlKGV2ZW50KXtcbiAgICB0aGlzLnBhZ2VFdmVudC5lbWl0KGV2ZW50KTtcbiAgfVxuXG59XG4iXX0=