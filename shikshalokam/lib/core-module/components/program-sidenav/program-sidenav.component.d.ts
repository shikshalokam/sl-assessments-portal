import { OnInit, EventEmitter } from '@angular/core';
export declare class ProgramSidenavComponent implements OnInit {
    result: any;
    currentProgramIndex: number;
    constructor();
    program: EventEmitter<{}>;
    ngOnInit(): void;
    programSelect(assessments: any, i: any): void;
}
