import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from './services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm:FormGroup;
  constructor(private readonly fb:FormBuilder, private signupService: SignupService, private readonly router:Router, private toastr: ToastrService) { 
    this.signupForm = this.fb.group({
      firstname:['', [Validators.required]],
      lastname:['',[Validators.required]],
      email:['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      mobile:['', [Validators.required]],
      password:['', [Validators.required]],
      gender:['male', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  register() {
if(!this.signupForm.invalid) {
  const url:string = 'http://localhost:8082/api/signup';
this.signupService.register(url,this.signupForm.value).subscribe(res => {
  console.log(res)
  if(res.status === 200) {
this.toastr.success(res.body.message);
this.router.navigate(['/login'])

  } else {

  }
}, err => {
  alert(err)
})
}
  }
}
