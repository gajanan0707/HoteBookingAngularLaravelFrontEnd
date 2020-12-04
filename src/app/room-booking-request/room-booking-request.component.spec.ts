import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingRequestComponent } from './room-booking-request.component';

describe('RoomBookingRequestComponent', () => {
  let component: RoomBookingRequestComponent;
  let fixture: ComponentFixture<RoomBookingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomBookingRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBookingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
