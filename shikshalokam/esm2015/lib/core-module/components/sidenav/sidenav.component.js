/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SidenavComponent {
    constructor() {
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
    openSideSubMenu(id) {
        console.log("clicked");
        if (id == "configurations") {
            this.submenu = this.submenu == true ? false : true;
        }
        else {
            console.log("not matched");
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.permissionAssignedRole = JSON.parse(localStorage.getItem('canAcess'));
        console.log("link", this.link);
    }
}
SidenavComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidenav',
                template: "<div class=\"sideNavheading\" routerLink=\"../programs\" matTooltip=\"{{'message.goToProgramDashboard' | translate}}\"\n  *ngIf=\"programsShow\">\n  <i class=\"material-icons\">\n    keyboard_arrow_left\n  </i> {{ 'headings.programs' | translate }}\n</div>\n<!-- <div routerLink = \"{{option.anchorLink}}\"  [routerLinkActiveOptions]=\"{exact:true}\" routerLinkActive=\"active\"*ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n<!-- <div [routerLink]=\"['assessments/:programId/:assessmentId/'+option.link?.anchorLink,option.link.programId,option.link.assessmentId ]\" routerLinkActive=\"active\" *ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n<!-- <div [routerLink]=\"[option.link.anchorLink ]\"  [queryParamsHandling]=\"preserve\" [queryParams]=\"{ programId : option.link.programId , assessmentId : option.link.assessmentId}\" routerLinkActive=\"active\" *ngFor=\"let option of link?.options\"  class=\"subHeading\"> -->\n\n\n\n<!-- <span *ngFor=\"let option of link?.options\">\n\n  <div *ngIf=\"option.id=='configurations'\" routerLinkActive=\"active\" class=\"subHeading\"\n    (click)=\"openSideSubMenu(option.id)\">\n    <span class=\"sideNavSubheading\">\n      <i class=\"material-icons\">\n        {{option.icon}}\n      </i> {{ option.value | translate }}\n    </span>\n  </div>\n  \n  <div [routerLink]=\"[option.anchorLink ]\" routerLinkActive=\"active\" class=\"subHeading\"\n    *ngIf=\"permissionAssignedRole.includes(option.id) && option.id!='configurations'\">\n    <span class=\"sideNavSubheading\">\n      <i class=\"material-icons\">\n        {{option.icon}}\n      </i> {{ option.value | translate }}\n    </span>\n  </div>\n\n</span> -->\n\n<!-- <div class=\"dropdown-container\" *ngIf=\"submenu\">\n  <div class=\"col-sm-12\" [routerLink]=\"['/configuration/dashboard']\" routerLinkActive=\"active\" class=\"sub-menu\">Create\n  </div>\n  <div class=\"col-sm-12\" [routerLink]=\"['/configuration/observation-review']\" routerLinkActive=\"active\"\n    class=\"sub-menu\">Drafts</div>\n  <div class=\"col-sm-12\" [routerLink]=\"['/configuration/observation-review']\" routerLinkActive=\"active\"\n    class=\"sub-menu\">Published</div>\n\n</div> -->\n\n\n    <mat-nav-list>\n   \n      <span *ngFor=\"let item of link?.options\">\n        <span *ngIf=\"item.children && item.children.length > 0\">\n          <mat-accordion>\n            <mat-expansion-panel class=\"no-border\">\n              <mat-expansion-panel-header class=\"subHeading black-color\">\n                <mat-panel-title  [routerLink]=\"[item.anchorLink]\" >\n                  <!-- Cabeceras del submenu -->\n                  <div   fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <mat-icon style=\"padding: 0px\">{{item.icon}}</mat-icon>\n                    {{item.value | translate }}\n                  </div>\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n              <span *ngFor=\"let child of item.children\">\n                <mat-list-item [routerLink]=\"[child.anchorLink]\" routerLinkActive=\"active\" class=\"subHeading black-color\">\n                  <!-- Entradas de cada submen\u00FA  -->\n                  <div  fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <mat-icon>{{child.icon}}</mat-icon>\n                    {{child.value}}\n                  </div>\n                </mat-list-item>\n              </span>\n            </mat-expansion-panel>\n          </mat-accordion>\n        </span>\n        <span *ngIf=\"!item.children || item.children.length === 0\">\n          <mat-list-item  [routerLink]=\"[item.anchorLink]\" routerLinkActive=\"active\" class=\"subHeading black-color\" >\n            <!-- Entradas principales -->\n            <div  fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\n              <mat-icon>{{item.icon}}</mat-icon>\n              {{item.value | translate}}\n            </div>\n          </mat-list-item>\n        </span>\n      </span>\n    </mat-nav-list>\n",
                styles: [".sideNavSubheading{font-size:15px;padding:10px 23px;height:40px;display:flex;cursor:pointer}.subHeading{color:var(--grey-color)}.sideNavheading{height:40px;display:flex;align-items:center;padding:0 0 0 5px;cursor:pointer}.sideNavheading:hover,.subHeading:hover{color:var(--white-color);background-color:var(--primary-color)!important}.active{color:var(--white-color)!important;background-color:var(--primary-color)!important}.material-icons{font-size:20px;padding:0 5px}.sub-menu{background:#f0f8ff;color:#948d8d;padding:5px 10px 5px 50px}.sub-menu:hover{padding:5px 10px 5px 50px;background:#b1212b;color:#fff}.white-color{color:#fff!important}.exp-panel-header{height:48px!important;color:#fff}.black-color{color:#333}.no-border{border-radius:0!important}"]
            }] }
];
/** @nocollapse */
SidenavComponent.ctorParameters = () => [];
SidenavComponent.propDecorators = {
    link: [{ type: Input }],
    programsShow: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU16RCxNQUFNLE9BQU8sZ0JBQWdCO0lBTzNCO1FBREEsWUFBTyxHQUFDLEtBQUssQ0FBQztRQXFCZCxTQUFJLEdBQUc7WUFDTDtnQkFDRSxXQUFXLEVBQUUsWUFBWTtnQkFDekIsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsS0FBSyxFQUFFLFlBQVk7YUFDcEI7WUFDRDtnQkFDRSxXQUFXLEVBQUUsZUFBZTtnQkFDNUIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxjQUFjO2FBQ3RCO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFFLGFBQWE7Z0JBQzFCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsV0FBVyxFQUFFLGlCQUFpQjt3QkFDOUIsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLEtBQUssRUFBRSxpQkFBaUI7cUJBQ3pCO29CQUNEO3dCQUNFLFdBQVcsRUFBRSxPQUFPO3dCQUNwQixRQUFRLEVBQUUsT0FBTzt3QkFDakIsS0FBSyxFQUFFLFFBQVE7cUJBQ2hCO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxXQUFXLEVBQUUsVUFBVTtnQkFDdkIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRTtvQkFDTjt3QkFDRSxXQUFXLEVBQUUsaUJBQWlCO3dCQUM5QixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsS0FBSyxFQUFFLG1CQUFtQjtxQkFDM0I7aUJBQ0Y7YUFDRjtTQUNKLENBQUM7SUF6REYsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsRUFBRTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXZCLElBQUcsRUFBRSxJQUFFLGdCQUFnQixFQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLE9BQU8sSUFBRSxJQUFJLENBQUEsQ0FBQyxDQUFBLEtBQUssQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDO1NBQzVDO2FBQUk7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzVCO0lBR0gsQ0FBQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHErSEFBdUM7O2FBRXhDOzs7OzttQkFFRSxLQUFLOzJCQUNMLEtBQUs7Ozs7SUFETixnQ0FBbUI7O0lBQ25CLHdDQUFzQjs7SUFDdEIsa0RBQXVCOztJQUN2QixxQ0FBVTs7SUFDVix3Q0FBYTs7SUFDYixtQ0FBYzs7SUFxQmQsZ0NBc0NFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZW5hdi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsaW5rOiBhbnk7XG4gIEBJbnB1dCgpIHByb2dyYW1zU2hvdztcbiAgcGVybWlzc2lvbkFzc2lnbmVkUm9sZTtcbiAgcHJvZ3JhbUlkO1xuICBhc3Nlc3NtZW50SWQ7XG4gIHN1Ym1lbnU9ZmFsc2U7XG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgfVxuXG4gIG9wZW5TaWRlU3ViTWVudShpZCl7XG4gICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xuXG4gICAgaWYoaWQ9PVwiY29uZmlndXJhdGlvbnNcIil7XG4gICAgICB0aGlzLnN1Ym1lbnU9dGhpcy5zdWJtZW51PT10cnVlP2ZhbHNlOnRydWU7XG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vdCBtYXRjaGVkXCIpO1xuICAgIH1cblxuICAgIFxuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGVybWlzc2lvbkFzc2lnbmVkUm9sZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhbkFjZXNzJykpO1xuXG4gICAgY29uc29sZS5sb2coXCJsaW5rXCIsdGhpcy5saW5rKTtcbiAgfVxuXG4gIG1lbnUgPSBbXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6ICdFc2NyaXRvcmlvJyxcbiAgICAgIGljb25OYW1lOiAnZGVza3RvcF93aW5kb3dzJyxcbiAgICAgIHJvdXRlOiAnZXNjcml0b3JpbycsXG4gICAgfSwgICAgICAgIFxuICAgIHtcbiAgICAgIGRpc3BsYXlOYW1lOiAnRW50cmFkYXMgR0FERScsXG4gICAgICBpY29uTmFtZTogJ2JhbGxvdCcsXG4gICAgICByb3V0ZTogJ2VudHJhZGFzR0FERScsXG4gICAgfSxcbiAgICB7XG4gICAgICBkaXNwbGF5TmFtZTogJ0V4cGVkaWVudGVzJyxcbiAgICAgIGljb25OYW1lOiAnZGVzY3JpcHRpb24nLCAgICAgICAgICBcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkaXNwbGF5TmFtZTogJ01pcyBFeHBlZGllbnRlcycsXG4gICAgICAgICAgaWNvbk5hbWU6ICdob3dfdG9fcmVnJyxcbiAgICAgICAgICByb3V0ZTogJy9taXNleHBlZGllbnRlcydcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICBkaXNwbGF5TmFtZTogJ1RvZG9zJyxcbiAgICAgICAgICBpY29uTmFtZTogJ3dhdmVzJyxcbiAgICAgICAgICByb3V0ZTogJy90b2RvcydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6ICdQZXJmaWxlcycsXG4gICAgICBpY29uTmFtZTogJ2dyb3VwJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdCw7pzcXVlZGEgUGVyZmlsJyxcbiAgICAgICAgICAgIGljb25OYW1lOiAnc2VhcmNoJyxcbiAgICAgICAgICAgIHJvdXRlOiAnL2J1c3F1ZWRhcGVyZmlsZXMnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gIF07XG5cbn1cbiJdfQ==