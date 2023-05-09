import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AdminProductDetailComponent } from './admin-product-detail/admin-product-detail.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { BestSellingProductsComponent } from './best-selling-products/best-selling-products.component';
import { BiscottiComponent } from './biscotti/biscotti.component';
import { MenuComponent } from './menu/menu.component';
import { PageMenuComponent } from './page-menu/page-menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
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
    AdminProductsComponent,
    AdminProductDetailComponent,
    PageMenuComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
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
