import { Component } from '@angular/core';
import { ProductAPIService } from '../product-api.service';

@Component({
  selector: 'app-product-list-load-more',
  templateUrl: './product-list-load-more.component.html',
  styleUrls: ['./product-list-load-more.component.css']
})
export class ProductListLoadMoreComponent {
  ngOnInit(): void {
  }
  products: any;
  productsLoadMore: any
  errMessage: string = '';
  loadMore: number = 6;
  constructor(public _service: ProductAPIService) {
    this._service.getProducts(0).subscribe({
      next: (data) => {
        this.products = data;
        this.productsLoadMore = this.products.slice(0, this.loadMore)
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  handleLoadMore(){
    this.loadMore += 6;
    console.log(this.loadMore);
    this.productsLoadMore = this.products.slice(0, this.loadMore)
  }
}
