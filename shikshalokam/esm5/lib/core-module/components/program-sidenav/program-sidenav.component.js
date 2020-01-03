/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ProgramSidenavComponent = /** @class */ (function () {
    function ProgramSidenavComponent() {
        this.program = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ProgramSidenavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.currentProgramIndex = 0;
    };
    /**
     * @param {?} assessments
     * @param {?} i
     * @return {?}
     */
    ProgramSidenavComponent.prototype.programSelect = /**
     * @param {?} assessments
     * @param {?} i
     * @return {?}
     */
    function (assessments, i) {
        this.currentProgramIndex = i;
        this.program.emit(assessments);
    };
    ProgramSidenavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-program-sidenav',
                    template: "<div class=\"heading\">\n    {{ 'headings.programs' | translate }}\n</div>\n<div class=\"subHeading\" *ngFor=\"let results of result; let i=index\" (click)=\"programSelect(results, i)\">\n    <span class=\"sideNavSubheading\" [ngClass]=\"{'active': currentProgramIndex === i}\">\n        <div class=\"overFlowHidden\" matTooltip=\"{{results.name}}\" >\n            {{results.name}}\n        </div>\n    </span>\n</div>\n",
                    styles: [".sideNavSubheading{font-size:15px;padding:10px 23px;min-height:40px;display:flex;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.subHeading{color:var(--grey-color)}.active,.subHeading:hover{color:var(--white-color);background-color:var(--primary-color)}.heading{height:40px;display:flex;align-items:center;padding:0 0 0 15px}.overFlowHidden{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]
                }] }
    ];
    /** @nocollapse */
    ProgramSidenavComponent.ctorParameters = function () { return []; };
    ProgramSidenavComponent.propDecorators = {
        result: [{ type: Input }],
        program: [{ type: Output }]
    };
    return ProgramSidenavComponent;
}());
export { ProgramSidenavComponent };
if (false) {
    /** @type {?} */
    ProgramSidenavComponent.prototype.result;
    /** @type {?} */
    ProgramSidenavComponent.prototype.currentProgramIndex;
    /** @type {?} */
    ProgramSidenavComponent.prototype.program;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3JhbS1zaWRlbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLW1vZHVsZS9jb21wb25lbnRzL3Byb2dyYW0tc2lkZW5hdi9wcm9ncmFtLXNpZGVuYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRyxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBU0U7UUFFVSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUZ2QixDQUFDOzs7O0lBSWpCLDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsK0NBQWE7Ozs7O0lBQWIsVUFBYyxXQUFXLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsZ2JBQStDOztpQkFFaEQ7Ozs7O3lCQUVFLEtBQUs7MEJBS0wsTUFBTTs7SUFVVCw4QkFBQztDQUFBLEFBckJELElBcUJDO1NBaEJZLHVCQUF1Qjs7O0lBQ2xDLHlDQUFxQjs7SUFDckIsc0RBQTRCOztJQUk1QiwwQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgLCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wcm9ncmFtLXNpZGVuYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3JhbS1zaWRlbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3JhbS1zaWRlbmF2LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3JhbVNpZGVuYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSByZXN1bHQ6IGFueTtcbiAgY3VycmVudFByb2dyYW1JbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQE91dHB1dCgpIHByb2dyYW0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jdXJyZW50UHJvZ3JhbUluZGV4ID0gMDtcbiAgfVxuXG4gIHByb2dyYW1TZWxlY3QoYXNzZXNzbWVudHMsIGkpe1xuICAgIHRoaXMuY3VycmVudFByb2dyYW1JbmRleCA9IGk7XG4gICAgdGhpcy5wcm9ncmFtLmVtaXQoYXNzZXNzbWVudHMpO1xuICB9XG59XG4iXX0=