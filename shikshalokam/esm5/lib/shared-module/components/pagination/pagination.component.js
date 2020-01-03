/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(_fb) {
        this._fb = _fb;
        this.paginationFlag = false;
        this.paginationResponse = new EventEmitter();
    }
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.pageIndex) {
            this.startList = (this.pageIndex) * this.pageLimit + 1;
            if (this.length - this.startList > this.pageLimit) {
                this.endList = this.startList + this.pageLimit - 1;
                if (this.endList > this.length) {
                    this.endList = this.length;
                }
            }
            else {
                this.endList = this.startList + (this.length - this.startList);
                if (this.endList > this.length) {
                    this.endList = this.length;
                }
            }
        }
        else {
            this.startList = 1;
            if (this.pageLimit) {
                this.endList = this.startList + this.pageLimit - 1;
            }
            else {
                this.endList = this.startList + this.itemsPerPage[0] - 1;
                if (this.endList > this.length) {
                    this.endList = this.length;
                }
            }
        }
        if (this.length == 0) {
            this.label = "Showing " + 0 + ' - ' + 0 + " out of " + this.length + " " + this.paginationLabel;
        }
        else {
            this.label = "Showing " + this.startList + ' - ' + this.endList + " out of " + this.length + " " + this.paginationLabel;
        }
        this.last = this.length / this.pageLimit - 1;
        if ((this.length % this.pageLimit) !== 0) {
            this.last = Math.floor(this.last) + 1;
        }
        this.selected = this.pageLimit ? this.pageLimit : this.itemsPerPage[0];
        this.pagination = {
            previousPageIndex: 0,
            pageIndex: this.pageIndex,
            pageLimit: this.selected,
            length: this.length,
            label: this.paginationLabel
        };
        this.data = {
            editable: true,
            field: "pageLimit",
            input: "dropdown",
            label: this.pageLimit,
            validation: { required: true },
            value: this.itemsPerPage[0],
            visible: true,
        };
        Object.assign(this.data, { options: [] });
        this.itemsPerPage.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            _this.data.options.push({
                value: element,
                label: element
            });
        }));
        this.pageSize = this._fb.group({
            pageLimit: [this.pagination.pageLimit, Validators.required]
        });
        this.paginationFlag = true;
        //console.log(this.pageSize);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PaginationComponent.prototype.page = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event) {
            case 'back': {
                this.pagination.previousPageIndex = this.pagination.pageIndex;
                this.pagination.pageIndex -= 1;
                this.pageIndex = this.pagination.pageIndex;
                break;
            }
            case 'next': {
                this.pagination.previousPageIndex = this.pagination.pageIndex;
                this.pagination.pageIndex += 1;
                this.pageIndex = this.pagination.pageIndex;
                break;
            }
            case 'first': {
                this.pagination.previousPageIndex = 0;
                this.pagination.pageIndex = 0;
                this.pageIndex = this.pagination.pageIndex;
                break;
            }
            case 'last': {
                this.pagination.previousPageIndex = this.last;
                this.pagination.pageIndex = this.pagination.previousPageIndex;
                this.pageIndex = this.pagination.pageIndex;
                break;
            }
        }
        this.startList = (this.pagination.pageIndex) * this.pageLimit + 1;
        if (this.length - this.startList > this.pageLimit)
            this.endList = this.startList + this.pageLimit - 1;
        else {
            this.endList = this.startList + (this.length - this.startList);
            if (this.endList > this.length) {
                this.endList = this.length;
            }
        }
        if (this.length == 0) {
            this.label = "Showing " + 0 + ' - ' + 0 + " out of " + this.length + " " + this.paginationLabel;
        }
        else {
            this.label = "Showing " + this.startList + ' - ' + this.endList + " out of " + this.length + " " + this.paginationLabel;
        }
        this.sendPaginationResponse();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PaginationComponent.prototype.setPageLimit = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        //console.log("pagelimit Set" , event)
        this.last = this.length / event - 1;
        this.pagination.pageIndex = 0;
        this.pagination.previousPageIndex = 0;
        if ((this.length % event) !== 0) {
            this.last = Math.floor(this.last) + 1;
            //console.log(this.last)
        }
        this.pagination.pageLimit = event;
        this.startList = 1;
        this.endList = this.startList + this.pagination.pageLimit - 1;
        if (this.endList > this.length) {
            this.endList = this.length;
            this.label = "Showing " + this.startList + ' - ' + this.endList + " out of " + this.length + " " + this.paginationLabel;
        }
        this.label = "Showing " + this.startList + ' - ' + this.endList + " out of " + this.length + " " + this.paginationLabel;
        this.sendPaginationResponse();
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.sendPaginationResponse = /**
     * @return {?}
     */
    function () {
        this.paginationResponse.emit(this.pagination);
    };
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-pagination',
                    template: "<div class=\"_flex-box  _flex-end\" *ngIf=\"paginationFlag\">\n\n    <div [formGroup]=\"pageSize\" class=\"_flex-box\">\n\n        <span class=\"label\">Items per page :</span>\n        <mat-form-field class=\"width\" *ngIf=\"data.input == 'dropdown'\">\n          <mat-select [disabled]=\"!data.editable\"  formControlName=\"{{data.field}}\" required >\n              <mat-option *ngFor=\"let opt of data.options\" [value]=\"opt.value\" (click)=\"setPageLimit(opt.value)\" >\n                {{opt.label}}\n              </mat-option>\n          </mat-select>\n        </mat-form-field>\n    <!-- <app-dropdown-field [genericData]=\"data\" [genericForm]=\"pageSize\" (emitResponseType) =\"setPageLimit($event)\"></app-dropdown-field> -->\n                  \n    </div>\n    <div class=\"_flex-box\">\n        <button mat-icon-button (click)=\"page('first')\" [disabled]=\"pagination.pageIndex === 0\" matTooltip=\"First Page\">\n            <i class=\"material-icons _icon\">\n                first_page\n            </i>\n        </button>\n        <button mat-icon-button (click)=\"page('back')\" [disabled]=\"pagination.pageIndex === 0\" matTooltip=\"Previous Page\">\n            <i class=\"material-icons _icon\">\n                keyboard_arrow_left\n            </i>\n        </button>\n        <div class =\"pagLabel \">\n            {{label}}\n        </div>\n        <button mat-icon-button (click)=\"page('next')\" [disabled]=\"pagination.pageIndex === last\" matTooltip=\"Next Page\">\n            <i class=\"material-icons _icon\">\n                keyboard_arrow_right\n            </i>\n        </button>\n        <button mat-icon-button (click)=\"page('last')\" [disabled]=\"pagination.pageIndex === last\" matTooltip=\"Last Page\">\n            <i class=\"material-icons _icon\">\n                last_page\n            </i>\n        </button>\n\n    </div>\n</div>",
                    styles: [".width{width:50px}.label{color:var(--faded-label-color);font-weight:100;font-size:12px}.pagLabel{font-size:12px;color:var(--faded-label-color);margin-bottom:-5px}._icon{color:var(--primary-color)}"]
                }] }
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    PaginationComponent.propDecorators = {
        length: [{ type: Input }],
        paginationLabel: [{ type: Input }],
        itemsPerPage: [{ type: Input }],
        pageLimit: [{ type: Input }],
        pageIndex: [{ type: Input }],
        paginationResponse: [{ type: Output }]
    };
    return PaginationComponent;
}());
export { PaginationComponent };
if (false) {
    /** @type {?} */
    PaginationComponent.prototype.length;
    /** @type {?} */
    PaginationComponent.prototype.paginationLabel;
    /** @type {?} */
    PaginationComponent.prototype.itemsPerPage;
    /** @type {?} */
    PaginationComponent.prototype.pageLimit;
    /** @type {?} */
    PaginationComponent.prototype.pageIndex;
    /** @type {?} */
    PaginationComponent.prototype.pagination;
    /** @type {?} */
    PaginationComponent.prototype.last;
    /** @type {?} */
    PaginationComponent.prototype.selected;
    /** @type {?} */
    PaginationComponent.prototype.pageSize;
    /** @type {?} */
    PaginationComponent.prototype.paginationFlag;
    /** @type {?} */
    PaginationComponent.prototype.data;
    /** @type {?} */
    PaginationComponent.prototype.label;
    /** @type {?} */
    PaginationComponent.prototype.startList;
    /** @type {?} */
    PaginationComponent.prototype.endList;
    /** @type {?} */
    PaginationComponent.prototype.paginationResponse;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype._fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLW1vZHVsZS9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRTtJQXVCRSw2QkFBb0IsR0FBZ0I7UUFBaEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQU5wQyxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUtiLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFHbEQsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQXdFQztRQXZFQyxJQUFHLElBQUksQ0FBQyxTQUFTLEVBQUM7WUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUN6RCxJQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRSxDQUFDLENBQUM7Z0JBQ2xELElBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFDO29CQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQzVCO2FBQ0E7aUJBQ0k7Z0JBRUwsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMs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QUFDLElBQUksQ0FBQyxPQUFPLEdBQUUsVUFBVSxHQUFDLElBQUksQ0FBQyxNQUFNLEdBQUUsR0FBRyxHQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7U0FFN0c7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssR0FBQyxJQUFJLENBQUMsT0FBTyxHQUFFLFVBQVUsR0FBQyxJQUFJLENBQUMsTUFBTSxHQUFFLEdBQUcsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFDRCxvREFBc0I7OztJQUF0QjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQy9DLENBQUM7O2dCQTlLRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsdzJEQUEwQzs7aUJBRTNDOzs7O2dCQUxtQixXQUFXOzs7eUJBUzVCLEtBQUs7a0NBQ0wsS0FBSzsrQkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSztxQ0FVTCxNQUFNOztJQXlKVCwwQkFBQztDQUFBLEFBL0tELElBK0tDO1NBMUtZLG1CQUFtQjs7O0lBRzlCLHFDQUFnQjs7SUFDaEIsOENBQXlCOztJQUN6QiwyQ0FBc0I7O0lBQ3RCLHdDQUFvQjs7SUFDcEIsd0NBQW9COztJQUNwQix5Q0FBVzs7SUFDWCxtQ0FBSzs7SUFDTCx1Q0FBUzs7SUFDVCx1Q0FBb0I7O0lBQ3BCLDZDQUF1Qjs7SUFDdkIsbUNBQUs7O0lBQ0wsb0NBQU07O0lBQ04sd0NBQVU7O0lBQ1Ysc0NBQVE7O0lBQ1IsaURBQWtEOzs7OztJQUN0QyxrQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2luYXRpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIEBJbnB1dCgpIGxlbmd0aDtcbiAgQElucHV0KCkgcGFnaW5hdGlvbkxhYmVsO1xuICBASW5wdXQoKSBpdGVtc1BlclBhZ2U7XG4gIEBJbnB1dCgpIHBhZ2VMaW1pdCA7XG4gIEBJbnB1dCgpIHBhZ2VJbmRleCA7XG4gIHBhZ2luYXRpb247XG4gIGxhc3Q7XG4gIHNlbGVjdGVkO1xuICBwYWdlU2l6ZTogRm9ybUdyb3VwO1xuICBwYWdpbmF0aW9uRmxhZyA9IGZhbHNlO1xuICBkYXRhO1xuICBsYWJlbDtcbiAgc3RhcnRMaXN0O1xuICBlbmRMaXN0O1xuICBAT3V0cHV0KCkgcGFnaW5hdGlvblJlc3BvbnNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYodGhpcy5wYWdlSW5kZXgpe1xuICAgICAgdGhpcy5zdGFydExpc3QgPSAoIHRoaXMucGFnZUluZGV4ICkgKiB0aGlzLnBhZ2VMaW1pdCArIDE7XG4gICAgICBpZih0aGlzLmxlbmd0aCAtIHRoaXMuc3RhcnRMaXN0ID4gdGhpcy5wYWdlTGltaXQpIHtcbiAgICAgIHRoaXMuZW5kTGlzdCA9IHRoaXMuc3RhcnRMaXN0ICsgdGhpcy5wYWdlTGltaXQgLTE7XG4gICAgICBpZih0aGlzLmVuZExpc3QgPiB0aGlzLmxlbmd0aCl7XG4gICAgICAgIHRoaXMuZW5kTGlzdCA9IHRoaXMubGVuZ3RoO1xuICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIFxuICAgICAgdGhpcy5lbmRMaXN0ID0gdGhpcy5zdGFydExpc3QgKyAodGhpcy5sZW5ndGggLSB0aGlzLnN0YXJ0TGlzdCApO1xuICAgICAgaWYodGhpcy5lbmRMaXN0ID4gdGhpcy5sZW5ndGgpe1xuICAgICAgICB0aGlzLmVuZExpc3QgPSB0aGlzLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICBlbHNle1xuICAgICB0aGlzLnN0YXJ0TGlzdCA9IDE7XG4gICAgIGlmKHRoaXMucGFnZUxpbWl0KXtcbiAgICAgdGhpcy5lbmRMaXN0ID0gdGhpcy5zdGFydExpc3QgKyB0aGlzLnBhZ2VMaW1pdCAgLTE7XG4gICAgIH1cbiAgICAgZWxzZSB7XG4gICAgICAgdGhpcy5lbmRMaXN0ID0gdGhpcy5zdGFydExpc3QgKyB0aGlzLml0ZW1zUGVyUGFnZVswXSAgLTE7XG4gICAgICAgaWYodGhpcy5lbmRMaXN0ID4gdGhpcy5sZW5ndGgpe1xuICAgICAgICB0aGlzLmVuZExpc3QgPSB0aGlzLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgfVxuXG4gICB9XG4gICBpZih0aGlzLmxlbmd0aCA9PSAwKXtcbiAgICB0aGlzLmxhYmVsID0gXCJTaG93aW5nIFwiKzArICcgLSAnKyAwICtcIiBvdXQgb2YgXCIrdGhpcy5sZW5ndGggK1wiIFwiK3RoaXMucGFnaW5hdGlvbkxhYmVsO1xuXG4gICAgfVxuICAgIGVsc2V7XG4gICAgdGhpcy5sYWJlbCA9IFwiU2hvd2luZyBcIit0aGlzLnN0YXJ0TGlzdCArICcgLSAnK3RoaXMuZW5kTGlzdCArXCIgb3V0IG9mIFwiK3RoaXMubGVuZ3RoICtcIiBcIit0aGlzLnBhZ2luYXRpb25MYWJlbDtcblxuICAgIH1cbiAgICB0aGlzLmxhc3QgPSB0aGlzLmxlbmd0aCAvIHRoaXMucGFnZUxpbWl0ICAtMSA7XG4gICAgaWYoICh0aGlzLmxlbmd0aCAlIHRoaXMucGFnZUxpbWl0KSAgIT09IDAgICApe1xuICAgICB0aGlzLmxhc3QgPSAgTWF0aC5mbG9vcih0aGlzLmxhc3QpICsxIDtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMucGFnZUxpbWl0ID8gdGhpcy5wYWdlTGltaXQgOiB0aGlzLml0ZW1zUGVyUGFnZVswXTtcbiAgICB0aGlzLnBhZ2luYXRpb24gPSB7XG4gICAgICBwcmV2aW91c1BhZ2VJbmRleDogMCxcbiAgICAgIHBhZ2VJbmRleDogdGhpcy5wYWdlSW5kZXggLFxuICAgICAgcGFnZUxpbWl0OiB0aGlzLnNlbGVjdGVkLFxuICAgICAgbGVuZ3RoOiB0aGlzLmxlbmd0aCxcbiAgICAgIGxhYmVsIDogdGhpcy5wYWdpbmF0aW9uTGFiZWxcbiAgICB9XG4gICBcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgIGZpZWxkOiBcInBhZ2VMaW1pdFwiLFxuICAgICAgaW5wdXQ6IFwiZHJvcGRvd25cIixcbiAgICAgIGxhYmVsOiB0aGlzLnBhZ2VMaW1pdCxcbiAgICAgIHZhbGlkYXRpb246IHsgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgIHZhbHVlOiB0aGlzLml0ZW1zUGVyUGFnZVswXSxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgfVxuICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhICwge29wdGlvbnMgOiBbXX0pXG4gICAgdGhpcy5pdGVtc1BlclBhZ2UuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICB0aGlzLmRhdGEub3B0aW9ucy5wdXNoKCB7IFxuICAgICAgdmFsdWUgOiBlbGVtZW50LFxuICAgICAgbGFiZWwgOiBlbGVtZW50XG4gICAgfSlcbiAgICB9KTtcbiAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgcGFnZUxpbWl0OiBbdGhpcy5wYWdpbmF0aW9uLnBhZ2VMaW1pdCwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0aGlzLnBhZ2luYXRpb25GbGFnID0gdHJ1ZTtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMucGFnZVNpemUpO1xuICB9XG5cbiAgcGFnZShldmVudCkge1xuICAgIHN3aXRjaChldmVudCl7XG4gICAgICBjYXNlICdiYWNrJzp7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5wcmV2aW91c1BhZ2VJbmRleCA9IHRoaXMucGFnaW5hdGlvbi5wYWdlSW5kZXg7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5wYWdlSW5kZXggLT0gMTtcbiAgICAgICAgdGhpcy5wYWdlSW5kZXggPSB0aGlzLnBhZ2luYXRpb24ucGFnZUluZGV4IDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICduZXh0Jzp7XG4gICAgICB0aGlzLnBhZ2luYXRpb24ucHJldmlvdXNQYWdlSW5kZXggPSB0aGlzLnBhZ2luYXRpb24ucGFnZUluZGV4O1xuICAgICAgdGhpcy5wYWdpbmF0aW9uLnBhZ2VJbmRleCArPSAxO1xuICAgICAgdGhpcy5wYWdlSW5kZXggPSB0aGlzLnBhZ2luYXRpb24ucGFnZUluZGV4IDtcbiAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZmlyc3QnOntcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLnByZXZpb3VzUGFnZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLnBhZ2VJbmRleCA9IDA7XG4gICAgICAgIHRoaXMucGFnZUluZGV4ID0gdGhpcy5wYWdpbmF0aW9uLnBhZ2VJbmRleCA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnbGFzdCc6e1xuICAgICAgdGhpcy5wYWdpbmF0aW9uLnByZXZpb3VzUGFnZUluZGV4ID0gdGhpcy5sYXN0O1xuICAgICAgdGhpcy5wYWdpbmF0aW9uLnBhZ2VJbmRleCA9IHRoaXMucGFnaW5hdGlvbi5wcmV2aW91c1BhZ2VJbmRleDtcbiAgICAgIHRoaXMucGFnZUluZGV4ID0gdGhpcy5wYWdpbmF0aW9uLnBhZ2VJbmRleCA7XG4gICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICBcbiAgICB0aGlzLnN0YXJ0TGlzdCA9ICggdGhpcy5wYWdpbmF0aW9uLnBhZ2VJbmRleCApICogdGhpcy5wYWdlTGltaXQgKyAxO1xuICAgIGlmKHRoaXMubGVuZ3RoIC0gdGhpcy5zdGFydExpc3QgPiB0aGlzLnBhZ2VMaW1pdClcbiAgICAgICAgIHRoaXMuZW5kTGlzdCA9IHRoaXMuc3RhcnRMaXN0ICsgdGhpcy5wYWdlTGltaXQgLTE7XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVuZExpc3QgPSB0aGlzLnN0YXJ0TGlzdCArICh0aGlzLmxlbmd0aCAtIHRoaXMuc3RhcnRMaXN0ICk7XG4gICAgICBpZih0aGlzLmVuZExpc3QgPiB0aGlzLmxlbmd0aCl7XG4gICAgICAgIHRoaXMuZW5kTGlzdCA9IHRoaXMubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGlmKHRoaXMubGVuZ3RoID09IDApe1xuICAgIHRoaXMubGFiZWwgPSBcIlNob3dpbmcgXCIrMCsgJyAtICcrIDAgK1wiIG91dCBvZiBcIit0aGlzLmxlbmd0aCArXCIgXCIrdGhpcy5wYWdpbmF0aW9uTGFiZWw7XG5cbiAgICB9XG4gICAgZWxzZXtcbiAgICB0aGlzLmxhYmVsID0gXCJTaG93aW5nIFwiK3RoaXMuc3RhcnRMaXN0ICsgJyAtICcrdGhpcy5lbmRMaXN0ICtcIiBvdXQgb2YgXCIrdGhpcy5sZW5ndGggK1wiIFwiK3RoaXMucGFnaW5hdGlvbkxhYmVsO1xuXG4gICAgfVxuXG4gICAgdGhpcy5zZW5kUGFnaW5hdGlvblJlc3BvbnNlKCk7XG4gIH1cbiAgc2V0UGFnZUxpbWl0KGV2ZW50KXtcbiAgICAvL2NvbnNvbGUubG9nKFwicGFnZWxpbWl0IFNldFwiICwgZXZlbnQpXG4gICAgdGhpcy5sYXN0ID0gdGhpcy5sZW5ndGggLyBldmVudCAgLTE7XG4gICAgdGhpcy5wYWdpbmF0aW9uLnBhZ2VJbmRleCA9IDAgO1xuICAgIHRoaXMucGFnaW5hdGlvbi5wcmV2aW91c1BhZ2VJbmRleCA9IDA7XG4gICAgaWYoICh0aGlzLmxlbmd0aCAlIGV2ZW50KSAgIT09IDAgICApe1xuXG4gICAgICB0aGlzLmxhc3QgPSAgTWF0aC5mbG9vcih0aGlzLmxhc3QpKzEgO1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmxhc3QpXG4gICAgIH1cbiAgICAgXG4gICAgdGhpcy5wYWdpbmF0aW9uLnBhZ2VMaW1pdCA9IGV2ZW50O1xuICAgIHRoaXMuc3RhcnRMaXN0ID0gMTtcbiAgICB0aGlzLmVuZExpc3QgPSB0aGlzLnN0YXJ0TGlzdCArIHRoaXMucGFnaW5hdGlvbi5wYWdlTGltaXQgLTE7XG4gICAgaWYodGhpcy5lbmRMaXN0ID4gdGhpcy5sZW5ndGgpe1xuICAgICAgdGhpcy5lbmRMaXN0ID0gdGhpcy5sZW5ndGg7XG4gICAgdGhpcy5sYWJlbCA9IFwiU2hvd2luZyBcIit0aGlzLnN0YXJ0TGlzdCArICcgLSAnK3RoaXMuZW5kTGlzdCArXCIgb3V0IG9mIFwiK3RoaXMubGVuZ3RoICtcIiBcIit0aGlzLnBhZ2luYXRpb25MYWJlbDtcblxuICAgIH1cbiAgICB0aGlzLmxhYmVsID0gXCJTaG93aW5nIFwiK3RoaXMuc3RhcnRMaXN0ICsgJyAtICcrdGhpcy5lbmRMaXN0ICtcIiBvdXQgb2YgXCIrdGhpcy5sZW5ndGggK1wiIFwiK3RoaXMucGFnaW5hdGlvbkxhYmVsO1xuICAgIHRoaXMuc2VuZFBhZ2luYXRpb25SZXNwb25zZSgpO1xuICB9XG4gIHNlbmRQYWdpbmF0aW9uUmVzcG9uc2UoKSB7XG4gICAgdGhpcy5wYWdpbmF0aW9uUmVzcG9uc2UuZW1pdCh0aGlzLnBhZ2luYXRpb24pXG4gIH1cbn1cbiJdfQ==