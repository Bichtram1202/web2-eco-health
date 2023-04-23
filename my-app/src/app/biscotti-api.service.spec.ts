import { TestBed } from '@angular/core/testing';

import { BiscottiAPIService } from './biscotti-api.service';

describe('BiscottiAPIService', () => {
  let service: BiscottiAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiscottiAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
