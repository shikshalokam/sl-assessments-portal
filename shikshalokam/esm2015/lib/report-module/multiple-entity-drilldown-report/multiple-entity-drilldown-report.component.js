/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReportService } from '../report-service/report.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilityService } from '../../core-module/services/utility-service/utility.service';
export class MultipleEntityDrilldownReportComponent {
    /**
     * @param {?} reportService
     * @param {?} utility
     * @param {?} snackBar
     * @param {?} route
     * @param {?} router
     */
    constructor(reportService, utility, snackBar, route, router) {
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
    ngOnInit() {
        this.utility.loaderShow();
        this.router.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            this.entityId = params['entity'];
            this.programId = params['programId'];
            this.blockName = params['blockName'];
            this.linkId = params['linkId'];
            this.solutionId = params['solutionId'];
        }));
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
        this.getMultiEntityDrillReport();
    }
    /**
     * @return {?}
     */
    getMultiEntityDrillReport() {
        this.reportService.getMultipleEntityDrilldownReport(this.apiBaseUrl + this.reportConfig.multiEntityDrillDownLevelReport, this.programId, this.solutionId, this.blockName, this.entityId, this.linkId).subscribe((/**
         * @param {?} successData
         * @return {?}
         */
        successData => {
            this.mutipleEntity = successData['result'];
            this.createNewData();
            console.log(this.mutipleEntity);
            this.utility.loaderHide();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            //this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
            this.utility.loaderHide();
        }));
    }
    /**
     * @return {?}
     */
    createNewData() {
        this.mutipleEntity.sections.forEach((/**
         * @param {?} element
         * @param {?} sectionIndex
         * @return {?}
         */
        (element, sectionIndex) => {
            element.subSections.forEach((/**
             * @param {?} subSections
             * @param {?} subSectionsIndex
             * @return {?}
             */
            (subSections, subSectionsIndex) => {
                this.mutipleEntity.sections[sectionIndex].subSections[subSectionsIndex]['tableScroll'] = true;
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
    }
    /**
     * @return {?}
     */
    naviagteToRubrics() {
        this.route.navigate(["/report/framework-rubric"], { queryParams: { link: this.mutipleEntity.frameworkUrl.link } });
    }
}
MultipleEntityDrilldownReportComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-multiple-entity-drilldown-report',
                template: "<app-loader></app-loader>\n\n<app-parent-heading *ngIf=\"!linkId\" [startIndex]=\"3\" [genericHeading]=\"headings\" [showControl]=\"false\"></app-parent-heading>\n\n<div>\n  <div class=\"_flex-box _full-width\">\n    <h4 class=\"marginTop\" style=\"flex:1\">{{mutipleEntity?.heading}}</h4>\n    <button mat-button color=\"primary\" *ngIf=\"!linkId\" (click)=\"naviagteToRubrics()\">{{'headings.frameworkRubricView' | translate}}\n    </button>\n    <app-share-link *ngIf=\"mutipleEntity?.isShareable && !linkId\"[portalName]=\"portalName\" [baseUrl]=\"baseUrl\" [componentId]=\"componentId\" [globalConfig]=\"globalConfig\" [publicSharedBaseUrl]=\"publicSharedBaseUrl\" [shareLinkApi]=\"shareLinkApi\"></app-share-link>\n  </div>\n  <div>\n    <mat-card>\n      <mat-list class=\"middle\">\n        <mat-list-item *ngFor=\"let item of mutipleEntity?.summary;let last = last;\">\n          <div class=\"_flex-box _full-width\">\n            <div style=\"flex:1\">\n              {{item?.label}}\n            </div>\n            <div style=\"flex:2\">\n              <b>{{item?.value}}</b>\n            </div>\n          </div>\n          <mat-divider *ngIf=\"!last\"></mat-divider>\n\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n  <!-- <div class=\"col-xs-12 _flex-box _flex-end _small-Top-Margin\" ><app-share-link></app-share-link></div> -->\n\n  <div class=\"col-xs-12 marginTop\" *ngFor=\"let section of mutipleEntity?.sections\">\n    <mat-card class=\"containerAdj\">\n      <mat-card-title class=\"title _capitalize\">\n        {{section?.heading}}\n      </mat-card-title>\n      <!-- <mat-card-subtitle>\n        \n      </mat-card-subtitle> -->\n      <mat-divider></mat-divider>\n      <mat-card-content>\n        <div class=\"_flex-box _margin-top _margin-bottom textColor\">\n          <span *ngFor=\"let header of section?.summary; let last = last\" class=\"_flex-box\">\n            {{header?.label}} : {{header?.value}}\n            <i class=\"material-icons\" *ngIf=\"!last\">\n              keyboard_arrow_right\n            </i>\n          </span>\n        </div>\n        <app-graph-table-chart [section]=\"section\"></app-graph-table-chart>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n\n</div>",
                styles: [".paddingTop{padding:20px 0}.paddingBottom{padding:0 0 20px}.marginTop{margin:20px 0;padding:0}.height{height:350px;overflow:hidden}.profileHeight{padding:0;display:flex;align-items:center}.profileIcon{font-size:10vw}.profileContent{padding-left:20px}.flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.reportDashboard{padding:20px}.wrapper{padding:0 20px}.userIcon{height:200px}.userIcon:after{content:\"\";background:var(--light-grey-color);position:absolute;top:20%;right:0;height:60%;width:1px}.flexBox{display:flex;flex-direction:column;justify-content:flex-start}.subHeading{color:var(--grey-color);overflow:hidden;text-overflow:ellipsis}.dividerWidth{margin:0 20px;width:calc(100% - 40px)!important}._flexbox{display:flex;align-items:baseline}.horizontalLine{border-bottom:1px solid var(--light-grey-color);width:calc(100% - 20px)!important;padding:0 0 20px}.flex-direction-column{flex-direction:column;display:flex;overflow-x:auto}.flexWarp{flex-wrap:wrap}.middle{padding:0}.containerAdj{padding:15px!important}.title{font-size:18px}.textColor{color:var(--primary-color);text-transform:capitalize}"]
            }] }
];
/** @nocollapse */
MultipleEntityDrilldownReportComponent.ctorParameters = () => [
    { type: ReportService },
    { type: UtilityService },
    { type: MatSnackBar },
    { type: Router },
    { type: ActivatedRoute }
];
MultipleEntityDrilldownReportComponent.propDecorators = {
    reportConfig: [{ type: Input }],
    apiBaseUrl: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGUtZW50aXR5LWRyaWxsZG93bi1yZXBvcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hpa3NoYWxva2FtLyIsInNvdXJjZXMiOlsibGliL3JlcG9ydC1tb2R1bGUvbXVsdGlwbGUtZW50aXR5LWRyaWxsZG93bi1yZXBvcnQvbXVsdGlwbGUtZW50aXR5LWRyaWxsZG93bi1yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBTzVGLE1BQU0sT0FBTyxzQ0FBc0M7Ozs7Ozs7O0lBZ0JqRCxZQUNVLGFBQTRCLEVBQzVCLE9BQXVCLEVBQ3ZCLFFBQXFCLEVBQ3JCLEtBQWEsRUFDYixNQUF1QjtRQUp2QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQWxCakMsYUFBUSxHQUFHLDhDQUE4QyxDQUFDO1FBeUQxRCxRQUFHLEdBQUcsa0JBQWtCLENBQUE7SUF0Q3BCLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUUsTUFBTSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDeEMsQ0FBQyxFQUFDLENBQUE7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDdEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFHcEMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBQ0QseUJBQXlCO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLCtCQUErQixFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxXQUFXLENBQUMsRUFBRTtZQUN0TixJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDUiwrRUFBK0U7WUFDL0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUU1QixDQUFDLEVBQ0ksQ0FBQTtJQUNQLENBQUM7Ozs7SUFFRCxhQUFhO1FBR1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRTtZQUM1RCxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU87Ozs7O1lBQUMsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUUsSUFBSSxDQUFDO2dCQUM3RixnSEFBZ0g7Z0JBQ2hILHlCQUF5QjtnQkFDekIsMkdBQTJHO2dCQUMzRywyQ0FBMkM7Z0JBQzNDLGlFQUFpRTtnQkFDakUsa0NBQWtDO2dCQUNsQyxnQ0FBZ0M7Z0JBQ2hDLDJDQUEyQztnQkFDM0MseUNBQXlDO2dCQUN6QyxNQUFNO2dCQUVOLDBDQUEwQztnQkFDMUMsMEJBQTBCO2dCQUMxQixpQ0FBaUM7Z0JBQ2pDLHFEQUFxRDtnQkFDckQsTUFBTTtnQkFDTixnQ0FBZ0M7Z0JBQ2hDLElBQUk7Z0JBQ0osZ0hBQWdIO1lBQ2xILENBQUMsRUFBQyxDQUFDO1FBRUwsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7O0lBQ0QsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNySCxDQUFDOzs7WUFsR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELDR0RUFBZ0U7O2FBRWpFOzs7O1lBVFEsYUFBYTtZQUdiLGNBQWM7WUFGZCxXQUFXO1lBQ1gsTUFBTTtZQUFFLGNBQWM7OzsyQkFjNUIsS0FBSzt5QkFDTCxLQUFLOzs7O0lBTk4sK0RBQWM7O0lBQ2QsMkRBQVc7O0lBQ1gsMERBQTBEOztJQUMxRCwwREFBVTs7SUFDViwyREFBVTs7SUFDViw4REFBMEI7O0lBQzFCLDREQUF3Qjs7SUFDeEIsOERBQWtCOztJQUNsQixxRUFBeUI7O0lBQ3pCLDhEQUFrQjs7SUFDbEIsd0RBQVk7O0lBQ1osNkRBQWlCOztJQUNqQix5REFBYTs7SUFDYiw0REFBZ0I7O0lBQ2hCLDREQUFnQjs7SUE2Q2hCLHFEQUF3Qjs7Ozs7SUEzQ3RCLCtEQUFvQzs7Ozs7SUFDcEMseURBQStCOzs7OztJQUMvQiwwREFBNkI7Ozs7O0lBQzdCLHVEQUFxQjs7Ozs7SUFDckIsd0RBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBvcnRTZXJ2aWNlIH0gZnJvbSAnLi4vcmVwb3J0LXNlcnZpY2UvcmVwb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS1tb2R1bGUvc2VydmljZXMvdXRpbGl0eS1zZXJ2aWNlL3V0aWxpdHkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tdWx0aXBsZS1lbnRpdHktZHJpbGxkb3duLXJlcG9ydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tdWx0aXBsZS1lbnRpdHktZHJpbGxkb3duLXJlcG9ydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL211bHRpcGxlLWVudGl0eS1kcmlsbGRvd24tcmVwb3J0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVFbnRpdHlEcmlsbGRvd25SZXBvcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtdXRpcGxlRW50aXR5O1xuICBwcm9ncmFtSWQgO1xuICBoZWFkaW5ncyA9IFwiaGVhZGluZy5yZXBvcnRNdWx0aWxwZUVudGl0eURyaWxsbGRvd25SZXBvcnRcIjtcbiAgZW50aXR5SWQgO1xuICBibG9ja05hbWU7XG4gIEBJbnB1dCgpcmVwb3J0Q29uZmlnOiBhbnk7XG4gIEBJbnB1dCgpYXBpQmFzZVVybDogYW55O1xuICBzaGFyZUxpbmtBcGk6IGFueTtcbiAgcHVibGljU2hhcmVkQmFzZVVybDogYW55O1xuICBnbG9iYWxDb25maWc6IGFueTtcbiAgbGlua0lkOiBhbnk7XG4gIGNvbXBvbmVudElkOiBhbnk7XG4gIGJhc2VVcmw6IGFueTtcbiAgcG9ydGFsTmFtZTogYW55O1xuICBzb2x1dGlvbklkOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVwb3J0U2VydmljZTogUmVwb3J0U2VydmljZSxcbiAgICBwcml2YXRlIHV0aWxpdHk6IFV0aWxpdHlTZXJ2aWNlLFxuICAgIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxuICAgIHByaXZhdGUgcm91dGU6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlciA6IEFjdGl2YXRlZFJvdXRlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51dGlsaXR5LmxvYWRlclNob3coKTtcbiAgICB0aGlzLnJvdXRlci5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoIHBhcmFtcyA9PntcbiAgICAgIHRoaXMuZW50aXR5SWQgPSBwYXJhbXNbJ2VudGl0eSddO1xuICAgICAgdGhpcy5wcm9ncmFtSWQgPSBwYXJhbXNbJ3Byb2dyYW1JZCddO1xuICAgICAgdGhpcy5ibG9ja05hbWUgPSBwYXJhbXNbJ2Jsb2NrTmFtZSddO1xuICAgICAgdGhpcy5saW5rSWQgPSBwYXJhbXNbJ2xpbmtJZCddO1xuICAgICAgdGhpcy5zb2x1dGlvbklkID0gcGFyYW1zWydzb2x1dGlvbklkJ11cbiAgICB9KVxuICAgIHRoaXMucm91dGVyLmRhdGEuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5hcGlCYXNlVXJsID0gZGF0YS5hcGliYXNlVXJsO1xuICAgICAgdGhpcy5yZXBvcnRDb25maWcgPSBkYXRhLnJlcG9ydENvbmZpZztcbiAgICAgIHRoaXMuc2hhcmVMaW5rQXBpID0gZGF0YS5zaGFyZUxpbmtBcGk7XG4gICAgICB0aGlzLnB1YmxpY1NoYXJlZEJhc2VVcmwgPSBkYXRhLnB1YmxpY1NoYXJlZEJhc2VVcmw7XG4gICAgICB0aGlzLmdsb2JhbENvbmZpZyA9IGRhdGEuZ2xvYmFsQ29uZmlnO1xuICAgICAgdGhpcy5jb21wb25lbnRJZCA9IGRhdGEuY29tcG9uZW50SWQ7XG4gICAgICB0aGlzLmJhc2VVcmw9ICBkYXRhLmJhc2VVcmw7XG4gICAgICB0aGlzLnBvcnRhbE5hbWUgPSBkYXRhLnBvcnRhbE5hbWU7XG5cblxuICAgIH0pO1xuICAgIHRoaXMuZ2V0TXVsdGlFbnRpdHlEcmlsbFJlcG9ydCgpO1xuICB9XG4gIGdldE11bHRpRW50aXR5RHJpbGxSZXBvcnQoKSB7XG4gICAgdGhpcy5yZXBvcnRTZXJ2aWNlLmdldE11bHRpcGxlRW50aXR5RHJpbGxkb3duUmVwb3J0KHRoaXMuYXBpQmFzZVVybCt0aGlzLnJlcG9ydENvbmZpZy5tdWx0aUVudGl0eURyaWxsRG93bkxldmVsUmVwb3J0LHRoaXMucHJvZ3JhbUlkLHRoaXMuc29sdXRpb25JZCx0aGlzLmJsb2NrTmFtZSwgdGhpcy5lbnRpdHlJZCx0aGlzLmxpbmtJZCkuc3Vic2NyaWJlKHN1Y2Nlc3NEYXRhID0+IHtcbiAgICAgIHRoaXMubXV0aXBsZUVudGl0eSA9IHN1Y2Nlc3NEYXRhWydyZXN1bHQnXTtcbiAgICAgIHRoaXMuY3JlYXRlTmV3RGF0YSgpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5tdXRpcGxlRW50aXR5KTtcbiAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJIaWRlKCk7XG4gICAgfSxlcnJvciA9PiB7XG4gICAgICAvL3RoaXMuc25hY2tCYXIub3Blbih0aGlzLmdsb2JhbENvbmZpZy5lcnJvck1lc3NhZ2UsIFwiT2tcIiwgeyBkdXJhdGlvbjogOTAwMCB9KTtcbiAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJIaWRlKCk7XG5cbiAgICB9XG4gICAgICAgIClcbiAgfVxuICB1cmwgPSBcIlBST0dJRDAxP2VudGl0eT1cIlxuICBjcmVhdGVOZXdEYXRhKCkge1xuXG5cbiAgICB0aGlzLm11dGlwbGVFbnRpdHkuc2VjdGlvbnMuZm9yRWFjaCgoZWxlbWVudCwgc2VjdGlvbkluZGV4KSA9PiB7XG4gICAgICBlbGVtZW50LnN1YlNlY3Rpb25zLmZvckVhY2goKHN1YlNlY3Rpb25zLCBzdWJTZWN0aW9uc0luZGV4KSA9PiB7XG4gICAgICAgIHRoaXMubXV0aXBsZUVudGl0eS5zZWN0aW9uc1tzZWN0aW9uSW5kZXhdLnN1YlNlY3Rpb25zW3N1YlNlY3Rpb25zSW5kZXhdWyd0YWJsZVNjcm9sbCddPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLm11dGlwbGVFbnRpdHkuc2VjdGlvbnNbc2VjdGlvbkluZGV4XS5zdWJTZWN0aW9uc1tzdWJTZWN0aW9uc0luZGV4XVsnZ3JhcGhEYXRhJ10uY2hhcnRUeXBlID0gJ0xpbmVDaGFydCc7XG4gICAgICAgIC8vIGxldCBuZXdncmFwaERhdGEgPSBbXTtcbiAgICAgICAgLy8gZm9yIChjb25zdCBkYXRhIG9mIHRoaXMubXV0aXBsZUVudGl0eVsnc2VjdGlvbnMnXVtzZWN0aW9uSW5kZXhdWydzdWJTZWN0aW9ucyddW3N1YlNlY3Rpb25zSW5kZXhdLmRhdGEpIHtcbiAgICAgICAgLy8gICBsZXQgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpO1xuICAgICAgICAvLyAgIGxldCB0b3RhbENvdW50QXJyYXk6IEFycmF5PG51bWJlcj4gPSBPYmplY3QudmFsdWVzKG5ld0RhdGEpO1xuICAgICAgICAvLyAgIHRvdGFsQ291bnRBcnJheS5zcGxpY2UoMCwgMSk7XG4gICAgICAgIC8vICAgbGV0IHRvdGFsY291bnQ6IG51bWJlciA9IDA7XG4gICAgICAgIC8vICAgZm9yIChsZXQgZWxlbWVudCBvZiB0b3RhbENvdW50QXJyYXkpIHtcbiAgICAgICAgLy8gICAgIHRvdGFsY291bnQgPSBlbGVtZW50ICsgdG90YWxjb3VudDtcbiAgICAgICAgLy8gICB9XG5cbiAgICAgICAgLy8gICBjb25zdCBvYmpLZXlzID0gT2JqZWN0LmtleXMobmV3RGF0YSk7XG4gICAgICAgIC8vICAgb2JqS2V5cy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIC8vICAgZm9yIChjb25zdCBrZXkgb2Ygb2JqS2V5cykge1xuICAgICAgICAvLyAgICAgbmV3RGF0YVtrZXldID0gKGRhdGFba2V5XSAvIHRvdGFsY291bnQpICogMTAwO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gICBuZXdncmFwaERhdGEucHVzaChuZXdEYXRhKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLm11dGlwbGVFbnRpdHlbJ3NlY3Rpb25zJ11bc2VjdGlvbkluZGV4XVsnc3ViU2VjdGlvbnMnXVtzdWJTZWN0aW9uc0luZGV4XVsnbmV3R3JhcGhEYXRhJ10gPSBuZXdncmFwaERhdGE7XG4gICAgICB9KTtcblxuICAgIH0pO1xuXG4gIH1cbiAgbmF2aWFndGVUb1J1YnJpY3MoKSB7XG4gICAgdGhpcy5yb3V0ZS5uYXZpZ2F0ZShbXCIvcmVwb3J0L2ZyYW1ld29yay1ydWJyaWNcIl0sIHsgcXVlcnlQYXJhbXM6IHsgbGluazogdGhpcy5tdXRpcGxlRW50aXR5LmZyYW1ld29ya1VybC5saW5rIH0gfSk7XG4gIH1cbn1cbiJdfQ==