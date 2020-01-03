/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatIconModule } from '@angular/material/icon';
import { EntityReportComponent } from './entity-report/entity-report.component';
import { HighlevelEntityReportComponent } from './highlevel-entity-report/highlevel-entity-report.component';
import { MultipleEntityDrilldownReportComponent } from './multiple-entity-drilldown-report/multiple-entity-drilldown-report.component';
import { MultipleEntityRportComponent } from './multiple-entity-report/multiple-entity-report.component';
import { MatCardModule, MatExpansionModule, MatDividerModule, MatListModule, MatChipsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { OpsReportComponent } from './ops-report/ops-report.component';
import { SharedModule } from '../shared-module/shared.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core-module/core.module';
export class ReportModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ReportModule,
            providers: []
        };
    }
}
ReportModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    EntityReportComponent,
                    HighlevelEntityReportComponent,
                    MultipleEntityDrilldownReportComponent,
                    MultipleEntityRportComponent,
                    OpsReportComponent
                ],
                imports: [
                    MatCardModule,
                    MatInputModule,
                    CoreModule,
                    CommonModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatChipsModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    SharedModule,
                    MatListModule,
                    MatExpansionModule,
                    MatDividerModule,
                    GoogleChartsModule.forRoot(),
                    MatIconModule
                ],
                entryComponents: [],
                exports: [
                    EntityReportComponent,
                    HighlevelEntityReportComponent,
                    MultipleEntityDrilldownReportComponent,
                    MultipleEntityRportComponent,
                    OpsReportComponent
                ],
                providers: [
                    MatDatepickerModule,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9yZXBvcnQtbW9kdWxlL3JlcG9ydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUN2SSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFjLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xPLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBeUN4RCxNQUFNLE9BQU8sWUFBWTs7OztJQUN2QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsRUFBRztTQUNmLENBQUM7SUFDSixDQUFDOzs7WUE5Q0YsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDYixxQkFBcUI7b0JBQ3JCLDhCQUE4QjtvQkFDOUIsc0NBQXNDO29CQUN0Qyw0QkFBNEI7b0JBQzVCLGtCQUFrQjtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxVQUFVO29CQUNWLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLGdCQUFnQjtvQkFDaEIsa0JBQWtCLENBQUMsT0FBTyxFQUFFO29CQUM1QixhQUFhO2lCQUVkO2dCQUNELGVBQWUsRUFBRSxFQUFFO2dCQUNuQixPQUFPLEVBQUU7b0JBQ1AscUJBQXFCO29CQUNyQiw4QkFBOEI7b0JBQzlCLHNDQUFzQztvQkFDdEMsNEJBQTRCO29CQUM1QixrQkFBa0I7aUJBQ25CO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxtQkFBbUI7aUJBRXBCO2FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR29vZ2xlQ2hhcnRzTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1nb29nbGUtY2hhcnRzJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IEVudGl0eVJlcG9ydENvbXBvbmVudCB9IGZyb20gJy4vZW50aXR5LXJlcG9ydC9lbnRpdHktcmVwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIaWdobGV2ZWxFbnRpdHlSZXBvcnRDb21wb25lbnQgfSBmcm9tICcuL2hpZ2hsZXZlbC1lbnRpdHktcmVwb3J0L2hpZ2hsZXZlbC1lbnRpdHktcmVwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aXBsZUVudGl0eURyaWxsZG93blJlcG9ydENvbXBvbmVudCB9IGZyb20gJy4vbXVsdGlwbGUtZW50aXR5LWRyaWxsZG93bi1yZXBvcnQvbXVsdGlwbGUtZW50aXR5LWRyaWxsZG93bi1yZXBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7IE11bHRpcGxlRW50aXR5UnBvcnRDb21wb25lbnQgfSBmcm9tICcuL211bHRpcGxlLWVudGl0eS1yZXBvcnQvbXVsdGlwbGUtZW50aXR5LXJlcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSwgTWF0RXhwYW5zaW9uTW9kdWxlLCBNYXREaXZpZGVyLCBNYXREaXZpZGVyTW9kdWxlLCBNYXRMaXN0TW9kdWxlLCBNYXRDaGlwc01vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXREYXRlcGlja2VyTW9kdWxlLCBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgT3BzUmVwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9vcHMtcmVwb3J0L29wcy1yZXBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC1tb2R1bGUvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4uL2NvcmUtbW9kdWxlL2NvcmUubW9kdWxlJztcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgRW50aXR5UmVwb3J0Q29tcG9uZW50LFxuICAgSGlnaGxldmVsRW50aXR5UmVwb3J0Q29tcG9uZW50LFxuICAgTXVsdGlwbGVFbnRpdHlEcmlsbGRvd25SZXBvcnRDb21wb25lbnQsXG4gICBNdWx0aXBsZUVudGl0eVJwb3J0Q29tcG9uZW50LFxuICAgT3BzUmVwb3J0Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIENvcmVNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSAsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBHb29nbGVDaGFydHNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE1hdEljb25Nb2R1bGVcblxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtdLFxuICBleHBvcnRzOiBbXG4gICAgRW50aXR5UmVwb3J0Q29tcG9uZW50LFxuICAgIEhpZ2hsZXZlbEVudGl0eVJlcG9ydENvbXBvbmVudCxcbiAgICBNdWx0aXBsZUVudGl0eURyaWxsZG93blJlcG9ydENvbXBvbmVudCxcbiAgICBNdWx0aXBsZUVudGl0eVJwb3J0Q29tcG9uZW50LFxuICAgIE9wc1JlcG9ydENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnMgOltcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuXG4gIF1cblxufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJlcG9ydE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWyBdXG4gICAgfTtcbiAgfVxufVxuIl19