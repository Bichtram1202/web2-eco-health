import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {CarouselComponent} from './carousel/carousel.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { BestSellingProductsComponent } from './best-selling-products/best-selling-products.component';
import { BiscottiComponent } from './biscotti/biscotti.component';
import { MenuComponent } from './menu/menu.component';
import { PageMenuComponent } from './page-menu/page-menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { UserComponent } from './user/user.component';

// import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TintucDetailComponent } from './tintuc-detail/tintuc-detail.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminProductDetailComponent } from './admin-product-detail/admin-product-detail.component';
// import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SanPhamTheoLoaiComponent } from './san-pham-theo-loai/san-pham-theo-loai.component';
import { CacLoaiComponent } from './cac-loai/cac-loai.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { VeChungToiComponent } from './ve-chung-toi/ve-chung-toi.component';
import { MorelessComponent } from './moreless/moreless.component';
import { ProductListLoadMoreComponent } from './product-list-load-more/product-list-load-more.component';
import { EditHoSoComponent } from './edit-ho-so/edit-ho-so.component';
import { AdminPromotionComponent } from './admin-promotion/admin-promotion.component';
// import { AppHeaderComponent } from './app-header.component';


@NgModule({
   declarations: [
    AppComponent,

    RoutingComponent,
    CustomerComponent,
    CustomerDetailComponent,
    CarouselComponent,
    MenuComponent,
    BestSellingProductsComponent,
    BestSellerComponent,
    BiscottiComponent,
    OrdersuccessComponent,
    UserComponent,
    CustomerDetailComponent,
    CartComponent,
    HomepageComponent,
    TintucDetailComponent,
    AdminProductsComponent,
    AdminProductDetailComponent,
    PageMenuComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    // RouterModule.forRoot(routes),
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    CarouselModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
