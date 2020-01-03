/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
var TableComponentComponent = /** @class */ (function () {
    function TableComponentComponent() {
        this.displayedColumns = [];
    }
    /**
     * @return {?}
     */
    TableComponentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.tableScroll) {
            this.createDataSource();
        }
    };
    /**
     * @return {?}
     */
    TableComponentComponent.prototype.createDataSource = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.headers.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            _this.displayedColumns.push(element.name);
        }));
        this.datas = new MatTableDataSource(this.datas);
    };
    TableComponentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-table-component',
                    template: "<div *ngIf=\"!tableScroll\">\n  <table class=\"customTable\">\n    <tr>\n      <th class=\"capitalize\" *ngFor=\"let header of headers\">{{header?.value}}</th>\n    </tr>\n    <tr *ngFor=\"let data of datas\">\n      <td *ngFor=\"let header of headers\">{{data[header?.name]}}</td>\n    </tr>\n  </table>\n</div>\n\n<div *ngIf=\"tableScroll\" class=\" example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"datas\" >\n    <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedColumns ; let index = index\" [sticky]=\"index == 0\">\n      <th mat-header-cell *matHeaderCellDef class=\"border\"> <div class=\"padding \"> {{column}}</div> </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"border\"><div class=\"padding \"> {{element[column]}}</div> </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns ; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  \n</div>",
                    styles: [".customTable{border-collapse:collapse;border-spacing:0;width:100%;border:1px solid #ddd;margin-top:20px;overflow:auto}.customTable td,.customTable th{text-align:left;padding:10px}.customTable .fixed{position:absolute;float:left}.customTable tr:nth-child(even){background-color:#f2f2f2}.customTable .marginChart{margin:50px 0}.customTable .capitalize{text-transform:capitalize;font-size:12px!important}.example-container{max-height:600px;width:100%;overflow:auto}td.mat-column-star{width:20px;padding-right:8px}td.mat-column-position,th.mat-column-position{padding:8px;text-align:center}.border{border-right:1px solid #e0e0e0}.padding{padding:15px;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    TableComponentComponent.ctorParameters = function () { return []; };
    TableComponentComponent.propDecorators = {
        headers: [{ type: Input }],
        datas: [{ type: Input }],
        tableScroll: [{ type: Input }]
    };
    return TableComponentComponent;
}());
export { TableComponentComponent };
if (false) {
    /** @type {?} */
    TableComponentComponent.prototype.headers;
    /** @type {?} */
    TableComponentComponent.prototype.datas;
    /** @type {?} */
    TableComponentComponent.prototype.tableScroll;
    /** @type {?} */
    TableComponentComponent.prototype.displayedColumns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL2NvbXBvbmVudHMvZ3JhcGgtdGFibGUtY2hhcnQvdGFibGUtY29tcG9uZW50L3RhYmxlLWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXZEO0lBWUU7UUFGQSxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFFTixDQUFDOzs7O0lBRWpCLDBDQUFROzs7SUFBUjtRQUNFLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztZQUNsQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7SUFDRCxrREFBZ0I7OztJQUFoQjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQzFCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHkvQkFBK0M7O2lCQUVoRDs7Ozs7MEJBR0UsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBaUJSLDhCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FyQlksdUJBQXVCOzs7SUFFbEMsMENBQWlCOztJQUNqQix3Q0FBZTs7SUFDZiw4Q0FBcUI7O0lBQ3JCLG1EQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10YWJsZS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtY29tcG9uZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGhlYWRlcnM7XG4gIEBJbnB1dCgpIGRhdGFzO1xuICBASW5wdXQoKSB0YWJsZVNjcm9sbDtcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYodGhpcy50YWJsZVNjcm9sbCl7XG4gICAgICB0aGlzLmNyZWF0ZURhdGFTb3VyY2UoKTtcbiAgICB9XG4gIH1cbiAgY3JlYXRlRGF0YVNvdXJjZSgpe1xuICAgIHRoaXMuaGVhZGVycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnB1c2goZWxlbWVudC5uYW1lKTtcbiAgICB9KTtcbiAgICB0aGlzLmRhdGFzID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLmRhdGFzKTtcbiAgfVxuXG59XG4iXX0=