import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-room-booking-request',
  templateUrl: './room-booking-request.component.html',
  styleUrls: ['./room-booking-request.component.scss']
})
export class RoomBookingRequestComponent implements OnInit {
  // booking_request_from: FormGroup
  room_type: any = [{ 'id': '', 'titile': '' }];
  loginuser:any
  getloginuserid: any;
  submitted = false;

  constructor(private fb: FormBuilder, private dataservice: DataService, 
    private toast: ToastrService, private route:Router) {}
    


  ngOnInit(): void {
    this.dataservice.getroom_type().subscribe((res: any) => {
      let resp1 = Array.from(Object.keys(res), k => res[k]);
      this.room_type = resp1[2]
    })
    this.loginuser=JSON.parse(localStorage.getItem("signinUser")|| '{}').id

  }

    booking_request_from = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    mobile_no:  new FormControl('', [Validators.required]),
    address:  new FormControl('', [Validators.required]),
    from_date: new FormControl('', [Validators.required]),
    to_date:  new FormControl('', [Validators.required]),
    no_of_member:  new FormControl('', [Validators.required]),
    no_of_rooms:  new FormControl('', [Validators.required]),
    room_type:  new FormControl(''),
    userId: new FormControl('', [Validators.required]),
  })


  get myForm() {
    return this.booking_request_from.controls;
  }

  booking_request(booking_request_from: any) {
    this.submitted = true
   this.booking_request_from.value.userId=this.loginuser
   if(this.booking_request_from.invalid){
     return
   }
   if(this.booking_request_from.valid){
     this.dataservice.getBookingRequest(booking_request_from.value).subscribe(res => {
       this.toast.success("sucessfully Booking")
       this.route.navigateByUrl('/bookingStatus')
     })
   }

  }

}
