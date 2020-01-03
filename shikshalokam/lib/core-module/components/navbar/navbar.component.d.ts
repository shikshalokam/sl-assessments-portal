import { OnInit, EventEmitter } from '@angular/core';
export declare class NavbarComponent implements OnInit {
    url: any;
    showDropdown: boolean;
    dropdownLabel: any;
    currentUser: any;
    logo: any;
    Logout: EventEmitter<{}>;
    isLoggedIn: any;
    portal: any;
    noAssess: boolean;
    constructor();
    ngOnInit(): void;
    homePage(url: any): void;
    openDropdown(): void;
    onSignout(): void;
    onLogin(): void;
}
