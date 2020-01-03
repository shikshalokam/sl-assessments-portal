/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../report-service/report.service';
import { MatSnackBar } from '@angular/material';
import { UtilityService } from '../../core-module/services/utility-service/utility.service';
var EntityReportComponent = /** @class */ (function () {
    function EntityReportComponent(apiService, snackBar, route, utility, router) {
        var _this = this;
        this.apiService = apiService;
        this.snackBar = snackBar;
        this.route = route;
        this.utility = utility;
        this.router = router;
        this.headings = 'headings.reportEntityReport';
        this.programId = this.router.snapshot.queryParamMap.get('programId');
        this.solutionId = this.router.snapshot.queryParamMap.get('solutionId');
        this.linkId = this.router.snapshot.queryParamMap.get('linkId');
        this.entityId = this.router.snapshot.params.entityId;
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
    EntityReportComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.utility.loaderShow();
        this.getEntityReport();
    };
    /**
     * @return {?}
     */
    EntityReportComponent.prototype.setColor = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var index = 0;
        /** @type {?} */
        var colorArray = [];
        this.entityResult.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (element.reportType == "tableGraph") {
                /** @type {?} */
                var colorArrayLength = element.graphData.data[0].length;
                for (var i = 1; i < colorArrayLength;) {
                    /** @type {?} */
                    var uniqueColor = _this.getRandomColor();
                    if (!(colorArray.includes(uniqueColor) && uniqueColor.includes('#f'))) {
                        colorArray.push(uniqueColor);
                        i++;
                    }
                }
                _this.entityResult[index].graphData.chartOptions.colors = colorArray;
            }
            index++;
        }));
    };
    /**
     * @return {?}
     */
    EntityReportComponent.prototype.getRandomColor = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var letters = '0123456789ABCDEF';
        /** @type {?} */
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    /**
     * @return {?}
     */
    EntityReportComponent.prototype.getEntityReport = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.getSingleEntityReport(this.apiBaseUrl + this.reportConfig.singleEntityReport, this.programId, this.solutionId, this.entityId, this.linkId).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.insightReport = data['result'];
            _this.utility.loaderHide();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.snackBar.open(_this.globalConfig.errorMessage, "Ok", { duration: 9000 });
            _this.utility.loaderHide();
        }));
    };
    /**
     * @return {?}
     */
    EntityReportComponent.prototype.naviagteToRubrics = /**
     * @return {?}
     */
    function () {
        this.route.navigate(["/report/framework-rubric"], { queryParams: { link: this.insightReport.frameworkUrl.link } });
    };
    EntityReportComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-entity-report',
                    template: "<app-loader></app-loader>\n\n<app-parent-heading *ngIf=\"!linkId\" [genericHeading]=\"headings\" [startIndex]=\"3\" [showControl]=\"false\"></app-parent-heading>\n\n<div>\n  <div class=\"_flex-box \">\n    <h4 class=\"marginTop\" style=\"flex:1\">{{'headings.performanceReport' | translate}}</h4>\n    <button *ngIf=\"!linkId\" mat-button color=\"primary\"\n      (click)=\"naviagteToRubrics()\">{{'headings.frameworkRubricView' | translate}}</button>\n    <app-share-link *ngIf=\"insightReport?.isShareable && !linkId\"\n     [publicSharedBaseUrl]=\"publicSharedBaseUrl\"\n     [componentId]=\"componentId\"\n     [globalConfig]=\"globalConfig\"\n     [baseUrl]=\"baseUrl\"\n     [portalName]=\"portalName\"\n      [shareLinkApi]=\"shareLinkApi\">\n    </app-share-link>\n\n  </div>\n  <div>\n    <mat-card>\n      <mat-list class=\"middle\">\n        <mat-list-item *ngFor=\"let item of insightReport?.summary;let last = last;\">\n          <div class=\"_flex-box _full-width\">\n            <div style=\"flex:1\">\n              {{item?.title}}\n            </div>\n            <div style=\"flex:2\">\n              <b>{{item?.value}}</b>\n            </div>\n          </div>\n          <mat-divider *ngIf=\"!last\"></mat-divider>\n\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n  <!-- <div class=\"col-xs-12 _flex-box _flex-end _small-Top-Margin\" ></div> -->\n\n  <div class=\"col-xs-12 marginTop\" *ngFor=\"let section of insightReport?.sections\">\n    <mat-card class=\"containerAdj\">\n      <mat-card-title class=\"title _capitalize\">\n        {{section?.heading}}\n      </mat-card-title>\n      <!-- <mat-card-subtitle>\n        \n      </mat-card-subtitle> -->\n      <mat-divider></mat-divider>\n      <mat-card-content>\n        <div class=\"_flex-box _margin-top _margin-bottom textColor\">\n          <span *ngFor=\"let header of section?.summary; let last = last\" class=\"_flex-box\">\n            {{header?.label}} : {{header?.value}}\n            <i class=\"material-icons\" *ngIf=\"!last\">\n              keyboard_arrow_right\n            </i>\n          </span>\n        </div>\n        <app-graph-table-chart [section]=\"section\"></app-graph-table-chart>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n\n</div>",
                    styles: [".paddingTop{padding:20px 0}.paddingBottom{padding:0 0 20px}.marginTop{margin:20px 0;padding:0}.height{height:350px;overflow:hidden}.profileHeight{padding:0;display:flex;align-items:center}.profileIcon{font-size:10vw}.profileContent{padding-left:20px}.flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.reportDashboard{padding:20px}.wrapper{padding:0 20px}.userIcon{height:200px}.userIcon:after{content:\"\";background:var(--light-grey-color);position:absolute;top:20%;right:0;height:60%;width:1px}.flexBox{display:flex;flex-direction:column;justify-content:flex-start}.subHeading{color:var(--grey-color);overflow:hidden;text-overflow:ellipsis}.dividerWidth{margin:0 20px;width:calc(100% - 40px)!important}._flexbox{display:flex;align-items:baseline}.horizontalLine{border-bottom:1px solid var(--light-grey-color);width:calc(100% - 20px)!important;padding:0 0 20px}.flex-direction-column{flex-direction:column;display:flex;overflow-x:auto}.flexWarp{flex-wrap:wrap}.middle{padding:0}.containerAdj{padding:15px!important}.title{font-size:18px}.textColor{color:var(--primary-color);text-transform:capitalize}"]
                }] }
    ];
    /** @nocollapse */
    EntityReportComponent.ctorParameters = function () { return [
        { type: ReportService },
        { type: MatSnackBar },
        { type: Router },
        { type: UtilityService },
        { type: ActivatedRoute }
    ]; };
    EntityReportComponent.propDecorators = {
        globalConfig: [{ type: Input }],
        apiBaseUrl: [{ type: Input }],
        reportConfig: [{ type: Input }]
    };
    return EntityReportComponent;
}());
export { EntityReportComponent };
if (false) {
    /** @type {?} */
    EntityReportComponent.prototype.headings;
    /** @type {?} */
    EntityReportComponent.prototype.entityResult;
    /** @type {?} */
    EntityReportComponent.prototype.insightReport;
    /** @type {?} */
    EntityReportComponent.prototype.programId;
    /** @type {?} */
    EntityReportComponent.prototype.entityId;
    /** @type {?} */
    EntityReportComponent.prototype.globalConfig;
    /** @type {?} */
    EntityReportComponent.prototype.apiBaseUrl;
    /** @type {?} */
    EntityReportComponent.prototype.reportConfig;
    /** @type {?} */
    EntityReportComponent.prototype.shareLinkApi;
    /** @type {?} */
    EntityReportComponent.prototype.publicSharedBaseUrl;
    /** @type {?} */
    EntityReportComponent.prototype.linkId;
    /** @type {?} */
    EntityReportComponent.prototype.componentId;
    /** @type {?} */
    EntityReportComponent.prototype.baseUrl;
    /** @type {?} */
    EntityReportComponent.prototype.portalName;
    /** @type {?} */
    EntityReportComponent.prototype.solutionId;
    /**
     * @type {?}
     * @private
     */
    EntityReportComponent.prototype.apiService;
    /**
     * @type {?}
     * @private
     */
    EntityReportComponent.prototype.snackBar;
    /**
     * @type {?}
     * @private
     */
    EntityReportComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    EntityReportComponent.prototype.utility;
    /**
     * @type {?}
     * @private
     */
    EntityReportComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXJlcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvcmVwb3J0LW1vZHVsZS9lbnRpdHktcmVwb3J0L2VudGl0eS1yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRTVGO0lBc0JFLCtCQUFvQixVQUF5QixFQUNuQyxRQUFxQixFQUNyQixLQUFhLEVBQ2IsT0FBdUIsRUFBVSxNQUFzQjtRQUhqRSxpQkFtQkM7UUFuQm1CLGVBQVUsR0FBVixVQUFVLENBQWU7UUFDbkMsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQWxCakUsYUFBUSxHQUFHLDZCQUE2QixDQUFBO1FBbUJ0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFB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QUFpQzs7Ozs7SUFDM0MseUNBQTZCOzs7OztJQUM3QixzQ0FBcUI7Ozs7O0lBQ3JCLHdDQUErQjs7Ozs7SUFBRSx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVwb3J0U2VydmljZSB9IGZyb20gJy4uL3JlcG9ydC1zZXJ2aWNlL3JlcG9ydC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUtbW9kdWxlL3NlcnZpY2VzL3V0aWxpdHktc2VydmljZS91dGlsaXR5LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZW50aXR5LXJlcG9ydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9lbnRpdHktcmVwb3J0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZW50aXR5LXJlcG9ydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eVJlcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaGVhZGluZ3MgPSAnaGVhZGluZ3MucmVwb3J0RW50aXR5UmVwb3J0J1xuICBlbnRpdHlSZXN1bHQ7XG4gIGluc2lnaHRSZXBvcnQ7XG4gIHByb2dyYW1JZDtcbiAgZW50aXR5SWQ7XG4gIEBJbnB1dCgpIGdsb2JhbENvbmZpZztcbiAgQElucHV0KCkgYXBpQmFzZVVybDogYW55O1xuICBASW5wdXQoKSByZXBvcnRDb25maWc6IGFueTtcbiAgc2hhcmVMaW5rQXBpOiBhbnk7XG4gIHB1YmxpY1NoYXJlZEJhc2VVcmw6IGFueTtcbiAgbGlua0lkOiBzdHJpbmc7XG4gIGNvbXBvbmVudElkOiBhbnk7XG4gIGJhc2VVcmw6IGFueTtcbiAgcG9ydGFsTmFtZTogYW55O1xuICBzb2x1dGlvbklkOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogUmVwb3J0U2VydmljZSxcbiAgICBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcbiAgICBwcml2YXRlIHJvdXRlOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSB1dGlsaXR5OiBVdGlsaXR5U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgdGhpcy5wcm9ncmFtSWQgPSB0aGlzLnJvdXRlci5zbmFwc2hvdC5xdWVyeVBhcmFtTWFwLmdldCgncHJvZ3JhbUlkJyk7XG4gICAgdGhpcy5zb2x1dGlvbklkID0gdGhpcy5yb3V0ZXIuc25hcHNob3QucXVlcnlQYXJhbU1hcC5nZXQoJ3NvbHV0aW9uSWQnKTtcbiAgICB0aGlzLmxpbmtJZCA9IHRoaXMucm91dGVyLnNuYXBzaG90LnF1ZXJ5UGFyYW1NYXAuZ2V0KCdsaW5rSWQnKTtcblxuICAgIHRoaXMuZW50aXR5SWQgPSB0aGlzLnJvdXRlci5zbmFwc2hvdC5wYXJhbXMuZW50aXR5SWQ7XG4gICAgdGhpcy5yb3V0ZXIuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmFwaUJhc2VVcmwgPSBkYXRhLmFwaWJhc2VVcmw7XG4gICAgICB0aGlzLnJlcG9ydENvbmZpZyA9IGRhdGEucmVwb3J0Q29uZmlnO1xuICAgICAgdGhpcy5zaGFyZUxpbmtBcGkgPSBkYXRhLnNoYXJlTGlua0FwaTtcbiAgICAgIHRoaXMucHVibGljU2hhcmVkQmFzZVVybCA9IGRhdGEucHVibGljU2hhcmVkQmFzZVVybDtcbiAgICAgIHRoaXMuZ2xvYmFsQ29uZmlnID0gZGF0YS5nbG9iYWxDb25maWc7XG4gICAgICB0aGlzLmNvbXBvbmVudElkID0gZGF0YS5jb21wb25lbnRJZDtcbiAgICAgIHRoaXMuYmFzZVVybCA9IGRhdGEuYmFzZVVybDtcbiAgICAgIHRoaXMucG9ydGFsTmFtZSA9IGRhdGEucG9ydGFsTmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXRpbGl0eS5sb2FkZXJTaG93KCk7XG4gICAgdGhpcy5nZXRFbnRpdHlSZXBvcnQoKTtcbiAgfVxuICBzZXRDb2xvcigpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBjb2xvckFycmF5ID0gW107XG4gICAgdGhpcy5lbnRpdHlSZXN1bHQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50LnJlcG9ydFR5cGUgPT0gXCJ0YWJsZUdyYXBoXCIpIHtcbiAgICAgICAgbGV0IGNvbG9yQXJyYXlMZW5ndGggPSBlbGVtZW50LmdyYXBoRGF0YS5kYXRhWzBdLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjb2xvckFycmF5TGVuZ3RoOykge1xuICAgICAgICAgIGxldCB1bmlxdWVDb2xvciA9IHRoaXMuZ2V0UmFuZG9tQ29sb3IoKTtcbiAgICAgICAgICBpZiAoIShjb2xvckFycmF5LmluY2x1ZGVzKHVuaXF1ZUNvbG9yKSAmJiB1bmlxdWVDb2xvci5pbmNsdWRlcygnI2YnKSkpIHtcbiAgICAgICAgICAgIGNvbG9yQXJyYXkucHVzaCh1bmlxdWVDb2xvcik7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbnRpdHlSZXN1bHRbaW5kZXhdLmdyYXBoRGF0YS5jaGFydE9wdGlvbnMuY29sb3JzID0gY29sb3JBcnJheTtcbiAgICAgIH1cbiAgICAgIGluZGV4Kys7XG4gICAgfSk7XG4gIH1cblxuICBnZXRSYW5kb21Db2xvcigpIHtcbiAgICB2YXIgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJztcbiAgICB2YXIgY29sb3IgPSAnIyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgZ2V0RW50aXR5UmVwb3J0KCkge1xuICAgIHRoaXMuYXBpU2VydmljZS5nZXRTaW5nbGVFbnRpdHlSZXBvcnQodGhpcy5hcGlCYXNlVXJsICsgdGhpcy5yZXBvcnRDb25maWcuc2luZ2xlRW50aXR5UmVwb3J0LCB0aGlzLnByb2dyYW1JZCx0aGlzLnNvbHV0aW9uSWQsIHRoaXMuZW50aXR5SWQsIHRoaXMubGlua0lkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmluc2lnaHRSZXBvcnQgPSBkYXRhWydyZXN1bHQnXTtcbiAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJIaWRlKCk7XG4gICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNuYWNrQmFyLm9wZW4odGhpcy5nbG9iYWxDb25maWcuZXJyb3JNZXNzYWdlLCBcIk9rXCIsIHsgZHVyYXRpb246IDkwMDAgfSk7XG4gICAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJIaWRlKCk7XG4gICAgICB9KVxuICB9XG5cbiAgbmF2aWFndGVUb1J1YnJpY3MoKSB7XG4gICAgdGhpcy5yb3V0ZS5uYXZpZ2F0ZShbXCIvcmVwb3J0L2ZyYW1ld29yay1ydWJyaWNcIl0sIHsgcXVlcnlQYXJhbXM6IHsgbGluazogdGhpcy5pbnNpZ2h0UmVwb3J0LmZyYW1ld29ya1VybC5saW5rIH0gfSk7XG4gIH1cbn1cbiJdfQ==