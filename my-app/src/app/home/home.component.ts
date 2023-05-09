import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { APIService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  carts:any = [];
  errMessage:string=''



  constructor(public _service: APIService) {  }

  ngOnInit(): void {
    this.carts = this._service.getCarts();
  }

  // carts: any = this._service.getCarts();
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
    this._service.saveCart(this.carts);
    Swal.fire({
      title: 'Thêm vào giỏ hàng thành công',
      icon: 'success'
    });


    console.log(this.carts);


  }
}
