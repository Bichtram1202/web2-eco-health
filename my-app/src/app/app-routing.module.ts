import { Component, NgModule } from '@angular/core';
 import{ Router, RouterModule, ROUTES, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
import { BestSellingProductsComponent } from './best-selling-products/best-selling-products.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { BiscottiComponent } from './biscotti/biscotti.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { TintucDetailComponent } from './tintuc-detail/tintuc-detail.component';
import { RegisterComponent } from './register/register.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminProductDetailComponent } from './admin-product-detail/admin-product-detail.component';
import { PageMenuComponent } from './page-menu/page-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SanPhamTheoLoaiComponent } from './san-pham-theo-loai/san-pham-theo-loai.component';
import { CacLoaiComponent } from './cac-loai/cac-loai.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { VeChungToiComponent } from './ve-chung-toi/ve-chung-toi.component';
import { EditHoSoComponent } from './edit-ho-so/edit-ho-so.component';
import { AdminPromotionComponent } from './admin-promotion/admin-promotion.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { ProductTypicalDetailComponent } from './product-typical-detail/product-typical-detail.component';



const routes: Routes = [
  { path: 'customers', component: CustomerComponent },
  { path: 'customer/:id', component: CustomerDetailComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'best-selling-products', component: BestSellingProductsComponent },
  { path: 'best-seller', component: BestSellerComponent },
  { path: 'biscotti', component: BiscottiComponent },
  { path: 'cart', component: CartComponent },
  { path: 'adminproducts', component: AdminProductsComponent },
  { path: 'product/:id', component: AdminProductDetailComponent },
   {path: 'page-menu', component: PageMenuComponent},
   {path: 'products', component: ProductListComponent},
   {path: 'products/:id', component: ProductDetailComponent},
   {path: 'checkout', component: CheckoutComponent},
   {path: 'ordersuccess', component: OrdersuccessComponent},
   {path: 'login', component:LoginComponent},

   {path:'loai/:id',component: SanPhamTheoLoaiComponent},
   {path:'cac-loai', component: CacLoaiComponent},
   {path:'ve-chung-toi', component: VeChungToiComponent},
   {path:'edit-ho-so', component: EditHoSoComponent},
 {path:'Homepage', component:HomepageComponent},

  { path: 'page-menu', component: PageMenuComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'loai/:id', component: SanPhamTheoLoaiComponent },
  { path: 'cac-loai', component: CacLoaiComponent },
  { path: 'admin-promtion', component: AdminPromotionComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'user', component:UserComponent },
  {path: 'producttypical/:id' , component: ProductTypicalDetailComponent},
  {path: 'tintuc', component:TinTucComponent},
  {path: 'tintuc-detail', component:TintucDetailComponent},
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {


}
export const RoutingComponent = [
  HomepageComponent,
  CustomerComponent,
  CustomerDetailComponent,
  CarouselComponent,
  MenuComponent,
  BestSellingProductsComponent,
  BestSellerComponent,
  BiscottiComponent,
  LoginComponent,
  TinTucComponent,
  TintucDetailComponent,
  RegisterComponent,
  AdminProductsComponent,
  AdminProductDetailComponent,
  PageMenuComponent,
  ProductListComponent,
  SanPhamTheoLoaiComponent,
  CacLoaiComponent,
  ProductDetailComponent,
  VeChungToiComponent,
  EditHoSoComponent,
  AdminPromotionComponent,
  HeaderComponent,
  UserComponent,
  HomepageComponent,
  CheckoutComponent,
  OrdersuccessComponent,
  ProductTypicalDetailComponent
];
