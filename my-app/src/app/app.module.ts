import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { HomeComponent } from './home/home.component';
import { PageMenuComponent } from './page-menu/page-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SanPhamTheoLoaiComponent } from './san-pham-theo-loai/san-pham-theo-loai.component';
import { CacLoaiComponent } from './cac-loai/cac-loai.component';
@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    CustomerComponent,
    CustomerDetailComponent,
    HomeComponent,
    PageMenuComponent,
    ProductListComponent,
    SanPhamTheoLoaiComponent,
    CacLoaiComponent
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
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
