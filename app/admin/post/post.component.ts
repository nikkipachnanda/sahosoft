import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl, FormGroup } from '@angular/forms';
import { PostserviceService } from '../postservice.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  regForm!: FormGroup;
  datasaved = false;
  message!: string;
  fileToUpload: File | any = null;
  postimage:string ="../../../assets/images/preview.jpg";
  constructor(private formbuilder: FormBuilder, private http:HttpClient, private employeeservice: PostserviceService) { }
  ngOnInit(): void {

  
    this.regForm = new FormGroup
    ({
      title: new FormControl('', Validators.required),
      createdby:  new FormControl('', Validators.required),
      description:  new FormControl('',Validators.required),
      image:  new FormControl('',Validators.required),
    })



  }

  

  handleFileInput(file:FileList)
  {
    this.fileToUpload = file.item(0);
      console.log("file name" + file);
     // this.fileToUpload.value.replace("C:\\fakepath\\", "");
    var reader = new FileReader();
    reader.onload = (event:any)=> 
    {
      this.postimage = event.target.result;
    }
      reader.readAsDataURL(this.fileToUpload);
  }


  get title() 
  {
    return this.regForm.get('title');
  }

  get createdby() 
  {
    return this.regForm.get('createdby');
  }

  get description() 
  {
    return this.regForm.get('description');
  }

  get image() 
  {
  
    return this.regForm.get('image');
   
  }

  postCourse() {
   // const formData:FormData = new FormData();
   // formData.append('image',this.fileToUpload, this.fileToUpload ==null? null: this.fileToUpload.name);
    this.http.post<any>("http://localhost:3000/coursepost", this.regForm.value )
    .subscribe(res=>
      {
      this.regForm.reset();
      this.datasaved = true;
      this.message = "Course Created";       
    }
    ) 
  }

 

}
