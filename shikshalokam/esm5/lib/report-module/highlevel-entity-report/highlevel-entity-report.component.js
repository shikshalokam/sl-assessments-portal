/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ReportService } from '../report-service/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UtilityService } from '../../core-module/services/utility-service/utility.service';
var HighlevelEntityReportComponent = /** @class */ (function () {
    function HighlevelEntityReportComponent(apiService, utility, snackBar, router, route) {
        var _this = this;
        this.apiService = apiService;
        this.utility = utility;
        this.snackBar = snackBar;
        this.router = router;
        this.route = route;
        this.headings = "headings.reportMiltipleEntityReport";
        this.programId = this.router.snapshot.queryParamMap.get('programId');
        this.entityId = this.router.snapshot.params.entityId;
        this.solutionId = this.router.snapshot.queryParamMap.get('solutionId');
        this.linkId = this.router.snapshot.queryParamMap.get('linkId');
        this.router.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.apiBaseUrl = data.apibaseUrl;
            _this.reportConfig = data.reportConfig;
            _this.shareLinkApi = data.shareLinkApi;
            _this.publicSharedBaseUrl = data.publicSharedBaseUrl;
            _this.globalConfig = data.globalConfig;
            _this.componentId = data.componentId;
            _this.baseUrl = data.baseUrl;
            _this.portalName = data.portalName;
        }));
    }
    /**
     * @return {?}
     */
    HighlevelEntityReportComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.utility.loaderShow();
        this.getHighEntityReport();
    };
    /**
     * @return {?}
     */
    HighlevelEntityReportComponent.prototype.getHighEntityReport = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.getHighEntityReport(this.apiBaseUrl + this.reportConfig.highEntityReport, this.programId, this.solutionId, this.entityId, this.linkId).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var e_1, _a, e_2, _b, e_3, _c;
            _this.highLevelInsight = data['result'];
            /** @type {?} */
            var newgraphData = [];
            try {
                for (var _d = tslib_1.__values(_this.highLevelInsight['sections'][0]['subSections'][0].data), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var data_1 = _e.value;
                    /** @type {?} */
                    var newData = Object.assign({}, data_1);
                    /** @type {?} */
                    var totalCountArray = Object.values(newData);
                    totalCountArray.splice(0, 1);
                    /** @type {?} */
                    var totalcount = 0;
                    try {
                        for (var totalCountArray_1 = tslib_1.__values(totalCountArray), totalCountArray_1_1 = totalCountArray_1.next(); !totalCountArray_1_1.done; totalCountArray_1_1 = totalCountArray_1.next()) {
                            var element = totalCountArray_1_1.value;
                            totalcount = element + totalcount;
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (totalCountArray_1_1 && !totalCountArray_1_1.done && (_b = totalCountArray_1.return)) _b.call(totalCountArray_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    /** @type {?} */
                    var objKeys = Object.keys(newData);
                    objKeys.splice(0, 1);
                    try {
                        for (var objKeys_1 = tslib_1.__values(objKeys), objKeys_1_1 = objKeys_1.next(); !objKeys_1_1.done; objKeys_1_1 = objKeys_1.next()) {
                            var key = objKeys_1_1.value;
                            newData[key] = (data_1[key] / totalcount) * 100;
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (objKeys_1_1 && !objKeys_1_1.done && (_c = objKeys_1.return)) _c.call(objKeys_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    newgraphData.push(newData);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.highLevelInsight['sections'][0]['subSections'][0]['newGraphData'] = newgraphData;
            _this.utility.loaderHide();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            //this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
            _this.utility.loaderHide();
        }));
    };
    /**
     * @return {?}
     */
    HighlevelEntityReportComponent.prototype.naviagteToRubrics = /**
     * @return {?}
     */
    function () {
        this.route.navigate(["/report/framework-rubric"], { queryParams: { link: this.highLevelInsight.frameworkUrl.link } });
    };
    HighlevelEntityReportComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-highlevel-entity-report',
                    template: "<app-loader></app-loader>\n\n<app-parent-heading *ngIf=\"!linkId\" [startIndex]=\"3\" [genericHeading]=\"headings\" [showControl]=\"false\"></app-parent-heading>\n\n<div>\n  <div class=\"_flex-box _justify-content-space-between\">\n    <h4 class=\"marginTop\" style=\"flex:1\">{{'headings.performanceReport' | translate}}</h4>\n    <button *ngIf=\"!linkId\" mat-button color=\"primary\"\n      (click)=\"naviagteToRubrics()\">{{'headings.frameworkRubricView' | translate}}</button>\n      <app-share-link *ngIf=\"highLevelInsight?.isShareable && !linkId\" \n     [portalName]=\"portalName\"\n\n       [baseUrl]=\"baseUrl\" [componentId]=\"componentId\" [globalConfig]=\"globalConfig\" [publicSharedBaseUrl]=\"publicSharedBaseUrl\" [shareLinkApi]=\"shareLinkApi\"></app-share-link>\n  </div>\n  <div>\n    <mat-card>\n      <mat-list class=\"middle\">\n        <mat-list-item *ngFor=\"let item of highLevelInsight?.summary;let last = last;\">\n          <div class=\"_flex-box _full-width\">\n            <div style=\"flex:1\">\n              {{item?.title}}\n            </div>\n            <div style=\"flex:2\">\n              <b>{{item?.value}}</b>\n            </div>\n          </div>\n          <mat-divider *ngIf=\"!last\"></mat-divider>\n\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n  <div class=\"col-xs-12 _flex-box _flex-end _small-Top-Margin\" ></div>\n\n  <div class=\"col-xs-12 marginTop\" *ngFor=\"let section of highLevelInsight?.sections\">\n    <mat-card class=\"containerAdj\">\n      <mat-card-title class=\"title _capitalize\">\n        {{section?.heading}}\n      </mat-card-title>\n\n      <mat-divider *ngIf=\"section?.heading\"></mat-divider>\n      <mat-card-content>\n        <!-- <h3 class=\"_full-width textColor\" > Summary</h3> -->\n\n        <div class=\"_flex-box  _justify-content-center _margin-top _margin-bottom \">\n          <mat-list class=\"halfContainer\" *ngIf=\"section?.summary?.length\">\n            <mat-list-item role=\"listitem\">\n              <h5>Summary</h5>\n              <mat-divider></mat-divider>\n            </mat-list-item>\n            <mat-list-item *ngFor=\"let header of section?.summary; let last = last\" class=\"_flex-box\" role=\"listitem\">\n\n              <div class=\"_flex-box _full-width\">\n                <div style=\"flex:3\" class=\"smallFont\">\n                  {{header?.label}}\n                </div>\n                <div style=\"flex:1\" class=\"_flex-box _justify-content-center\">\n                  <b>{{header?.value}}</b>\n                </div>\n              </div>\n              <mat-divider *ngIf=\"!last\"></mat-divider>\n            </mat-list-item>\n          </mat-list>\n        </div>\n        <app-graph-table-chart [section]=\"section\"></app-graph-table-chart>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n\n</div>",
                    styles: [".paddingTop{padding:20px 0}.paddingBottom{padding:0 0 20px}.marginTop{margin:20px 0;padding:0}.height{height:350px;overflow:hidden}.profileHeight{padding:0;display:flex;align-items:center}.profileIcon{font-size:10vw}.profileContent{padding-left:20px}.flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.reportDashboard{padding:20px}.wrapper{padding:0 20px}.userIcon{height:200px}.userIcon:after{content:\"\";background:var(--light-grey-color);position:absolute;top:20%;right:0;height:60%;width:1px}.flexBox{display:flex;flex-direction:column;justify-content:flex-start}.subHeading{color:var(--grey-color);overflow:hidden;text-overflow:ellipsis}.dividerWidth{margin:0 20px;width:calc(100% - 40px)!important}._flexbox{display:flex;align-items:baseline}.horizontalLine{border-bottom:1px solid var(--light-grey-color);width:calc(100% - 20px)!important;padding:0 0 20px}.flex-direction-column{flex-direction:column;display:flex;overflow-x:auto}.flexWarp{flex-wrap:wrap}.middle{padding:0}.containerAdj{padding:15px!important}.title{font-size:18px}.textColor{color:var(--primary-color);text-transform:capitalize}.halfContainer{min-width:350px;width:50%;border:1px solid var(--light-grey-color)}.smallFont{font-size:14px}"]
                }] }
    ];
    /** @nocollapse */
    HighlevelEntityReportComponent.ctorParameters = function () { return [
        { type: ReportService },
        { type: UtilityService },
        { type: MatSnackBar },
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    HighlevelEntityReportComponent.propDecorators = {
        globalConfig: [{ type: Input }],
        reportConfig: [{ type: Input }],
        apiBaseUrl: [{ type: Input }]
    };
    return HighlevelEntityReportComponent;
}());
export { HighlevelEntityReportComponent };
if (false) {
    /** @type {?} */
    HighlevelEntityReportComponent.prototype.programId;
    /** @type {?} */
    HighlevelEntityReportComponent.prototype.entityId;
    /** @type {?} */
    HighlevelEntityReportComponent.prototype.globalConfig;
    /** @type {?} */
    HighlevelEntityReportComponent.prototype.reportConfig;
    /** @type {?} */
    HighlevelEntityReportComponent.prototype.apiBaseUrl;
    /** @type {?} */
    HighlevelEntityReportComponent.prototype.highLevelInsight;
    /** @type {?} */
    HighlevelEntityReportComponent.prototype.headings;
    /** @type {?} */
    HighlevelEntityReportComponent.prototype.shareLinkApi;
    /** @type {?} */
    HighlevelEntityReportComponent.prototype.publicSharedBaseUrl;
    /** @type {?} */
    HighlevelEntityReportComponent.prototype.linkId;
    /** @type {?} */
    HighlevelEntityReportComponent.prototype.componentId;
    /** @type {?} */
    HighlevelEntityReportComponent.prototype.baseUrl;
    /** @type {?} */
    HighlevelEntityReportComponent.prototype.portalName;
    /** @type {?} */
    HighlevelEntityReportComponent.prototype.solutionId;
    /**
     * @type {?}
     * @private
     */
    HighlevelEntityReportComponent.prototype.apiService;
    /**
     * @type {?}
     * @private
     */
    HighlevelEntityReportComponent.prototype.utility;
    /**
     * @type {?}
     * @private
     */
    HighlevelEntityReportComponent.prototype.snackBar;
    /**
     * @type {?}
     * @private
     */
    HighlevelEntityReportComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    HighlevelEntityReportComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxldmVsLWVudGl0eS1yZXBvcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3JlcG9ydC1tb2R1bGUvaGlnaGxldmVsLWVudGl0eS1yZXBvcnQvaGlnaGxldmVsLWVudGl0eS1yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUU1RjtJQW9CRSx3Q0FBb0IsVUFBeUIsRUFDbkMsT0FBdUIsRUFDdkIsUUFBcUIsRUFDckIsTUFBc0IsRUFDdEIsS0FBYTtRQUp2QixpQkF3QkM7UUF4Qm1CLGVBQVUsR0FBVixVQUFVLENBQWU7UUFDbkMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBWnZCLGFBQVEsR0FBRyxxQ0FBcUMsQ0FBQTtRQWM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0s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O0lBQzdCLGdEQUE4Qjs7Ozs7SUFDOUIsK0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBvcnRTZXJ2aWNlIH0gZnJvbSAnLi4vcmVwb3J0LXNlcnZpY2UvcmVwb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS1tb2R1bGUvc2VydmljZXMvdXRpbGl0eS1zZXJ2aWNlL3V0aWxpdHkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1oaWdobGV2ZWwtZW50aXR5LXJlcG9ydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9oaWdobGV2ZWwtZW50aXR5LXJlcG9ydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hpZ2hsZXZlbC1lbnRpdHktcmVwb3J0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGlnaGxldmVsRW50aXR5UmVwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJvZ3JhbUlkO1xuICBlbnRpdHlJZDtcbiAgQElucHV0KCkgZ2xvYmFsQ29uZmlnIDtcbiAgQElucHV0KCkgcmVwb3J0Q29uZmlnIDsgXG4gIEBJbnB1dCgpIGFwaUJhc2VVcmw7XG4gIGhpZ2hMZXZlbEluc2lnaHRcbiAgaGVhZGluZ3MgPSBcImhlYWRpbmdzLnJlcG9ydE1pbHRpcGxlRW50aXR5UmVwb3J0XCJcbiAgc2hhcmVMaW5rQXBpOiBhbnk7XG4gIHB1YmxpY1NoYXJlZEJhc2VVcmw6IGFueTtcbiAgbGlua0lkOiBhbnk7XG4gIGNvbXBvbmVudElkOiBhbnk7XG4gIGJhc2VVcmw6IGFueTtcbiAgcG9ydGFsTmFtZTogYW55O1xuICBzb2x1dGlvbklkOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogUmVwb3J0U2VydmljZSxcbiAgICBwcml2YXRlIHV0aWxpdHk6IFV0aWxpdHlTZXJ2aWNlLFxuICAgIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxuICAgIHByaXZhdGUgcm91dGVyOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlOiBSb3V0ZXJcbiAgKSB7XG4gICAgdGhpcy5wcm9ncmFtSWQgPSB0aGlzLnJvdXRlci5zbmFwc2hvdC5xdWVyeVBhcmFtTWFwLmdldCgncHJvZ3JhbUlkJyk7XG4gICAgdGhpcy5lbnRpdHlJZCA9IHRoaXMucm91dGVyLnNuYXBzaG90LnBhcmFtcy5lbnRpdHlJZDtcbiAgICB0aGlzLnNvbHV0aW9uSWQgPSB0aGlzLnJvdXRlci5zbmFwc2hvdC5xdWVyeVBhcmFtTWFwLmdldCAoJ3NvbHV0aW9uSWQnKTtcblxuICAgIHRoaXMubGlua0lkID0gdGhpcy5yb3V0ZXIuc25hcHNob3QucXVlcnlQYXJhbU1hcC5nZXQoJ2xpbmtJZCcpO1xuXG4gICAgdGhpcy5yb3V0ZXIuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmFwaUJhc2VVcmwgPSBkYXRhLmFwaWJhc2VVcmw7XG4gICAgICB0aGlzLnJlcG9ydENvbmZpZyA9IGRhdGEucmVwb3J0Q29uZmlnO1xuICAgICAgdGhpcy5zaGFyZUxpbmtBcGkgPSBkYXRhLnNoYXJlTGlua0FwaTtcbiAgICAgIHRoaXMucHVibGljU2hhcmVkQmFzZVVybCA9IGRhdGEucHVibGljU2hhcmVkQmFzZVVybDtcbiAgICAgIHRoaXMuZ2xvYmFsQ29uZmlnID0gZGF0YS5nbG9iYWxDb25maWc7XG4gICAgICB0aGlzLmNvbXBvbmVudElkID0gZGF0YS5jb21wb25lbnRJZDtcbiAgICAgIHRoaXMuYmFzZVVybD0gIGRhdGEuYmFzZVVybDtcbiAgICAgIHRoaXMucG9ydGFsTmFtZSA9IGRhdGEucG9ydGFsTmFtZTtcblxuXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnV0aWxpdHkubG9hZGVyU2hvdygpO1xuICAgIHRoaXMuZ2V0SGlnaEVudGl0eVJlcG9ydCgpO1xuICB9XG5cbiAgZ2V0SGlnaEVudGl0eVJlcG9ydCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0SGlnaEVudGl0eVJlcG9ydCh0aGlzLmFwaUJhc2VVcmwrdGhpcy5yZXBvcnRDb25maWcuaGlnaEVudGl0eVJlcG9ydCx0aGlzLnByb2dyYW1JZCwgdGhpcy5zb2x1dGlvbklkLCB0aGlzLmVudGl0eUlkLHRoaXMubGlua0lkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmhpZ2hMZXZlbEluc2lnaHQgPSBkYXRhWydyZXN1bHQnXTtcbiAgICAgIGNvbnN0IG5ld2dyYXBoRGF0YSA9IFtdXG5cbiAgICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmhpZ2hMZXZlbEluc2lnaHRbJ3NlY3Rpb25zJ11bMF1bJ3N1YlNlY3Rpb25zJ11bMF0uZGF0YSkge1xuICAgICAgICBsZXQgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpO1xuICAgICAgICBsZXQgdG90YWxDb3VudEFycmF5OiBBcnJheTxudW1iZXI+ID0gT2JqZWN0LnZhbHVlcyhuZXdEYXRhKTtcbiAgICAgICAgdG90YWxDb3VudEFycmF5LnNwbGljZSgwLCAxKTtcbiAgICAgICAgbGV0IHRvdGFsY291bnQ6IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgdG90YWxDb3VudEFycmF5KSB7XG4gICAgICAgICAgdG90YWxjb3VudCA9IGVsZW1lbnQgKyB0b3RhbGNvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG5ld0RhdGEpO1xuICAgICAgICBvYmpLZXlzLnNwbGljZSgwLCAxKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Ygb2JqS2V5cykge1xuICAgICAgICAgIG5ld0RhdGFba2V5XSA9IChkYXRhW2tleV0gLyB0b3RhbGNvdW50KSAqIDEwMDtcbiAgICAgICAgfVxuICAgICAgICBuZXdncmFwaERhdGEucHVzaChuZXdEYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGlnaExldmVsSW5zaWdodFsnc2VjdGlvbnMnXVswXVsnc3ViU2VjdGlvbnMnXVswXVsnbmV3R3JhcGhEYXRhJ10gPSBuZXdncmFwaERhdGE7XG4gICAgICB0aGlzLnV0aWxpdHkubG9hZGVySGlkZSgpO1xuICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgLy90aGlzLnNuYWNrQmFyLm9wZW4odGhpcy5nbG9iYWxDb25maWcuZXJyb3JNZXNzYWdlLCBcIk9rXCIsIHsgZHVyYXRpb246IDkwMDAgfSk7XG4gICAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJIaWRlKCk7XG4gICAgICB9XG4gICAgKVxuICB9XG4gIG5hdmlhZ3RlVG9SdWJyaWNzKCkge1xuICAgIHRoaXMucm91dGUubmF2aWdhdGUoW1wiL3JlcG9ydC9mcmFtZXdvcmstcnVicmljXCJdLCB7IHF1ZXJ5UGFyYW1zOiB7IGxpbms6IHRoaXMuaGlnaExldmVsSW5zaWdodC5mcmFtZXdvcmtVcmwubGluayB9IH0pO1xuICB9XG59XG4iXX0=