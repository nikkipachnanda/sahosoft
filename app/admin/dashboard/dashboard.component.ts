import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../postservice.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavbarService } from '../../navbar.service';
import {EmployeeModal} from '../employee.modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  post: any;
  courseView:any;
  regForm!: FormGroup;
  addCourseForm!: FormGroup;
  datasaved = false;
  searchedKeyword!: string;
  courselist: any;
  error!:string;
  p: number = 1;

  employeeModalObj : EmployeeModal = new EmployeeModal();
  constructor(private postservice: PostserviceService, public nav: NavbarService, private http:HttpClient) { }

  ngOnInit(): void {

    this.nav.show();
    this.getData();
    this.getCourseListData();
    this.regForm = new FormGroup
      ({
        title: new FormControl('', Validators.required),
        createdby: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        image: new FormControl('', Validators.required),
      })

      this.addCourseForm = new FormGroup
      ({
        addcourselist: new FormControl('', Validators.required),

      })


  }

  get title() {
    return this.regForm.get('title');
  }

  get createdby() {
    return this.regForm.get('createdby');
  }

  get description() {
    return this.regForm.get('description');
  }


  get addCourselist() {
    return this.addCourseForm.get('addcourselist');
  }


  getCourseListData() 
  {
    this.postservice.getCourseList().subscribe(data => 
    {
      this.courselist = data;
      console.log(this.courselist);
    },(error) =>
    {
        this.error = error;
        console.log("error " +  this.error);
    });
  }

  getData() {
    this.postservice.getJEmpSON().subscribe(data => {
      this.post = data;
      console.log(this.post);
    },(error) =>
    {
        this.error = error;
        console.log("error " +  this.error);
    });
  }


  delete(id: any) {
    this.postservice.delEmp(id).subscribe(data => {
      this.getData();
    });
  }

  removeCourseList(id: any) {
    this.postservice.delCourseList(id).subscribe(data => {
    });
    setTimeout(() => { this.ngOnInit() }, 100)
  }


  onedit(post: any) {
    this.employeeModalObj.id = post.id;
    this.regForm.controls['title'].setValue(post.title);
    this.regForm.controls['createdby'].setValue(post.createdby);
    this.regForm.controls['description'].setValue(post.description);
    this.regForm.controls['image'].setValue(post.image);
  }

  updateemployee(id:number) 
  {
    
    this.employeeModalObj.image =this.regForm.value.image;
    this.employeeModalObj.title =this.regForm.value.title;
    this.employeeModalObj.createdby =this.regForm.value.createdby;
    this.employeeModalObj.description =this.regForm.value.description;
 
   /* this.http.put<any>("http://localhost:3000/coursepost/"+ this.employeeModalObj.id, this.employeeModalObj )
    .subscribe(data => 
      {
        this.post.id = data.id;
        alert("updated");
        this.datasaved = true;
    }
    ) */
    this.postservice.updateEmployee(this.employeeModalObj, this.employeeModalObj.id )
    .subscribe(res => 
      {
      
       let ref = document.getElementById('cancel');
       ref?.click();
    
    }
    )
    
   /* this.postservice.editEmp(id).subscribe(data => {
      this.getData();
    });*/
    setTimeout(() => { this.ngOnInit() }, 100)
  }

 
 loadCourseViewList() {

  this.postservice.addCourseList(this.addCourseForm.value )
  .subscribe(res => 
    {
      this.courselist.push(this.addCourseForm.value.addcourselist);
  });
 }

  addCourse() 
  {
    //this.courselist.push(courseItem);
    if(this.addCourseForm.value.addcourselist) {
    this.loadCourseViewList();
    setTimeout(() => { this.ngOnInit() }, 100)
  }
   // this.addCourseForm.reset();
  }
  key:string = 'id';
  reverse = false;
  sort(key:any) 
  {
    this.key = key;
    this.reverse = !this.reverse;

  }

}
