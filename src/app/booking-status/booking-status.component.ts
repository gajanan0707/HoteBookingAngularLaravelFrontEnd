import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.scss']
})
export class BookingStatusComponent implements OnInit {
  getalldata:any=[]
  getstatus="sucess";
  showSpinner: boolean = true;
  constructor(public dataservice:DataService,private toastr: ToastrService) { }

  ngOnInit(): void {
   this.getdata()
  }

getdata(){
  this.dataservice.getmybookingRequest().subscribe(data=>{
    this.getalldata=data
    this.showSpinner = false
  })
}

  cancelBookingRequest(id:any){
    this.dataservice.cancelBooking(id).subscribe(res=>{
      this.getdata()
      this.toastr.success("successfully Cancel Booking Request")
    })
  }

  editBooking(id:any){
    console.log(id)
  }

}
