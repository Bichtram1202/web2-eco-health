import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypicalDetailComponent } from './product-typical-detail.component';

describe('ProductTypicalDetailComponent', () => {
  let component: ProductTypicalDetailComponent;
  let fixture: ComponentFixture<ProductTypicalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTypicalDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTypicalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
