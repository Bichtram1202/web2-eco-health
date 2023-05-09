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
import { NgxPaginationModule } from 'ngx-pagination';

import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

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
    CacLoaiComponent,
    ProductDetailComponent,
    VeChungToiComponent,
    MorelessComponent,
    ProductListLoadMoreComponent,
    EditHoSoComponent
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
