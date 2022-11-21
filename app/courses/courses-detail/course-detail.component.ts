import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CoursesService} from '../courses.service';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  employeeData: any;
  constructor(private coursesservice: CoursesService, private route:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id);
      //let id = parseInt();
     //let id =  parseInt(this.route.snapshot.paramMap.get('id'));
      
   //  let id =  this.route.snapshot.paramMap.get('id');
     //   console.log("id no is"+ id);
     window.scrollTo(0, 0);

        this.route.paramMap.subscribe(param =>
          {
           let id  = param.get('id');
            console.log("id"+ id);
           // console.log(JSON.stringify(param));
           this.coursesservice.fetchJEmpSON(param.get('id')).subscribe(params => {
              console.log("route param id child page" + JSON.stringify(params));
               this.employeeData = params;
          })
        });

  }

  backClicked() {
    this.location.back();    
  }

}
