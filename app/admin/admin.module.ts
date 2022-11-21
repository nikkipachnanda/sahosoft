import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarService } from '../navbar.service';
import {PostComponent} from '../admin/post/post.component';
import {DashboardComponent} from '../admin/dashboard/dashboard.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CourselistivewComponent } from '../admin/courselistivew/courselistivew.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe'
@NgModule({
  declarations: [
    PostComponent,
    DashboardComponent,
    CourselistivewComponent

  ],
  imports: [
  CommonModule,
   AdminRoutingModule,
   FormsModule,
   ReactiveFormsModule,
   Ng2SearchPipeModule,
   NgxPaginationModule,
   Ng2OrderModule
  ]
})
export class AdminModule { 

  constructor(public nav: NavbarService) {
    this.nav.show();
    console.log('company dashboard and post module loaded');
  }

}
