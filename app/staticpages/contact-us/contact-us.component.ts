import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { StaticpagesService } from '../staticpages.service';
import { HttpClient } from '@angular/common/http';
import {ContactusModal} from '../contactus.modal';
import { UsernameValidator } from './validator';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm!:FormGroup;
  message!:any;
  datasaved = false;
  cityData!:any;
  existEmail!:any
  constructor(private StaticpagesService: StaticpagesService,  private http:HttpClient,  private fb: FormBuilder) 
  { }
  contactusModal : ContactusModal = new ContactusModal();


  ngOnInit(): void {
  
    this.getCityData();
   /* this.contactForm = new FormGroup
    ({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ],
      ),
      phone: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })*/

    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)],
      [UsernameValidator.createValidator(this.StaticpagesService)]
    ],
      email: ['', [Validators.required, Validators.email, this.emailDuplicateValueCheck.bind(this)], 
            ],
      phone: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required]
    })
  }

  emailAlredyExist = "";
  Emailcheck!:boolean;

  getCityData() 
  {
    this.StaticpagesService.getJCitySON().subscribe(data => {
      
      this.cityData = data;
    });
  }

  get name() 
  {
   return this.contactForm.get("name");
  }

  emailDuplicateValueCheck(control: FormControl)
  {
    this.existEmail = false;

    this.http.get<any>("http://localhost:3000/contactuspost")
    .subscribe(res=>
      {
        let userval = control.value;
        const user= res.find((a:any)=> 
        {
          return a.email === userval;
         
        });

        if (user) {
        //  this.emailAlredyExist = "Email Already Exist";
          return {'emailFound': true};
        }
     
         return null;
          
        
        
        // result = res.find( ({ name }) => name === 'cherries' );
       /* this.Emailcheck = res;
        if (this.Emailcheck.email === this.contactForm.value.email) {
          this.emailAlredyExist = "Email Alredy Exist";
        }
        else{
          this.emailAlredyExist = "";
        }*/
        
        
      });
  }

 
  postContact() 
  {
    
    this.contactusModal.name =this.contactForm.value.name;
    this.contactusModal.email =this.contactForm.value.email;
    this.contactusModal.phone =this.contactForm.value.phone;
    this.contactusModal.message =this.contactForm.value.description;
    this.contactusModal.city = this.contactForm.value.city;
 
   /* this.http.put<any>("http://localhost:3000/coursepost/"+ this.employeeModalObj.id, this.employeeModalObj )
    .subscribe(data => 
      {
        this.post.id = data.id;
        alert("updated");
        this.datasaved = true;
    }
    ) */
    this.StaticpagesService.createContact(this.contactusModal )
    .subscribe(res => 
      {
      
        console.log("contact created" + JSON.stringify(res));
        this.datasaved = true;
        this.message= "Contact Created";
    }
    )
    
   /* this.postservice.editEmp(id).subscribe(data => {
      this.getData();
    });*/
    setTimeout(() => { this.ngOnInit() }, 100)
  }

}
