import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../navbar.service';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  title = 'Course list';
  employeeData: any;

  constructor(public nav: NavbarService, private coursesservice: CoursesService) { }

  ngOnInit() {
    this.nav.show();

    window.scrollTo(0, 0);
    this.coursesservice.getJEmpSON().subscribe(data => {

      this.employeeData = data;

    });




  }



}
