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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent
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
