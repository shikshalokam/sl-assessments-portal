import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class DropdownFieldComponent implements OnInit {
    genericData: any;
    genericForm: FormGroup;
    genericEdit: boolean;
    emitResponseType: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    changeResponseType(responseType: any): void;
}
