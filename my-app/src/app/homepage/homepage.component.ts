import { Component, OnInit } from '@angular/core';
import { TypicalAPIService } from '../typical-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {
  products:any;
  errMessage:string='';
  constructor(public _service:TypicalAPIService){
    this._service.getProducts().subscribe({
      next:(data)=>{this.products=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  
}
