/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var SearchDirective = /** @class */ (function () {
    function SearchDirective() {
        this.debounceTime = 5000;
        this.debounceSearch = new EventEmitter();
        this.clicks = new Subject();
    }
    /**
     * @return {?}
     */
    SearchDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription = this.clicks.pipe(debounceTime(this.debounceTime)).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.debounceSearch.emit(_this.searchValue);
        }));
    };
    /**
     * @return {?}
     */
    SearchDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SearchDirective.prototype.clickEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    };
    SearchDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appDebounceSearch]'
                },] }
    ];
    /** @nocollapse */
    SearchDirective.ctorParameters = function () { return []; };
    SearchDirective.propDecorators = {
        debounceTime: [{ type: Input }],
        searchValue: [{ type: Input }],
        debounceSearch: [{ type: Output }],
        clickEvent: [{ type: HostListener, args: ['keyup', ['$event'],] }]
    };
    return SearchDirective;
}());
export { SearchDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL2RpcmVjdGl2ZXMvc2VhcmNoLWRpcmVjdGl2ZS9zZWFyY2guZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDO0lBVUU7UUFOUyxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVuQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEMsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFHZixDQUFDOzs7O0lBRWpCLGtDQUFROzs7SUFBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDbEMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxDQUFDO1lBRVosS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFHRCxvQ0FBVTs7OztJQURWLFVBQ1csS0FBSztRQUNkLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO2lCQUNoQzs7Ozs7K0JBRUUsS0FBSzs4QkFDTCxLQUFLO2lDQUNMLE1BQU07NkJBbUJOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBTW5DLHNCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0E1QlksZUFBZTs7O0lBQzFCLHVDQUE2Qjs7SUFDN0Isc0NBQXNCOztJQUN0Qix5Q0FBOEM7Ozs7O0lBQzlDLGlDQUErQjs7Ozs7SUFDL0IsdUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwRGVib3VuY2VTZWFyY2hdJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGRlYm91bmNlVGltZSA9IDUwMDA7XG4gIEBJbnB1dCgpIHNlYXJjaFZhbHVlIDtcbiAgQE91dHB1dCgpIGRlYm91bmNlU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIGNsaWNrcyA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY2xpY2tzLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZVRpbWUpXG4gICAgKS5zdWJzY3JpYmUoZSA9PlxuICAgeyBcbiAgICAgdGhpcy5kZWJvdW5jZVNlYXJjaC5lbWl0KHRoaXMuc2VhcmNoVmFsdWUpO1xuICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuICBjbGlja0V2ZW50KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmNsaWNrcy5uZXh0KGV2ZW50KTtcbiAgfVxufSJdfQ==