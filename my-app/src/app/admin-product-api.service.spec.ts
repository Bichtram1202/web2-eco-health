import { TestBed } from '@angular/core/testing';

import { AdminProductApiService } from './admin-product-api.service';

describe('AdminProductApiService', () => {
  let service: AdminProductApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProductApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
