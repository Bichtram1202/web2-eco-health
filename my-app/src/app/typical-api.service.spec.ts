import { TestBed } from '@angular/core/testing';

import { TypicalAPIService } from './typical-api.service';

describe('TypicalAPIService', () => {
  let service: TypicalAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypicalAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
