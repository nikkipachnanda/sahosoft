import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesModule } from './courses/courses.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import {LoginComponent} from './auth/login/login.component';
//import {RegistrationComponent} from './auth/registration/registration.component';
//import {PostComponent} from './admin/post/post.component';
//import {DashboardComponent} from './admin/dashboard/dashboard.component';
//import {ContactUsComponent} from './staticpages/contact-us/contact-us.component';
import { EmplyeeserviceService } from './auth/employeeservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthguardComponent } from './authguard/authguard.component';
import { ActivateGuard } from './activate.guard';
import { UserService } from './user.service';

//import { Ng2SearchPipeModule } from 'ng2-search-filter';

//import { AppcolorDirective } from './directive/appcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    //RegistrationComponent,
    //LoginComponent,
    //PostComponent,
   // DashboardComponent,
    AuthguardComponent

 //   AppcolorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StaticpagesModule,
    AdminModule,
    AuthModule,
    CoursesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
    //Ng2SearchPipeModule 
  ],
  providers: [EmplyeeserviceService, HttpClientModule, ActivateGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
