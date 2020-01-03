/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class ProgramSidenavComponent {
    constructor() {
        this.program = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentProgramIndex = 0;
    }
    /**
     * @param {?} assessments
     * @param {?} i
     * @return {?}
     */
    programSelect(assessments, i) {
        this.currentProgramIndex = i;
        this.program.emit(assessments);
    }
}
ProgramSidenavComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-program-sidenav',
                template: "<div class=\"heading\">\n    {{ 'headings.programs' | translate }}\n</div>\n<div class=\"subHeading\" *ngFor=\"let results of result; let i=index\" (click)=\"programSelect(results, i)\">\n    <span class=\"sideNavSubheading\" [ngClass]=\"{'active': currentProgramIndex === i}\">\n        <div class=\"overFlowHidden\" matTooltip=\"{{results.name}}\" >\n            {{results.name}}\n        </div>\n    </span>\n</div>\n",
                styles: [".sideNavSubheading{font-size:15px;padding:10px 23px;min-height:40px;display:flex;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.subHeading{color:var(--grey-color)}.active,.subHeading:hover{color:var(--white-color);background-color:var(--primary-color)}.heading{height:40px;display:flex;align-items:center;padding:0 0 0 15px}.overFlowHidden{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]
            }] }
];
/** @nocollapse */
ProgramSidenavComponent.ctorParameters = () => [];
ProgramSidenavComponent.propDecorators = {
    result: [{ type: Input }],
    program: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ProgramSidenavComponent.prototype.result;
    /** @type {?} */
    ProgramSidenavComponent.prototype.currentProgramIndex;
    /** @type {?} */
    ProgramSidenavComponent.prototype.program;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3JhbS1zaWRlbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlLW1vZHVsZS9jb21wb25lbnRzL3Byb2dyYW0tc2lkZW5hdi9wcm9ncmFtLXNpZGVuYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRyxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyx1QkFBdUI7SUFJbEM7UUFFVSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUZ2QixDQUFDOzs7O0lBSWpCLFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsZ2JBQStDOzthQUVoRDs7Ozs7cUJBRUUsS0FBSztzQkFLTCxNQUFNOzs7O0lBTFAseUNBQXFCOztJQUNyQixzREFBNEI7O0lBSTVCLDBDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCAsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXByb2dyYW0tc2lkZW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmFtLXNpZGVuYXYuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmFtLXNpZGVuYXYuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmFtU2lkZW5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHJlc3VsdDogYW55O1xuICBjdXJyZW50UHJvZ3JhbUluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBAT3V0cHV0KCkgcHJvZ3JhbSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmN1cnJlbnRQcm9ncmFtSW5kZXggPSAwO1xuICB9XG5cbiAgcHJvZ3JhbVNlbGVjdChhc3Nlc3NtZW50cywgaSl7XG4gICAgdGhpcy5jdXJyZW50UHJvZ3JhbUluZGV4ID0gaTtcbiAgICB0aGlzLnByb2dyYW0uZW1pdChhc3Nlc3NtZW50cyk7XG4gIH1cbn1cbiJdfQ==