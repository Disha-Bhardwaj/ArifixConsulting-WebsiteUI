import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SalonComponent } from './salon/salon.component';

const router: Routes = [
  {path: '', component: SearchComponent}
]

@NgModule({
  declarations: [
    SearchComponent,
    SalonComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(router),
    CommonModule
  ]
})
export class SearchModule {
}
