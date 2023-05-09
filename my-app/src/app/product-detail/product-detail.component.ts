import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductAPIService } from '../product-api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  errMessage: string = '';
  id: any;
  product = new Product();
  quantity: number = 1;
  p: number = 1;
  currentPage = 1; // trang hiện tại
  visibleItems = 6; // số sản phẩm hiển thị ban đầu
  itemsPerPage = 6; // số sản phẩm hiển thị trên mỗi trang

  type: string = '';
  products: any;
  loadMore: number = 5;
  productsToLoadMore: any;

  constructor(
    private _service: ProductAPIService,
    private activateRoute: ActivatedRoute
  ) {
    // this._service.getProducts(0).subscribe({
    //   next: (data) => {
    //     // this.products = data;
    //   },
    //   error: (err) => {
    //     this.errMessage = err;
    //   },
    // });
  }
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.getProduct(this.id);
    // this.productsToLoadMore = this.products.slice(0, 5)
  }

  getProduct(id: any) {
    this._service.getProduct(id).subscribe((res) => {
      this.product = res;
    });
  }
  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
