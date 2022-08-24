import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './views/common/header/header.component';
import {FooterComponent} from './views/common/footer/footer.component';
import {LoginComponent} from './views/components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { HomeComponent } from './views/components/home/home.component';
import { ContactUsComponent } from './views/components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './views/components/page-not-found/page-not-found.component';
import { AboutUsComponent } from './views/components/about-us/about-us.component';
import { TermsConditionComponent } from './views/components/terms-condition/terms-condition.component';
import { PrivicyComponent } from './views/components/privicy/privicy.component';
import { ForgotPassEmailComponent } from './views/components/forgot-pass-email/forgot-pass-email.component';
import { ResetPasswordComponent } from './views/components/reset-password/reset-password.component';
import { ServiceComponent } from './views/components/service/service.component';
import { MyDetailCustomerComponent } from './views/components/my-detail-customer/my-detail-customer.component';
import { FeaturesComponent } from './views/components/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    TermsConditionComponent,
    PrivicyComponent,
    ForgotPassEmailComponent,
    ResetPasswordComponent,
    ServiceComponent,
    MyDetailCustomerComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
