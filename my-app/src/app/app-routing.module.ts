import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
import { BestSellingProductsComponent } from './best-selling-products/best-selling-products.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { BiscottiComponent } from './biscotti/biscotti.component';
import { CartComponent } from './cart/cart.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminProductDetailComponent } from './admin-product-detail/admin-product-detail.component';
import { PageMenuComponent } from './page-menu/page-menu.component';


const routes: Routes = [
  { path: '', redirectTo: 'page-menu', pathMatch: 'full' },
  // Mac dinh truy cap vao trang chu se nhay den trang page-menu
  { path: 'customers', component: CustomerComponent },
  { path: 'customer/:id', component: CustomerDetailComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'best-selling-products', component: BestSellingProductsComponent },
  { path: 'best-seller', component: BestSellerComponent },
  { path: 'biscotti', component: BiscottiComponent },
   {path: 'page-menu', component: PageMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponent = [
  CustomerComponent,
  CustomerDetailComponent,
  CarouselComponent,
  MenuComponent,
  BestSellingProductsComponent,
  BestSellerComponent,
  BiscottiComponent,
  AdminProductsComponent,
  AdminProductDetailComponent,
  PageMenuComponent,

];
