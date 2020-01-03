import { OnInit, EventEmitter } from '@angular/core';
export declare class GraphTableChartComponent implements OnInit {
    section: any;
    pagination: boolean;
    pageIndex: number;
    pageLimit: number;
    itemsPerPage: number[];
    paginationLabel: any;
    pageEvent: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    pageResponse(event: any): void;
}
