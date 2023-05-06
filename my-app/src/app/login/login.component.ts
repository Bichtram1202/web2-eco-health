import { Component } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registerForm!:FormGroup
  title = 'angularvalidate';
  submitted=false;
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      password:['',[Validators.required,Validators.minLength(4)]],
      NumberPhone:['',[Validators.required,Validators.maxLength(10)]],
    })   
  }
  onsubmit(){
    this.submitted = true  
    if(this.registerForm.invalid){
      return
    }
    alert("Success")
  }
}

