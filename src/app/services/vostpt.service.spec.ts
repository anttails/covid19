import { TestBed } from '@angular/core/testing';

import { VostptService } from './vostpt.service';

describe('VostptService', () => {
  let service: VostptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VostptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
