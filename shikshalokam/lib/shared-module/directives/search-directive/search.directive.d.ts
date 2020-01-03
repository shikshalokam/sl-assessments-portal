import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
export declare class SearchDirective implements OnInit, OnDestroy {
    debounceTime: number;
    searchValue: any;
    debounceSearch: EventEmitter<{}>;
    private clicks;
    private subscription;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    clickEvent(event: any): void;
}
