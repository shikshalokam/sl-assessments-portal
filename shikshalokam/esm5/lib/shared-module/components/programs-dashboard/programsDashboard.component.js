/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
var ProgramsDashboardComponent = /** @class */ (function () {
    function ProgramsDashboardComponent() {
        this.emitCurrentProgram = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ProgramsDashboardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} currentProgram
     * @return {?}
     */
    ProgramsDashboardComponent.prototype.programClick = /**
     * @param {?} currentProgram
     * @return {?}
     */
    function (currentProgram) {
        this.emitCurrentProgram.emit(currentProgram);
    };
    ProgramsDashboardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-programsDashboard',
                    template: "<div class=\"margin\">\n  <div *ngFor=\"let currentProgram of programsList; let i=index\" class=\" col-lg-6 col-md-6 col-sm-6 col-xs-12 _noMarginPadding\">\n      <mat-card \n      class=\" _cursor-pointer marginTop\" (click)=\"programClick(currentProgram)\">\n      <div class=\"_flex-box _justify-content-center _flex-column  _overFlow-ellipsis\">\n        <div class=\"_flex-box _justify-content-space-between cardHeading noWarp\" matTooltip=\"{{currentProgram?.name}}\">\n            {{currentProgram?.name | minchar:15}}\n            <i class=\"material-icons iconSize\" > dashboard </i>\n        </div>\n        <div class=\"description noWarp _overFlow-ellipsis col-lg-12 col-md-12 col-sm-6 col-xs-12 _noMarginPadding\" matTooltip=\"{{currentProgram?.description}}\">\n          {{currentProgram?.description | minchar:30}}\n        </div>\n      </div>\n    </mat-card>\n  </div>\n  \n</div>",
                    styles: [".noMarginPadding{margin:0;padding:0}.flex-box-justify-content-center{display:flex!important;align-items:center;justify-content:center}.margin{margin:20px}.iconSize{font-size:40px!important;color:var(--grey-color)}.example-header-image{background-size:cover}._flex-column{flex-direction:column}.cardHeading{font-size:18px;width:100%}.description{font-size:15px;color:var(--grey-color)}.marginTop{margin:10px 0}.noWarp{white-space:nowrap}"]
                }] }
    ];
    /** @nocollapse */
    ProgramsDashboardComponent.ctorParameters = function () { return []; };
    ProgramsDashboardComponent.propDecorators = {
        programsList: [{ type: Input }],
        emitCurrentProgram: [{ type: Output }]
    };
    return ProgramsDashboardComponent;
}());
export { ProgramsDashboardComponent };
if (false) {
    /** @type {?} */
    ProgramsDashboardComponent.prototype.programsList;
    /** @type {?} */
    ProgramsDashboardComponent.prototype.emitCurrentProgram;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3JhbXNEYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1tb2R1bGUvY29tcG9uZW50cy9wcm9ncmFtcy1kYXNoYm9hcmQvcHJvZ3JhbXNEYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBUUk7UUFETSx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDZiw2Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUNELGlEQUFZOzs7O0lBQVosVUFBYSxjQUFjO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBYkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLCs0QkFBaUQ7O2lCQUVsRDs7Ozs7K0JBRUEsS0FBSztxQ0FDTCxNQUFNOztJQU9MLGlDQUFDO0NBQUEsQUFkSCxJQWNHO1NBVFUsMEJBQTBCOzs7SUFDdkMsa0RBQTRCOztJQUM1Qix3REFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXByb2dyYW1zRGFzaGJvYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyYW1zRGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3JhbXNEYXNoYm9hcmQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmFtc0Rhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5ASW5wdXQoKSBwcm9ncmFtc0xpc3QgOiBhbnk7XG5AT3V0cHV0KCkgZW1pdEN1cnJlbnRQcm9ncmFtID0gbmV3IEV2ZW50RW1pdHRlciAoKTtcbiAgICBjb25zdHJ1Y3Rvcigpe31cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG4gICAgcHJvZ3JhbUNsaWNrKGN1cnJlbnRQcm9ncmFtKXtcbiAgICAgIHRoaXMuZW1pdEN1cnJlbnRQcm9ncmFtLmVtaXQoY3VycmVudFByb2dyYW0pO1xuICAgIH1cbiAgfVxuICAiXX0=