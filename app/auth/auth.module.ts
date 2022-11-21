import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';    
import {LoginComponent} from '../auth/login/login.component';
import {RegistrationComponent} from '../auth/registration/registration.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { 
  constructor() {
    console.log('auth module loaded');
  }
}
