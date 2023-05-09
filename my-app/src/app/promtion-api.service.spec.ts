import { TestBed } from '@angular/core/testing';

import { PromtionApiService } from './promtion-api.service';

describe('PromtionApiService', () => {
  let service: PromtionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromtionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
