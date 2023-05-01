import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartList } from '../Model/Cart.DataSource';
import { Order } from '../Model/Order';
import { OrderList } from '../Model/Order.DataSource';
import { User } from '../Model/User';
import { UserList } from '../Model/User.DataSource';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  Swal: any;
  index: any;
  orderid: any = 0;
  totalPrice: any = 0;
  length: any = CartList.length;
  user: User | any;
  order: Order | any;
  list: Order[] | any;
  control: boolean = true;
  constructor(private cartService: CartService, private router: Router) {
    this.totalPrice = 0;
    CartList.filter((x) => x.Status == true).forEach((item) => {
      this.totalPrice += item.TotalPrice;
    });
  }
  confirmOrder(userid: any | undefined) {
    this.control = true;
    this.list = CartList;

    this.user = UserList.find((x) => x.FullName == userid);

    CartList.filter((x) => x.Status == true).forEach((item) => {
      item.Item.sold -= item.Quantity;
      if (item.Item.sold < 0) {
        this.control = false;
      }
    });

    if (this.control == true) {
      if (CartList.filter((x) => x.Status == true).length > 0) {
        this.order = new Order(this.user, this.list, this.totalPrice);
        this.totalPrice = 0;
        OrderList.push(this.order);
        CartList.forEach((item) => {
          item.Status = false;
        });
        this.router.navigate(['/ordersuccess']);
        //Swal.fire("Xác nhận đặt hàng!", "Đặt hàng thành công", "success");
        alert('Xác nhận đặt hàng!. Đặt hàng thành công');
      } else {
        // Swal.fire("Đơn hàng chưa được xác nhận", "Đặt hàng không thành công", "error");
        alert('Đơn hàng chưa được xác nhận. Đặt hàng không thành công');
      }
    } else {
      CartList.filter((x) => x.Status == true).forEach((item) => {
        item.Item.sold -= -item.Quantity;
        if (item.Item.sold < 0) {
          this.control = false;
        }
      });
      // Swal.fire("Đơn hàng chưa được xác nhận", "Sản phẩm đã hết hàng!", "error");
      alert('Đơn hàng chưa được xác nhận. Sản phẩm đã hết hàng');
    }
  }
  plusItem(id: any) {
    CartList.filter((x) => x.Status == true).forEach((item) => {
      if (item.Id == id) {
        if (item.Item.sold > item.Quantity) {
          item.Quantity++;
          item.TotalPrice += item.Item.Price;
          this.totalPrice += item.Item.Price;
        }
      }
    });
  }
  minusItem(id: any) {
    CartList.filter((x) => x.Status == true).forEach((item) => {
      if (item.Id == id) {
        if (item.Quantity >= 2) {
          item.Quantity--;
          item.TotalPrice -= item.Item.Price;
          this.totalPrice -= item.Item.Price;
        }
      }
    });
  }
  removeCart(id: any) {
    this.Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel',
    }).then((result: any) => {
      if (result.value) {
        this.totalPrice = 0;
        CartList[id].Status = false;
        CartList.filter((x) => x.Status == true).forEach((item) => {
          this.totalPrice += item.TotalPrice;
        });
        this.Swal.fire(
          'Thành công',
          'Đã xóa sản phẩm ra khỏi giỏ hàng!',
          'success'
        );
      } else if (result.dismiss === this.Swal.DismissReason.cancel) {
        this.Swal.fire('Đã hủy', 'error');
      }
    });
  }
  cancelOrder() {
    if (CartList.filter((x) => x.Status == true).length > 0) {
      this.Swal.fire({
        title: 'Bạn có chắc chắn muốn xóa giỏ hàng?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Cancel',
      }).then((result: any) => {
        if (result.value) {
          this.totalPrice = 0;
          CartList.filter((x) => x.Status == true).forEach((item) => {
            item.Status = false;
          });
          this.Swal.fire('Thành công', 'Xóa giỏ hàng thành công!', 'success');
        } else if (result.dismiss === this.Swal.DismissReason.cancel) {
          this.Swal.fire('Đã hủy', 'error');
        }
      });
    } else {
      // Swal.fire("Bạn không có bất kỳ món hàng nào trong giỏ hàng của mình", "error");
      alert('Bạn không có bất kỳ món hàng nào trong giỏ hàng của mình');
    }
  }

  getCartList() {
    return CartList.filter((x) => x.Status == true);
  }
  // getUserList() {
  //   return UserList;
  // }
}
