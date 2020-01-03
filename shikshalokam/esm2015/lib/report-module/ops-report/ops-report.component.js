/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatAccordion, MatSnackBar } from '@angular/material';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { OperationsService } from '../operations-service/operations.service';
import { CamelCasePipe } from '../../core-module/pipes/camelcase-pipe/camelcase.pipe';
import { UtilityService } from '../../core-module/services/utility-service/utility.service';
export class OpsReportComponent {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} _fb
     * @param {?} operationService
     * @param {?} utility
     * @param {?} snackBar
     */
    constructor(router, route, _fb, operationService, utility, snackBar) {
        this.router = router;
        this.route = route;
        this._fb = _fb;
        this.operationService = operationService;
        this.utility = utility;
        this.snackBar = snackBar;
        this.reportGenerate = false;
        this.entityPageIndex = 0;
        this.assessorPageIndex = 0;
        this.headings = 'headings.opsReport';
        this.maxDate = new Date();
        this.queryParamsUrl = '';
        this.searchEntityValue = '';
        this.searchAssessorName = '';
        this.itemsPerPage = [10, 15, 20];
        this.searchParam = '';
        this.pageReload = true;
        this.summaryGraph = {};
        this.entityPageLimit = 10;
        this.assessorPageLimit = 10;
        this.expandedFilters = true;
        this.currentRouterUrl = '';
        this.queryParamsRouterUrl = '';
        this.route.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.apiBaseUrl = data.apibaseUrl;
            this.reportConfig = data.reportConfig;
            this.shareLinkApi = data.shareLinkApi;
            this.publicSharedBaseUrl = data.publicSharedBaseUrl;
            this.globalConfig = data.globalConfig;
            this.noAssess = data.noAssess;
            this.componentId = data.componentId;
            this.hostUrl = data.apibaseUrl;
            this.baseUrl = data.baseUrl;
            this.portalName = data.portalName;
        }));
        this.filterForm = this._fb.group({
            formDate: ['', Validators.required],
            toDate: ['', Validators.required]
        });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    pdf(id) {
        /** @type {?} */
        var data = document.getElementById(id);
        html2canvas(data).then((/**
         * @param {?} canvas
         * @return {?}
         */
        canvas => {
            /** @type {?} */
            var imgWidth = 208;
            /** @type {?} */
            var pageHeight = 295;
            /** @type {?} */
            var imgHeight = canvas.height * imgWidth / canvas.width;
            /** @type {?} */
            var heightLeft = imgHeight;
            /** @type {?} */
            const contentDataURL = canvas.toDataURL('image/png');
            /** @type {?} */
            let pdf = new jspdf('p', 'mm', 'a4');
            /** @type {?} */
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save(id + '.pdf');
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentRouterUrl = window.location.href;
        this.route.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            /** @type {?} */
            let param = Object.assign({}, params);
            this.pageParam = params;
            console.log(params);
            this.utility.loaderShow();
            this.linkId = params['linkId'];
            this.getUserProfile(params['solutionId']);
            this.filters(params['solutionId']);
            this.applyFilter(this.pageParam);
            this.urlQueryParams = Object.assign({}, params);
            delete param.solutionId;
            if (Object.keys(param).length) {
                this.generateReport(param);
                this.expandedFilters = false;
            }
            else {
                this.filterForm.reset();
                this.expandedFilters = true;
                this.reportGenerate = false;
                this.assessorReport = [];
                this.entityReport = [];
                this.summaryData = {};
            }
        }));
        // this.route.queryParams.subscribe(params => {
        //   this.pageParam = params;
        //   this.utility.loaderShow();
        //   this.linkId = params['linkId'];
        //   this.getUserProfile(params['solutionId']);
        //   this.filters(params['solutionId']);
        //   this.applyFilter(this.pageParam);
        //   // if (this.pageReload) {
        //     if (Object.keys(params).length > 1) {
        //       // let param = Object.assign({}, params);
        //       // delete param['solutionId'];
        //       // delete param['componentName'];
        //       // this.applyFilter(param);
        //       // this.expandedFilters = false;
        //       this.reportGenerate = true;
        //     }
        //     // this.pageReload = false;
        //   // }
        // })
    }
    /**
     * @param {?} condition
     * @return {?}
     */
    filterApply(condition) {
        //console.logcondition)
        if (condition === 'reset') {
            this.filterForm.reset();
            // this.router.navigate(['/operations/reports'], { queryParams: { solutionId: this.pageParam['solutionId'] } });
            this.reportGenerate = false;
            this.filterArray = [];
            /** @type {?} */
            const keys = Object.keys(this.urlQueryParams);
            /** @type {?} */
            const obj = {};
            for (const key of keys) {
                obj[key] = null;
            }
            obj['solutionId'] = this.pageParam.solutionId;
            this.applyFilter(obj);
            // this.route.queryParams.subscribe(params => {
            //   if(this.noAssess){
            //     let resetUrl = '/programs/public/ops-reports?solutionId=' + params['solutionId']
            //     window.history.pushState({ path: resetUrl }, '', resetUrl);
            //   }
            //   else{
            //   let resetUrl = '/programs/operations/ops-reports?solutionId=' + params['solutionId']
            //   window.history.pushState({ path: resetUrl }, '', resetUrl);
            //   }
            // })
        }
        else {
            // this.filterPanel.closeAll();
            this.pageReload = false;
            this.expandedFilters = !this.expandedFilters;
            this.filterObject = this.filterForm.getRawValue();
            for (let filter in this.filterObject) {
                if (this.filterObject[filter] === null || this.filterObject[filter] === undefined || this.filterObject[filter] === "" || this.filterObject[filter] === "aN-aN-NaN") {
                    delete this.filterObject[filter];
                }
            }
            if (this.filterObject.toDate) {
                // this.filterObject['fromDate']= this.applyDate(this.filterObject.fromDate)
                this.filterObject['toDate'] = this.applyDate(this.filterObject.toDate);
            }
            if (this.filterObject.fromDate) {
                this.filterObject['fromDate'] = this.applyDate(this.filterObject.fromDate);
                // this.filterObject['toDate']= this.applyDate(this.filterObject.toDate);
            }
            this.applyFilter(this.filterObject);
            this.filterArray = Object.entries(this.filterObject);
        }
    }
    /**
     * @param {?} data
     * @param {?=} type
     * @return {?}
     */
    mapGraphObject(data, type = 'call') {
        if (type === 'call') {
            data.forEach((/**
             * @param {?} object
             * @param {?} ind
             * @return {?}
             */
            (object, ind) => {
                console.log(object);
                for (let i = 0; i < object.graphData.length; i++) {
                    /** @type {?} */
                    const dataArray = this.getData(object, i);
                    Object.assign(data[ind].graphData[i], {
                        data: dataArray
                    });
                    Object.assign(data[ind].graphData[i].chartOptions, { legend: { position: 'top', alignment: 'end' } });
                }
                object.graphData.forEach((/**
                 * @param {?} item
                 * @param {?} index
                 * @return {?}
                 */
                (item, index) => {
                    if (object.graphData[index].data.length > 2 && object.graphData[index].chartType === 'ColumnChart') {
                        Object.assign(data[ind].graphData[index].chartOptions, {
                            isStack: true,
                        });
                    }
                    if (data[ind].graphData[index].data.length > 10) {
                        Object.assign(data[ind].graphData[index].chartOptions.hAxis, { textPosition: 'none' });
                    }
                    /** @type {?} */
                    let colNameArray = [];
                    data[ind].graphData[index].columnNames.forEach((/**
                     * @param {?} column
                     * @return {?}
                     */
                    column => {
                        colNameArray.push(new CamelCasePipe().transform(column));
                    }));
                    Object.assign(data[ind].graphData[index], { columnNames: colNameArray });
                }));
                new CamelCasePipe().transform('entityList');
                /** @type {?} */
                const headers = this.getTableHeader(object);
                Object.assign(data[ind], { tableHeader: headers });
            }));
            ////console.logdata)
            return data;
        }
        else {
            for (let i = 0; i < data.graphData.length; i++) {
                /** @type {?} */
                const dataArray = this.getData(data, i);
                Object.assign(data.graphData[i], {
                    data: dataArray
                });
                Object.assign(data.graphData[i].chartOptions, { legend: { position: 'top', alignment: 'end' } });
            }
            data.graphData.forEach((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            (item, index) => {
                if (data.graphData[index].data.length > 2 && data.graphData[index].chartType === 'ColumnChart') {
                    Object.assign(data.graphData[index].chartOptions, {
                        isStack: true,
                    });
                }
                if (data.graphData[index].data.length > 10) {
                    Object.assign(data.graphData[index].chartOptions.hAxis, { textPosition: 'none' });
                }
                /** @type {?} */
                let colNameArray = [];
                data.graphData[index].columnNames.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                column => {
                    colNameArray.push(new CamelCasePipe().transform(column));
                }));
                Object.assign(data.graphData[index], { columnNames: colNameArray });
            }));
            new CamelCasePipe().transform('entityList');
            /** @type {?} */
            const headers = this.getTableHeader(data);
            Object.assign(data, { tableHeader: headers });
            console.log(data.graphData);
            return data.graphData;
        }
    }
    /**
     * @param {?} object
     * @return {?}
     */
    getTableHeader(object) {
        /** @type {?} */
        let headingArray = [];
        object.tabularData.headers.forEach((/**
         * @param {?} header
         * @return {?}
         */
        header => {
            headingArray.push(header.name);
        }));
        return headingArray;
    }
    /**
     * @param {?} object
     * @param {?} i
     * @return {?}
     */
    getData(object, i) {
        /** @type {?} */
        let dataArray = [];
        for (let j = 0; j < object.data.length; j++) {
            /** @type {?} */
            let columnArray = this.getColumn(object, i, j);
            dataArray.push(columnArray);
        }
        return dataArray;
    }
    /**
     * @param {?} solutionId
     * @return {?}
     */
    getUserProfile(solutionId) {
        this.operationService.getUserProfileSummary(this.apiBaseUrl + this.reportConfig.profileSummary + solutionId).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            ////console.logdata);
            this.summaryProfileData = data['result'];
            /** @type {?} */
            const arrayToObject = (/**
             * @param {?} array
             * @param {?} keyField
             * @return {?}
             */
            (array, keyField) => array.reduce((/**
             * @param {?} obj
             * @param {?} item
             * @return {?}
             */
            (obj, item) => {
                obj[item[keyField]] = item;
                return obj;
            }), {}));
            this.summaryProfileData = arrayToObject(this.summaryProfileData, "label");
            if (this.noAssess) {
                this.utility.loaderHide();
            }
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
     * @param {?} object
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    getColumn(object, i, j) {
        /** @type {?} */
        let colArray = [];
        object.graphData[i].columnNames.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        (column, index) => {
            column = column.trim();
            if (index > 0) {
                if (object.data[j][column] === "") {
                    colArray.push(0);
                }
                else {
                    colArray.push(Math.round(object.data[j][column]));
                }
            }
            else {
                colArray.push(object.data[j][column]);
            }
        }));
        return colArray;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    applyDate(value) {
        /** @type {?} */
        var date = new Date(value);
        /** @type {?} */
        var mnth = ("0" + (date.getMonth() + 1)).slice(-2);
        /** @type {?} */
        var day = ("0" + date.getDate()).slice(-2);
        /** @type {?} */
        const val = [day, mnth, date.getFullYear()].join("-");
        return val;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    applyFilter(obj) {
        /** @type {?} */
        let navigationExtras = {
            queryParams: obj,
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        };
        this.router.navigate([], navigationExtras);
    }
    /**
     * @param {?} key
     * @param {?} event
     * @return {?}
     */
    inputChange(key, event) {
        this.applyFilter({ [key]: event.target.value });
        if (key == 'entityId') {
            this.searchEntityId = event.target.value;
        }
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    selectType(key, value) {
        this.applyFilter({ [key]: value });
    }
    /**
     * @param {?} param
     * @return {?}
     */
    generateReport(param) {
        this.queryParamsUrl = this.pageParam['solutionId'] + "?";
        /** @type {?} */
        let paramKey = Object.keys(param);
        if (paramKey.includes('componentName')) {
            paramKey.splice(paramKey.indexOf('componentName'), 1);
        }
        /** @type {?} */
        let index = 0;
        if (paramKey.includes('solutionId')) {
            paramKey.splice(paramKey.indexOf('solutionId'), 1);
        }
        paramKey.forEach((/**
         * @param {?} element
         * @param {?} index
         * @return {?}
         */
        (element, index) => {
            index ? this.queryParamsUrl += '&' + element + '=' + param[element] : this.queryParamsUrl += element + '=' + param[element];
        }));
        this.reportGenerate = true;
        console.log("generate report");
        this.reportsDataFetch();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    downloadCsv(id) {
        if (id === 'entity') {
            this.operationService.getEntityReport(this.apiBaseUrl + this.reportConfig.entityReport + this.pageParam['solutionId'] + "?fromDate=" + this.pageParam['fromDate'] + "&toDate=" + this.pageParam['toDate'] + "&csv=" + true).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
            }), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                this.download(error, id);
            }));
        }
        else if (id === 'assessor') {
            this.operationService.getAssessorReport(this.apiBaseUrl + this.reportConfig.assessorReport + this.pageParam['solutionId'] + "?fromDate=" + this.pageParam['fromDate'] + "&toDate=" + this.pageParam['toDate'] + "&csv=" + true).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
            }), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                this.download(error, id);
            }));
        }
    }
    /**
     * @param {?} object
     * @param {?} id
     * @return {?}
     */
    download(object, id) {
        if (object.status == 200) {
            /** @type {?} */
            const blob = new Blob([object.error.text], { type: 'csv' });
            /** @type {?} */
            const url = window.URL.createObjectURL(blob);
            /** @type {?} */
            let a = document.createElement('a');
            a.href = url;
            a.download = `${id}-Report.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }
        else {
            this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
        }
    }
    /**
     * @param {?=} index
     * @param {?=} size
     * @param {?=} label
     * @return {?}
     */
    setSearchParam(index = 1, size = this.itemsPerPage[0], label) {
        /** @type {?} */
        let url = '&page=' + index + '&limit=' + size;
        url = url + (label === 'entity' ? '&entityName=' + this.searchEntityValue : '&assessorName=' + this.searchAssessorName);
        return url;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    pageResponse(event) {
        this[event.label + 'PageLimit'] = event.pageLimit;
        this[event.label + 'PageIndex'] = event.pageIndex;
        console.log(event);
        this.searchParam = this.setSearchParam(this[event.label + 'PageIndex'] + 1, this[event.label + 'pageLimit'], event.label);
        if (event.label === 'entity') {
            this.getEntityReport();
        }
        else {
            this.getAssessorReport();
        }
    }
    /**
     * @return {?}
     */
    reportsDataFetch() {
        this.utility.loaderShow();
        this.getUserSummary(this.queryParamsUrl);
        this.searchParam = this.setSearchParam(this.entityPageIndex + 1, this.entityPageLimit, 'entity');
        this.getEntityReport();
        this.searchParam = this.setSearchParam(this.assessorPageIndex + 1, this.assessorPageLimit, 'assessor');
        this.getAssessorReport();
    }
    /**
     * @param {?} url
     * @return {?}
     */
    filters(url) {
        if (!this.pageParam.linkId) {
            this.operationService.applyFilters(this.apiBaseUrl + this.reportConfig.reportFilter + url).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                this.filterData = this.mapQueryParams(data['result']);
                this.filterForm = this.utility.toGroup(this.filterData);
                ////console.logthis.filterForm)
                this.filterObject = this.filterForm.getRawValue();
                for (let filter in this.filterObject) {
                    if (this.filterObject[filter] === null || this.filterObject[filter] === undefined || this.filterObject[filter] === "" || this.filterObject[filter] === "aN-aN-NaN") {
                        delete this.filterObject[filter];
                    }
                }
                this.filterArray = Object.entries(this.filterObject);
                this.utility.loaderHide();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
                this.utility.loaderHide();
            }));
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    mapQueryParams(data) {
        /** @type {?} */
        let param;
        this.route.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            param = params;
        }));
        /** @type {?} */
        let paramKey = Object.keys(param);
        paramKey.forEach((/**
         * @param {?} paramLabel
         * @return {?}
         */
        paramLabel => {
            data.forEach((/**
             * @param {?} element
             * @param {?} index
             * @return {?}
             */
            (element, index) => {
                if (element.field === paramLabel) {
                    if (element.input === 'date') {
                        /** @type {?} */
                        let date = [param[paramLabel].substring(6), param[paramLabel].substring(3, 5), param[paramLabel].substring(0, 2)].join("-");
                        data[index].value = date + 'T00:00:00.000Z';
                    }
                    else {
                        data[index].value = param[paramLabel];
                    }
                }
            }));
        }));
        return data;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getUserSummary(url) {
        this.operationService.getUserSummary(this.apiBaseUrl + this.reportConfig.reportSummary + url).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.summaryData = data['result'];
            /** @type {?} */
            const arrayToObject = (/**
             * @param {?} array
             * @param {?} keyField
             * @return {?}
             */
            (array, keyField) => array.reduce((/**
             * @param {?} obj
             * @param {?} item
             * @return {?}
             */
            (obj, item) => {
                obj[item[keyField]] = item;
                return obj;
            }), {}));
            this.summaryData = arrayToObject(this.summaryData, "label");
            this.utility.loaderHide();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
        }));
    }
    /**
     * @param {?=} label
     * @return {?}
     */
    getEntityReport(label = 'call') {
        this.entityLoading = true;
        this.operationService.getEntityReport(this.apiBaseUrl + this.reportConfig.entityReport + this.queryParamsUrl + this.searchParam).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.share = data['result'];
            if (label == 'call') {
                this.entityReport = this.mapGraphObject(data['result']['sections']);
            }
            else {
                this.entityReport[0].data = data['result']['sections'][0]['data'];
                this.entityReport[0].graphData = this.mapGraphObject(data['result']['sections'][0], 'search');
            }
            this.entityLoading = false;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
        }));
    }
    /**
     * @param {?=} label
     * @return {?}
     */
    getAssessorReport(label = 'call') {
        this.assessorLoading = true;
        this.operationService.getAssessorReport(this.apiBaseUrl + this.reportConfig.assessorReport + this.queryParamsUrl + this.searchParam).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (label == 'call') {
                this.assessorReport = this.mapGraphObject(data['result']['sections']);
            }
            else {
                this.assessorReport[0].data = data['result']['sections'][0]['data'];
                this.assessorReport[0].graphData = this.mapGraphObject(data['result']['sections'][0], 'search');
            }
            this.assessorLoading = false;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
        }));
    }
    /**
     * @param {?} searchId
     * @return {?}
     */
    searchEntityIdInApi(searchId) {
    }
    /**
     * @param {?} id
     * @param {?} searchValue
     * @return {?}
     */
    searchVal(id, searchValue) {
        if (id == 'entity') {
            this.searchEntityValue = searchValue.target.value;
        }
        else if (id == 'assessor') {
            this.searchAssessorName = searchValue.target.value;
        }
    }
    /**
     * @param {?} label
     * @param {?} value
     * @return {?}
     */
    searchInApi(label, value) {
        this[`${label}+PageIndex`] = 1;
        this.searchParam = this.setSearchParam(this[`${label}PageIndex`], this[`${label}PageLimit`], label);
        if (label === 'entity') {
            this.searchEntityValue = value;
            this.getEntityReport('search');
        }
        else {
            this.searchAssessorName = value;
            this.getAssessorReport('search');
        }
    }
}
OpsReportComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-ops-report',
                template: "<app-loader></app-loader>\n<div class=\"_margin-bottom\">\n  <app-parent-heading *ngIf=\"!noAssess\" [startIndex]=\"3\" [genericHeading]=\"headings\" [showControl]=\"false\">\n  </app-parent-heading>\n</div>\n<div class=\"reportDashboard\">\n\n  <div class=\"_flex-box _justify-content-center \">\n\n    <div class=\"_full-width\">\n\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12  _noMarginPadding \">\n        <!-- <mat-card class=\" profileHeight col-xs-12 \" [formGroup]=\"filterForm\" *ngIf=\"summaryData\">\n\n          <div class=\"col-xs-12 _flex-box\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-4  _flex-box _justify-content-center  userIcon \">\n              <i class=\"material-icons profileIcon\">\n                account_circle\n              </i>\n            </div>\n            <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-8   profileContent  flex-direction-column\">\n              <div class=\"flexBox _justify-content-center\">\n                <span>\n                  <h4>{{summaryData.managerName.value |camelcase }} .</h4>\n                </span>\n                <span class=\"_flex-box _justify-content-space-between horizontalLine flexWarp\">\n                  <span class=\"subHeading col-xs-12 col-md-4 col-lg-4\">{{summaryData.role.value | camelcase }} .</span>\n                  <span class=\"subHeading col-xs-12 col-md-4 col-lg-4\"> {{summaryData.email.value  }} .</span>\n                  <span class=\"subHeading col-xs-12 col-md-4 col-lg-4\">{{summaryData.userName.value }} .</span>\n                </span>\n\n              </div>\n              <div class=\"_flexbox _justify-content-space-between flexWarp\">\n                <div class=\"flexBox _justify-content-center col-xs-12 col-md-4 col-lg-4\">\n                  <span>\n                    <h6>{{summaryData.programName.label | camelcase}}</h6>\n                  </span>\n                  <span>\n                    <h6 class=\"subHeading\">{{summaryData.programName.value | camelcase}}</h6>\n                  </span>\n                </div>\n                <div class=\"flexBox _justify-content-center col-xs-12 col-md-4 col-lg-4\">\n                  <span>\n                    <h6>For the period :</h6>\n                  </span>\n                  <span>\n                    <h6 class=\"subHeading\"> - NA - </h6>\n                  </span>\n                </div>\n                <div class=\"flexBox _justify-content-center col-xs-12 col-md-4 col-lg-4\">\n                  <span>\n                    <h6>{{summaryData.createdDate.label | camelcase}}:</h6>\n                  </span>\n                  <span>\n                    <h6 class=\"subHeading\">{{summaryData.createdDate.value}}</h6>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </mat-card>  -->\n        <div class=\"_flex-box _justify-content-space-between\">\n          <h4 class=\"marginTop\" style=\"flex:1\">Program Operations Report </h4>\n          <app-share-link *ngIf=\"share?.isShareable && !noAssess\" [portalName]=\"portalName\" [baseUrl]=\"baseUrl\"\n            [componentId]=\"componentId\" [publicSharedBaseUrl]=\"publicSharedBaseUrl\" [globalConfig]=\"globalConfig\"\n            [shareLinkApi]=\"shareLinkApi\"></app-share-link>\n        </div>\n\n        <!-- <h4 class=\"_flex-box  _small-Bottom-Margin\"></h4>\n        <div class=\"col-xs-12 _flex-box _flex-end _small-Top-Margin\" *ngIf=\"reportGenerate && entityReport\" >\n          <app-share-link *ngIf=\"share['isShareable'] && !noAssess\" [publicSharedBaseUrl]=\"publicSharedBaseUrl\"  [globalConfig]=\"globalConfig\" [shareLinkApi]=\"shareLinkApi\"></app-share-link>\n        </div> -->\n\n        <mat-card *ngIf=\"summaryProfileData\">\n          <div class=\"_flexbox _justify-content-space-between flexWarp\">\n            <div class=\"flexBox col-xs-12 col-md-4 col-lg-4 _justify-content-center\">\n              <span>\n                <h6 class=\"_no-wrap\">{{summaryProfileData?.nameOfTheProgram?.label | camelcase}} <span\n                    class=\"_padding-left _padding-right\">:</span></h6>\n              </span>\n              <span>\n                <h6 class=\"subHeading\">{{summaryProfileData?.nameOfTheProgram?.value}}</h6>\n              </span>\n            </div>\n            <div class=\"flexBox  col-xs-12 col-md-4 col-lg-4 _justify-content-center\">\n              <span>\n                <h6 class=\"_no-wrap\">{{summaryProfileData?.nameOfTheManager?.label | camelcase}} <span\n                    class=\"_padding-left _padding-right\">:</span></h6>\n              </span>\n              <span>\n                <h6 class=\"subHeading\">{{summaryProfileData.nameOfTheManager?.value | camelcase}}</h6>\n              </span>\n            </div>\n            <!-- <div class=\"flexBox  col-xs-12 col-md-4 col-lg-4 _justify-content-center\">\n                  <span>\n                    <h6 class=\"_no-wrap\">For the period <span class=\"_padding-left _padding-right\">:</span></h6>\n                  </span>\n                  <span>\n                    <h6 class=\"subHeading\"> - NA - </h6>\n                  </span>\n                </div> -->\n\n            <div class=\"flexBox  col-xs-12 col-md-4 col-lg-4 _justify-content-center\">\n              <span>\n                <h6 class=\"_no-wrap\">{{summaryProfileData.dateOfReportGeneration.label | camelcase}} <span\n                    class=\"_padding-left _padding-right\">:</span></h6>\n              </span>\n              <span>\n                <h6 class=\"subHeading\">{{summaryProfileData.dateOfReportGeneration?.value}}</h6>\n              </span>\n            </div>\n\n          </div>\n        </mat-card>\n        <div *ngIf=\"!noAssess\" class=\"col-xs-12 _noMarginPadding\">\n          <mat-accordion class=\"example-headers-align \" #myaccordion=\"matAccordion\">\n\n            <mat-expansion-panel class=\"marginTop\" [expanded]=\"expandedFilters\">\n              <mat-expansion-panel-header (click)=\" expandedFilters = !expandedFilters\">\n                <span class=\"_flex-box\">\n                  <i class=\"material-icons _padding-right\">\n                    filter_list\n                  </i>\n                  {{'headings.filters' | translate}}\n                  <span class=\"_padding-left\">\n                    <mat-chip *ngIf=\" filterArray?.length\"> {{filterArray?.length }} </mat-chip>\n                    <mat-chip *ngIf=\"! filterArray?.length\"> 0 </mat-chip>\n                  </span>\n                </span>\n              </mat-expansion-panel-header>\n              <div class=\"marginTop\" *ngIf=\"filterArray\">\n                <!-- <mat-chip-list #chipList> -->\n                <!-- <mat-chip *ngFor=\"let filter of filterArray\" [selectable]=\"selectable\"\n                 >\n                  {{filter[0]}} : {{filter[1]}} -->\n                <!-- <mat-chip *ngFor=\"let filter of filterArray\">\n                    <span *ngIf=\"filter[0] == 'toDate' || filter[0] == 'fromDate' ; else no_date\"> {{filter[0] | camelcase}} : {{filter[1] | date: 'shortDate'}}</span>\n                    <ng-template #no_date>{{filter[0] | camelcase}} : {{filter[1]}}</ng-template>\n                  </mat-chip> -->\n\n                <!-- </mat-chip-list> -->\n              </div>\n              <app-dynamic-form [genericData]=\"filterData\" [hostUrl]=\"hostUrl\" [genericForm]=\"filterForm\"\n                [genericEdit]=\"true\">\n              </app-dynamic-form>\n\n              <mat-action-row>\n                <button mat-raised-button (click)=\"filterApply('reset')\">{{'buttons.reset'|translate}}</button>\n                <button mat-raised-button color=\"primary\" (click)=\"filterApply('apply')\" class=\"_margin-left\"\n                  [disabled]=\"!filterForm.valid\">{{'buttons.apply'|translate}}</button>\n              </mat-action-row>\n            </mat-expansion-panel>\n          </mat-accordion>\n        </div>\n      </div>\n      <!-- <div class=\"col-xs-12 _flex-box _flex-end _small-Top-Margin\" *ngIf=\"reportGenerate && entityReport\" >\n      <app-share-link *ngIf=\"share['isShareable'] && !noAssess\" [publicSharedBaseUrl]=\"publicSharedBaseUrl\"  [globalConfig]=\"globalConfig\" [shareLinkApi]=\"shareLinkApi\"></app-share-link>\n  </div> -->\n\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 _noMarginPadding \" [ngClass]=\"{'_margin-top': noAssess}\"\n        *ngIf=\"reportGenerate && summaryData\">\n        <mat-card class=\"_flex-box _justify-content-center col-xs-12\">\n          <h4>{{'headings.summary' | translate}} </h4>\n          <div class=\"_flex-box flexWarp\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 \">\n              <table>\n                <tr>\n                  <td>{{summaryData?.entitiesAssigned?.label | camelcase}}</td>\n                  <td>{{summaryData?.entitiesAssigned?.value}}</td>\n                </tr>\n                <tr>\n                  <td>{{summaryData?.entitiesCompleted?.label | camelcase}}</td>\n                  <td>{{summaryData?.entitiesCompleted?.value}}</td>\n                </tr>\n                <tr>\n                  <td>{{summaryData?.entitiesInporgress?.label | camelcase}}</td>\n                  <td>{{summaryData?.entitiesInporgress?.value}}</td>\n                </tr>\n                <tr>\n                  <td>{{summaryData?.averageTimeTakenInDays?.label | camelcase}}</td>\n                  <td>{{summaryData?.averageTimeTakenInDays?.value}}</td>\n                </tr>\n              </table>\n            </div>\n            <!-- <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 marginTop\" *ngIf=\"summaryGraph\">\n            <google-chart class=\"marginChart\" [options]=\"summaryGraph.chartOptions\"\n              [title]=\"summaryGraph.title\" style=\"width : 100%; height: 100%;\"\n              [data]=\"summaryGraph.data\" [type]=\"summaryGraph.chartType\"\n              [columnNames]=\"summaryGraph.chartColumnNames\">\n            </google-chart>\n          </div> -->\n          </div>\n        </mat-card>\n      </div>\n\n      <div class=\"col-lg-12 col-md-22 col-sm-12 col-xs-12 marginTop _noMarginPadding\"\n        *ngIf=\" reportGenerate && assessorReport\">\n        <div *ngFor=\"let assessorGraph of assessorReport ; let index = index\">\n          <mat-card class=\"flex-direction-column col-xs-12\">\n            <h4 class=\"_flex-box _justify-content-space-between loaderHeight\"> {{'headings.assessorReports'| translate}}\n              <div *ngIf=\"assessorLoading\">\n                <app-individual-loader></app-individual-loader>\n              </div>\n              <button *ngIf=\"!noAssess\" matSuffix matTooltip=\"{{'message.downloadCsv' | translate}}\" mat-icon-button\n              aria-label=\"Clear\" (click)=\"downloadCsv('assessor')\">\n              <i class=\"material-icons\">\n                file_download\n              </i>\n            </button>\n            </h4>\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12  _noMarginPadding \">\n              <mat-form-field class=\" _full-width\">\n                <input matInput appDebounceSearch [searchValue]=\"searchAssessorName\"\n                  (debounceSearch)=\"searchInApi('assessor'  , $event)\" placeholder=\"{{'search'| translate}}\"\n                  [debounceTime]=\"200\" (keyup)=\"searchVal('assessor',$event)\">\n                <button mat-button matPrefix mat-icon-button aria-label=\"Clear\">\n                  <i class=\"material-icons\">\n                    search\n                  </i>\n                </button>\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"assessorGraph.data.length > 0\">\n              <table>\n                <tr>\n                  <th *ngFor=\"let heading of assessorGraph.tabularData.headers\">{{heading?.label}}</th>\n                </tr>\n                <tr *ngFor=\"let assessor of assessorGraph.data\">\n                  <td *ngFor=\"let heading of assessorGraph.tableHeader\">{{assessor[heading] | blank}}</td>\n                </tr>\n              </table>\n              <div class=\" col-xs-12 _border _small-Top-Margin\">\n                <div class=\" col-xs-12 _flex-box _flex-end\">\n                  <button mat-button (click)=\"pdf('assessorGraph'+index)\">\n                    {{'message.downloadChart' | translate}}<i class=\"material-icons\">\n                      file_download\n                    </i>\n                  </button>\n                </div>\n                <div class=\"col-xs-12\" id=\"assessorGraph{{index}}\">\n                  <div *ngFor=\"let Chart of assessorGraph.graphData\">\n\n                    <h4 class=\"_flex-box _justify-content-center\">{{Chart.title}}</h4>\n                    <google-chart class=\"marginChart\" [options]=\"Chart.chartOptions\"\n                      style=\"width : 100%; min-height: 300px;\" [data]=\"Chart.data\" [type]=\"Chart.chartType\"\n                      [columnNames]=\"Chart.columnNames\">\n                    </google-chart>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"!(assessorGraph.data.length > 0)\">\n              <div class=\"middle\">\n                {{'message.noData' | translate}}\n              </div>\n            </div>\n            <app-pagination [length]=\"assessorGraph.totalCount\" [pageLimit]=\"assessorPageLimit\"\n              [pageIndex]=\"assessorPageIndex\" [itemsPerPage]=\"itemsPerPage\" (paginationResponse)=\"pageResponse($event)\"\n              [paginationLabel]=\"'assessor'\"></app-pagination>\n          </mat-card>\n        </div>\n      </div>\n      <div class=\"col-lg-12 col-md-22 col-sm-12 col-xs-12 marginTop _noMarginPadding\"\n        *ngIf=\"reportGenerate && entityReport\">\n        <div *ngFor=\"let entityGraph of entityReport ; let index = index \">\n          <mat-card class=\"flex-direction-column col-xs-12 _noMarginPadding\">\n            <h4 class=\"_flex-box _justify-content-space-between loaderHeight\"> {{'headings.schoolReports'| translate}}\n              <div *ngIf=\"entityLoading\">\n                <app-individual-loader></app-individual-loader>\n              </div>\n              <button *ngIf=\"!noAssess\" mat-button matSuffix matTooltip=\"{{'message.downloadCsv' | translate}}\"\n              mat-icon-button aria-label=\"Clear\" (click)=\"downloadCsv('entity')\">\n              <i class=\"material-icons\">\n                file_download\n              </i>\n            </button>\n            </h4>\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12  \">\n              <mat-form-field class=\" _full-width\">\n                <input class=\"filterInput\" matInput appDebounceSearch [searchValue]=\"searchEntityValue\"\n                  [value]=\"searchEntityValue\" (debounceSearch)=\"searchInApi('entity' , $event)\"\n                  placeholder=\"{{'search'| translate}}\" [debounceTime]=\"100\" (keyup)=\"searchVal('entity',$event)\">\n                <button mat-button matPrefix mat-icon-button aria-label=\"Clear\">\n                  <i class=\"material-icons\">\n                    search\n                  </i>\n                </button>\n        \n              </mat-form-field>\n            </div>\n            <div *ngIf=\"entityGraph.data?.length > 0\">\n              <table>\n                <tr>\n                  <th *ngFor=\"let heading of entityGraph.tabularData.headers\">{{heading?.label}}</th>\n                </tr>\n                <tr *ngFor=\"let entity of entityGraph.data\">\n                  <td *ngFor=\"let heading of entityGraph.tableHeader\">{{entity[heading] | blank}}</td>\n                </tr>\n              </table>\n              <div class=\" col-xs-12 _border _small-Top-Margin\">\n                <div class=\" col-xs-12 _flex-box _flex-end\">\n                  <button mat-button (click)=\"pdf('entityGraph'+index)\">\n                    {{'message.downloadChart' | translate}}<i class=\"material-icons\">\n                      file_download\n                    </i>\n                  </button>\n                </div>\n                <div class=\"col-xs-12\" id=\"entityGraph{{index}}\">\n\n                  <div *ngFor=\"let Chart of entityGraph.graphData\">\n                    <h4 class=\"_flex-box _justify-content-center\">{{Chart.title}}</h4>\n\n                    <google-chart class=\"marginChart\" [options]=\"Chart.chartOptions\"\n                      style=\"width : 100%; min-height: 300px;\" [data]=\"Chart.data\" [type]=\"Chart.chartType\"\n                      [columnNames]=\"Chart.columnNames\">\n                    </google-chart>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"!(entityGraph.data?.length > 0)\">\n              <div class=\"middle\">\n                {{'message.noData' | translate}}\n              </div>\n            </div>\n            <app-pagination [length]=\"entityGraph.totalCount\" [pageLimit]=\"entityPageLimit\"\n              [pageIndex]=\"entityPageIndex\" [itemsPerPage]=\"itemsPerPage\" (paginationResponse)=\"pageResponse($event)\"\n              [paginationLabel]=\"'schools'\"></app-pagination>\n          </mat-card>\n        </div>\n      </div>\n\n    </div>\n  </div>",
                styles: [".paddingTop{padding:20px 0}.paddingBottom{padding:0 0 20px}.padding{padding:0 20px}.marginTop{margin:20px 0!important}.height{height:350px;overflow:hidden}.loaderHeight{height:40px}.profileHeight{padding:0;display:flex;align-items:center;flex-direction:column}.profileIcon{font-size:10vw}.profileContent{padding-left:20px}.flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.wrapper{padding:0 20px}.userIcon{height:200px}.userIcon:after{content:\"\";background:var(--light-grey-color);position:absolute;top:20%;right:0;height:60%;width:1px}.flexBox{display:flex;justify-content:flex-start}.subHeading{color:var(--grey-color);overflow:hidden;text-overflow:ellipsis}.dividerWidth{margin:0 20px;width:calc(100% - 40px)!important}._flexbox{display:flex;align-items:baseline}.horizontalLine{border-bottom:1px solid var(--light-grey-color);width:calc(100% - 20px)!important;padding:0 0 20px}.flex-direction-column{flex-direction:column;display:flex;overflow-x:auto}.flexWarp{flex-wrap:wrap}table{border-collapse:collapse;border-spacing:0;width:100%;border:1px solid var(--border-color)}td,th{text-align:left;padding:10px}tr:nth-child(even){background-color:var(--background-color)}.marginChart{margin:50px 0}.middle{display:flex;justify-content:center;padding:20px 0}.loader{border:1px solid var(--black-color);border-top:1px solid var(--primary-color);border-radius:50%;width:10px;height:10px;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin;margin-left:10px}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
            }] }
];
/** @nocollapse */
OpsReportComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: FormBuilder },
    { type: OperationsService },
    { type: UtilityService },
    { type: MatSnackBar }
];
OpsReportComponent.propDecorators = {
    hostUrl: [{ type: Input }],
    globalConfig: [{ type: Input }],
    filterPanel: [{ type: ViewChild, args: ['myaccordion',] }]
};
if (false) {
    /** @type {?} */
    OpsReportComponent.prototype.reportGenerate;
    /** @type {?} */
    OpsReportComponent.prototype.entityPageIndex;
    /** @type {?} */
    OpsReportComponent.prototype.assessorPageIndex;
    /** @type {?} */
    OpsReportComponent.prototype.entityGraph;
    /** @type {?} */
    OpsReportComponent.prototype.assessorGraph;
    /** @type {?} */
    OpsReportComponent.prototype.headings;
    /** @type {?} */
    OpsReportComponent.prototype.currentUser;
    /** @type {?} */
    OpsReportComponent.prototype.dynamicResize;
    /** @type {?} */
    OpsReportComponent.prototype.columnNames;
    /** @type {?} */
    OpsReportComponent.prototype.searchEntityId;
    /** @type {?} */
    OpsReportComponent.prototype.filterData;
    /** @type {?} */
    OpsReportComponent.prototype.maxDate;
    /** @type {?} */
    OpsReportComponent.prototype.filterForm;
    /** @type {?} */
    OpsReportComponent.prototype.queryParamsUrl;
    /** @type {?} */
    OpsReportComponent.prototype.searchEntityValue;
    /** @type {?} */
    OpsReportComponent.prototype.searchAssessorName;
    /** @type {?} */
    OpsReportComponent.prototype.filterObject;
    /** @type {?} */
    OpsReportComponent.prototype.filterArray;
    /** @type {?} */
    OpsReportComponent.prototype.entityReport;
    /** @type {?} */
    OpsReportComponent.prototype.itemsPerPage;
    /** @type {?} */
    OpsReportComponent.prototype.searchParam;
    /** @type {?} */
    OpsReportComponent.prototype.assessorReport;
    /** @type {?} */
    OpsReportComponent.prototype.summaryData;
    /** @type {?} */
    OpsReportComponent.prototype.pageParam;
    /** @type {?} */
    OpsReportComponent.prototype.pageReload;
    /** @type {?} */
    OpsReportComponent.prototype.summaryGraph;
    /** @type {?} */
    OpsReportComponent.prototype.entityPageLimit;
    /** @type {?} */
    OpsReportComponent.prototype.assessorPageLimit;
    /** @type {?} */
    OpsReportComponent.prototype.expandedFilters;
    /** @type {?} */
    OpsReportComponent.prototype.entityLoading;
    /** @type {?} */
    OpsReportComponent.prototype.assessorLoading;
    /** @type {?} */
    OpsReportComponent.prototype.hostUrl;
    /** @type {?} */
    OpsReportComponent.prototype.globalConfig;
    /** @type {?} */
    OpsReportComponent.prototype.filterPanel;
    /** @type {?} */
    OpsReportComponent.prototype.summaryProfileData;
    /** @type {?} */
    OpsReportComponent.prototype.currentRouterUrl;
    /** @type {?} */
    OpsReportComponent.prototype.queryParamsRouterUrl;
    /** @type {?} */
    OpsReportComponent.prototype.apiBaseUrl;
    /** @type {?} */
    OpsReportComponent.prototype.reportConfig;
    /** @type {?} */
    OpsReportComponent.prototype.linkId;
    /** @type {?} */
    OpsReportComponent.prototype.share;
    /** @type {?} */
    OpsReportComponent.prototype.publicSharedBaseUrl;
    /** @type {?} */
    OpsReportComponent.prototype.shareLinkApi;
    /** @type {?} */
    OpsReportComponent.prototype.noAssess;
    /** @type {?} */
    OpsReportComponent.prototype.componentId;
    /** @type {?} */
    OpsReportComponent.prototype.baseUrl;
    /** @type {?} */
    OpsReportComponent.prototype.portalName;
    /** @type {?} */
    OpsReportComponent.prototype.urlQueryParams;
    /**
     * @type {?}
     * @private
     */
    OpsReportComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    OpsReportComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    OpsReportComponent.prototype._fb;
    /**
     * @type {?}
     * @private
     */
    OpsReportComponent.prototype.operationService;
    /**
     * @type {?}
     * @private
     */
    OpsReportComponent.prototype.utility;
    /**
     * @type {?}
     * @private
     */
    OpsReportComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BzLXJlcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvcmVwb3J0LW1vZHVsZS9vcHMtcmVwb3J0L29wcy1yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRS9CLE9BQU8sV0FBVyxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDdEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBTzVGLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7OztJQWtEN0IsWUFDVSxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsR0FBZ0IsRUFDaEIsZ0JBQW1DLEVBQ25DLE9BQXVCLEVBQ3ZCLFFBQXFCO1FBTHJCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7UUFDbkMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQXZEL0IsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsb0JB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c0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEFjY29yZGlvbiwgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgKiBhcyBqc3BkZiBmcm9tICdqc3BkZic7XG5cbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcyc7XG5pbXBvcnQgeyBPcGVyYXRpb25zU2VydmljZSB9IGZyb20gJy4uL29wZXJhdGlvbnMtc2VydmljZS9vcGVyYXRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FtZWxDYXNlUGlwZSB9IGZyb20gJy4uLy4uL2NvcmUtbW9kdWxlL3BpcGVzL2NhbWVsY2FzZS1waXBlL2NhbWVsY2FzZS5waXBlJztcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS1tb2R1bGUvc2VydmljZXMvdXRpbGl0eS1zZXJ2aWNlL3V0aWxpdHkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1vcHMtcmVwb3J0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29wcy1yZXBvcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vcHMtcmVwb3J0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3BzUmVwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcmVwb3J0R2VuZXJhdGUgPSBmYWxzZTtcbiAgZW50aXR5UGFnZUluZGV4ID0gMDtcbiAgYXNzZXNzb3JQYWdlSW5kZXggPSAwO1xuICBlbnRpdHlHcmFwaDtcbiAgYXNzZXNzb3JHcmFwaDtcblxuICBoZWFkaW5ncyA9ICdoZWFkaW5ncy5vcHNSZXBvcnQnXG4gIGN1cnJlbnRVc2VyO1xuICBkeW5hbWljUmVzaXplO1xuICBjb2x1bW5OYW1lcztcbiAgc2VhcmNoRW50aXR5SWQ7XG4gIGZpbHRlckRhdGE7XG4gIG1heERhdGUgPSBuZXcgRGF0ZSgpO1xuICBmaWx0ZXJGb3JtOiBGb3JtR3JvdXA7XG4gIHF1ZXJ5UGFyYW1zVXJsID0gJyc7XG4gIHNlYXJjaEVudGl0eVZhbHVlOiBzdHJpbmcgPSAnJztcbiAgc2VhcmNoQXNzZXNzb3JOYW1lOiBzdHJpbmcgPSAnJztcbiAgZmlsdGVyT2JqZWN0OiBhbnk7XG4gIGZpbHRlckFycmF5O1xuICBlbnRpdHlSZXBvcnQ6IE9iamVjdDtcbiAgaXRlbXNQZXJQYWdlID0gWzEwLCAxNSwgMjBdO1xuICBzZWFyY2hQYXJhbTogc3RyaW5nID0gJyc7XG4gIGFzc2Vzc29yUmVwb3J0OiBhbnk7XG4gIHN1bW1hcnlEYXRhOiBhbnk7XG4gIHBhZ2VQYXJhbTogYW55O1xuICBwYWdlUmVsb2FkID0gdHJ1ZTtcbiAgc3VtbWFyeUdyYXBoOiBvYmplY3QgPSB7fTtcbiAgZW50aXR5UGFnZUxpbWl0OiBhbnkgPSAxMDtcbiAgYXNzZXNzb3JQYWdlTGltaXQ6IGFueSA9IDEwO1xuICBleHBhbmRlZEZpbHRlcnM6IGJvb2xlYW4gPSB0cnVlO1xuICBlbnRpdHlMb2FkaW5nOiBib29sZWFuO1xuICBhc3Nlc3NvckxvYWRpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhvc3RVcmw7XG4gIEBJbnB1dCgpIGdsb2JhbENvbmZpZztcbiAgQFZpZXdDaGlsZCgnbXlhY2NvcmRpb24nKSBmaWx0ZXJQYW5lbDogTWF0QWNjb3JkaW9uO1xuICBzdW1tYXJ5UHJvZmlsZURhdGE6IGFueTtcbiAgY3VycmVudFJvdXRlclVybDogc3RyaW5nID0gJyc7XG4gIHF1ZXJ5UGFyYW1zUm91dGVyVXJsOiBzdHJpbmcgPSAnJztcbiAgYXBpQmFzZVVybDogYW55O1xuICByZXBvcnRDb25maWc6IGFueTtcbiAgbGlua0lkO1xuICBzaGFyZTogYW55O1xuICBwdWJsaWNTaGFyZWRCYXNlVXJsOiBhbnk7XG4gIHNoYXJlTGlua0FwaTogYW55O1xuICBub0Fzc2VzczogYW55O1xuICBjb21wb25lbnRJZDogYW55O1xuICBiYXNlVXJsOiBhbnk7XG4gIHBvcnRhbE5hbWU6IGFueTtcbiAgdXJsUXVlcnlQYXJhbXM6IGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBvcGVyYXRpb25TZXJ2aWNlOiBPcGVyYXRpb25zU2VydmljZSxcbiAgICBwcml2YXRlIHV0aWxpdHk6IFV0aWxpdHlTZXJ2aWNlLFxuICAgIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyXG4gICkge1xuICAgIHRoaXMucm91dGUuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmFwaUJhc2VVcmwgPSBkYXRhLmFwaWJhc2VVcmw7XG4gICAgICB0aGlzLnJlcG9ydENvbmZpZyA9IGRhdGEucmVwb3J0Q29uZmlnXG4gICAgICB0aGlzLnNoYXJlTGlua0FwaSA9IGRhdGEuc2hhcmVMaW5rQXBpO1xuICAgICAgdGhpcy5wdWJsaWNTaGFyZWRCYXNlVXJsID0gZGF0YS5wdWJsaWNTaGFyZWRCYXNlVXJsO1xuICAgICAgdGhpcy5nbG9iYWxDb25maWcgPSBkYXRhLmdsb2JhbENvbmZpZztcbiAgICAgIHRoaXMubm9Bc3Nlc3MgPSBkYXRhLm5vQXNzZXNzO1xuICAgICAgdGhpcy5jb21wb25lbnRJZCA9IGRhdGEuY29tcG9uZW50SWQ7XG4gICAgICB0aGlzLmhvc3RVcmwgPSBkYXRhLmFwaWJhc2VVcmw7XG4gICAgICB0aGlzLmJhc2VVcmwgPSBkYXRhLmJhc2VVcmw7XG4gICAgICB0aGlzLnBvcnRhbE5hbWUgPSBkYXRhLnBvcnRhbE5hbWU7XG4gICAgfSlcbiAgICB0aGlzLmZpbHRlckZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICBmb3JtRGF0ZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHRvRGF0ZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cbiAgcGRmKGlkKSB7XG4gICAgdmFyIGRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaHRtbDJjYW52YXMoZGF0YSkudGhlbihjYW52YXMgPT4ge1xuICAgICAgdmFyIGltZ1dpZHRoID0gMjA4O1xuICAgICAgdmFyIHBhZ2VIZWlnaHQgPSAyOTU7XG4gICAgICB2YXIgaW1nSGVpZ2h0ID0gY2FudmFzLmhlaWdodCAqIGltZ1dpZHRoIC8gY2FudmFzLndpZHRoO1xuICAgICAgdmFyIGhlaWdodExlZnQgPSBpbWdIZWlnaHQ7XG4gICAgICBjb25zdCBjb250ZW50RGF0YVVSTCA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpXG4gICAgICBsZXQgcGRmID0gbmV3IGpzcGRmKCdwJywgJ21tJywgJ2E0Jyk7XG4gICAgICB2YXIgcG9zaXRpb24gPSAwO1xuICAgICAgcGRmLmFkZEltYWdlKGNvbnRlbnREYXRhVVJMLCAnUE5HJywgMCwgcG9zaXRpb24sIGltZ1dpZHRoLCBpbWdIZWlnaHQpXG4gICAgICBwZGYuc2F2ZShpZCArICcucGRmJyk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmN1cnJlbnRSb3V0ZXJVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgbGV0IHBhcmFtID0gT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTtcbiAgICAgIHRoaXMucGFnZVBhcmFtID0gcGFyYW1zO1xuICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJTaG93KCk7XG4gICAgICB0aGlzLmxpbmtJZCA9IHBhcmFtc1snbGlua0lkJ107XG4gICAgICB0aGlzLmdldFVzZXJQcm9maWxlKHBhcmFtc1snc29sdXRpb25JZCddKTtcbiAgICAgIHRoaXMuZmlsdGVycyhwYXJhbXNbJ3NvbHV0aW9uSWQnXSk7XG4gICAgICB0aGlzLmFwcGx5RmlsdGVyKHRoaXMucGFnZVBhcmFtKTtcbiAgICAgIHRoaXMudXJsUXVlcnlQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpO1xuICAgICAgZGVsZXRlIHBhcmFtLnNvbHV0aW9uSWQ7XG4gICAgICBpZiAoT2JqZWN0LmtleXMocGFyYW0pLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlUmVwb3J0KHBhcmFtKTtcbiAgICAgICAgdGhpcy5leHBhbmRlZEZpbHRlcnMgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsdGVyRm9ybS5yZXNldCgpO1xuICAgICAgICB0aGlzLmV4cGFuZGVkRmlsdGVycyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVwb3J0R2VuZXJhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hc3Nlc3NvclJlcG9ydCA9IFtdO1xuICAgICAgICB0aGlzLmVudGl0eVJlcG9ydCA9IFtdO1xuICAgICAgICB0aGlzLnN1bW1hcnlEYXRhID0ge307XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgLy8gICB0aGlzLnBhZ2VQYXJhbSA9IHBhcmFtcztcbiAgICAvLyAgIHRoaXMudXRpbGl0eS5sb2FkZXJTaG93KCk7XG4gICAgLy8gICB0aGlzLmxpbmtJZCA9IHBhcmFtc1snbGlua0lkJ107XG4gICAgLy8gICB0aGlzLmdldFVzZXJQcm9maWxlKHBhcmFtc1snc29sdXRpb25JZCddKTtcbiAgICAvLyAgIHRoaXMuZmlsdGVycyhwYXJhbXNbJ3NvbHV0aW9uSWQnXSk7XG4gICAgLy8gICB0aGlzLmFwcGx5RmlsdGVyKHRoaXMucGFnZVBhcmFtKTtcblxuICAgIC8vICAgLy8gaWYgKHRoaXMucGFnZVJlbG9hZCkge1xuICAgIC8vICAgICBpZiAoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggPiAxKSB7XG4gICAgLy8gICAgICAgLy8gbGV0IHBhcmFtID0gT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTtcbiAgICAvLyAgICAgICAvLyBkZWxldGUgcGFyYW1bJ3NvbHV0aW9uSWQnXTtcbiAgICAvLyAgICAgICAvLyBkZWxldGUgcGFyYW1bJ2NvbXBvbmVudE5hbWUnXTtcbiAgICAvLyAgICAgICAvLyB0aGlzLmFwcGx5RmlsdGVyKHBhcmFtKTtcbiAgICAvLyAgICAgICAvLyB0aGlzLmV4cGFuZGVkRmlsdGVycyA9IGZhbHNlO1xuICAgIC8vICAgICAgIHRoaXMucmVwb3J0R2VuZXJhdGUgPSB0cnVlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIC8vIHRoaXMucGFnZVJlbG9hZCA9IGZhbHNlO1xuICAgIC8vICAgLy8gfVxuICAgIC8vIH0pXG4gIH1cblxuICBmaWx0ZXJBcHBseShjb25kaXRpb24pIHtcbiAgICAvL2NvbnNvbGUubG9nY29uZGl0aW9uKVxuICAgIGlmIChjb25kaXRpb24gPT09ICdyZXNldCcpIHtcbiAgICAgIHRoaXMuZmlsdGVyRm9ybS5yZXNldCgpO1xuICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvb3BlcmF0aW9ucy9yZXBvcnRzJ10sIHsgcXVlcnlQYXJhbXM6IHsgc29sdXRpb25JZDogdGhpcy5wYWdlUGFyYW1bJ3NvbHV0aW9uSWQnXSB9IH0pO1xuICAgICAgdGhpcy5yZXBvcnRHZW5lcmF0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5maWx0ZXJBcnJheSA9IFtdO1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMudXJsUXVlcnlQYXJhbXMpO1xuICAgICAgY29uc3Qgb2JqID0ge31cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgb2JqW2tleV0gPSBudWxsXG4gICAgICB9XG4gICAgICBvYmpbJ3NvbHV0aW9uSWQnXSA9IHRoaXMucGFnZVBhcmFtLnNvbHV0aW9uSWQ7XG4gICAgICB0aGlzLmFwcGx5RmlsdGVyKG9iaik7XG4gICAgICAvLyB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgLy8gICBpZih0aGlzLm5vQXNzZXNzKXtcbiAgICAgIC8vICAgICBsZXQgcmVzZXRVcmwgPSAnL3Byb2dyYW1zL3B1YmxpYy9vcHMtcmVwb3J0cz9zb2x1dGlvbklkPScgKyBwYXJhbXNbJ3NvbHV0aW9uSWQnXVxuICAgICAgLy8gICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IHBhdGg6IHJlc2V0VXJsIH0sICcnLCByZXNldFVybCk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vICAgZWxzZXtcbiAgICAgIC8vICAgbGV0IHJlc2V0VXJsID0gJy9wcm9ncmFtcy9vcGVyYXRpb25zL29wcy1yZXBvcnRzP3NvbHV0aW9uSWQ9JyArIHBhcmFtc1snc29sdXRpb25JZCddXG4gICAgICAvLyAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IHBhdGg6IHJlc2V0VXJsIH0sICcnLCByZXNldFVybCk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gdGhpcy5maWx0ZXJQYW5lbC5jbG9zZUFsbCgpO1xuICAgICAgdGhpcy5wYWdlUmVsb2FkID0gZmFsc2U7XG4gICAgICB0aGlzLmV4cGFuZGVkRmlsdGVycyA9ICF0aGlzLmV4cGFuZGVkRmlsdGVycztcbiAgICAgIHRoaXMuZmlsdGVyT2JqZWN0ID0gdGhpcy5maWx0ZXJGb3JtLmdldFJhd1ZhbHVlKCk7XG4gICAgICBmb3IgKGxldCBmaWx0ZXIgaW4gdGhpcy5maWx0ZXJPYmplY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyT2JqZWN0W2ZpbHRlcl0gPT09IG51bGwgfHwgdGhpcy5maWx0ZXJPYmplY3RbZmlsdGVyXSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZmlsdGVyT2JqZWN0W2ZpbHRlcl0gPT09IFwiXCIgfHwgdGhpcy5maWx0ZXJPYmplY3RbZmlsdGVyXSA9PT0gXCJhTi1hTi1OYU5cIikge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlck9iamVjdFtmaWx0ZXJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5maWx0ZXJPYmplY3QudG9EYXRlKSB7XG4gICAgICAgIC8vIHRoaXMuZmlsdGVyT2JqZWN0Wydmcm9tRGF0ZSddPSB0aGlzLmFwcGx5RGF0ZSh0aGlzLmZpbHRlck9iamVjdC5mcm9tRGF0ZSlcbiAgICAgICAgdGhpcy5maWx0ZXJPYmplY3RbJ3RvRGF0ZSddID0gdGhpcy5hcHBseURhdGUodGhpcy5maWx0ZXJPYmplY3QudG9EYXRlKTtcblxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZmlsdGVyT2JqZWN0LmZyb21EYXRlKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyT2JqZWN0Wydmcm9tRGF0ZSddID0gdGhpcy5hcHBseURhdGUodGhpcy5maWx0ZXJPYmplY3QuZnJvbURhdGUpO1xuICAgICAgICAvLyB0aGlzLmZpbHRlck9iamVjdFsndG9EYXRlJ109IHRoaXMuYXBwbHlEYXRlKHRoaXMuZmlsdGVyT2JqZWN0LnRvRGF0ZSk7XG5cbiAgICAgIH1cbiAgICAgIHRoaXMuYXBwbHlGaWx0ZXIodGhpcy5maWx0ZXJPYmplY3QpXG4gICAgICB0aGlzLmZpbHRlckFycmF5ID0gT2JqZWN0LmVudHJpZXModGhpcy5maWx0ZXJPYmplY3QpXG4gICAgfVxuICB9XG5cblxuIFxuICBtYXBHcmFwaE9iamVjdChkYXRhLCB0eXBlID0gJ2NhbGwnKSB7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2NhbGwnKSB7XG5cbiAgICAgIGRhdGEuZm9yRWFjaCgob2JqZWN0LCBpbmQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cob2JqZWN0KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5ncmFwaERhdGEubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgIGNvbnN0IGRhdGFBcnJheSA9IHRoaXMuZ2V0RGF0YShvYmplY3QsIGkpXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhW2luZF0uZ3JhcGhEYXRhW2ldLCB7XG4gICAgICAgICAgICBkYXRhOiBkYXRhQXJyYXlcbiAgICAgICAgICB9KVxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YVtpbmRdLmdyYXBoRGF0YVtpXS5jaGFydE9wdGlvbnMsIHsgbGVnZW5kOiB7IHBvc2l0aW9uOiAndG9wJywgYWxpZ25tZW50OiAnZW5kJyB9IH0pXG5cbiAgICAgICAgfVxuICAgICAgICBvYmplY3QuZ3JhcGhEYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICBpZiAob2JqZWN0LmdyYXBoRGF0YVtpbmRleF0uZGF0YS5sZW5ndGggPiAyICYmIG9iamVjdC5ncmFwaERhdGFbaW5kZXhdLmNoYXJ0VHlwZSA9PT0gJ0NvbHVtbkNoYXJ0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhW2luZF0uZ3JhcGhEYXRhW2luZGV4XS5jaGFydE9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgaXNTdGFjazogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRhdGFbaW5kXS5ncmFwaERhdGFbaW5kZXhdLmRhdGEubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YVtpbmRdLmdyYXBoRGF0YVtpbmRleF0uY2hhcnRPcHRpb25zLmhBeGlzLCB7IHRleHRQb3NpdGlvbjogJ25vbmUnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgY29sTmFtZUFycmF5ID0gW11cbiAgICAgICAgICBkYXRhW2luZF0uZ3JhcGhEYXRhW2luZGV4XS5jb2x1bW5OYW1lcy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICBjb2xOYW1lQXJyYXkucHVzaChuZXcgQ2FtZWxDYXNlUGlwZSgpLnRyYW5zZm9ybShjb2x1bW4pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGRhdGFbaW5kXS5ncmFwaERhdGFbaW5kZXhdLCB7IGNvbHVtbk5hbWVzOiBjb2xOYW1lQXJyYXkgfSk7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBuZXcgQ2FtZWxDYXNlUGlwZSgpLnRyYW5zZm9ybSgnZW50aXR5TGlzdCcpXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldFRhYmxlSGVhZGVyKG9iamVjdCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YVtpbmRdLCB7IHRhYmxlSGVhZGVyOiBoZWFkZXJzIH0pXG4gICAgICB9KTtcbiAgICAgIC8vLy9jb25zb2xlLmxvZ2RhdGEpXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZ3JhcGhEYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gdGhpcy5nZXREYXRhKGRhdGEsIGkpO1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEuZ3JhcGhEYXRhW2ldLCB7XG4gICAgICAgICAgZGF0YTogZGF0YUFycmF5XG4gICAgICAgIH0pXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YS5ncmFwaERhdGFbaV0uY2hhcnRPcHRpb25zLCB7IGxlZ2VuZDogeyBwb3NpdGlvbjogJ3RvcCcsIGFsaWdubWVudDogJ2VuZCcgfSB9KVxuXG4gICAgICB9XG4gICAgICBkYXRhLmdyYXBoRGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICAgIGlmIChkYXRhLmdyYXBoRGF0YVtpbmRleF0uZGF0YS5sZW5ndGggPiAyICYmIGRhdGEuZ3JhcGhEYXRhW2luZGV4XS5jaGFydFR5cGUgPT09ICdDb2x1bW5DaGFydCcpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEuZ3JhcGhEYXRhW2luZGV4XS5jaGFydE9wdGlvbnMsIHtcbiAgICAgICAgICAgIGlzU3RhY2s6IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmdyYXBoRGF0YVtpbmRleF0uZGF0YS5sZW5ndGggPiAxMCkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YS5ncmFwaERhdGFbaW5kZXhdLmNoYXJ0T3B0aW9ucy5oQXhpcywgeyB0ZXh0UG9zaXRpb246ICdub25lJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29sTmFtZUFycmF5ID0gW11cbiAgICAgICAgZGF0YS5ncmFwaERhdGFbaW5kZXhdLmNvbHVtbk5hbWVzLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgICBjb2xOYW1lQXJyYXkucHVzaChuZXcgQ2FtZWxDYXNlUGlwZSgpLnRyYW5zZm9ybShjb2x1bW4pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YS5ncmFwaERhdGFbaW5kZXhdLCB7IGNvbHVtbk5hbWVzOiBjb2xOYW1lQXJyYXkgfSk7XG5cblxuICAgICAgfSk7XG5cbiAgICAgIG5ldyBDYW1lbENhc2VQaXBlKCkudHJhbnNmb3JtKCdlbnRpdHlMaXN0JylcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldFRhYmxlSGVhZGVyKGRhdGEpO1xuICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7IHRhYmxlSGVhZGVyOiBoZWFkZXJzIH0pXG5cbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZ3JhcGhEYXRhKTtcbiAgICBcbiAgICAgIHJldHVybiBkYXRhLmdyYXBoRGF0YTtcbiAgICB9XG4gIH1cblxuICBnZXRUYWJsZUhlYWRlcihvYmplY3QpIHtcbiAgICBsZXQgaGVhZGluZ0FycmF5ID0gW11cbiAgICBvYmplY3QudGFidWxhckRhdGEuaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICBoZWFkaW5nQXJyYXkucHVzaChoZWFkZXIubmFtZSk7XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGluZ0FycmF5O1xuICB9XG5cbiAgZ2V0RGF0YShvYmplY3QsIGkpIHtcbiAgICBsZXQgZGF0YUFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBvYmplY3QuZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IGNvbHVtbkFycmF5ID0gdGhpcy5nZXRDb2x1bW4ob2JqZWN0LCBpLCBqKTtcbiAgICAgIGRhdGFBcnJheS5wdXNoKGNvbHVtbkFycmF5KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFBcnJheTtcbiAgfVxuXG4gIGdldFVzZXJQcm9maWxlKHNvbHV0aW9uSWQpIHtcbiAgICB0aGlzLm9wZXJhdGlvblNlcnZpY2UuZ2V0VXNlclByb2ZpbGVTdW1tYXJ5KHRoaXMuYXBpQmFzZVVybCArIHRoaXMucmVwb3J0Q29uZmlnLnByb2ZpbGVTdW1tYXJ5ICsgc29sdXRpb25JZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgLy8vL2NvbnNvbGUubG9nZGF0YSk7XG4gICAgICB0aGlzLnN1bW1hcnlQcm9maWxlRGF0YSA9IGRhdGFbJ3Jlc3VsdCddO1xuICAgICAgY29uc3QgYXJyYXlUb09iamVjdCA9IChhcnJheSwga2V5RmllbGQpID0+XG4gICAgICAgIGFycmF5LnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XG4gICAgICAgICAgb2JqW2l0ZW1ba2V5RmllbGRdXSA9IGl0ZW1cbiAgICAgICAgICByZXR1cm4gb2JqXG4gICAgICAgIH0sIHt9KVxuICAgICAgdGhpcy5zdW1tYXJ5UHJvZmlsZURhdGEgPSBhcnJheVRvT2JqZWN0KHRoaXMuc3VtbWFyeVByb2ZpbGVEYXRhLCBcImxhYmVsXCIpXG4gICAgICBpZiAodGhpcy5ub0Fzc2Vzcykge1xuICAgICAgICB0aGlzLnV0aWxpdHkubG9hZGVySGlkZSgpO1xuXG4gICAgICB9XG4gICAgfSxcbiAgICAgIGVycm9yID0+IHtcblxuICAgICAgICAvL3RoaXMuc25hY2tCYXIub3Blbih0aGlzLmdsb2JhbENvbmZpZy5lcnJvck1lc3NhZ2UsIFwiT2tcIiwgeyBkdXJhdGlvbjogOTAwMCB9KTtcbiAgICAgICAgdGhpcy51dGlsaXR5LmxvYWRlckhpZGUoKTtcblxuICAgICAgfSk7XG4gIH1cbiAgZ2V0Q29sdW1uKG9iamVjdCwgaSwgaikge1xuICAgIGxldCBjb2xBcnJheSA9IFtdO1xuICAgIG9iamVjdC5ncmFwaERhdGFbaV0uY29sdW1uTmFtZXMuZm9yRWFjaCgoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgY29sdW1uID0gY29sdW1uLnRyaW0oKTtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgaWYgKG9iamVjdC5kYXRhW2pdW2NvbHVtbl0gPT09IFwiXCIpIHtcblxuICAgICAgICAgIGNvbEFycmF5LnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29sQXJyYXkucHVzaChNYXRoLnJvdW5kKG9iamVjdC5kYXRhW2pdW2NvbHVtbl0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbEFycmF5LnB1c2gob2JqZWN0LmRhdGFbal1bY29sdW1uXSk7XG4gICAgICB9XG5cbiAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gY29sQXJyYXk7XG4gIH1cbiAgYXBwbHlEYXRlKHZhbHVlKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSksXG4gICAgICBtbnRoID0gKFwiMFwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMiksXG4gICAgICBkYXkgPSAoXCIwXCIgKyBkYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpO1xuICAgIGNvbnN0IHZhbCA9IFtkYXksIG1udGgsIGRhdGUuZ2V0RnVsbFllYXIoKV0uam9pbihcIi1cIik7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKG9iaikge1xuICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgcXVlcnlQYXJhbXM6IG9iaixcbiAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLFxuICAgIH07XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIG5hdmlnYXRpb25FeHRyYXMpO1xuICB9XG5cbiAgaW5wdXRDaGFuZ2Uoa2V5LCBldmVudCkge1xuICAgIHRoaXMuYXBwbHlGaWx0ZXIoeyBba2V5XTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIGlmIChrZXkgPT0gJ2VudGl0eUlkJykge1xuICAgICAgdGhpcy5zZWFyY2hFbnRpdHlJZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9XG4gIH1cbiAgc2VsZWN0VHlwZShrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5hcHBseUZpbHRlcih7IFtrZXldOiB2YWx1ZSB9KVxuXG4gIH1cbiAgZ2VuZXJhdGVSZXBvcnQocGFyYW0pIHtcbiAgXG4gICAgdGhpcy5xdWVyeVBhcmFtc1VybCA9IHRoaXMucGFnZVBhcmFtWydzb2x1dGlvbklkJ10gKyBcIj9cIjtcbiAgICBsZXQgcGFyYW1LZXkgPSBPYmplY3Qua2V5cyhwYXJhbSk7XG4gICAgaWYgKHBhcmFtS2V5LmluY2x1ZGVzKCdjb21wb25lbnROYW1lJykpIHtcbiAgICAgIHBhcmFtS2V5LnNwbGljZShwYXJhbUtleS5pbmRleE9mKCdjb21wb25lbnROYW1lJyksIDEpXG5cbiAgICB9XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBcbiAgICBpZiAocGFyYW1LZXkuaW5jbHVkZXMoJ3NvbHV0aW9uSWQnKSkge1xuICAgICAgcGFyYW1LZXkuc3BsaWNlKHBhcmFtS2V5LmluZGV4T2YoJ3NvbHV0aW9uSWQnKSwgMSlcblxuICAgIH1cbiAgICBwYXJhbUtleS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaW5kZXggPyB0aGlzLnF1ZXJ5UGFyYW1zVXJsICs9ICcmJyArIGVsZW1lbnQgKyAnPScgKyBwYXJhbVtlbGVtZW50XSA6IHRoaXMucXVlcnlQYXJhbXNVcmwgKz0gZWxlbWVudCArICc9JyArIHBhcmFtW2VsZW1lbnRdXG4gICAgfSlcbiAgIFxuICAgIHRoaXMucmVwb3J0R2VuZXJhdGUgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJhdGUgcmVwb3J0XCIpXG4gICAgdGhpcy5yZXBvcnRzRGF0YUZldGNoKCk7XG5cbiAgfVxuICBkb3dubG9hZENzdihpZCkge1xuICAgIGlmIChpZCA9PT0gJ2VudGl0eScpIHtcbiAgICAgIHRoaXMub3BlcmF0aW9uU2VydmljZS5nZXRFbnRpdHlSZXBvcnQodGhpcy5hcGlCYXNlVXJsICsgdGhpcy5yZXBvcnRDb25maWcuZW50aXR5UmVwb3J0ICsgdGhpcy5wYWdlUGFyYW1bJ3NvbHV0aW9uSWQnXSArIFwiP2Zyb21EYXRlPVwiICsgdGhpcy5wYWdlUGFyYW1bJ2Zyb21EYXRlJ10gKyBcIiZ0b0RhdGU9XCIgKyB0aGlzLnBhZ2VQYXJhbVsndG9EYXRlJ10gKyBcIiZjc3Y9XCIgKyB0cnVlKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG5cbiAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLmRvd25sb2FkKGVycm9yLCBpZClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlkID09PSAnYXNzZXNzb3InKSB7XG4gICAgICB0aGlzLm9wZXJhdGlvblNlcnZpY2UuZ2V0QXNzZXNzb3JSZXBvcnQodGhpcy5hcGlCYXNlVXJsICsgdGhpcy5yZXBvcnRDb25maWcuYXNzZXNzb3JSZXBvcnQgKyB0aGlzLnBhZ2VQYXJhbVsnc29sdXRpb25JZCddICsgXCI/ZnJvbURhdGU9XCIgKyB0aGlzLnBhZ2VQYXJhbVsnZnJvbURhdGUnXSArIFwiJnRvRGF0ZT1cIiArIHRoaXMucGFnZVBhcmFtWyd0b0RhdGUnXSArIFwiJmNzdj1cIiArIHRydWUpLnN1YnNjcmliZShkYXRhID0+IHtcblxuICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuZG93bmxvYWQoZXJyb3IsIGlkKVxuICAgICAgICB9KTtcblxuICAgIH1cbiAgfVxuXG4gIGRvd25sb2FkKG9iamVjdCwgaWQpIHtcbiAgICBpZiAob2JqZWN0LnN0YXR1cyA9PSAyMDApIHtcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbb2JqZWN0LmVycm9yLnRleHRdLCB7IHR5cGU6ICdjc3YnIH0pO1xuICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgIGEuZG93bmxvYWQgPSBgJHtpZH0tUmVwb3J0LmNzdmA7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgYS5jbGljaygpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbiAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc25hY2tCYXIub3Blbih0aGlzLmdsb2JhbENvbmZpZy5lcnJvck1lc3NhZ2UsIFwiT2tcIiwgeyBkdXJhdGlvbjogOTAwMCB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRTZWFyY2hQYXJhbShpbmRleDogbnVtYmVyID0gMSwgc2l6ZTogbnVtYmVyID0gdGhpcy5pdGVtc1BlclBhZ2VbMF0sIGxhYmVsKSB7XG4gICAgbGV0IHVybCA9ICcmcGFnZT0nICsgaW5kZXggKyAnJmxpbWl0PScgKyBzaXplO1xuICAgIHVybCA9IHVybCArIChsYWJlbCA9PT0gJ2VudGl0eScgPyAnJmVudGl0eU5hbWU9JyArIHRoaXMuc2VhcmNoRW50aXR5VmFsdWUgOiAnJmFzc2Vzc29yTmFtZT0nICsgdGhpcy5zZWFyY2hBc3Nlc3Nvck5hbWUpO1xuICAgIHJldHVybiB1cmw7XG5cbiAgfVxuICBwYWdlUmVzcG9uc2UoZXZlbnQpIHtcbiAgICB0aGlzW2V2ZW50LmxhYmVsICsgJ1BhZ2VMaW1pdCddID0gZXZlbnQucGFnZUxpbWl0O1xuICAgIHRoaXNbZXZlbnQubGFiZWwgKyAnUGFnZUluZGV4J10gPSBldmVudC5wYWdlSW5kZXg7XG4gICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgdGhpcy5zZWFyY2hQYXJhbSA9IHRoaXMuc2V0U2VhcmNoUGFyYW0odGhpc1tldmVudC5sYWJlbCArICdQYWdlSW5kZXgnXSArIDEsIHRoaXNbZXZlbnQubGFiZWwgKyAncGFnZUxpbWl0J10sIGV2ZW50LmxhYmVsKTtcbiAgICBpZiAoZXZlbnQubGFiZWwgPT09ICdlbnRpdHknKSB7XG4gICAgICB0aGlzLmdldEVudGl0eVJlcG9ydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldEFzc2Vzc29yUmVwb3J0KCk7XG5cbiAgICB9XG4gIH1cbiAgcmVwb3J0c0RhdGFGZXRjaCgpIHtcbiAgICB0aGlzLnV0aWxpdHkubG9hZGVyU2hvdygpO1xuICAgIHRoaXMuZ2V0VXNlclN1bW1hcnkodGhpcy5xdWVyeVBhcmFtc1VybCk7XG4gICAgdGhpcy5zZWFyY2hQYXJhbSA9IHRoaXMuc2V0U2VhcmNoUGFyYW0odGhpcy5lbnRpdHlQYWdlSW5kZXggKyAxLCB0aGlzLmVudGl0eVBhZ2VMaW1pdCwgJ2VudGl0eScpO1xuICAgIHRoaXMuZ2V0RW50aXR5UmVwb3J0KCk7XG4gICAgdGhpcy5zZWFyY2hQYXJhbSA9IHRoaXMuc2V0U2VhcmNoUGFyYW0odGhpcy5hc3Nlc3NvclBhZ2VJbmRleCArIDEsIHRoaXMuYXNzZXNzb3JQYWdlTGltaXQsICdhc3Nlc3NvcicpO1xuICAgIHRoaXMuZ2V0QXNzZXNzb3JSZXBvcnQoKTtcbiAgfVxuXG4gIGZpbHRlcnModXJsKSB7XG4gICAgaWYgKCF0aGlzLnBhZ2VQYXJhbS5saW5rSWQpIHtcbiAgICAgIHRoaXMub3BlcmF0aW9uU2VydmljZS5hcHBseUZpbHRlcnModGhpcy5hcGlCYXNlVXJsICsgdGhpcy5yZXBvcnRDb25maWcucmVwb3J0RmlsdGVyICsgdXJsKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMubWFwUXVlcnlQYXJhbXMoZGF0YVsncmVzdWx0J10pO1xuICAgICAgICB0aGlzLmZpbHRlckZvcm0gPSB0aGlzLnV0aWxpdHkudG9Hcm91cCh0aGlzLmZpbHRlckRhdGEpO1xuICAgICAgICAvLy8vY29uc29sZS5sb2d0aGlzLmZpbHRlckZvcm0pXG4gICAgICAgIHRoaXMuZmlsdGVyT2JqZWN0ID0gdGhpcy5maWx0ZXJGb3JtLmdldFJhd1ZhbHVlKClcbiAgICAgICAgZm9yIChsZXQgZmlsdGVyIGluIHRoaXMuZmlsdGVyT2JqZWN0KSB7XG4gICAgICAgICAgaWYgKHRoaXMuZmlsdGVyT2JqZWN0W2ZpbHRlcl0gPT09IG51bGwgfHwgdGhpcy5maWx0ZXJPYmplY3RbZmlsdGVyXSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZmlsdGVyT2JqZWN0W2ZpbHRlcl0gPT09IFwiXCIgfHwgdGhpcy5maWx0ZXJPYmplY3RbZmlsdGVyXSA9PT0gXCJhTi1hTi1OYU5cIikge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZmlsdGVyT2JqZWN0W2ZpbHRlcl07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsdGVyQXJyYXkgPSBPYmplY3QuZW50cmllcyh0aGlzLmZpbHRlck9iamVjdCk7XG4gICAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJIaWRlKCk7XG4gICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKHRoaXMuZ2xvYmFsQ29uZmlnLmVycm9yTWVzc2FnZSwgXCJPa1wiLCB7IGR1cmF0aW9uOiA5MDAwIH0pO1xuICAgICAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJIaWRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBtYXBRdWVyeVBhcmFtcyhkYXRhKSB7XG4gICAgbGV0IHBhcmFtO1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBwYXJhbSA9IHBhcmFtcztcbiAgICB9KVxuICAgIGxldCBwYXJhbUtleSA9IE9iamVjdC5rZXlzKHBhcmFtKTtcbiAgICBwYXJhbUtleS5mb3JFYWNoKHBhcmFtTGFiZWwgPT4ge1xuICAgICAgZGF0YS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5maWVsZCA9PT0gcGFyYW1MYWJlbCkge1xuICAgICAgICAgIGlmIChlbGVtZW50LmlucHV0ID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gW3BhcmFtW3BhcmFtTGFiZWxdLnN1YnN0cmluZyg2KSwgcGFyYW1bcGFyYW1MYWJlbF0uc3Vic3RyaW5nKDMsIDUpLCBwYXJhbVtwYXJhbUxhYmVsXS5zdWJzdHJpbmcoMCwgMildLmpvaW4oXCItXCIpO1xuICAgICAgICAgICAgZGF0YVtpbmRleF0udmFsdWUgPSBkYXRlICsgJ1QwMDowMDowMC4wMDBaJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhW2luZGV4XS52YWx1ZSA9IHBhcmFtW3BhcmFtTGFiZWxdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBnZXRVc2VyU3VtbWFyeSh1cmwpIHtcbiAgICB0aGlzLm9wZXJhdGlvblNlcnZpY2UuZ2V0VXNlclN1bW1hcnkodGhpcy5hcGlCYXNlVXJsICsgdGhpcy5yZXBvcnRDb25maWcucmVwb3J0U3VtbWFyeSArIHVybCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5zdW1tYXJ5RGF0YSA9IGRhdGFbJ3Jlc3VsdCddO1xuICAgICAgY29uc3QgYXJyYXlUb09iamVjdCA9IChhcnJheSwga2V5RmllbGQpID0+XG4gICAgICAgIGFycmF5LnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XG4gICAgICAgICAgb2JqW2l0ZW1ba2V5RmllbGRdXSA9IGl0ZW1cbiAgICAgICAgICByZXR1cm4gb2JqXG4gICAgICAgIH0sIHt9KVxuICAgICAgdGhpcy5zdW1tYXJ5RGF0YSA9IGFycmF5VG9PYmplY3QodGhpcy5zdW1tYXJ5RGF0YSwgXCJsYWJlbFwiKVxuICAgICAgdGhpcy51dGlsaXR5LmxvYWRlckhpZGUoKTtcbiAgICB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBnZXRFbnRpdHlSZXBvcnQobGFiZWwgPSAnY2FsbCcpIHtcbiAgICB0aGlzLmVudGl0eUxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMub3BlcmF0aW9uU2VydmljZS5nZXRFbnRpdHlSZXBvcnQodGhpcy5hcGlCYXNlVXJsICsgdGhpcy5yZXBvcnRDb25maWcuZW50aXR5UmVwb3J0ICsgdGhpcy5xdWVyeVBhcmFtc1VybCArIHRoaXMuc2VhcmNoUGFyYW0pLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuc2hhcmUgPSBkYXRhWydyZXN1bHQnXTtcbiAgICAgIGlmIChsYWJlbCA9PSAnY2FsbCcpIHtcbiAgICAgICAgdGhpcy5lbnRpdHlSZXBvcnQgPSB0aGlzLm1hcEdyYXBoT2JqZWN0KGRhdGFbJ3Jlc3VsdCddWydzZWN0aW9ucyddKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVudGl0eVJlcG9ydFswXS5kYXRhID0gZGF0YVsncmVzdWx0J11bJ3NlY3Rpb25zJ11bMF1bJ2RhdGEnXTtcbiAgICAgICAgdGhpcy5lbnRpdHlSZXBvcnRbMF0uZ3JhcGhEYXRhID0gdGhpcy5tYXBHcmFwaE9iamVjdChkYXRhWydyZXN1bHQnXVsnc2VjdGlvbnMnXVswXSwgJ3NlYXJjaCcpXG4gICAgICB9XG4gICAgICB0aGlzLmVudGl0eUxvYWRpbmcgPSBmYWxzZTtcblxuICAgIH0sIGVycm9yID0+IHtcbiAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGdldEFzc2Vzc29yUmVwb3J0KGxhYmVsID0gJ2NhbGwnKSB7XG4gICAgdGhpcy5hc3Nlc3NvckxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMub3BlcmF0aW9uU2VydmljZS5nZXRBc3Nlc3NvclJlcG9ydCh0aGlzLmFwaUJhc2VVcmwgKyB0aGlzLnJlcG9ydENvbmZpZy5hc3Nlc3NvclJlcG9ydCArIHRoaXMucXVlcnlQYXJhbXNVcmwgKyB0aGlzLnNlYXJjaFBhcmFtKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBpZiAobGFiZWwgPT0gJ2NhbGwnKSB7XG4gICAgICAgIHRoaXMuYXNzZXNzb3JSZXBvcnQgPSB0aGlzLm1hcEdyYXBoT2JqZWN0KGRhdGFbJ3Jlc3VsdCddWydzZWN0aW9ucyddKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmFzc2Vzc29yUmVwb3J0WzBdLmRhdGEgPSBkYXRhWydyZXN1bHQnXVsnc2VjdGlvbnMnXVswXVsnZGF0YSddO1xuICAgICAgICB0aGlzLmFzc2Vzc29yUmVwb3J0WzBdLmdyYXBoRGF0YSA9IHRoaXMubWFwR3JhcGhPYmplY3QoZGF0YVsncmVzdWx0J11bJ3NlY3Rpb25zJ11bMF0sICdzZWFyY2gnKVxuICAgICAgfVxuICAgICAgdGhpcy5hc3Nlc3NvckxvYWRpbmcgPSBmYWxzZTtcblxuICAgIH0sIGVycm9yID0+IHtcbiAgICB9XG4gICAgKTtcbiAgfVxuICBzZWFyY2hFbnRpdHlJZEluQXBpKHNlYXJjaElkKSB7XG4gIH1cblxuICBzZWFyY2hWYWwoaWQsIHNlYXJjaFZhbHVlKSB7XG4gICAgaWYgKGlkID09ICdlbnRpdHknKSB7XG4gICAgICB0aGlzLnNlYXJjaEVudGl0eVZhbHVlID0gc2VhcmNoVmFsdWUudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpZCA9PSAnYXNzZXNzb3InKSB7XG4gICAgICB0aGlzLnNlYXJjaEFzc2Vzc29yTmFtZSA9IHNlYXJjaFZhbHVlLnRhcmdldC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hJbkFwaShsYWJlbCwgdmFsdWUpIHtcbiAgICB0aGlzW2Ake2xhYmVsfStQYWdlSW5kZXhgXSA9IDE7XG4gICAgdGhpcy5zZWFyY2hQYXJhbSA9IHRoaXMuc2V0U2VhcmNoUGFyYW0odGhpc1tgJHtsYWJlbH1QYWdlSW5kZXhgXSwgdGhpc1tgJHtsYWJlbH1QYWdlTGltaXRgXSwgbGFiZWwpO1xuICAgIGlmIChsYWJlbCA9PT0gJ2VudGl0eScpIHtcbiAgICAgIHRoaXMuc2VhcmNoRW50aXR5VmFsdWUgPSB2YWx1ZVxuICAgICAgdGhpcy5nZXRFbnRpdHlSZXBvcnQoJ3NlYXJjaCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlYXJjaEFzc2Vzc29yTmFtZSA9IHZhbHVlXG4gICAgICB0aGlzLmdldEFzc2Vzc29yUmVwb3J0KCdzZWFyY2gnKTtcbiAgICB9XG5cbiAgfVxufVxuIl19