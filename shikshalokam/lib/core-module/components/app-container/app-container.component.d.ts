import { OnInit } from "@angular/core";
export declare class AppContainerComponent implements OnInit {
    showDropdown: boolean;
    url: any;
    portal: any;
    apps: any;
    constructor();
    ngOnInit(): void;
    openDropdown(): void;
    navigate(url: any): void;
}
