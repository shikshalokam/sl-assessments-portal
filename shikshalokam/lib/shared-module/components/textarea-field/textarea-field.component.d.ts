import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class TextareaFieldComponent implements OnInit {
    genericData: any;
    genericForm: FormGroup;
    genericEdit: boolean;
    constructor();
    ngOnInit(): void;
    check(val: any): void;
}
