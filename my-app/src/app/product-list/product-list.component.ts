import { Component } from '@angular/core';
import { ProductAPIService } from '../product-api.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  ngOnInit(): void {
    this.getProductList();
  }
  getProductList() {

  }
  type: string='';
  products:any;
  errMessage:string='';
  constructor(public _service: ProductAPIService){
    this._service.getProductCategories('').subscribe({
      next:(data)=>{this.products=data},
      error:(err)=>{this.errMessage=err}
    })
  }}
