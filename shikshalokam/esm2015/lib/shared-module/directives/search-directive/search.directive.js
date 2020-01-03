/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
export class SearchDirective {
    constructor() {
        this.debounceTime = 5000;
        this.debounceSearch = new EventEmitter();
        this.clicks = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription = this.clicks.pipe(debounceTime(this.debounceTime)).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.debounceSearch.emit(this.searchValue);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    }
}
SearchDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appDebounceSearch]'
            },] }
];
/** @nocollapse */
SearchDirective.ctorParameters = () => [];
SearchDirective.propDecorators = {
    debounceTime: [{ type: Input }],
    searchValue: [{ type: Input }],
    debounceSearch: [{ type: Output }],
    clickEvent: [{ type: HostListener, args: ['keyup', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    SearchDirective.prototype.debounceTime;
    /** @type {?} */
    SearchDirective.prototype.searchValue;
    /** @type {?} */
    SearchDirective.prototype.debounceSearch;
    /**
     * @type {?}
     * @private
     */
    SearchDirective.prototype.clicks;
    /**
     * @type {?}
     * @private
     */
    SearchDirective.prototype.subscription;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL2RpcmVjdGl2ZXMvc2VhcmNoLWRpcmVjdGl2ZS9zZWFyY2guZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzlDLE1BQU0sT0FBTyxlQUFlO0lBTzFCO1FBTlMsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFbkIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBR2YsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDbEMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFFZixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFHRCxVQUFVLENBQUMsS0FBSztRQUNkLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDOzs7OzsyQkFFRSxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsTUFBTTt5QkFtQk4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQXJCakMsdUNBQTZCOztJQUM3QixzQ0FBc0I7O0lBQ3RCLHlDQUE4Qzs7Ozs7SUFDOUMsaUNBQStCOzs7OztJQUMvQix1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBEZWJvdW5jZVNlYXJjaF0nXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZGVib3VuY2VUaW1lID0gNTAwMDtcbiAgQElucHV0KCkgc2VhcmNoVmFsdWUgO1xuICBAT3V0cHV0KCkgZGVib3VuY2VTZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByaXZhdGUgY2xpY2tzID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5jbGlja3MucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlVGltZSlcbiAgICApLnN1YnNjcmliZShlID0+XG4gICB7IFxuICAgICB0aGlzLmRlYm91bmNlU2VhcmNoLmVtaXQodGhpcy5zZWFyY2hWYWx1ZSk7XG4gICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXG4gIGNsaWNrRXZlbnQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuY2xpY2tzLm5leHQoZXZlbnQpO1xuICB9XG59Il19