import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../Service/data.service';
import { NgxStarRatingModule } from 'ngx-star-rating';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedback_type: any = [{ 'id': '', 'title': '' }];
  // feedback_form:FormGroup;
  submitted = false
   rating = 0;
  constructor(private dataservice: DataService, private fb: FormBuilder, private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.dataservice.getfeedbacktype().subscribe((res: any) => {
      let resp1 = Array.from(Object.keys(res), k => res[k]);
      this.feedback_type = resp1[2]
    })
  }

  //------------------Create Feedback Form--------------------------------
  feedback_form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    mobile_no: new FormControl('', [Validators.required]),
    feedback_type: new FormControl(''),
    message: new FormControl('', [Validators.required]),
    rating: new FormControl(['', Validators.required]),
  });

  get myForm() {
    return this.feedback_form.controls;
  }


  savefeedback() {
    this.submitted = true;
    if (this.feedback_form.invalid) {
      return
    }
    if (this.feedback_form.valid) {
      this.dataservice.savefeedbackfrom(this.feedback_form.value).subscribe(res => {
        this.toast.success("Successfully submit Feedback")
        if (res) {

          this.feedback_form.reset();
        }
      })
    }

  }



}
