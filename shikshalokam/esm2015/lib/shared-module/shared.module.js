/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { DropdownFieldComponent } from './components/dropdown-field/dropdown-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatRadioModule, MatDividerModule, MatCheckboxModule, MatCardModule, MatTooltipModule, MatDatepickerModule, MatAutocompleteModule, MatTableModule, MatChipsModule } from '@angular/material';
import { NumberFieldComponent } from './components/number-field/number-field.component';
import { TextareaFieldComponent } from './components/textarea-field/textarea-field.component';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ParentHeadingComponent } from './components/parent-heading/parent-heading.component';
import { CoreModule } from '../core-module/core.module';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderComponent } from './components/loader/loader.component';
import { SelectFieldComponent } from './components/select-field/select-field.component';
import { FormArrayFieldComponent } from './components/form-array-field/form-array-field.component';
import { SearchDirective } from './directives/search-directive/search.directive';
import { DashboardBlocksComponent } from './components/dashboard-blocks/dashboard-blocks.component';
import { ResourceService } from './services/resource-service/resource.service';
import { ProgramsDashboardComponent } from './components/programs-dashboard/programsDashboard.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumbs.component';
import { BreadcrumbsService } from './services/breadcrumb-service/breadcrumbs.service';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { AutoCompeteComponent } from './components/auto-complete/auto-complete.component';
import { IndividualLoaderComponent } from './components/individual-loader/individual-loader.component';
import { GraphTableChartComponent } from './components/graph-table-chart/graph-table-chart.component';
import { TableComponentComponent } from './components/graph-table-chart/table-component/table-component.component';
import { ColumnGraphComponent } from './components/graph-table-chart/column-graph/column-graph.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { ShareLinkComponent } from './components/share-link/share-link.component';
import { ShareLinkViewComponent } from './components/share-link-view/share-link-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { ChipsFieldComponent } from './components/chips-field/chips-field.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
export class SharedModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [ResourceService, BreadcrumbsService]
        };
    }
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ProgramsDashboardComponent,
                    DynamicFormComponent,
                    DialogBoxComponent,
                    TextFieldComponent,
                    DropdownFieldComponent,
                    NumberFieldComponent,
                    TextareaFieldComponent,
                    ParentHeadingComponent,
                    ImageCardComponent,
                    LoaderComponent,
                    SelectFieldComponent,
                    FormArrayFieldComponent,
                    SearchDirective,
                    IndividualLoaderComponent,
                    DashboardBlocksComponent,
                    BreadcrumbComponent,
                    PaginationComponent,
                    AutoCompeteComponent,
                    DatePickerComponent,
                    TableComponentComponent,
                    ColumnGraphComponent,
                    GraphTableChartComponent,
                    ShareLinkComponent,
                    ShareLinkViewComponent,
                    ChipsFieldComponent,
                    FileUploadComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    MatChipsModule,
                    MatCheckboxModule,
                    ReactiveFormsModule,
                    MatInputModule,
                    MatProgressSpinnerModule,
                    MatButtonModule,
                    MatDividerModule,
                    MatDialogModule,
                    MatRadioModule,
                    MatTableModule,
                    MatSelectModule,
                    RouterModule,
                    CoreModule,
                    MatSnackBarModule,
                    NgxSpinnerModule,
                    MatCardModule,
                    MatTooltipModule,
                    MatDatepickerModule,
                    MatAutocompleteModule,
                    GoogleChartsModule.forRoot(),
                    MatIconModule
                ],
                entryComponents: [DialogBoxComponent, ShareLinkViewComponent],
                exports: [
                    GraphTableChartComponent,
                    DynamicFormComponent,
                    NgxSpinnerModule,
                    ParentHeadingComponent,
                    MatSnackBarModule,
                    ImageCardComponent,
                    LoaderComponent,
                    FileUploadComponent,
                    SearchDirective,
                    DashboardBlocksComponent,
                    IndividualLoaderComponent,
                    ProgramsDashboardComponent,
                    BreadcrumbComponent,
                    PaginationComponent,
                    MatTooltipModule,
                    ShareLinkComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL3NoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQWtCLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDck8sT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDOUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUE7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFB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QUNYLGNBQWM7b0JBQ2QsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2Qsd0JBQXdCO29CQUN4QixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixjQUFjO29CQUNkLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixZQUFZO29CQUNaLFVBQVU7b0JBQ1YsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLHFCQUFxQjtvQkFDckIsa0JBQWtCLENBQUMsT0FBTyxFQUFFO29CQUM1QixhQUFhO2lCQUVkO2dCQUNELGVBQWUsRUFBRSxDQUFDLGtCQUFrQixFQUFFLHNCQUFzQixDQUFDO2dCQUM3RCxPQUFPLEVBQUU7b0JBQ1Asd0JBQXdCO29CQUN4QixvQkFBb0I7b0JBQ3BCLGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0QixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2Ysd0JBQXdCO29CQUN4Qix5QkFBeUI7b0JBQ3pCLDBCQUEwQjtvQkFDMUIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsa0JBQWtCO2lCQUNuQjthQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dC1maWVsZC90ZXh0LWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wZG93bkZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duLWZpZWxkL2Ryb3Bkb3duLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlLCBNYXRSYWRpb01vZHVsZSwgTWF0RGl2aWRlck1vZHVsZSwgTWF0Q2hlY2tib3hNb2R1bGUsIE1hdENhcmRNZEltYWdlLCBNYXRDYXJkTW9kdWxlLCBNYXRUb29sdGlwTW9kdWxlLCBNYXREYXRlcGlja2VyTW9kdWxlLCBNYXRBdXRvY29tcGxldGVNb2R1bGUsIE1hdFRhYmxlTW9kdWxlLCBNYXRDaGlwc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE51bWJlckZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL251bWJlci1maWVsZC9udW1iZXItZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRhcmVhRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEtZmllbGQvdGV4dGFyZWEtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFyZW50SGVhZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJlbnQtaGVhZGluZy9wYXJlbnQtaGVhZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4uL2NvcmUtbW9kdWxlL2NvcmUubW9kdWxlJztcbmltcG9ydCB7IERpYWxvZ0JveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2ctYm94L2RpYWxvZy1ib3guY29tcG9uZW50J1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IEltYWdlQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS1jYXJkL2ltYWdlLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IE5neFNwaW5uZXJNb2R1bGUgfSBmcm9tICduZ3gtc3Bpbm5lcic7XG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LWZpZWxkL3NlbGVjdC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUFycmF5RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1hcnJheS1maWVsZC9mb3JtLWFycmF5LWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VhcmNoLWRpcmVjdGl2ZS9zZWFyY2guZGlyZWN0aXZlJztcbmltcG9ydCB7IERhc2hib2FyZEJsb2Nrc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQtYmxvY2tzL2Rhc2hib2FyZC1ibG9ja3MuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc291cmNlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcmVzb3VyY2Utc2VydmljZS9yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2dyYW1zRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2dyYW1zLWRhc2hib2FyZC9wcm9ncmFtc0Rhc2hib2FyZC5jb21wb25lbnQnXG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnXG5pbXBvcnQgeyBCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYnMuY29tcG9uZW50JztcbmltcG9ydCB7IEJyZWFkY3J1bWJzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYnJlYWRjcnVtYi1zZXJ2aWNlL2JyZWFkY3J1bWJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0b0NvbXBldGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXV0by1jb21wbGV0ZS9hdXRvLWNvbXBsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmRpdmlkdWFsTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGl2aWR1YWwtbG9hZGVyL2luZGl2aWR1YWwtbG9hZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmFwaFRhYmxlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ3JhcGgtdGFibGUtY2hhcnQvZ3JhcGgtdGFibGUtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyYXBoLXRhYmxlLWNoYXJ0L3RhYmxlLWNvbXBvbmVudC90YWJsZS1jb21wb25lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtbkdyYXBoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyYXBoLXRhYmxlLWNoYXJ0L2NvbHVtbi1ncmFwaC9jb2x1bW4tZ3JhcGguY29tcG9uZW50JztcbmltcG9ydCB7IEdvb2dsZUNoYXJ0c01vZHVsZSB9IGZyb20gJ2FuZ3VsYXItZ29vZ2xlLWNoYXJ0cyc7XG5pbXBvcnQgeyBTaGFyZUxpbmtDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hhcmUtbGluay9zaGFyZS1saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZUxpbmtWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlLWxpbmstdmlldy9zaGFyZS1saW5rLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgQ2hpcHNGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGlwcy1maWVsZC9jaGlwcy1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsZVVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUHJvZ3JhbXNEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgRHluYW1pY0Zvcm1Db21wb25lbnQsXG4gICAgRGlhbG9nQm94Q29tcG9uZW50LFxuICAgIFRleHRGaWVsZENvbXBvbmVudCxcbiAgICBEcm9wZG93bkZpZWxkQ29tcG9uZW50LFxuICAgIE51bWJlckZpZWxkQ29tcG9uZW50LFxuICAgIFRleHRhcmVhRmllbGRDb21wb25lbnQsXG4gICAgUGFyZW50SGVhZGluZ0NvbXBvbmVudCxcbiAgICBJbWFnZUNhcmRDb21wb25lbnQsXG4gICAgTG9hZGVyQ29tcG9uZW50LFxuICAgIFNlbGVjdEZpZWxkQ29tcG9uZW50LFxuICAgIEZvcm1BcnJheUZpZWxkQ29tcG9uZW50LFxuICAgIFNlYXJjaERpcmVjdGl2ZSxcbiAgICBJbmRpdmlkdWFsTG9hZGVyQ29tcG9uZW50LFxuICAgIERhc2hib2FyZEJsb2Nrc0NvbXBvbmVudCxcbiAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxuICAgIFBhZ2luYXRpb25Db21wb25lbnQsXG4gICAgQXV0b0NvbXBldGVDb21wb25lbnQsXG4gICAgRGF0ZVBpY2tlckNvbXBvbmVudCxcbiAgICBUYWJsZUNvbXBvbmVudENvbXBvbmVudCxcbiAgICBDb2x1bW5HcmFwaENvbXBvbmVudCxcbiAgICBHcmFwaFRhYmxlQ2hhcnRDb21wb25lbnQsXG4gICAgU2hhcmVMaW5rQ29tcG9uZW50LFxuICAgIFNoYXJlTGlua1ZpZXdDb21wb25lbnQsXG4gICAgQ2hpcHNGaWVsZENvbXBvbmVudCxcbiAgICBGaWxlVXBsb2FkQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcblxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBDb3JlTW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIE5neFNwaW5uZXJNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIEdvb2dsZUNoYXJ0c01vZHVsZS5mb3JSb290KCksXG4gICAgTWF0SWNvbk1vZHVsZVxuXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0RpYWxvZ0JveENvbXBvbmVudCwgU2hhcmVMaW5rVmlld0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtcbiAgICBHcmFwaFRhYmxlQ2hhcnRDb21wb25lbnQsXG4gICAgRHluYW1pY0Zvcm1Db21wb25lbnQsXG4gICAgTmd4U3Bpbm5lck1vZHVsZSxcbiAgICBQYXJlbnRIZWFkaW5nQ29tcG9uZW50LFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIEltYWdlQ2FyZENvbXBvbmVudCxcbiAgICBMb2FkZXJDb21wb25lbnQsXG4gICAgRmlsZVVwbG9hZENvbXBvbmVudCxcbiAgICBTZWFyY2hEaXJlY3RpdmUsXG4gICAgRGFzaGJvYXJkQmxvY2tzQ29tcG9uZW50LFxuICAgIEluZGl2aWR1YWxMb2FkZXJDb21wb25lbnQsXG4gICAgUHJvZ3JhbXNEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgU2hhcmVMaW5rQ29tcG9uZW50XG4gIF1cblxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNoYXJlZE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1Jlc291cmNlU2VydmljZSwgQnJlYWRjcnVtYnNTZXJ2aWNlXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==