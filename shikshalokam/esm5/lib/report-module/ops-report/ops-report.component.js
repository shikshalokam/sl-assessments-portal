/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatAccordion, MatSnackBar } from '@angular/material';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { OperationsService } from '../operations-service/operations.service';
import { CamelCasePipe } from '../../core-module/pipes/camelcase-pipe/camelcase.pipe';
import { UtilityService } from '../../core-module/services/utility-service/utility.service';
var OpsReportComponent = /** @class */ (function () {
    function OpsReportComponent(router, route, _fb, operationService, utility, snackBar) {
        var _this = this;
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
        function (data) {
            _this.apiBaseUrl = data.apibaseUrl;
            _this.reportConfig = data.reportConfig;
            _this.shareLinkApi = data.shareLinkApi;
            _this.publicSharedBaseUrl = data.publicSharedBaseUrl;
            _this.globalConfig = data.globalConfig;
            _this.noAssess = data.noAssess;
            _this.componentId = data.componentId;
            _this.hostUrl = data.apibaseUrl;
            _this.baseUrl = data.baseUrl;
            _this.portalName = data.portalName;
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
    OpsReportComponent.prototype.pdf = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var data = document.getElementById(id);
        html2canvas(data).then((/**
         * @param {?} canvas
         * @return {?}
         */
        function (canvas) {
            /** @type {?} */
            var imgWidth = 208;
            /** @type {?} */
            var pageHeight = 295;
            /** @type {?} */
            var imgHeight = canvas.height * imgWidth / canvas.width;
            /** @type {?} */
            var heightLeft = imgHeight;
            /** @type {?} */
            var contentDataURL = canvas.toDataURL('image/png');
            /** @type {?} */
            var pdf = new jspdf('p', 'mm', 'a4');
            /** @type {?} */
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save(id + '.pdf');
        }));
    };
    /**
     * @return {?}
     */
    OpsReportComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentRouterUrl = window.location.href;
        this.route.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            /** @type {?} */
            var param = Object.assign({}, params);
            _this.pageParam = params;
            console.log(params);
            _this.utility.loaderShow();
            _this.linkId = params['linkId'];
            _this.getUserProfile(params['solutionId']);
            _this.filters(params['solutionId']);
            _this.applyFilter(_this.pageParam);
            _this.urlQueryParams = Object.assign({}, params);
            delete param.solutionId;
            if (Object.keys(param).length) {
                _this.generateReport(param);
                _this.expandedFilters = false;
            }
            else {
                _this.filterForm.reset();
                _this.expandedFilters = true;
                _this.reportGenerate = false;
                _this.assessorReport = [];
                _this.entityReport = [];
                _this.summaryData = {};
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
    };
    /**
     * @param {?} condition
     * @return {?}
     */
    OpsReportComponent.prototype.filterApply = /**
     * @param {?} condition
     * @return {?}
     */
    function (condition) {
        var e_1, _a;
        //console.logcondition)
        if (condition === 'reset') {
            this.filterForm.reset();
            // this.router.navigate(['/operations/reports'], { queryParams: { solutionId: this.pageParam['solutionId'] } });
            this.reportGenerate = false;
            this.filterArray = [];
            /** @type {?} */
            var keys = Object.keys(this.urlQueryParams);
            /** @type {?} */
            var obj = {};
            try {
                for (var keys_1 = tslib_1.__values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    obj[key] = null;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
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
            for (var filter in this.filterObject) {
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
    };
    /**
     * @param {?} data
     * @param {?=} type
     * @return {?}
     */
    OpsReportComponent.prototype.mapGraphObject = /**
     * @param {?} data
     * @param {?=} type
     * @return {?}
     */
    function (data, type) {
        var _this = this;
        if (type === void 0) { type = 'call'; }
        if (type === 'call') {
            data.forEach((/**
             * @param {?} object
             * @param {?} ind
             * @return {?}
             */
            function (object, ind) {
                console.log(object);
                for (var i = 0; i < object.graphData.length; i++) {
                    /** @type {?} */
                    var dataArray = _this.getData(object, i);
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
                function (item, index) {
                    if (object.graphData[index].data.length > 2 && object.graphData[index].chartType === 'ColumnChart') {
                        Object.assign(data[ind].graphData[index].chartOptions, {
                            isStack: true,
                        });
                    }
                    if (data[ind].graphData[index].data.length > 10) {
                        Object.assign(data[ind].graphData[index].chartOptions.hAxis, { textPosition: 'none' });
                    }
                    /** @type {?} */
                    var colNameArray = [];
                    data[ind].graphData[index].columnNames.forEach((/**
                     * @param {?} column
                     * @return {?}
                     */
                    function (column) {
                        colNameArray.push(new CamelCasePipe().transform(column));
                    }));
                    Object.assign(data[ind].graphData[index], { columnNames: colNameArray });
                }));
                new CamelCasePipe().transform('entityList');
                /** @type {?} */
                var headers = _this.getTableHeader(object);
                Object.assign(data[ind], { tableHeader: headers });
            }));
            ////console.logdata)
            return data;
        }
        else {
            for (var i = 0; i < data.graphData.length; i++) {
                /** @type {?} */
                var dataArray = this.getData(data, i);
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
            function (item, index) {
                if (data.graphData[index].data.length > 2 && data.graphData[index].chartType === 'ColumnChart') {
                    Object.assign(data.graphData[index].chartOptions, {
                        isStack: true,
                    });
                }
                if (data.graphData[index].data.length > 10) {
                    Object.assign(data.graphData[index].chartOptions.hAxis, { textPosition: 'none' });
                }
                /** @type {?} */
                var colNameArray = [];
                data.graphData[index].columnNames.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    colNameArray.push(new CamelCasePipe().transform(column));
                }));
                Object.assign(data.graphData[index], { columnNames: colNameArray });
            }));
            new CamelCasePipe().transform('entityList');
            /** @type {?} */
            var headers = this.getTableHeader(data);
            Object.assign(data, { tableHeader: headers });
            console.log(data.graphData);
            return data.graphData;
        }
    };
    /**
     * @param {?} object
     * @return {?}
     */
    OpsReportComponent.prototype.getTableHeader = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        /** @type {?} */
        var headingArray = [];
        object.tabularData.headers.forEach((/**
         * @param {?} header
         * @return {?}
         */
        function (header) {
            headingArray.push(header.name);
        }));
        return headingArray;
    };
    /**
     * @param {?} object
     * @param {?} i
     * @return {?}
     */
    OpsReportComponent.prototype.getData = /**
     * @param {?} object
     * @param {?} i
     * @return {?}
     */
    function (object, i) {
        /** @type {?} */
        var dataArray = [];
        for (var j = 0; j < object.data.length; j++) {
            /** @type {?} */
            var columnArray = this.getColumn(object, i, j);
            dataArray.push(columnArray);
        }
        return dataArray;
    };
    /**
     * @param {?} solutionId
     * @return {?}
     */
    OpsReportComponent.prototype.getUserProfile = /**
     * @param {?} solutionId
     * @return {?}
     */
    function (solutionId) {
        var _this = this;
        this.operationService.getUserProfileSummary(this.apiBaseUrl + this.reportConfig.profileSummary + solutionId).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            ////console.logdata);
            _this.summaryProfileData = data['result'];
            /** @type {?} */
            var arrayToObject = (/**
             * @param {?} array
             * @param {?} keyField
             * @return {?}
             */
            function (array, keyField) {
                return array.reduce((/**
                 * @param {?} obj
                 * @param {?} item
                 * @return {?}
                 */
                function (obj, item) {
                    obj[item[keyField]] = item;
                    return obj;
                }), {});
            });
            _this.summaryProfileData = arrayToObject(_this.summaryProfileData, "label");
            if (_this.noAssess) {
                _this.utility.loaderHide();
            }
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
     * @param {?} object
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    OpsReportComponent.prototype.getColumn = /**
     * @param {?} object
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    function (object, i, j) {
        /** @type {?} */
        var colArray = [];
        object.graphData[i].columnNames.forEach((/**
         * @param {?} column
         * @param {?} index
         * @return {?}
         */
        function (column, index) {
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
    };
    /**
     * @param {?} value
     * @return {?}
     */
    OpsReportComponent.prototype.applyDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var date = new Date(value);
        /** @type {?} */
        var mnth = ("0" + (date.getMonth() + 1)).slice(-2);
        /** @type {?} */
        var day = ("0" + date.getDate()).slice(-2);
        /** @type {?} */
        var val = [day, mnth, date.getFullYear()].join("-");
        return val;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    OpsReportComponent.prototype.applyFilter = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /** @type {?} */
        var navigationExtras = {
            queryParams: obj,
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        };
        this.router.navigate([], navigationExtras);
    };
    /**
     * @param {?} key
     * @param {?} event
     * @return {?}
     */
    OpsReportComponent.prototype.inputChange = /**
     * @param {?} key
     * @param {?} event
     * @return {?}
     */
    function (key, event) {
        var _a;
        this.applyFilter((_a = {}, _a[key] = event.target.value, _a));
        if (key == 'entityId') {
            this.searchEntityId = event.target.value;
        }
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    OpsReportComponent.prototype.selectType = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        var _a;
        this.applyFilter((_a = {}, _a[key] = value, _a));
    };
    /**
     * @param {?} param
     * @return {?}
     */
    OpsReportComponent.prototype.generateReport = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        var _this = this;
        this.queryParamsUrl = this.pageParam['solutionId'] + "?";
        /** @type {?} */
        var paramKey = Object.keys(param);
        if (paramKey.includes('componentName')) {
            paramKey.splice(paramKey.indexOf('componentName'), 1);
        }
        /** @type {?} */
        var index = 0;
        if (paramKey.includes('solutionId')) {
            paramKey.splice(paramKey.indexOf('solutionId'), 1);
        }
        paramKey.forEach((/**
         * @param {?} element
         * @param {?} index
         * @return {?}
         */
        function (element, index) {
            index ? _this.queryParamsUrl += '&' + element + '=' + param[element] : _this.queryParamsUrl += element + '=' + param[element];
        }));
        this.reportGenerate = true;
        console.log("generate report");
        this.reportsDataFetch();
    };
    /**
     * @param {?} id
     * @return {?}
     */
    OpsReportComponent.prototype.downloadCsv = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        if (id === 'entity') {
            this.operationService.getEntityReport(this.apiBaseUrl + this.reportConfig.entityReport + this.pageParam['solutionId'] + "?fromDate=" + this.pageParam['fromDate'] + "&toDate=" + this.pageParam['toDate'] + "&csv=" + true).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.download(error, id);
            }));
        }
        else if (id === 'assessor') {
            this.operationService.getAssessorReport(this.apiBaseUrl + this.reportConfig.assessorReport + this.pageParam['solutionId'] + "?fromDate=" + this.pageParam['fromDate'] + "&toDate=" + this.pageParam['toDate'] + "&csv=" + true).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.download(error, id);
            }));
        }
    };
    /**
     * @param {?} object
     * @param {?} id
     * @return {?}
     */
    OpsReportComponent.prototype.download = /**
     * @param {?} object
     * @param {?} id
     * @return {?}
     */
    function (object, id) {
        if (object.status == 200) {
            /** @type {?} */
            var blob = new Blob([object.error.text], { type: 'csv' });
            /** @type {?} */
            var url = window.URL.createObjectURL(blob);
            /** @type {?} */
            var a = document.createElement('a');
            a.href = url;
            a.download = id + "-Report.csv";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }
        else {
            this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
        }
    };
    /**
     * @param {?=} index
     * @param {?=} size
     * @param {?=} label
     * @return {?}
     */
    OpsReportComponent.prototype.setSearchParam = /**
     * @param {?=} index
     * @param {?=} size
     * @param {?=} label
     * @return {?}
     */
    function (index, size, label) {
        if (index === void 0) { index = 1; }
        if (size === void 0) { size = this.itemsPerPage[0]; }
        /** @type {?} */
        var url = '&page=' + index + '&limit=' + size;
        url = url + (label === 'entity' ? '&entityName=' + this.searchEntityValue : '&assessorName=' + this.searchAssessorName);
        return url;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    OpsReportComponent.prototype.pageResponse = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @return {?}
     */
    OpsReportComponent.prototype.reportsDataFetch = /**
     * @return {?}
     */
    function () {
        this.utility.loaderShow();
        this.getUserSummary(this.queryParamsUrl);
        this.searchParam = this.setSearchParam(this.entityPageIndex + 1, this.entityPageLimit, 'entity');
        this.getEntityReport();
        this.searchParam = this.setSearchParam(this.assessorPageIndex + 1, this.assessorPageLimit, 'assessor');
        this.getAssessorReport();
    };
    /**
     * @param {?} url
     * @return {?}
     */
    OpsReportComponent.prototype.filters = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        if (!this.pageParam.linkId) {
            this.operationService.applyFilters(this.apiBaseUrl + this.reportConfig.reportFilter + url).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.filterData = _this.mapQueryParams(data['result']);
                _this.filterForm = _this.utility.toGroup(_this.filterData);
                ////console.logthis.filterForm)
                _this.filterObject = _this.filterForm.getRawValue();
                for (var filter in _this.filterObject) {
                    if (_this.filterObject[filter] === null || _this.filterObject[filter] === undefined || _this.filterObject[filter] === "" || _this.filterObject[filter] === "aN-aN-NaN") {
                        delete _this.filterObject[filter];
                    }
                }
                _this.filterArray = Object.entries(_this.filterObject);
                _this.utility.loaderHide();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.snackBar.open(_this.globalConfig.errorMessage, "Ok", { duration: 9000 });
                _this.utility.loaderHide();
            }));
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    OpsReportComponent.prototype.mapQueryParams = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var param;
        this.route.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            param = params;
        }));
        /** @type {?} */
        var paramKey = Object.keys(param);
        paramKey.forEach((/**
         * @param {?} paramLabel
         * @return {?}
         */
        function (paramLabel) {
            data.forEach((/**
             * @param {?} element
             * @param {?} index
             * @return {?}
             */
            function (element, index) {
                if (element.field === paramLabel) {
                    if (element.input === 'date') {
                        /** @type {?} */
                        var date = [param[paramLabel].substring(6), param[paramLabel].substring(3, 5), param[paramLabel].substring(0, 2)].join("-");
                        data[index].value = date + 'T00:00:00.000Z';
                    }
                    else {
                        data[index].value = param[paramLabel];
                    }
                }
            }));
        }));
        return data;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    OpsReportComponent.prototype.getUserSummary = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        this.operationService.getUserSummary(this.apiBaseUrl + this.reportConfig.reportSummary + url).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.summaryData = data['result'];
            /** @type {?} */
            var arrayToObject = (/**
             * @param {?} array
             * @param {?} keyField
             * @return {?}
             */
            function (array, keyField) {
                return array.reduce((/**
                 * @param {?} obj
                 * @param {?} item
                 * @return {?}
                 */
                function (obj, item) {
                    obj[item[keyField]] = item;
                    return obj;
                }), {});
            });
            _this.summaryData = arrayToObject(_this.summaryData, "label");
            _this.utility.loaderHide();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
        }));
    };
    /**
     * @param {?=} label
     * @return {?}
     */
    OpsReportComponent.prototype.getEntityReport = /**
     * @param {?=} label
     * @return {?}
     */
    function (label) {
        var _this = this;
        if (label === void 0) { label = 'call'; }
        this.entityLoading = true;
        this.operationService.getEntityReport(this.apiBaseUrl + this.reportConfig.entityReport + this.queryParamsUrl + this.searchParam).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.share = data['result'];
            if (label == 'call') {
                _this.entityReport = _this.mapGraphObject(data['result']['sections']);
            }
            else {
                _this.entityReport[0].data = data['result']['sections'][0]['data'];
                _this.entityReport[0].graphData = _this.mapGraphObject(data['result']['sections'][0], 'search');
            }
            _this.entityLoading = false;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
        }));
    };
    /**
     * @param {?=} label
     * @return {?}
     */
    OpsReportComponent.prototype.getAssessorReport = /**
     * @param {?=} label
     * @return {?}
     */
    function (label) {
        var _this = this;
        if (label === void 0) { label = 'call'; }
        this.assessorLoading = true;
        this.operationService.getAssessorReport(this.apiBaseUrl + this.reportConfig.assessorReport + this.queryParamsUrl + this.searchParam).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (label == 'call') {
                _this.assessorReport = _this.mapGraphObject(data['result']['sections']);
            }
            else {
                _this.assessorReport[0].data = data['result']['sections'][0]['data'];
                _this.assessorReport[0].graphData = _this.mapGraphObject(data['result']['sections'][0], 'search');
            }
            _this.assessorLoading = false;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
        }));
    };
    /**
     * @param {?} searchId
     * @return {?}
     */
    OpsReportComponent.prototype.searchEntityIdInApi = /**
     * @param {?} searchId
     * @return {?}
     */
    function (searchId) {
    };
    /**
     * @param {?} id
     * @param {?} searchValue
     * @return {?}
     */
    OpsReportComponent.prototype.searchVal = /**
     * @param {?} id
     * @param {?} searchValue
     * @return {?}
     */
    function (id, searchValue) {
        if (id == 'entity') {
            this.searchEntityValue = searchValue.target.value;
        }
        else if (id == 'assessor') {
            this.searchAssessorName = searchValue.target.value;
        }
    };
    /**
     * @param {?} label
     * @param {?} value
     * @return {?}
     */
    OpsReportComponent.prototype.searchInApi = /**
     * @param {?} label
     * @param {?} value
     * @return {?}
     */
    function (label, value) {
        this[label + "+PageIndex"] = 1;
        this.searchParam = this.setSearchParam(this[label + "PageIndex"], this[label + "PageLimit"], label);
        if (label === 'entity') {
            this.searchEntityValue = value;
            this.getEntityReport('search');
        }
        else {
            this.searchAssessorName = value;
            this.getAssessorReport('search');
        }
    };
    OpsReportComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ops-report',
                    template: "<app-loader></app-loader>\n<div class=\"_margin-bottom\">\n  <app-parent-heading *ngIf=\"!noAssess\" [startIndex]=\"3\" [genericHeading]=\"headings\" [showControl]=\"false\">\n  </app-parent-heading>\n</div>\n<div class=\"reportDashboard\">\n\n  <div class=\"_flex-box _justify-content-center \">\n\n    <div class=\"_full-width\">\n\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12  _noMarginPadding \">\n        <!-- <mat-card class=\" profileHeight col-xs-12 \" [formGroup]=\"filterForm\" *ngIf=\"summaryData\">\n\n          <div class=\"col-xs-12 _flex-box\">\n            <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-4  _flex-box _justify-content-center  userIcon \">\n              <i class=\"material-icons profileIcon\">\n                account_circle\n              </i>\n            </div>\n            <div class=\"col-lg-9 col-md-9 col-sm-8 col-xs-8   profileContent  flex-direction-column\">\n              <div class=\"flexBox _justify-content-center\">\n                <span>\n                  <h4>{{summaryData.managerName.value |camelcase }} .</h4>\n                </span>\n                <span class=\"_flex-box _justify-content-space-between horizontalLine flexWarp\">\n                  <span class=\"subHeading col-xs-12 col-md-4 col-lg-4\">{{summaryData.role.value | camelcase }} .</span>\n                  <span class=\"subHeading col-xs-12 col-md-4 col-lg-4\"> {{summaryData.email.value  }} .</span>\n                  <span class=\"subHeading col-xs-12 col-md-4 col-lg-4\">{{summaryData.userName.value }} .</span>\n                </span>\n\n              </div>\n              <div class=\"_flexbox _justify-content-space-between flexWarp\">\n                <div class=\"flexBox _justify-content-center col-xs-12 col-md-4 col-lg-4\">\n                  <span>\n                    <h6>{{summaryData.programName.label | camelcase}}</h6>\n                  </span>\n                  <span>\n                    <h6 class=\"subHeading\">{{summaryData.programName.value | camelcase}}</h6>\n                  </span>\n                </div>\n                <div class=\"flexBox _justify-content-center col-xs-12 col-md-4 col-lg-4\">\n                  <span>\n                    <h6>For the period :</h6>\n                  </span>\n                  <span>\n                    <h6 class=\"subHeading\"> - NA - </h6>\n                  </span>\n                </div>\n                <div class=\"flexBox _justify-content-center col-xs-12 col-md-4 col-lg-4\">\n                  <span>\n                    <h6>{{summaryData.createdDate.label | camelcase}}:</h6>\n                  </span>\n                  <span>\n                    <h6 class=\"subHeading\">{{summaryData.createdDate.value}}</h6>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </mat-card>  -->\n        <div class=\"_flex-box _justify-content-space-between\">\n          <h4 class=\"marginTop\" style=\"flex:1\">Program Operations Report </h4>\n          <app-share-link *ngIf=\"share?.isShareable && !noAssess\" [portalName]=\"portalName\" [baseUrl]=\"baseUrl\"\n            [componentId]=\"componentId\" [publicSharedBaseUrl]=\"publicSharedBaseUrl\" [globalConfig]=\"globalConfig\"\n            [shareLinkApi]=\"shareLinkApi\"></app-share-link>\n        </div>\n\n        <!-- <h4 class=\"_flex-box  _small-Bottom-Margin\"></h4>\n        <div class=\"col-xs-12 _flex-box _flex-end _small-Top-Margin\" *ngIf=\"reportGenerate && entityReport\" >\n          <app-share-link *ngIf=\"share['isShareable'] && !noAssess\" [publicSharedBaseUrl]=\"publicSharedBaseUrl\"  [globalConfig]=\"globalConfig\" [shareLinkApi]=\"shareLinkApi\"></app-share-link>\n        </div> -->\n\n        <mat-card *ngIf=\"summaryProfileData\">\n          <div class=\"_flexbox _justify-content-space-between flexWarp\">\n            <div class=\"flexBox col-xs-12 col-md-4 col-lg-4 _justify-content-center\">\n              <span>\n                <h6 class=\"_no-wrap\">{{summaryProfileData?.nameOfTheProgram?.label | camelcase}} <span\n                    class=\"_padding-left _padding-right\">:</span></h6>\n              </span>\n              <span>\n                <h6 class=\"subHeading\">{{summaryProfileData?.nameOfTheProgram?.value}}</h6>\n              </span>\n            </div>\n            <div class=\"flexBox  col-xs-12 col-md-4 col-lg-4 _justify-content-center\">\n              <span>\n                <h6 class=\"_no-wrap\">{{summaryProfileData?.nameOfTheManager?.label | camelcase}} <span\n                    class=\"_padding-left _padding-right\">:</span></h6>\n              </span>\n              <span>\n                <h6 class=\"subHeading\">{{summaryProfileData.nameOfTheManager?.value | camelcase}}</h6>\n              </span>\n            </div>\n            <!-- <div class=\"flexBox  col-xs-12 col-md-4 col-lg-4 _justify-content-center\">\n                  <span>\n                    <h6 class=\"_no-wrap\">For the period <span class=\"_padding-left _padding-right\">:</span></h6>\n                  </span>\n                  <span>\n                    <h6 class=\"subHeading\"> - NA - </h6>\n                  </span>\n                </div> -->\n\n            <div class=\"flexBox  col-xs-12 col-md-4 col-lg-4 _justify-content-center\">\n              <span>\n                <h6 class=\"_no-wrap\">{{summaryProfileData.dateOfReportGeneration.label | camelcase}} <span\n                    class=\"_padding-left _padding-right\">:</span></h6>\n              </span>\n              <span>\n                <h6 class=\"subHeading\">{{summaryProfileData.dateOfReportGeneration?.value}}</h6>\n              </span>\n            </div>\n\n          </div>\n        </mat-card>\n        <div *ngIf=\"!noAssess\" class=\"col-xs-12 _noMarginPadding\">\n          <mat-accordion class=\"example-headers-align \" #myaccordion=\"matAccordion\">\n\n            <mat-expansion-panel class=\"marginTop\" [expanded]=\"expandedFilters\">\n              <mat-expansion-panel-header (click)=\" expandedFilters = !expandedFilters\">\n                <span class=\"_flex-box\">\n                  <i class=\"material-icons _padding-right\">\n                    filter_list\n                  </i>\n                  {{'headings.filters' | translate}}\n                  <span class=\"_padding-left\">\n                    <mat-chip *ngIf=\" filterArray?.length\"> {{filterArray?.length }} </mat-chip>\n                    <mat-chip *ngIf=\"! filterArray?.length\"> 0 </mat-chip>\n                  </span>\n                </span>\n              </mat-expansion-panel-header>\n              <div class=\"marginTop\" *ngIf=\"filterArray\">\n                <!-- <mat-chip-list #chipList> -->\n                <!-- <mat-chip *ngFor=\"let filter of filterArray\" [selectable]=\"selectable\"\n                 >\n                  {{filter[0]}} : {{filter[1]}} -->\n                <!-- <mat-chip *ngFor=\"let filter of filterArray\">\n                    <span *ngIf=\"filter[0] == 'toDate' || filter[0] == 'fromDate' ; else no_date\"> {{filter[0] | camelcase}} : {{filter[1] | date: 'shortDate'}}</span>\n                    <ng-template #no_date>{{filter[0] | camelcase}} : {{filter[1]}}</ng-template>\n                  </mat-chip> -->\n\n                <!-- </mat-chip-list> -->\n              </div>\n              <app-dynamic-form [genericData]=\"filterData\" [hostUrl]=\"hostUrl\" [genericForm]=\"filterForm\"\n                [genericEdit]=\"true\">\n              </app-dynamic-form>\n\n              <mat-action-row>\n                <button mat-raised-button (click)=\"filterApply('reset')\">{{'buttons.reset'|translate}}</button>\n                <button mat-raised-button color=\"primary\" (click)=\"filterApply('apply')\" class=\"_margin-left\"\n                  [disabled]=\"!filterForm.valid\">{{'buttons.apply'|translate}}</button>\n              </mat-action-row>\n            </mat-expansion-panel>\n          </mat-accordion>\n        </div>\n      </div>\n      <!-- <div class=\"col-xs-12 _flex-box _flex-end _small-Top-Margin\" *ngIf=\"reportGenerate && entityReport\" >\n      <app-share-link *ngIf=\"share['isShareable'] && !noAssess\" [publicSharedBaseUrl]=\"publicSharedBaseUrl\"  [globalConfig]=\"globalConfig\" [shareLinkApi]=\"shareLinkApi\"></app-share-link>\n  </div> -->\n\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 _noMarginPadding \" [ngClass]=\"{'_margin-top': noAssess}\"\n        *ngIf=\"reportGenerate && summaryData\">\n        <mat-card class=\"_flex-box _justify-content-center col-xs-12\">\n          <h4>{{'headings.summary' | translate}} </h4>\n          <div class=\"_flex-box flexWarp\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 \">\n              <table>\n                <tr>\n                  <td>{{summaryData?.entitiesAssigned?.label | camelcase}}</td>\n                  <td>{{summaryData?.entitiesAssigned?.value}}</td>\n                </tr>\n                <tr>\n                  <td>{{summaryData?.entitiesCompleted?.label | camelcase}}</td>\n                  <td>{{summaryData?.entitiesCompleted?.value}}</td>\n                </tr>\n                <tr>\n                  <td>{{summaryData?.entitiesInporgress?.label | camelcase}}</td>\n                  <td>{{summaryData?.entitiesInporgress?.value}}</td>\n                </tr>\n                <tr>\n                  <td>{{summaryData?.averageTimeTakenInDays?.label | camelcase}}</td>\n                  <td>{{summaryData?.averageTimeTakenInDays?.value}}</td>\n                </tr>\n              </table>\n            </div>\n            <!-- <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 marginTop\" *ngIf=\"summaryGraph\">\n            <google-chart class=\"marginChart\" [options]=\"summaryGraph.chartOptions\"\n              [title]=\"summaryGraph.title\" style=\"width : 100%; height: 100%;\"\n              [data]=\"summaryGraph.data\" [type]=\"summaryGraph.chartType\"\n              [columnNames]=\"summaryGraph.chartColumnNames\">\n            </google-chart>\n          </div> -->\n          </div>\n        </mat-card>\n      </div>\n\n      <div class=\"col-lg-12 col-md-22 col-sm-12 col-xs-12 marginTop _noMarginPadding\"\n        *ngIf=\" reportGenerate && assessorReport\">\n        <div *ngFor=\"let assessorGraph of assessorReport ; let index = index\">\n          <mat-card class=\"flex-direction-column col-xs-12\">\n            <h4 class=\"_flex-box _justify-content-space-between loaderHeight\"> {{'headings.assessorReports'| translate}}\n              <div *ngIf=\"assessorLoading\">\n                <app-individual-loader></app-individual-loader>\n              </div>\n              <button *ngIf=\"!noAssess\" matSuffix matTooltip=\"{{'message.downloadCsv' | translate}}\" mat-icon-button\n              aria-label=\"Clear\" (click)=\"downloadCsv('assessor')\">\n              <i class=\"material-icons\">\n                file_download\n              </i>\n            </button>\n            </h4>\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12  _noMarginPadding \">\n              <mat-form-field class=\" _full-width\">\n                <input matInput appDebounceSearch [searchValue]=\"searchAssessorName\"\n                  (debounceSearch)=\"searchInApi('assessor'  , $event)\" placeholder=\"{{'search'| translate}}\"\n                  [debounceTime]=\"200\" (keyup)=\"searchVal('assessor',$event)\">\n                <button mat-button matPrefix mat-icon-button aria-label=\"Clear\">\n                  <i class=\"material-icons\">\n                    search\n                  </i>\n                </button>\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"assessorGraph.data.length > 0\">\n              <table>\n                <tr>\n                  <th *ngFor=\"let heading of assessorGraph.tabularData.headers\">{{heading?.label}}</th>\n                </tr>\n                <tr *ngFor=\"let assessor of assessorGraph.data\">\n                  <td *ngFor=\"let heading of assessorGraph.tableHeader\">{{assessor[heading] | blank}}</td>\n                </tr>\n              </table>\n              <div class=\" col-xs-12 _border _small-Top-Margin\">\n                <div class=\" col-xs-12 _flex-box _flex-end\">\n                  <button mat-button (click)=\"pdf('assessorGraph'+index)\">\n                    {{'message.downloadChart' | translate}}<i class=\"material-icons\">\n                      file_download\n                    </i>\n                  </button>\n                </div>\n                <div class=\"col-xs-12\" id=\"assessorGraph{{index}}\">\n                  <div *ngFor=\"let Chart of assessorGraph.graphData\">\n\n                    <h4 class=\"_flex-box _justify-content-center\">{{Chart.title}}</h4>\n                    <google-chart class=\"marginChart\" [options]=\"Chart.chartOptions\"\n                      style=\"width : 100%; min-height: 300px;\" [data]=\"Chart.data\" [type]=\"Chart.chartType\"\n                      [columnNames]=\"Chart.columnNames\">\n                    </google-chart>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"!(assessorGraph.data.length > 0)\">\n              <div class=\"middle\">\n                {{'message.noData' | translate}}\n              </div>\n            </div>\n            <app-pagination [length]=\"assessorGraph.totalCount\" [pageLimit]=\"assessorPageLimit\"\n              [pageIndex]=\"assessorPageIndex\" [itemsPerPage]=\"itemsPerPage\" (paginationResponse)=\"pageResponse($event)\"\n              [paginationLabel]=\"'assessor'\"></app-pagination>\n          </mat-card>\n        </div>\n      </div>\n      <div class=\"col-lg-12 col-md-22 col-sm-12 col-xs-12 marginTop _noMarginPadding\"\n        *ngIf=\"reportGenerate && entityReport\">\n        <div *ngFor=\"let entityGraph of entityReport ; let index = index \">\n          <mat-card class=\"flex-direction-column col-xs-12 _noMarginPadding\">\n            <h4 class=\"_flex-box _justify-content-space-between loaderHeight\"> {{'headings.schoolReports'| translate}}\n              <div *ngIf=\"entityLoading\">\n                <app-individual-loader></app-individual-loader>\n              </div>\n              <button *ngIf=\"!noAssess\" mat-button matSuffix matTooltip=\"{{'message.downloadCsv' | translate}}\"\n              mat-icon-button aria-label=\"Clear\" (click)=\"downloadCsv('entity')\">\n              <i class=\"material-icons\">\n                file_download\n              </i>\n            </button>\n            </h4>\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12  \">\n              <mat-form-field class=\" _full-width\">\n                <input class=\"filterInput\" matInput appDebounceSearch [searchValue]=\"searchEntityValue\"\n                  [value]=\"searchEntityValue\" (debounceSearch)=\"searchInApi('entity' , $event)\"\n                  placeholder=\"{{'search'| translate}}\" [debounceTime]=\"100\" (keyup)=\"searchVal('entity',$event)\">\n                <button mat-button matPrefix mat-icon-button aria-label=\"Clear\">\n                  <i class=\"material-icons\">\n                    search\n                  </i>\n                </button>\n        \n              </mat-form-field>\n            </div>\n            <div *ngIf=\"entityGraph.data?.length > 0\">\n              <table>\n                <tr>\n                  <th *ngFor=\"let heading of entityGraph.tabularData.headers\">{{heading?.label}}</th>\n                </tr>\n                <tr *ngFor=\"let entity of entityGraph.data\">\n                  <td *ngFor=\"let heading of entityGraph.tableHeader\">{{entity[heading] | blank}}</td>\n                </tr>\n              </table>\n              <div class=\" col-xs-12 _border _small-Top-Margin\">\n                <div class=\" col-xs-12 _flex-box _flex-end\">\n                  <button mat-button (click)=\"pdf('entityGraph'+index)\">\n                    {{'message.downloadChart' | translate}}<i class=\"material-icons\">\n                      file_download\n                    </i>\n                  </button>\n                </div>\n                <div class=\"col-xs-12\" id=\"entityGraph{{index}}\">\n\n                  <div *ngFor=\"let Chart of entityGraph.graphData\">\n                    <h4 class=\"_flex-box _justify-content-center\">{{Chart.title}}</h4>\n\n                    <google-chart class=\"marginChart\" [options]=\"Chart.chartOptions\"\n                      style=\"width : 100%; min-height: 300px;\" [data]=\"Chart.data\" [type]=\"Chart.chartType\"\n                      [columnNames]=\"Chart.columnNames\">\n                    </google-chart>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"!(entityGraph.data?.length > 0)\">\n              <div class=\"middle\">\n                {{'message.noData' | translate}}\n              </div>\n            </div>\n            <app-pagination [length]=\"entityGraph.totalCount\" [pageLimit]=\"entityPageLimit\"\n              [pageIndex]=\"entityPageIndex\" [itemsPerPage]=\"itemsPerPage\" (paginationResponse)=\"pageResponse($event)\"\n              [paginationLabel]=\"'schools'\"></app-pagination>\n          </mat-card>\n        </div>\n      </div>\n\n    </div>\n  </div>",
                    styles: [".paddingTop{padding:20px 0}.paddingBottom{padding:0 0 20px}.padding{padding:0 20px}.marginTop{margin:20px 0!important}.height{height:350px;overflow:hidden}.loaderHeight{height:40px}.profileHeight{padding:0;display:flex;align-items:center;flex-direction:column}.profileIcon{font-size:10vw}.profileContent{padding-left:20px}.flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.wrapper{padding:0 20px}.userIcon{height:200px}.userIcon:after{content:\"\";background:var(--light-grey-color);position:absolute;top:20%;right:0;height:60%;width:1px}.flexBox{display:flex;justify-content:flex-start}.subHeading{color:var(--grey-color);overflow:hidden;text-overflow:ellipsis}.dividerWidth{margin:0 20px;width:calc(100% - 40px)!important}._flexbox{display:flex;align-items:baseline}.horizontalLine{border-bottom:1px solid var(--light-grey-color);width:calc(100% - 20px)!important;padding:0 0 20px}.flex-direction-column{flex-direction:column;display:flex;overflow-x:auto}.flexWarp{flex-wrap:wrap}table{border-collapse:collapse;border-spacing:0;width:100%;border:1px solid var(--border-color)}td,th{text-align:left;padding:10px}tr:nth-child(even){background-color:var(--background-color)}.marginChart{margin:50px 0}.middle{display:flex;justify-content:center;padding:20px 0}.loader{border:1px solid var(--black-color);border-top:1px solid var(--primary-color);border-radius:50%;width:10px;height:10px;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin;margin-left:10px}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
                }] }
    ];
    /** @nocollapse */
    OpsReportComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: FormBuilder },
        { type: OperationsService },
        { type: UtilityService },
        { type: MatSnackBar }
    ]; };
    OpsReportComponent.propDecorators = {
        hostUrl: [{ type: Input }],
        globalConfig: [{ type: Input }],
        filterPanel: [{ type: ViewChild, args: ['myaccordion',] }]
    };
    return OpsReportComponent;
}());
export { OpsReportComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BzLXJlcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvcmVwb3J0LW1vZHVsZS9vcHMtcmVwb3J0L29wcy1yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFvQixNQUFNLGlCQUFpQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUvQixPQUFPLFdBQVcsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUU1RjtJQXVERSw0QkFDVSxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsR0FBZ0IsRUFDaEIsZ0JBQW1DLEVBQ25DLE9BQXVCLEVBQ3ZCLFFBQXFCO1FBTi9CLGlCQXdCQztRQXZCUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBQ25DLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWE7UUF2RC9CLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLG9CQUFlLEdBQUcsQ0FB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LHlDQUFvRDs7SUFDcEQsZ0RBQXdCOztJQUN4Qiw4Q0FBOEI7O0lBQzlCLGtEQUFrQzs7SUFDbEMsd0NBQWdCOztJQUNoQiwwQ0FBa0I7O0lBQ2xCLG9DQUFPOztJQUNQLG1DQUFXOztJQUNYLGlEQUF5Qjs7SUFDekIsMENBQWtCOztJQUNsQixzQ0FBYzs7SUFDZCx5Q0FBaUI7O0lBQ2pCLHFDQUFhOztJQUNiLHdDQUFnQjs7SUFDaEIsNENBQW9COzs7OztJQUVsQixvQ0FBc0I7Ozs7O0lBQ3RCLG1DQUE2Qjs7Ozs7SUFDN0IsaUNBQXdCOzs7OztJQUN4Qiw4Q0FBMkM7Ozs7O0lBQzNDLHFDQUErQjs7Ozs7SUFDL0Isc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEFjY29yZGlvbiwgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgKiBhcyBqc3BkZiBmcm9tICdqc3BkZic7XG5cbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcyc7XG5pbXBvcnQgeyBPcGVyYXRpb25zU2VydmljZSB9IGZyb20gJy4uL29wZXJhdGlvbnMtc2VydmljZS9vcGVyYXRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FtZWxDYXNlUGlwZSB9IGZyb20gJy4uLy4uL2NvcmUtbW9kdWxlL3BpcGVzL2NhbWVsY2FzZS1waXBlL2NhbWVsY2FzZS5waXBlJztcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS1tb2R1bGUvc2VydmljZXMvdXRpbGl0eS1zZXJ2aWNlL3V0aWxpdHkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1vcHMtcmVwb3J0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29wcy1yZXBvcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vcHMtcmVwb3J0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3BzUmVwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcmVwb3J0R2VuZXJhdGUgPSBmYWxzZTtcbiAgZW50aXR5UGFnZUluZGV4ID0gMDtcbiAgYXNzZXNzb3JQYWdlSW5kZXggPSAwO1xuICBlbnRpdHlHcmFwaDtcbiAgYXNzZXNzb3JHcmFwaDtcblxuICBoZWFkaW5ncyA9ICdoZWFkaW5ncy5vcHNSZXBvcnQnXG4gIGN1cnJlbnRVc2VyO1xuICBkeW5hbWljUmVzaXplO1xuICBjb2x1bW5OYW1lcztcbiAgc2VhcmNoRW50aXR5SWQ7XG4gIGZpbHRlckRhdGE7XG4gIG1heERhdGUgPSBuZXcgRGF0ZSgpO1xuICBmaWx0ZXJGb3JtOiBGb3JtR3JvdXA7XG4gIHF1ZXJ5UGFyYW1zVXJsID0gJyc7XG4gIHNlYXJjaEVudGl0eVZhbHVlOiBzdHJpbmcgPSAnJztcbiAgc2VhcmNoQXNzZXNzb3JOYW1lOiBzdHJpbmcgPSAnJztcbiAgZmlsdGVyT2JqZWN0OiBhbnk7XG4gIGZpbHRlckFycmF5O1xuICBlbnRpdHlSZXBvcnQ6IE9iamVjdDtcbiAgaXRlbXNQZXJQYWdlID0gWzEwLCAxNSwgMjBdO1xuICBzZWFyY2hQYXJhbTogc3RyaW5nID0gJyc7XG4gIGFzc2Vzc29yUmVwb3J0OiBhbnk7XG4gIHN1bW1hcnlEYXRhOiBhbnk7XG4gIHBhZ2VQYXJhbTogYW55O1xuICBwYWdlUmVsb2FkID0gdHJ1ZTtcbiAgc3VtbWFyeUdyYXBoOiBvYmplY3QgPSB7fTtcbiAgZW50aXR5UGFnZUxpbWl0OiBhbnkgPSAxMDtcbiAgYXNzZXNzb3JQYWdlTGltaXQ6IGFueSA9IDEwO1xuICBleHBhbmRlZEZpbHRlcnM6IGJvb2xlYW4gPSB0cnVlO1xuICBlbnRpdHlMb2FkaW5nOiBib29sZWFuO1xuICBhc3Nlc3NvckxvYWRpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhvc3RVcmw7XG4gIEBJbnB1dCgpIGdsb2JhbENvbmZpZztcbiAgQFZpZXdDaGlsZCgnbXlhY2NvcmRpb24nKSBmaWx0ZXJQYW5lbDogTWF0QWNjb3JkaW9uO1xuICBzdW1tYXJ5UHJvZmlsZURhdGE6IGFueTtcbiAgY3VycmVudFJvdXRlclVybDogc3RyaW5nID0gJyc7XG4gIHF1ZXJ5UGFyYW1zUm91dGVyVXJsOiBzdHJpbmcgPSAnJztcbiAgYXBpQmFzZVVybDogYW55O1xuICByZXBvcnRDb25maWc6IGFueTtcbiAgbGlua0lkO1xuICBzaGFyZTogYW55O1xuICBwdWJsaWNTaGFyZWRCYXNlVXJsOiBhbnk7XG4gIHNoYXJlTGlua0FwaTogYW55O1xuICBub0Fzc2VzczogYW55O1xuICBjb21wb25lbnRJZDogYW55O1xuICBiYXNlVXJsOiBhbnk7XG4gIHBvcnRhbE5hbWU6IGFueTtcbiAgdXJsUXVlcnlQYXJhbXM6IGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBvcGVyYXRpb25TZXJ2aWNlOiBPcGVyYXRpb25zU2VydmljZSxcbiAgICBwcml2YXRlIHV0aWxpdHk6IFV0aWxpdHlTZXJ2aWNlLFxuICAgIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyXG4gICkge1xuICAgIHRoaXMucm91dGUuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmFwaUJhc2VVcmwgPSBkYXRhLmFwaWJhc2VVcmw7XG4gICAgICB0aGlzLnJlcG9ydENvbmZpZyA9IGRhdGEucmVwb3J0Q29uZmlnXG4gICAgICB0aGlzLnNoYXJlTGlua0FwaSA9IGRhdGEuc2hhcmVMaW5rQXBpO1xuICAgICAgdGhpcy5wdWJsaWNTaGFyZWRCYXNlVXJsID0gZGF0YS5wdWJsaWNTaGFyZWRCYXNlVXJsO1xuICAgICAgdGhpcy5nbG9iYWxDb25maWcgPSBkYXRhLmdsb2JhbENvbmZpZztcbiAgICAgIHRoaXMubm9Bc3Nlc3MgPSBkYXRhLm5vQXNzZXNzO1xuICAgICAgdGhpcy5jb21wb25lbnRJZCA9IGRhdGEuY29tcG9uZW50SWQ7XG4gICAgICB0aGlzLmhvc3RVcmwgPSBkYXRhLmFwaWJhc2VVcmw7XG4gICAgICB0aGlzLmJhc2VVcmwgPSBkYXRhLmJhc2VVcmw7XG4gICAgICB0aGlzLnBvcnRhbE5hbWUgPSBkYXRhLnBvcnRhbE5hbWU7XG4gICAgfSlcbiAgICB0aGlzLmZpbHRlckZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICBmb3JtRGF0ZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHRvRGF0ZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cbiAgcGRmKGlkKSB7XG4gICAgdmFyIGRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaHRtbDJjYW52YXMoZGF0YSkudGhlbihjYW52YXMgPT4ge1xuICAgICAgdmFyIGltZ1dpZHRoID0gMjA4O1xuICAgICAgdmFyIHBhZ2VIZWlnaHQgPSAyOTU7XG4gICAgICB2YXIgaW1nSGVpZ2h0ID0gY2FudmFzLmhlaWdodCAqIGltZ1dpZHRoIC8gY2FudmFzLndpZHRoO1xuICAgICAgdmFyIGhlaWdodExlZnQgPSBpbWdIZWlnaHQ7XG4gICAgICBjb25zdCBjb250ZW50RGF0YVVSTCA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpXG4gICAgICBsZXQgcGRmID0gbmV3IGpzcGRmKCdwJywgJ21tJywgJ2E0Jyk7XG4gICAgICB2YXIgcG9zaXRpb24gPSAwO1xuICAgICAgcGRmLmFkZEltYWdlKGNvbnRlbnREYXRhVVJMLCAnUE5HJywgMCwgcG9zaXRpb24sIGltZ1dpZHRoLCBpbWdIZWlnaHQpXG4gICAgICBwZGYuc2F2ZShpZCArICcucGRmJyk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmN1cnJlbnRSb3V0ZXJVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgbGV0IHBhcmFtID0gT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTtcbiAgICAgIHRoaXMucGFnZVBhcmFtID0gcGFyYW1zO1xuICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJTaG93KCk7XG4gICAgICB0aGlzLmxpbmtJZCA9IHBhcmFtc1snbGlua0lkJ107XG4gICAgICB0aGlzLmdldFVzZXJQcm9maWxlKHBhcmFtc1snc29sdXRpb25JZCddKTtcbiAgICAgIHRoaXMuZmlsdGVycyhwYXJhbXNbJ3NvbHV0aW9uSWQnXSk7XG4gICAgICB0aGlzLmFwcGx5RmlsdGVyKHRoaXMucGFnZVBhcmFtKTtcbiAgICAgIHRoaXMudXJsUXVlcnlQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpO1xuICAgICAgZGVsZXRlIHBhcmFtLnNvbHV0aW9uSWQ7XG4gICAgICBpZiAoT2JqZWN0LmtleXMocGFyYW0pLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlUmVwb3J0KHBhcmFtKTtcbiAgICAgICAgdGhpcy5leHBhbmRlZEZpbHRlcnMgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsdGVyRm9ybS5yZXNldCgpO1xuICAgICAgICB0aGlzLmV4cGFuZGVkRmlsdGVycyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVwb3J0R2VuZXJhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hc3Nlc3NvclJlcG9ydCA9IFtdO1xuICAgICAgICB0aGlzLmVudGl0eVJlcG9ydCA9IFtdO1xuICAgICAgICB0aGlzLnN1bW1hcnlEYXRhID0ge307XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgLy8gICB0aGlzLnBhZ2VQYXJhbSA9IHBhcmFtcztcbiAgICAvLyAgIHRoaXMudXRpbGl0eS5sb2FkZXJTaG93KCk7XG4gICAgLy8gICB0aGlzLmxpbmtJZCA9IHBhcmFtc1snbGlua0lkJ107XG4gICAgLy8gICB0aGlzLmdldFVzZXJQcm9maWxlKHBhcmFtc1snc29sdXRpb25JZCddKTtcbiAgICAvLyAgIHRoaXMuZmlsdGVycyhwYXJhbXNbJ3NvbHV0aW9uSWQnXSk7XG4gICAgLy8gICB0aGlzLmFwcGx5RmlsdGVyKHRoaXMucGFnZVBhcmFtKTtcblxuICAgIC8vICAgLy8gaWYgKHRoaXMucGFnZVJlbG9hZCkge1xuICAgIC8vICAgICBpZiAoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggPiAxKSB7XG4gICAgLy8gICAgICAgLy8gbGV0IHBhcmFtID0gT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zKTtcbiAgICAvLyAgICAgICAvLyBkZWxldGUgcGFyYW1bJ3NvbHV0aW9uSWQnXTtcbiAgICAvLyAgICAgICAvLyBkZWxldGUgcGFyYW1bJ2NvbXBvbmVudE5hbWUnXTtcbiAgICAvLyAgICAgICAvLyB0aGlzLmFwcGx5RmlsdGVyKHBhcmFtKTtcbiAgICAvLyAgICAgICAvLyB0aGlzLmV4cGFuZGVkRmlsdGVycyA9IGZhbHNlO1xuICAgIC8vICAgICAgIHRoaXMucmVwb3J0R2VuZXJhdGUgPSB0cnVlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIC8vIHRoaXMucGFnZVJlbG9hZCA9IGZhbHNlO1xuICAgIC8vICAgLy8gfVxuICAgIC8vIH0pXG4gIH1cblxuICBmaWx0ZXJBcHBseShjb25kaXRpb24pIHtcbiAgICAvL2NvbnNvbGUubG9nY29uZGl0aW9uKVxuICAgIGlmIChjb25kaXRpb24gPT09ICdyZXNldCcpIHtcbiAgICAgIHRoaXMuZmlsdGVyRm9ybS5yZXNldCgpO1xuICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvb3BlcmF0aW9ucy9yZXBvcnRzJ10sIHsgcXVlcnlQYXJhbXM6IHsgc29sdXRpb25JZDogdGhpcy5wYWdlUGFyYW1bJ3NvbHV0aW9uSWQnXSB9IH0pO1xuICAgICAgdGhpcy5yZXBvcnRHZW5lcmF0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5maWx0ZXJBcnJheSA9IFtdO1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMudXJsUXVlcnlQYXJhbXMpO1xuICAgICAgY29uc3Qgb2JqID0ge31cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgb2JqW2tleV0gPSBudWxsXG4gICAgICB9XG4gICAgICBvYmpbJ3NvbHV0aW9uSWQnXSA9IHRoaXMucGFnZVBhcmFtLnNvbHV0aW9uSWQ7XG4gICAgICB0aGlzLmFwcGx5RmlsdGVyKG9iaik7XG4gICAgICAvLyB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgLy8gICBpZih0aGlzLm5vQXNzZXNzKXtcbiAgICAgIC8vICAgICBsZXQgcmVzZXRVcmwgPSAnL3Byb2dyYW1zL3B1YmxpYy9vcHMtcmVwb3J0cz9zb2x1dGlvbklkPScgKyBwYXJhbXNbJ3NvbHV0aW9uSWQnXVxuICAgICAgLy8gICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IHBhdGg6IHJlc2V0VXJsIH0sICcnLCByZXNldFVybCk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vICAgZWxzZXtcbiAgICAgIC8vICAgbGV0IHJlc2V0VXJsID0gJy9wcm9ncmFtcy9vcGVyYXRpb25zL29wcy1yZXBvcnRzP3NvbHV0aW9uSWQ9JyArIHBhcmFtc1snc29sdXRpb25JZCddXG4gICAgICAvLyAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IHBhdGg6IHJlc2V0VXJsIH0sICcnLCByZXNldFVybCk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gdGhpcy5maWx0ZXJQYW5lbC5jbG9zZUFsbCgpO1xuICAgICAgdGhpcy5wYWdlUmVsb2FkID0gZmFsc2U7XG4gICAgICB0aGlzLmV4cGFuZGVkRmlsdGVycyA9ICF0aGlzLmV4cGFuZGVkRmlsdGVycztcbiAgICAgIHRoaXMuZmlsdGVyT2JqZWN0ID0gdGhpcy5maWx0ZXJGb3JtLmdldFJhd1ZhbHVlKCk7XG4gICAgICBmb3IgKGxldCBmaWx0ZXIgaW4gdGhpcy5maWx0ZXJPYmplY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyT2JqZWN0W2ZpbHRlcl0gPT09IG51bGwgfHwgdGhpcy5maWx0ZXJPYmplY3RbZmlsdGVyXSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZmlsdGVyT2JqZWN0W2ZpbHRlcl0gPT09IFwiXCIgfHwgdGhpcy5maWx0ZXJPYmplY3RbZmlsdGVyXSA9PT0gXCJhTi1hTi1OYU5cIikge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlck9iamVjdFtmaWx0ZXJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5maWx0ZXJPYmplY3QudG9EYXRlKSB7XG4gICAgICAgIC8vIHRoaXMuZmlsdGVyT2JqZWN0Wydmcm9tRGF0ZSddPSB0aGlzLmFwcGx5RGF0ZSh0aGlzLmZpbHRlck9iamVjdC5mcm9tRGF0ZSlcbiAgICAgICAgdGhpcy5maWx0ZXJPYmplY3RbJ3RvRGF0ZSddID0gdGhpcy5hcHBseURhdGUodGhpcy5maWx0ZXJPYmplY3QudG9EYXRlKTtcblxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZmlsdGVyT2JqZWN0LmZyb21EYXRlKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyT2JqZWN0Wydmcm9tRGF0ZSddID0gdGhpcy5hcHBseURhdGUodGhpcy5maWx0ZXJPYmplY3QuZnJvbURhdGUpO1xuICAgICAgICAvLyB0aGlzLmZpbHRlck9iamVjdFsndG9EYXRlJ109IHRoaXMuYXBwbHlEYXRlKHRoaXMuZmlsdGVyT2JqZWN0LnRvRGF0ZSk7XG5cbiAgICAgIH1cbiAgICAgIHRoaXMuYXBwbHlGaWx0ZXIodGhpcy5maWx0ZXJPYmplY3QpXG4gICAgICB0aGlzLmZpbHRlckFycmF5ID0gT2JqZWN0LmVudHJpZXModGhpcy5maWx0ZXJPYmplY3QpXG4gICAgfVxuICB9XG5cblxuIFxuICBtYXBHcmFwaE9iamVjdChkYXRhLCB0eXBlID0gJ2NhbGwnKSB7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2NhbGwnKSB7XG5cbiAgICAgIGRhdGEuZm9yRWFjaCgob2JqZWN0LCBpbmQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cob2JqZWN0KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5ncmFwaERhdGEubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgIGNvbnN0IGRhdGFBcnJheSA9IHRoaXMuZ2V0RGF0YShvYmplY3QsIGkpXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhW2luZF0uZ3JhcGhEYXRhW2ldLCB7XG4gICAgICAgICAgICBkYXRhOiBkYXRhQXJyYXlcbiAgICAgICAgICB9KVxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YVtpbmRdLmdyYXBoRGF0YVtpXS5jaGFydE9wdGlvbnMsIHsgbGVnZW5kOiB7IHBvc2l0aW9uOiAndG9wJywgYWxpZ25tZW50OiAnZW5kJyB9IH0pXG5cbiAgICAgICAgfVxuICAgICAgICBvYmplY3QuZ3JhcGhEYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICBpZiAob2JqZWN0LmdyYXBoRGF0YVtpbmRleF0uZGF0YS5sZW5ndGggPiAyICYmIG9iamVjdC5ncmFwaERhdGFbaW5kZXhdLmNoYXJ0VHlwZSA9PT0gJ0NvbHVtbkNoYXJ0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhW2luZF0uZ3JhcGhEYXRhW2luZGV4XS5jaGFydE9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgaXNTdGFjazogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRhdGFbaW5kXS5ncmFwaERhdGFbaW5kZXhdLmRhdGEubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YVtpbmRdLmdyYXBoRGF0YVtpbmRleF0uY2hhcnRPcHRpb25zLmhBeGlzLCB7IHRleHRQb3NpdGlvbjogJ25vbmUnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgY29sTmFtZUFycmF5ID0gW11cbiAgICAgICAgICBkYXRhW2luZF0uZ3JhcGhEYXRhW2luZGV4XS5jb2x1bW5OYW1lcy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICBjb2xOYW1lQXJyYXkucHVzaChuZXcgQ2FtZWxDYXNlUGlwZSgpLnRyYW5zZm9ybShjb2x1bW4pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGRhdGFbaW5kXS5ncmFwaERhdGFbaW5kZXhdLCB7IGNvbHVtbk5hbWVzOiBjb2xOYW1lQXJyYXkgfSk7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBuZXcgQ2FtZWxDYXNlUGlwZSgpLnRyYW5zZm9ybSgnZW50aXR5TGlzdCcpXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldFRhYmxlSGVhZGVyKG9iamVjdCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YVtpbmRdLCB7IHRhYmxlSGVhZGVyOiBoZWFkZXJzIH0pXG4gICAgICB9KTtcbiAgICAgIC8vLy9jb25zb2xlLmxvZ2RhdGEpXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZ3JhcGhEYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gdGhpcy5nZXREYXRhKGRhdGEsIGkpO1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEuZ3JhcGhEYXRhW2ldLCB7XG4gICAgICAgICAgZGF0YTogZGF0YUFycmF5XG4gICAgICAgIH0pXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YS5ncmFwaERhdGFbaV0uY2hhcnRPcHRpb25zLCB7IGxlZ2VuZDogeyBwb3NpdGlvbjogJ3RvcCcsIGFsaWdubWVudDogJ2VuZCcgfSB9KVxuXG4gICAgICB9XG4gICAgICBkYXRhLmdyYXBoRGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICAgIGlmIChkYXRhLmdyYXBoRGF0YVtpbmRleF0uZGF0YS5sZW5ndGggPiAyICYmIGRhdGEuZ3JhcGhEYXRhW2luZGV4XS5jaGFydFR5cGUgPT09ICdDb2x1bW5DaGFydCcpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEuZ3JhcGhEYXRhW2luZGV4XS5jaGFydE9wdGlvbnMsIHtcbiAgICAgICAgICAgIGlzU3RhY2s6IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmdyYXBoRGF0YVtpbmRleF0uZGF0YS5sZW5ndGggPiAxMCkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YS5ncmFwaERhdGFbaW5kZXhdLmNoYXJ0T3B0aW9ucy5oQXhpcywgeyB0ZXh0UG9zaXRpb246ICdub25lJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29sTmFtZUFycmF5ID0gW11cbiAgICAgICAgZGF0YS5ncmFwaERhdGFbaW5kZXhdLmNvbHVtbk5hbWVzLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgICBjb2xOYW1lQXJyYXkucHVzaChuZXcgQ2FtZWxDYXNlUGlwZSgpLnRyYW5zZm9ybShjb2x1bW4pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YS5ncmFwaERhdGFbaW5kZXhdLCB7IGNvbHVtbk5hbWVzOiBjb2xOYW1lQXJyYXkgfSk7XG5cblxuICAgICAgfSk7XG5cbiAgICAgIG5ldyBDYW1lbENhc2VQaXBlKCkudHJhbnNmb3JtKCdlbnRpdHlMaXN0JylcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldFRhYmxlSGVhZGVyKGRhdGEpO1xuICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7IHRhYmxlSGVhZGVyOiBoZWFkZXJzIH0pXG5cbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZ3JhcGhEYXRhKTtcbiAgICBcbiAgICAgIHJldHVybiBkYXRhLmdyYXBoRGF0YTtcbiAgICB9XG4gIH1cblxuICBnZXRUYWJsZUhlYWRlcihvYmplY3QpIHtcbiAgICBsZXQgaGVhZGluZ0FycmF5ID0gW11cbiAgICBvYmplY3QudGFidWxhckRhdGEuaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICBoZWFkaW5nQXJyYXkucHVzaChoZWFkZXIubmFtZSk7XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGluZ0FycmF5O1xuICB9XG5cbiAgZ2V0RGF0YShvYmplY3QsIGkpIHtcbiAgICBsZXQgZGF0YUFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBvYmplY3QuZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IGNvbHVtbkFycmF5ID0gdGhpcy5nZXRDb2x1bW4ob2JqZWN0LCBpLCBqKTtcbiAgICAgIGRhdGFBcnJheS5wdXNoKGNvbHVtbkFycmF5KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFBcnJheTtcbiAgfVxuXG4gIGdldFVzZXJQcm9maWxlKHNvbHV0aW9uSWQpIHtcbiAgICB0aGlzLm9wZXJhdGlvblNlcnZpY2UuZ2V0VXNlclByb2ZpbGVTdW1tYXJ5KHRoaXMuYXBpQmFzZVVybCArIHRoaXMucmVwb3J0Q29uZmlnLnByb2ZpbGVTdW1tYXJ5ICsgc29sdXRpb25JZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgLy8vL2NvbnNvbGUubG9nZGF0YSk7XG4gICAgICB0aGlzLnN1bW1hcnlQcm9maWxlRGF0YSA9IGRhdGFbJ3Jlc3VsdCddO1xuICAgICAgY29uc3QgYXJyYXlUb09iamVjdCA9IChhcnJheSwga2V5RmllbGQpID0+XG4gICAgICAgIGFycmF5LnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XG4gICAgICAgICAgb2JqW2l0ZW1ba2V5RmllbGRdXSA9IGl0ZW1cbiAgICAgICAgICByZXR1cm4gb2JqXG4gICAgICAgIH0sIHt9KVxuICAgICAgdGhpcy5zdW1tYXJ5UHJvZmlsZURhdGEgPSBhcnJheVRvT2JqZWN0KHRoaXMuc3VtbWFyeVByb2ZpbGVEYXRhLCBcImxhYmVsXCIpXG4gICAgICBpZiAodGhpcy5ub0Fzc2Vzcykge1xuICAgICAgICB0aGlzLnV0aWxpdHkubG9hZGVySGlkZSgpO1xuXG4gICAgICB9XG4gICAgfSxcbiAgICAgIGVycm9yID0+IHtcblxuICAgICAgICAvL3RoaXMuc25hY2tCYXIub3Blbih0aGlzLmdsb2JhbENvbmZpZy5lcnJvck1lc3NhZ2UsIFwiT2tcIiwgeyBkdXJhdGlvbjogOTAwMCB9KTtcbiAgICAgICAgdGhpcy51dGlsaXR5LmxvYWRlckhpZGUoKTtcblxuICAgICAgfSk7XG4gIH1cbiAgZ2V0Q29sdW1uKG9iamVjdCwgaSwgaikge1xuICAgIGxldCBjb2xBcnJheSA9IFtdO1xuICAgIG9iamVjdC5ncmFwaERhdGFbaV0uY29sdW1uTmFtZXMuZm9yRWFjaCgoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgY29sdW1uID0gY29sdW1uLnRyaW0oKTtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgaWYgKG9iamVjdC5kYXRhW2pdW2NvbHVtbl0gPT09IFwiXCIpIHtcblxuICAgICAgICAgIGNvbEFycmF5LnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29sQXJyYXkucHVzaChNYXRoLnJvdW5kKG9iamVjdC5kYXRhW2pdW2NvbHVtbl0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbEFycmF5LnB1c2gob2JqZWN0LmRhdGFbal1bY29sdW1uXSk7XG4gICAgICB9XG5cbiAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gY29sQXJyYXk7XG4gIH1cbiAgYXBwbHlEYXRlKHZhbHVlKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSksXG4gICAgICBtbnRoID0gKFwiMFwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMiksXG4gICAgICBkYXkgPSAoXCIwXCIgKyBkYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpO1xuICAgIGNvbnN0IHZhbCA9IFtkYXksIG1udGgsIGRhdGUuZ2V0RnVsbFllYXIoKV0uam9pbihcIi1cIik7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKG9iaikge1xuICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgcXVlcnlQYXJhbXM6IG9iaixcbiAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLFxuICAgIH07XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIG5hdmlnYXRpb25FeHRyYXMpO1xuICB9XG5cbiAgaW5wdXRDaGFuZ2Uoa2V5LCBldmVudCkge1xuICAgIHRoaXMuYXBwbHlGaWx0ZXIoeyBba2V5XTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIGlmIChrZXkgPT0gJ2VudGl0eUlkJykge1xuICAgICAgdGhpcy5zZWFyY2hFbnRpdHlJZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9XG4gIH1cbiAgc2VsZWN0VHlwZShrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5hcHBseUZpbHRlcih7IFtrZXldOiB2YWx1ZSB9KVxuXG4gIH1cbiAgZ2VuZXJhdGVSZXBvcnQocGFyYW0pIHtcbiAgXG4gICAgdGhpcy5xdWVyeVBhcmFtc1VybCA9IHRoaXMucGFnZVBhcmFtWydzb2x1dGlvbklkJ10gKyBcIj9cIjtcbiAgICBsZXQgcGFyYW1LZXkgPSBPYmplY3Qua2V5cyhwYXJhbSk7XG4gICAgaWYgKHBhcmFtS2V5LmluY2x1ZGVzKCdjb21wb25lbnROYW1lJykpIHtcbiAgICAgIHBhcmFtS2V5LnNwbGljZShwYXJhbUtleS5pbmRleE9mKCdjb21wb25lbnROYW1lJyksIDEpXG5cbiAgICB9XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBcbiAgICBpZiAocGFyYW1LZXkuaW5jbHVkZXMoJ3NvbHV0aW9uSWQnKSkge1xuICAgICAgcGFyYW1LZXkuc3BsaWNlKHBhcmFtS2V5LmluZGV4T2YoJ3NvbHV0aW9uSWQnKSwgMSlcblxuICAgIH1cbiAgICBwYXJhbUtleS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaW5kZXggPyB0aGlzLnF1ZXJ5UGFyYW1zVXJsICs9ICcmJyArIGVsZW1lbnQgKyAnPScgKyBwYXJhbVtlbGVtZW50XSA6IHRoaXMucXVlcnlQYXJhbXNVcmwgKz0gZWxlbWVudCArICc9JyArIHBhcmFtW2VsZW1lbnRdXG4gICAgfSlcbiAgIFxuICAgIHRoaXMucmVwb3J0R2VuZXJhdGUgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJhdGUgcmVwb3J0XCIpXG4gICAgdGhpcy5yZXBvcnRzRGF0YUZldGNoKCk7XG5cbiAgfVxuICBkb3dubG9hZENzdihpZCkge1xuICAgIGlmIChpZCA9PT0gJ2VudGl0eScpIHtcbiAgICAgIHRoaXMub3BlcmF0aW9uU2VydmljZS5nZXRFbnRpdHlSZXBvcnQodGhpcy5hcGlCYXNlVXJsICsgdGhpcy5yZXBvcnRDb25maWcuZW50aXR5UmVwb3J0ICsgdGhpcy5wYWdlUGFyYW1bJ3NvbHV0aW9uSWQnXSArIFwiP2Zyb21EYXRlPVwiICsgdGhpcy5wYWdlUGFyYW1bJ2Zyb21EYXRlJ10gKyBcIiZ0b0RhdGU9XCIgKyB0aGlzLnBhZ2VQYXJhbVsndG9EYXRlJ10gKyBcIiZjc3Y9XCIgKyB0cnVlKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG5cbiAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLmRvd25sb2FkKGVycm9yLCBpZClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlkID09PSAnYXNzZXNzb3InKSB7XG4gICAgICB0aGlzLm9wZXJhdGlvblNlcnZpY2UuZ2V0QXNzZXNzb3JSZXBvcnQodGhpcy5hcGlCYXNlVXJsICsgdGhpcy5yZXBvcnRDb25maWcuYXNzZXNzb3JSZXBvcnQgKyB0aGlzLnBhZ2VQYXJhbVsnc29sdXRpb25JZCddICsgXCI/ZnJvbURhdGU9XCIgKyB0aGlzLnBhZ2VQYXJhbVsnZnJvbURhdGUnXSArIFwiJnRvRGF0ZT1cIiArIHRoaXMucGFnZVBhcmFtWyd0b0RhdGUnXSArIFwiJmNzdj1cIiArIHRydWUpLnN1YnNjcmliZShkYXRhID0+IHtcblxuICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuZG93bmxvYWQoZXJyb3IsIGlkKVxuICAgICAgICB9KTtcblxuICAgIH1cbiAgfVxuXG4gIGRvd25sb2FkKG9iamVjdCwgaWQpIHtcbiAgICBpZiAob2JqZWN0LnN0YXR1cyA9PSAyMDApIHtcbiAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbb2JqZWN0LmVycm9yLnRleHRdLCB7IHR5cGU6ICdjc3YnIH0pO1xuICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgIGEuZG93bmxvYWQgPSBgJHtpZH0tUmVwb3J0LmNzdmA7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgYS5jbGljaygpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbiAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc25hY2tCYXIub3Blbih0aGlzLmdsb2JhbENvbmZpZy5lcnJvck1lc3NhZ2UsIFwiT2tcIiwgeyBkdXJhdGlvbjogOTAwMCB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRTZWFyY2hQYXJhbShpbmRleDogbnVtYmVyID0gMSwgc2l6ZTogbnVtYmVyID0gdGhpcy5pdGVtc1BlclBhZ2VbMF0sIGxhYmVsKSB7XG4gICAgbGV0IHVybCA9ICcmcGFnZT0nICsgaW5kZXggKyAnJmxpbWl0PScgKyBzaXplO1xuICAgIHVybCA9IHVybCArIChsYWJlbCA9PT0gJ2VudGl0eScgPyAnJmVudGl0eU5hbWU9JyArIHRoaXMuc2VhcmNoRW50aXR5VmFsdWUgOiAnJmFzc2Vzc29yTmFtZT0nICsgdGhpcy5zZWFyY2hBc3Nlc3Nvck5hbWUpO1xuICAgIHJldHVybiB1cmw7XG5cbiAgfVxuICBwYWdlUmVzcG9uc2UoZXZlbnQpIHtcbiAgICB0aGlzW2V2ZW50LmxhYmVsICsgJ1BhZ2VMaW1pdCddID0gZXZlbnQucGFnZUxpbWl0O1xuICAgIHRoaXNbZXZlbnQubGFiZWwgKyAnUGFnZUluZGV4J10gPSBldmVudC5wYWdlSW5kZXg7XG4gICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgdGhpcy5zZWFyY2hQYXJhbSA9IHRoaXMuc2V0U2VhcmNoUGFyYW0odGhpc1tldmVudC5sYWJlbCArICdQYWdlSW5kZXgnXSArIDEsIHRoaXNbZXZlbnQubGFiZWwgKyAncGFnZUxpbWl0J10sIGV2ZW50LmxhYmVsKTtcbiAgICBpZiAoZXZlbnQubGFiZWwgPT09ICdlbnRpdHknKSB7XG4gICAgICB0aGlzLmdldEVudGl0eVJlcG9ydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldEFzc2Vzc29yUmVwb3J0KCk7XG5cbiAgICB9XG4gIH1cbiAgcmVwb3J0c0RhdGFGZXRjaCgpIHtcbiAgICB0aGlzLnV0aWxpdHkubG9hZGVyU2hvdygpO1xuICAgIHRoaXMuZ2V0VXNlclN1bW1hcnkodGhpcy5xdWVyeVBhcmFtc1VybCk7XG4gICAgdGhpcy5zZWFyY2hQYXJhbSA9IHRoaXMuc2V0U2VhcmNoUGFyYW0odGhpcy5lbnRpdHlQYWdlSW5kZXggKyAxLCB0aGlzLmVudGl0eVBhZ2VMaW1pdCwgJ2VudGl0eScpO1xuICAgIHRoaXMuZ2V0RW50aXR5UmVwb3J0KCk7XG4gICAgdGhpcy5zZWFyY2hQYXJhbSA9IHRoaXMuc2V0U2VhcmNoUGFyYW0odGhpcy5hc3Nlc3NvclBhZ2VJbmRleCArIDEsIHRoaXMuYXNzZXNzb3JQYWdlTGltaXQsICdhc3Nlc3NvcicpO1xuICAgIHRoaXMuZ2V0QXNzZXNzb3JSZXBvcnQoKTtcbiAgfVxuXG4gIGZpbHRlcnModXJsKSB7XG4gICAgaWYgKCF0aGlzLnBhZ2VQYXJhbS5saW5rSWQpIHtcbiAgICAgIHRoaXMub3BlcmF0aW9uU2VydmljZS5hcHBseUZpbHRlcnModGhpcy5hcGlCYXNlVXJsICsgdGhpcy5yZXBvcnRDb25maWcucmVwb3J0RmlsdGVyICsgdXJsKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMubWFwUXVlcnlQYXJhbXMoZGF0YVsncmVzdWx0J10pO1xuICAgICAgICB0aGlzLmZpbHRlckZvcm0gPSB0aGlzLnV0aWxpdHkudG9Hcm91cCh0aGlzLmZpbHRlckRhdGEpO1xuICAgICAgICAvLy8vY29uc29sZS5sb2d0aGlzLmZpbHRlckZvcm0pXG4gICAgICAgIHRoaXMuZmlsdGVyT2JqZWN0ID0gdGhpcy5maWx0ZXJGb3JtLmdldFJhd1ZhbHVlKClcbiAgICAgICAgZm9yIChsZXQgZmlsdGVyIGluIHRoaXMuZmlsdGVyT2JqZWN0KSB7XG4gICAgICAgICAgaWYgKHRoaXMuZmlsdGVyT2JqZWN0W2ZpbHRlcl0gPT09IG51bGwgfHwgdGhpcy5maWx0ZXJPYmplY3RbZmlsdGVyXSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZmlsdGVyT2JqZWN0W2ZpbHRlcl0gPT09IFwiXCIgfHwgdGhpcy5maWx0ZXJPYmplY3RbZmlsdGVyXSA9PT0gXCJhTi1hTi1OYU5cIikge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZmlsdGVyT2JqZWN0W2ZpbHRlcl07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsdGVyQXJyYXkgPSBPYmplY3QuZW50cmllcyh0aGlzLmZpbHRlck9iamVjdCk7XG4gICAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJIaWRlKCk7XG4gICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKHRoaXMuZ2xvYmFsQ29uZmlnLmVycm9yTWVzc2FnZSwgXCJPa1wiLCB7IGR1cmF0aW9uOiA5MDAwIH0pO1xuICAgICAgICAgIHRoaXMudXRpbGl0eS5sb2FkZXJIaWRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBtYXBRdWVyeVBhcmFtcyhkYXRhKSB7XG4gICAgbGV0IHBhcmFtO1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBwYXJhbSA9IHBhcmFtcztcbiAgICB9KVxuICAgIGxldCBwYXJhbUtleSA9IE9iamVjdC5rZXlzKHBhcmFtKTtcbiAgICBwYXJhbUtleS5mb3JFYWNoKHBhcmFtTGFiZWwgPT4ge1xuICAgICAgZGF0YS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5maWVsZCA9PT0gcGFyYW1MYWJlbCkge1xuICAgICAgICAgIGlmIChlbGVtZW50LmlucHV0ID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gW3BhcmFtW3BhcmFtTGFiZWxdLnN1YnN0cmluZyg2KSwgcGFyYW1bcGFyYW1MYWJlbF0uc3Vic3RyaW5nKDMsIDUpLCBwYXJhbVtwYXJhbUxhYmVsXS5zdWJzdHJpbmcoMCwgMildLmpvaW4oXCItXCIpO1xuICAgICAgICAgICAgZGF0YVtpbmRleF0udmFsdWUgPSBkYXRlICsgJ1QwMDowMDowMC4wMDBaJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhW2luZGV4XS52YWx1ZSA9IHBhcmFtW3BhcmFtTGFiZWxdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBnZXRVc2VyU3VtbWFyeSh1cmwpIHtcbiAgICB0aGlzLm9wZXJhdGlvblNlcnZpY2UuZ2V0VXNlclN1bW1hcnkodGhpcy5hcGlCYXNlVXJsICsgdGhpcy5yZXBvcnRDb25maWcucmVwb3J0U3VtbWFyeSArIHVybCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5zdW1tYXJ5RGF0YSA9IGRhdGFbJ3Jlc3VsdCddO1xuICAgICAgY29uc3QgYXJyYXlUb09iamVjdCA9IChhcnJheSwga2V5RmllbGQpID0+XG4gICAgICAgIGFycmF5LnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XG4gICAgICAgICAgb2JqW2l0ZW1ba2V5RmllbGRdXSA9IGl0ZW1cbiAgICAgICAgICByZXR1cm4gb2JqXG4gICAgICAgIH0sIHt9KVxuICAgICAgdGhpcy5zdW1tYXJ5RGF0YSA9IGFycmF5VG9PYmplY3QodGhpcy5zdW1tYXJ5RGF0YSwgXCJsYWJlbFwiKVxuICAgICAgdGhpcy51dGlsaXR5LmxvYWRlckhpZGUoKTtcbiAgICB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBnZXRFbnRpdHlSZXBvcnQobGFiZWwgPSAnY2FsbCcpIHtcbiAgICB0aGlzLmVudGl0eUxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMub3BlcmF0aW9uU2VydmljZS5nZXRFbnRpdHlSZXBvcnQodGhpcy5hcGlCYXNlVXJsICsgdGhpcy5yZXBvcnRDb25maWcuZW50aXR5UmVwb3J0ICsgdGhpcy5xdWVyeVBhcmFtc1VybCArIHRoaXMuc2VhcmNoUGFyYW0pLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuc2hhcmUgPSBkYXRhWydyZXN1bHQnXTtcbiAgICAgIGlmIChsYWJlbCA9PSAnY2FsbCcpIHtcbiAgICAgICAgdGhpcy5lbnRpdHlSZXBvcnQgPSB0aGlzLm1hcEdyYXBoT2JqZWN0KGRhdGFbJ3Jlc3VsdCddWydzZWN0aW9ucyddKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVudGl0eVJlcG9ydFswXS5kYXRhID0gZGF0YVsncmVzdWx0J11bJ3NlY3Rpb25zJ11bMF1bJ2RhdGEnXTtcbiAgICAgICAgdGhpcy5lbnRpdHlSZXBvcnRbMF0uZ3JhcGhEYXRhID0gdGhpcy5tYXBHcmFwaE9iamVjdChkYXRhWydyZXN1bHQnXVsnc2VjdGlvbnMnXVswXSwgJ3NlYXJjaCcpXG4gICAgICB9XG4gICAgICB0aGlzLmVudGl0eUxvYWRpbmcgPSBmYWxzZTtcblxuICAgIH0sIGVycm9yID0+IHtcbiAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGdldEFzc2Vzc29yUmVwb3J0KGxhYmVsID0gJ2NhbGwnKSB7XG4gICAgdGhpcy5hc3Nlc3NvckxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMub3BlcmF0aW9uU2VydmljZS5nZXRBc3Nlc3NvclJlcG9ydCh0aGlzLmFwaUJhc2VVcmwgKyB0aGlzLnJlcG9ydENvbmZpZy5hc3Nlc3NvclJlcG9ydCArIHRoaXMucXVlcnlQYXJhbXNVcmwgKyB0aGlzLnNlYXJjaFBhcmFtKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBpZiAobGFiZWwgPT0gJ2NhbGwnKSB7XG4gICAgICAgIHRoaXMuYXNzZXNzb3JSZXBvcnQgPSB0aGlzLm1hcEdyYXBoT2JqZWN0KGRhdGFbJ3Jlc3VsdCddWydzZWN0aW9ucyddKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmFzc2Vzc29yUmVwb3J0WzBdLmRhdGEgPSBkYXRhWydyZXN1bHQnXVsnc2VjdGlvbnMnXVswXVsnZGF0YSddO1xuICAgICAgICB0aGlzLmFzc2Vzc29yUmVwb3J0WzBdLmdyYXBoRGF0YSA9IHRoaXMubWFwR3JhcGhPYmplY3QoZGF0YVsncmVzdWx0J11bJ3NlY3Rpb25zJ11bMF0sICdzZWFyY2gnKVxuICAgICAgfVxuICAgICAgdGhpcy5hc3Nlc3NvckxvYWRpbmcgPSBmYWxzZTtcblxuICAgIH0sIGVycm9yID0+IHtcbiAgICB9XG4gICAgKTtcbiAgfVxuICBzZWFyY2hFbnRpdHlJZEluQXBpKHNlYXJjaElkKSB7XG4gIH1cblxuICBzZWFyY2hWYWwoaWQsIHNlYXJjaFZhbHVlKSB7XG4gICAgaWYgKGlkID09ICdlbnRpdHknKSB7XG4gICAgICB0aGlzLnNlYXJjaEVudGl0eVZhbHVlID0gc2VhcmNoVmFsdWUudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpZCA9PSAnYXNzZXNzb3InKSB7XG4gICAgICB0aGlzLnNlYXJjaEFzc2Vzc29yTmFtZSA9IHNlYXJjaFZhbHVlLnRhcmdldC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hJbkFwaShsYWJlbCwgdmFsdWUpIHtcbiAgICB0aGlzW2Ake2xhYmVsfStQYWdlSW5kZXhgXSA9IDE7XG4gICAgdGhpcy5zZWFyY2hQYXJhbSA9IHRoaXMuc2V0U2VhcmNoUGFyYW0odGhpc1tgJHtsYWJlbH1QYWdlSW5kZXhgXSwgdGhpc1tgJHtsYWJlbH1QYWdlTGltaXRgXSwgbGFiZWwpO1xuICAgIGlmIChsYWJlbCA9PT0gJ2VudGl0eScpIHtcbiAgICAgIHRoaXMuc2VhcmNoRW50aXR5VmFsdWUgPSB2YWx1ZVxuICAgICAgdGhpcy5nZXRFbnRpdHlSZXBvcnQoJ3NlYXJjaCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlYXJjaEFzc2Vzc29yTmFtZSA9IHZhbHVlXG4gICAgICB0aGlzLmdldEFzc2Vzc29yUmVwb3J0KCdzZWFyY2gnKTtcbiAgICB9XG5cbiAgfVxufVxuIl19