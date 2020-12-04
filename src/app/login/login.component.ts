import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false
  SelectedImage:any=File;
  public imagePath:any;
  constructor(private authService:AuthService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

   //------------------Create Login Form--------------------------------
   loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  get myForm() {
    return this.loginForm.controls;
  }


  //----------------------Calling login Function---------------------------
  loginUser() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return
    }
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (data: any) => {
        let re:any=data
        localStorage.setItem("token",re.access_token)
        localStorage.setItem("signinUser",JSON.stringify(re.user))
        this.toastr.success('SuccessFully Login!');
        this.router.navigateByUrl('/')
        setTimeout(()=>{
          window.location.reload();
        }, 100);
        },error=>{
          this.toastr.error(error.error.error);
        }
      
      );
    }
  }

}
