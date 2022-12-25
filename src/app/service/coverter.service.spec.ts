import { TestBed } from '@angular/core/testing';

import { CoverterService } from './coverter.service';

describe('CoverterServiceService', () => {
  let service: CoverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
