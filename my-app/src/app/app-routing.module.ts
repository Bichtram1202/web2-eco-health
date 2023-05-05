import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  { path: 'customers', component: CustomerComponent },
  { path: 'customer/:id', component: CustomerDetailComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'best-selling-products', component: BestSellingProductsComponent },
  { path: 'best-seller', component: BestSellerComponent },
  { path: 'biscotti', component: BiscottiComponent },
  { path: 'cart', component: CartComponent },
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {}
export const RoutingComponent = [
  HomepageComponent,
  CustomerComponent,
  CustomerDetailComponent,
  CarouselComponent,
  MenuComponent,
  BestSellingProductsComponent,
  BestSellerComponent,
  BiscottiComponent,
  LoginComponent
  
];
