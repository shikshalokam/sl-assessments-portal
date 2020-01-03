/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReportService } from '../report-service/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UtilityService } from '../../core-module/services/utility-service/utility.service';
export class HighlevelEntityReportComponent {
    /**
     * @param {?} apiService
     * @param {?} utility
     * @param {?} snackBar
     * @param {?} router
     * @param {?} route
     */
    constructor(apiService, utility, snackBar, router, route) {
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
        data => {
            this.apiBaseUrl = data.apibaseUrl;
            this.reportConfig = data.reportConfig;
            this.shareLinkApi = data.shareLinkApi;
            this.publicSharedBaseUrl = data.publicSharedBaseUrl;
            this.globalConfig = data.globalConfig;
            this.componentId = data.componentId;
            this.baseUrl = data.baseUrl;
            this.portalName = data.portalName;
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.utility.loaderShow();
        this.getHighEntityReport();
    }
    /**
     * @return {?}
     */
    getHighEntityReport() {
        this.apiService.getHighEntityReport(this.apiBaseUrl + this.reportConfig.highEntityReport, this.programId, this.solutionId, this.entityId, this.linkId).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.highLevelInsight = data['result'];
            /** @type {?} */
            const newgraphData = [];
            for (const data of this.highLevelInsight['sections'][0]['subSections'][0].data) {
                /** @type {?} */
                let newData = Object.assign({}, data);
                /** @type {?} */
                let totalCountArray = Object.values(newData);
                totalCountArray.splice(0, 1);
                /** @type {?} */
                let totalcount = 0;
                for (let element of totalCountArray) {
                    totalcount = element + totalcount;
                }
                /** @type {?} */
                const objKeys = Object.keys(newData);
                objKeys.splice(0, 1);
                for (const key of objKeys) {
                    newData[key] = (data[key] / totalcount) * 100;
                }
                newgraphData.push(newData);
            }
            this.highLevelInsight['sections'][0]['subSections'][0]['newGraphData'] = newgraphData;
            this.utility.loaderHide();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            //this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
            this.utility.loaderHide();
        }));
    }
    /**
     * @return {?}
     */
    naviagteToRubrics() {
        this.route.navigate(["/report/framework-rubric"], { queryParams: { link: this.highLevelInsight.frameworkUrl.link } });
    }
}
HighlevelEntityReportComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-highlevel-entity-report',
                template: "<app-loader></app-loader>\n\n<app-parent-heading *ngIf=\"!linkId\" [startIndex]=\"3\" [genericHeading]=\"headings\" [showControl]=\"false\"></app-parent-heading>\n\n<div>\n  <div class=\"_flex-box _justify-content-space-between\">\n    <h4 class=\"marginTop\" style=\"flex:1\">{{'headings.performanceReport' | translate}}</h4>\n    <button *ngIf=\"!linkId\" mat-button color=\"primary\"\n      (click)=\"naviagteToRubrics()\">{{'headings.frameworkRubricView' | translate}}</button>\n      <app-share-link *ngIf=\"highLevelInsight?.isShareable && !linkId\" \n     [portalName]=\"portalName\"\n\n       [baseUrl]=\"baseUrl\" [componentId]=\"componentId\" [globalConfig]=\"globalConfig\" [publicSharedBaseUrl]=\"publicSharedBaseUrl\" [shareLinkApi]=\"shareLinkApi\"></app-share-link>\n  </div>\n  <div>\n    <mat-card>\n      <mat-list class=\"middle\">\n        <mat-list-item *ngFor=\"let item of highLevelInsight?.summary;let last = last;\">\n          <div class=\"_flex-box _full-width\">\n            <div style=\"flex:1\">\n              {{item?.title}}\n            </div>\n            <div style=\"flex:2\">\n              <b>{{item?.value}}</b>\n            </div>\n          </div>\n          <mat-divider *ngIf=\"!last\"></mat-divider>\n\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n  <div class=\"col-xs-12 _flex-box _flex-end _small-Top-Margin\" ></div>\n\n  <div class=\"col-xs-12 marginTop\" *ngFor=\"let section of highLevelInsight?.sections\">\n    <mat-card class=\"containerAdj\">\n      <mat-card-title class=\"title _capitalize\">\n        {{section?.heading}}\n      </mat-card-title>\n\n      <mat-divider *ngIf=\"section?.heading\"></mat-divider>\n      <mat-card-content>\n        <!-- <h3 class=\"_full-width textColor\" > Summary</h3> -->\n\n        <div class=\"_flex-box  _justify-content-center _margin-top _margin-bottom \">\n          <mat-list class=\"halfContainer\" *ngIf=\"section?.summary?.length\">\n            <mat-list-item role=\"listitem\">\n              <h5>Summary</h5>\n              <mat-divider></mat-divider>\n            </mat-list-item>\n            <mat-list-item *ngFor=\"let header of section?.summary; let last = last\" class=\"_flex-box\" role=\"listitem\">\n\n              <div class=\"_flex-box _full-width\">\n                <div style=\"flex:3\" class=\"smallFont\">\n                  {{header?.label}}\n                </div>\n                <div style=\"flex:1\" class=\"_flex-box _justify-content-center\">\n                  <b>{{header?.value}}</b>\n                </div>\n              </div>\n              <mat-divider *ngIf=\"!last\"></mat-divider>\n            </mat-list-item>\n          </mat-list>\n        </div>\n        <app-graph-table-chart [section]=\"section\"></app-graph-table-chart>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n\n</div>",
                styles: [".paddingTop{padding:20px 0}.paddingBottom{padding:0 0 20px}.marginTop{margin:20px 0;padding:0}.height{height:350px;overflow:hidden}.profileHeight{padding:0;display:flex;align-items:center}.profileIcon{font-size:10vw}.profileContent{padding-left:20px}.flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.reportDashboard{padding:20px}.wrapper{padding:0 20px}.userIcon{height:200px}.userIcon:after{content:\"\";background:var(--light-grey-color);position:absolute;top:20%;right:0;height:60%;width:1px}.flexBox{display:flex;flex-direction:column;justify-content:flex-start}.subHeading{color:var(--grey-color);overflow:hidden;text-overflow:ellipsis}.dividerWidth{margin:0 20px;width:calc(100% - 40px)!important}._flexbox{display:flex;align-items:baseline}.horizontalLine{border-bottom:1px solid var(--light-grey-color);width:calc(100% - 20px)!important;padding:0 0 20px}.flex-direction-column{flex-direction:column;display:flex;overflow-x:auto}.flexWarp{flex-wrap:wrap}.middle{padding:0}.containerAdj{padding:15px!important}.title{font-size:18px}.textColor{color:var(--primary-color);text-transform:capitalize}.halfContainer{min-width:350px;width:50%;border:1px solid var(--light-grey-color)}.smallFont{font-size:14px}"]
            }] }
];
/** @nocollapse */
HighlevelEntityReportComponent.ctorParameters = () => [
    { type: ReportService },
    { type: UtilityService },
    { type: MatSnackBar },
    { type: ActivatedRoute },
    { type: Router }
];
HighlevelEntityReportComponent.propDecorators = {
    globalConfig: [{ type: Input }],
    reportConfig: [{ type: Input }],
    apiBaseUrl: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxldmVsLWVudGl0eS1yZXBvcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3JlcG9ydC1tb2R1bGUvaGlnaGxldmVsLWVudGl0eS1yZXBvcnQvaGlnaGxldmVsLWVudGl0eS1yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBTzVGLE1BQU0sT0FBTyw4QkFBOEI7Ozs7Ozs7O0lBZXpDLFlBQW9CLFVBQXlCLEVBQ25DLE9BQXVCLEVBQ3ZCLFFBQXFCLEVBQ3JCLE1BQXNCLEVBQ3RCLEtBQWE7UUFKSCxlQUFVLEdBQVYsVUFBVSxDQUFlO1FBQ25DLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQVp2QixhQUFRLEdBQUcscUNBQXFDLENBQUE7UUFjOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FB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QyxVQUFVLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7O1FBQ0MsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNSLCtFQUErRTtZQUMvRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzVCLENBQUMsRUFDRixDQUFBO0lBQ0gsQ0FBQzs7OztJQUNELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsMEJBQTBCLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4SCxDQUFDOzs7WUFuRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLDZ6RkFBdUQ7O2FBRXhEOzs7O1lBVFEsYUFBYTtZQUdiLGNBQWM7WUFEZCxXQUFXO1lBRFgsY0FBYztZQUFFLE1BQU07OzsyQkFZNUIsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7Ozs7SUFKTixtREFBVTs7SUFDVixrREFBUzs7SUFDVCxzREFBdUI7O0lBQ3ZCLHNEQUF1Qjs7SUFDdkIsb0RBQW9COztJQUNwQiwwREFBZ0I7O0lBQ2hCLGtEQUFnRDs7SUFDaEQsc0RBQWtCOztJQUNsQiw2REFBeUI7O0lBQ3pCLGdEQUFZOztJQUNaLHFEQUFpQjs7SUFDakIsaURBQWE7O0lBQ2Isb0RBQWdCOztJQUNoQixvREFBZ0I7Ozs7O0lBQ0osb0RBQWlDOzs7OztJQUMzQyxpREFBK0I7Ozs7O0lBQy9CLGtEQUE2Qjs7Ozs7SUFDN0IsZ0RBQThCOzs7OztJQUM5QiwrQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcG9ydFNlcnZpY2UgfSBmcm9tICcuLi9yZXBvcnQtc2VydmljZS9yZXBvcnQuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlLW1vZHVsZS9zZXJ2aWNlcy91dGlsaXR5LXNlcnZpY2UvdXRpbGl0eS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhpZ2hsZXZlbC1lbnRpdHktcmVwb3J0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hpZ2hsZXZlbC1lbnRpdHktcmVwb3J0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGlnaGxldmVsLWVudGl0eS1yZXBvcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIaWdobGV2ZWxFbnRpdHlSZXBvcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcm9ncmFtSWQ7XG4gIGVudGl0eUlkO1xuICBASW5wdXQoKSBnbG9iYWxDb25maWcgO1xuICBASW5wdXQoKSByZXBvcnRDb25maWcgOyBcbiAgQElucHV0KCkgYXBpQmFzZVVybDtcbiAgaGlnaExldmVsSW5zaWdodFxuICBoZWFkaW5ncyA9IFwiaGVhZGluZ3MucmVwb3J0TWlsdGlwbGVFbnRpdHlSZXBvcnRcIlxuICBzaGFyZUxpbmtBcGk6IGFueTtcbiAgcHVibGljU2hhcmVkQmFzZVVybDogYW55O1xuICBsaW5rSWQ6IGFueTtcbiAgY29tcG9uZW50SWQ6IGFueTtcbiAgYmFzZVVybDogYW55O1xuICBwb3J0YWxOYW1lOiBhbnk7XG4gIHNvbHV0aW9uSWQ6IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBSZXBvcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXRpbGl0eTogVXRpbGl0eVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGU6IFJvdXRlclxuICApIHtcbiAgICB0aGlzLnByb2dyYW1JZCA9IHRoaXMucm91dGVyLnNuYXBzaG90LnF1ZXJ5UGFyYW1NYXAuZ2V0KCdwcm9ncmFtSWQnKTtcbiAgICB0aGlzLmVudGl0eUlkID0gdGhpcy5yb3V0ZXIuc25hcHNob3QucGFyYW1zLmVudGl0eUlkO1xuICAgIHRoaXMuc29sdXRpb25JZCA9IHRoaXMucm91dGVyLnNuYXBzaG90LnF1ZXJ5UGFyYW1NYXAuZ2V0ICgnc29sdXRpb25JZCcpO1xuXG4gICAgdGhpcy5saW5rSWQgPSB0aGlzLnJvdXRlci5zbmFwc2hvdC5xdWVyeVBhcmFtTWFwLmdldCgnbGlua0lkJyk7XG5cbiAgICB0aGlzLnJvdXRlci5kYXRhLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuYXBpQmFzZVVybCA9IGRhdGEuYXBpYmFzZVVybDtcbiAgICAgIHRoaXMucmVwb3J0Q29uZmlnID0gZGF0YS5yZXBvcnRDb25maWc7XG4gICAgICB0aGlzLnNoYXJlTGlua0FwaSA9IGRhdGEuc2hhcmVMaW5rQXBpO1xuICAgICAgdGhpcy5wdWJsaWNTaGFyZWRCYXNlVXJsID0gZGF0YS5wdWJsaWNTaGFyZWRCYXNlVXJsO1xuICAgICAgdGhpcy5nbG9iYWxDb25maWcgPSBkYXRhLmdsb2JhbENvbmZpZztcbiAgICAgIHRoaXMuY29tcG9uZW50SWQgPSBkYXRhLmNvbXBvbmVudElkO1xuICAgICAgdGhpcy5iYXNlVXJsPSAgZGF0YS5iYXNlVXJsO1xuICAgICAgdGhpcy5wb3J0YWxOYW1lID0gZGF0YS5wb3J0YWxOYW1lO1xuXG5cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXRpbGl0eS5sb2FkZXJTaG93KCk7XG4gICAgdGhpcy5nZXRIaWdoRW50aXR5UmVwb3J0KCk7XG4gIH1cblxuICBnZXRIaWdoRW50aXR5UmVwb3J0KCkge1xuICAgIHRoaXMuYXBpU2VydmljZS5nZXRIaWdoRW50aXR5UmVwb3J0KHRoaXMuYXBpQmFzZVVybCt0aGlzLnJlcG9ydENvbmZpZy5oaWdoRW50aXR5UmVwb3J0LHRoaXMucHJvZ3JhbUlkLCB0aGlzLnNvbHV0aW9uSWQsIHRoaXMuZW50aXR5SWQsdGhpcy5saW5rSWQpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuaGlnaExldmVsSW5zaWdodCA9IGRhdGFbJ3Jlc3VsdCddO1xuICAgICAgY29uc3QgbmV3Z3JhcGhEYXRhID0gW11cblxuICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuaGlnaExldmVsSW5zaWdodFsnc2VjdGlvbnMnXVswXVsnc3ViU2VjdGlvbnMnXVswXS5kYXRhKSB7XG4gICAgICAgIGxldCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSk7XG4gICAgICAgIGxldCB0b3RhbENvdW50QXJyYXk6IEFycmF5PG51bWJlcj4gPSBPYmplY3QudmFsdWVzKG5ld0RhdGEpO1xuICAgICAgICB0b3RhbENvdW50QXJyYXkuc3BsaWNlKDAsIDEpO1xuICAgICAgICBsZXQgdG90YWxjb3VudDogbnVtYmVyID0gMDtcbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiB0b3RhbENvdW50QXJyYXkpIHtcbiAgICAgICAgICB0b3RhbGNvdW50ID0gZWxlbWVudCArIHRvdGFsY291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvYmpLZXlzID0gT2JqZWN0LmtleXMobmV3RGF0YSk7XG4gICAgICAgIG9iaktleXMuc3BsaWNlKDAsIDEpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBvYmpLZXlzKSB7XG4gICAgICAgICAgbmV3RGF0YVtrZXldID0gKGRhdGFba2V5XSAvIHRvdGFsY291bnQpICogMTAwO1xuICAgICAgICB9XG4gICAgICAgIG5ld2dyYXBoRGF0YS5wdXNoKG5ld0RhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5oaWdoTGV2ZWxJbnNpZ2h0WydzZWN0aW9ucyddWzBdWydzdWJTZWN0aW9ucyddWzBdWyduZXdHcmFwaERhdGEnXSA9IG5ld2dyYXBoRGF0YTtcbiAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJIaWRlKCk7XG4gICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAvL3RoaXMuc25hY2tCYXIub3Blbih0aGlzLmdsb2JhbENvbmZpZy5lcnJvck1lc3NhZ2UsIFwiT2tcIiwgeyBkdXJhdGlvbjogOTAwMCB9KTtcbiAgICAgICAgdGhpcy51dGlsaXR5LmxvYWRlckhpZGUoKTtcbiAgICAgIH1cbiAgICApXG4gIH1cbiAgbmF2aWFndGVUb1J1YnJpY3MoKSB7XG4gICAgdGhpcy5yb3V0ZS5uYXZpZ2F0ZShbXCIvcmVwb3J0L2ZyYW1ld29yay1ydWJyaWNcIl0sIHsgcXVlcnlQYXJhbXM6IHsgbGluazogdGhpcy5oaWdoTGV2ZWxJbnNpZ2h0LmZyYW1ld29ya1VybC5saW5rIH0gfSk7XG4gIH1cbn1cbiJdfQ==