import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./views/components/login/login.component";
import { HomeComponent } from "./views/components/home/home.component";
import { ContactUsComponent } from './views/components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './views/components/page-not-found/page-not-found.component';
import { AboutUsComponent } from './views/components/about-us/about-us.component';
import { PrivicyComponent } from './views/components/privicy/privicy.component';
import { TermsConditionComponent } from './views/components/terms-condition/terms-condition.component';
import { ResetPasswordComponent } from './views/components/reset-password/reset-password.component';
import { ForgotPassEmailComponent } from './views/components/forgot-pass-email/forgot-pass-email.component';
import { MyDetailCustomerComponent } from './views/components/my-detail-customer/my-detail-customer.component';
import { FeaturesComponent } from './views/components/features/features.component';
import { ServiceComponent } from './views/components/service/service.component';
import { MyBookingComponent } from './views/components/my-booking/my-booking.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'privicy', component: PrivicyComponent },
  { path: 'terms-and-conditions', component: TermsConditionComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'forgot-password', component: ForgotPassEmailComponent },
  { path: 'my-detail-customer', component: MyDetailCustomerComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'my-bookings', component: MyBookingComponent },
  { path: 'search', loadChildren: () => import('./views/components/search/search.module').then(m => m.SearchModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
