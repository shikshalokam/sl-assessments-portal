import { OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { IBreadcrumb } from "./breadcrumbs.model";
import { BreadcrumbsService } from "../../services/breadcrumb-service/breadcrumbs.service";
import { UtilityService } from "../../../core-module/services/utility-service/utility.service";
export declare class BreadcrumbComponent implements OnInit {
    private breadcrumbService;
    private utilityService;
    private activatedRoute;
    private router;
    private ROUTE_DATA_BREADCRUMB;
    private ROUTE_PARAM_BREADCRUMB;
    private PREFIX_BREADCRUMB;
    private currentBreadcrumbs;
    breadcrumbs: IBreadcrumb[];
    addClass: string;
    showControl: any;
    startIndex: any;
    constructor(breadcrumbService: BreadcrumbsService, utilityService: UtilityService, activatedRoute: ActivatedRoute, router: Router);
    hasParams(breadcrumb: IBreadcrumb): (string | Params)[];
    onBack(): void;
    ngOnInit(): void;
    private generateBreadcrumbTrail;
}
