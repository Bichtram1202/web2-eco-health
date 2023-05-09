import { Component } from '@angular/core';
import { BiscottiAPIService } from '../biscotti-api.service';
import swal from 'sweetalert/typings/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-biscotti',
  templateUrl: './biscotti.component.html',
  styleUrls: ['./biscotti.component.css'],
})
export class BiscottiComponent {
  biscottis: any;
  errMessage: string = '';
  constructor(public _service: BiscottiAPIService) {
    this._service.getBiscottis().subscribe({
      next: (data) => {
        data.forEach((element:any) => {
          element.quantity = 1
        });
        this.biscottis = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  addQuantity(biscotti:any) {
    biscotti.quantity += 1;
  }

  reduceQuantity(biscotti:any) {
    if (biscotti.quantity > 1) biscotti.quantity -= 1;
  }

  addToCart(biscotti:any) {
    let product = {
      id: biscotti.id,
      name: biscotti.name,
      image: biscotti.img_url,
      quantity: biscotti.quantity,
      price: biscotti.price,
    };
    let products = new Array();
    if (sessionStorage.getItem('products') != null) {
      products = JSON.parse(sessionStorage.getItem('products') || '[]');
    }

    // let added = false;
    // for(let i=0; i<products.length; i++){
    //   if(products[i].id == product.id){
    //     alert("Sản phẩm đã tồn tại trong giỏ hàng")
    //     added = true;
    //   }
    // }
    //   if (!added){
    //     products.push(product);
    //     sessionStorage.setItem("products",JSON.stringify(products));
    //     alert("Thêm sản phẩm vào giỏ hàng thành công");
    //     let span = document.getElementById("spnCount");
    //     if(span != null)
    //       span.innerText = products.length.toString()
    //   }

    products.push(product);
    sessionStorage.setItem('products', JSON.stringify(products));
    // alert("Thêm sản phẩm vào giỏ hàng thành công");
    Swal.fire({
      title: "Thông báo",
      text: "Thêm sản phẩm vào giỏ hàng thành công",
      icon: "success",
      confirmButtonText: "OK"
    });

    let span = document.getElementById('spnCount');
    if (span != null) span.innerText = products.length.toString();
  }
}
