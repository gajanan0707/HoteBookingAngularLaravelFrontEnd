import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-edit-booking-request',
  templateUrl: './edit-booking-request.component.html',
  styleUrls: ['./edit-booking-request.component.scss']
})
export class EditBookingRequestComponent implements OnInit {
  id:any
  data: any
  requestdata:any
  constructor(private route:ActivatedRoute,private dataservice: DataService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getdata()
  }

  getdata(){
    this.dataservice.getoneRequest(this.id).subscribe(res=>{
      this.data=res;
      this.requestdata=this.data.data;
    })
  }

  updateData(){
    this.dataservice.getBookingRequestUpdate(this.id, this.requestdata).subscribe(res=>{
       this.toast.success("Successfully Update Booking Request")
    })
   }

}
