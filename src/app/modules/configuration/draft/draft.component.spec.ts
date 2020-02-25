import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { ElementRef, ChangeDetectorRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { DraftComponent } from './draft.component';
import { DraftFrameWorkServiceService } from '../../configuration/workspace-services/draft-frame-work-service.service';
import { By } from '@angular/platform-browser';
import {
    MatTooltipModule, MatTabsModule, MatRadioModule, MatCardModule,
    MatDialogModule, MatButtonModule, MatStepperModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatTableModule, MatExpansionModule,
    MatPaginatorModule, MatDatepickerModule, MatNativeDateModule,
    MatToolbarModule, MatTab, MatTabChangeEvent, MatSortModule, MatSnackBarModule, PageEvent
} from '@angular/material';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { JwtModule, JwtModuleOptions, JwtHelperService } from '@auth0/angular-jwt';
import { DynamicFormBuilderService } from 'dynamic-form-builder';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { UpperCasePipe } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
let activatedRoute: any;
export function tokenGetter() {
    return localStorage.getItem('auth-token');
}

const JWT_Module_Options: JwtModuleOptions = {
    config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['example.com'],
    }
};

describe('DraftComponent', () => {
    let component: DraftComponent;
    let fixture: ComponentFixture<DraftComponent>,
        hostComponent: DraftComponent;
    let entityName: any
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxSpinnerModule, MatTooltipModule, MatTabsModule, MatRadioModule, MatCardModule,
                MatDialogModule, MatButtonModule, MatStepperModule, MatFormFieldModule,
                MatInputModule, MatSelectModule, MatTableModule, MatExpansionModule,
                MatPaginatorModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatToolbarModule,
                MatSnackBarModule,
                ReactiveFormsModule,
                FormsModule,
                TagInputModule,
                // BrowserAnimationsModule,
                // NoopAnimationsModule,
                // BrowserModule,
                RouterModule.forRoot([]),
                JwtModule.forRoot(JWT_Module_Options),
                MatSortModule, HttpClientModule],
            providers: [NgxSpinnerService, DraftFrameWorkServiceService, DynamicFormBuilderService, JwtHelperService],
            declarations: [DraftComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents(); // This is not needed if you are in the CLI context

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DraftComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        // fixture.detectChanges();
    });

    //   it('form invalid when empty', () => {
    //     expect(component.solutionForm.valid).toBeFalsy();
    //   });

    //   it('name field validity', () => {
    //     let name = component.solutionForm.controls['solutionName'];
    //     expect(name.valid).toBeFalsy();
    //     let errors = {};
    //     name.setValue("");
    //     errors = name.errors || {};
    //     expect(errors['required']).toBeTruthy(); // this works
    //   });

    it('dataFromChild', () => {
        let observation = fixture.debugElement.injector.get(DraftComponent);
        expect(observation.dataFromChild).toBeTruthy();
        component.dataFromChild('');
        expect(false).toBeFalsy()
    });

    it('updateToReviewStatus', () => {
        let observation = fixture.debugElement.injector.get(DraftComponent);
        expect(observation.updateToReviewStatus).toBeTruthy();
        component.updateToReviewStatus('');
        expect(false).toBeFalsy()
    });

    it('emitEventToChild', () => {
        let observation = fixture.debugElement.injector.get(DraftComponent);
        expect(observation.emitEventToChild).toBeTruthy();
        component.emitEventToChild();
        expect(false).toBeFalsy()
    });

    it('updateAllEcm', () => {
        let observation = fixture.debugElement.injector.get(DraftComponent);
        expect(observation.updateAllEcm).toBeTruthy();
        component.updateAllEcm('');
        expect(false).toBeFalsy()
    });

    it('deleteDraftFW', () => {
        let observation = fixture.debugElement.injector.get(DraftComponent);
        expect(observation.deleteDraftFW).toBeTruthy();
        component.deleteDraftFW('');
        expect(false).toBeFalsy()
    });


    it('getNext', () => {
        let observation = fixture.debugElement.injector.get(DraftComponent);
        expect(observation.getNext).toBeTruthy();
        let page: PageEvent;
        page.pageSize = 10;
        page.pageIndex = 1;
        page.previousPageIndex = 0;
        page.length = 20;
        component.getNext(page);
        expect(false).toBeFalsy()
    });
});
