import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl, FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { EmplyeeserviceService } from '../employeeservice.service';
import { Employee } from '../employee';
import { HttpClient} from '@angular/common/http';
import { ConfirmedValidator} from '../passwordvalidator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm!: FormGroup;
  datasaved = false;
  massage!: string;
  constructor(private formbuilder: FormBuilder, private http:HttpClient, private employeeservice: EmplyeeserviceService) 
  { }

  ngOnInit() {
   // this.setFormState();
 
    this.regForm = this.formbuilder.group
    ({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      EmailId:  ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {  validator: ConfirmedValidator('Password', 'confirmPassword') })
  }

  
  get FirstName() 
  {
    return this.regForm.get('FirstName');
  }

  get LastName() 
  {
    return this.regForm.get('LastName');
  }

  get EmailId() 
  {
    return this.regForm.get('EmailId');
  }

  get Password() 
  {
    return this.regForm.get('Password');
  }

  get confirmPassword() 
  {
    return this.regForm.get('confirmPassword');
  }


  checkPasswords(control: AbstractControl) { // here we have the 'passwords' group
    let pass = control.value.Password;

    let confirmPass = control.value.confirmPassword;
    if(confirmPass != pass) {
      return { 'notSame': true }
    }

    return null;
   // return pass === confirmPass ? null : { 'notSame': true }
  }

  
  onSubmit() {
    
    let employee = this.regForm.value;

   // this.createemployee(employee);
    this.regForm.reset();
  }
  createemployee() {
    //this.http.post<any>("https://employee-9010e-default-rtdb.firebaseio.com/users.json", this.regForm.value)
    this.http.post<any>("http://localhost:3000/employees", this.regForm.value)
    .subscribe(res=>
      {
      console.log("registration data json"  + JSON.stringify(res));
      this.regForm.reset();
      this.datasaved = true;
        this.massage = "User Created";  

    }
    ) 
  }

 
}
