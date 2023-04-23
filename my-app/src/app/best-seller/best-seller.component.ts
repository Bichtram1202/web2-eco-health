import { Component } from '@angular/core';
import { BiscottiAPIService } from '../biscotti-api.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent {

  biscottis:any;
  errMessage:string='';
  constructor(public _service:BiscottiAPIService){
    this._service.getBiscottis().subscribe({
      next:(data)=>{this.biscottis=data},
      error:(err)=>{this.errMessage=err}
    })
  }

}
