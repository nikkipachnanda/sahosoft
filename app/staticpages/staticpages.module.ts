import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaticpagesRoutingModule } from './staticpages-routing.module';
import { PageComponent } from './page/page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    PageComponent,
    ContactUsComponent,
    
  ],
  imports: [
    CommonModule,
    StaticpagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StaticpagesModule { }
