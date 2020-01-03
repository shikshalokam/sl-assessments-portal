/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReportService } from '../report-service/report.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilityService } from '../../core-module/services/utility-service/utility.service';
var MultipleEntityDrilldownReportComponent = /** @class */ (function () {
    function MultipleEntityDrilldownReportComponent(reportService, utility, snackBar, route, router) {
        this.reportService = reportService;
        this.utility = utility;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.headings = "heading.reportMultilpeEntityDrillldownReport";
        this.url = "PROGID01?entity=";
    }
    /**
     * @return {?}
     */
    MultipleEntityDrilldownReportComponent.prototype.ngOnInit = /**
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
            _this.shareLinkApi = data.shareLinkApi;
            _this.publicSharedBaseUrl = data.publicSharedBaseUrl;
            _this.globalConfig = data.globalConfig;
            _this.componentId = data.componentId;
            _this.baseUrl = data.baseUrl;
            _this.portalName = data.portalName;
        }));
        this.getMultiEntityDrillReport();
    };
    /**
     * @return {?}
     */
    MultipleEntityDrilldownReportComponent.prototype.getMultiEntityDrillReport = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.reportService.getMultipleEntityDrilldownReport(this.apiBaseUrl + this.reportConfig.multiEntityDrillDownLevelReport, this.programId, this.solutionId, this.blockName, this.entityId, this.linkId).subscribe((/**
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
    MultipleEntityDrilldownReportComponent.prototype.createNewData = /**
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
                _this.mutipleEntity.sections[sectionIndex].subSections[subSectionsIndex]['tableScroll'] = true;
                // this.mutipleEntity.sections[sectionIndex].subSections[subSectionsIndex]['graphData'].chartType = 'LineChart';
                // let newgraphData = [];
                // for (const data of this.mutipleEntity['sections'][sectionIndex]['subSections'][subSectionsIndex].data) {
                //   let newData = Object.assign({}, data);
                //   let totalCountArray: Array<number> = Object.values(newData);
                //   totalCountArray.splice(0, 1);
                //   let totalcount: number = 0;
                //   for (let element of totalCountArray) {
                //     totalcount = element + totalcount;
                //   }
                //   const objKeys = Object.keys(newData);
                //   objKeys.splice(0, 1);
                //   for (const key of objKeys) {
                //     newData[key] = (data[key] / totalcount) * 100;
                //   }
                //   newgraphData.push(newData);
                // }
                // this.mutipleEntity['sections'][sectionIndex]['subSections'][subSectionsIndex]['newGraphData'] = newgraphData;
            }));
        }));
    };
    /**
     * @return {?}
     */
    MultipleEntityDrilldownReportComponent.prototype.naviagteToRubrics = /**
     * @return {?}
     */
    function () {
        this.route.navigate(["/report/framework-rubric"], { queryParams: { link: this.mutipleEntity.frameworkUrl.link } });
    };
    MultipleEntityDrilldownReportComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-multiple-entity-drilldown-report',
                    template: "<app-loader></app-loader>\n\n<app-parent-heading *ngIf=\"!linkId\" [startIndex]=\"3\" [genericHeading]=\"headings\" [showControl]=\"false\"></app-parent-heading>\n\n<div>\n  <div class=\"_flex-box _full-width\">\n    <h4 class=\"marginTop\" style=\"flex:1\">{{mutipleEntity?.heading}}</h4>\n    <button mat-button color=\"primary\" *ngIf=\"!linkId\" (click)=\"naviagteToRubrics()\">{{'headings.frameworkRubricView' | translate}}\n    </button>\n    <app-share-link *ngIf=\"mutipleEntity?.isShareable && !linkId\"[portalName]=\"portalName\" [baseUrl]=\"baseUrl\" [componentId]=\"componentId\" [globalConfig]=\"globalConfig\" [publicSharedBaseUrl]=\"publicSharedBaseUrl\" [shareLinkApi]=\"shareLinkApi\"></app-share-link>\n  </div>\n  <div>\n    <mat-card>\n      <mat-list class=\"middle\">\n        <mat-list-item *ngFor=\"let item of mutipleEntity?.summary;let last = last;\">\n          <div class=\"_flex-box _full-width\">\n            <div style=\"flex:1\">\n              {{item?.label}}\n            </div>\n            <div style=\"flex:2\">\n              <b>{{item?.value}}</b>\n            </div>\n          </div>\n          <mat-divider *ngIf=\"!last\"></mat-divider>\n\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n  <!-- <div class=\"col-xs-12 _flex-box _flex-end _small-Top-Margin\" ><app-share-link></app-share-link></div> -->\n\n  <div class=\"col-xs-12 marginTop\" *ngFor=\"let section of mutipleEntity?.sections\">\n    <mat-card class=\"containerAdj\">\n      <mat-card-title class=\"title _capitalize\">\n        {{section?.heading}}\n      </mat-card-title>\n      <!-- <mat-card-subtitle>\n        \n      </mat-card-subtitle> -->\n      <mat-divider></mat-divider>\n      <mat-card-content>\n        <div class=\"_flex-box _margin-top _margin-bottom textColor\">\n          <span *ngFor=\"let header of section?.summary; let last = last\" class=\"_flex-box\">\n            {{header?.label}} : {{header?.value}}\n            <i class=\"material-icons\" *ngIf=\"!last\">\n              keyboard_arrow_right\n            </i>\n          </span>\n        </div>\n        <app-graph-table-chart [section]=\"section\"></app-graph-table-chart>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n\n</div>",
                    styles: [".paddingTop{padding:20px 0}.paddingBottom{padding:0 0 20px}.marginTop{margin:20px 0;padding:0}.height{height:350px;overflow:hidden}.profileHeight{padding:0;display:flex;align-items:center}.profileIcon{font-size:10vw}.profileContent{padding-left:20px}.flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.reportDashboard{padding:20px}.wrapper{padding:0 20px}.userIcon{height:200px}.userIcon:after{content:\"\";background:var(--light-grey-color);position:absolute;top:20%;right:0;height:60%;width:1px}.flexBox{display:flex;flex-direction:column;justify-content:flex-start}.subHeading{color:var(--grey-color);overflow:hidden;text-overflow:ellipsis}.dividerWidth{margin:0 20px;width:calc(100% - 40px)!important}._flexbox{display:flex;align-items:baseline}.horizontalLine{border-bottom:1px solid var(--light-grey-color);width:calc(100% - 20px)!important;padding:0 0 20px}.flex-direction-column{flex-direction:column;display:flex;overflow-x:auto}.flexWarp{flex-wrap:wrap}.middle{padding:0}.containerAdj{padding:15px!important}.title{font-size:18px}.textColor{color:var(--primary-color);text-transform:capitalize}"]
                }] }
    ];
    /** @nocollapse */
    MultipleEntityDrilldownReportComponent.ctorParameters = function () { return [
        { type: ReportService },
        { type: UtilityService },
        { type: MatSnackBar },
        { type: Router },
        { type: ActivatedRoute }
    ]; };
    MultipleEntityDrilldownReportComponent.propDecorators = {
        reportConfig: [{ type: Input }],
        apiBaseUrl: [{ type: Input }]
    };
    return MultipleEntityDrilldownReportComponent;
}());
export { MultipleEntityDrilldownReportComponent };
if (false) {
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.mutipleEntity;
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.programId;
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.headings;
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.entityId;
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.blockName;
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.reportConfig;
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.apiBaseUrl;
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.shareLinkApi;
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.publicSharedBaseUrl;
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.globalConfig;
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.linkId;
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.componentId;
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.baseUrl;
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.portalName;
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.solutionId;
    /** @type {?} */
    MultipleEntityDrilldownReportComponent.prototype.url;
    /**
     * @type {?}
     * @private
     */
    MultipleEntityDrilldownReportComponent.prototype.reportService;
    /**
     * @type {?}
     * @private
     */
    MultipleEntityDrilldownReportComponent.prototype.utility;
    /**
     * @type {?}
     * @private
     */
    MultipleEntityDrilldownReportComponent.prototype.snackBar;
    /**
     * @type {?}
     * @private
     */
    MultipleEntityDrilldownReportComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    MultipleEntityDrilldownReportComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGUtZW50aXR5LWRyaWxsZG93bi1yZXBvcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3JlcG9ydC1tb2R1bGUvbXVsdGlwbGUtZW50aXR5LWRyaWxsZG93bi1yZXBvcnQvbXVsdGlwbGUtZW50aXR5LWRyaWxsZG93bi1yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRTVGO0lBcUJFLGdEQUNVLGFBQTRCLEVBQzVCLE9BQXVCLEVBQ3ZCLFFBQXFCLEVBQ3JCLEtBQWEsRUFDYixNQUF1QjtRQUp2QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQWxCakMsYUFBUSxHQUFHLDhDQUE4QyxDQUFDO1FBeUQxRCxRQUFHLEdBQUcsa0JBQWtCLENBQUE7SUF0Q3BCLENBQUM7Ozs7SUFFTCx5REFBUTs7O0lBQVI7UUFBQSxpQkFzQkM7UUFyQkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUUsVUFBQSxNQUFNO1lBQ3ZDLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3hDLENBQUMsRUFBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSTtZQUM3QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbEMsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN0QyxLQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3BELEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN0QyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDcEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUdwQyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFDRCwwRUFBeUI7OztJQUF6QjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsK0JBQStCLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsV0FBVztZQUNuTixLQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDaEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ0wsK0VBQStFO1lBQy9FLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFNUIsQ0FBQyxFQUNJLENBQUE7SUFDUCxDQUFDOzs7O0lBRUQsOERBQWE7OztJQUFiO1FBQUEsaUJBNkJDO1FBMUJDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBQyxPQUFPLEVBQUUsWUFBWTtZQUN4RCxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU87Ozs7O1lBQUMsVUFBQyxXQUFXLEVBQUUsZ0JBQWdCO2dCQUN4RCxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRSxJQUFJLENBQUM7Z0JBQzdGLGdIQUFnSDtnQkFDaEgseUJBQXlCO2dCQUN6QiwyR0FBMkc7Z0JBQzNHLDJDQUEyQztnQkFDM0MsaUVBQWlFO2dCQUNqRSxrQ0FBa0M7Z0JBQ2xDLGdDQUFnQztnQkFDaEMsMkNBQTJDO2dCQUMzQyx5Q0FBeUM7Z0JBQ3pDLE1BQU07Z0JBRU4sMENBQTBDO2dCQUMxQywwQkFBMEI7Z0JBQzFCLGlDQUFpQztnQkFDakMscURBQXFEO2dCQUNyRCxNQUFNO2dCQUNOLGdDQUFnQztnQkFDaEMsSUFBSTtnQkFDSixnSEFBZ0g7WUFDbEgsQ0FBQyxFQUFDLENBQUM7UUFFTCxDQUFDLEVBQUMsQ0FBQztJQUVMLENBQUM7Ozs7SUFDRCxrRUFBaUI7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsMEJBQTBCLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckgsQ0FBQzs7Z0JBbEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0NBQXNDO29CQUNoRCw0dEVBQWdFOztpQkFFakU7Ozs7Z0JBVFEsYUFBYTtnQkFHYixjQUFjO2dCQUZkLFdBQVc7Z0JBQ1gsTUFBTTtnQkFBRSxjQUFjOzs7K0JBYzVCLEtBQUs7NkJBQ0wsS0FBSzs7SUF1RlIsNkNBQUM7Q0FBQSxBQW5HRCxJQW1HQztTQTlGWSxzQ0FBc0M7OztJQUNqRCwrREFBYzs7SUFDZCwyREFBVzs7SUFDWCwwREFBMEQ7O0lBQzFELDBEQUFVOztJQUNWLDJEQUFVOztJQUNWLDhEQUEwQjs7SUFDMUIsNERBQXdCOztJQUN4Qiw4REFBa0I7O0lBQ2xCLHFFQUF5Qjs7SUFDekIsOERBQWtCOztJQUNsQix3REFBWTs7SUFDWiw2REFBaUI7O0lBQ2pCLHlEQUFhOztJQUNiLDREQUFnQjs7SUFDaEIsNERBQWdCOztJQTZDaEIscURBQXdCOzs7OztJQTNDdEIsK0RBQW9DOzs7OztJQUNwQyx5REFBK0I7Ozs7O0lBQy9CLDBEQUE2Qjs7Ozs7SUFDN0IsdURBQXFCOzs7OztJQUNyQix3REFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcG9ydFNlcnZpY2UgfSBmcm9tICcuLi9yZXBvcnQtc2VydmljZS9yZXBvcnQuc2VydmljZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlLW1vZHVsZS9zZXJ2aWNlcy91dGlsaXR5LXNlcnZpY2UvdXRpbGl0eS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW11bHRpcGxlLWVudGl0eS1kcmlsbGRvd24tcmVwb3J0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL211bHRpcGxlLWVudGl0eS1kcmlsbGRvd24tcmVwb3J0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXVsdGlwbGUtZW50aXR5LWRyaWxsZG93bi1yZXBvcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aXBsZUVudGl0eURyaWxsZG93blJlcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG11dGlwbGVFbnRpdHk7XG4gIHByb2dyYW1JZCA7XG4gIGhlYWRpbmdzID0gXCJoZWFkaW5nLnJlcG9ydE11bHRpbHBlRW50aXR5RHJpbGxsZG93blJlcG9ydFwiO1xuICBlbnRpdHlJZCA7XG4gIGJsb2NrTmFtZTtcbiAgQElucHV0KClyZXBvcnRDb25maWc6IGFueTtcbiAgQElucHV0KClhcGlCYXNlVXJsOiBhbnk7XG4gIHNoYXJlTGlua0FwaTogYW55O1xuICBwdWJsaWNTaGFyZWRCYXNlVXJsOiBhbnk7XG4gIGdsb2JhbENvbmZpZzogYW55O1xuICBsaW5rSWQ6IGFueTtcbiAgY29tcG9uZW50SWQ6IGFueTtcbiAgYmFzZVVybDogYW55O1xuICBwb3J0YWxOYW1lOiBhbnk7XG4gIHNvbHV0aW9uSWQ6IGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZXBvcnRTZXJ2aWNlOiBSZXBvcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXRpbGl0eTogVXRpbGl0eVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGVyIDogQWN0aXZhdGVkUm91dGVcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnV0aWxpdHkubG9hZGVyU2hvdygpO1xuICAgIHRoaXMucm91dGVyLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSggcGFyYW1zID0+e1xuICAgICAgdGhpcy5lbnRpdHlJZCA9IHBhcmFtc1snZW50aXR5J107XG4gICAgICB0aGlzLnByb2dyYW1JZCA9IHBhcmFtc1sncHJvZ3JhbUlkJ107XG4gICAgICB0aGlzLmJsb2NrTmFtZSA9IHBhcmFtc1snYmxvY2tOYW1lJ107XG4gICAgICB0aGlzLmxpbmtJZCA9IHBhcmFtc1snbGlua0lkJ107XG4gICAgICB0aGlzLnNvbHV0aW9uSWQgPSBwYXJhbXNbJ3NvbHV0aW9uSWQnXVxuICAgIH0pXG4gICAgdGhpcy5yb3V0ZXIuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmFwaUJhc2VVcmwgPSBkYXRhLmFwaWJhc2VVcmw7XG4gICAgICB0aGlzLnJlcG9ydENvbmZpZyA9IGRhdGEucmVwb3J0Q29uZmlnO1xuICAgICAgdGhpcy5zaGFyZUxpbmtBcGkgPSBkYXRhLnNoYXJlTGlua0FwaTtcbiAgICAgIHRoaXMucHVibGljU2hhcmVkQmFzZVVybCA9IGRhdGEucHVibGljU2hhcmVkQmFzZVVybDtcbiAgICAgIHRoaXMuZ2xvYmFsQ29uZmlnID0gZGF0YS5nbG9iYWxDb25maWc7XG4gICAgICB0aGlzLmNvbXBvbmVudElkID0gZGF0YS5jb21wb25lbnRJZDtcbiAgICAgIHRoaXMuYmFzZVVybD0gIGRhdGEuYmFzZVVybDtcbiAgICAgIHRoaXMucG9ydGFsTmFtZSA9IGRhdGEucG9ydGFsTmFtZTtcblxuXG4gICAgfSk7XG4gICAgdGhpcy5nZXRNdWx0aUVudGl0eURyaWxsUmVwb3J0KCk7XG4gIH1cbiAgZ2V0TXVsdGlFbnRpdHlEcmlsbFJlcG9ydCgpIHtcbiAgICB0aGlzLnJlcG9ydFNlcnZpY2UuZ2V0TXVsdGlwbGVFbnRpdHlEcmlsbGRvd25SZXBvcnQodGhpcy5hcGlCYXNlVXJsK3RoaXMucmVwb3J0Q29uZmlnLm11bHRpRW50aXR5RHJpbGxEb3duTGV2ZWxSZXBvcnQsdGhpcy5wcm9ncmFtSWQsdGhpcy5zb2x1dGlvbklkLHRoaXMuYmxvY2tOYW1lLCB0aGlzLmVudGl0eUlkLHRoaXMubGlua0lkKS5zdWJzY3JpYmUoc3VjY2Vzc0RhdGEgPT4ge1xuICAgICAgdGhpcy5tdXRpcGxlRW50aXR5ID0gc3VjY2Vzc0RhdGFbJ3Jlc3VsdCddO1xuICAgICAgdGhpcy5jcmVhdGVOZXdEYXRhKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm11dGlwbGVFbnRpdHkpO1xuICAgICAgdGhpcy51dGlsaXR5LmxvYWRlckhpZGUoKTtcbiAgICB9LGVycm9yID0+IHtcbiAgICAgIC8vdGhpcy5zbmFja0Jhci5vcGVuKHRoaXMuZ2xvYmFsQ29uZmlnLmVycm9yTWVzc2FnZSwgXCJPa1wiLCB7IGR1cmF0aW9uOiA5MDAwIH0pO1xuICAgICAgdGhpcy51dGlsaXR5LmxvYWRlckhpZGUoKTtcblxuICAgIH1cbiAgICAgICAgKVxuICB9XG4gIHVybCA9IFwiUFJPR0lEMDE/ZW50aXR5PVwiXG4gIGNyZWF0ZU5ld0RhdGEoKSB7XG5cblxuICAgIHRoaXMubXV0aXBsZUVudGl0eS5zZWN0aW9ucy5mb3JFYWNoKChlbGVtZW50LCBzZWN0aW9uSW5kZXgpID0+IHtcbiAgICAgIGVsZW1lbnQuc3ViU2VjdGlvbnMuZm9yRWFjaCgoc3ViU2VjdGlvbnMsIHN1YlNlY3Rpb25zSW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5tdXRpcGxlRW50aXR5LnNlY3Rpb25zW3NlY3Rpb25JbmRleF0uc3ViU2VjdGlvbnNbc3ViU2VjdGlvbnNJbmRleF1bJ3RhYmxlU2Nyb2xsJ109IHRydWU7XG4gICAgICAgIC8vIHRoaXMubXV0aXBsZUVudGl0eS5zZWN0aW9uc1tzZWN0aW9uSW5kZXhdLnN1YlNlY3Rpb25zW3N1YlNlY3Rpb25zSW5kZXhdWydncmFwaERhdGEnXS5jaGFydFR5cGUgPSAnTGluZUNoYXJ0JztcbiAgICAgICAgLy8gbGV0IG5ld2dyYXBoRGF0YSA9IFtdO1xuICAgICAgICAvLyBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5tdXRpcGxlRW50aXR5WydzZWN0aW9ucyddW3NlY3Rpb25JbmRleF1bJ3N1YlNlY3Rpb25zJ11bc3ViU2VjdGlvbnNJbmRleF0uZGF0YSkge1xuICAgICAgICAvLyAgIGxldCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSk7XG4gICAgICAgIC8vICAgbGV0IHRvdGFsQ291bnRBcnJheTogQXJyYXk8bnVtYmVyPiA9IE9iamVjdC52YWx1ZXMobmV3RGF0YSk7XG4gICAgICAgIC8vICAgdG90YWxDb3VudEFycmF5LnNwbGljZSgwLCAxKTtcbiAgICAgICAgLy8gICBsZXQgdG90YWxjb3VudDogbnVtYmVyID0gMDtcbiAgICAgICAgLy8gICBmb3IgKGxldCBlbGVtZW50IG9mIHRvdGFsQ291bnRBcnJheSkge1xuICAgICAgICAvLyAgICAgdG90YWxjb3VudCA9IGVsZW1lbnQgKyB0b3RhbGNvdW50O1xuICAgICAgICAvLyAgIH1cblxuICAgICAgICAvLyAgIGNvbnN0IG9iaktleXMgPSBPYmplY3Qua2V5cyhuZXdEYXRhKTtcbiAgICAgICAgLy8gICBvYmpLZXlzLnNwbGljZSgwLCAxKTtcbiAgICAgICAgLy8gICBmb3IgKGNvbnN0IGtleSBvZiBvYmpLZXlzKSB7XG4gICAgICAgIC8vICAgICBuZXdEYXRhW2tleV0gPSAoZGF0YVtrZXldIC8gdG90YWxjb3VudCkgKiAxMDA7XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyAgIG5ld2dyYXBoRGF0YS5wdXNoKG5ld0RhdGEpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHRoaXMubXV0aXBsZUVudGl0eVsnc2VjdGlvbnMnXVtzZWN0aW9uSW5kZXhdWydzdWJTZWN0aW9ucyddW3N1YlNlY3Rpb25zSW5kZXhdWyduZXdHcmFwaERhdGEnXSA9IG5ld2dyYXBoRGF0YTtcbiAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgfVxuICBuYXZpYWd0ZVRvUnVicmljcygpIHtcbiAgICB0aGlzLnJvdXRlLm5hdmlnYXRlKFtcIi9yZXBvcnQvZnJhbWV3b3JrLXJ1YnJpY1wiXSwgeyBxdWVyeVBhcmFtczogeyBsaW5rOiB0aGlzLm11dGlwbGVFbnRpdHkuZnJhbWV3b3JrVXJsLmxpbmsgfSB9KTtcbiAgfVxufVxuIl19