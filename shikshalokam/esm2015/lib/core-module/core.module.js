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
export class CoreModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [TranslateService, UtilityService, ApiService, GlobalConfigurationService]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUksZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFDLGdCQUFnQixFQUFDLGtCQUFrQixFQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25MLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdkcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBb0RqRixNQUFNLE9BQU8sVUFBVTs7OztJQUNyQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLDBCQUEwQixDQUFDO1NBQ25GLENBQUM7SUFDSixDQUFDOzs7WUF6REYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixXQUFXO29CQUNYLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixxQkFBcUI7b0JBQ3JCLGdCQUFnQjtvQkFDaEIseUJBQXlCO29CQUN6Qix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBRWhCLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixnQkFBZ0I7aUJBQ2pCO2dCQUNELFNBQVMsRUFBRTtnQkFDVCxJQUFJO2dCQUNKLGdDQUFnQztnQkFDaEMsOEJBQThCO2dCQUM5QixnQkFBZ0I7Z0JBQ2hCLEtBQUs7aUJBRU47Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixlQUFlO29CQUNmLHFCQUFxQjtvQkFDckIsZ0JBQWdCO29CQUNoQix5QkFBeUI7b0JBQ3pCLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCx1QkFBdUI7b0JBQ3ZCLFlBQVk7b0JBQ1osZ0JBQWdCO2lCQUNqQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyAgIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNYXREaXZpZGVyTW9kdWxlLE1hdENhcmRNb2R1bGUsTWF0QnV0dG9uTW9kdWxlLE1hdE1lbnVNb2R1bGUgLE1hdEljb25Nb2R1bGUsTWF0VG9vbHRpcE1vZHVsZSxNYXRFeHBhbnNpb25Nb2R1bGUsTWF0U2lkZW5hdk1vZHVsZSxNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGVuYXZDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hTcGlubmVyTW9kdWxlIH0gZnJvbSAnbmd4LXNwaW5uZXInO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZU5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZXNwb25zaXZlLW5hdmJhci9yZXNwb25zaXZlLW5hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByb2dyYW1TaWRlbmF2Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2dyYW0tc2lkZW5hdi9wcm9ncmFtLXNpZGVuYXYuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL3RyYW5zbGF0ZS1waXBlL3RyYW5zbGF0ZS5waXBlJztcbmltcG9ydCB7IENhbWVsQ2FzZVBpcGUgfSBmcm9tICcuL3BpcGVzL2NhbWVsY2FzZS1waXBlL2NhbWVsY2FzZS5waXBlJztcbmltcG9ydCB7IE5vVmFsdWVQaXBlIH0gZnJvbSAnLi9waXBlcy9uby12YWx1ZS1waXBlL25vLXZhbHVlLnBpcGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdHJhbnNsYXRlLXNlcnZpY2UvdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3V0aWxpdHktc2VydmljZS91dGlsaXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXBpLXNlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBcGlJbnRlcmNlcHRvciB9IGZyb20gJy4vc2VydmljZXMvaW50ZXJjZXB0b3Itc2VydmljZS9pbnRlcmNlcHRvci5zZXJ2aWNlJztcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHbG9iYWxDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ2xvYmFsLWNvbmZpZ3VyYXRpb24tc2VydmljZS9nbG9iYWwtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFwcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAtY29udGFpbmVyL2FwcC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1pbkNoYXJhY3RlclBpcGUgfSBmcm9tICcuL3BpcGVzL21pbi1jaGFyYWN0ZXItcGlwZS9taW4tY2hhcmFjdGVyLnBpcGUnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBDYW1lbENhc2VQaXBlLFxuICAgIE1pbkNoYXJhY3RlclBpcGUsXG4gICAgTm9WYWx1ZVBpcGUsXG4gICAgTmF2YmFyQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBBcHBDb250YWluZXJDb21wb25lbnQsXG4gICAgU2lkZW5hdkNvbXBvbmVudCxcbiAgICBSZXNwb25zaXZlTmF2YmFyQ29tcG9uZW50LFxuICAgIFByb2dyYW1TaWRlbmF2Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOZ3hTcGlubmVyTW9kdWxlLFxuICAgIFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8ge1xuICAgIC8vICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgLy8gICB1c2VDbGFzczogQXBpSW50ZXJjZXB0b3IsXG4gICAgLy8gICBtdWx0aTogdHJ1ZVxuICAgIC8vIH0sXG4gICAgXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUcmFuc2xhdGVQaXBlLFxuICAgIE5hdmJhckNvbXBvbmVudCxcbiAgICBGb290ZXJDb21wb25lbnQsXG4gICAgQXBwQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFNpZGVuYXZDb21wb25lbnQsXG4gICAgUmVzcG9uc2l2ZU5hdmJhckNvbXBvbmVudCxcbiAgICBDYW1lbENhc2VQaXBlLFxuICAgIE5vVmFsdWVQaXBlLFxuICAgIFByb2dyYW1TaWRlbmF2Q29tcG9uZW50LFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNaW5DaGFyYWN0ZXJQaXBlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1RyYW5zbGF0ZVNlcnZpY2UsVXRpbGl0eVNlcnZpY2UsQXBpU2VydmljZSxHbG9iYWxDb25maWd1cmF0aW9uU2VydmljZV1cbiAgICB9O1xuICB9XG59XG4iXX0=