import { OnInit, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
export declare class DashboardBlocksComponent implements OnInit {
    private snackBar;
    canAcess: string;
    constructor(snackBar: MatSnackBar);
    list: any;
    sendNavigationLink: EventEmitter<{}>;
    ngOnInit(): void;
    navigateLink(nav: any): void;
    showMessage(): void;
}
