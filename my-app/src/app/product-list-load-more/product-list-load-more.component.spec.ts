import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListLoadMoreComponent } from './product-list-load-more.component';

describe('ProductListLoadMoreComponent', () => {
  let component: ProductListLoadMoreComponent;
  let fixture: ComponentFixture<ProductListLoadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListLoadMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListLoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
