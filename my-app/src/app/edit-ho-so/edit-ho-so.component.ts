import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-ho-so',
  templateUrl: './edit-ho-so.component.html',
  styleUrls: ['./edit-ho-so.component.css']
})
export class EditHoSoComponent  implements OnInit{

registerForm!:FormGroup;
public submit:string="";
title ='formvalidation';
submitted:boolean =false;
  private _router: any;

constructor(
  private formBuilder: FormBuilder


  ){
}

ngOnInit(){
  //validations
  this.registerForm = this.formBuilder.group({
    firstName:['', Validators.required],
    lastName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(7)]]
  })
}
onSubmit():any{
this.submitted =true;
  if (this.registerForm.invalid){
    return false;
  }

  // alert('success' + JSON.stringify(this.registerForm.value));
  // console.table(this.registerForm.value);

  // this.submit = `${this.registerForm.controls['email'].value} - ${this.registerForm.controls['password'].value}`;
}
}
