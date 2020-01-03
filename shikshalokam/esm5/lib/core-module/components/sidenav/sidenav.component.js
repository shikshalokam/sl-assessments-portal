/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.submenu = false;
        this.menu = [
            {
                displayName: 'Escritorio',
                iconName: 'desktop_windows',
                route: 'escritorio',
            },
            {
                displayName: 'Entradas GADE',
                iconName: 'ballot',
                route: 'entradasGADE',
            },
            {
                displayName: 'Expedientes',
                iconName: 'description',
                children: [
                    {
                        displayName: 'Mis Expedientes',
                        iconName: 'how_to_reg',
                        route: '/misexpedientes'
                    },
                    {
                        displayName: 'Todos',
                        iconName: 'waves',
                        route: '/todos'
                    }
                ]
            },
            {
                displayName: 'Perfiles',
                iconName: 'group',
                children: [
                    {
                        displayName: 'Búsqueda Perfil',
                        iconName: 'search',
                        route: '/busquedaperfiles'
                    }
                ]
            }
        ];
    }
    /**
     * @param {?} id
     * @return {?}
     */
    SidenavComponent.prototype.openSideSubMenu = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        console.log("clicked");
        if (id == "configurations") {
            this.submenu = this.submenu == true ? false : true;
        }
        else {
            console.log("not matched");
        }
    };
    /**
     * @return {?}
     */
    SidenavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.permissionAssignedRole = JSON.parse(localStorage.getItem('canAcess'));
        console.log("link", this.link);
    };
    SidenavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidenav',
                    template: "<div class=\"sideNavheading\" routerLink=\"../programs\" matTooltip=\"{{'message.goToProgramDashboard' | translate}}\"\n  *ngIf=\"programsShow\">\n  <i class=\"material-icons\">\n    keyboard_arrow_left\n  </i> {{ 'headings.programs' | translate }}\n</div>\n<!-- <div routerLink = \"{{option.anchorLink}}\"  [routerLinkActiveOptions]=\"{exact:true}\" routerLinkActive=\"active\"*ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n<!-- <div [routerLink]=\"['assessments/:programId/:assessmentId/'+option.link?.anchorLink,option.link.programId,option.link.assessmentId ]\" routerLinkActive=\"active\" *ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n<!-- <div [routerLink]=\"[option.link.anchorLink ]\"  [queryParamsHandling]=\"preserve\" [queryParams]=\"{ programId : option.link.programId , assessmentId : option.link.assessmentId}\" routerLinkActive=\"active\" *ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n\n\n\n<!-- <span *ngFor=\"let option of link?.options\">\n\n  <div *ngIf=\"option.id=='configurations'\" routerLinkActive=\"active\" class=\"subHeading\"\n    (click)=\"openSideSubMenu(option.id)\">\n    <span class=\"sideNavSubheading\">\n      <i class=\"material-icons\">\n        {{option.icon}}\n      </i> {{ option.value | translate }}\n    </span>\n  </div>\n  \n  <div [routerLink]=\"[option.anchorLink ]\" routerLinkActive=\"active\" class=\"subHeading\"\n    *ngIf=\"permissionAssignedRole.includes(option.id) && option.id!='configurations'\">\n    <span class=\"sideNavSubheading\">\n      <i class=\"material-icons\">\n        {{option.icon}}\n      </i> {{ option.value | translate }}\n    </span>\n  </div>\n\n</span> -->\n\n<!-- <div class=\"dropdown-container\" *ngIf=\"submenu\">\n  <div class=\"col-sm-12\" [routerLink]=\"['/configuration/dashboard']\" routerLinkActive=\"active\" class=\"sub-menu\">Create\n  </div>\n  <div class=\"col-sm-12\" [routerLink]=\"['/configuration/observation-review']\" routerLinkActive=\"active\"\n    class=\"sub-menu\">Drafts</div>\n  <div class=\"col-sm-12\" [routerLink]=\"['/configuration/observation-review']\" routerLinkActive=\"active\"\n    class=\"sub-menu\">Published</div>\n\n</div> -->\n\n\n    <mat-nav-list>\n   \n      <span *ngFor=\"let item of link?.options\">\n        <span *ngIf=\"item.children && item.children.length > 0\">\n          <mat-accordion>\n            <mat-expansion-panel class=\"no-border\">\n              <mat-expansion-panel-header class=\"subHeading black-color\">\n                <mat-panel-title  [routerLink]=\"[item.anchorLink]\" >\n                  <!-- Cabeceras del submenu -->\n                  <div   fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <mat-icon style=\"padding: 0px\">{{item.icon}}</mat-icon>\n                    {{item.value | translate }}\n                  </div>\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n              <span *ngFor=\"let child of item.children\">\n                <mat-list-item [routerLink]=\"[child.anchorLink]\" routerLinkActive=\"active\" class=\"subHeading black-color\">\n                  <!-- Entradas de cada submen\u00FA  -->\n                  <div  fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <mat-icon>{{child.icon}}</mat-icon>\n                    {{child.value}}\n                  </div>\n                </mat-list-item>\n              </span>\n            </mat-expansion-panel>\n          </mat-accordion>\n        </span>\n        <span *ngIf=\"!item.children || item.children.length === 0\">\n          <mat-list-item  [routerLink]=\"[item.anchorLink]\" routerLinkActive=\"active\" class=\"subHeading black-color\" >\n            <!-- Entradas principales -->\n            <div  fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\n              <mat-icon>{{item.icon}}</mat-icon>\n              {{item.value | translate}}\n            </div>\n          </mat-list-item>\n        </span>\n      </span>\n    </mat-nav-list>\n",
                    styles: [".sideNavSubheading{font-size:15px;padding:10px 23px;height:40px;display:flex;cursor:pointer}.subHeading{color:var(--grey-color)}.sideNavheading{height:40px;display:flex;align-items:center;padding:0 0 0 5px;cursor:pointer}.sideNavheading:hover,.subHeading:hover{color:var(--white-color);background-color:var(--primary-color)!important}.active{color:var(--white-color)!important;background-color:var(--primary-color)!important}.material-icons{font-size:20px;padding:0 5px}.sub-menu{background:#f0f8ff;color:#948d8d;padding:5px 10px 5px 50px}.sub-menu:hover{padding:5px 10px 5px 50px;background:#b1212b;color:#fff}.white-color{color:#fff!important}.exp-panel-header{height:48px!important;color:#fff}.black-color{color:#333}.no-border{border-radius:0!important}"]
                }] }
    ];
    /** @nocollapse */
    SidenavComponent.ctorParameters = function () { return []; };
    SidenavComponent.propDecorators = {
        link: [{ type: Input }],
        programsShow: [{ type: Input }]
    };
    return SidenavComponent;
}());
export { SidenavComponent };
if (false) {
    /** @type {?} */
    SidenavComponent.prototype.link;
    /** @type {?} */
    SidenavComponent.prototype.programsShow;
    /** @type {?} */
    SidenavComponent.prototype.permissionAssignedRole;
    /** @type {?} */
    SidenavComponent.prototype.programId;
    /** @type {?} */
    SidenavComponent.prototype.assessmentId;
    /** @type {?} */
    SidenavComponent.prototype.submenu;
    /** @type {?} */
    SidenavComponent.prototype.menu;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RDtJQVlFO1FBREEsWUFBTyxHQUFDLEtBQUssQ0FBQztRQXFCZCxTQUFJLEdBQUc7WUFDTDtnQkFDRSxXQUFXLEVBQUUsWUFBWTtnQkFDekIsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsS0FBSyxFQUFFLFlBQVk7YUFDcEI7WUFDRDtnQkFDRSxXQUFXLEVBQUUsZUFBZTtnQkFDNUIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxjQUFjO2FBQ3RCO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFFLGFBQWE7Z0JBQzFCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsV0FBVyxFQUFFLGlCQUFpQjt3QkFDOUIsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLEtBQUssRUFBRSxpQkFBaUI7cUJBQ3pCO29CQUNEO3dCQUNFLFdBQVcsRUFBRSxPQUFPO3dCQUNwQixRQUFRLEVBQUUsT0FBTzt3QkFDakIsS0FBSyxFQUFFLFFBQVE7cUJBQ2hCO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxXQUFXLEVBQUUsVUFBVTtnQkFDdkIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRTtvQkFDTjt3QkFDRSxXQUFXLEVBQUUsaUJBQWlCO3dCQUM5QixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsS0FBSyxFQUFFLG1CQUFtQjtxQkFDM0I7aUJBQ0Y7YUFDRjtTQUNKLENBQUM7SUF6REYsQ0FBQzs7Ozs7SUFFRCwwQ0FBZTs7OztJQUFmLFVBQWdCLEVBQUU7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV2QixJQUFHLEVBQUUsSUFBRSxnQkFBZ0IsRUFBQztZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQyxPQUFPLElBQUUsSUFBSSxDQUFBLENBQUMsQ0FBQSxLQUFLLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQztTQUM1QzthQUFJO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM1QjtJQUdILENBQUM7Ozs7SUFDRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHErSEFBdUM7O2lCQUV4Qzs7Ozs7dUJBRUUsS0FBSzsrQkFDTCxLQUFLOztJQWlFUix1QkFBQztDQUFBLEFBeEVELElBd0VDO1NBbkVZLGdCQUFnQjs7O0lBQzNCLGdDQUFtQjs7SUFDbkIsd0NBQXNCOztJQUN0QixrREFBdUI7O0lBQ3ZCLHFDQUFVOztJQUNWLHdDQUFhOztJQUNiLG1DQUFjOztJQXFCZCxnQ0FzQ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGVuYXYuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxpbms6IGFueTtcbiAgQElucHV0KCkgcHJvZ3JhbXNTaG93O1xuICBwZXJtaXNzaW9uQXNzaWduZWRSb2xlO1xuICBwcm9ncmFtSWQ7XG4gIGFzc2Vzc21lbnRJZDtcbiAgc3VibWVudT1mYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7IFxuICB9XG5cbiAgb3BlblNpZGVTdWJNZW51KGlkKXtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG5cbiAgICBpZihpZD09XCJjb25maWd1cmF0aW9uc1wiKXtcbiAgICAgIHRoaXMuc3VibWVudT10aGlzLnN1Ym1lbnU9PXRydWU/ZmFsc2U6dHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKFwibm90IG1hdGNoZWRcIik7XG4gICAgfVxuXG4gICAgXG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wZXJtaXNzaW9uQXNzaWduZWRSb2xlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FuQWNlc3MnKSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImxpbmtcIix0aGlzLmxpbmspO1xuICB9XG5cbiAgbWVudSA9IFtcbiAgICB7XG4gICAgICBkaXNwbGF5TmFtZTogJ0VzY3JpdG9yaW8nLFxuICAgICAgaWNvbk5hbWU6ICdkZXNrdG9wX3dpbmRvd3MnLFxuICAgICAgcm91dGU6ICdlc2NyaXRvcmlvJyxcbiAgICB9LCAgICAgICAgXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6ICdFbnRyYWRhcyBHQURFJyxcbiAgICAgIGljb25OYW1lOiAnYmFsbG90JyxcbiAgICAgIHJvdXRlOiAnZW50cmFkYXNHQURFJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGRpc3BsYXlOYW1lOiAnRXhwZWRpZW50ZXMnLFxuICAgICAgaWNvbk5hbWU6ICdkZXNjcmlwdGlvbicsICAgICAgICAgIFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIGRpc3BsYXlOYW1lOiAnTWlzIEV4cGVkaWVudGVzJyxcbiAgICAgICAgICBpY29uTmFtZTogJ2hvd190b19yZWcnLFxuICAgICAgICAgIHJvdXRlOiAnL21pc2V4cGVkaWVudGVzJ1xuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIGRpc3BsYXlOYW1lOiAnVG9kb3MnLFxuICAgICAgICAgIGljb25OYW1lOiAnd2F2ZXMnLFxuICAgICAgICAgIHJvdXRlOiAnL3RvZG9zJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBkaXNwbGF5TmFtZTogJ1BlcmZpbGVzJyxcbiAgICAgIGljb25OYW1lOiAnZ3JvdXAnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0LDunNxdWVkYSBQZXJmaWwnLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdzZWFyY2gnLFxuICAgICAgICAgICAgcm91dGU6ICcvYnVzcXVlZGFwZXJmaWxlcydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgXTtcblxufVxuIl19