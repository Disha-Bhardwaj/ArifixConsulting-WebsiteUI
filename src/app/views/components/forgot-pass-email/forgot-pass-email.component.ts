import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-pass-email',
  templateUrl: './forgot-pass-email.component.html',
  styleUrls: ['./forgot-pass-email.component.css']
})
export class ForgotPassEmailComponent implements OnInit {

  showNumberOption = false
  showOTP = false
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

}
