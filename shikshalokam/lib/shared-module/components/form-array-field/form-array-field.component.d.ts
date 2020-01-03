import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
export declare class FormArrayFieldComponent implements OnInit {
    private _formBuilder;
    genericData: any;
    genericForm: FormGroup;
    genericEdit: boolean;
    question: FormArray;
    editquestion: EventEmitter<{}>;
    questionCount: any;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
    editQuestion(edit: any): void;
    getControls(): import("@angular/forms/src/model").AbstractControl[];
    add(control: any): void;
    delete(control: any, index: any): void;
}
