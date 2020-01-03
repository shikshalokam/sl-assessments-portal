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
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    /**
     * @return {?}
     */
    SharedModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: SharedModule,
            providers: [ResourceService, BreadcrumbsService]
        };
    };
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
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL3NoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQWtCLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDck8sT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDOUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUE7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFB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LGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2Qsd0JBQXdCO3dCQUN4QixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixZQUFZO3dCQUNaLFVBQVU7d0JBQ1YsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsa0JBQWtCLENBQUMsT0FBTyxFQUFFO3dCQUM1QixhQUFhO3FCQUVkO29CQUNELGVBQWUsRUFBRSxDQUFDLGtCQUFrQixFQUFFLHNCQUFzQixDQUFDO29CQUM3RCxPQUFPLEVBQUU7d0JBQ1Asd0JBQXdCO3dCQUN4QixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsc0JBQXNCO3dCQUN0QixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2Ysd0JBQXdCO3dCQUN4Qix5QkFBeUI7d0JBQ3pCLDBCQUEwQjt3QkFDMUIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3FCQUNuQjtpQkFFRjs7SUFRRCxtQkFBQztDQUFBLEFBcEZELElBb0ZDO1NBUFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RleHQtZmllbGQvdGV4dC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJvcGRvd25GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kcm9wZG93bi1maWVsZC9kcm9wZG93bi1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSwgTWF0UmFkaW9Nb2R1bGUsIE1hdERpdmlkZXJNb2R1bGUsIE1hdENoZWNrYm94TW9kdWxlLCBNYXRDYXJkTWRJbWFnZSwgTWF0Q2FyZE1vZHVsZSwgTWF0VG9vbHRpcE1vZHVsZSwgTWF0RGF0ZXBpY2tlck1vZHVsZSwgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLCBNYXRUYWJsZU1vZHVsZSwgTWF0Q2hpcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBOdW1iZXJGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9udW1iZXItZmllbGQvbnVtYmVyLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0YXJlYUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RleHRhcmVhLWZpZWxkL3RleHRhcmVhLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhcmVudEhlYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFyZW50LWhlYWRpbmcvcGFyZW50LWhlYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuLi9jb3JlLW1vZHVsZS9jb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBEaWFsb2dCb3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nLWJveC9kaWFsb2ctYm94LmNvbXBvbmVudCdcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQgeyBNYXRTbmFja0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBJbWFnZUNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2UtY2FyZC9pbWFnZS1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hTcGlubmVyTW9kdWxlIH0gZnJvbSAnbmd4LXNwaW5uZXInO1xuaW1wb3J0IHsgTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC1maWVsZC9zZWxlY3QtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1BcnJheUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0tYXJyYXktZmllbGQvZm9ybS1hcnJheS1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlYXJjaC1kaXJlY3RpdmUvc2VhcmNoLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRCbG9ja3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkLWJsb2Nrcy9kYXNoYm9hcmQtYmxvY2tzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Jlc291cmNlLXNlcnZpY2UvcmVzb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9ncmFtc0Rhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9ncmFtcy1kYXNoYm9hcmQvcHJvZ3JhbXNEYXNoYm9hcmQuY29tcG9uZW50J1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50J1xuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcmVhZGNydW1ic1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2JyZWFkY3J1bWItc2VydmljZS9icmVhZGNydW1icy5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEF1dG9Db21wZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F1dG8tY29tcGxldGUvYXV0by1jb21wbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5kaXZpZHVhbExvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRpdmlkdWFsLWxvYWRlci9pbmRpdmlkdWFsLWxvYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JhcGhUYWJsZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyYXBoLXRhYmxlLWNoYXJ0L2dyYXBoLXRhYmxlLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ncmFwaC10YWJsZS1jaGFydC90YWJsZS1jb21wb25lbnQvdGFibGUtY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW5HcmFwaENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ncmFwaC10YWJsZS1jaGFydC9jb2x1bW4tZ3JhcGgvY29sdW1uLWdyYXBoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHb29nbGVDaGFydHNNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWdvb2dsZS1jaGFydHMnO1xuaW1wb3J0IHsgU2hhcmVMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlLWxpbmsvc2hhcmUtbGluay5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVMaW5rVmlld0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaGFyZS1saW5rLXZpZXcvc2hhcmUtbGluay1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IENoaXBzRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hpcHMtZmllbGQvY2hpcHMtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbGVVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFByb2dyYW1zRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIER5bmFtaWNGb3JtQ29tcG9uZW50LFxuICAgIERpYWxvZ0JveENvbXBvbmVudCxcbiAgICBUZXh0RmllbGRDb21wb25lbnQsXG4gICAgRHJvcGRvd25GaWVsZENvbXBvbmVudCxcbiAgICBOdW1iZXJGaWVsZENvbXBvbmVudCxcbiAgICBUZXh0YXJlYUZpZWxkQ29tcG9uZW50LFxuICAgIFBhcmVudEhlYWRpbmdDb21wb25lbnQsXG4gICAgSW1hZ2VDYXJkQ29tcG9uZW50LFxuICAgIExvYWRlckNvbXBvbmVudCxcbiAgICBTZWxlY3RGaWVsZENvbXBvbmVudCxcbiAgICBGb3JtQXJyYXlGaWVsZENvbXBvbmVudCxcbiAgICBTZWFyY2hEaXJlY3RpdmUsXG4gICAgSW5kaXZpZHVhbExvYWRlckNvbXBvbmVudCxcbiAgICBEYXNoYm9hcmRCbG9ja3NDb21wb25lbnQsXG4gICAgQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgIEF1dG9Db21wZXRlQ29tcG9uZW50LFxuICAgIERhdGVQaWNrZXJDb21wb25lbnQsXG4gICAgVGFibGVDb21wb25lbnRDb21wb25lbnQsXG4gICAgQ29sdW1uR3JhcGhDb21wb25lbnQsXG4gICAgR3JhcGhUYWJsZUNoYXJ0Q29tcG9uZW50LFxuICAgIFNoYXJlTGlua0NvbXBvbmVudCxcbiAgICBTaGFyZUxpbmtWaWV3Q29tcG9uZW50LFxuICAgIENoaXBzRmllbGRDb21wb25lbnQsXG4gICAgRmlsZVVwbG9hZENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG5cbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdERpdmlkZXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQ29yZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBOZ3hTcGlubmVyTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBHb29nbGVDaGFydHNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE1hdEljb25Nb2R1bGVcblxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtEaWFsb2dCb3hDb21wb25lbnQsIFNoYXJlTGlua1ZpZXdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbXG4gICAgR3JhcGhUYWJsZUNoYXJ0Q29tcG9uZW50LFxuICAgIER5bmFtaWNGb3JtQ29tcG9uZW50LFxuICAgIE5neFNwaW5uZXJNb2R1bGUsXG4gICAgUGFyZW50SGVhZGluZ0NvbXBvbmVudCxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBJbWFnZUNhcmRDb21wb25lbnQsXG4gICAgTG9hZGVyQ29tcG9uZW50LFxuICAgIEZpbGVVcGxvYWRDb21wb25lbnQsXG4gICAgU2VhcmNoRGlyZWN0aXZlLFxuICAgIERhc2hib2FyZEJsb2Nrc0NvbXBvbmVudCxcbiAgICBJbmRpdmlkdWFsTG9hZGVyQ29tcG9uZW50LFxuICAgIFByb2dyYW1zRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXG4gICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIFNoYXJlTGlua0NvbXBvbmVudFxuICBdXG5cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaGFyZWRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtSZXNvdXJjZVNlcnZpY2UsIEJyZWFkY3J1bWJzU2VydmljZV1cbiAgICB9O1xuICB9XG59XG4iXX0=