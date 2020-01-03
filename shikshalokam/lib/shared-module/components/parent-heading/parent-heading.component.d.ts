import { OnInit, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UtilityService } from '../../../core-module/services/utility-service/utility.service';
export declare class ParentHeadingComponent implements OnInit {
    dialog: MatDialog;
    private utilityService;
    genericHeading: string;
    schoolName: any;
    startIndex: any;
    atleastOneComplete: any;
    schoolId: any;
    schoolNameDivider: any;
    showControl: any;
    sendMarkAsComplete: EventEmitter<boolean>;
    constructor(dialog: MatDialog, utilityService: UtilityService);
    ngOnInit(): void;
    openDialog(): void;
    sendFlag(): void;
    onBack(): void;
}
