import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
[x: string]: any;
  products: any;
  subtotal = 0;
  delivery = 0;
  grandtotal = 0;
  constructor(private router: Router, public _service: APIService) {}
  ngOnInit(): void {
    this.bind();
  }

  bind() {
    this.products = JSON.parse(sessionStorage.getItem('products') || '[]');
    console.log(this.products);
    this.subtotal = 0;
    this.grandtotal = 0;
    this.delivery = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.subtotal += this.products[i].price * this.products[i].quantity;
    }
    this.grandtotal = this.subtotal + this.delivery;
    if (this.products.length == 0) {
      // this.router.navigate([`/`]);
      alert("Khong co san pham nao trong gio hang")
    }
  }
  quantityChanged(product: any, event: any) {
    let ctrl = <HTMLInputElement>event.target;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === product.id) {
        this.products[i].quantity = parseInt(ctrl.value);
      }
    }
    sessionStorage.setItem('products', JSON.stringify(this.products));
    this.bind();
  }
  deleteProduct(product: any) {
    if (
      confirm('Bạn muốn xóa sản phẩm khỏi giỏ hàng?')
      ) {
      let cartproducts = new Array();
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === product.id) {
        } else {
          cartproducts.push(this.products[i]);
        }
      }
      this.products = cartproducts;
      sessionStorage.setItem('products', JSON.stringify(this.products));
      this.bind();
    }
  }
  checkOut() {
    this.router.navigate(["/checkout"]);
  }
}
