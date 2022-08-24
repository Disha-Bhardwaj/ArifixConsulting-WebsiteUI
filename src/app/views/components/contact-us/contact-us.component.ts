import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

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