/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule, MatCardModule, MatButtonModule, MatMenuModule, MatIconModule, MatTooltipModule, MatExpansionModule, MatSidenavModule, MatListModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ResponsiveNavbarComponent } from './components/responsive-navbar/responsive-navbar.component';
import { RouterModule } from '@angular/router';
import { ProgramSidenavComponent } from './components/program-sidenav/program-sidenav.component';
import { TranslatePipe } from './pipes/translate-pipe/translate.pipe';
import { CamelCasePipe } from './pipes/camelcase-pipe/camelcase.pipe';
import { NoValuePipe } from './pipes/no-value-pipe/no-value.pipe';
import { TranslateService } from './services/translate-service/translate.service';
import { UtilityService } from './services/utility-service/utility.service';
import { ApiService } from './services/api-service/api.service';
import { FooterComponent } from './components/footer/footer.component';
import { GlobalConfigurationService } from './services/global-configuration-service/global-configuration.service';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { MinCharacterPipe } from './pipes/min-character-pipe/min-character.pipe';
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    /**
     * @return {?}
     */
    CoreModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: CoreModule,
            providers: [TranslateService, UtilityService, ApiService, GlobalConfigurationService]
        };
    };
    CoreModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TranslatePipe,
                        CamelCasePipe,
                        MinCharacterPipe,
                        NoValuePipe,
                        NavbarComponent,
                        FooterComponent,
                        AppContainerComponent,
                        SidenavComponent,
                        ResponsiveNavbarComponent,
                        ProgramSidenavComponent
                    ],
                    imports: [
                        NgxSpinnerModule,
                        CommonModule,
                        RouterModule,
                        MatButtonModule,
                        HttpClientModule,
                        MatMenuModule,
                        MatExpansionModule,
                        MatSidenavModule,
                        MatListModule,
                        MatIconModule,
                        MatCardModule,
                        MatDividerModule,
                        MatTooltipModule
                    ],
                    providers: [
                    // {
                    //   provide: HTTP_INTERCEPTORS,
                    //   useClass: ApiInterceptor,
                    //   multi: true
                    // },
                    ],
                    exports: [
                        TranslatePipe,
                        NavbarComponent,
                        FooterComponent,
                        AppContainerComponent,
                        SidenavComponent,
                        ResponsiveNavbarComponent,
                        CamelCasePipe,
                        NoValuePipe,
                        ProgramSidenavComponent,
                        CommonModule,
                        MinCharacterPipe
                    ]
                },] }
    ];
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUksZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFDLGdCQUFnQixFQUFDLGtCQUFrQixFQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25MLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdkcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pGO0lBQUE7SUEwREEsQ0FBQzs7OztJQU5RLGtCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLDBCQUEwQixDQUFDO1NBQ25GLENBQUM7SUFDSixDQUFDOztnQkF6REYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixxQkFBcUI7d0JBQ3JCLGdCQUFnQjt3QkFDaEIseUJBQXlCO3dCQUN6Qix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBRWhCLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7cUJBQ2pCO29CQUNELFNBQVMsRUFBRTtvQkFDVCxJQUFJO29CQUNKLGdDQUFnQztvQkFDaEMsOEJBQThCO29CQUM5QixnQkFBZ0I7b0JBQ2hCLEtBQUs7cUJBRU47b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3dCQUNoQix5QkFBeUI7d0JBQ3pCLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCx1QkFBdUI7d0JBQ3ZCLFlBQVk7d0JBQ1osZ0JBQWdCO3FCQUNqQjtpQkFDRjs7SUFRRCxpQkFBQztDQUFBLEFBMURELElBMERDO1NBUFksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgICBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSxNYXRDYXJkTW9kdWxlLE1hdEJ1dHRvbk1vZHVsZSxNYXRNZW51TW9kdWxlICxNYXRJY29uTW9kdWxlLE1hdFRvb2x0aXBNb2R1bGUsTWF0RXhwYW5zaW9uTW9kdWxlLE1hdFNpZGVuYXZNb2R1bGUsTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlbmF2Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4U3Bpbm5lck1vZHVsZSB9IGZyb20gJ25neC1zcGlubmVyJztcbmltcG9ydCB7IFJlc3BvbnNpdmVOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVzcG9uc2l2ZS1uYXZiYXIvcmVzcG9uc2l2ZS1uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQcm9ncmFtU2lkZW5hdkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9ncmFtLXNpZGVuYXYvcHJvZ3JhbS1zaWRlbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy90cmFuc2xhdGUtcGlwZS90cmFuc2xhdGUucGlwZSc7XG5pbXBvcnQgeyBDYW1lbENhc2VQaXBlIH0gZnJvbSAnLi9waXBlcy9jYW1lbGNhc2UtcGlwZS9jYW1lbGNhc2UucGlwZSc7XG5pbXBvcnQgeyBOb1ZhbHVlUGlwZSB9IGZyb20gJy4vcGlwZXMvbm8tdmFsdWUtcGlwZS9uby12YWx1ZS5waXBlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RyYW5zbGF0ZS1zZXJ2aWNlL3RyYW5zbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91dGlsaXR5LXNlcnZpY2UvdXRpbGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FwaS1zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQXBpSW50ZXJjZXB0b3IgfSBmcm9tICcuL3NlcnZpY2VzL2ludGVyY2VwdG9yLXNlcnZpY2UvaW50ZXJjZXB0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2xvYmFsQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2dsb2JhbC1jb25maWd1cmF0aW9uLXNlcnZpY2UvZ2xvYmFsLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBcHBDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBwLWNvbnRhaW5lci9hcHAtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNaW5DaGFyYWN0ZXJQaXBlIH0gZnJvbSAnLi9waXBlcy9taW4tY2hhcmFjdGVyLXBpcGUvbWluLWNoYXJhY3Rlci5waXBlJztcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgQ2FtZWxDYXNlUGlwZSxcbiAgICBNaW5DaGFyYWN0ZXJQaXBlLFxuICAgIE5vVmFsdWVQaXBlLFxuICAgIE5hdmJhckNvbXBvbmVudCxcbiAgICBGb290ZXJDb21wb25lbnQsXG4gICAgQXBwQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFNpZGVuYXZDb21wb25lbnQsXG4gICAgUmVzcG9uc2l2ZU5hdmJhckNvbXBvbmVudCxcbiAgICBQcm9ncmFtU2lkZW5hdkNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmd4U3Bpbm5lck1vZHVsZSxcbiAgICBcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIHtcbiAgICAvLyAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgIC8vICAgdXNlQ2xhc3M6IEFwaUludGVyY2VwdG9yLFxuICAgIC8vICAgbXVsdGk6IHRydWVcbiAgICAvLyB9LFxuICAgIFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBOYXZiYXJDb21wb25lbnQsXG4gICAgRm9vdGVyQ29tcG9uZW50LFxuICAgIEFwcENvbnRhaW5lckNvbXBvbmVudCxcbiAgICBTaWRlbmF2Q29tcG9uZW50LFxuICAgIFJlc3BvbnNpdmVOYXZiYXJDb21wb25lbnQsXG4gICAgQ2FtZWxDYXNlUGlwZSxcbiAgICBOb1ZhbHVlUGlwZSxcbiAgICBQcm9ncmFtU2lkZW5hdkNvbXBvbmVudCxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWluQ2hhcmFjdGVyUGlwZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvcmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtUcmFuc2xhdGVTZXJ2aWNlLFV0aWxpdHlTZXJ2aWNlLEFwaVNlcnZpY2UsR2xvYmFsQ29uZmlndXJhdGlvblNlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuIl19