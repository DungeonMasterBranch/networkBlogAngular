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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgxWebstorageModule} from 'ngx-webstorage';
import { HomeComponent } from './app/home/home.component';
import { AddPostComponent } from './app/add-post/add-post.component';
import {EditorModule} from "@tinymce/tinymce-angular";
import {HttpClientInterceptor} from "./app/http-client-interceptor";
import { PostComponent } from './app/post/post.component';
import {AuthGuard} from "./app/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSuccessComponent,
    HomeComponent,
    AddPostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path: 'post/:id', component: PostComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'register-success', component: RegisterSuccessComponent},
      {path: 'login', component: LoginComponent},
      {path: 'home', component:HomeComponent},
      {path: 'add-post', component:AddPostComponent, canActivate: [AuthGuard]}
    ]),
    HttpClientModule,
    EditorModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
