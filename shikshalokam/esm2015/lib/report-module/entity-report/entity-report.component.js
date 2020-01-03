/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../report-service/report.service';
import { MatSnackBar } from '@angular/material';
import { UtilityService } from '../../core-module/services/utility-service/utility.service';
export class EntityReportComponent {
    /**
     * @param {?} apiService
     * @param {?} snackBar
     * @param {?} route
     * @param {?} utility
     * @param {?} router
     */
    constructor(apiService, snackBar, route, utility, router) {
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
        this.getEntityReport();
    }
    /**
     * @return {?}
     */
    setColor() {
        /** @type {?} */
        let index = 0;
        /** @type {?} */
        let colorArray = [];
        this.entityResult.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            if (element.reportType == "tableGraph") {
                /** @type {?} */
                let colorArrayLength = element.graphData.data[0].length;
                for (let i = 1; i < colorArrayLength;) {
                    /** @type {?} */
                    let uniqueColor = this.getRandomColor();
                    if (!(colorArray.includes(uniqueColor) && uniqueColor.includes('#f'))) {
                        colorArray.push(uniqueColor);
                        i++;
                    }
                }
                this.entityResult[index].graphData.chartOptions.colors = colorArray;
            }
            index++;
        }));
    }
    /**
     * @return {?}
     */
    getRandomColor() {
        /** @type {?} */
        var letters = '0123456789ABCDEF';
        /** @type {?} */
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    /**
     * @return {?}
     */
    getEntityReport() {
        this.apiService.getSingleEntityReport(this.apiBaseUrl + this.reportConfig.singleEntityReport, this.programId, this.solutionId, this.entityId, this.linkId).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.insightReport = data['result'];
            this.utility.loaderHide();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
            this.utility.loaderHide();
        }));
    }
    /**
     * @return {?}
     */
    naviagteToRubrics() {
        this.route.navigate(["/report/framework-rubric"], { queryParams: { link: this.insightReport.frameworkUrl.link } });
    }
}
EntityReportComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-entity-report',
                template: "<app-loader></app-loader>\n\n<app-parent-heading *ngIf=\"!linkId\" [genericHeading]=\"headings\" [startIndex]=\"3\" [showControl]=\"false\"></app-parent-heading>\n\n<div>\n  <div class=\"_flex-box \">\n    <h4 class=\"marginTop\" style=\"flex:1\">{{'headings.performanceReport' | translate}}</h4>\n    <button *ngIf=\"!linkId\" mat-button color=\"primary\"\n      (click)=\"naviagteToRubrics()\">{{'headings.frameworkRubricView' | translate}}</button>\n    <app-share-link *ngIf=\"insightReport?.isShareable && !linkId\"\n     [publicSharedBaseUrl]=\"publicSharedBaseUrl\"\n     [componentId]=\"componentId\"\n     [globalConfig]=\"globalConfig\"\n     [baseUrl]=\"baseUrl\"\n     [portalName]=\"portalName\"\n      [shareLinkApi]=\"shareLinkApi\">\n    </app-share-link>\n\n  </div>\n  <div>\n    <mat-card>\n      <mat-list class=\"middle\">\n        <mat-list-item *ngFor=\"let item of insightReport?.summary;let last = last;\">\n          <div class=\"_flex-box _full-width\">\n            <div style=\"flex:1\">\n              {{item?.title}}\n            </div>\n            <div style=\"flex:2\">\n              <b>{{item?.value}}</b>\n            </div>\n          </div>\n          <mat-divider *ngIf=\"!last\"></mat-divider>\n\n        </mat-list-item>\n      </mat-list>\n    </mat-card>\n  </div>\n  <!-- <div class=\"col-xs-12 _flex-box _flex-end _small-Top-Margin\" ></div> -->\n\n  <div class=\"col-xs-12 marginTop\" *ngFor=\"let section of insightReport?.sections\">\n    <mat-card class=\"containerAdj\">\n      <mat-card-title class=\"title _capitalize\">\n        {{section?.heading}}\n      </mat-card-title>\n      <!-- <mat-card-subtitle>\n        \n      </mat-card-subtitle> -->\n      <mat-divider></mat-divider>\n      <mat-card-content>\n        <div class=\"_flex-box _margin-top _margin-bottom textColor\">\n          <span *ngFor=\"let header of section?.summary; let last = last\" class=\"_flex-box\">\n            {{header?.label}} : {{header?.value}}\n            <i class=\"material-icons\" *ngIf=\"!last\">\n              keyboard_arrow_right\n            </i>\n          </span>\n        </div>\n        <app-graph-table-chart [section]=\"section\"></app-graph-table-chart>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n\n</div>",
                styles: [".paddingTop{padding:20px 0}.paddingBottom{padding:0 0 20px}.marginTop{margin:20px 0;padding:0}.height{height:350px;overflow:hidden}.profileHeight{padding:0;display:flex;align-items:center}.profileIcon{font-size:10vw}.profileContent{padding-left:20px}.flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.reportDashboard{padding:20px}.wrapper{padding:0 20px}.userIcon{height:200px}.userIcon:after{content:\"\";background:var(--light-grey-color);position:absolute;top:20%;right:0;height:60%;width:1px}.flexBox{display:flex;flex-direction:column;justify-content:flex-start}.subHeading{color:var(--grey-color);overflow:hidden;text-overflow:ellipsis}.dividerWidth{margin:0 20px;width:calc(100% - 40px)!important}._flexbox{display:flex;align-items:baseline}.horizontalLine{border-bottom:1px solid var(--light-grey-color);width:calc(100% - 20px)!important;padding:0 0 20px}.flex-direction-column{flex-direction:column;display:flex;overflow-x:auto}.flexWarp{flex-wrap:wrap}.middle{padding:0}.containerAdj{padding:15px!important}.title{font-size:18px}.textColor{color:var(--primary-color);text-transform:capitalize}"]
            }] }
];
/** @nocollapse */
EntityReportComponent.ctorParameters = () => [
    { type: ReportService },
    { type: MatSnackBar },
    { type: Router },
    { type: UtilityService },
    { type: ActivatedRoute }
];
EntityReportComponent.propDecorators = {
    globalConfig: [{ type: Input }],
    apiBaseUrl: [{ type: Input }],
    reportConfig: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXJlcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvcmVwb3J0LW1vZHVsZS9lbnRpdHktcmVwb3J0L2VudGl0eS1yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBTzVGLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7O0lBaUJoQyxZQUFvQixVQUF5QixFQUNuQyxRQUFxQixFQUNyQixLQUFhLEVBQ2IsT0FBdUIsRUFBVSxNQUFzQjtRQUg3QyxlQUFVLEdBQVYsVUFBVSxDQUFlO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFsQmpFLGFBQVEsR0FBRyw2QkFBNkIsQ0FBQTtRQW1CdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFB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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVwb3J0U2VydmljZSB9IGZyb20gJy4uL3JlcG9ydC1zZXJ2aWNlL3JlcG9ydC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUtbW9kdWxlL3NlcnZpY2VzL3V0aWxpdHktc2VydmljZS91dGlsaXR5LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZW50aXR5LXJlcG9ydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9lbnRpdHktcmVwb3J0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZW50aXR5LXJlcG9ydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eVJlcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaGVhZGluZ3MgPSAnaGVhZGluZ3MucmVwb3J0RW50aXR5UmVwb3J0J1xuICBlbnRpdHlSZXN1bHQ7XG4gIGluc2lnaHRSZXBvcnQ7XG4gIHByb2dyYW1JZDtcbiAgZW50aXR5SWQ7XG4gIEBJbnB1dCgpIGdsb2JhbENvbmZpZztcbiAgQElucHV0KCkgYXBpQmFzZVVybDogYW55O1xuICBASW5wdXQoKSByZXBvcnRDb25maWc6IGFueTtcbiAgc2hhcmVMaW5rQXBpOiBhbnk7XG4gIHB1YmxpY1NoYXJlZEJhc2VVcmw6IGFueTtcbiAgbGlua0lkOiBzdHJpbmc7XG4gIGNvbXBvbmVudElkOiBhbnk7XG4gIGJhc2VVcmw6IGFueTtcbiAgcG9ydGFsTmFtZTogYW55O1xuICBzb2x1dGlvbklkOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogUmVwb3J0U2VydmljZSxcbiAgICBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcbiAgICBwcml2YXRlIHJvdXRlOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSB1dGlsaXR5OiBVdGlsaXR5U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgdGhpcy5wcm9ncmFtSWQgPSB0aGlzLnJvdXRlci5zbmFwc2hvdC5xdWVyeVBhcmFtTWFwLmdldCgncHJvZ3JhbUlkJyk7XG4gICAgdGhpcy5zb2x1dGlvbklkID0gdGhpcy5yb3V0ZXIuc25hcHNob3QucXVlcnlQYXJhbU1hcC5nZXQoJ3NvbHV0aW9uSWQnKTtcbiAgICB0aGlzLmxpbmtJZCA9IHRoaXMucm91dGVyLnNuYXBzaG90LnF1ZXJ5UGFyYW1NYXAuZ2V0KCdsaW5rSWQnKTtcblxuICAgIHRoaXMuZW50aXR5SWQgPSB0aGlzLnJvdXRlci5zbmFwc2hvdC5wYXJhbXMuZW50aXR5SWQ7XG4gICAgdGhpcy5yb3V0ZXIuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmFwaUJhc2VVcmwgPSBkYXRhLmFwaWJhc2VVcmw7XG4gICAgICB0aGlzLnJlcG9ydENvbmZpZyA9IGRhdGEucmVwb3J0Q29uZmlnO1xuICAgICAgdGhpcy5zaGFyZUxpbmtBcGkgPSBkYXRhLnNoYXJlTGlua0FwaTtcbiAgICAgIHRoaXMucHVibGljU2hhcmVkQmFzZVVybCA9IGRhdGEucHVibGljU2hhcmVkQmFzZVVybDtcbiAgICAgIHRoaXMuZ2xvYmFsQ29uZmlnID0gZGF0YS5nbG9iYWxDb25maWc7XG4gICAgICB0aGlzLmNvbXBvbmVudElkID0gZGF0YS5jb21wb25lbnRJZDtcbiAgICAgIHRoaXMuYmFzZVVybCA9IGRhdGEuYmFzZVVybDtcbiAgICAgIHRoaXMucG9ydGFsTmFtZSA9IGRhdGEucG9ydGFsTmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXRpbGl0eS5sb2FkZXJTaG93KCk7XG4gICAgdGhpcy5nZXRFbnRpdHlSZXBvcnQoKTtcbiAgfVxuICBzZXRDb2xvcigpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBjb2xvckFycmF5ID0gW107XG4gICAgdGhpcy5lbnRpdHlSZXN1bHQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50LnJlcG9ydFR5cGUgPT0gXCJ0YWJsZUdyYXBoXCIpIHtcbiAgICAgICAgbGV0IGNvbG9yQXJyYXlMZW5ndGggPSBlbGVtZW50LmdyYXBoRGF0YS5kYXRhWzBdLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjb2xvckFycmF5TGVuZ3RoOykge1xuICAgICAgICAgIGxldCB1bmlxdWVDb2xvciA9IHRoaXMuZ2V0UmFuZG9tQ29sb3IoKTtcbiAgICAgICAgICBpZiAoIShjb2xvckFycmF5LmluY2x1ZGVzKHVuaXF1ZUNvbG9yKSAmJiB1bmlxdWVDb2xvci5pbmNsdWRlcygnI2YnKSkpIHtcbiAgICAgICAgICAgIGNvbG9yQXJyYXkucHVzaCh1bmlxdWVDb2xvcik7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbnRpdHlSZXN1bHRbaW5kZXhdLmdyYXBoRGF0YS5jaGFydE9wdGlvbnMuY29sb3JzID0gY29sb3JBcnJheTtcbiAgICAgIH1cbiAgICAgIGluZGV4Kys7XG4gICAgfSk7XG4gIH1cblxuICBnZXRSYW5kb21Db2xvcigpIHtcbiAgICB2YXIgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJztcbiAgICB2YXIgY29sb3IgPSAnIyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgZ2V0RW50aXR5UmVwb3J0KCkge1xuICAgIHRoaXMuYXBpU2VydmljZS5nZXRTaW5nbGVFbnRpdHlSZXBvcnQodGhpcy5hcGlCYXNlVXJsICsgdGhpcy5yZXBvcnRDb25maWcuc2luZ2xlRW50aXR5UmVwb3J0LCB0aGlzLnByb2dyYW1JZCx0aGlzLnNvbHV0aW9uSWQsIHRoaXMuZW50aXR5SWQsIHRoaXMubGlua0lkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmluc2lnaHRSZXBvcnQgPSBkYXRhWydyZXN1bHQnXTtcbiAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJIaWRlKCk7XG4gICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNuYWNrQmFyLm9wZW4odGhpcy5nbG9iYWxDb25maWcuZXJyb3JNZXNzYWdlLCBcIk9rXCIsIHsgZHVyYXRpb246IDkwMDAgfSk7XG4gICAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJIaWRlKCk7XG4gICAgICB9KVxuICB9XG5cbiAgbmF2aWFndGVUb1J1YnJpY3MoKSB7XG4gICAgdGhpcy5yb3V0ZS5uYXZpZ2F0ZShbXCIvcmVwb3J0L2ZyYW1ld29yay1ydWJyaWNcIl0sIHsgcXVlcnlQYXJhbXM6IHsgbGluazogdGhpcy5pbnNpZ2h0UmVwb3J0LmZyYW1ld29ya1VybC5saW5rIH0gfSk7XG4gIH1cbn1cbiJdfQ==