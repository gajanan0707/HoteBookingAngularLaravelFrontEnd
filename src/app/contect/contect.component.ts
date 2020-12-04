import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.scss']
})
export class ContectComponent implements OnInit {
  submitted = false
  constructor(private fb: FormBuilder, private toastr: ToastrService, private dataservice: DataService) { }

  ngOnInit(): void {
  }

  //------------------Create contactForm Form--------------------------------
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    mobile_no: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  get myForm() {
    return this.contactForm.controls;
  }

  save_contact_form() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return
    }
    if (this.contactForm.valid) {
      this.dataservice.savecontactform(this.contactForm.value).subscribe(res => {
        this.toastr.success("successfully Submit Contact Form")
        if (res) [
          this.contactForm.reset()
        ]
      })
    }

  }
}
