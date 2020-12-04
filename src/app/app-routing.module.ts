import { EditBookingRequestComponent } from './edit-booking-request/edit-booking-request.component';
import { BlogComponent } from './blog/blog.component';
import { GallaryComponent } from './gallary/gallary.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContectComponent } from './contect/contect.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RoomBookingRequestComponent } from './room-booking-request/room-booking-request.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard } from './guard/auth.guard';
import { BookingStatusComponent } from './booking-status/booking-status.component';

const routes: Routes = [
  { 'path': '', 'component': HomeComponent ,canActivate: [AuthGuard],},
  { 'path': 'login', 'component': LoginComponent },
  { 'path': 'signup', 'component': SignupComponent },
  { 'path': 'about', 'component': AboutComponent,canActivate: [AuthGuard], },
  { 'path': 'contact', 'component': ContectComponent,canActivate: [AuthGuard]},
  { 'path': 'room-booking-request', 'component': RoomBookingRequestComponent,canActivate: [AuthGuard] },
  { 'path': 'feedback', 'component': FeedbackComponent,canActivate: [AuthGuard] },
  { 'path': 'gallary', 'component': GallaryComponent,canActivate: [AuthGuard] },
  { 'path': 'blog', 'component': BlogComponent,canActivate: [AuthGuard] },
  { 'path': 'bookingStatus', 'component': BookingStatusComponent,canActivate: [AuthGuard] },
  { 'path': 'editbooking/:id', 'component': EditBookingRequestComponent,canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
