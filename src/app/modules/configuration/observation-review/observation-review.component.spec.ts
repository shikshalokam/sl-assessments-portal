import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationReviewComponent } from './observation-review.component';

describe('ObservationReviewComponent', () => {
  let component: ObservationReviewComponent;
  let fixture: ComponentFixture<ObservationReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
