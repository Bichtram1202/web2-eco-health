import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductAPIService } from '../product-api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import swal from 'sweetalert/typings/core';
import Swal from 'sweetalert2';
import { APIService } from '../api.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  errMessage: string = '';
  cartcount = 0;

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
  carts: any;
  constructor(
    private _service: ProductAPIService,
    private activateRoute: ActivatedRoute,
    public _apiservice: APIService
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
    this.carts = this._apiservice.getCarts();
    // this.productsToLoadMore = this.products.slice(0, 5)
    if(sessionStorage.getItem("products") != null){
    let products = JSON.parse(sessionStorage.getItem("products") || "[]")
    this.cartcount = products.length;
    }
  }

  addQuantity(biscotti:any) {
    biscotti.quantity += 1;
  }

  reduceQuantity(biscotti:any) {
    if (biscotti.quantity > 1) biscotti.quantity -= 1;
  }

  onAddToCart(product: any) {
    let idx = this.carts.findIndex((item: any) => {
      return item.id == product.id;
    });

    if (idx >= 0) {
      this.carts[idx].quantity += 1;
    } else {
      let cartItem: any = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        subtotal: function () {
          return this.price * this.quantity;
        },
      };

      this.carts.push(cartItem);
    }

    //lưu vào storage
    this._apiservice.saveCart(this.carts);
    Swal.fire({
      title: 'Thêm vào giỏ hàng thành công',
      icon: 'success',
    });
    console.log(this.carts);
  }
  biscottis: any;

  getProduct(id: any) {
    this._service.getProduct(id).subscribe((res) => {
      this.product = res;
    });
  }

}
