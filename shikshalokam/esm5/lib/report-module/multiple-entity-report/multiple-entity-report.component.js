/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ReportService } from '../report-service/report.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilityService } from '../../core-module/services/utility-service/utility.service';
var MultipleEntityRportComponent = /** @class */ (function () {
    function MultipleEntityRportComponent(reportService, utility, snackBar, route, router) {
        this.reportService = reportService;
        this.utility = utility;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.headings = "heading.reportMiltipleEntityReport";
        this.url = "PROGID01?entity=";
    }
    /**
     * @return {?}
     */
    MultipleEntityRportComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.utility.loaderShow();
        this.router.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.entityId = params['entity'];
            _this.programId = params['programId'];
            _this.blockName = params['blockName'];
            _this.linkId = params['linkId'];
            _this.solutionId = params['solutionId'];
        }));
        this.router.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.apiBaseUrl = data.apibaseUrl;
            _this.reportConfig = data.reportConfig;
            _this.componentId = data.componentId;
            _this.shareLinkApi = data.shareLinkApi;
            _this.publicSharedBaseUrl = data.publicSharedBaseUrl;
            _this.globalConfig = data.globalConfig;
            _this.baseUrl = data.baseUrl;
            _this.portalName = data.portalName;
        }));
        this.getMultiEntityReport();
    };
    /**
     * @return {?}
     */
    MultipleEntityRportComponent.prototype.getMultiEntityReport = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.reportService.getMultipleEntityReport(this.apiBaseUrl + this.reportConfig.multiEntityHighLevelReport, this.programId, this.solutionId, this.blockName, this.entityId, this.linkId).subscribe((/**
         * @param {?} successData
         * @return {?}
         */
        function (successData) {
            _this.mutipleEntity = successData['result'];
            _this.createNewData();
            console.log(_this.mutipleEntity);
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
    MultipleEntityRportComponent.prototype.createNewData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.mutipleEntity.sections.forEach((/**
         * @param {?} element
         * @param {?} sectionIndex
         * @return {?}
         */
        function (element, sectionIndex) {
            element.subSections.forEach((/**
             * @param {?} subSections
             * @param {?} subSectionsIndex
             * @return {?}
             */
            function (subSections, subSectionsIndex) {
                var e_1, _a, e_2, _b, e_3, _c;
                /** @type {?} */
                var newgraphData = [];
                try {
                    for (var _d = tslib_1.__values(_this.mutipleEntity['sections'][sectionIndex]['subSections'][subSectionsIndex].data), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var data = _e.value;
                        /** @type {?} */
                        var newData = Object.assign({}, data);
                        /** @type {?} */
                        var totalCountArray = Object.values(newData);
                        totalCountArray.splice(0, 1);
                        /** @type {?} */
                        var totalcount = 0;
                        try {
                            for (var totalCountArray_1 = tslib_1.__values(totalCountArray), totalCountArray_1_1 = totalCountArray_1.next(); !totalCountArray_1_1.done; totalCountArray_1_1 = totalCountArray_1.next()) {
                                var element_1 = totalCountArray_1_1.value;
                                totalcount = element_1 + totalcount;
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
                                newData[key] = (data[key] / totalcount) * 100;
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
                _this.mutipleEntity['sections'][sectionIndex]['subSections'][subSectionsIndex]['newGraphData'] = newgraphData;
            }));
        }));
    };
    /**
     * @return {?}
     */
    MultipleEntityRportComponent.prototype.naviagteToRubrics = /**
     * @return {?}
     */
    function () {
        this.route.navigate(["/report/framework-rubric"], { queryParams: { link: this.mutipleEntity.frameworkUrl.link } });
    };
    MultipleEntityRportComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-multiple-entity-report',
                    template: "<app-loader></app-loader>\n\n<app-parent-heading *ngIf=\"!linkId\" [startIndex]=\"3\" [genericHeading]=\"headings\" [showControl]=\"false\"></app-parent-heading>\n\n<div>\n  <div class=\"_flex-box \">\n    <h4 class=\"marginTop\" style=\"flex:1\">{{'headings.performanceReport' | translate}}</h4>\n    <button mat-button *ngIf=\"!linkId\" color=\"primary\"\n      (click)=\"naviagteToRubrics()\">{{'headings.frameworkRubricView' | translate}}</button>\n      <app-share-link *ngIf=\"mutipleEntity?.isShareable && !linkId\"  [portalName]=\"portalName\"[baseUrl]=\"baseUrl\" [componentId]=\"componentId\" [globalConfig]=\"globalConfig\" [publicSharedBaseUrl]=\"publicSharedBaseUrl\" [shareLinkApi]=\"shareLinkApi\"></app-share-link>\n\n  </div>\n  <div>\n    <mat-card>\n      <mat-list class=\"middle\">\n        <mat-list-item *ngFor=\"let item of mutipleEntity?.summary;let last = last;\">\n          <div class=\"_flex-box _full-width\">\n            <div style=\"flex:1\">\n              {{item?.label}}\n            </div>\n            <div style=\"flex:2\">\n              <b>{{item?.value}}</b>\n            </div>\n          </div>\n          <mat-divider *ngIf=\"!last\"></mat-divider>\n\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n  <!-- <div class=\"col-xs-12 _flex-box _flex-end _small-Top-Margin\" ><app-share-link></app-share-link></div> -->\n\n  <div class=\"col-xs-12 marginTop\" *ngFor=\"let section of mutipleEntity?.sections\">\n    <mat-card class=\"containerAdj\">\n      <mat-card-title class=\"title _capitalize\">\n        {{section?.heading}}\n      </mat-card-title>\n      <!-- <mat-card-subtitle>\n        \n      </mat-card-subtitle> -->\n      <mat-divider></mat-divider>\n      <mat-card-content>\n        <div class=\"_flex-box _margin-top _margin-bottom textColor\">\n          <span *ngFor=\"let header of section?.summary; let last = last\" class=\"_flex-box\">\n            {{header?.label}} : {{header?.value}}\n            <i class=\"material-icons\" *ngIf=\"!last\">\n              keyboard_arrow_right\n            </i>\n          </span>\n        </div>\n        <app-graph-table-chart [section]=\"section\"></app-graph-table-chart>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n\n</div>",
                    styles: [".paddingTop{padding:20px 0}.paddingBottom{padding:0 0 20px}.marginTop{margin:20px 0;padding:0}.height{height:350px;overflow:hidden}.profileHeight{padding:0;display:flex;align-items:center}.profileIcon{font-size:10vw}.profileContent{padding-left:20px}.flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.reportDashboard{padding:20px}.wrapper{padding:0 20px}.userIcon{height:200px}.userIcon:after{content:\"\";background:var(--light-grey-color);position:absolute;top:20%;right:0;height:60%;width:1px}.flexBox{display:flex;flex-direction:column;justify-content:flex-start}.subHeading{color:var(--grey-color);overflow:hidden;text-overflow:ellipsis}.dividerWidth{margin:0 20px;width:calc(100% - 40px)!important}._flexbox{display:flex;align-items:baseline}.horizontalLine{border-bottom:1px solid var(--light-grey-color);width:calc(100% - 20px)!important;padding:0 0 20px}.flex-direction-column{flex-direction:column;display:flex;overflow-x:auto}.flexWarp{flex-wrap:wrap}.middle{padding:0}.containerAdj{padding:15px!important}.title{font-size:18px}.textColor{color:var(--primary-color);text-transform:capitalize}"]
                }] }
    ];
    /** @nocollapse */
    MultipleEntityRportComponent.ctorParameters = function () { return [
        { type: ReportService },
        { type: UtilityService },
        { type: MatSnackBar },
        { type: Router },
        { type: ActivatedRoute }
    ]; };
    MultipleEntityRportComponent.propDecorators = {
        apiBaseUrl: [{ type: Input }],
        reportConfig: [{ type: Input }]
    };
    return MultipleEntityRportComponent;
}());
export { MultipleEntityRportComponent };
if (false) {
    /** @type {?} */
    MultipleEntityRportComponent.prototype.mutipleEntity;
    /** @type {?} */
    MultipleEntityRportComponent.prototype.programId;
    /** @type {?} */
    MultipleEntityRportComponent.prototype.headings;
    /** @type {?} */
    MultipleEntityRportComponent.prototype.entityId;
    /** @type {?} */
    MultipleEntityRportComponent.prototype.blockName;
    /** @type {?} */
    MultipleEntityRportComponent.prototype.apiBaseUrl;
    /** @type {?} */
    MultipleEntityRportComponent.prototype.reportConfig;
    /** @type {?} */
    MultipleEntityRportComponent.prototype.shareLinkApi;
    /** @type {?} */
    MultipleEntityRportComponent.prototype.publicSharedBaseUrl;
    /** @type {?} */
    MultipleEntityRportComponent.prototype.globalConfig;
    /** @type {?} */
    MultipleEntityRportComponent.prototype.linkId;
    /** @type {?} */
    MultipleEntityRportComponent.prototype.componentId;
    /** @type {?} */
    MultipleEntityRportComponent.prototype.baseUrl;
    /** @type {?} */
    MultipleEntityRportComponent.prototype.portalName;
    /** @type {?} */
    MultipleEntityRportComponent.prototype.solutionId;
    /** @type {?} */
    MultipleEntityRportComponent.prototype.url;
    /**
     * @type {?}
     * @private
     */
    MultipleEntityRportComponent.prototype.reportService;
    /**
     * @type {?}
     * @private
     */
    MultipleEntityRportComponent.prototype.utility;
    /**
     * @type {?}
     * @private
     */
    MultipleEntityRportComponent.prototype.snackBar;
    /**
     * @type {?}
     * @private
     */
    MultipleEntityRportComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    MultipleEntityRportComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGUtZW50aXR5LXJlcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvcmVwb3J0LW1vZHVsZS9tdWx0aXBsZS1lbnRpdHktcmVwb3J0L211bHRpcGxlLWVudGl0eS1yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUU1RjtJQXFCRSxzQ0FDVSxhQUE0QixFQUM1QixPQUF1QixFQUN2QixRQUFxQixFQUNyQixLQUFhLEVBQ2IsTUFBdUI7UUFKdkIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFsQmpDLGFBQVEsR0FBRyxvQ0FBb0MsQ0FBQztRQTBEaEQsUUFBRyxHQUFHLGtCQUFrQixDQUFBO0lBdkNwQixDQUFDOzs7O0lBRUwsK0NBQVE7OztJQUFSO1FBQUEsaUJBc0JDO1FBckJDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztRQUFFLFVBQUEsTUFBTTtZQUN2QyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyQyxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyQyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV6QyxDQUFDLEVBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDN0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN0QyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDcEMsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDcEQsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM1QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFcEMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBQ0QsMkRBQW9COzs7SUFBcEI7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLDBCQUEwQixFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLFdBQVc7WUFDdE0sS0FBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0MsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRWhDLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUIsQ0FBQzs7OztRQUFDLFVBQUEsS0FBSztZQUNMLCtFQUErRTtZQUMvRSxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRTVCLENBQUMsRUFDQSxDQUFBO0lBQ0gsQ0FBQzs7OztJQUVELG9EQUFhOzs7SUFBYjtRQUFBLGlCQTRCQztRQXpCQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7OztRQUFDLFVBQUMsT0FBTyxFQUFFLFlBQVk7WUFDeEQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7OztZQUFDLFVBQUMsV0FBVyxFQUFFLGdCQUFnQjs7O29CQUVwRCxZQUFZLEdBQUcsRUFBRTs7b0JBQ3JCLEtBQW1CLElBQUEsS0FBQSxpQkFBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFBLGdCQUFBLDRCQUFFO3dCQUFsRyxJQUFNLElBQUksV0FBQTs7NEJBQ1QsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQzs7NEJBQ2pDLGVBQWUsR0FBa0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7d0JBQzNELGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs0QkFDekIsVUFBVSxHQUFXLENBQUM7OzRCQUMxQixLQUFvQixJQUFBLG9CQUFBLGlCQUFBLGVBQWUsQ0FBQSxnREFBQSw2RUFBRTtnQ0FBaEMsSUFBSSxTQUFPLDRCQUFBO2dDQUNkLFVBQVUsR0FBRyxTQUFPLEdBQUcsVUFBVSxDQUFDOzZCQUNuQzs7Ozs7Ozs7Ozs0QkFFSyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ3BDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs0QkFDckIsS0FBa0IsSUFBQSxZQUFBLGlCQUFBLE9BQU8sQ0FBQSxnQ0FBQSxxREFBRTtnQ0FBdEIsSUFBTSxHQUFHLG9CQUFBO2dDQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUM7NkJBQy9DOzs7Ozs7Ozs7d0JBQ0QsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDNUI7Ozs7Ozs7OztnQkFDRCxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsWUFBWSxDQUFDO1lBQy9HLENBQUMsRUFBQyxDQUFDO1FBRUwsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7O0lBQ0Qsd0RBQWlCOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JILENBQUM7O2dCQWxHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMseXVFQUFzRDs7aUJBRXZEOzs7O2dCQVRRLGFBQWE7Z0JBR2IsY0FBYztnQkFGZCxXQUFXO2dCQUNYLE1BQU07Z0JBQUUsY0FBYzs7OzZCQWM1QixLQUFLOytCQUNMLEtBQUs7O0lBdUZSLG1DQUFDO0NBQUEsQUFuR0QsSUFtR0M7U0E5RlksNEJBQTRCOzs7SUFDdkMscURBQWM7O0lBQ2QsaURBQVc7O0lBQ1gsZ0RBQWdEOztJQUNoRCxnREFBVTs7SUFDVixpREFBZTs7SUFDZixrREFBd0I7O0lBQ3hCLG9EQUEwQjs7SUFDMUIsb0RBQWtCOztJQUNsQiwyREFBeUI7O0lBQ3pCLG9EQUFrQjs7SUFDbEIsOENBQVk7O0lBQ1osbURBQWlCOztJQUNqQiwrQ0FBYTs7SUFDYixrREFBZ0I7O0lBQ2hCLGtEQUFnQjs7SUE4Q2hCLDJDQUF3Qjs7Ozs7SUE1Q3RCLHFEQUFvQzs7Ozs7SUFDcEMsK0NBQStCOzs7OztJQUMvQixnREFBNkI7Ozs7O0lBQzdCLDZDQUFxQjs7Ozs7SUFDckIsOENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBvcnRTZXJ2aWNlIH0gZnJvbSAnLi4vcmVwb3J0LXNlcnZpY2UvcmVwb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS1tb2R1bGUvc2VydmljZXMvdXRpbGl0eS1zZXJ2aWNlL3V0aWxpdHkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tdWx0aXBsZS1lbnRpdHktcmVwb3J0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL211bHRpcGxlLWVudGl0eS1yZXBvcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tdWx0aXBsZS1lbnRpdHktcmVwb3J0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVFbnRpdHlScG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG11dGlwbGVFbnRpdHk7XG4gIHByb2dyYW1JZCA7XG4gIGhlYWRpbmdzID0gXCJoZWFkaW5nLnJlcG9ydE1pbHRpcGxlRW50aXR5UmVwb3J0XCI7XG4gIGVudGl0eUlkIDtcbiAgYmxvY2tOYW1lOiBhbnk7XG4gIEBJbnB1dCgpYXBpQmFzZVVybDogYW55O1xuICBASW5wdXQoKXJlcG9ydENvbmZpZzogYW55O1xuICBzaGFyZUxpbmtBcGk6IGFueTtcbiAgcHVibGljU2hhcmVkQmFzZVVybDogYW55O1xuICBnbG9iYWxDb25maWc6IGFueTtcbiAgbGlua0lkOiBhbnk7XG4gIGNvbXBvbmVudElkOiBhbnk7XG4gIGJhc2VVcmw6IGFueTtcbiAgcG9ydGFsTmFtZTogYW55O1xuICBzb2x1dGlvbklkOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVwb3J0U2VydmljZTogUmVwb3J0U2VydmljZSxcbiAgICBwcml2YXRlIHV0aWxpdHk6IFV0aWxpdHlTZXJ2aWNlLFxuICAgIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxuICAgIHByaXZhdGUgcm91dGU6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlciA6IEFjdGl2YXRlZFJvdXRlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51dGlsaXR5LmxvYWRlclNob3coKTtcbiAgICB0aGlzLnJvdXRlci5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoIHBhcmFtcyA9PntcbiAgICAgIHRoaXMuZW50aXR5SWQgPSBwYXJhbXNbJ2VudGl0eSddO1xuICAgICAgdGhpcy5wcm9ncmFtSWQgPSBwYXJhbXNbJ3Byb2dyYW1JZCddO1xuICAgICAgdGhpcy5ibG9ja05hbWUgPSBwYXJhbXNbJ2Jsb2NrTmFtZSddO1xuICAgICAgdGhpcy5saW5rSWQgPSBwYXJhbXNbJ2xpbmtJZCddO1xuICAgICAgdGhpcy5zb2x1dGlvbklkID0gcGFyYW1zWydzb2x1dGlvbklkJ107XG5cbiAgICB9KVxuICAgIHRoaXMucm91dGVyLmRhdGEuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5hcGlCYXNlVXJsID0gZGF0YS5hcGliYXNlVXJsO1xuICAgICAgdGhpcy5yZXBvcnRDb25maWcgPSBkYXRhLnJlcG9ydENvbmZpZztcbiAgICAgIHRoaXMuY29tcG9uZW50SWQgPSBkYXRhLmNvbXBvbmVudElkO1xuICAgICAgdGhpcy5zaGFyZUxpbmtBcGkgPSBkYXRhLnNoYXJlTGlua0FwaTtcbiAgICAgIHRoaXMucHVibGljU2hhcmVkQmFzZVVybCA9IGRhdGEucHVibGljU2hhcmVkQmFzZVVybDtcbiAgICAgIHRoaXMuZ2xvYmFsQ29uZmlnID0gZGF0YS5nbG9iYWxDb25maWc7XG4gICAgICB0aGlzLmJhc2VVcmw9ICBkYXRhLmJhc2VVcmw7XG4gICAgICB0aGlzLnBvcnRhbE5hbWUgPSBkYXRhLnBvcnRhbE5hbWU7XG5cbiAgICB9KTtcbiAgICB0aGlzLmdldE11bHRpRW50aXR5UmVwb3J0KCk7XG4gIH1cbiAgZ2V0TXVsdGlFbnRpdHlSZXBvcnQoKSB7XG4gICAgdGhpcy5yZXBvcnRTZXJ2aWNlLmdldE11bHRpcGxlRW50aXR5UmVwb3J0KHRoaXMuYXBpQmFzZVVybCt0aGlzLnJlcG9ydENvbmZpZy5tdWx0aUVudGl0eUhpZ2hMZXZlbFJlcG9ydCx0aGlzLnByb2dyYW1JZCwgdGhpcy5zb2x1dGlvbklkLHRoaXMuYmxvY2tOYW1lLCB0aGlzLmVudGl0eUlkLHRoaXMubGlua0lkKS5zdWJzY3JpYmUoc3VjY2Vzc0RhdGEgPT4ge1xuICAgICAgdGhpcy5tdXRpcGxlRW50aXR5ID0gc3VjY2Vzc0RhdGFbJ3Jlc3VsdCddO1xuICAgICAgdGhpcy5jcmVhdGVOZXdEYXRhKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm11dGlwbGVFbnRpdHkpO1xuXG4gICAgICB0aGlzLnV0aWxpdHkubG9hZGVySGlkZSgpO1xuICAgIH0sZXJyb3IgPT4ge1xuICAgICAgLy90aGlzLnNuYWNrQmFyLm9wZW4odGhpcy5nbG9iYWxDb25maWcuZXJyb3JNZXNzYWdlLCBcIk9rXCIsIHsgZHVyYXRpb246IDkwMDAgfSk7XG4gICAgICB0aGlzLnV0aWxpdHkubG9hZGVySGlkZSgpO1xuXG4gICAgfVxuICAgIClcbiAgfVxuICB1cmwgPSBcIlBST0dJRDAxP2VudGl0eT1cIlxuICBjcmVhdGVOZXdEYXRhKCkge1xuXG5cbiAgICB0aGlzLm11dGlwbGVFbnRpdHkuc2VjdGlvbnMuZm9yRWFjaCgoZWxlbWVudCwgc2VjdGlvbkluZGV4KSA9PiB7XG4gICAgICBlbGVtZW50LnN1YlNlY3Rpb25zLmZvckVhY2goKHN1YlNlY3Rpb25zLCBzdWJTZWN0aW9uc0luZGV4KSA9PiB7XG5cbiAgICAgICAgbGV0IG5ld2dyYXBoRGF0YSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5tdXRpcGxlRW50aXR5WydzZWN0aW9ucyddW3NlY3Rpb25JbmRleF1bJ3N1YlNlY3Rpb25zJ11bc3ViU2VjdGlvbnNJbmRleF0uZGF0YSkge1xuICAgICAgICAgIGxldCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSk7XG4gICAgICAgICAgbGV0IHRvdGFsQ291bnRBcnJheTogQXJyYXk8bnVtYmVyPiA9IE9iamVjdC52YWx1ZXMobmV3RGF0YSk7XG4gICAgICAgICAgdG90YWxDb3VudEFycmF5LnNwbGljZSgwLCAxKTtcbiAgICAgICAgICBsZXQgdG90YWxjb3VudDogbnVtYmVyID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIHRvdGFsQ291bnRBcnJheSkge1xuICAgICAgICAgICAgdG90YWxjb3VudCA9IGVsZW1lbnQgKyB0b3RhbGNvdW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG9iaktleXMgPSBPYmplY3Qua2V5cyhuZXdEYXRhKTtcbiAgICAgICAgICBvYmpLZXlzLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBvYmpLZXlzKSB7XG4gICAgICAgICAgICBuZXdEYXRhW2tleV0gPSAoZGF0YVtrZXldIC8gdG90YWxjb3VudCkgKiAxMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld2dyYXBoRGF0YS5wdXNoKG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubXV0aXBsZUVudGl0eVsnc2VjdGlvbnMnXVtzZWN0aW9uSW5kZXhdWydzdWJTZWN0aW9ucyddW3N1YlNlY3Rpb25zSW5kZXhdWyduZXdHcmFwaERhdGEnXSA9IG5ld2dyYXBoRGF0YTtcbiAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgfVxuICBuYXZpYWd0ZVRvUnVicmljcygpIHtcbiAgICB0aGlzLnJvdXRlLm5hdmlnYXRlKFtcIi9yZXBvcnQvZnJhbWV3b3JrLXJ1YnJpY1wiXSwgeyBxdWVyeVBhcmFtczogeyBsaW5rOiB0aGlzLm11dGlwbGVFbnRpdHkuZnJhbWV3b3JrVXJsLmxpbmsgfSB9KTtcbiAgfVxufVxuIl19