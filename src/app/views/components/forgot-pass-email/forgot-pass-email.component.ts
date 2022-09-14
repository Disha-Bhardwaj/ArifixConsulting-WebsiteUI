import { Component, OnInit } from '@angular/core';
import { NgxOtpInputConfig } from 'ngx-otp-input';

@Component({
  selector: 'app-forgot-pass-email',
  templateUrl: './forgot-pass-email.component.html',
  styleUrls: ['./forgot-pass-email.component.css']
})
export class ForgotPassEmailComponent implements OnInit {

  showNumberOption = false;
  showOTP = false;
  constructor() { }

  ngOnInit(): void {
  }
  changeOption(event: any) {
    if (event.target.checked) {
      this.showNumberOption = true
    } else {
      this.showNumberOption = false
    }
  }
  showOTPScreen(){
    this.showOTP = true
  }

  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 4,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };

  handeOtpChange(value: string[]): void {
    console.log(value);
  }

  handleFillEvent(value: string): void {
    console.log(value);
  }
}
