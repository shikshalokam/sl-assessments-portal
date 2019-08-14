import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationUtilitiesComponent } from './observation-utilities.component';

describe('ObservationUtilitiesComponent', () => {
  let component: ObservationUtilitiesComponent;
  let fixture: ComponentFixture<ObservationUtilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationUtilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
