import { Component, OnInit } from '@angular/core';
import {FormControl,Validator,FormGroup,FormBuilder, Validators} from '@angular/forms';
import {RegistrationRequest} from 'src/app/models/registration-request';
import {PasswordStrengthChecker} from 'src/app/utility/custom-validation/password-strength-checker'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  IsShow:boolean;
  cutomerRegistration:RegistrationRequest;
  constructor(private formbuilder:FormBuilder) {
    this.IsShow=false;
   }

  registrationForm:any= this.formbuilder.group({
  firstName:new FormControl('',[Validators.required]),
  lastName:new FormControl('',[Validators.required]),
  email :new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.minLength(8),PasswordStrengthChecker]),
  cnf_password: new FormControl('',[Validators.required,Validators.minLength(8),PasswordStrengthChecker])
  })

  ngOnInit(): void {
  }

  ShowForm(){
this.IsShow=true;
  }

}
