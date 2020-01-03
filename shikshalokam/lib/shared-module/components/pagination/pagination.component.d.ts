import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
export declare class PaginationComponent implements OnInit {
    private _fb;
    length: any;
    paginationLabel: any;
    itemsPerPage: any;
    pageLimit: any;
    pageIndex: any;
    pagination: any;
    last: any;
    selected: any;
    pageSize: FormGroup;
    paginationFlag: boolean;
    data: any;
    label: any;
    startList: any;
    endList: any;
    paginationResponse: EventEmitter<{}>;
    constructor(_fb: FormBuilder);
    ngOnInit(): void;
    page(event: any): void;
    setPageLimit(event: any): void;
    sendPaginationResponse(): void;
}
