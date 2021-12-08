import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
submitted = false;
  constructor(private fb:FormBuilder, private loginService: LoginService, private router:Router, private toastr: ToastrService) { 
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      password:['',[Validators.required, Validators.minLength(8),Validators.maxLength(10)]]
    })
  }

  ngOnInit(): void {
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.valid) {
      const url:string = 'http://localhost:8082/api/login';
this.loginService.login(url,this.loginForm.value).subscribe(res => {
  if(res.status === 200 && res.body.message === 'login successfuuly') {
    localStorage.setItem('token', res.body.token)
     this.router.navigate(['/dashboard'])
    
      } else {
        this.toastr.error(res.body.message )
      }
    }, err => {
      this.toastr.error(err)
    })
    }

   
}
}
