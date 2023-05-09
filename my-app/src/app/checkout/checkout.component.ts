import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../api.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  products: any;
  subtotal = 0;
  delivery = 35000;
  grandtotal = 0;
  checkOutForm = new FormGroup({
    address: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    pincode: new FormControl('',Validators.required)
  });

  constructor(private router: Router, public _service: APIService) {}
  ngOnInit(): void {
    if (sessionStorage.getItem('usertype') == null) {
      // Tam thoi chua co login thi comment chu khong no khong reload dc
      // this.router.navigate([`/login`]);
    }
    if (sessionStorage.getItem('usertype') != 'user') {
      // this.router.navigate([`/login`]);
    }

    this.bind();
  }

  bind() {
    // cái này phải đợi bên login vs register rồi mới thêm vào
    // this.formdata = new FormGroup({
    //   userid:new FormControl(sessionStorage.getItem("id")),
    //   address:new FormControl("", Validators.required),
    //   city:new FormControl("", Validators.required),
    //   state:new FormControl("", Validators.required),
    //   pincode:new FormControl("", Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(6)]))
    // },

    this.products = JSON.parse(sessionStorage.getItem('products') || '[]');
    this.subtotal = 0;
    this.grandtotal = 0;
    this.delivery = 35000;
    for (let i = 0; i < this.products.length; i++) {
      this.subtotal += this.products[i].price * this.products[i].quantity;
    }
    this.grandtotal = this.subtotal + this.delivery;
    if (this.products.length == 0) {
      this.router.navigate([`/`]);
    }
  }

  //data của order
  submit(data: any) {
    let orderproducts = new Array();
    this.products.forEach((product: any) => {
      let orderproduct = {
        productid: product.id,
        name_product: product.name,
        img1_url: product.image,
        price: product.price,
        quantity: product.quantity,
        total: product.quantity * product.price,
      };
      orderproducts.push(orderproduct);
    });

    let object = {
      CustomerId: data.CustomerId,
      address: data.address,
      city: data.city,
      state: data.state,
      pincode: data.pincode,
      total_price: this.subtotal,
      shipping_fee: this.delivery,
      total_order: this.grandtotal,
      products: orderproducts,
    };
    // this._service.post("/order/place", {data:object}).subscribe((result:any)=>{

    // })
  }
  onSubmit(form: NgForm) {
    console.log(form);
    // Logic: ham subcribe trong phan next neu co (tuc la khong co error) tu server thi tien hanh chuyen sang trang orderSuccess
    setTimeout(() => {
      this.router.navigate(["ordersuccess"]);
      // Sau 2 giay chuyen trang
    },2000)

  }
}
