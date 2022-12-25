import { TestBed } from '@angular/core/testing';

import { MockFixerApiService } from './mock-fixer-api.service';

describe('MockFixerApiService', () => {
  let service: MockFixerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockFixerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
