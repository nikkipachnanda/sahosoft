import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {PostComponent} from './admin/post/post.component';
import {CourseListComponent} from './courses/courses-list/course-list.component';
import {LoginComponent} from './auth/login/login.component';
import { PageComponent } from './staticpages/page/page.component';
import { ActivateGuard } from './activate.guard';

const routes: Routes = [
 {path:'dashboard', component:DashboardComponent},
  //{path:'about', component:PageComponent},
  {path:'login', component:LoginComponent},
  //{path:'dashboard',
 // loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule)},
  {path:'course',component:CourseListComponent, canActivate:[ActivateGuard]},
  {path:'post',component:PostComponent}
  //{path:'**',component:PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
