import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class DynamicFormComponent implements OnInit {
    genericData: any;
    genericForm: FormGroup;
    genericEdit: boolean;
    editnewquestion: EventEmitter<{}>;
    hostUrl: any;
    constructor();
    ngOnInit(): void;
    changeResponseType(event: any, index: any): void;
    editquestion(edit: any): void;
}
