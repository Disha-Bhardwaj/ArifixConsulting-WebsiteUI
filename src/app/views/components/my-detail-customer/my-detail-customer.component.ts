import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-detail-customer',
  templateUrl: './my-detail-customer.component.html',
  styleUrls: ['./my-detail-customer.component.css']
})
export class MyDetailCustomerComponent implements OnInit {
  contactUsForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.formInitialize();
  }
  // form initialize
  formInitialize() {
    this.contactUsForm = this.fb.group({
      name: [''],
      email: [''],
      message: ['']
    })
  }
  // submit information
  sendContactInfo() {
    console.log('Info sent ', this.contactUsForm?.value)
  }
}
