import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
export declare class UtilityService {
    private location;
    private spinner;
    private _formBuilder;
    objectForm: any;
    constructor(location: Location, spinner: NgxSpinnerService, _formBuilder: FormBuilder);
    onBack(): void;
    loaderShow(): void;
    loaderHide(): void;
    toGroup(inputs: any): FormGroup;
    createFormArray(inputs: any): FormArray;
    createControl(object: any): any;
    uploadFile(object: any): any;
}
