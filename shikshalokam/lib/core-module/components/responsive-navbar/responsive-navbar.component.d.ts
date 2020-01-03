import { OnInit, EventEmitter } from '@angular/core';
export declare class ResponsiveNavbarComponent implements OnInit {
    showDropdown: boolean;
    openDrawer: EventEmitter<{}>;
    currentUser: any;
    logo: any;
    Logout: EventEmitter<{}>;
    url: any;
    portal: any;
    noAssess: boolean;
    constructor();
    ngOnInit(): void;
    onSignout(): void;
    openSideNav(): void;
    openDropdown(): void;
    navigate(url: any): void;
}
