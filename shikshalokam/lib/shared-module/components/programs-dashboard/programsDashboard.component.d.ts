import { OnInit, EventEmitter } from "@angular/core";
export declare class ProgramsDashboardComponent implements OnInit {
    programsList: any;
    emitCurrentProgram: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    programClick(currentProgram: any): void;
}
