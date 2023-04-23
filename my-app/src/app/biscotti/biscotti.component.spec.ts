import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiscottiComponent } from './biscotti.component';

describe('BiscottiComponent', () => {
  let component: BiscottiComponent;
  let fixture: ComponentFixture<BiscottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiscottiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiscottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
