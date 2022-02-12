import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./app/header/header.component";
import {RegisterComponent} from "./app/auth/register/register.component";
import {LoginComponent} from "./app/auth/login/login.component";
import {RegisterSuccessComponent} from "./app/auth/register-success/register-success.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
//import { AuthComponent } from './app/auth/;
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {NgxWebstorageModule} from 'ngx-webstorage';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot([
      {path: 'register', component: RegisterComponent},
      {path: 'register-success', component: RegisterSuccessComponent},
      {path: 'login', component: LoginComponent},
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
