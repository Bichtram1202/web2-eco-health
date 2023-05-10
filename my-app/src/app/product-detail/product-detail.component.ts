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

  product:any = new Product();
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

  addQuantity(product:any) {
    product.quantity += 1;
  }

  reduceQuantity(product:any) {
    if (product.quantity > 1) product.quantity -= 1;
  }
  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  onAddToCart(product:any) {
  let Product = {
    id: product.id,
    name: product.name,
    image: product.img_url,
    quantity: product.quantity,
    price: product.price,
  };
  let products = new Array();
  if (sessionStorage.getItem('products') != null) {
    products = JSON.parse(sessionStorage.getItem('products') || '[]');
  }
products.push(product);
  sessionStorage.setItem('products', JSON.stringify(products));
  Swal.fire({
    title: "Thông báo",
    text: "Thêm sản phẩm vào giỏ hàng thành công",
    icon: "success",
    confirmButtonText: "OK"
  });

  let span = document.getElementById('spnCount');
  if (span != null) span.innerText = products.length.toString();
}



  getProduct(id: any) {
    this._service.getProduct(id).subscribe((res) => {
      this.product = res;
    });
  }

}
