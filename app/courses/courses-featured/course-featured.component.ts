import { Component, OnInit } from '@angular/core';
import { CoursesService} from '../courses.service';

@Component({
  selector: 'app-course-featured',
  templateUrl: './course-featured.component.html',
  styleUrls: ['./course-featured.component.css']
})
export class CourseFeaturedComponent implements OnInit {
  employeeData: any;
  constructor(private coursesservice: CoursesService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.coursesservice.getJEmpSON().subscribe(data => {
      
      this.employeeData = data;
    
  });

  }

}
