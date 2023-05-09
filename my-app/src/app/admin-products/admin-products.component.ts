import { Component, OnInit } from '@angular/core';
import { AdminProductApiService } from '../admin-product-api.service';
import { Product, ProductType } from './product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: [
    '../customer/customer.component.css',
    '../customer-detail/customer-detail.component.css',
  ],
})
export class AdminProductsComponent implements OnInit {
  ngOnInit(): void {}
  products: Product[] = [];
  errMessage: string = '';
  p: number = 1;
  public productType = ProductType;

  constructor(public _service: AdminProductApiService) {
    this._service.getProducts().subscribe({
      next: (data) => {
        console.log('data: ', data);

        this.products = data;
      },
      error: (_err) => {
        console.log('_err: ', _err);
        this.errMessage = _err;
      },
    });
  }
}
