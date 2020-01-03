/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReportService } from '../report-service/report.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilityService } from '../../core-module/services/utility-service/utility.service';
export class MultipleEntityRportComponent {
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
        this.headings = "heading.reportMiltipleEntityReport";
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
            this.componentId = data.componentId;
            this.shareLinkApi = data.shareLinkApi;
            this.publicSharedBaseUrl = data.publicSharedBaseUrl;
            this.globalConfig = data.globalConfig;
            this.baseUrl = data.baseUrl;
            this.portalName = data.portalName;
        }));
        this.getMultiEntityReport();
    }
    /**
     * @return {?}
     */
    getMultiEntityReport() {
        this.reportService.getMultipleEntityReport(this.apiBaseUrl + this.reportConfig.multiEntityHighLevelReport, this.programId, this.solutionId, this.blockName, this.entityId, this.linkId).subscribe((/**
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
                /** @type {?} */
                let newgraphData = [];
                for (const data of this.mutipleEntity['sections'][sectionIndex]['subSections'][subSectionsIndex].data) {
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
                this.mutipleEntity['sections'][sectionIndex]['subSections'][subSectionsIndex]['newGraphData'] = newgraphData;
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
MultipleEntityRportComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-multiple-entity-report',
                template: "<app-loader></app-loader>\n\n<app-parent-heading *ngIf=\"!linkId\" [startIndex]=\"3\" [genericHeading]=\"headings\" [showControl]=\"false\"></app-parent-heading>\n\n<div>\n  <div class=\"_flex-box \">\n    <h4 class=\"marginTop\" style=\"flex:1\">{{'headings.performanceReport' | translate}}</h4>\n    <button mat-button *ngIf=\"!linkId\" color=\"primary\"\n      (click)=\"naviagteToRubrics()\">{{'headings.frameworkRubricView' | translate}}</button>\n      <app-share-link *ngIf=\"mutipleEntity?.isShareable && !linkId\"  [portalName]=\"portalName\"[baseUrl]=\"baseUrl\" [componentId]=\"componentId\" [globalConfig]=\"globalConfig\" [publicSharedBaseUrl]=\"publicSharedBaseUrl\" [shareLinkApi]=\"shareLinkApi\"></app-share-link>\n\n  </div>\n  <div>\n    <mat-card>\n      <mat-list class=\"middle\">\n        <mat-list-item *ngFor=\"let item of mutipleEntity?.summary;let last = last;\">\n          <div class=\"_flex-box _full-width\">\n            <div style=\"flex:1\">\n              {{item?.label}}\n            </div>\n            <div style=\"flex:2\">\n              <b>{{item?.value}}</b>\n            </div>\n          </div>\n          <mat-divider *ngIf=\"!last\"></mat-divider>\n\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n  <!-- <div class=\"col-xs-12 _flex-box _flex-end _small-Top-Margin\" ><app-share-link></app-share-link></div> -->\n\n  <div class=\"col-xs-12 marginTop\" *ngFor=\"let section of mutipleEntity?.sections\">\n    <mat-card class=\"containerAdj\">\n      <mat-card-title class=\"title _capitalize\">\n        {{section?.heading}}\n      </mat-card-title>\n      <!-- <mat-card-subtitle>\n        \n      </mat-card-subtitle> -->\n      <mat-divider></mat-divider>\n      <mat-card-content>\n        <div class=\"_flex-box _margin-top _margin-bottom textColor\">\n          <span *ngFor=\"let header of section?.summary; let last = last\" class=\"_flex-box\">\n            {{header?.label}} : {{header?.value}}\n            <i class=\"material-icons\" *ngIf=\"!last\">\n              keyboard_arrow_right\n            </i>\n          </span>\n        </div>\n        <app-graph-table-chart [section]=\"section\"></app-graph-table-chart>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n\n</div>",
                styles: [".paddingTop{padding:20px 0}.paddingBottom{padding:0 0 20px}.marginTop{margin:20px 0;padding:0}.height{height:350px;overflow:hidden}.profileHeight{padding:0;display:flex;align-items:center}.profileIcon{font-size:10vw}.profileContent{padding-left:20px}.flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.reportDashboard{padding:20px}.wrapper{padding:0 20px}.userIcon{height:200px}.userIcon:after{content:\"\";background:var(--light-grey-color);position:absolute;top:20%;right:0;height:60%;width:1px}.flexBox{display:flex;flex-direction:column;justify-content:flex-start}.subHeading{color:var(--grey-color);overflow:hidden;text-overflow:ellipsis}.dividerWidth{margin:0 20px;width:calc(100% - 40px)!important}._flexbox{display:flex;align-items:baseline}.horizontalLine{border-bottom:1px solid var(--light-grey-color);width:calc(100% - 20px)!important;padding:0 0 20px}.flex-direction-column{flex-direction:column;display:flex;overflow-x:auto}.flexWarp{flex-wrap:wrap}.middle{padding:0}.containerAdj{padding:15px!important}.title{font-size:18px}.textColor{color:var(--primary-color);text-transform:capitalize}"]
            }] }
];
/** @nocollapse */
MultipleEntityRportComponent.ctorParameters = () => [
    { type: ReportService },
    { type: UtilityService },
    { type: MatSnackBar },
    { type: Router },
    { type: ActivatedRoute }
];
MultipleEntityRportComponent.propDecorators = {
    apiBaseUrl: [{ type: Input }],
    reportConfig: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGUtZW50aXR5LXJlcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvcmVwb3J0LW1vZHVsZS9tdWx0aXBsZS1lbnRpdHktcmVwb3J0L211bHRpcGxlLWVudGl0eS1yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBTzVGLE1BQU0sT0FBTyw0QkFBNEI7Ozs7Ozs7O0lBZ0J2QyxZQUNVLGFBQTRCLEVBQzVCLE9BQXVCLEVBQ3ZCLFFBQXFCLEVBQ3JCLEtBQWEsRUFDYixNQUF1QjtRQUp2QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQWxCakMsYUFBUSxHQUFHLG9DQUFvQyxDQUFDO1FBMERoRCxRQUFHLEdBQUcsa0JBQWtCLENBQUE7SUF2Q3BCLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUUsTUFBTSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFD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SUFDekIsb0RBQWtCOztJQUNsQiw4Q0FBWTs7SUFDWixtREFBaUI7O0lBQ2pCLCtDQUFhOztJQUNiLGtEQUFnQjs7SUFDaEIsa0RBQWdCOztJQThDaEIsMkNBQXdCOzs7OztJQTVDdEIscURBQW9DOzs7OztJQUNwQywrQ0FBK0I7Ozs7O0lBQy9CLGdEQUE2Qjs7Ozs7SUFDN0IsNkNBQXFCOzs7OztJQUNyQiw4Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcG9ydFNlcnZpY2UgfSBmcm9tICcuLi9yZXBvcnQtc2VydmljZS9yZXBvcnQuc2VydmljZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlLW1vZHVsZS9zZXJ2aWNlcy91dGlsaXR5LXNlcnZpY2UvdXRpbGl0eS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW11bHRpcGxlLWVudGl0eS1yZXBvcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXVsdGlwbGUtZW50aXR5LXJlcG9ydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL211bHRpcGxlLWVudGl0eS1yZXBvcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aXBsZUVudGl0eVJwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbXV0aXBsZUVudGl0eTtcbiAgcHJvZ3JhbUlkIDtcbiAgaGVhZGluZ3MgPSBcImhlYWRpbmcucmVwb3J0TWlsdGlwbGVFbnRpdHlSZXBvcnRcIjtcbiAgZW50aXR5SWQgO1xuICBibG9ja05hbWU6IGFueTtcbiAgQElucHV0KClhcGlCYXNlVXJsOiBhbnk7XG4gIEBJbnB1dCgpcmVwb3J0Q29uZmlnOiBhbnk7XG4gIHNoYXJlTGlua0FwaTogYW55O1xuICBwdWJsaWNTaGFyZWRCYXNlVXJsOiBhbnk7XG4gIGdsb2JhbENvbmZpZzogYW55O1xuICBsaW5rSWQ6IGFueTtcbiAgY29tcG9uZW50SWQ6IGFueTtcbiAgYmFzZVVybDogYW55O1xuICBwb3J0YWxOYW1lOiBhbnk7XG4gIHNvbHV0aW9uSWQ6IGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZXBvcnRTZXJ2aWNlOiBSZXBvcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXRpbGl0eTogVXRpbGl0eVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogUm91dGVyLFxuICAgIHByaXZhdGUgcm91dGVyIDogQWN0aXZhdGVkUm91dGVcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnV0aWxpdHkubG9hZGVyU2hvdygpO1xuICAgIHRoaXMucm91dGVyLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSggcGFyYW1zID0+e1xuICAgICAgdGhpcy5lbnRpdHlJZCA9IHBhcmFtc1snZW50aXR5J107XG4gICAgICB0aGlzLnByb2dyYW1JZCA9IHBhcmFtc1sncHJvZ3JhbUlkJ107XG4gICAgICB0aGlzLmJsb2NrTmFtZSA9IHBhcmFtc1snYmxvY2tOYW1lJ107XG4gICAgICB0aGlzLmxpbmtJZCA9IHBhcmFtc1snbGlua0lkJ107XG4gICAgICB0aGlzLnNvbHV0aW9uSWQgPSBwYXJhbXNbJ3NvbHV0aW9uSWQnXTtcblxuICAgIH0pXG4gICAgdGhpcy5yb3V0ZXIuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmFwaUJhc2VVcmwgPSBkYXRhLmFwaWJhc2VVcmw7XG4gICAgICB0aGlzLnJlcG9ydENvbmZpZyA9IGRhdGEucmVwb3J0Q29uZmlnO1xuICAgICAgdGhpcy5jb21wb25lbnRJZCA9IGRhdGEuY29tcG9uZW50SWQ7XG4gICAgICB0aGlzLnNoYXJlTGlua0FwaSA9IGRhdGEuc2hhcmVMaW5rQXBpO1xuICAgICAgdGhpcy5wdWJsaWNTaGFyZWRCYXNlVXJsID0gZGF0YS5wdWJsaWNTaGFyZWRCYXNlVXJsO1xuICAgICAgdGhpcy5nbG9iYWxDb25maWcgPSBkYXRhLmdsb2JhbENvbmZpZztcbiAgICAgIHRoaXMuYmFzZVVybD0gIGRhdGEuYmFzZVVybDtcbiAgICAgIHRoaXMucG9ydGFsTmFtZSA9IGRhdGEucG9ydGFsTmFtZTtcblxuICAgIH0pO1xuICAgIHRoaXMuZ2V0TXVsdGlFbnRpdHlSZXBvcnQoKTtcbiAgfVxuICBnZXRNdWx0aUVudGl0eVJlcG9ydCgpIHtcbiAgICB0aGlzLnJlcG9ydFNlcnZpY2UuZ2V0TXVsdGlwbGVFbnRpdHlSZXBvcnQodGhpcy5hcGlCYXNlVXJsK3RoaXMucmVwb3J0Q29uZmlnLm11bHRpRW50aXR5SGlnaExldmVsUmVwb3J0LHRoaXMucHJvZ3JhbUlkLCB0aGlzLnNvbHV0aW9uSWQsdGhpcy5ibG9ja05hbWUsIHRoaXMuZW50aXR5SWQsdGhpcy5saW5rSWQpLnN1YnNjcmliZShzdWNjZXNzRGF0YSA9PiB7XG4gICAgICB0aGlzLm11dGlwbGVFbnRpdHkgPSBzdWNjZXNzRGF0YVsncmVzdWx0J107XG4gICAgICB0aGlzLmNyZWF0ZU5ld0RhdGEoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubXV0aXBsZUVudGl0eSk7XG5cbiAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJIaWRlKCk7XG4gICAgfSxlcnJvciA9PiB7XG4gICAgICAvL3RoaXMuc25hY2tCYXIub3Blbih0aGlzLmdsb2JhbENvbmZpZy5lcnJvck1lc3NhZ2UsIFwiT2tcIiwgeyBkdXJhdGlvbjogOTAwMCB9KTtcbiAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJIaWRlKCk7XG5cbiAgICB9XG4gICAgKVxuICB9XG4gIHVybCA9IFwiUFJPR0lEMDE/ZW50aXR5PVwiXG4gIGNyZWF0ZU5ld0RhdGEoKSB7XG5cblxuICAgIHRoaXMubXV0aXBsZUVudGl0eS5zZWN0aW9ucy5mb3JFYWNoKChlbGVtZW50LCBzZWN0aW9uSW5kZXgpID0+IHtcbiAgICAgIGVsZW1lbnQuc3ViU2VjdGlvbnMuZm9yRWFjaCgoc3ViU2VjdGlvbnMsIHN1YlNlY3Rpb25zSW5kZXgpID0+IHtcblxuICAgICAgICBsZXQgbmV3Z3JhcGhEYXRhID0gW107XG4gICAgICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLm11dGlwbGVFbnRpdHlbJ3NlY3Rpb25zJ11bc2VjdGlvbkluZGV4XVsnc3ViU2VjdGlvbnMnXVtzdWJTZWN0aW9uc0luZGV4XS5kYXRhKSB7XG4gICAgICAgICAgbGV0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKTtcbiAgICAgICAgICBsZXQgdG90YWxDb3VudEFycmF5OiBBcnJheTxudW1iZXI+ID0gT2JqZWN0LnZhbHVlcyhuZXdEYXRhKTtcbiAgICAgICAgICB0b3RhbENvdW50QXJyYXkuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgIGxldCB0b3RhbGNvdW50OiBudW1iZXIgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgdG90YWxDb3VudEFycmF5KSB7XG4gICAgICAgICAgICB0b3RhbGNvdW50ID0gZWxlbWVudCArIHRvdGFsY291bnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG5ld0RhdGEpO1xuICAgICAgICAgIG9iaktleXMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIG9iaktleXMpIHtcbiAgICAgICAgICAgIG5ld0RhdGFba2V5XSA9IChkYXRhW2tleV0gLyB0b3RhbGNvdW50KSAqIDEwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3Z3JhcGhEYXRhLnB1c2gobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tdXRpcGxlRW50aXR5WydzZWN0aW9ucyddW3NlY3Rpb25JbmRleF1bJ3N1YlNlY3Rpb25zJ11bc3ViU2VjdGlvbnNJbmRleF1bJ25ld0dyYXBoRGF0YSddID0gbmV3Z3JhcGhEYXRhO1xuICAgICAgfSk7XG5cbiAgICB9KTtcblxuICB9XG4gIG5hdmlhZ3RlVG9SdWJyaWNzKCkge1xuICAgIHRoaXMucm91dGUubmF2aWdhdGUoW1wiL3JlcG9ydC9mcmFtZXdvcmstcnVicmljXCJdLCB7IHF1ZXJ5UGFyYW1zOiB7IGxpbms6IHRoaXMubXV0aXBsZUVudGl0eS5mcmFtZXdvcmtVcmwubGluayB9IH0pO1xuICB9XG59XG4iXX0=