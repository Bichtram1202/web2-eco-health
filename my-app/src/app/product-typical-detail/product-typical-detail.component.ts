import { Component, OnInit } from '@angular/core';
import { ProductTypical } from '../typicalproduct';
import { ActivatedRoute } from '@angular/router';
import { TypicalAPIService } from '../typical-api.service';
import { ProductAPIService } from '../product-api.service';
import { Product } from '../Product';


@Component({
  selector: 'app-product-typical-detail',
  templateUrl: './product-typical-detail.component.html',
  styleUrls: ['./product-typical-detail.component.css']
})
export class ProductTypicalDetailComponent implements OnInit {

  errMessage: string = '';
  producttypical:any;
  quantity: number = 1;
  p: number = 1;
  type: string = '';
  products: any;
  product:any = new Product();

  constructor(
    private _service: TypicalAPIService) {

  }
  ngOnInit(): void {

  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }


getProductTypical(id: string) {
    this._service. getProductTypical(id).subscribe({
      next:(data)=>{this.producttypical=data},
      error:(err)=>{this.errMessage=err}
    })
  }


}

