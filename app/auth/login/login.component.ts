import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import { NavbarService } from '../../navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (private formBuiilder:FormBuilder, private http:HttpClient, private router:Router, public nav: NavbarService
    ) { }

  loginForm!: FormGroup;
  usernotfound! : boolean;
  
  ngOnInit() {
   // user : this.loginForm.value.email;
    this.nav.hide();
    //localStorage.removeItem('user');
    
    this.loginForm = new FormGroup
    ({
      email: new FormControl('', [Validators.required, Validators.email]),
      password:  new FormControl('', Validators.required),
    })
   
  }

  get email() 
  {
    return this.loginForm.get('email');
  }

  get password() 
  {
    return this.loginForm.get('password');
  }

  login() 
  {
   
   // this.http.get<any>("https://employee-9010e-default-rtdb.firebaseio.com/users.json")
   this.http.get<any>("http://localhost:3000/employees")
    .subscribe(res=>
      {
        console.log(res);
        const user = res.find((a:any)=> 
        {
          return a.EmailId === this.loginForm.value.email && a.Password === this.loginForm.value.password;
        });
      if (user) 
      {
        localStorage.setItem('user', JSON.stringify(user.EmailId));
     //   this.loginForm.reset();
      
        this.router.navigate(['dashboard']);
     
      } 
      else 
      {
        this.usernotfound = true;
      }
        
    });
  }

  

}
