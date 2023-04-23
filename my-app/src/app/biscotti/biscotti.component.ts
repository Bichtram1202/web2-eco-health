import { Component } from '@angular/core';
import { BiscottiAPIService } from '../biscotti-api.service';

@Component({
  selector: 'app-biscotti',
  templateUrl: './biscotti.component.html',
  styleUrls: ['./biscotti.component.css']
})
export class BiscottiComponent {
  biscottis:any;
  errMessage:string='';
  constructor(public _service:BiscottiAPIService){
    this._service.getBiscottis().subscribe({
      next:(data)=>{this.biscottis=data},
      error:(err)=>{this.errMessage=err}
    })
  }

}
