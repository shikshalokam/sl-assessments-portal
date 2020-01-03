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
var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    /**
     * @return {?}
     */
    ReportModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ReportModule,
            providers: []
        };
    };
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
    return ReportModule;
}());
export { ReportModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9yZXBvcnQtbW9kdWxlL3JlcG9ydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUN2SSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFjLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xPLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hEO0lBQUE7SUErQ0EsQ0FBQzs7OztJQU5RLG9CQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsRUFBRztTQUNmLENBQUM7SUFDSixDQUFDOztnQkE5Q0YsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDYixxQkFBcUI7d0JBQ3JCLDhCQUE4Qjt3QkFDOUIsc0NBQXNDO3dCQUN0Qyw0QkFBNEI7d0JBQzVCLGtCQUFrQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxVQUFVO3dCQUNWLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsa0JBQWtCLENBQUMsT0FBTyxFQUFFO3dCQUM1QixhQUFhO3FCQUVkO29CQUNELGVBQWUsRUFBRSxFQUFFO29CQUNuQixPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3dCQUNyQiw4QkFBOEI7d0JBQzlCLHNDQUFzQzt3QkFDdEMsNEJBQTRCO3dCQUM1QixrQkFBa0I7cUJBQ25CO29CQUNELFNBQVMsRUFBRTt3QkFDVCxtQkFBbUI7cUJBRXBCO2lCQUVGOztJQVFELG1CQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0FQWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdvb2dsZUNoYXJ0c01vZHVsZSB9IGZyb20gJ2FuZ3VsYXItZ29vZ2xlLWNoYXJ0cyc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBFbnRpdHlSZXBvcnRDb21wb25lbnQgfSBmcm9tICcuL2VudGl0eS1yZXBvcnQvZW50aXR5LXJlcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGlnaGxldmVsRW50aXR5UmVwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9oaWdobGV2ZWwtZW50aXR5LXJlcG9ydC9oaWdobGV2ZWwtZW50aXR5LXJlcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlwbGVFbnRpdHlEcmlsbGRvd25SZXBvcnRDb21wb25lbnQgfSBmcm9tICcuL211bHRpcGxlLWVudGl0eS1kcmlsbGRvd24tcmVwb3J0L211bHRpcGxlLWVudGl0eS1kcmlsbGRvd24tcmVwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aXBsZUVudGl0eVJwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9tdWx0aXBsZS1lbnRpdHktcmVwb3J0L211bHRpcGxlLWVudGl0eS1yZXBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUsIE1hdEV4cGFuc2lvbk1vZHVsZSwgTWF0RGl2aWRlciwgTWF0RGl2aWRlck1vZHVsZSwgTWF0TGlzdE1vZHVsZSwgTWF0Q2hpcHNNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0RGF0ZXBpY2tlck1vZHVsZSwgTWF0TmF0aXZlRGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE9wc1JlcG9ydENvbXBvbmVudCB9IGZyb20gJy4vb3BzLXJlcG9ydC9vcHMtcmVwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQtbW9kdWxlL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuLi9jb3JlLW1vZHVsZS9jb3JlLm1vZHVsZSc7XG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgIEVudGl0eVJlcG9ydENvbXBvbmVudCxcbiAgIEhpZ2hsZXZlbEVudGl0eVJlcG9ydENvbXBvbmVudCxcbiAgIE11bHRpcGxlRW50aXR5RHJpbGxkb3duUmVwb3J0Q29tcG9uZW50LFxuICAgTXVsdGlwbGVFbnRpdHlScG9ydENvbXBvbmVudCxcbiAgIE9wc1JlcG9ydENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBDb3JlTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUgLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdERpdmlkZXJNb2R1bGUsXG4gICAgR29vZ2xlQ2hhcnRzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBNYXRJY29uTW9kdWxlXG5cbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXSxcbiAgZXhwb3J0czogW1xuICAgIEVudGl0eVJlcG9ydENvbXBvbmVudCxcbiAgICBIaWdobGV2ZWxFbnRpdHlSZXBvcnRDb21wb25lbnQsXG4gICAgTXVsdGlwbGVFbnRpdHlEcmlsbGRvd25SZXBvcnRDb21wb25lbnQsXG4gICAgTXVsdGlwbGVFbnRpdHlScG9ydENvbXBvbmVudCxcbiAgICBPcHNSZXBvcnRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzIDpbXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcblxuICBdXG5cbn0pXG5leHBvcnQgY2xhc3MgUmVwb3J0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSZXBvcnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==