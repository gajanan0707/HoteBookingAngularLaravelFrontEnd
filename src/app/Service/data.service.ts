import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = "http://127.0.0.1:8000/api/auth/"

  constructor(private http: HttpClient) { }



  savecontactform(form: any) {
    return this.http.post(this.baseUrl + 'contact_form', form)
  }

  subscribe_user(form:any){
    return this.http.post(this.baseUrl+'subscribe_user',form)
  }

  getservice(){
    return this.http.get(this.baseUrl + 'getService')
  }

  getBookingRequest(form:any){
    return this.http.post(this.baseUrl +'room_booking_request', form)
  }

  getroom_type(){
    return this.http.get(this.baseUrl +'get_room_type')
  }


  getfeedbacktype(){
    return this.http.get(this.baseUrl+'feedback_type')
  }


  savefeedbackfrom(form:any){
    return this.http.post(this.baseUrl +'save_feedback',form)
  }

  getFeedback(){
    return this.http.get(this.baseUrl +'getFeedback')
  }

  getmybookingRequest(){
    return this.http.get(this.baseUrl +'userbookingrequest')
  }

   //delete Employyeee
   cancelBooking(id:any){
    return this.http.delete(this.baseUrl +'cancelBooking/'+id)
   }

   //getoneRequest
   getoneRequest(id:any){
     return this.http.get(this.baseUrl + 'getonebookingRequest/' +id)
   }

   //updatebookingRequest

   getBookingRequestUpdate(id:any,data:any){
     return this.http.patch(this.baseUrl +'updateBookingRequest/' +id,data)
   }

}
