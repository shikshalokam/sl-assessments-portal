import { TestBed } from '@angular/core/testing';

import { DraftFrameWorkServiceService } from './draft-frame-work-service.service';

describe('DraftFrameWorkServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DraftFrameWorkServiceService = TestBed.get(DraftFrameWorkServiceService);
    expect(service).toBeTruthy();
  });
});
