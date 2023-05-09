import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHoSoComponent } from './edit-ho-so.component';

describe('EditHoSoComponent', () => {
  let component: EditHoSoComponent;
  let fixture: ComponentFixture<EditHoSoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHoSoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHoSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
