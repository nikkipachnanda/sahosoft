import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseListComponent} from './courses-list/course-list.component';
import {CourseDetailComponent} from './courses-detail/course-detail.component';

const routes: Routes = 
 [
  {path:'course',component:CourseListComponent},
  {path:'course/:id',component:CourseDetailComponent}
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
