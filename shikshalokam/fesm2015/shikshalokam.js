import { Subject } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule as MatButtonModule$1 } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, RouterModule } from '@angular/router';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Injectable, Component, Input, Output, EventEmitter, Inject, NgModule, ViewChild, Directive, HostListener, ViewEncapsulation, Pipe, defineInjectable, inject } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatIconModule as MatIconModule$1 } from '@angular/material/icon';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDividerModule, MatCardModule, MatButtonModule, MatMenuModule, MatIconModule, MatTooltipModule, MatExpansionModule, MatSidenavModule, MatListModule, MatTableDataSource, MatInputModule, MatRadioModule, MatCheckboxModule, MatDatepickerModule, MatAutocompleteModule, MatTableModule, MatChipsModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { Location, CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbsService {
    constructor() {
        this.prefixedBreadcrumbs = [];
        this.breadcrumbs = [];
        this.breadcrumbsSource = new Subject();
        this.breadcrumbsChanged$ = this.breadcrumbsSource.asObservable();
        if (localStorage.getItem('prefixedBreadcrumbs') != null) {
            this.prefixedBreadcrumbs = (JSON.parse(localStorage.getItem('prefixedBreadcrumbs')));
        }
    }
    /**
     * @param {?} breadcrumbs
     * @return {?}
     */
    store(breadcrumbs) {
        this.breadcrumbs = breadcrumbs;
        /** @type {?} */
        let allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    }
    /**
     * @param {?} breadcrumb
     * @return {?}
     */
    storePrefixed(breadcrumb) {
        this.storeIfUnique(breadcrumb);
        localStorage.setItem('prefixedBreadcrumbs', JSON.stringify(this.prefixedBreadcrumbs));
        /** @type {?} */
        let allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    }
    /**
     * @return {?}
     */
    get() {
        return this.breadcrumbsChanged$;
    }
    /**
     * @private
     * @param {?} newBreadcrumb
     * @return {?}
     */
    storeIfUnique(newBreadcrumb) {
        /** @type {?} */
        let isUnique = true;
        for (let crumb of this.prefixedBreadcrumbs) {
            if (newBreadcrumb.url == crumb.url) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            this.prefixedBreadcrumbs.push(newBreadcrumb);
        }
    }
}
BreadcrumbsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BreadcrumbsService.ctorParameters = () => [];
/** @nocollapse */ BreadcrumbsService.ngInjectableDef = defineInjectable({ factory: function BreadcrumbsService_Factory() { return new BreadcrumbsService(); }, token: BreadcrumbsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UtilityService {
    /**
     * @param {?} location
     * @param {?} spinner
     * @param {?} _formBuilder
     */
    constructor(location, spinner, _formBuilder) {
        this.location = location;
        this.spinner = spinner;
        this._formBuilder = _formBuilder;
    }
    /**
     * @return {?}
     */
    onBack() {
        this.location.back();
    }
    /**
     * @return {?}
     */
    loaderShow() {
        this.spinner.show();
    }
    /**
     * @return {?}
     */
    loaderHide() {
        this.spinner.hide();
    }
    /**
     * @param {?} inputs
     * @return {?}
     */
    toGroup(inputs) {
        /** @type {?} */
        let group = {};
        inputs.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            if (element.input == "array") {
                group[element.field] = this.createFormArray(element);
            }
            else {
                group[element.field] = element.validation.required ? new FormControl({ value: element.value || '', disabled: !element.editable }, Validators.required)
                    : new FormControl({ value: element.value || '', disabled: !element.editable });
            }
        }));
        return new FormGroup(group);
    }
    /**
     * @param {?} inputs
     * @return {?}
     */
    createFormArray(inputs) {
        /** @type {?} */
        let elements = [];
        inputs.array.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            elements[element['field']] = element.validation.required ? new FormControl({ value: element.value || '', disabled: !element.editable }, Validators.required)
                : new FormControl({ value: element.value || '', disabled: !element.editable });
        }));
        return new FormArray(elements);
    }
    /**
     * @param {?} object
     * @return {?}
     */
    createControl(object) {
        this.objectForm = this._formBuilder.group({});
        object.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            /** @type {?} */
            let controlLabel = field.field;
            /** @type {?} */
            let controls;
            if (field.input === "array") {
                controls = new FormArray([]);
                field.value.forEach((/**
                 * @param {?} level
                 * @return {?}
                 */
                level => {
                    controls.push(this._formBuilder.group({
                        [controlLabel]: [level ? level : '', Validators.required]
                    }));
                }));
            }
            else {
                controls = new FormControl(field.value ? field.value : "", field.validation.required ? Validators.required : null);
            }
            this.objectForm.addControl(field.field, controls);
        }));
        return this.objectForm;
    }
    /**
     * @param {?} object
     * @return {?}
     */
    uploadFile(object) {
        this.objectForm = this._formBuilder.group({});
        object.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            /** @type {?} */
            let controlLabel = field.field;
            /** @type {?} */
            let controls;
            if (field.input === "file") {
                controls = new FormControl(field.value ? field.value : null, [field.validation.required ? Validators.required : null]);
            }
            this.objectForm.addControl(field.field, controls);
        }));
        console.log(this.objectForm);
        return this.objectForm;
    }
}
UtilityService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UtilityService.ctorParameters = () => [
    { type: Location },
    { type: NgxSpinnerService },
    { type: FormBuilder }
];
/** @nocollapse */ UtilityService.ngInjectableDef = defineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(inject(Location), inject(NgxSpinnerService), inject(FormBuilder)); }, token: UtilityService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbComponent {
    /**
     * @param {?} breadcrumbService
     * @param {?} utilityService
     * @param {?} activatedRoute
     * @param {?} router
     */
    constructor(breadcrumbService, utilityService, activatedRoute, router) {
        this.breadcrumbService = breadcrumbService;
        this.utilityService = utilityService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.ROUTE_DATA_BREADCRUMB = "breadcrumb";
        this.ROUTE_PARAM_BREADCRUMB = "breadcrumb";
        this.PREFIX_BREADCRUMB = "prefixBreadcrumb";
        breadcrumbService.get().subscribe((/**
         * @param {?} breadcrumbs
         * @return {?}
         */
        (breadcrumbs) => {
            this.breadcrumbs = (/** @type {?} */ (breadcrumbs));
        }));
    }
    /**
     * @param {?} breadcrumb
     * @return {?}
     */
    hasParams(breadcrumb) {
        return Object.keys(breadcrumb.params).length ? [breadcrumb.url, breadcrumb.params] : [breadcrumb.url];
    }
    /**
     * @return {?}
     */
    onBack() {
        this.utilityService.onBack();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.router.navigated) {
            this.generateBreadcrumbTrail();
        }
        this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationEnd))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.generateBreadcrumbTrail();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    generateBreadcrumbTrail() {
        this.currentBreadcrumbs = [];
        /** @type {?} */
        let currentRoute = this.activatedRoute.root;
        /** @type {?} */
        let url = "";
        while (currentRoute.children.length > 0) {
            /** @type {?} */
            let childrenRoutes = currentRoute.children;
            /** @type {?} */
            let breadCrumbLabel = "";
            childrenRoutes.forEach((/**
             * @param {?} route
             * @return {?}
             */
            route => {
                currentRoute = route;
                if (route.outlet !== PRIMARY_OUTLET) {
                    return;
                }
                /** @type {?} */
                const hasData = (route.routeConfig && route.routeConfig.data);
                /** @type {?} */
                const hasDynamicBreadcrumb = route.snapshot.params.hasOwnProperty(this.ROUTE_PARAM_BREADCRUMB);
                if (hasData || hasDynamicBreadcrumb) {
                    if (hasDynamicBreadcrumb) {
                        breadCrumbLabel = route.snapshot.params[this.ROUTE_PARAM_BREADCRUMB].replace(/_/g, " ");
                    }
                    else if (route.snapshot.data.hasOwnProperty(this.ROUTE_DATA_BREADCRUMB)) {
                        breadCrumbLabel = route.snapshot.data[this.ROUTE_DATA_BREADCRUMB];
                    }
                    /** @type {?} */
                    let routeURL = route.snapshot.url.map((/**
                     * @param {?} segment
                     * @return {?}
                     */
                    segment => segment.path)).join("/");
                    url += `/${routeURL}`;
                    if (routeURL.length === 0) {
                        route.snapshot.params = {};
                    }
                    /** @type {?} */
                    let breadcrumb = {
                        label: breadCrumbLabel,
                        params: route.snapshot.params,
                        url: url
                    };
                    if (route.snapshot.data.hasOwnProperty(this.PREFIX_BREADCRUMB)) {
                        this.breadcrumbService.storePrefixed(breadcrumb);
                    }
                    else {
                        this.currentBreadcrumbs.push(breadcrumb);
                    }
                }
            }));
            this.breadcrumbService.store(this.currentBreadcrumbs);
        }
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: "breadcrumb",
                template: "<div class=\"breadcrumbBox\" >\n    <ol class=\"_flex-box orderedList\">\n            <button  *ngIf=\"!showControl\" class=\"noPadding\" mat-button (click)=\"onBack()\"><i class=\"material-icons\">\n                    keyboard_arrow_left\n                  </i>\n                  <span>Back</span>\n                </button>\n        <li *ngFor=\"let breadcrumb of breadcrumbs; let last = last\" class=\"padding breadcrumbList\">\n            <span *ngIf=\"breadcrumb.label !=''\">\n\n                <a *ngIf=\" breadcrumb == breadcrumbs[startIndex] \" [routerLink]=\"hasParams(breadcrumb)\" class=\"_flex-box breadcrumbLink\">\n                            {{breadcrumb.label | translate}}\n                </a>\n             \n\n                <a *ngIf=\"(!last) &&( breadcrumb != breadcrumbs[startIndex])\" [routerLink]=\"hasParams(breadcrumb)\" class=\"_flex-box breadcrumbLink\">\n                    \n                    <i class=\"material-icons\">\n                        keyboard_arrow_right\n                    </i>\n                    {{breadcrumb.label | translate}} \n                   \n                </a>\n                <span class=\"last _flex-box \" *ngIf=\"last\" [routerLink]=\"hasParams(breadcrumb)\">\n                        <i class=\"material-icons\">\n                                keyboard_arrow_right\n                            </i>\n                    {{ breadcrumb.label | translate }} \n                </span>\n            </span>\n        </li>\n    </ol>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".fluid-bread{background-color:#fff}.breadcrumb{background-color:#fff;padding:4px;margin-bottom:0}.padding{padding:0 5px}.orderedList{padding:0;list-style:none;margin:0}.breadcrumbList{color:var(--dark-blue-color)}.breadcrumbList .breadcrumbLink{color:var(--dark-blue-color);text-decoration:none;font-size:18px}.breadcrumbList .breadcrumbLink:hover{text-decoration:none;font-weight:700}.breadcrumbList .last{font-weight:bolder;font-size:18px}"]
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: BreadcrumbsService },
    { type: UtilityService },
    { type: ActivatedRoute },
    { type: Router }
];
BreadcrumbComponent.propDecorators = {
    addClass: [{ type: Input }],
    showControl: [{ type: Input }],
    startIndex: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DashboardBlocksComponent {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.canAcess = localStorage.getItem('canAcess');
        this.sendNavigationLink = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} nav
     * @return {?}
     */
    navigateLink(nav) {
        this.sendNavigationLink.emit(nav);
    }
    /**
     * @return {?}
     */
    showMessage() {
        this.snackBar.open("Comming Soon.", "Ok", { duration: 9000 });
    }
}
DashboardBlocksComponent.decorators = [
    { type: Component, args: [{
                selector: 'dashboard-blocks',
                template: "\n<div class=\"_flex-box _justify-content-center wrapper\">\n\n  <div class=\"_full-width \">\n    <div *ngFor=\"let dashBoard of list\" >\n      <div class=\" col-lg-3 col-md-4 col-sm-6 col-xs-12 margin-top _justify-content-center flex-box\"  title=\"{{dashBoard.tooltip|translate}}\" *ngIf=\"canAcess.includes(dashBoard.id)\"  (click)=\"dashBoard?.disabled ?  navigateLink(dashBoard.anchorLink) : showMessage()\">\n        <div class=\" box iconBox\">\n          <i class=\"material-icons folderIcon\">\n           {{dashBoard.icon}}\n          </i>\n        </div>\n        <div class=\" box \">\n          <div class=\"description\">\n              {{dashBoard.tooltip|translate}}\n          </div>\n          \n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>",
                styles: [".flex-box{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer}.description{color:var(--grey-color);text-overflow:ellipsis;overflow:hidden;width:110px;text-align:center}.dashBoardIcon{width:200px;height:200px;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;border-radius:20px;margin:0 20px}.margin-top{margin-top:20px}.folderIcon{font-size:70px;color:var(--blue-gradient-color);display:flex;align-items:center}.wrapper{padding:0 20px}.box{width:100%;display:flex;justify-content:center}.iconBox{background-image:linear-gradient(to top,#e8eced 10%,#fff 90%);height:120px;width:120px;border:1px solid var(--grey-color);border-radius:15px}"]
            }] }
];
/** @nocollapse */
DashboardBlocksComponent.ctorParameters = () => [
    { type: MatSnackBar }
];
DashboardBlocksComponent.propDecorators = {
    list: [{ type: Input }],
    sendNavigationLink: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DialogBoxComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close();
    }
}
DialogBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dialog-box',
                template: "<h1 mat-dialog-title>{{'message.alertHeading' | translate}}</h1>\n<div mat-dialog-content>\n  <p>{{'message.alertMessage' | translate}}</p>\n</div>\n<div mat-dialog-actions class=\"alingCenterline\" >\n  <button mat-button  class=\"margin\" (click)=\"onCancel()\">{{'buttons.cancel' | translate }}</button>\n  <button mat-button class=\"btnColor margin\"   [mat-dialog-close] = \"true\"   >{{'buttons.complete' | translate}}</button>\n</div>\n",
                styles: [".btnColor{background-color:var(--primary-color);color:var(--white-color)}.alingCenterline{display:flex;align-items:center;justify-content:flex-end}.margin{margin:15px 0 0 10px}"]
            }] }
];
/** @nocollapse */
DialogBoxComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownFieldComponent {
    constructor() {
        this.emitResponseType = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} responseType
     * @return {?}
     */
    changeResponseType(responseType) {
        //console.log(responseType)
        this.emitResponseType.emit(responseType);
    }
}
DropdownFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dropdown-field',
                template: "<div [formGroup]=\"genericForm\" >\n  <mat-form-field class=\" col-sm-6 fixSize _halfWidth\" *ngIf=\"genericData.input == 'radio' ||genericData.input == 'dropdown' ||genericData.input == 'select' \">\n    <mat-select [disabled]=\"!genericData.editable\"  placeholder=\"{{genericData.label | camelcase}} \"  formControlName=\"{{genericData.field}}\" [required]=\"genericData.validation.required\" >\n        <mat-option *ngFor=\"let opt of genericData.options\" [value]=\"opt.value\" (click)=\"changeResponseType(opt.value)\" >\n          {{opt.label}} \n        </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\" col-sm-6 fixSize _halfWidth\"  *ngIf=\"genericData.input == 'multiselect' \">\n      <mat-select [disabled]=\"!genericData.editable\"  placeholder=\"{{genericData.label | camelcase}} \"  formControlName=\"{{genericData.field}}\" required multiple >\n          <mat-option *ngFor=\"let opt of genericData.options\" [value]=\"opt.value\" (click)=\"changeResponseType\">\n            {{opt.label}} \n          </mat-option>\n      </mat-select>\n    </mat-form-field>\n</div>",
                styles: [".space{padding:0 10px}.bold{font-size:15px;font-weight:1000}.right{text-align:right}.fixSize{height:54.6px}"]
            }] }
];
/** @nocollapse */
DropdownFieldComponent.ctorParameters = () => [];
DropdownFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }],
    emitResponseType: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicFormComponent {
    constructor() {
        this.editnewquestion = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    changeResponseType(event, index) {
        this.genericData[index].value = event;
    }
    /**
     * @param {?} edit
     * @return {?}
     */
    editquestion(edit) {
        this.editnewquestion.emit(edit);
    }
}
DynamicFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dynamic-form',
                template: "<div class=\"col-sm-12 \" [formGroup]= \"genericForm\"  *ngIf=\" genericForm\" >\n  <div *ngFor=\"let data of genericData ; let i  = index\" >\n    <app-dropdown-field *ngIf=\"(data.input == 'radio'|| data.input == 'dropdown' || data.input == 'multiselect' || data.input == 'select'  ) && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" (emitResponseType)=\"changeResponseType($event,i)\"></app-dropdown-field>\n  \n    <app-text-field *ngIf=\"data.input == 'text' && !data.autocomplete  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-text-field>\n    \n    <app-textarea-field *ngIf=\"data.input == 'textarea'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-textarea-field>\n   \n    <app-number-field *ngIf=\"data.input == 'number'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-number-field>\n    \n    <app-select-field *ngIf=\"data.input == 'boolean'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-select-field>\n\n    <app-form-array-field (editquestion)=\"editquestion($event)\" *ngIf=\"data.input == 'array'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-form-array-field>\n\n    <app-date-picker  *ngIf=\"data.input == 'date' && data.visible\" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-date-picker>\n\n    <app-chips-field *ngIf=\"data.input == 'chips'  && data.visible \" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\"></app-chips-field>\n\n    <app-auto-complete  *ngIf=\"data.input == 'text'&& data.autocomplete && data.visible\" [genericData]=\"data\" [genericForm]=\"genericForm\" [genericEdit]= \"genericEdit\" [hostUrl]=\"hostUrl\"></app-auto-complete>\n  </div> \n\n\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
DynamicFormComponent.ctorParameters = () => [];
DynamicFormComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }],
    editnewquestion: [{ type: Output }],
    hostUrl: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormArrayFieldComponent {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.editquestion = new EventEmitter();
    }
    ;
    /**
     * @return {?}
     */
    ngOnInit() {
        this.questionCount = this.genericData['value'].length || 1;
    }
    /**
     * @param {?} edit
     * @return {?}
     */
    editQuestion(edit) {
        if (edit == 'add') {
            this.editquestion.emit({
                mode: edit,
                controlName: this.genericData.field,
            });
        }
        else if (edit == 'reset') {
            this.questionCount = 1;
            this.editquestion.emit({
                mode: edit,
                controlName: this.genericData.field,
            });
        }
        else {
            this.questionCount -= 1;
            this.editquestion.emit({
                mode: "delete",
                controlName: this.genericData.field,
                index: edit
            });
        }
    }
    /**
     * @return {?}
     */
    getControls() {
        return ((/** @type {?} */ (this.genericForm.controls[this.genericData.field]))).controls;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    add(control) {
        control.push(this._formBuilder.group({
            [this.genericData.field]: ['', Validators.required]
        }));
        this.questionCount++;
    }
    /**
     * @param {?} control
     * @param {?} index
     * @return {?}
     */
    delete(control, index) {
        control.removeAt(index);
        this.questionCount--;
    }
}
FormArrayFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-form-array-field',
                template: "<form [formGroup]=\"genericForm\" *ngIf=\"genericForm\" class=\"col-sm-6 fixSize _halfWidth\">\n  <div formArrayName=\"{{genericData.field}}\" class=\"col-xs-12\" >\n    <div *ngFor=\"let quest of getControls() ; let i = index\" class=\"_flex-box _justify-content-center\" >\n      <div [formGroup]=\"quest\" class=\"col-xs-12 noPadding\">\n          <mat-form-field class=\"col-xs-10 noPadding\">\n              <input matInput placeholder=\"{{genericData.field}}\" formControlName=\"{{genericData.field}}\" />\n            </mat-form-field>\n      \n          <button class =\"col-xs-1\"*ngIf=\"questionCount >1\" mat-icon-button (click)=\"delete(genericForm.controls[genericData.field],i)\" color=\"warn\">\n            <i class=\"material-icons\">\n                close\n                </i>\n          </button>\n        </div>\n        </div>\n    \n  </div>\n  <button mat-raised-button (click)=\"add(genericForm.controls[genericData.field])\" class=\"_primary-btn btn-margin\">\n              \n      {{'buttons.addNew'| translate}}\n      <i class=\"material-icons\">\n          add\n          </i>\n    </button>\n    <!-- <button mat-raised-button *ngIf=\"questionCount>1\"(click)=\"reset()\" color=\"warn\" [disabled]=\" questionCount<2\" class=\"btn-margin\">\n              \n        {{'buttons.removeAll'| translate}}\n        <i class=\"material-icons white\">\n            delete_forever\n            </i>\n      </button> -->\n    </form>",
                styles: [".btn-margin{margin:0 10px}._flexbox{flex-direction:column;align-items:center;display:flex}.noPadding{padding:0}"]
            }] }
];
/** @nocollapse */
FormArrayFieldComponent.ctorParameters = () => [
    { type: FormBuilder }
];
FormArrayFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }],
    editquestion: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageCardComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ImageCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-image-card',
                template: "<span *ngFor=\"let url of imageUrl\">\n  <div class=\"card\">\n    <div class=\"roundedCard\">\n      <img src={{url}} class=\"imageCard\">\n    </div>\n  </div>\n</span>",
                styles: [".roundedCard{display:flex;align-items:center;margin:10px;height:130px;border:2px solid var(--grey-color);border-radius:5px;width:130px;background-color:var(--light-grey-color)}.imageCard{width:126px;height:auto}.card{display:inline-block}"]
            }] }
];
/** @nocollapse */
ImageCardComponent.ctorParameters = () => [];
ImageCardComponent.propDecorators = {
    imageUrl: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-loader',
                template: "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-clip-rotate\"></ngx-spinner>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
LoaderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberFieldComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NumberFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-number-field',
                template: "<div [formGroup]=\"genericForm\">\n  <mat-form-field *ngIf=\"genericData.validation.required\" class=\"col-sm-6 fixSize _halfWidth\">\n    <span *ngIf=\"genericData.input == 'number'\" matPrefix>+91 &nbsp;</span>\n    <input  type=\"number\"  pattern=\"^[0-9]{10}$\"  placeholder=\"{{genericData.label | camelcase}} \"  formControlName=\"{{genericData.field}}\" matInput [required]=\"genericData.validation.required\" > \n  </mat-form-field>\n\n  <mat-form-field  *ngIf=\"!genericData.validation.required\" class=\"col-sm-6 fixSize _halfWidth\">\n      <span *ngIf=\"genericData.input == 'number'\" matPrefix>+91 &nbsp;</span>\n      <input type=\"number\"   placeholder=\"{{genericData.label | camelcase}} \" formControlName=\"{{genericData.field}}\" matInput  > \n    </mat-form-field>\n</div>",
                styles: [".bold{font-size:15px;font-weight:1000}.right{text-align:right}.fixSize{height:54.6px}"]
            }] }
];
/** @nocollapse */
NumberFieldComponent.ctorParameters = () => [];
NumberFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ParentHeadingComponent {
    /**
     * @param {?} dialog
     * @param {?} utilityService
     */
    constructor(dialog, utilityService) {
        this.dialog = dialog;
        this.utilityService = utilityService;
        this.sendMarkAsComplete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(DialogBoxComponent, {
            width: '450px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result)
                this.sendFlag();
        }));
    }
    /**
     * @return {?}
     */
    sendFlag() {
        this.sendMarkAsComplete.emit(true);
    }
    /**
     * @return {?}
     */
    onBack() {
        this.utilityService.onBack();
    }
}
ParentHeadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-parent-heading',
                template: "<div class=\"horizontalLine\">\n  <span class=\" alingCenterlineParentHeading\">\n    <div>\n      <h4 class=\"primaryColor\">{{schoolName}}</h4>\n    </div>\n    <!-- <span *ngIf=\"genericHeading == 'headings.parentListHeading' && atleastOneComplete\"><button mat-raised-button  class=\" btnColor \"(click)=\"openDialog()\">{{'buttons.markasComplete' | translate}}</button></span> -->\n    <span *ngIf=\"genericHeading == 'headings.parentListHeading' && atleastOneComplete\"><span class=\" active \" (click)=\"openDialog()\">{{'buttons.markasComplete'\n        | translate}}</span></span>\n  </span>\n  <mat-divider *ngIf=\"schoolName || schoolNameDivider\" class=\"Margin noPadding\"></mat-divider>\n  <!-- <span class=\"alingCenterline smallMargin\"  *ngIf=\"!showControl\"> -->\n  <!-- <span class=\"alingCenterline smallMargin\">\n    <button  *ngIf=\"!showControl\" class=\"noPadding\" mat-button (click)=\"onBack()\"><i class=\"material-icons\">\n        keyboard_arrow_left\n      </i>\n      <span>Back</span>\n    </button>\n    <span class=\"heading  space noMargin space\" *ngIf=\"genericHeading\"> -->\n      <!-- {{ genericHeading | translate}} -->\n      <breadcrumb [showControl]=\"showControl\" [startIndex]=\"startIndex\"></breadcrumb>\n        <!-- </span>\n\n  </span> -->\n</div>",
                styles: [".heading{margin-top:0;font-size:18px}.btnColor{background-color:var(--primary-color);color:var(--white-color);margin-left:30px}.alingCenterlineParentHeading{display:flex;align-items:center;flex-wrap:wrap}.active{border-radius:12px;border:1px solid var(--primary-color);padding:2px 8px;background-color:var(--button-background-color);cursor:pointer;margin-left:25px}.horizontalLine{display:flex;flex-direction:column}.noPadding{padding:0}.noMargin{margin:0}.Margin{margin:0 -20px}.primaryColor{color:var(--primary-color)}"]
            }] }
];
/** @nocollapse */
ParentHeadingComponent.ctorParameters = () => [
    { type: MatDialog },
    { type: UtilityService }
];
ParentHeadingComponent.propDecorators = {
    genericHeading: [{ type: Input }],
    schoolName: [{ type: Input }],
    startIndex: [{ type: Input }],
    atleastOneComplete: [{ type: Input }],
    schoolId: [{ type: Input }],
    schoolNameDivider: [{ type: Input }],
    showControl: [{ type: Input }],
    sendMarkAsComplete: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectFieldComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SelectFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-select-field',
                template: "<div [formGroup]=\"genericForm\" >\n    <div class=\" col-sm-6 fixSize _halfWidth\">\n      <mat-checkbox   formControlName =\"{{genericData.field}}\" value=\"{{genericData.value}}\" [required]=\"genericData.validations.required\">{{genericData.label}}</mat-checkbox>\n    </div>\n  </div>",
                styles: [""]
            }] }
];
/** @nocollapse */
SelectFieldComponent.ctorParameters = () => [];
SelectFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextFieldComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TextFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-text-field',
                template: "<div [formGroup]= \"genericForm\" *ngIf=\"genericForm\">\n    <mat-form-field  class=\"col-sm-6 fixSize _halfWidth\">\n            <input  matInput   type=\"text\"  placeholder=\"{{genericData.label | camelcase}} \"  formControlName=\"{{genericData?.field}}\"  [required]=\"genericData.validation.required\">\n    </mat-form-field>\n</div>\n\n\n",
                styles: [".bold{font-size:15px;font-weight:550}.right{text-align:right}.fixSize{height:54.6px}"]
            }] }
];
/** @nocollapse */
TextFieldComponent.ctorParameters = () => [];
TextFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextareaFieldComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    check(val) {
    }
}
TextareaFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-textarea-field',
                template: "<div [formGroup]=\"genericForm\" *ngIf=\"genericForm\"  >\n    <mat-form-field class=\"col-sm-6 fixSize  _halfWidth\">\n        <div class=\"form-group\">\n            <textarea  matInput formControlName=\"{{genericData.field}}\" [required]=\"genericData.validation.required\"  placeholder=\"{{genericData.label | camelcase}} \" ></textarea>\n        </div>\n    </mat-form-field>\n</div>",
                styles: [".bold{font-size:15px;font-weight:550}.right{text-align:right}.fixSize{height:54.6px;margin-bottom:30px}"]
            }] }
];
/** @nocollapse */
TextareaFieldComponent.ctorParameters = () => [];
TextareaFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchDirective {
    constructor() {
        this.debounceTime = 5000;
        this.debounceSearch = new EventEmitter();
        this.clicks = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription = this.clicks.pipe(debounceTime(this.debounceTime)).subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.debounceSearch.emit(this.searchValue);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    }
}
SearchDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appDebounceSearch]'
            },] }
];
/** @nocollapse */
SearchDirective.ctorParameters = () => [];
SearchDirective.propDecorators = {
    debounceTime: [{ type: Input }],
    searchValue: [{ type: Input }],
    debounceSearch: [{ type: Output }],
    clickEvent: [{ type: HostListener, args: ['keyup', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResourceService {
    constructor() {
        this.language = [
            'English'
        ];
    }
}
ResourceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ResourceService.ctorParameters = () => [];
/** @nocollapse */ ResourceService.ngInjectableDef = defineInjectable({ factory: function ResourceService_Factory() { return new ResourceService(); }, token: ResourceService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavbarComponent {
    constructor() {
        this.showDropdown = false;
        this.Logout = new EventEmitter();
        this.noAssess = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    homePage(url) {
        window.open(url, "_self");
    }
    /**
     * @return {?}
     */
    openDropdown() {
        this.showDropdown = !this.showDropdown;
    }
    /**
     * @return {?}
     */
    onSignout() {
        this.Logout.emit(true);
    }
    /**
     * @return {?}
     */
    onLogin() {
        this.isLoggedIn = !this.isLoggedIn;
        this.onSignout();
    }
}
NavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-navbar',
                template: "<div *ngIf=\"url\">\n  <nav class=\"navbar noMarginPadding \">\n\n    <div class=\"col-sm-6  col-md-6 col-xs-6 col-lg-6 alingCenterline noMarginPadding\">\n\n      <img class=\"logo\" src={{logo}} (click)=\"homePage(url)\">\n      <!-- <mat-card-title class=\"pageBrand\">\n          <strong>{{ 'brand' | translate }}</strong>\n        </mat-card-title> -->\n    </div>\n\n    <!-- <div class=\"col-sm-4 mod \">\n           <mat-card-title style=\"font-size:18px; color:gray; text-align: center;\" >\n            Sikhshalocham Samikhsa \n              <mat-icon svgIcon=\"thumbs-up\" style=\"font-size:29px; color: gray;\">\n              </mat-icon>\n          </mat-card-title> \n        </div> -->\n\n\n\n\n    <div class=\"col-sm-6 col-md-6 col-xs-6 col-lg-6\">\n      <span *ngIf=\"!noAssess\" class=\"right _flex-box alingCenterline\">\n\n        \n        <button mat-icon-button (click)=\"openDropdown()\">\n          <i class=\"material-icons\">apps</i>\n        </button>\n\n        <div id=\"overlay\" (click)=\"openDropdown()\" *ngIf=\"showDropdown\">\n          <app-container [url]=\"url\" [portal]=\"portal\"></app-container>\n        </div>\n\n\n\n\n        <span mat-button [matMenuTriggerFor]=\"menu\" class=\"alingCenterline _cursor-pointer\" *ngIf=\"currentUser\">\n          <i class=\"material-icons brand dropdownIcon\">\n            person\n          </i>\n          <!-- <span class=\"brand \">{{currentUser?.name}}</span> -->\n          <i class=\"material-icons brand icon\">\n            keyboard_arrow_down\n          </i>\n        </span>\n        <mat-menu #menu=\"matMenu\">\n          <span mat-menu-item class=\"matmenuIcon\">\n            <i class=\"material-icons\">\n              supervised_user_circle\n            </i>\n            <span class=\"padding\">{{currentUser?.email}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"matmenuIcon black\">\n            <i class=\"material-icons\">\n              done\n            </i>\n            <span class=\"padding\">{{currentUser?.name}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"padding\" (click)=\"onSignout()\">\n            <span class=\"bigPadding black\">\n              {{'menuDropdown.signOut' | translate}}\n            </span>\n          </span>\n        </mat-menu>\n        <!-- <div class=\"right horizontalLine\">\n          <i class=\"material-icons brand helpIcon\">\n            help_outline\n          </i>\n        </div> -->\n      </span>\n\n    </div>\n\n\n  </nav>\n\n\n\n</div>",
                styles: [".noMarginPadding{margin:0;padding:0}.brand{color:var(--primary-color);margin-bottom:0}.logo{height:50px}.horizontalLine{position:relative;padding:0 8px}.icon{font-size:16px;padding-right:10px}.helpIcon{font-weight:10px}.horizontalLine:before{content:\"\";background:var(--border-color);position:absolute;bottom:20%;left:-5px;height:60%;width:1px}.navbar{display:flex;align-items:center}.line{line-height:12px}#overlay{position:fixed;display:hidden;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:transperent;z-index:101}.pageBrand{font-size:18px;padding:0 10px;margin-bottom:0}.pageMenu{margin-bottom:0}.alingCenterline{display:flex;align-items:center}.dropdownIcon{top:1px;line-height:2}.right{display:flex;justify-content:flex-end}.matmenuIcon{display:flex;align-items:center;color:#bababa}.padding{padding-left:10px}.bigPadding{padding-left:40px}.black{color:var(--grey-color)}._primary-btn{font-size:14px;padding-bottom:2px;height:30px;line-height:0;margin-bottom:6px;color:var(--white-color)}"]
            }] }
];
/** @nocollapse */
NavbarComponent.ctorParameters = () => [];
NavbarComponent.propDecorators = {
    url: [{ type: Input }],
    dropdownLabel: [{ type: Input }],
    currentUser: [{ type: Input }],
    logo: [{ type: Input }],
    Logout: [{ type: Output }],
    isLoggedIn: [{ type: Input }],
    portal: [{ type: Input }],
    noAssess: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidenavComponent {
    constructor() {
        this.submenu = false;
        this.menu = [
            {
                displayName: 'Escritorio',
                iconName: 'desktop_windows',
                route: 'escritorio',
            },
            {
                displayName: 'Entradas GADE',
                iconName: 'ballot',
                route: 'entradasGADE',
            },
            {
                displayName: 'Expedientes',
                iconName: 'description',
                children: [
                    {
                        displayName: 'Mis Expedientes',
                        iconName: 'how_to_reg',
                        route: '/misexpedientes'
                    },
                    {
                        displayName: 'Todos',
                        iconName: 'waves',
                        route: '/todos'
                    }
                ]
            },
            {
                displayName: 'Perfiles',
                iconName: 'group',
                children: [
                    {
                        displayName: 'Búsqueda Perfil',
                        iconName: 'search',
                        route: '/busquedaperfiles'
                    }
                ]
            }
        ];
    }
    /**
     * @param {?} id
     * @return {?}
     */
    openSideSubMenu(id) {
        console.log("clicked");
        if (id == "configurations") {
            this.submenu = this.submenu == true ? false : true;
        }
        else {
            console.log("not matched");
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.permissionAssignedRole = JSON.parse(localStorage.getItem('canAcess'));
        console.log("link", this.link);
    }
}
SidenavComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidenav',
                template: "<div class=\"sideNavheading\" routerLink=\"../programs\" matTooltip=\"{{'message.goToProgramDashboard' | translate}}\"\n  *ngIf=\"programsShow\">\n  <i class=\"material-icons\">\n    keyboard_arrow_left\n  </i> {{ 'headings.programs' | translate }}\n</div>\n<!-- <div routerLink = \"{{option.anchorLink}}\"  [routerLinkActiveOptions]=\"{exact:true}\" routerLinkActive=\"active\"*ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n<!-- <div [routerLink]=\"['assessments/:programId/:assessmentId/'+option.link?.anchorLink,option.link.programId,option.link.assessmentId ]\" routerLinkActive=\"active\" *ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n<!-- <div [routerLink]=\"[option.link.anchorLink ]\"  [queryParamsHandling]=\"preserve\" [queryParams]=\"{ programId : option.link.programId , assessmentId : option.link.assessmentId}\" routerLinkActive=\"active\" *ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n\n\n\n<!-- <span *ngFor=\"let option of link?.options\">\n\n  <div *ngIf=\"option.id=='configurations'\" routerLinkActive=\"active\" class=\"subHeading\"\n    (click)=\"openSideSubMenu(option.id)\">\n    <span class=\"sideNavSubheading\">\n      <i class=\"material-icons\">\n        {{option.icon}}\n      </i> {{ option.value | translate }}\n    </span>\n  </div>\n  \n  <div [routerLink]=\"[option.anchorLink ]\" routerLinkActive=\"active\" class=\"subHeading\"\n    *ngIf=\"permissionAssignedRole.includes(option.id) && option.id!='configurations'\">\n    <span class=\"sideNavSubheading\">\n      <i class=\"material-icons\">\n        {{option.icon}}\n      </i> {{ option.value | translate }}\n    </span>\n  </div>\n\n</span> -->\n\n<!-- <div class=\"dropdown-container\" *ngIf=\"submenu\">\n  <div class=\"col-sm-12\" [routerLink]=\"['/configuration/dashboard']\" routerLinkActive=\"active\" class=\"sub-menu\">Create\n  </div>\n  <div class=\"col-sm-12\" [routerLink]=\"['/configuration/observation-review']\" routerLinkActive=\"active\"\n    class=\"sub-menu\">Drafts</div>\n  <div class=\"col-sm-12\" [routerLink]=\"['/configuration/observation-review']\" routerLinkActive=\"active\"\n    class=\"sub-menu\">Published</div>\n\n</div> -->\n\n\n    <mat-nav-list>\n   \n      <span *ngFor=\"let item of link?.options\">\n        <span *ngIf=\"item.children && item.children.length > 0\">\n          <mat-accordion>\n            <mat-expansion-panel class=\"no-border\">\n              <mat-expansion-panel-header class=\"subHeading black-color\">\n                <mat-panel-title  [routerLink]=\"[item.anchorLink]\" >\n                  <!-- Cabeceras del submenu -->\n                  <div   fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <mat-icon style=\"padding: 0px\">{{item.icon}}</mat-icon>\n                    {{item.value | translate }}\n                  </div>\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n              <span *ngFor=\"let child of item.children\">\n                <mat-list-item [routerLink]=\"[child.anchorLink]\" routerLinkActive=\"active\" class=\"subHeading black-color\">\n                  <!-- Entradas de cada submen\u00FA  -->\n                  <div  fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <mat-icon>{{child.icon}}</mat-icon>\n                    {{child.value}}\n                  </div>\n                </mat-list-item>\n              </span>\n            </mat-expansion-panel>\n          </mat-accordion>\n        </span>\n        <span *ngIf=\"!item.children || item.children.length === 0\">\n          <mat-list-item  [routerLink]=\"[item.anchorLink]\" routerLinkActive=\"active\" class=\"subHeading black-color\" >\n            <!-- Entradas principales -->\n            <div  fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\n              <mat-icon>{{item.icon}}</mat-icon>\n              {{item.value | translate}}\n            </div>\n          </mat-list-item>\n        </span>\n      </span>\n    </mat-nav-list>\n",
                styles: [".sideNavSubheading{font-size:15px;padding:10px 23px;height:40px;display:flex;cursor:pointer}.subHeading{color:var(--grey-color)}.sideNavheading{height:40px;display:flex;align-items:center;padding:0 0 0 5px;cursor:pointer}.sideNavheading:hover,.subHeading:hover{color:var(--white-color);background-color:var(--primary-color)!important}.active{color:var(--white-color)!important;background-color:var(--primary-color)!important}.material-icons{font-size:20px;padding:0 5px}.sub-menu{background:#f0f8ff;color:#948d8d;padding:5px 10px 5px 50px}.sub-menu:hover{padding:5px 10px 5px 50px;background:#b1212b;color:#fff}.white-color{color:#fff!important}.exp-panel-header{height:48px!important;color:#fff}.black-color{color:#333}.no-border{border-radius:0!important}"]
            }] }
];
/** @nocollapse */
SidenavComponent.ctorParameters = () => [];
SidenavComponent.propDecorators = {
    link: [{ type: Input }],
    programsShow: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResponsiveNavbarComponent {
    constructor() {
        this.showDropdown = false;
        this.openDrawer = new EventEmitter();
        this.Logout = new EventEmitter();
        this.noAssess = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.openSideNav();
    }
    /**
     * @return {?}
     */
    onSignout() {
        this.Logout.emit(true);
    }
    /**
     * @return {?}
     */
    openSideNav() {
        this.openDrawer.emit(true);
    }
    /**
     * @return {?}
     */
    openDropdown() {
        this.showDropdown = !this.showDropdown;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    navigate(url) {
        window.open(url, "_blank");
    }
}
ResponsiveNavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-responsive-navbar',
                template: "<nav class=\"responsiveNavbar noMarginPadding\">\n  <body class=\" col-xs-12 noMarginPadding alingCenterline\" >\n      <span  *ngIf=\"!noAssess\"class=\"col-xs-4 alingCenterline noMarginPadding\">\n          <button mat-icon-button>\n          <i class=\"material-icons\" (click)=\"openSideNav()\">\n            menu\n              </i>\n              </button>\n      </span>\n    \n    <mat-card-title [ngClass]=\"{'pageBrand col-xs-4 alingCenterline' : !noAssess , 'col-xs-8  _flexStart' : noAssess }\" class=\"pageBrand col-xs-4 alingCenterline\">\n        <img  class=\"logo\" src ={{logo}} >\n      <!-- <strong>{{ 'brandResponsive' | translate }}</strong> -->\n    </mat-card-title>\n\n    <span class=\"col-xs-4 noMarginPadding _flexEnd\">\n\n     <!-- Responsive nav -->\n\n\n        <span *ngIf=\"!noAssess\" class=\"right _flex-box alingCenterline app-box\">\n            <button mat-icon-button (click)=\"openDropdown()\">\n                  <i class=\"material-icons\">apps</i>\n            </button>\n            \n            <div id=\"overlay\" (click)=\"openDropdown()\" *ngIf=\"showDropdown\">\n             <app-container [url]=\"url\" [portal]=\"portal\"></app-container>\n              </div>\n\n\n\n\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\" _cursor-pointer\">\n          <i class=\"material-icons dropdownIcon\">\n              person\n              </i>\n        </button>\n      </span>\n\n        <mat-menu #menu=\"matMenu\">\n          <span mat-menu-item class=\"matmenuIcon\">\n            <i class=\"material-icons\">\n              supervised_user_circle\n            </i>\n            <span class=\"padding\">{{currentUser?.email}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"matmenuIcon black\">\n            <i class=\"material-icons\">\n              done\n            </i>\n            <span class=\"padding\">{{currentUser?.name}}</span>\n          </span>\n          <mat-divider></mat-divider>\n          <span mat-menu-item class=\"padding\" (click)=\"onSignout()\">\n            <span class=\"bigPadding \">\n              {{'menuDropdown.signOut' | translate}}\n            </span>\n          </span>\n  \n        </mat-menu>\n      </span>\n    \n    </body>\n</nav>",
                styles: [".noMarginPadding{margin:0;padding:0}.icon{font-size:16px;padding-right:10px}._flexEnd{display:flex;justify-content:flex-end}.logo{height:50px}._flexStart{display:flex;justify-content:flex-start}.responsiveNavbar{display:none;align-items:center;height:51px}.line{line-height:12px}.pageBrand{font-size:18px;padding:0 10px;margin-bottom:-4px;display:flex;justify-content:center}.pageMenu{margin-top:0}.alingCenterline{display:flex;align-items:center}.dropdownIcon{top:1px;margin-top:7px;font-weight:700}.active{color:var(--white-color);background-color:var(--primary-color)}.matmenuIcon{display:flex;align-items:center;color:var(--grey-color)}.padding{padding-left:10px}.bigPadding{padding-left:40px}.black{color:var(--black-color)}.responsiveLogo{margin-top:-5px}.right{display:flex;justify-content:flex-end}.app-box{width:300px!important}"]
            }] }
];
/** @nocollapse */
ResponsiveNavbarComponent.ctorParameters = () => [];
ResponsiveNavbarComponent.propDecorators = {
    openDrawer: [{ type: Output }],
    currentUser: [{ type: Input }],
    logo: [{ type: Input }],
    Logout: [{ type: Output }],
    url: [{ type: Input }],
    portal: [{ type: Input }],
    noAssess: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgramSidenavComponent {
    constructor() {
        this.program = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentProgramIndex = 0;
    }
    /**
     * @param {?} assessments
     * @param {?} i
     * @return {?}
     */
    programSelect(assessments, i) {
        this.currentProgramIndex = i;
        this.program.emit(assessments);
    }
}
ProgramSidenavComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-program-sidenav',
                template: "<div class=\"heading\">\n    {{ 'headings.programs' | translate }}\n</div>\n<div class=\"subHeading\" *ngFor=\"let results of result; let i=index\" (click)=\"programSelect(results, i)\">\n    <span class=\"sideNavSubheading\" [ngClass]=\"{'active': currentProgramIndex === i}\">\n        <div class=\"overFlowHidden\" matTooltip=\"{{results.name}}\" >\n            {{results.name}}\n        </div>\n    </span>\n</div>\n",
                styles: [".sideNavSubheading{font-size:15px;padding:10px 23px;min-height:40px;display:flex;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.subHeading{color:var(--grey-color)}.active,.subHeading:hover{color:var(--white-color);background-color:var(--primary-color)}.heading{height:40px;display:flex;align-items:center;padding:0 0 0 15px}.overFlowHidden{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]
            }] }
];
/** @nocollapse */
ProgramSidenavComponent.ctorParameters = () => [];
ProgramSidenavComponent.propDecorators = {
    result: [{ type: Input }],
    program: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslateService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.language = {};
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const langPath = `assets/i18n/${lang || 'en'}.json`;
            // const langPath = `assets/i18n/od.json`;
            this.http.get(langPath).subscribe((/**
             * @param {?} translation
             * @return {?}
             */
            translation => {
                this.language = Object.assign({}, translation || {});
                resolve(this.language);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                this.language = {};
                resolve(this.language);
            }));
        }));
    }
}
TranslateService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TranslateService.ctorParameters = () => [
    { type: HttpClient }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslatePipe {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
        this.resarray = '';
        this.obj = {};
    }
    /**
     * @param {?} key
     * @return {?}
     */
    transform(key) {
        if (key.indexOf('.') === -1) {
            return this.translate['language'][key] || key;
        }
        else {
            /** @type {?} */
            var array = key.split(".");
            this.resarray = this.translate['language'];
            array.forEach((/**
             * @param {?} element
             * @return {?}
             */
            element => {
                if (this.resarray) {
                    this.resarray = this.resarray[element];
                }
            }));
            return this.resarray || key;
        }
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translate',
                pure: false
            },] }
];
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: TranslateService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CamelCasePipe {
    constructor() { }
    /**
     * @param {?} camelCase
     * @return {?}
     */
    transform(camelCase) {
        if (camelCase == null || camelCase == "") {
            return camelCase;
        }
        camelCase = camelCase.trim();
        /** @type {?} */
        var newText = "";
        for (var i = 0; i < camelCase.length; i++) {
            if (/[A-Z]/.test(camelCase[i])
                && i != 0
                && /[a-z]/.test(camelCase[i - 1])) {
                newText += " ";
            }
            if (i == 0 && /[a-z]/.test(camelCase[i])) {
                newText += camelCase[i].toUpperCase();
            }
            else {
                newText += camelCase[i];
            }
        }
        return newText;
    }
}
CamelCasePipe.decorators = [
    { type: Pipe, args: [{
                name: 'camelcase',
                pure: false
            },] }
];
/** @nocollapse */
CamelCasePipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NoValuePipe {
    constructor() { }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        if (value == null || value == "") {
            return "NA";
        }
        return value;
    }
}
NoValuePipe.decorators = [
    { type: Pipe, args: [{
                name: 'blank',
                pure: false
            },] }
];
/** @nocollapse */
NoValuePipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    get(url) {
        return this.http.get(url);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getJSON(url) {
        return this.http.get(url);
    }
    /**
     * @param {?} url
     * @param {?} updateData
     * @return {?}
     */
    post(url, updateData) {
        return this.http.post(url, updateData);
    }
    /**
     * @param {?} url
     * @param {?} file
     * @param {?} name
     * @return {?}
     */
    upload(url, file, name) {
        /** @type {?} */
        const formData = new FormData();
        if (file) {
            Array.from(file).forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => {
                formData.append(name, f);
            }));
        }
        //console.log(formData)
        return this.http.post(url, formData, { reportProgress: true, observe: 'events' });
    }
}
ApiService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterComponent {
    constructor() {
        this.footerLink = [
            {
                name: "Copyright @2019 Shikshalokam"
            },
            {
                name: "Terms of Service"
            },
            {
                name: "Privacy Policy"
            },
            {
                name: "Contact Us"
            }
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-footer',
                template: "<div class=\"footer\">\n    <ul class=\"list\">\n      <li *ngFor=\"let link of footerLink; let last=last\">\n          <a class=\"footerName\">{{link.name}}\n          <span *ngIf=\"!last\" class=\"pipe\">|</span>\n          </a>\n      </li>\n    </ul>\n</div>",
                styles: [".footer{height:30px;background-color:var(--white-color);width:100%;line-height:30px}.footer .list{list-style:none;margin:0;padding:0;display:flex;justify-content:center;border-top:1px solid var(--light-grey-color)}.footer .list li{display:inline-block;margin:5px;cursor:pointer}.footer .list li .pipe{padding-left:5px}.footerName{font-size:12px;color:var(--primary-color)}"]
            }] }
];
/** @nocollapse */
FooterComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalConfigurationService {
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
        this.roleAcess = [];
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getRolePermission(url) {
        return this.apiService.get(url);
    }
    /**
     * @param {?} result
     * @param {?} currentPortal
     * @return {?}
     */
    getUniqueRoleAcessObject(result, currentPortal) {
        /** @type {?} */
        let currentTabAction;
        this.roleAcess = [];
        result['tabActions'].forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            if (element.id === currentPortal) {
                currentTabAction = element;
            }
        }));
        this.getUniqueRoleAcess(currentTabAction);
        return this.roleAcess;
    }
    /**
     * @param {?} currentTabAction
     * @return {?}
     */
    getUniqueRoleAcess(currentTabAction) {
        currentTabAction['tabActions'].forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            if (element.accessibility === true) {
                this.roleAcess.push(element.id);
            }
            if (element.tabActions) {
                this.getUniqueRoleAcess(element);
            }
        }));
    }
}
GlobalConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
GlobalConfigurationService.ctorParameters = () => [
    { type: ApiService }
];
/** @nocollapse */ GlobalConfigurationService.ngInjectableDef = defineInjectable({ factory: function GlobalConfigurationService_Factory() { return new GlobalConfigurationService(inject(ApiService)); }, token: GlobalConfigurationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppContainerComponent {
    constructor() {
        this.showDropdown = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.apps = [
            // {    
            //   icon:" assignment_turned_in",
            //   tooltip:"Assessments",
            //   url:this.url
            // },
            {
                icon: "school",
                tooltip: "Learning",
                url: this.url + "/assessments/learning"
            },
            {
                icon: "dashboard",
                tooltip: "Programs",
                url: this.url + "/programs"
            },
        ];
    }
    /**
     * @return {?}
     */
    openDropdown() {
        this.showDropdown = !this.showDropdown;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    navigate(url) {
        window.open(url, "_blank");
    }
}
AppContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "app-container",
                template: "<div class=\"dropdownDiv\">\n  <div class=\"insideDiv\">\n      <ul class=\"dropdownFeature\">\n          <li class=\"verticalCenteralign\" *ngFor=\"let app of apps\">\n            <a (click)=\"navigate(app.url)\" class=\"appName\">\n              <div class=\"apple\">\n                <i class=\"material-icons\" id=\"whiteIcon\">\n                  {{app.icon}}\n                </i>\n              </div>\n              <div class=\"title\" matTooltip={{app.tooltip}}>\n              <div [ngClass]=\"{'active':app.tooltip==portal, 'inactive':app.tooltip!==portal}\">\n                {{app.tooltip}}\n              </div>\n            </div>\n            </a>\n          </li>\n        </ul>\n  </div>\n</div>\n\n",
                styles: [".dropdownDiv{color:var(--app-black-color);background-color:var(--white-color);position:absolute;width:500px;height:350px;right:8px;top:35px;z-index:105;border-radius:2px;box-shadow:0 0 3px 3px rgba(0,0,0,.08);margin:20px;padding:20px 0}.insideDiv{width:500px;height:310px;overflow-y:auto;overflow-x:hidden}.dropdownDiv:before{content:\"\";position:absolute;top:-27px;right:60px;border:13px solid transparent;border-bottom:13px solid rgba(0,0,0,.08)}.dropdownDiv:after{content:\"\";position:absolute;top:-24px;right:60px;border:12px solid transparent;border-bottom:12px solid var(--white-color)}#overlay{position:fixed;display:hidden;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:transparent;z-index:101}.dropdownFeature{display:flex;justify-content:left;flex-wrap:wrap;width:483px;list-style:none}.verticalCenteralign{display:inline-block;flex-direction:column;align-items:center;cursor:pointer;padding:0 30px 20px}.verticalCenteralign .appName{text-decoration:none}.apple{background:linear-gradient(to bottom,var(--app-blue-color) 10%,var(--app-darkBlue-color) 90%);height:80px;width:80px;border:1px solid var(--primary-color);border-radius:15px;padding:10px;display:flex;align-items:center;justify-content:center}#whiteIcon{color:var(--white-color);font-size:45px;line-height:1}.active{margin-top:10px;border-radius:12px;border:1px solid var(--primary-color);padding:0 8px;font-size:11px;width:100%;text-align:center;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;color:var(--app-blue-color)}.inactive{color:var(--darkBlack-color);text-align:center;padding-top:10px;font-size:12px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.title{height:20px;line-height:20px;width:80px}"]
            }] }
];
/** @nocollapse */
AppContainerComponent.ctorParameters = () => [];
AppContainerComponent.propDecorators = {
    url: [{ type: Input }],
    portal: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MinCharacterPipe {
    constructor() { }
    /**
     * @param {?} value
     * @param {?=} length
     * @return {?}
     */
    transform(value, length) {
        value = value.trim();
        if (value.length <= length || value == "") {
            return value;
        }
        else {
            value = value.substring(0, length - 3) + '...';
            return value;
        }
    }
}
MinCharacterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'minchar',
                pure: false
            },] }
];
/** @nocollapse */
MinCharacterPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CoreModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [TranslateService, UtilityService, ApiService, GlobalConfigurationService]
        };
    }
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    TranslatePipe,
                    CamelCasePipe,
                    MinCharacterPipe,
                    NoValuePipe,
                    NavbarComponent,
                    FooterComponent,
                    AppContainerComponent,
                    SidenavComponent,
                    ResponsiveNavbarComponent,
                    ProgramSidenavComponent
                ],
                imports: [
                    NgxSpinnerModule,
                    CommonModule,
                    RouterModule,
                    MatButtonModule,
                    HttpClientModule,
                    MatMenuModule,
                    MatExpansionModule,
                    MatSidenavModule,
                    MatListModule,
                    MatIconModule,
                    MatCardModule,
                    MatDividerModule,
                    MatTooltipModule
                ],
                providers: [
                // {
                //   provide: HTTP_INTERCEPTORS,
                //   useClass: ApiInterceptor,
                //   multi: true
                // },
                ],
                exports: [
                    TranslatePipe,
                    NavbarComponent,
                    FooterComponent,
                    AppContainerComponent,
                    SidenavComponent,
                    ResponsiveNavbarComponent,
                    CamelCasePipe,
                    NoValuePipe,
                    ProgramSidenavComponent,
                    CommonModule,
                    MinCharacterPipe
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgramsDashboardComponent {
    constructor() {
        this.emitCurrentProgram = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} currentProgram
     * @return {?}
     */
    programClick(currentProgram) {
        this.emitCurrentProgram.emit(currentProgram);
    }
}
ProgramsDashboardComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-programsDashboard',
                template: "<div class=\"margin\">\n  <div *ngFor=\"let currentProgram of programsList; let i=index\" class=\" col-lg-6 col-md-6 col-sm-6 col-xs-12 _noMarginPadding\">\n      <mat-card \n      class=\" _cursor-pointer marginTop\" (click)=\"programClick(currentProgram)\">\n      <div class=\"_flex-box _justify-content-center _flex-column  _overFlow-ellipsis\">\n        <div class=\"_flex-box _justify-content-space-between cardHeading noWarp\" matTooltip=\"{{currentProgram?.name}}\">\n            {{currentProgram?.name | minchar:15}}\n            <i class=\"material-icons iconSize\" > dashboard </i>\n        </div>\n        <div class=\"description noWarp _overFlow-ellipsis col-lg-12 col-md-12 col-sm-6 col-xs-12 _noMarginPadding\" matTooltip=\"{{currentProgram?.description}}\">\n          {{currentProgram?.description | minchar:30}}\n        </div>\n      </div>\n    </mat-card>\n  </div>\n  \n</div>",
                styles: [".noMarginPadding{margin:0;padding:0}.flex-box-justify-content-center{display:flex!important;align-items:center;justify-content:center}.margin{margin:20px}.iconSize{font-size:40px!important;color:var(--grey-color)}.example-header-image{background-size:cover}._flex-column{flex-direction:column}.cardHeading{font-size:18px;width:100%}.description{font-size:15px;color:var(--grey-color)}.marginTop{margin:10px 0}.noWarp{white-space:nowrap}"]
            }] }
];
/** @nocollapse */
ProgramsDashboardComponent.ctorParameters = () => [];
ProgramsDashboardComponent.propDecorators = {
    programsList: [{ type: Input }],
    emitCurrentProgram: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginationComponent {
    /**
     * @param {?} _fb
     */
    constructor(_fb) {
        this._fb = _fb;
        this.paginationFlag = false;
        this.paginationResponse = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.pageIndex) {
            this.startList = (this.pageIndex) * this.pageLimit + 1;
            if (this.length - this.startList > this.pageLimit) {
                this.endList = this.startList + this.pageLimit - 1;
                if (this.endList > this.length) {
                    this.endList = this.length;
                }
            }
            else {
                this.endList = this.startList + (this.length - this.startList);
                if (this.endList > this.length) {
                    this.endList = this.length;
                }
            }
        }
        else {
            this.startList = 1;
            if (this.pageLimit) {
                this.endList = this.startList + this.pageLimit - 1;
            }
            else {
                this.endList = this.startList + this.itemsPerPage[0] - 1;
                if (this.endList > this.length) {
                    this.endList = this.length;
                }
            }
        }
        if (this.length == 0) {
            this.label = "Showing " + 0 + ' - ' + 0 + " out of " + this.length + " " + this.paginationLabel;
        }
        else {
            this.label = "Showing " + this.startList + ' - ' + this.endList + " out of " + this.length + " " + this.paginationLabel;
        }
        this.last = this.length / this.pageLimit - 1;
        if ((this.length % this.pageLimit) !== 0) {
            this.last = Math.floor(this.last) + 1;
        }
        this.selected = this.pageLimit ? this.pageLimit : this.itemsPerPage[0];
        this.pagination = {
            previousPageIndex: 0,
            pageIndex: this.pageIndex,
            pageLimit: this.selected,
            length: this.length,
            label: this.paginationLabel
        };
        this.data = {
            editable: true,
            field: "pageLimit",
            input: "dropdown",
            label: this.pageLimit,
            validation: { required: true },
            value: this.itemsPerPage[0],
            visible: true,
        };
        Object.assign(this.data, { options: [] });
        this.itemsPerPage.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            this.data.options.push({
                value: element,
                label: element
            });
        }));
        this.pageSize = this._fb.group({
            pageLimit: [this.pagination.pageLimit, Validators.required]
        });
        this.paginationFlag = true;
        //console.log(this.pageSize);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    page(event) {
        switch (event) {
            case 'back': {
                this.pagination.previousPageIndex = this.pagination.pageIndex;
                this.pagination.pageIndex -= 1;
                this.pageIndex = this.pagination.pageIndex;
                break;
            }
            case 'next': {
                this.pagination.previousPageIndex = this.pagination.pageIndex;
                this.pagination.pageIndex += 1;
                this.pageIndex = this.pagination.pageIndex;
                break;
            }
            case 'first': {
                this.pagination.previousPageIndex = 0;
                this.pagination.pageIndex = 0;
                this.pageIndex = this.pagination.pageIndex;
                break;
            }
            case 'last': {
                this.pagination.previousPageIndex = this.last;
                this.pagination.pageIndex = this.pagination.previousPageIndex;
                this.pageIndex = this.pagination.pageIndex;
                break;
            }
        }
        this.startList = (this.pagination.pageIndex) * this.pageLimit + 1;
        if (this.length - this.startList > this.pageLimit)
            this.endList = this.startList + this.pageLimit - 1;
        else {
            this.endList = this.startList + (this.length - this.startList);
            if (this.endList > this.length) {
                this.endList = this.length;
            }
        }
        if (this.length == 0) {
            this.label = "Showing " + 0 + ' - ' + 0 + " out of " + this.length + " " + this.paginationLabel;
        }
        else {
            this.label = "Showing " + this.startList + ' - ' + this.endList + " out of " + this.length + " " + this.paginationLabel;
        }
        this.sendPaginationResponse();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    setPageLimit(event) {
        //console.log("pagelimit Set" , event)
        this.last = this.length / event - 1;
        this.pagination.pageIndex = 0;
        this.pagination.previousPageIndex = 0;
        if ((this.length % event) !== 0) {
            this.last = Math.floor(this.last) + 1;
            //console.log(this.last)
        }
        this.pagination.pageLimit = event;
        this.startList = 1;
        this.endList = this.startList + this.pagination.pageLimit - 1;
        if (this.endList > this.length) {
            this.endList = this.length;
            this.label = "Showing " + this.startList + ' - ' + this.endList + " out of " + this.length + " " + this.paginationLabel;
        }
        this.label = "Showing " + this.startList + ' - ' + this.endList + " out of " + this.length + " " + this.paginationLabel;
        this.sendPaginationResponse();
    }
    /**
     * @return {?}
     */
    sendPaginationResponse() {
        this.paginationResponse.emit(this.pagination);
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-pagination',
                template: "<div class=\"_flex-box  _flex-end\" *ngIf=\"paginationFlag\">\n\n    <div [formGroup]=\"pageSize\" class=\"_flex-box\">\n\n        <span class=\"label\">Items per page :</span>\n        <mat-form-field class=\"width\" *ngIf=\"data.input == 'dropdown'\">\n          <mat-select [disabled]=\"!data.editable\"  formControlName=\"{{data.field}}\" required >\n              <mat-option *ngFor=\"let opt of data.options\" [value]=\"opt.value\" (click)=\"setPageLimit(opt.value)\" >\n                {{opt.label}}\n              </mat-option>\n          </mat-select>\n        </mat-form-field>\n    <!-- <app-dropdown-field [genericData]=\"data\" [genericForm]=\"pageSize\" (emitResponseType) =\"setPageLimit($event)\"></app-dropdown-field> -->\n                  \n    </div>\n    <div class=\"_flex-box\">\n        <button mat-icon-button (click)=\"page('first')\" [disabled]=\"pagination.pageIndex === 0\" matTooltip=\"First Page\">\n            <i class=\"material-icons _icon\">\n                first_page\n            </i>\n        </button>\n        <button mat-icon-button (click)=\"page('back')\" [disabled]=\"pagination.pageIndex === 0\" matTooltip=\"Previous Page\">\n            <i class=\"material-icons _icon\">\n                keyboard_arrow_left\n            </i>\n        </button>\n        <div class =\"pagLabel \">\n            {{label}}\n        </div>\n        <button mat-icon-button (click)=\"page('next')\" [disabled]=\"pagination.pageIndex === last\" matTooltip=\"Next Page\">\n            <i class=\"material-icons _icon\">\n                keyboard_arrow_right\n            </i>\n        </button>\n        <button mat-icon-button (click)=\"page('last')\" [disabled]=\"pagination.pageIndex === last\" matTooltip=\"Last Page\">\n            <i class=\"material-icons _icon\">\n                last_page\n            </i>\n        </button>\n\n    </div>\n</div>",
                styles: [".width{width:50px}.label{color:var(--faded-label-color);font-weight:100;font-size:12px}.pagLabel{font-size:12px;color:var(--faded-label-color);margin-bottom:-5px}._icon{color:var(--primary-color)}"]
            }] }
];
/** @nocollapse */
PaginationComponent.ctorParameters = () => [
    { type: FormBuilder }
];
PaginationComponent.propDecorators = {
    length: [{ type: Input }],
    paginationLabel: [{ type: Input }],
    itemsPerPage: [{ type: Input }],
    pageLimit: [{ type: Input }],
    pageIndex: [{ type: Input }],
    paginationResponse: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatePickerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-date-picker',
                template: "<div [formGroup]=\"genericForm\" >\n  \n  <mat-form-field class=\" col-sm-6 fixSize _halfWidth\" >\n    <input *ngIf=\"genericData.label === 'end date'\"  placeholder=\"{{genericData.label | camelcase}} \"  matInput [matDatepicker]=\"picker\" formControlName=\"{{genericData.field}}\" [max]=\"genericData.max\" [min]=\"genericForm.controls.fromDate.value\" \n      (focus)=\"picker.open()\" (click)=\"picker.open()\" [required]=\"genericData.validation.required\" [disabled]=\"! genericForm.controls.fromDate.valid\">\n    <input *ngIf=\"genericData.label !== 'end date'\"  placeholder=\"{{genericData.label | camelcase}} \"  matInput [matDatepicker]=\"picker\" formControlName=\"{{genericData.field}}\" [max]=\"genericData.max\" [min]=\"genericData.min\" \n      (focus)=\"picker.open()\" (click)=\"picker.open()\" [required]=\"genericData.validation.required\">  \n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n</div>",
                styles: [".space{padding:0 10px}.bold{font-size:15px;font-weight:900}.right{text-align:right}.fixSize{height:54.6px}"]
            }] }
];
/** @nocollapse */
DatePickerComponent.ctorParameters = () => [];
DatePickerComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutoCompeteComponent {
    /**
     * @param {?} apiService
     * @param {?} route
     */
    constructor(apiService, route) {
        this.apiService = apiService;
        this.route = route;
        this.id = "";
        this.route.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            this.solutionId = params['solutionId'];
            //console.log(this.solutionId)
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getAutoComplete(url) {
        this.apiService.get(this.hostUrl + this.genericData.url + this.solutionId + "?id=" + url).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.autoCompleteData = data['result'];
            console.log(this.hostUrl);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            //console.log(error.message);
            this.autoCompleteData = [];
            console.log(this.hostUrl);
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    inputChange(event) {
        this.id = event.target.value;
        //console.log(event)
    }
    /**
     * @param {?} event
     * @return {?}
     */
    searchEntityIdInApi(event) {
        this.getAutoComplete(event);
        //console.log(event)
    }
}
AutoCompeteComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-auto-complete',
                template: "<div [formGroup]= \"genericForm\" *ngIf=\"genericForm\">\n    <mat-form-field  class=\"col-sm-6 fixSize _halfWidth\">\n            <input  matInput   type=\"text\" \n            placeholder=\"{{genericData.label | camelcase}} \"  formControlName=\"{{genericData.field}}\" \n            (keyup)=\"inputChange($event)\"\n            [matAutocomplete]=\"auto\" appDebounceSearch (debounceSearch)=\"searchEntityIdInApi($event)\"\n            [debounceTime]=\"200\" [searchValue]=\"id\"\n             [required]=\"genericData.validation.required\"\n             >\n\n            <mat-autocomplete  #auto=\"matAutocomplete\" >\n                <mat-option *ngFor=\"let option of autoCompleteData \" [value]=\"option.externalId\" matTooltip=\"{{option.name}}\">\n                                {{option.externalId}}-{{option.name}}\n                </mat-option>\n            </mat-autocomplete>\n    </mat-form-field>\n</div>\n\n\n",
                styles: [".bold{font-size:15px;font-weight:550}.right{text-align:right}.fixSize{height:54.6px}"]
            }] }
];
/** @nocollapse */
AutoCompeteComponent.ctorParameters = () => [
    { type: ApiService },
    { type: ActivatedRoute }
];
AutoCompeteComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }],
    hostUrl: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IndividualLoaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
IndividualLoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-individual-loader',
                template: "<span class=\"spinner\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n</span>",
                styles: [".spinner{width:70px;text-align:center}.spinner>div{width:18px;height:18px;background-color:var(--primary-color);border-radius:100%;display:inline-block;-webkit-animation:1.4s ease-in-out infinite both sk-bouncedelay;animation:1.4s ease-in-out infinite both sk-bouncedelay}.spinner .bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.spinner .bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-bouncedelay{0%,100%,80%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}"]
            }] }
];
/** @nocollapse */
IndividualLoaderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GraphTableChartComponent {
    constructor() {
        this.pagination = false;
        this.pageIndex = 0;
        this.pageLimit = 10;
        this.itemsPerPage = [10, 15, 20];
        this.pageEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //console.log(this.section.subSections)
    }
    /**
     * @param {?} event
     * @return {?}
     */
    pageResponse(event) {
        this.pageEvent.emit(event);
    }
}
GraphTableChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-graph-table-chart',
                template: "<div *ngIf=\"section\" >\n    <div *ngFor=\"let sections of section.subSections\">\n\n    <div>\n        <app-table-component [headers]=\"sections?.tabularData?.headers\" [datas]=\"sections?.data\" [tableScroll]=\"sections?.tableScroll\" *ngIf=\"sections?.table\">\n        </app-table-component>\n    </div>\n    <div class=\"marginTop _border\">\n        <app-column-graph [datas]=\"sections?.newGraphData ? sections?.newGraphData : sections?.data\" [configs]=\"sections?.graphData\" *ngIf=\"sections?.graph\">\n        </app-column-graph>\n    </div>\n\n    <app-pagination *ngIf=\"pagination\" [length]=\"section?.data.length\" [pageLimit]=\"pageLimit\"\n              [pageIndex]=\"pageIndex\" [itemsPerPage]=\"itemsPerPage\" (paginationResponse)=\"pageResponse($event)\"\n              [paginationLabel]=\"paginationLabel\"></app-pagination>\n    </div>\n    \n</div>",
                styles: [".marginTop{margin-top:20px}"]
            }] }
];
/** @nocollapse */
GraphTableChartComponent.ctorParameters = () => [];
GraphTableChartComponent.propDecorators = {
    section: [{ type: Input }],
    pagination: [{ type: Input }],
    pageIndex: [{ type: Input }],
    pageLimit: [{ type: Input }],
    itemsPerPage: [{ type: Input }],
    paginationLabel: [{ type: Input }],
    pageEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableComponentComponent {
    constructor() {
        this.displayedColumns = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.tableScroll) {
            this.createDataSource();
        }
    }
    /**
     * @return {?}
     */
    createDataSource() {
        this.headers.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            this.displayedColumns.push(element.name);
        }));
        this.datas = new MatTableDataSource(this.datas);
    }
}
TableComponentComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-table-component',
                template: "<div *ngIf=\"!tableScroll\">\n  <table class=\"customTable\">\n    <tr>\n      <th class=\"capitalize\" *ngFor=\"let header of headers\">{{header?.value}}</th>\n    </tr>\n    <tr *ngFor=\"let data of datas\">\n      <td *ngFor=\"let header of headers\">{{data[header?.name]}}</td>\n    </tr>\n  </table>\n</div>\n\n<div *ngIf=\"tableScroll\" class=\" example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"datas\" >\n    <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedColumns ; let index = index\" [sticky]=\"index == 0\">\n      <th mat-header-cell *matHeaderCellDef class=\"border\"> <div class=\"padding \"> {{column}}</div> </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"border\"><div class=\"padding \"> {{element[column]}}</div> </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns ; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  \n</div>",
                styles: [".customTable{border-collapse:collapse;border-spacing:0;width:100%;border:1px solid #ddd;margin-top:20px;overflow:auto}.customTable td,.customTable th{text-align:left;padding:10px}.customTable .fixed{position:absolute;float:left}.customTable tr:nth-child(even){background-color:#f2f2f2}.customTable .marginChart{margin:50px 0}.customTable .capitalize{text-transform:capitalize;font-size:12px!important}.example-container{max-height:600px;width:100%;overflow:auto}td.mat-column-star{width:20px;padding-right:8px}td.mat-column-position,th.mat-column-position{padding:8px;text-align:center}.border{border-right:1px solid #e0e0e0}.padding{padding:15px;text-align:center}"]
            }] }
];
/** @nocollapse */
TableComponentComponent.ctorParameters = () => [];
TableComponentComponent.propDecorators = {
    headers: [{ type: Input }],
    datas: [{ type: Input }],
    tableScroll: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnGraphComponent {
    constructor() {
        this.graphData = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.createGraphObj();
    }
    /**
     * @return {?}
     */
    createGraphObj() {
        this.graphData['chartType'] = this.configs.chartType;
        this.graphData["data"] = this.datas.map((/**
         * @param {?} data
         * @return {?}
         */
        data => Object.values(data)));
        // this.graphData['title'] = this.configs.title;
        this.graphData['data'].forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            //console.log( element);
        }));
        this.graphData['options'] = this.configs.chartOptions;
        //   this.graphData['options'] ['titleTextStyle'] = {
        //     color: "red",    // any HTML string color ('red', '#cc00cc')
        //     "margin": "20",
        //     // fontName: <string>, // i.e. 'Times New Roman'
        //     fontSize: 30, // 12, 18 whatever you want (don't specify px)
        //     "bold": true,    
        //     italic: true   // true of false
        // }
        /** @type {?} */
        let keys = Object.keys(this.datas[0]);
        this.graphData['columnNames'] = keys.map((/**
         * @param {?} key
         * @return {?}
         */
        key => new CamelCasePipe().transform(key)));
        // position: 'top',
        this.graphData['options']["legend"] = { maxLines: 2 };
        if (this.graphData['data'].length > 10) {
            Object.assign(this.graphData['options'].hAxis, { textPosition: 'none' });
        }
    }
}
ColumnGraphComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-column-graph',
                template: "<!-- <google-chart class=\"marginChart\" [options]=\"graphData.chartOptions\" style=\"width : 100%; height: 100%;\"\n  [title]=\"graphData.title\" [data]=\"graphData.data\" [type]=\"graphData.chartType\" [columnNames]=\"graphData.columnNames\">\n</google-chart> -->\n<div *ngIf=\"graphData\">\n  <div class=\"_flex-box _justify-content-center\">\n    <h4>{{configs?.title}}</h4>\n  </div >\n  <div class=\"_flex-box _justify-content-center subTitle\"> {{configs?.subTitle}}</div>\n  <div class=\"_full-width\">\n    <google-chart class=\"marginChart\" style=\"width : 100%; min-height: 500px;\" [options]=\"graphData['options']\"\n      [title]=\"graphData['title']\" [data]=\"graphData['data']\" [type]=\"graphData['chartType']\"\n      [columnNames]=\"graphData['columnNames']\">\n    </google-chart>\n  </div>\n</div>",
                styles: [".subTitle{color:var(--grey-color)}"]
            }] }
];
/** @nocollapse */
ColumnGraphComponent.ctorParameters = () => [];
ColumnGraphComponent.propDecorators = {
    datas: [{ type: Input }],
    configs: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareLinkViewComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.sharLink = data;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
    /**
     * @param {?} inputElement
     * @return {?}
     */
    copyLink(inputElement) {
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
    }
}
ShareLinkViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'share-link-view',
                template: "<!-- <h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div> -->\n<div class=\"box col-xs-12\">\n\n<div class=\" col-xs-12 _noMarginPadding _flex-box _justify-content-space-between\">\n  <h1 mat-dialog-title class=\" _noMarginPadding \">Sharable Link </h1>\n\n    <button mat-icon-button (click)=\"onNoClick()\">\n        <i class=\"material-icons\">\n            close\n            </i>\n    </button>\n</div> \n<div class=\"col-xs-12\">\n    <mat-form-field class=\"col-xs-12\">\n        <input matInput  value=\"{{sharLink}}\" #link>\n    </mat-form-field>\n</div>\n<div class=\" col-xs-12 _flex-box  _flex-end positionBottom\">\n    <button mat-raised-button color=\"primary\" (click)=\"copyLink(link)\">\n       Copy\n    </button>\n</div>\n</div>\n",
                styles: [".box{position:relative;height:150px}.positionBottom{position:absolute;bottom:0}"]
            }] }
];
/** @nocollapse */
ShareLinkViewComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShareLinkComponent {
    /**
     * @param {?} dialog
     * @param {?} snackBar
     * @param {?} utility
     * @param {?} router
     * @param {?} route
     * @param {?} apiService
     */
    constructor(dialog, snackBar, utility, router, route, apiService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.utility = utility;
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.url = {
            publicURL: '',
            privateURL: '',
            reportName: ''
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.publicSharedBaseUrl);
    }
    /**
     * @return {?}
     */
    shareLink() {
        this.url.privateURL = window.location.href;
        console.log("shared link");
        this.route.url.subscribe((/**
         * @param {?} url
         * @return {?}
         */
        url => {
            console.log(url);
            /** @type {?} */
            let routeIndex = this.url.privateURL.indexOf(url[0].path);
            this.url.publicURL = this.publicSharedBaseUrl + this.url.privateURL.slice(routeIndex) + "&componentName=" + this.componentId;
            console.log(this.url);
            this.url.reportName = this.componentId;
        }));
        this.apiService.post(this.shareLinkApi, this.url).subscribe((/**
         * @param {?} successData
         * @return {?}
         */
        successData => {
            console.log(successData);
            this.uuId = this.publicSharedBaseUrl.substring(0, this.publicSharedBaseUrl.length - 1) + "?linkId=" + successData['result']['linkId'];
            this.url.publicURL = this.baseUrl + "/" + this.portalName.toLowerCase() + "/public?linkId=" + successData['result']['linkId'];
            this.openDialog();
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
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(ShareLinkViewComponent, {
            width: '500px',
            height: '200px',
            data: this.url.publicURL
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            console.log('The dialog was closed');
        }));
    }
}
ShareLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-share-link',
                template: "<span class=\"_margin-top\">\n  <!-- <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Share Link</button> -->\n  <button mat-icon-button color=\"primary\" (click)=\"shareLink()\">\n    <mat-icon>share</mat-icon>\n  </button>\n</span>",
                styles: [""]
            }] }
];
/** @nocollapse */
ShareLinkComponent.ctorParameters = () => [
    { type: MatDialog },
    { type: MatSnackBar },
    { type: UtilityService },
    { type: Router },
    { type: ActivatedRoute },
    { type: ApiService }
];
ShareLinkComponent.propDecorators = {
    publicSharedBaseUrl: [{ type: Input }],
    shareLinkApi: [{ type: Input }],
    globalConfig: [{ type: Input }],
    componentId: [{ type: Input }],
    baseUrl: [{ type: Input }],
    portalName: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChipsFieldComponent {
    constructor() {
        this.emitResponseType = new EventEmitter();
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.listOfChips = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.name = this.genericData.field;
        this.listOfChips = this.genericData.value;
        console.log("chips");
    }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        /** @type {?} */
        const input = event.input;
        /** @type {?} */
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.listOfChips.push({ [this.name]: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    /**
     * @param {?} chips
     * @return {?}
     */
    remove(chips) {
        /** @type {?} */
        const index = this.listOfChips.indexOf(chips);
        if (index >= 0) {
            this.listOfChips.splice(index, 1);
        }
    }
}
ChipsFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-chips-field',
                template: "<div [formGroup]=\"genericForm\" >\n  <mat-form-field class=\" col-sm-6 fixSize _halfWidth\" *ngIf=\"genericData.input == 'chips' \">\n    <mat-chip-list #chipList>\n      <mat-chip *ngFor=\"let chip of listOfChips\" [selectable]=\"selectable\"\n               [removable]=\"removable\" (removed)=\"remove(chip)\">\n        {{chip[genericData.field]}}\n        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n      </mat-chip>\n      <input placeholder=\"{{genericData.field}}\"\n            formControlName=\"{{genericData.field}}\"\n             [matChipInputFor]=\"chipList\"\n             [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n             [matChipInputAddOnBlur]=\"addOnBlur\"\n             (matChipInputTokenEnd)=\"add($event)\">\n    </mat-chip-list>\n  </mat-form-field>\n</div>",
                styles: [".space{padding:0 10px}.bold{font-size:15px;font-weight:1000}.right{text-align:right}.fixSize{height:54.6px}"]
            }] }
];
ChipsFieldComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }],
    emitResponseType: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileUploadComponent {
    constructor() {
        this.emitResponseType = new EventEmitter();
        this.fileSelected = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} files
     * @return {?}
     */
    preview(files) {
        if (files.length === 0)
            return;
        this.fileSelected = true;
        /** @type {?} */
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        /** @type {?} */
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (/**
         * @param {?} _event
         * @return {?}
         */
        (_event) => {
            this.imgURL = reader.result;
        });
    }
}
FileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-file-upload-field',
                template: "<div [formGroup]=\"genericForm\">\n  <div class=\"col-sm-6 fixSize _halfWidth \"> \n    <label for=\"image-file-upload\" class=\"custom-file-upload _flex-box  _justify-content-center\" >\n        <i class=\"material-icons \" *ngIf=\"!fileSelected\" >\n            add \n        </i>\n      <img [src]=\"imgURL\" *ngIf=\"fileSelected\" class=\"imageBox\">\n      <div *ngIf=\"fileSelected\"  id=\"hoverShow1\">\n          <p>{{'labels.update'| translate}}</p>\n      </div>\n      <!-- <div>\n        <i class=\"material-icons paddingContent\">\n          cloud_upload\n        </i>\n      </div>\n      <div class=\"paddingContent\">\n        {{'labels.addImage'| translate}}\n      </div> -->\n    </label>\n    <input id=\"image-file-upload\" placeholder=\"{{genericData.label | camelcase}} \"\n      formControlName=\"{{genericData?.field}}\" [required]=\"genericData.validation.required\" #file type=\"file\"\n      (change)=\"preview(file.files);\" accept=\"{{genericData?.requiredType}}\">\n    <!-- <div *ngIf=\"fileSelected\" class=\"_flexBox _justify-content-space-between selectedImage\"> -->\n\n      <!-- <img [src]=\"imgURL\" class=\"imageBox\">\n      <i class=\"material-icons\" (click)=\"file.files = null ;file.value = null ; fileSelected = false\">\n        delete\n      </i> -->\n    <!-- </div> -->\n  </div>\n</div>",
                styles: ["input[type=file]{display:none}._flexBox{display:flex!important;align-items:center;justify-content:space-between}.paddingContent{padding:0 10px;white-space:nowrap}.fileList{margin-top:60px}.wrapperCenter{padding:50px;margin:20px 0;background-color:var(--background-color);border-radius:5px}.custom-file-upload{width:150px;height:150px;white-space:nowrap;border:1px solid var(--border-color)}.marginTopBottom{margin:10px 0}.wrapper{padding:0 20px}.custom-file-upload:hover{background-color:var(--primary-color);color:var(--white-color);border:1px solid var(--primary-color)}.selectedImage{width:300px}.imageBox{width:150px;height:150px;position:relative}.custom-file-upload:hover #hoverShow1{display:flex;align-items:center;justify-content:center}.custom-file-upload #hoverShow1{display:none;position:absolute;background-color:rgba(0,0,0,.5);color:var(--white-color);width:150px;height:150px}"]
            }] }
];
FileUploadComponent.propDecorators = {
    genericData: [{ type: Input }],
    genericForm: [{ type: Input }],
    genericEdit: [{ type: Input }],
    emitResponseType: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [ResourceService, BreadcrumbsService]
        };
    }
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ProgramsDashboardComponent,
                    DynamicFormComponent,
                    DialogBoxComponent,
                    TextFieldComponent,
                    DropdownFieldComponent,
                    NumberFieldComponent,
                    TextareaFieldComponent,
                    ParentHeadingComponent,
                    ImageCardComponent,
                    LoaderComponent,
                    SelectFieldComponent,
                    FormArrayFieldComponent,
                    SearchDirective,
                    IndividualLoaderComponent,
                    DashboardBlocksComponent,
                    BreadcrumbComponent,
                    PaginationComponent,
                    AutoCompeteComponent,
                    DatePickerComponent,
                    TableComponentComponent,
                    ColumnGraphComponent,
                    GraphTableChartComponent,
                    ShareLinkComponent,
                    ShareLinkViewComponent,
                    ChipsFieldComponent,
                    FileUploadComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    MatChipsModule,
                    MatCheckboxModule,
                    ReactiveFormsModule,
                    MatInputModule,
                    MatProgressSpinnerModule,
                    MatButtonModule$1,
                    MatDividerModule,
                    MatDialogModule,
                    MatRadioModule,
                    MatTableModule,
                    MatSelectModule,
                    RouterModule,
                    CoreModule,
                    MatSnackBarModule,
                    NgxSpinnerModule,
                    MatCardModule,
                    MatTooltipModule,
                    MatDatepickerModule,
                    MatAutocompleteModule,
                    GoogleChartsModule.forRoot(),
                    MatIconModule$1
                ],
                entryComponents: [DialogBoxComponent, ShareLinkViewComponent],
                exports: [
                    GraphTableChartComponent,
                    DynamicFormComponent,
                    NgxSpinnerModule,
                    ParentHeadingComponent,
                    MatSnackBarModule,
                    ImageCardComponent,
                    LoaderComponent,
                    FileUploadComponent,
                    SearchDirective,
                    DashboardBlocksComponent,
                    IndividualLoaderComponent,
                    ProgramsDashboardComponent,
                    BreadcrumbComponent,
                    PaginationComponent,
                    MatTooltipModule,
                    ShareLinkComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReportService {
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @return {?}
     */
    getListOfBlock(apiBaseUrl, programId) {
        return this.apiService.get(apiBaseUrl + programId);
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} Id
     * @return {?}
     */
    getListOfentityl(apiBaseUrl, programId, Id) {
        return this.apiService.get(apiBaseUrl + programId + '&blockId=' + Id);
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} entitylId
     * @return {?}
     */
    getEcmReportGetSubmissionId(apiBaseUrl, entitylId) {
        return this.apiService.get(apiBaseUrl + entitylId);
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} submissionId
     * @return {?}
     */
    getSubmissionReport(apiBaseUrl, submissionId) {
        return this.apiService.get(apiBaseUrl + submissionId);
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @return {?}
     */
    getUserentitylsInProgram(apiBaseUrl, programId) {
        return this.apiService.get(apiBaseUrl + programId);
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    getSingleEntityReport(apiBaseUrl, programId, solutionId, entitylId, linkId) {
        if (linkId) {
            return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + entitylId + "&linkId=" + linkId);
        }
        return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + entitylId);
        // return this.apiService.get('/assests/insight.json');
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    getHighEntityReport(apiBaseUrl, programId, solutionId, entitylId, linkId) {
        if (linkId) {
            return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + entitylId + "&linkId=" + linkId);
        }
        return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + entitylId);
        // return this.apiService.get('/assests/insight.json');
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} blockName
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    getMultipleEntityReport(apiBaseUrl, programId, solutionId, blockName, entitylId, linkId) {
        /** @type {?} */
        let url = '';
        entitylId.forEach((/**
         * @param {?} Id
         * @param {?} index
         * @return {?}
         */
        (Id, index) => {
            if (index === 0) {
                url += entitylId[index];
            }
            else {
                url += "," + entitylId[index];
            }
        }));
        if (linkId) {
            return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + url + '&blockName=' + blockName + "&linkId=" + linkId);
        }
        return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + url + '&blockName=' + blockName);
        // return this.apiService.get('/assests/insight.json');
    }
    /**
     * @param {?} apiBaseUrl
     * @param {?} programId
     * @param {?} solutionId
     * @param {?} blockName
     * @param {?} entitylId
     * @param {?} linkId
     * @return {?}
     */
    getMultipleEntityDrilldownReport(apiBaseUrl, programId, solutionId, blockName, entitylId, linkId) {
        /** @type {?} */
        let url = '';
        entitylId.forEach((/**
         * @param {?} Id
         * @param {?} index
         * @return {?}
         */
        (Id, index) => {
            if (index === 0) {
                url += entitylId[index];
            }
            else {
                url += "," + entitylId[index];
            }
        }));
        if (linkId) {
            return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + url + '&blockName=' + blockName + "&linkId=" + linkId);
        }
        return this.apiService.get(apiBaseUrl + programId + '?solutionId=' + solutionId + '&entity=' + url + '&blockName=' + blockName);
        // return this.apiService.get('/assests/insight.json');
    }
}
ReportService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ReportService.ctorParameters = () => [
    { type: ApiService }
];
/** @nocollapse */ ReportService.ngInjectableDef = defineInjectable({ factory: function ReportService_Factory() { return new ReportService(inject(ApiService)); }, token: ReportService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EntityReportComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HighlevelEntityReportComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MultipleEntityDrilldownReportComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MultipleEntityRportComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OperationsService {
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    applyFilters(url) {
        return this.apiService.get(url);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getUserSummary(url) {
        return this.apiService.get(url);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getEntityReport(url) {
        return this.apiService.get(url);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getAssessorReport(url) {
        return this.apiService.get(url);
    }
    /**
     * @param {?} programId
     * @return {?}
     */
    getUserProfileSummary(programId) {
        return this.apiService.get(programId);
    }
}
OperationsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
OperationsService.ctorParameters = () => [
    { type: ApiService }
];
/** @nocollapse */ OperationsService.ngInjectableDef = defineInjectable({ factory: function OperationsService_Factory() { return new OperationsService(inject(ApiService)); }, token: OperationsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OpsReportComponent {
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
            var imgHeight = canvas.height * imgWidth / canvas.width;
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
            for (let filter$$1 in this.filterObject) {
                if (this.filterObject[filter$$1] === null || this.filterObject[filter$$1] === undefined || this.filterObject[filter$$1] === "" || this.filterObject[filter$$1] === "aN-aN-NaN") {
                    delete this.filterObject[filter$$1];
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
                for (let filter$$1 in this.filterObject) {
                    if (this.filterObject[filter$$1] === null || this.filterObject[filter$$1] === undefined || this.filterObject[filter$$1] === "" || this.filterObject[filter$$1] === "aN-aN-NaN") {
                        delete this.filterObject[filter$$1];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReportModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ReportModule,
            providers: []
        };
    }
}
ReportModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    EntityReportComponent,
                    HighlevelEntityReportComponent,
                    MultipleEntityDrilldownReportComponent,
                    MultipleEntityRportComponent,
                    OpsReportComponent
                ],
                imports: [
                    MatCardModule,
                    MatInputModule,
                    CoreModule,
                    CommonModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatChipsModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    SharedModule,
                    MatListModule,
                    MatExpansionModule,
                    MatDividerModule,
                    GoogleChartsModule.forRoot(),
                    MatIconModule$1
                ],
                entryComponents: [],
                exports: [
                    EntityReportComponent,
                    HighlevelEntityReportComponent,
                    MultipleEntityDrilldownReportComponent,
                    MultipleEntityRportComponent,
                    OpsReportComponent
                ],
                providers: [
                    MatDatepickerModule,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BreadcrumbComponent, DashboardBlocksComponent, DialogBoxComponent, DropdownFieldComponent, DynamicFormComponent, FormArrayFieldComponent, ImageCardComponent, LoaderComponent, NumberFieldComponent, ParentHeadingComponent, SelectFieldComponent, TextFieldComponent, TextareaFieldComponent, SearchDirective, ResourceService, SharedModule, CoreModule, CamelCasePipe, NoValuePipe, TranslatePipe, ApiService, TranslateService, UtilityService, NavbarComponent, FooterComponent, ProgramSidenavComponent, ResponsiveNavbarComponent, SidenavComponent, GlobalConfigurationService, ProgramsDashboardComponent, MinCharacterPipe, BreadcrumbsService, PaginationComponent, DatePickerComponent, IndividualLoaderComponent, GraphTableChartComponent, ShareLinkComponent, EntityReportComponent, HighlevelEntityReportComponent, MultipleEntityDrilldownReportComponent, MultipleEntityRportComponent, OpsReportComponent, ReportModule, FileUploadComponent, AppContainerComponent as ɵf, OperationsService as ɵh, ReportService as ɵg, AutoCompeteComponent as ɵa, ChipsFieldComponent as ɵe, ColumnGraphComponent as ɵc, TableComponentComponent as ɵb, ShareLinkViewComponent as ɵd };

//# sourceMappingURL=shikshalokam.js.map