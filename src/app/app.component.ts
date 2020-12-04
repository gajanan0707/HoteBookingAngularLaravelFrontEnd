import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { DataService } from './Service/data.service';
import { Router } from '@angular/router';
import { AuthService } from './Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontendhms';
  isLogin:any
  submitted = false
  user:any
  constructor(public fb: FormBuilder, private http: HttpClient, 
    private toastr: ToastrService, private dataservice: DataService,private route:Router,private authserivce:AuthService) {
  }

  ngOnInit(): void {
    this.isLogin=localStorage.getItem("signinUser")
    

  }

   //------------------Create contactForm Form--------------------------------
   subscribeForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });

  get myForm() {
    return this.subscribeForm.controls;
  }

  subscribeuser(){
    this.submitted=true
    if(this.subscribeForm.invalid){
      return 
    }
    else{
      this.dataservice.subscribe_user(this.subscribeForm.value).subscribe(res=>{
        if(res){
          this.toastr.success("Thanks For Subscribe")
        }
      })
    }
  }

  logout(){
    this.authserivce.logout().subscribe(res=>{
      localStorage.removeItem("token")
      localStorage.removeItem("signinUser")
      this.route.navigateByUrl("/login")
      setTimeout(()=>{
        window.location.reload();
      }, 100);
      this.toastr.success('SuccessFully Logout!');
    },error=>{
      this.toastr.error(error.error.error)
    })
    }

}
