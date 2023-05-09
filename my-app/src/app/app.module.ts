import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { BestSellingProductsComponent } from './best-selling-products/best-selling-products.component';
import { BiscottiComponent } from './biscotti/biscotti.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { UserComponent } from './user/user.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { CartComponent } from './cart/cart.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminProductDetailComponent } from './admin-product-detail/admin-product-detail.component';

import { HomeComponent } from './home/home.component';
import { PageMenuComponent } from './page-menu/page-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SanPhamTheoLoaiComponent } from './san-pham-theo-loai/san-pham-theo-loai.component';
import { CacLoaiComponent } from './cac-loai/cac-loai.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { VeChungToiComponent } from './ve-chung-toi/ve-chung-toi.component';
import { MorelessComponent } from './moreless/moreless.component';
import { ProductListLoadMoreComponent } from './product-list-load-more/product-list-load-more.component';
import { EditHoSoComponent } from './edit-ho-so/edit-ho-so.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AdminPromotionComponent } from './admin-promotion/admin-promotion.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    CustomerComponent,
    CustomerDetailComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    TinTucComponent,
    BestSellerComponent,
    BestSellingProductsComponent,
    BiscottiComponent,
    CarouselComponent,
    MenuComponent,
    OrdersuccessComponent,
    UserComponent,
    OrderdetailComponent,
    CartComponent,
    AdminProductsComponent,
    AdminProductDetailComponent,
    HomeComponent,
    PageMenuComponent,
    ProductListComponent,
    SanPhamTheoLoaiComponent,
    CacLoaiComponent,
    ProductDetailComponent,
    VeChungToiComponent,
    MorelessComponent,
    ProductListLoadMoreComponent,
    EditHoSoComponent,
    AdminPromotionComponent,
  ],
  imports: [
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
