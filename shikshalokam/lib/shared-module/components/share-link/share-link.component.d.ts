import { OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core-module/services/api-service/api.service';
import { UtilityService } from '../../../core-module/services/utility-service/utility.service';
export declare class ShareLinkComponent implements OnInit {
    dialog: MatDialog;
    private snackBar;
    private utility;
    private router;
    private route;
    private apiService;
    publicSharedBaseUrl: any;
    shareLinkApi: any;
    globalConfig: any;
    componentId: any;
    baseUrl: any;
    portalName: any;
    url: {
        publicURL: string;
        privateURL: string;
        reportName: string;
    };
    uuId: any;
    constructor(dialog: MatDialog, snackBar: MatSnackBar, utility: UtilityService, router: Router, route: ActivatedRoute, apiService: ApiService);
    ngOnInit(): void;
    shareLink(): void;
    openDialog(): void;
}
