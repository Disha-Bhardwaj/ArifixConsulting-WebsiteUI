import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidator} from "../../../shared/custom-validator";
import {LoginService} from "../../../services/login.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    emailAdd: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });


  registerForm: FormGroup = new FormGroup({
      emailAdd: new FormControl('', [Validators.required, Validators.email]),
      phoneExt: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      changePassword: new FormControl('', [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        Validators.pattern("^(?![^A-Za-z]+$)(?![^0-9]+$)[0-9A-Za-z]+$")]),
      repeatPassword: new FormControl('', [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        Validators.pattern("^(?![^A-Za-z]+$)(?![^0-9]+$)[0-9A-Za-z]+$"),
      ]),
    },
    // @ts-ignore
    CustomValidator.mustMatch('changePassword', 'repeatPassword'));

  constructor(private login : LoginService,private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  get r() {
    return this.registerForm.controls;
  }

  onRegisterClick() {
  this.toastr.error('Error while registration', 'Registration Error');
  }

  onLoginClick() {
    this.toastr.success('Login Successful', 'Login');
  }
}
