import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookingRequestComponent } from './edit-booking-request.component';

describe('EditBookingRequestComponent', () => {
  let component: EditBookingRequestComponent;
  let fixture: ComponentFixture<EditBookingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookingRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
