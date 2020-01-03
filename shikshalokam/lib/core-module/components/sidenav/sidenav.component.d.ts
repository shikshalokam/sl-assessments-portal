import { OnInit } from '@angular/core';
export declare class SidenavComponent implements OnInit {
    link: any;
    programsShow: any;
    permissionAssignedRole: any;
    programId: any;
    assessmentId: any;
    submenu: boolean;
    constructor();
    openSideSubMenu(id: any): void;
    ngOnInit(): void;
    menu: ({
        displayName: string;
        iconName: string;
        route: string;
        children?: undefined;
    } | {
        displayName: string;
        iconName: string;
        children: {
            displayName: string;
            iconName: string;
            route: string;
        }[];
        route?: undefined;
    })[];
}
