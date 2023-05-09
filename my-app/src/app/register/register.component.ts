import { Component } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import{customValidator,passwordValidator}from"../customvalidator"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!:FormGroup
  title = 'angularvalidate';
  submitted=false;
 
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstname:['',[Validators.required]],
      name:['',[Validators.required,Validators.minLength(3),customValidator(/\@|\#|\$|\%|\^|\&/
      )]],
      phone:['',[Validators.required,Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      gender:['',[Validators.required]],
      Dieukhoan:['',[Validators.required]],
      DOB:['',[Validators.required]],


    })
    
  }
  onsubmit(){
    this.submitted = true
    
    if(this.registerForm.invalid){
      return
    }
    alert("Bạn đã đăng ký tài khoản thành công")
  }
}
