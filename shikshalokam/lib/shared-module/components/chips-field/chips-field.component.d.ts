import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
export declare class ChipsFieldComponent implements OnInit {
    genericData: any;
    genericForm: FormGroup;
    genericEdit: boolean;
    emitResponseType: EventEmitter<{}>;
    visible: boolean;
    selectable: boolean;
    removable: boolean;
    addOnBlur: boolean;
    name: any;
    readonly separatorKeysCodes: number[];
    listOfChips: any[];
    ngOnInit(): void;
    add(event: MatChipInputEvent): void;
    remove(chips: any): void;
}
