import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseFeaturedComponent } from './courses-featured/course-featured.component';
import { CourseListComponent } from './courses-list/course-list.component';
import { CourseDetailComponent } from './courses-detail/course-detail.component';
import { CourseRecentComponent } from './courses-recent/course-recent.component';
import { CourseCategoriesComponent } from './courses-categories/course-categories.component';
import { AppcolorDirective } from '../directive/appcolor.directive';

@NgModule({
  declarations: [
    CourseFeaturedComponent,
    CourseListComponent,
    CourseDetailComponent,
    CourseRecentComponent,
    CourseCategoriesComponent,
    AppcolorDirective
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports: [
    CourseFeaturedComponent
  ]
})
export class CoursesModule {

  constructor() {
    console.log('courses module loaded');
  }
 }
