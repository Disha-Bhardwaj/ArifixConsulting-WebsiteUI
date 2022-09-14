import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.formInitialize();
  }
  // form initialize
  formInitialize() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
    this.loginForm = this.fb.group({
      email: [''],
      areaCode: [''],
      phone: [''],
      password: [''],
      repeatPassword: [''],
    })
  }
  // on login
  login() {
    console.log(this.loginForm.value)
  }
  // on register
  register() {
    console.log(this.registrationForm.value)
  }
  // viewPass
  viewPassword(clicked: any){
    if(clicked == 'password'){
      var passwordInput: any = document.getElementById('passwordInput');
      var passwordStatus: any = document.getElementById('passStatus');
      if(passwordInput.type == 'password'){
        passwordInput.type = 'text';
        passwordStatus.src = 'assets/Icons/eye.png'
      } else{
        passwordInput.type = 'password';
        passwordStatus.src = 'assets/Icons/closeEye.png'
      }
    } else{
      var repeatPassword: any = document.getElementById('repeatPassword');
      var repeatPassStatus: any = document.getElementById('repeatPassStatus');
      if(repeatPassword.type == 'password'){
        repeatPassword.type = 'text';
        repeatPassStatus.src = 'assets/Icons/eye.png'
      } else{
        repeatPassword.type = 'password';
        repeatPassStatus.src = 'assets/Icons/closeEye.png'
      }
    }
    
  }
}
