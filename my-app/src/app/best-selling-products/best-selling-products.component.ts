import { Component } from '@angular/core';
import { BiscottiAPIService } from '../biscotti-api.service';

@Component({
  selector: 'app-best-selling-products',
  templateUrl: './best-selling-products.component.html',
  styleUrls: ['./best-selling-products.component.css']
})
export class BestSellingProductsComponent {
  biscottis:any;
  errMessage:string='';
  constructor(public _service:BiscottiAPIService){
    this._service.getBiscottis().subscribe({
      next:(data)=>{this.biscottis=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
